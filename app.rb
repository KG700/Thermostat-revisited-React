require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base

  configure do
    enable :cross_origin
  end

  before do
    # content_type :json
    response.headers['Access-Control-Allow-Origin'] = '*'
    # response.headers["Access-Control-Allow-Methods"] = "POST"
    # response.headers['Access-Control-Allow-Methods'] = ['OPTIONS', 'GET', 'POST']
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

  post "/temperature" do
    thermostat = Thermostat.instance
    data = JSON.parse(request.body.read)
    thermostat.update_temperature(data["temperature"])
    { status: 200 }.to_json
  end

  post "/power-saving-mode" do
    thermostat = Thermostat.instance
    data = JSON.parse(request.body.read)
    thermostat.update_power_saving_mode(data["powerSavingMode"])
    { status: 200 }.to_json
  end

  post "/city" do
    thermostat = Thermostat.instance
    data = JSON.parse(request.body.read)
    thermostat.update_city(data["city"])
    { status: 200 }.to_json
  end

  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

  run! if app_file == $0
end
