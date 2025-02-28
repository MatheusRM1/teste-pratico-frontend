import './App.css'
import NavBar from './components/navBar'
import SearchBar from './components/searchBar'
import Table from './components/table'

function App() {

  return (
    <>
      <div>
        <NavBar/>
      </div>  
      <div className='containerFunc'>
        <h1>Funcionários</h1>
        <SearchBar/>
      </div>
      <div>
        <Table/>
      </div>
    </>
  )
}

export default App
