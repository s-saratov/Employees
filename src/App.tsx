import React, { useState } from 'react';
import { EmployeeProvider } from './Pages/EmployeeContext/EmployeeContext';
import EmployeeFormPage from './pages/EmployeeFormPage/EmployeeFormPage';
import EmployeeCard from './Pages/EmployeeCard/EmployeeCard';
import './styles/GlobalStyles.css';

function App() {
  const [activePage, setActivePage] = useState('create');

  return (
    <EmployeeProvider>
      <div className="app-container">
        <header className="app-header">
          <nav>
            <a
              href="#"
              className={activePage === 'create' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('create');
              }}
            >
              Create Employee
            </a>
            <a
              href="#"
              className={activePage === 'employee' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('employee');
              }}
            >
              Employee
            </a>
          </nav>
        </header>
        <main className="app-main">
          {activePage === 'create' ? <EmployeeFormPage /> : <EmployeeCard />}
        </main>
      </div>
    </EmployeeProvider>
  );
}

export default App;