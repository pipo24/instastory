json.array!(@stories) do |story|
  json.extract! story, :id, :user, :title, :description, :image
  json.url story_url(story, format: :json)
end
