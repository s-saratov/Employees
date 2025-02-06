import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom'

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw; // Исправлено с 100% на vw
  overflow-x: hidden; // Добавлено
  background-color: #d5d2f7;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #d5d2f7;
  color: #000000;
`
export const LogoContainer = styled.div`
 width: 70px;
 height: 70px;
 background-color: white;
 border-radius: 50%;
 cursor: pointer;
`

export const NavContainer = styled.nav`
 display: flex;
 gap: 15px;
`

export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 20px;
 color: #000000;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  min-height: calc(100vh - 110px);
`

