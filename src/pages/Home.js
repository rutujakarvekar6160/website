import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import img1 from '../images/coupen1.jpg';
import img2 from '../images/coupen2.jpg';
import img3 from '../images/img01.jpg';
import img4 from '../images/img02.jpg';
import img5 from '../images/img03.jpg';
import img6 from '../images/img04.jpg';

function Home() {
    return (
        <div>
            <section className="Banner">
                <Container>
                    <Row className="py-4">
                        <Col>
                            <h1>Jewellery is like the perfect spice</h1>
                            <h5>Into every girl's life, a little diamond should fall.</h5>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="Coupons">
                <Container>
                    <Row style={{color:'blue', fontFamily:'sans-serif', fontWeight:'bolder'}}>
                        <h3>Coupons & Offers</h3>
                    </Row>
                    <Row className="py-4">
                        <Col md={6}>
                            <img src={img1} style={{width:'100%'}} alt="coupen1.jpg" />
                        </Col>
                        <Col md={6}>
                            <img src={img2} style={{width:'100%'}} alt="coupen2.jpg" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="py-4">
                        <Col>
                            <h3 style={{color:'blue',fontFamily:'sans-serif', fontWeight:'bolder'}}>Explore</h3>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img3} style={{width:'100%'}} alt="Gold Jewelry" />
                                <Card.Body>
                                    <Card.Title>Gold Jewelry</Card.Title>
                                    <Card.Text>Discover our exquisite collection of gold jewelry.</Card.Text>
                                    <Link to="/gold">
                                        <Button variant="success">DISCOVER</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img4} style={{width:'100%'}} alt="Silver Jewelry" />
                                <Card.Body>
                                    <Card.Title>Silver Jewelry</Card.Title>
                                    <Card.Text>Explore our elegant range of silver jewelry.</Card.Text>
                                    <Link to="/silver">
                                        <Button variant="success">DISCOVER</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img5} style={{width:'100%'}} alt="Diamond Jewelry" />
                                <Card.Body>
                                    <Card.Title>Diamond Jewelry</Card.Title>
                                    <Card.Text>Experience the brilliance of our diamond jewelry collection.</Card.Text>
                                    <Link to="/diamond">
                                        <Button variant="success">DISCOVER</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img6} style={{width:'100%'}} alt="Platinum Jewelry" />
                                <Card.Body>
                                    <Card.Title>Platinum Jewelry</Card.Title>
                                    <Card.Text>Browse through our exclusive platinum jewelry pieces.</Card.Text>
                                    <Link to="/platinum">
                                        <Button variant="success">DISCOVER</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Home;
