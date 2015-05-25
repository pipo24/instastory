# Rails4 doesn't create un-fingerprinted assets anymore
# Let's try to hook in and make
# symlinks. 
#
# list of what file(globs) need non-digest-named copies is kept in
#     StoreIt::Application.config.non_digest_named_assets
# defined in lib/initializers/assets.rb, but app can modify it if desired. 

require 'pathname'


# Every time assets:precompile is called, trigger store_it:create_non_digest_assets afterwards. 
Rake::Task["assets:precompile"].enhance do
  Rake::Task["store_it:create_non_digest_assets"].invoke
end

namespace :store_it do 

  # This seems to be basically how ordinary asset precompile
  # is logging, ugh. 
  logger = Logger.new($stderr)  

  # Based on suggestion at https://github.com/rails/sprockets-rails/issues/49#issuecomment-20535134
  # but limited to files in store_it's namespaced asset directories. 
  task :create_non_digest_assets => :"assets:environment"  do    
    manifest_path = Dir.glob(File.join(Rails.root, 'public/assets/.sprockets-manifest-*.json')).first
    manifest_data = JSON.load(File.new(manifest_path))
    
    puts "manifest data #{manifest_data}"

    manifest_data["assets"].each do |logical_path, digested_path|
      logical_pathname = Pathname.new logical_path
    
      if StoreIt::Application.config.non_digest_named_assets.any? {|testpath| logical_pathname.fnmatch?(testpath, File::FNM_PATHNAME) }
        full_digested_path    = File.join(Rails.root, 'public/assets', digested_path)
        full_nondigested_path = File.join(Rails.root, 'public/assets', logical_path)

        logger.info " Copying to #{full_nondigested_path}"

        # Use FileUtils.copy_file with true third argument to copy
        # file attributes (eg mtime) too, as opposed to FileUtils.cp
        # Making symlnks with FileUtils.ln_s would be another option, not
        # sure if it would have unexpected issues. 
        FileUtils.copy_file full_digested_path, full_nondigested_path, true      
      end
    end

  end
end