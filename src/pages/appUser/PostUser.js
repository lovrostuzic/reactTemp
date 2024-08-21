import { useState } from "react";
import "./PostUser.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostUser = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        role: '',
    }
    );

    const handleInputChange = (event) => {
        const {
            name, value
        } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const navigate = useNavigate


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
        try {
            const response = await fetch("http://localhost:8080/api/appUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log("AppUser created", data);
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="center-form">
                <h1>Post New AppUser</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formPostAppUser">
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPostAppUser">
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Enter Lastname"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPostAppUser">
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPostAppUser">
                        <Form.Control
                            type="text"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPostAppUser">
                        <Form.Control
                            type="text"
                            name="role"
                            placeholder="Enter role"
                            value={formData.role}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">Post AppUser</Button>
                </Form>
            </div >
        </>
    )
}

export default PostUser; 