import { Employee, formatPhoneNumber } from "../../hooks/types";

interface TableProps {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

export default function DesktopTable({
  employees,
  loading,
  error,
}: TableProps) {

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
          {employees.map((employee) => (
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
    </div>
  );
}
