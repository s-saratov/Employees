import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";


import EmployeeProjectForm from "./pages/EmployeeProjectForm/EmployeeProjectForm";
import EmployeeFormPage from "pages/EmployeeFormPage/EmployeeFormPage";
import EmployeeCardPage from "pages/EmployeeCardPage/EmployeeCardPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<EmployeeFormPage />} />
          <Route path="/employeecards" element={<EmployeeCardPage />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;