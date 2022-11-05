import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="#">Bioskop Abdehi</Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link href="#Introo">Home</Nav.Link>
            <Nav.Link href="#trending">Trending Saat ini</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default NavigationBar
