import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { getUser } from '../../services/users';
import './DetailUser.css';

function DetailUser() {

  const [user, setUser] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(id);
      setUser(user);
      setLoaded(true);
    }
    fetchUser();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="user-detail">
        <div id="details-header">
          <NavLink id="arrow-link" to="/dashboard">
            <img id="arrow" src="/assets/arrow-icon.png" alt="backpointing arrow" />
          </NavLink>
          <h1 id="details-h1">User Details</h1>
        </div>
        <div className="info-box">
          <div className='details-box'>
            <div id='fullname'><span>Name: </span>{user.fullname}</div>
            <div id='email'><span>Email: </span>{user.email}</div>
            <div id='state'><span>State: </span>{user.state}</div>
            <div id='district'><span>District: </span>{user.district}</div>
            <div id='gradeLevel'><span>Grade Level: </span>{user.gradeLevel}</div>
            <div id="subjects"><span>Subjects: </span>{user.subjects}</div>
          </div>
          <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/users/${user._id}/edit`}>Edit</Link></button>
            <button className="delete-button"><Link className="delete-link" to={`/users/${user._id}/delete`}>Delete</Link></button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailUser;