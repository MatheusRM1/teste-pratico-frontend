import "./styles.css";
import DesktopTable from "./desktopTable";
import { useEmployees } from "../../hooks/useEmployess";
import { useMediaQuery } from "react-responsive";
import MobileTable from "./mobileTable";

interface TableProps {
  searchTerm: string;
}

export default function Table({ searchTerm }: TableProps) {
  const { employees, loading, error } = useEmployees();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      {isMobile ? (
        <MobileTable
          employees={employees}
          searchTerm={searchTerm}
          loading={loading}
          error={error}
        />
      ) : (
        <DesktopTable
          employees={employees}
          searchTerm={searchTerm}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
}
