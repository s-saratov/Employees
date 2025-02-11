export interface EmployeeFormValues {
  [key: string]: string;
}

export const employeeFormFields = [
  { name: "name", label: "Name*", placeholder: "Enter your name" },
  { name: "surname", label: "Surname*", placeholder: "Enter your surname" },
  { name: "age", label: "Age*", placeholder: "Enter your age" },
  {
    name: "jobPosition",
    label: "Job position",
    placeholder: "Enter your job position",
  },
];
