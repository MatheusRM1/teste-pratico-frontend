import { useState } from "react";
import { Employee, formatPhoneNumber } from "../../hooks/types";
import { useEmployeeSearch } from "../../hooks/useEmployeeSearch";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";

interface TableProps {
  employees: Employee[];
  searchTerm: string;
  loading: boolean;
  error: string | null;
}

export default function MobileTable({
  employees,
  searchTerm,
  loading,
  error,
}: TableProps) {
  const filteredEmployees = useEmployeeSearch(employees, searchTerm);
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  };

  if (loading) return <div className="loading">Carregando...Dados</div>;
  if (error) return <div className="error">Erro: {error}</div>;
  return (
    <div className="mobile-container">
      <div className="mobile-header">
        <h1 className="mobile-textHeader">FOTO</h1>
        <h1 className="mobile-textHeader">NOME</h1>
        <Circle color="white" size={20} />
      </div>
      {filteredEmployees.map((employee) => (
        <div className="mobile-card" key={employee.id}>
          <div className="info">
            <img src={employee.image} alt={employee.name} className="image" />
            <p>{employee.name}</p>
            {openIds.includes(employee.id) ? (
              <ChevronUp
                color="#0500FF"
                size={30}
                onClick={() => toggleCard(employee.id)}
                className="chevron"
              />
            ) : (
              <ChevronDown
                color="#0500FF"
                size={30}
                onClick={() => toggleCard(employee.id)}
                className="chevron"
              />
            )}
          </div>
          {openIds.includes(employee.id) && (
            <div className="details">
              <div className="detail-row">
                <span className="function">Cargo:</span>
                <span>{employee.job}</span>
              </div>
              <div className="detail-row">
                <span className="function">Data de admissão:</span>
                <span>
                  {new Date(employee.admission_date).toLocaleDateString(
                    "pt-BR"
                  )}
                </span>
              </div>
              <div className="detail-row">
                <span className="function">Telefone:</span>
                <span>{formatPhoneNumber(employee.phone)}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
