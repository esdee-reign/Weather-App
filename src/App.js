import logo from './logo.svg';
import './App.css';
import InputWeather from './Components/InputWeather';
import WeatherCard from './Components/WeatherCard';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        Mausam
      </header>

      <main>
        <InputWeather />
        <WeatherCard />
      </main>

      <footer>
        <h1>By snehdeep </h1>
      </footer>

    </div>
  );
}

export default App;
