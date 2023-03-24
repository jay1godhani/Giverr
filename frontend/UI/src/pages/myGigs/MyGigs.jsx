import React from "react";
<<<<<<< HEAD
import "./MyGigs.scss";
import { Link } from "react-router-dom";

const MyGigs = () => {
  return(
  <div className="myGigs">
    <div className="container">
      <div className="title">
        <h1>Gigs</h1>
        <Link to="/add">
          <button>Add new Gig</button>
        </Link>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Sales</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>
            <img className="img" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Gigs1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className="delete" src="./img/delete.png" alt="" />
          </td>
        </tr>

      </table>
    </div>
  </div>
  );
=======

const MyGigs = () => {
  return <div className="mygigs">MyGigs</div>;
>>>>>>> 6ee63e9f372ae97c083fe4c2fb8522e89f8e20bb
};

export default MyGigs;
