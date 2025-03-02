import "./App.css";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import Table from "./components/table";

function App() {
  return (
    <>
      <NavBar />
      <div className="containerFunc">
        <h1 className="funcionario">Funcionários</h1>
        <SearchBar />
      </div>
      <div>
        <Table />
      </div>
    </>
  );
}

export default App;
