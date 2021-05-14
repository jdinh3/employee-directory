import "./App.css";
import Jumbotron from "./components/Jumbotron/index";
import SearchBar from "./components/SearchBar/index";
import EmployeeTable from "./components/EmployeeTable/index";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <SearchBar />
      <EmployeeTable />
    </div>
  );
}

export default App;
