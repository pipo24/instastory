class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :update, :destroy]

  # GET /stories
  # GET /stories.json
  def index
    @stories = Story.all
    render json: @stories, root: false
  end

  # GET /stories/1
  # GET /stories/1.json
  def show
    render json: @story, root: false
  end

  # POST /stories
  # POST /stories.json
  def create
    @story = Story.new(story_params)

    respond_to do |format|
      if @story.save
        format.json { render json: @story, root: false, status: :created, location: @story }
      else
        format.json  { render json: @story.errors, root: false, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stories/1
  # PATCH/PUT /stories/1.json
  def update
    respond_to do |format|
      if @story.update(story_params)
        format.json { render json: @story, root: false, status: :ok, location: @story }
      else
        format.json  { render json: @story.errors, root: false, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stories/1
  # DELETE /stories/1.json
  def destroy
    @story.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_story
    @story = Story.find(params[:id])
  end
  # Never trust parameters from the scary internet, only allow the white list through.
  def story_params
    params.require(:story).permit(:title, :description, :hashtag, :user_id)
  end
end
