Dencon::Application.routes.draw do
    
  root 'site#index'
  
  match '/directions', to: 'site#directions', via: 'get'
  match '/schedule', to: 'site#schedule', via: 'get'
  match '/contact', to: 'site#contact', via: 'get'
end