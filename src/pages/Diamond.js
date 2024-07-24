import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../styles/Diamond.css';
import img1 from '../images/diamond1.webp';
import img2 from '../images/diamond2.jpg';
import img3 from '../images/diamond3.webp';
import img4 from '../images/diamond4.jpg';
import img5 from '../images/diamond5.jpg';
import img6 from '../images/diamond6.avif';

function Diamond() {
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

    const diamondItems = [
        { id: 1, img: img1, title: 'Diamond Necklace', description: 'Elegant diamond necklace with intricate designs.', price: '$2000' },
        { id: 2, img: img2, title: 'Diamond Bracelet', description: 'Stylish diamond bracelet perfect for any occasion.', price: '$1500' },
        { id: 3, img: img3, title: 'Diamond Earrings', description: 'Dazzling diamond earrings that add a touch of glamour.', price: '$1000' },
        { id: 4, img: img4, title: 'Diamond Ring', description: 'Beautiful diamond ring with precious gemstones.', price: '$3000' },
        { id: 5, img: img5, title: 'Diamond Pendant', description: 'Elegant diamond pendant that complements any outfit.', price: '$1200' },
        { id: 6, img: img6, title: 'Diamond Bangle', description: 'Stunning diamond bangle that exudes sophistication.', price: '$1800' }
    ];

    return (
        <div>
            <Container className="diamond-page">
                <h2 className="text-center my-4">Our Diamond Collection</h2>
                <Row>
                    {diamondItems.slice(0, 3).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={`Diamond Jewelry ${item.id}`} />
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
                    {diamondItems.slice(3).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={`Diamond Jewelry ${item.id}`} />
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

export default Diamond;
