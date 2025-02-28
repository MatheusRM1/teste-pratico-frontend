import { Search } from "lucide-react";
import "./index.css";

export default function SearchBar() {
  return (
    <div className="search">
      <form action="post">
        <div>
          <input type="text" placeholder="Pesquisar" className="barra" />
          <div>
            <Search size={20} className="icone" />
          </div>
        </div>
      </form>
    </div>
  );
}
