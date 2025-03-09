import "./table.css";
import DesktopTable from "./desktopTable";
import { useEmployeeData } from "../../hooks/useEmployeesData";
import { useMediaQuery } from "react-responsive";
import MobileTable from "./mobileTable";

interface TableProps {
  searchTerm: string;
}

export default function Table({ searchTerm }: TableProps) {
  const { employees, loading, error } = useEmployeeData(searchTerm);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      {isMobile ? (
        <MobileTable
          employees={employees}

          loading={loading}
          error={error}
        />
      ) : (
        <DesktopTable
          employees={employees}

          loading={loading}
          error={error}
        />
      )}
    </div>
  );
}
