require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base

  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get "/" do
    File.read('public/index.html')
  end

  get "/all" do
    thermostat = Thermostat.instance
    {
      temperature: thermostat.temperature,
      powerSavingMode: thermostat.power_saving_mode,
      city: thermostat.city
    }.to_json
  end

  # options "*" do
  #   response.headers["Access-Control-Allow-Origin"] = "*"
  # end

  run! if app_file == $0
end
