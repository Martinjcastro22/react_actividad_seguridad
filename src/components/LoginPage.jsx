import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Card, Button} from "react-bootstrap";

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Container className="mt-5" >
            <Card style={{ width: '18rem', margin: '0 auto' }}> 
                <Card.Body>
                    <Card.Title>Iniciar Sesión</Card.Title>
                    <Card.Text>
                        Haz click en el botón para Iniciar sesión o registrarte.
                    </Card.Text>
                    <Button variant="primary" onClick={() => loginWithRedirect()}>
                        Iniciar Sesión con Auth0
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LoginPage;