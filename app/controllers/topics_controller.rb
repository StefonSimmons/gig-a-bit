class TopicsController < ApplicationController

  def index
    @topics = Topic.all
    render json: @topics
  end
  
  # CUSTOM ACTION
  def topics_posts
    @topics = Topic.all
    render json: @topics, include: :posts
  end

end