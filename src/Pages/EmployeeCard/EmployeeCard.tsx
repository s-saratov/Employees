import { useContext } from "react";
import {
  CardContainer,
  CardContent,
  InfoRow,
  Label,
  Value,
  Message,
  CardEmployee,
} from "./styles";
import { EmployeeDataContext } from "components/Layout/Layout";

function EmployeeCard() {
  // Деструктуризируем объект, приходящий с помощью EmployeeDataContext
  const { employee, setEmployeeData } = useContext(EmployeeDataContext);

  return (
    <CardEmployee>
      <InfoRow>
        <Label>Name:</Label>
        <Value>{employee?.name}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Surname:</Label>
        <Value>{employee?.surname}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Age:</Label>
        <Value>{employee?.age}</Value>
      </InfoRow>
      {employee?.jobPosition && (
        <InfoRow>
          <Label>Job Position:</Label>
          <Value>{employee?.jobPosition}</Value>
        </InfoRow>
      )}
    </CardEmployee>
  );
}

export default EmployeeCard;
