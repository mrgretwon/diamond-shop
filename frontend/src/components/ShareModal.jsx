import React, {useState} from 'react';
import {makeAction} from '../redux/actions/makeAction';
import {connect} from 'react-redux';
import {Button, Form, Modal} from 'react-bootstrap';
import {SEND_EMAIL} from '../redux/actions/actionTypes';

const ShareModal = ({show, handleClose, sendEmail}) => {

    const [email, setEmail] = useState('');

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Send notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            Information about your cart will be sent to you.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    handleClose();
                    sendEmail({email});
                }}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapDispatchToProps = {
    sendEmail: makeAction(SEND_EMAIL),
};

export default connect(
    null,
    mapDispatchToProps,
)(ShareModal);
