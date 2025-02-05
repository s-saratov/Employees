import { Link, useNavigate } from 'react-router-dom'

import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  Footer,
  StyledNavLink
} from './styles'
import { LayoutProps } from './types'

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        {/* 2 способ перехода на главную страницу при клике на логотип */}
        <LogoContainer onClick={() => navigate('/')}></LogoContainer>
        <NavContainer>
          <StyledNavLink
            to='/employeeCard'
            style={
              ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
            }>
            EmployeeCard
          </StyledNavLink>
          <StyledNavLink
            to='/employeeProjectForm'
            style={
              ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
            }>
            EmployeeProjectForm
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Link to='/'><LogoContainer></LogoContainer></Link>
      </Footer>
    </LayoutComponent>
  )
}

export default Layout