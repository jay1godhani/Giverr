import React from "react";
<<<<<<< HEAD
import "./Add.scss";

const Add = () => {
  return (<div className="add">
    <div className="container">
      <h1>Add New Gig</h1>
      <div className="sections">
        <div className="left">
          <label htmlFor="">Title</label>
          <input type="text" placeholder="e.g I will do something I'm really good at" />
          <label htmlFor="">Category</label>
          <select name="cats" id="cats">
            <option value="design">Design</option>
            <option value="Web">Web Development</option>
            <option value="Animation">Animation</option>
            <option value="Music">Music</option>

          </select>
          <label htmlFor="">Cover Image</label>
          <input type="file" />
          <label htmlFor="">Uplod Images</label>
          <input type="file" multiple />
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="16" placeholder="Brief descriptions to introduce your service to cutomer"></textarea>
          <button>Create</button>
        </div>
        <div className="right">
          <label htmlFor="">Service Title</label>
          <input type="text" placeholder="e.g.One-page web design" />
          <label htmlFor="">Short Description</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="Short descriptions to introduce your service to cutomer"></textarea>
          <label htmlFor="">Delivery Time(e.g. 3days)</label>
          <input type="number" min={1} />
          <label htmlFor="">Revision Number</label>
          <input type="number" min={1} />
          <label htmlFor="">Add Features</label>
          <input type="text" placeholder="e.g. page design" />
          <input type="text" placeholder="e.g. file uploading" />
          <input type="text" placeholder="e.g. setting up to domain" />
          <input type="text" placeholder="e.g. Hosting" />
          <label htmlFor="">Price</label>
          <input type="number" min={1} />
        </div>

      </div>
    </div>

  </div>);
=======

const Add = () => {
  return <div className="add">Add</div>;
>>>>>>> 6ee63e9f372ae97c083fe4c2fb8522e89f8e20bb
};

export default Add;
