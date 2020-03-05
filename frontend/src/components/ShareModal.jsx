import React from 'react';
import {makeAction} from '../redux/actions/makeAction';
import {REMOVE_DIAMOND} from '../redux/actions/actionTypes';
import {connect} from 'react-redux';
import {Button, Form, Modal} from 'react-bootstrap';

const ShareModal = ({show, handleClose}) => {

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Send notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
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
                <Button variant="primary" onClick={handleClose}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    sendEmail: makeAction(REMOVE_DIAMOND),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShareModal);
