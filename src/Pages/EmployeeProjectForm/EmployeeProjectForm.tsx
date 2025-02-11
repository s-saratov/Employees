import * as Yup from "yup";
import { useFormik } from "formik";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { EmployeeProjectFormContainer, InputWrapper } from "./styles";
import { employeeFormFields } from "./types";

import { useContext } from "react";
import { EmployeeDataContext } from "components/Layout/Layout";
import { EmployeeDataTypes } from "components/EmployeeForm/types";
import { v4 } from "uuid";

function EmployeeProjectForm() {
  const employee = useContext(EmployeeDataContext);
  // console.log(employee);

  // Извлекаем из контекста функцию установления данных рабоника
  const { setEmployeeData } = employee;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Field <age> is required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    surname: Yup.string()
      .required("Field <age> is required")
      .max(15, "Max 15 symbols"),
    age: Yup.number()
      .required("Field <age> is required")
      .min(18, "Age must be at least 18 years old")
      .max(80, "Age must be at most 80 years old"),
    jobPosition: Yup.string().max(30, "Max 30 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (formInputValues: EmployeeDataTypes) => {
      // Устанавливаем в state данные формы
      // setEmployeeData({
      //   name: formInputValues.name,
      //   surname: formInputValues.surname,
      //   age: formInputValues.age,
      //   jobPosition: formInputValues.jobPosition,
      // });
      setEmployeeData(formInputValues);
      formik.resetForm();
    },
  });

  const inputs: any = employeeFormFields.map((field) => {
    console.log(field);
    const name: string = field.name;
    return (
      <Input
        key={v4()}
        name={field.name}
        label={field.label}
        placeholder={field.placeholder}
        value={formik.values[name as keyof typeof formik.values]}
        onChange={formik.handleChange}
        error={formik.errors[name as keyof typeof formik.values]}
      />
    );
  });

  return (
    <EmployeeProjectFormContainer>
      <InputWrapper> {inputs}</InputWrapper>
      <Button name="Create" type="submit" onClick={formik.handleSubmit} />
    </EmployeeProjectFormContainer>
  );
}

export default EmployeeProjectForm;
