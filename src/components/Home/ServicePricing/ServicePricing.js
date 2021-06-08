import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Row, Spinner, Tab } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Fade from 'react-reveal/Fade';
import battery from '../../../images/battery.jpg';
import computerRepair from '../../../images/computer_repair.jpg';
import check from '../../../images/check.jpg';
import service from '../../../images/mobile-re.jpg';
import PricingItem from '../PricingItem/PricingItem';
import './ServicePricing.css';

const ServicePricing = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://pacific-chamber-36634.herokuapp.com/services')
            .then(res => {
                setServices(res.data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])

    return (
        <section className="pricing-section" id="pricing">
            <Fade bottom duration={2500} distance="40px">
                <Container className="my-md-5">
                    <Col xs={12}>
                        <div className="pricing-title text-center">
                            <span>Best...Pricing...Plan</span>
                            <h2>Services Packages</h2>
                        </div>
                    </Col>
                    <Row >
                        <Col xs={12}>
                            <Tab.Container defaultActiveKey="1">
                                <Nav className="pricing-nav d-flex justify-content-center">
                                    <Nav.Item className="pricing-content-1">
                                        <Nav.Link eventKey="1">
                                            <img alt="" src={computerRepair} width="35" height="35" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="pricing-content-2">
                                        <Nav.Link eventKey="2">
                                            <img alt="" src={check} width="40" height="40" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="pricing-content-3">
                                        <Nav.Link eventKey="3">
                                            <img alt="" src={battery} width="36" height="36" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="pricing-content-4">
                                        <Nav.Link eventKey="4">
                                            <img alt="" src={service} width="40" height="40" />
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="d-flex justify-content-center">
                                    {
                                        loading ?
                                            <div className="text-center">
                                                <Spinner animation="border" variant="danger" />
                                            </div>
                                            : services.map((data, idx) => <PricingItem key={idx} id={idx} data={data} />)
                                    }
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section>
    );
};

export default ServicePricing;