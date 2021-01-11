import react from 'react'
import {Form,Col,Button} from 'react-bootstrap'
import './Nav.css'
const Nav=()=> {
    return (
        <div>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label className="label">Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label className="label">Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label className="label">Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label className="label">Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label className="label">City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label className="label"className="label">State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option className="label">Choose...</option>
        <option >...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label className="label">Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" style={{color:'blue'}}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    );
}
export default Nav;
