import { createContext, useContext, useState, ReactNode } from "react";

// Типизация данных
interface Employee {
  name: string;
  surname: string;
  age: number;
  jobPosition?: string;
}

// Типизация контекста
interface EmployeeContextType {
  employee: Employee | null;
  setEmployee: (employee: Employee) => void;
  updateEmployee: (updatedFields: Partial<Employee>) => void;
  createEmployee: (employeeData: Employee) => void;
}

// Создаем контекст
const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

// Провайдер контекста
export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employee, setEmployee] = useState<Employee | null>(null);

  const updateEmployee = (updatedFields: Partial<Employee>) => {
    if (employee) {
      setEmployee({ ...employee, ...updatedFields });
    }
  };

  const createEmployee = (employeeData: Employee) => {
    setEmployee(employeeData);
  };

  return (
    <EmployeeContext.Provider value={{ employee, setEmployee, updateEmployee, createEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Хук для доступа к контексту
export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployeeContext must be used within an EmployeeProvider");
  }
  return context;
};

export default EmployeeProvider;