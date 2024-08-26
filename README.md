
 

# Weather Forecast Application


This project is a Weather Forecast Application built with React.js. The application allows users to check the current weather and a 5-day weather forecast for various cities worldwide. The application also provides a toggle for temperature units between Celsius and Fahrenheit.

***Features***: 

- ***City-based Search***: Users can search for weather information by entering the name of a city.
- ***Current Location Support***: Users can fetch weather data for their current location using geolocation.
- ***Weather Forecast***: Displays the current weather, a 3-hour forecast, and a daily forecast.
- ***Temperature Units Toggle***: Users can switch between Celsius and Fahrenheit.
- ***Responsive Design***: The application is fully responsive, making it accessible on all devices.
- ***Toast Notifications***: Provides feedback to users when data is being fetched, or when an error occurs.
- ***Dynamic Background Color***: The background color changes dynamically based on the current temperature.

***Tech Stack***
- ***React.js***: A JavaScript library for building user interfaces.
- ***React Bootstrap***: A popular front-end framework for building responsive websites.
- ***React Icons***: Icon library for React applications.
- ***ApexCharts***: A modern charting library for creating visualizations.
- ***React Toastify***: Library to display notifications in React applications.
- ***Luxon***: A powerful and modern JavaScript library for working with dates and times.



### Setup and Installation Guide
To run the application locally, follow these steps:

1.Clone the Repository through the link

2.Navigate to the Project Directory:

3.Install Dependencies:

```
npm install

```

4.Set Up API Key: 
- Go to OpenWeatherMap and sign up to get an API key.
- In Weather.js file add the API_Key and API_URL

***Note: API_KEY  is included in the project repository for assessment purposes. However, in a real-world scenario, this file should remain private and  included in .env .***


5.Run the Application:

```
npm start

```

6.Open the Application in Your Browser:

- The application will be available at http://localhost:3000.



- components: Contains the React components that make up the user interface.
- services: Contains the WeatherService.js file, which handles fetching and formatting data from the OpenWeatherMap API.
- App.js: The main application component.


***Usage***
- ***Search by City***: Enter the name of a city in the search bar and click the search icon or press Enter.
- ***Current Location***: Click the location icon to get weather data for your current location.
- ***Toggle Temperature Units***: Use the buttons labeled °C and °F to switch between Celsius and Fahrenheit.
- ***View Forecast***: The application displays a 3-hour forecast and a daily forecast below the current weather details.


