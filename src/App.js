import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Andrea Mitri and is{" "}
          <a
            href="https://github.com/andreamitri/react-weather-app"
            target="blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
