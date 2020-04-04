import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class Main extends Component {

    state = {
        animals: [],
        animalInfo: {},
        page: 1
    };

    componentDidMount() {
        this.loadAnimals();
    }

    loadAnimals = async (pageNumber = 1) => {

        const response = await api.get(`/products/?page=${pageNumber}`)

        const { docs, ...animalInfo } = response.data;

        this.setState({ animals: response.data.docs, animalInfo, page: pageNumber });
    }

    render() {
        // const { animals } = this.state
        // return (<section>body {animals.map( animal => (
        //     <div key={animal._id}><h2>{animal.title}</h2></div>
        // ))} </section>)

        return (
            <Container fluid>
                <Row>
                    <Col className="background-container"></Col>
                </Row>
            </Container>
        )
    }
}