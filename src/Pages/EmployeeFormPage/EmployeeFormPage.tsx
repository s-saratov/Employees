import EmployeeProjectForm from "../../Pages/EmployeeProjectForm/EmployeeProjectForm";
import { EmployeeFormPageWrapper } from "./styles";
import { useEmployeeContext } from '../../Pages/EmployeeContext/EmployeeContext';
import { Link } from 'react-router-dom';

function EmployeeFormPage (){
  const {  } = useEmployeeContext();
  return(
    <EmployeeFormPageWrapper>
      <EmployeeProjectForm />
      
    </EmployeeFormPageWrapper>
  )
}

export default EmployeeFormPage