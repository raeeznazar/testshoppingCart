import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
        <div>
            <Row className="mt-3 justify-content-center">
                <Col md="auto">
                    <h3 style={{ textAlign: 'center', color: 'blue', fontSize: '24px' }}>SHOPPING CART</h3>
                </Col>
            </Row>
        </div>
    )
}