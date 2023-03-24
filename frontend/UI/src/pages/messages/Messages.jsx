import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser={
    id:1,
    username:"John Doe",
    isSeller:true,
  }
  return(
  <div className="messages">
    <div className="container">
      <div className="title">
        <h1>Orders</h1>
        
      </div>
      <table>
        <tr>
          <th>Buyer</th>
          <th>Last Message</th>
          <th>Date</th>
          
          <th>Action</th>
        </tr>
        <tr className="active">
          <td>
            john Doe
          </td>
          <td><Link className="link" to="/message/123">kfkfk fdgkkkfk nfdnfdkfnknflk fkeenkgkfkefke</Link></td>
          <td>1 day ago</td>
          <td>
            <button>Marks as Read</button>
          </td>
          
        </tr>

        <tr className="active">
          <td>
            john Doe
          </td>
          <td><Link className="link" to="/message/123">kfkfk fdgkkkfk nfdnfdkfnknflk fkeenkgkfkefke</Link></td>
          <td>1 day ago</td>
          <td>
            <button>Marks as Read</button>
          </td>
          
        </tr>

        <tr >
          <td>
            john Doe
          </td>
          <td><Link className="link" to="/message/123">kfkfk fdgkkkfk nfdnfdkfnknflk fkeenkgkfkefke</Link></td>
          <td>1 day ago</td>
          
          
        </tr>

        <tr >
          <td>
            john Doe
          </td>
          <td><Link className="link" to="/message/123">kfkfk fdgkkkfk nfdnfdkfnknflk fkeenkgkfkefke</Link></td>
          <td>1 day ago</td>
          
          
        </tr>

      </table>
    </div>
  </div>
  );
};

export default Messages;


