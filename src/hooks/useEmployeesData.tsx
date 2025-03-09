import { useState, useEffect } from "react";
import { employeesService } from "../services/api";
import { Employee } from "./types";

export const useEmployeeData = (searchTerm: string = "") => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await employeesService.getAll();
        setEmployees(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const normalizeText = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  const searchQuery = normalizeText(searchTerm);

  const filteredEmployees = employees.filter((employee) => {
    const normalizedName = normalizeText(employee.name);
    const normalizedJob = normalizeText(employee.job);
    const normalizedPhone = normalizeText(employee.phone);

    return (
      normalizedName.includes(searchQuery) ||
      normalizedJob.includes(searchQuery) ||
      normalizedPhone.includes(searchQuery)
    );
  });

  return { employees: filteredEmployees, loading, error };
};
