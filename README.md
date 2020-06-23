# Thermostat

## Quick Start

Clone this repository and run:

```
npm install
npm start
```

This will display a thermostat dial set to 20 degrees. You can update the temperature by pressing the + and - buttons, or reset it back to 20 degrees by pressing the reset button.

The temperature can be updated between the range of 10 - 32 degrees. By switching power saving mode on, however, you will only be able to turn the temperature up to a maximum of 25 degrees.

The thermostat will indicate your energy usage by displaying a green background if the temperature is below 18 degrees, neutral grey if it's between 18 and 25 degrees, and red if it's above the 25 degrees.

### Future developments:
1. Finish creating Sinatra backend
2. Link temperature to Open Weather API to return the temperature of the selected city.
3. Update with tests.
