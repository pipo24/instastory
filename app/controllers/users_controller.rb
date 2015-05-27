class UsersController < ApplicationController

  def index
      @users = User.all
      render json: @users, root: false
  end

  def show
    @user   = User.find(params[:id])
    render json: @user, root: false
  end
end