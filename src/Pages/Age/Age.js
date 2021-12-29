import React, { useState } from 'react';
import {Form, Row, Col, Container } from 'react-bootstrap';
import '../Age/Results'
import Results from '../Age/Results';

const Age = () => {
    const [data, setData] = useState({
        date: '',
        stockingdate: '',
        showResults: false,
      });
      const CalculateAge = () => {
        setData({ stockingdate: data.date, showResults: true });
      };
      const changeHandler = (e) => {
        setData({ date: e.target.value });
      };
    
    return (
        <div>
            <Container>
                <Row>
                <Form>
                <Row className='mb-3'>
                <Form.Group as={Col} controlId="formStockingDate">
                <Form.Control type="date" placeholder="Stocking Date" onChange={changeHandler}/>
                </Form.Group>
                <>
                {data.showResults ? <Results date={data.stockingdate} /> : <div />}
                </>
                </Row>
                <div className='d-grid'>
                <button
                type='button'
                className='btn btn-primary'
                onClick={CalculateAge}>
                Calculate
              </button>
             </div>
            </Form>
                </Row>
            </Container>
        </div>
    );
};

export default Age;
 


// document.getElementById("calc").addEventListener("click",function(){
  
//     var myDate = new Date(document.getElementById("date").value),
//       milli = myDate.getTime(),
//       newDate = new Date(),
//       newMilli = newDate.getTime();
    
//     document.getElementById("demo").innerHTML = Math.floor((newMilli - milli) / 1000 / 60 / 60 / 24 / 30 / 12); 
//   });
     