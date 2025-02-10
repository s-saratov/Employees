import { EmployeeDataTypes } from "components/EmployeeForm/types";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface EmployeeDataContextTypes {
  employee: EmployeeDataTypes | undefined;
  setEmployeeData: Dispatch<SetStateAction<EmployeeDataTypes | undefined>>;
}