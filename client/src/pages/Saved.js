import React, { Component } from "react";
import API from "../utils/API";
import SavedResults from "../components/SavedResults";
import { Container, Row} from "react-bootstrap";

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <h1 className="title">Saved books</h1>
                    </Row>
                    <Row>
                        <SavedResults books={this.state.savedBooks} />
                    </Row>
                </Container>
            </>
        )
    }
}

export default Saved;
