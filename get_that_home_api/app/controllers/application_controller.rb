class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def current_user
    @current_user ||= authenticate_token
  end

  def authorized_token
    authenticate_token || respond_unauthorized('Access denied')
  end

  private

  def authenticate_token
    authenticate_with_http_token do |token, _options|
      User.find_by(token: token)
    end
  end
end
