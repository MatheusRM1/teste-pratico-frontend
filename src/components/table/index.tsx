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
          <tr style={{ color: "black", backgroundColor: "#0500FF" }}>
            <th>Foto</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de Admissão</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} style={{color: "black"}}>
              <td>
                <img src={employee.image} style={{width: 30}}/>
              </td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>
                {new Date(employee.admission_date).toLocaleDateString("pt-BR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
