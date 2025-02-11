import { useContext } from "react";
import {
  InfoRow,
  Label,
  Value,
  Message,
  CardEmployee,
} from "./styles";
import { EmployeeDataContext } from "components/Layout/Layout";

function EmployeeCard() {
  // Деструктуризируем объект, приходящий с помощью EmployeeDataContext
  const { employee } = useContext(EmployeeDataContext);

if(!employee) return (
  <Message>No employee data available. Please create an employee first.</Message>
)

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
