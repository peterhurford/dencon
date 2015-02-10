require 'sinatra'
require 'haml'

get '/' do
  haml :index
end

get '/directions' do
  haml :directions
end

get '/schedule' do
  haml :schedule
end

get '/contact' do
  haml :contact
end

not_found do
  status 404
  haml :fourohfour
end
