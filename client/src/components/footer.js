import React from 'react'
import { Row, Container, Col } from 'reactstrap'

const Footer = () => (
    <div style={{
        backgroundColor: '#072a48',
        paddingTop: '50px',
        paddingBottom: '50px',
        color: 'white',
        textAlign: 'center'
    }}>
        <Container>
            <Row>
                <Col md-12 style={{ textAlign: 'center', paddingBottom: '30px' }}><b>Footer</b></Col>
            </Row>
            <Row>
                <Col md-4> About the brand</Col>
                <Col md-4> Career</Col>
                <Col md-4> Instangram</Col>
            </Row>
            <Row>
                <Col md-4> Order status</Col>
                <Col md-4> Our ecological action</Col>
                <Col md-4> Facebook</Col>
            </Row>
            <Row>
                <Col md-4> Contact us</Col>
                <Col md-4> I like som tum</Col>
                <Col md-4> Pinterest</Col>
            </Row>
            <Col md='12' style={{ textAlign: 'center', paddingTop: '30px' }}>Copyright your website © 2018 All Rights Reserved</Col>
        </Container>
    </div>
)

export default Footer;