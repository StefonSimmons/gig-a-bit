class TopicsController < ApplicationController

  def index
    @topics = Topic.all
    render json: @topics
  end

  def topic_posts
    @topics = Topic.all
    render json: @topics, include: :posts
  end

end


