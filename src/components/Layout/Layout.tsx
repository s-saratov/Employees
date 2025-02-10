import { Link, useNavigate } from "react-router-dom";

import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  StyledNavLink,
} from "./styles";
import { EmployeeDataContextTypes, LayoutProps } from "./types";
import { createContext, useState } from "react";
import { EmployeeDataTypes } from "components/EmployeeForm/types";

// Создаём и экспортируем контекст
export const EmployeeDataContext = createContext<EmployeeDataContextTypes>({
  employee: undefined,
  setEmployeeData: () => {},
});

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  // Создаём state для хранения значений полей ввода формы
  const [employeeData, setEmployeeData] = useState<
    EmployeeDataTypes | undefined
  >();

  return (
    <EmployeeDataContext.Provider
      value={{
        employee: employeeData,
        setEmployeeData: setEmployeeData,
      }}
    >
      <LayoutComponent>
        <Header>
          {/* 2 способ перехода на главную страницу при клике на логотип */}
          <LogoContainer onClick={() => navigate("/")}>App Logo</LogoContainer>
          <NavContainer>
            <StyledNavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              EmployeeProjectForm
            </StyledNavLink>
            <StyledNavLink
              to="/employeecards"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              EmployeeCard
            </StyledNavLink>
          </NavContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutComponent>
    </EmployeeDataContext.Provider>
  );
}

export default Layout;
