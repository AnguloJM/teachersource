import React, { useState, useEffect } from 'react';
import { useParams, Redirect, NavLink, Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'
import Layout from '../../components/shared/Layout/Layout';
import { getUser, deleteUser } from '../../services/users';
import './DeleteUser.css';

const DeleteUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState({
    fullname: '',
    email: '',
    state: '',
    district: '',
    gradeLevel: '',
    subjects: [],
  });

  const [isDeleted, setDeleted] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(id);
      setUser(user);
    }
    fetchUser();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const deleted = await deleteUser(id, user);
    setDeleted(deleted);
  }

  if (isDeleted) {
    return <Redirect to={`/dashboard`} />;
  }

  return (
    <Layout>
      <div id="delete-container">
        <div id="details-header">
          <NavLink id="arrow-link" to="/dashboard">
            <img id="arrow" src="/assets/arrow-icon.png" alt="backpointing arrow" />
          </NavLink>
          <h1 id="delete-h1">Are you sure you want to delete?</h1>
        </div>
        <div id='delete-details-box'>
          <div id='fullname'><span>Name: </span>{user.fullname}</div>
          <div id='email'><span>Email: </span>{user.email}</div>
          <div id='state'><span>State: </span>{user.state}</div>
          <div id='district'><span>District: </span>{user.district}</div>
          <div id='gradeLevel'><span>Grade Level: </span>{user.gradeLevel}</div>
          <div id="subjects"><span>Subjects: </span>{user.subjects}</div>
        </div>
        <div id="delete-form-box">
          <form id="delete-button-box" onSubmit={handleSubmit}>
            <Link to={`/users/${user._id}/edit`}><button id="ed-btn">No, Don't Delete</button></Link>
            <Button id="bootstrap-delete-user-button" onClick={handleShow}>
            Yes, Delete
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title variant="danger">¡Alert!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this lesson? You cannot undo this action.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Cancel
                </Button>
                <Link to='/login'><Button variant="danger" onClick={() => deleteUser(user._id)} >I'm sure</Button></Link>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default DeleteUser