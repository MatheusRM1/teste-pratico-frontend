import { Search } from "lucide-react";
import "./search.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className="search">
      <div>
        <input
          type="text"
          placeholder="Pesquisar"
          className="barra"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Search size={20} className="icone" />
        </div>
      </div>
    </div>
  );
}
