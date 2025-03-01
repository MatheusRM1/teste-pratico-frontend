import { useState, useEffect } from 'react';
import { employeesService } from '../services/api';
import { Employee } from './types';

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await employeesService.getAll();
        setEmployees(data);
      } catch (err) {
        if(err instanceof Error)
          setError(err.message);
        else
          setError("Erro desconhecido")
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { employees, loading, error };
};