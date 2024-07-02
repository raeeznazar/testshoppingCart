// export default function Viewcart() {
//     return (
//         <>

//             ascadd
//         </>
//     )
// }




import Table from 'react-bootstrap/Table';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartReducer';
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap'; // Import Row and Col from react-bootstrap

const Viewcart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    const handleRemoveFromCart = (product) => {
        if (window.confirm(`Are you sure you want to remove ${product.title} from the cart?`)) {
            dispatch(removeFromCart(product));
        }
    };

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ?
                (<p>Cart is empty</p>) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td><button onClick={() => handleRemoveFromCart(item)}>Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}


        </div>
    );
};

export default Viewcart;
