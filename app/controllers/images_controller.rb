class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]

  # GET /images
  # GET /images.json
  def index
    @images = Image.all
    render json: @images, root: false
  end

  # GET /images/1
  # GET /images/1.json
  def show
    render json: @image, root: false
  end

  # POST /images
  # POST /images.json
  def create
    @image = Image.new(image_params)

    respond_to do |format|
      if @image.save
        format.json { render json: @image, root: false, status: :created, location: @image }
      else
        format.json  { render json: @image.errors, root: false, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /images/1
  # PATCH/PUT /images/1.json
  def update
    respond_to do |format|
      if @image.update(image_params)
        format.json { render json: @image, root: false, status: :ok, location: @image }
      else
        format.json  { render json: @image.errors, root: false, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /images/1
  # DELETE /images/1.json
  def destroy
    @image.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = Image.find(params[:id])
    end

    def image_params
      params.require(:image).permit(:picture, :title, :tags, :image_username, :longitude, :latitude, :location_name, :uploaded_at, :story_id)
    end
  end
