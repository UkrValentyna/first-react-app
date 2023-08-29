import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather city="London" />
      <footer>
        <small>
          Coded by Valentyna
          <a
            href="https://github.com/UkrValentyna/first-react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-soursed on GitHub
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
