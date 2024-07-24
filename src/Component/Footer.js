import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import '../styles/Footer.css'

function Footer() {
    return (
        <div>
            <section className="footer">
                <Container>
                    <Row className="text-center py-5">
                        <Col sm={3}>
                            <h4>Explore</h4>
                            <ul>
                                <li><Link to="#">Gold Jewelry</Link></li>
                                <li><Link to="#">Silver Jewelry</Link></li>
                                <li><Link to="#">Diamond Jewelry</Link></li>
                                <li><Link to="#">Platinum Jewelry</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>About Us</h4>
                            <ul>
                                <li><Link to="#">Our Story</Link></li>
                                <li><Link to="#">Store Locations</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">Customer Reviews</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>Customer Service</h4>
                            <ul>
                                <li><Link to="#">Shipping Information</Link></li>
                                <li><Link to="#">Returns & Exchanges</Link></li>
                                <li><Link to="#">FAQs</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>Social Media</h4>
                            <ul className="icons">
                                <li><Link to="#"><FacebookIcon /></Link></li>
                                <li><Link to="#"><YouTubeIcon /></Link></li>
                                <li><Link to="#"><InstagramIcon /></Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <hr style={{ color: 'white', border: '1px solid white' }} />
                <h6 style={{ color: 'white', textAlign: 'center' }}>Copyright Reserved @2024 Your Jewelry Store & Rutuja Karvekar</h6>
            </section>
        </div>
    );
}

export default Footer;
