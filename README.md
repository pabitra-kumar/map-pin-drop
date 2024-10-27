# Pin Drop with Remarks - User Guide

### Deploy Site - https://map-pin-drop-mauve.vercel.app/

This tool allows users to drop pins on an interactive map, add remarks, and view saved locations with automatically fetched addresses. Saved pins can be revisited and remain persistent across sessions.

## Features

1. Interactive Map: Drop pins by clicking anywhere on the map.
2. Remarks & Address: Add remarks to each pin. The address is fetched automatically based on location (requires internet connection).
3. Saved Pins List: View saved pins with remarks and addresses in a sidebar list.
4. Navigate to Pin: Click any pin in the sidebar to focus the map on that location.
5. Persistent Storage: All pins and remarks are saved in local storage, so data is retained across sessions.

# Usage Guide

1. Dropping a Pin: Click on the map to drop a pin.A prompt will appear to enter a remark. After submitting, the address will automatically fetch and save with your remark.
2. Viewing Saved Pins: In the sidebar, find a list of all saved pins. Each entry shows the remark and address for easy reference.
3. Navigating to Pins: Click any pin in the sidebar to center the map on that location, which will also highlight the pin.
4. Deleting Pins: Currently, the app does not support deleting pins directly.

# Technologies Used
- React: For the user interface.
- Leaflet: For the map functionality.
- OpenStreetMap & Nominatim API: To fetch addresses based on coordinates.
- Local Storage: To store pins, remarks, and addresses persistently.

# Setup
1. Clone this repository.
2. Install dependencies with npm install.
3. Run the application with npm start.
4. Visit http://localhost:3000 to use the application in your browser.
5. Enjoy using the Pin Drop with Remarks tool to save and organize your important locations!
