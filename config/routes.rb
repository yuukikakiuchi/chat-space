Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  resources :users, only: [:edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update]
  root 'groups#index'
end