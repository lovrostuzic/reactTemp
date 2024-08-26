import React, { useState, useEffect } from 'react';
import { Button, Container, Table, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [appUsers, setAppUsers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppUsers = async () => {
            try {
                const response = await fetch("http://localhost:8080/appUser/all");
                const data = await response.json();
      
                if (Array.isArray(data)) {
                    setAppUsers(data);
                } else {
                    setAppUsers([]); // Postavljanje na prazan niz ako nije niz
                }
            } catch (error) {
                console.error("Error fetching appUsers:", error.message);
                setAppUsers([]); // Postavljanje n a prazan niz u slučaju greške
            }
        };

        fetchAppUsers();
    }, []);

    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <h1 className='text-center'>AppUsers</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appUsers.map((appUser) => (
                                <tr key={appUser.id}>
                                    <td>{appUser.firstName}</td>
                                    <td>{appUser.lastName}</td>
                                    <td>{appUser.email}</td>
                                    <td>
                                        <Button variant='outline-secondary'>Update</Button>
                                        {" "}
                                        <Button variant="outline-danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;