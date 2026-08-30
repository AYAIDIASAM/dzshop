import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
  import Button from 'react-bootstrap/Button';  



function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">🛒 DZShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#features">Produits</Nav.Link>
        
          </Nav>
        </Container>

      <Button variant="outline-primary">  🛒Primary</Button>  
      <Button variant="outline-secondary">Secondary</Button>
    
        </Navbar> 
      
    

     
    </>
  );
}

export default ColorSchemesExample;