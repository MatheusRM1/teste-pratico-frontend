import { Employee, formatPhoneNumber } from "../../hooks/types";
import "./index.css";
import { useEmployeeSearch } from "../../hooks/useEmployeeSearch";

interface TableProps {
  employees: Employee[];
  searchTerm: string;
  loading: boolean;
  error: string | null;
}

export default function Table({
  employees,
  searchTerm,
  loading,
  error,
}: TableProps) {
  
  const filteredEmployees = useEmployeeSearch(employees, searchTerm);

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
