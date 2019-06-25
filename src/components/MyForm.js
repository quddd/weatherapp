import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class MyForm extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.getWeather}>
          <Form.Group className="row">
            <Form.Control
              className="col-sm-4"
              type="text"
              name="city"
              placeholder="Enter City"
            ></Form.Control>
            <Button className="col-sm-1" variant="primary" type="submit">
              Enter
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default MyForm;
