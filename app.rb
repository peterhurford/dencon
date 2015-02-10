require 'sinatra'

get '/' do
  erb :index
end

get '/directions' do
  erb :directions
end

get '/schedule' do
  erb :schedule
end

get '/contact' do
  erb :contact
end
