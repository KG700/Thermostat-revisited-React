require 'sinatra/base'
require 'json'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base

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

  run! if app_file == $0
end
