import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Table} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Admin Login</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <iframe src="https://www.google.com/maps/d/embed?mid=18ZUMdmSLrSvO11T4ays8QK3_Z26GjHgs" width="100%" height="400"></iframe>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
