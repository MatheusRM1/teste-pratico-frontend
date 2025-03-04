import { Employee } from "./types";

export const useEmployeeSearch = (
  employees: Employee[],
  searchTerm: string
) => {
  const normalizeText = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  };

  const filteredEmployees = employees.filter((employee) => {
    const searchQuery = normalizeText(searchTerm);

    const normalizedName = normalizeText(employee.name);
    const normalizedJob = normalizeText(employee.job);
    const normalizePhone = normalizeText(employee.phone);

    return (
      normalizedName.includes(searchQuery) ||
      normalizedJob.includes(searchQuery) ||
      normalizePhone.includes(searchQuery)
    );
  });

  return filteredEmployees;
};
