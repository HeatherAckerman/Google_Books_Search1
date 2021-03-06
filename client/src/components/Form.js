import React from "react";
import { Container, Row } from "react-bootstrap";

function Form(props) {
    return (
        <>
            <Container>
                <Row>
                    <h1 className="title">Google Books Search</h1>
                </Row>
                <br />
                <Row>
                    <input className="input"
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                       
                    />
                    <button className="btn" onClick={props.handleFormSubmit}>
                        Search
                    </button>
                </Row>
            </Container>
        </>
    );
}

export default Form;