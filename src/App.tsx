import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import Table from "./components/table";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      <NavBar />
      <div className="containerFunc">
        <h1 className="funcionario">Funcionários</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div>
        <Table searchTerm={searchTerm}/>
      </div>
    </>
  );
}

export default App;
