/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useEffect } from 'react';

const SpeciesReferenceData = () => {
    const [speciesReferenceObj, setSpeciesReferenceObj] = useState([]);
    const [feedingRateData, setFeedingRateData] = useState([]);


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
                            </tr>
                        </thead>
                        <tbody>

                            {
                                speciesReferenceObj && speciesReferenceObj.map((item,index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.fish}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).feedType}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).totalFeedingRate}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).frequency}</td>
                                    </tr>
                                ))                               
                            }       
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SpeciesReferenceData;
    