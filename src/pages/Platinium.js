import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../styles/Platinium.css';
import img1 from '../images/platinium1.webp';
import img2 from '../images/platinium2.webp';
import img3 from '../images/platinium3.jpg';
import img4 from '../images/platinium4.jpg';
import img5 from '../images/platinium5.jpg';
import img6 from '../images/platinium6.avif';

function Platinium() {
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const addToCart = (item) => {
        setCart([...cart, item]);
        toggleModal();
    };

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2);
    };

    const platiniumItems = [
        { id: 1, img: img1, title: 'Platinium Necklace', description: 'Elegant platinium necklace with intricate designs.', price: '$800' },
        { id: 2, img: img2, title: 'Platinium Bracelet', description: 'Stylish platinium bracelet perfect for any occasion.', price: '$600' },
        { id: 3, img: img3, title: 'Platinium Earrings', description: 'Dazzling platinium earrings that add a touch of glamour.', price: '$400' },
        { id: 4, img: img4, title: 'Platinium Ring', description: 'Beautiful platinium ring with precious gemstones.', price: '$700' },
        { id: 5, img: img5, title: 'Platinium Pendant', description: 'Elegant platinium pendant that complements any outfit.', price: '$550' },
        { id: 6, img: img6, title: 'Platinium Bangle', description: 'Stunning platinium bangle that exudes sophistication.', price: '$650' }
    ];

    return (
        <div>
            <Container className="platinium-page">
                <h2 className="text-center my-4">Our Platinium Collection</h2>
                <Row>
                    {platiniumItems.slice(0, 3).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={`Platinium Jewelry ${item.id}`} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Card.Text><strong>Price: {item.price}</strong></Card.Text>
                                    <Button variant="success" onClick={() => addToCart(item)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {platiniumItems.slice(3).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={`Platinium Jewelry ${item.id}`} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Card.Text><strong>Price: {item.price}</strong></Card.Text>
                                    <Button variant="success" onClick={() => addToCart(item)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index} className="d-flex align-items-center mb-3">
                                        <img src={item.img} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                                        <div>
                                            <h6>{item.title}</h6>
                                            <p>{item.price}</p>
                                        </div>
                                        <Button variant="danger" onClick={() => removeFromCart(index)} style={{ marginLeft: 'auto' }}>Remove</Button>
                                    </li>
                                ))}
                            </ul>
                            <h5>Total Price: ${getTotalPrice()}</h5>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>Close</Button>
                    <Button variant="primary">Checkout</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Platinium;
