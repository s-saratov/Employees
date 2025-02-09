import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={{ background: '#f0f0f0', padding: '10px' }}>
        <nav>
          <Link to="/create-employee" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>Create Employee</Link>
          <Link to="/employee" style={{ textDecoration: 'none', color: '#007bff' }}>Employee</Link>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;