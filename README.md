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

Select a city in the drop down box to show the current temperature of that city.

### Future developments:
1. Update with tests.
2. Add a Spinner component to handle slight delays when api calls are being made
