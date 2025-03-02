import { formatPhoneNumber } from "../../hooks/types";
import { useEmployees } from "../../hooks/useEmployess";
import "./index.css";

export default function Table() {
  const { employees, loading, error } = useEmployees();
  if (loading) return <div className="loading">Carregando...Dados</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className="table-container">
      <table>
        <thead className="header">
          <tr className="headerTr" style={{color: "black"}}>
            <th className="textHeader">Foto</th>
            <th className="textHeader">Nome</th>
            <th className="textHeader">Cargo</th>
            <th className="textHeader">Data de Admissão</th>
            <th className="textHeader">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} style={{color: "black"}}>
              <td>
                <img src={employee.image} style={{width: 30}}/>
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
