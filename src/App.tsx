import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import Table from "./components/table";
import { useEmployees } from "./hooks/useEmployess";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { employees, loading, error } = useEmployees();

  return (
    <>
      <NavBar />
      <div className="containerFunc">
        <h1 className="funcionario">Funcionários</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div>
        <Table
          employees={employees}
          searchTerm={searchTerm}
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
}

export default App;
