import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

function Results({ date }) {
  let today = new Date().getTime();
  let stockingdate = new Date(date).getTime();
  let d = Math.abs(today - stockingdate);
  let days = Math.floor(d / (1000 * 60 * 60 * 24));
  let AllDays = Math.floor(d / (1000 * 60 * 60 * 24));
//   let AllMonths = Math.floor(days / 31);
//   let AllWeeks = Math.floor(days / 7);
//   let hours = Math.abs(days * 24);
//   let minutes = Math.floor(days * 24 * 60);
//   let seconds = Math.floor(days * 60 * 60 * 24);
  let years = Math.floor(days / 365);
  days -= years * 365;

  let months = Math.floor(days / 31);
  days -= months * 31;
  if (today < stockingdate) {
    alert('You selected future Date as your birthday');
  }

  let outcome = AllDays;
      if(outcome< 15){
        alert("");
      }

  return (
    <>
        <Container>
        <Row>
            <Form>
                <Row>
                <Form.Group as={Col} controlId="formGridStockingDate">
                <Form.Control type = "number" placeholder = "Age" value={AllDays}/>
                </Form.Group>
                </Row>
                
                
            </Form>
        </Row>
        </Container>

    </>
    
    
  );
}
export default Results;