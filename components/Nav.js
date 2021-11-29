import styled from 'styled-components';

const NavBar = styled.nav `
margin: 0 auto;
  padding: 0 20px;
  max-width: 960px;
`

function Navigation() {
  return (
  <NavBar>
    <a href="#">
      &#8757;
    </a>
  </NavBar>
  )
}

export default Navigation