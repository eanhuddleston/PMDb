class MoviesController < ApplicationController
  before_filter :authenticate_user!

  respond_to :json

  def create
    @movie = Movie.new(params[:movie])
    @movie.user_id = current_user.id

    if @movie.save
      render :json => @movie
    else
      render :json => @movie.errors, :status => 422
    end
  end

  def index
    @movies = current_user.movies
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @movies }
    end
  end

  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy

    redirect_to root_url
  end
end

