import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Row, Col, Button  } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
       <Container>
        <Row>
           <Col sm="12">
           <div className="book-title">Book List</div>
           <div className="upper-table">
           <Button color="success">Add Book</Button>
           </div>
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Rating</th>
            <th>Writer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>My Book</td>
            <td>4.5</td>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Discover</td>
            <td>5.0</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>the Bird</td>
            <td>3.8</td>
            <td>Larry</td>
          </tr>
        </tbody>
      </Table>
           </Col>
        </Row>
        </Container>
        
    </div>
  );
}

export default App;
