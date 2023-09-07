class MessagesController < ApplicationController
  def random
    @message = Message.order("RANDOM()").first
    render json: { text: @message.text }
  end
end
