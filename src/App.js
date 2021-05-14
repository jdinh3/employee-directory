import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./components/Jumbotron/index";
import SearchBar from "./components/SearchBar/index";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <SearchBar />
    </div>
  );
}

export default App;
