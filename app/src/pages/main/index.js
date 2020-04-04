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
            <Container fluid className="p-0 m-0">
                <Row className="p-0 m-0 background-container">
                    <Col md={{ span: 5, offset : 1 }}className="pt-5">
                        <h1>Ter um companheiro <br /> para a vida</h1>
                        <p>Já ouviu falar que um amigo não se compra? Adotar significa dar a chance para um animal ter um lar com muito amor e carinho. Com essa atitude consciente você mudará para sempre o destino de um peludo!</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}