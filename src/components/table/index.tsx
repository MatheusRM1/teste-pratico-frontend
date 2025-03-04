import { useEffect, useState } from "react";
import { formatPhoneNumber } from "../../hooks/types";
import { useEmployees } from "../../hooks/useEmployess";
import "./index.css";

interface TableProps {
  searchTerm: string;
}

interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export default function Table({ searchTerm }: TableProps) {
  const { employees, loading, error } = useEmployees();

  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    if (!loading && !error) {
      const searchQuery = normalizeText(searchTerm);

      const filtered = employees.filter((employee) => {
        const normalizedName = normalizeText(employee.name);
        const normalizedJob = normalizeText(employee.job);
        const normalizePhone = normalizeText(employee.phone);
      
        return (
          normalizedName.includes(searchQuery) ||
          normalizedJob.includes(searchQuery) ||
          normalizePhone.includes(searchQuery)
        );
      });

      setFilteredEmployees(filtered);
    }
  }, [searchTerm, employees, loading, error]);

  console.log("Termo:", searchTerm);

  if (loading) return <div className="loading">Carregando...Dados</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className="table-container">
      <table className="table">
        <thead className="header">
          <tr className="headerTr" style={{ color: "black" }}>
            <th className="textHeaderL">FOTO</th>
            <th className="textHeader">NOME</th>
            <th className="textHeader">CARGO</th>
            <th className="textHeader">DATA DE ADMISSÃO</th>
            <th className="textHeaderR">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id} className="bodyTr">
              <td className="textBody">
                <img src={employee.image} className="image" />
              </td>
              <td className="textBody">{employee.name}</td>
              <td className="textBody">{employee.job}</td>
              <td className="textBody">
                {new Date(employee.admission_date).toLocaleDateString("pt-BR")}
              </td>
              <td className="textBody">{formatPhoneNumber(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredEmployees.length === 0 && (
        <div className="no-results">
          Nenhum resultado encontrado para "{searchTerm}"
        </div>
      )}
    </div>
  );
}
