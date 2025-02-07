import { CardContainer, CardContent, InfoRow, Label, Value, Message } from './styles';
import { useEmployeeContext } from '../EmployeeContext/EmployeeContext';

function EmployeeCard() {
  const { employee } = useEmployeeContext();

  if (!employee) {
    return <Message>No employee data available. Please create an employee first.</Message>;
  }

  return (
    <CardContainer>
      <CardContent>
        <InfoRow>
          <Label>Name:</Label>
          <Value>{employee.name}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Surname:</Label>
          <Value>{employee.surname}</Value>
        </InfoRow>
        {employee.age && (
          <InfoRow>
            <Label>Age:</Label>
            <Value>{employee.age}</Value>
          </InfoRow>
        )}
        <InfoRow>
          <Label>Job Position:</Label>
          <Value>{employee.jobPosition}</Value>
        </InfoRow>
      </CardContent>
    </CardContainer>
  );
}

export default EmployeeCard;
