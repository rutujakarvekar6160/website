import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../styles/Gold.css';
import img1 from '../images/gold1.jpg';
import img2 from '../images/gold2.jpg';
import img3 from '../images/gold3.jpg';
import img4 from '../images/gold4.jpg';
import img5 from '../images/gold5.jpg';
import img6 from '../images/gold6.jpg';

function Gold() {
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

    const goldItems = [
        { id: 1, img: img1, title: 'Gold Necklace', description: 'Elegant gold necklace with intricate designs.', price: '$2000' },
        { id: 2, img: img2, title: 'Gold Bracelet', description: 'Stylish gold bracelet perfect for any occasion.', price: '$1500' },
        { id: 3, img: img3, title: 'Gold Earrings', description: 'Dazzling gold earrings that add a touch of glamour.', price: '$1000' },
        { id: 4, img: img4, title: 'Gold Ring', description: 'Beautiful gold ring with precious gemstones.', price: '$3000' },
        { id: 5, img: img5, title: 'Gold Pendant', description: 'Elegant gold pendant that complements any outfit.', price: '$1200' },
        { id: 6, img: img6, title: 'Gold Bangle', description: 'Stunning gold bangle that exudes sophistication.', price: '$1800' },
    ];

    return (
        <div>
            <Container className="gold-page">
                <h2 className="text-center my-4">Our Gold Collection</h2>
                <Row>
                    {goldItems.slice(0, 3).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={`Gold Jewelry ${item.id}`} />
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
                    {goldItems.slice(3).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={`Gold Jewelry ${item.id}`} />
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

export default Gold;
