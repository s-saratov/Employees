import { Link, useNavigate } from 'react-router-dom'

import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  StyledNavLink
} from './styles'
import { LayoutProps } from './types'

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        {/* 2 способ перехода на главную страницу при клике на логотип */}
        <LogoContainer onClick={() => navigate('/')}>App Logo</LogoContainer>
        <NavContainer>
          <StyledNavLink
            to='/'
            style={
              ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
            }>
            EmployeeProjectForm
          </StyledNavLink>
          <StyledNavLink
            to='/EmployeeCard'
            style={
              ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
            }>
            EmployeeCard
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutComponent>
  )
}

export default Layout