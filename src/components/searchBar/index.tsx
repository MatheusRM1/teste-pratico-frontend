import { Search } from "lucide-react";
import "./styles.css";

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
      <form action="post" onSubmit={(e) => e.preventDefault()}>
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
      </form>
    </div>
  );
}
