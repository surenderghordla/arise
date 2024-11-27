import { Col, Row, Form, FormGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link, Outlet } from 'react-router-dom';
export default function AddPatient() {
    return (
        <Form className='mb-8' className='form' >
            <h3 className='mb-4' >New Patient</h3>
            <Form.Group className="mb-3" >
                <Form.Label>Patient Id</Form.Label>
                <Form.Control type="number" placeholder="IN/10/2024/0002" />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control type="text" placeholder="Patient Name" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" >
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" />
                </Form.Group>
            </Row>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>Gender:</Form.Label>
                <Form.Group as={Col} className="mb-3">
                    <Form.Check type='radio' label='Male' name='gender'></Form.Check>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Check type='radio' label='Female' name='gender'></Form.Check>
                </Form.Group><Form.Group as={Col} className="mb-3">
                    <Form.Check type='radio' label='Other' name='gender'></Form.Check>
                </Form.Group>
                <Row className='mb-3'>
                    <FormGroup as={Col} className="mb-3">
                        <Form.Label>Contact-No</Form.Label>
                        <Form.Control type='number' placeholder='Contact-No'></Form.Control>
                    </FormGroup>
                    <FormGroup as={Col} className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Email'></Form.Control>
                    </FormGroup>
                </Row>
                <Form.Group className="mb-3" >
                    <Form.Label>Street Address </Form.Label>
                    <Form.Control type="text" placeholder="Street Address" />
                </Form.Group>
                <Row className='mb-3'>
                    <FormGroup as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder='City' defaultValue="Hisar"></Form.Control>
                    </FormGroup>
                    <FormGroup as={Col} className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control type='text' placeholder='State' defaultValue="Haryana"></Form.Control>
                    </FormGroup>
                    <FormGroup as={Col} className="mb-3">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type='text' placeholder='Zip Code' defaultValue="125001"></Form.Control>
                    </FormGroup>
                </Row>
                <Row className='mb-3'>
                    <FormGroup as={Col} className="mb-3">
                        <Link to='/'>
                        <Button variant='outline-warning'>Cencel</Button>
                        </Link>
                        <Button variant='outline-success'>Save</Button>
                    </FormGroup>
                </Row>
            </Form.Group>
            <Outlet />

        </Form >
    )
}
