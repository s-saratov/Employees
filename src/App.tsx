import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";

import EmployeeCard from "./pages/EmployeeCard/EmployeeCard";
import EmployeeProjectForm from "./pages/EmployeeProjectForm/EmployeeProjectForm";
import EmployeeFormPage from "pages/EmployeeFormPage/EmployeeFormPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<EmployeeFormPage />} />
          <Route path="/employeecard" element={<EmployeeCard />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;