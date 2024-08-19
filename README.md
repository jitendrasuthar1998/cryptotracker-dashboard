## Cryptotracker App

### Screenshot

[![cryptotracker-app-screenshot.png](https://i.postimg.cc/HnxRD09x/cryptotracker-app-screenshot.png)](https://postimg.cc/5Yhn8CGd)

### Overview
This application provides a platform to track cryptocurrency prices, compare different cryptocurrencies, and create a watchlist of preferred coins.

### Features
* **Home:** Serves as the entry point to the application.
* **Dashboard:** Displays a list of cryptocurrencies, with each coin detailed in a separate card. Card information includes name, price change percentage, current price, total volume, market capitalization, and an option to add to watchlist.
* **Compare:** Enables comparison of two cryptocurrencies, showcasing price trends and other relevant metrics.
* **Watchlist:** Allows users to create a list of their preferred cryptocurrencies for easy tracking.

### Data Source
Cryptocurrency data is fetched from the CoinGecko API. The application retrieves a list of all available coins upon loading the Dashboard component and displays them using pagination.

## Tech Stack

### Frontend
* **UI Framework:** React
* **Styling:** Emotion, MUI (Material UI)
* **Routing:** React Router
* **State Management:** Implicitly using React Context API
* **UI Components:** MUI for pre-built components
* **Animations:** Framer Motion
* **Charting:** Chart.js, react-chartjs-2
* **Toastify:** For displaying notifications
* **Icons:** MUI Icons
* **Testing:** React Testing Library, Jest

### Backend
* **Data Fetching:** Axios for making API calls to CoinGecko
* **State Management:** Implicitly using React Context API

### Other Dependencies
* **web-vitals:** For measuring web performance metrics
* **react-web-share:** For sharing content
* **eslint:** For code linting

### Development Tools
* **react-scripts:** For creating a React app
* **@testing-library/user-event:** For user event simulation in testing
 