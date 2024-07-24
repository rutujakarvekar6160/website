import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../styles/Silver.css';
import img1 from '../images/img11.jpg';
import img2 from '../images/img12.webp';
import img3 from '../images/img13.jpg';
import img4 from '../images/img14.webp';
import img5 from '../images/img15.jpg';
import img6 from '../images/img16.avif';

function Silver() {
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

    const silverItems = [
        { id: 1, img: img1, title: 'Silver Necklace', description: 'Elegant silver necklace with intricate designs.', price: '$500' },
        { id: 2, img: img2, title: 'Silver Bracelet', description: 'Stylish silver bracelet perfect for any occasion.', price: '$300' },
        { id: 3, img: img3, title: 'Silver Earrings', description: 'Dazzling silver earrings that add a touch of glamour.', price: '$200' },
        { id: 4, img: img4, title: 'Silver Ring', description: 'Beautiful silver ring with precious gemstones.', price: '$400' },
        { id: 5, img: img5, title: 'Silver Pendant', description: 'Elegant silver pendant that complements any outfit.', price: '$250' },
        { id: 6, img: img6, title: 'Silver Bangle', description: 'Stunning silver bangle that exudes sophistication.', price: '$350' }
    ];

    return (
        <div>
            <Container className="silver-page">
                <h2 className="text-center my-4">Our Silver Collection</h2>
                <Row>
                    {silverItems.slice(0, 3).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={`Silver Jewelry ${item.id}`} />
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
                    {silverItems.slice(3).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={`Silver Jewelry ${item.id}`} />
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

export default Silver;
