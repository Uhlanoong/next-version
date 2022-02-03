/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Table,Modal } from 'react-bootstrap';
import { useEffect } from 'react';

const SpeciesReferenceData = () => {
    const [speciesReferenceObj, setSpeciesReferenceObj] = useState([]);
    const [feedingRateData, setFeedingRateData] = useState([]);
    const [tempModalData, setTempModalData] = useState();


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e,item) => {
        if(item.firstTableDataObj){
            setTempModalData(item.firstTableDataObj);
            setShow(true);
        }
        
       
    };

    const handleModal = (obj) => {
        setTempModalData(obj);
    }

    useEffect(()=>{
        fetch('http://localhost:5000/species-reference')
        .then(res=> res.json())
        .then(data =>{
            setSpeciesReferenceObj(data);
        })

        fetch('http://localhost:5000/feed')
        .then(res=> res.json())
        .then(data =>{
            setFeedingRateData(data);
        })
    },[])

    const CalculateTotalFeed = (name,totalWeight,totalPices) => {
        let filteredData = feedingRateData.filter((item) => item.fishtype === name);
        let singleFishWeight = totalWeight / totalPices;
        let totalFeedingRate = "";
        let feedType = "";
        let frequency = "";
        filteredData.forEach((item) => {
            if(item.bodyweight){
                if(item.bodyweight.charAt(0) !== '>'){
                    let range = item.bodyweight.split('-');
                    let feedRange = item.feedrate.split('-');
                    let max = parseInt(range[0]);
                    let min = parseInt(range[1]);
                    if (singleFishWeight > max && singleFishWeight < min) {
                       totalFeedingRate = `${parseInt(feedRange[0])*totalWeight}`;
                       feedType = item.feedtype;
                       frequency = item.frequency;
                    }
                }
            }
        });

        return {
            totalFeedingRate,
            feedType,
            frequency
        };
    }

        //Delete a data for Species
        const handleDeleteData = id =>{
            const proceed = window.confirm('Are you sure, you want to delete?')
            if (proceed){
              const url = `http://localhost:5000/species-reference/${id}`;
              fetch(url, {
                  method: 'DELETE'
              })
              .then(res=> res.json())
                .then(data =>{
                    if(data.deletedCount>0){
                        alert('Successfully deleted the data')
                        window.location.reload()
                    }
                })
            } 
        }
    

    return (
        <div className = "my-2">
             <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Species</th>
                                <th>Feed Type</th>
                                <th>Total Feed</th>
                                <th>Frequency</th>
                                <th>Stocking Density</th>
                                <th>Present Biomass</th>
                                <th>First Table Reference</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                speciesReferenceObj && speciesReferenceObj.map((item,index) => (
                                    <tr key={item._id}>
                                        <td>{index+1}</td>
                                        <td>{item.fish}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).feedType}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).totalFeedingRate}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).frequency}</td>
                                        <td>{item.stockingDensity}</td>
                                        <td>{item.presentBiomass}</td>
                                        <td><Button type = "button" onClick={() => {handleDeleteData(item._id)}} variant = "info" className = "mx-2" size = "sm" style = {{width: "100px"}}>Remove</Button></td>
                                        <td>
                                            <Button variant="primary" onClick={(e) => handleShow(e,item) }>
                                                See
                                            </Button>
                                        </td>
                                    </tr>
                                ))                               
                            }       
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Modal show={show} onHide={handleClose}   size="lg">
                            <Modal.Header closeButton>
                            <Modal.Title>First Table Data</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                               <Table striped bordered hover size="sm" responsive>
                                    <thead>
                                        <tr>
                                            <th>Problem</th>
                                            <th>Fish Age</th>
                                            <th>Water Area</th>
                                            <th>Water Depth</th>
                                            <th>Stocking Quantity</th>
                                            <th>Water Volume</th>
                                        </tr>
                                    </thead>
                                   {
                                       tempModalData && <tbody>
                                        <td>{tempModalData.problem}</td>
                                        <td>{tempModalData.age}</td>
                                        <td>{tempModalData.waterArea}</td>
                                        <td>{tempModalData.waterDepth}</td>
                                        <td>{tempModalData.stockingQuantity}</td>
                                        <td>{tempModalData.volume}</td>
                                    </tbody>
                                   }
                               </Table>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SpeciesReferenceData;
    