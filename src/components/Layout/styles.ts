import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom'

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw; // Исправлено с 100% на vw
  overflow-x: hidden; // Добавлено
  background-color: #051e2b;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: white;
  color: #000000;
  padding:30px
`
export const LogoContainer = styled.div`
 border-radius: 50%;
`

export const NavContainer = styled.nav`
 display: flex;
 gap: 25px;
`

export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 20px;
 color: #000000;
 padding: 10px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  min-height: calc(100vh - 110px);
`

