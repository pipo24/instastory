class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users, root: false
  end

  def show
    @user  = User.find(params[:id])
    render json: @user, root: false
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end
  
end