import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../store/productReducer';
import { addToCart } from '../store/cartReducer';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from "react-icons/ri";
// import { useState } from 'react';

import { Row, Col, Card, Button } from 'react-bootstrap'; // Import Row and Col from react-bootstrap

export default function CartList() {
    const [cartCount, setCartCount] = useState(0);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                dispatch(setProducts(response.data));
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setCartCount(prevCount => prevCount + 1); // Increment cartCount
    };

    return (
        <>
            <Row>

                <Link to="/viewCart">
                    <Button variant="primary" style={{ float: 'right', marginBottom: '24px' }}>View Cart({cartCount})</Button>
                </Link>
            </Row>
            <Row xs={1} md={4} className="g-4"> {/* Specify 1 column for xs screens and 4 columns for md screens */}


                {products.map(product => (
                    <Col key={product.id}>
                        <Card style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                                <Button variant="primary" onClick={() => handleAddToCart(product)}><RiShoppingCartLine />Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
