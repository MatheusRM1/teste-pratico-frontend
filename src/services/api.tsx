import { Employee } from "../hooks/types";

export const employeesService = {
  async getAll(): Promise<Employee[]> {
    try {
      const response = await fetch("http://localhost:3000/employees");
      if (!response.ok) {
        throw new Error(`HTTP Error! status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch employees: ", error);
      throw error;
    }
  },
};
