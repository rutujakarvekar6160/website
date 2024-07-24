import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/About.css';
import aboutImage from '../images/about01.jpg'; // Ensure you have an appropriate image

function About() {
    return (
        <div>
            <Container className="about-us">
                <Row className="py-5">
                    <Col md={6}>
                        <Image src={aboutImage} alt="About Us" fluid />
                    </Col>
                    <Col md={6}>
                        <h2>About Us</h2>
                        <p>
                            Welcome to [Your Jewelry Store], where timeless elegance meets modern design. Our journey began with a passion for creating exquisite jewelry that captures the essence of beauty and craftsmanship.
                        </p>
                        <p>
                            Founded in [Year], our brand has grown from a small boutique to a renowned name in the jewelry industry. We take pride in offering a diverse collection of finely crafted pieces, from classic gold and silver to dazzling diamonds and unique platinum designs.
                        </p>
                        <p>
                            At [Your Jewelry Store], our mission is to provide exceptional quality and unparalleled customer service. Each piece in our collection is meticulously crafted to perfection, ensuring that it not only looks stunning but also stands the test of time.
                        </p>
                        <p>
                            Our team of skilled artisans and designers work tirelessly to bring you jewelry that is both beautiful and meaningful. We believe that jewelry is more than just an accessory; it is a symbol of love, a celebration of milestones, and an expression of individuality.
                        </p>
                        <p>
                            Thank you for choosing [Your Jewelry Store]. We look forward to helping you find the perfect piece to cherish for a lifetime.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
