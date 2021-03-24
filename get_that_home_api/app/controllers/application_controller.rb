class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def current_user
    p 'HOLAAAAAA'
    @current_user ||= authenticate_token
  end

  def authorized_token
    authenticate_token || respond_unauthorized('Access denied')
  end

  private

  def authenticate_token
    authenticate_with_http_token do |token, _options|
      p token
      User.find_by(token: token)
    end
  end
end
