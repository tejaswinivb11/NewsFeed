import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

    const Login = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        // Data to be sent to the backend
        const loginData = {
            name: name,
            age: age
        };

        try {
            // Sending POST request to the backend
            const response = await axios.post('http://127.0.0.1:8000/api/login/', loginData);

            // Handle success response
            if (response.status === 200) {
                setSuccess("Login successful!");
                setError(null);
                navigate('/NewsBoard');
            }
        } catch (err) {
            // Handle error response
            setError("Login failed. Please check your credentials.");
            setSuccess(null);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={6} lg={4} className="mx-auto">
                    <Card className="shadow p-3 mb-5 bg-white rounded">
                        <Card.Body>
                            <h3 className="text-center">Login</h3>

                            {/* Success message */}
                            {success && <Alert variant="success" className="mt-3">{success}</Alert>}

                            {/* Error message */}
                            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="formName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter name" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>

                                <Form.Group controlId="formAge" className="mb-3">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter age" 
                                        value={age} 
                                        onChange={(e) => setAge(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};


export default Login;
