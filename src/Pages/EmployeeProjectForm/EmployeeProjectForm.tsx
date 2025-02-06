import * as Yup from "yup";
import { useFormik } from "formik";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { EmployeeProjectFormContainer, ImputWrapper } from "./styles";
import { EmployeeFormValues } from "./type";

const employeeFormFields = [
  { name: "name", label: "Name*", placeholder: "Enter your name" },
  { name: "surname", label: "Surname*", placeholder: "Enter your surname" },
  { name: "age", label: "Age*", placeholder: "Enter your age" },
  {
    name: "jobPosition",
    label: "Job position*",
    placeholder: "Enter your job position",
  },
];

function EmployeeProjectForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Field <age> is requaired")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    surname: Yup.string()
      .required("Field <age> is requaired")
      .max(15, "Max 15 symbols"),
    age: Yup.number()
      .required("Field <age> is requaired")
      .min(18, "Age must be at least 18 years old")
      .max(80, "Age must be at most 80 years old"),
    jobPosition: Yup.string()
    .max(30, "Max 30 symbols"),
  });

  const formik = useFormik({
    initialValues: employeeFormFields.reduce((result, field) => {
      result[field.name] = "";
      return result;
    }, {} as EmployeeFormValues),
    validationSchema,
    validateOnChange: false,
    onSubmit: () => {
      formik.resetForm();
    },
  });

  const inputs = employeeFormFields.map((field) => {
    return (
      <Input
        key={field.name}
        name={field.name}
        label={field.label}
        placeholder={field.placeholder}
        value={formik.values[field.name]}
        onChange={formik.handleChange}
        error={formik.errors[field.name]}
      />
    );
  });

  return (
    <EmployeeProjectFormContainer>
      <ImputWrapper> {inputs}</ImputWrapper>
      <Button 
      name="Create" 
      type="submit" 
      onClick={formik.handleSubmit} />
    </EmployeeProjectFormContainer>
  );

}

export default EmployeeProjectForm;
