import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';

const Details = () => {
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const { title, desc, imageUrl, author, date } = location.state;

  useEffect(() => {
    // Effect logic goes here if needed
  }, []);

  const handleReadMoreClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="show-item">
      <div class="carousel-item active">
       <div className="carousel-inner" style={{ width: "30%", height:"40%", display:"flex" }}> <img  className="d-block w-100" src={imageUrl}  alt="..." /></div>
      </div>
      </div>
      <div className="card-body">
        <p className="card-text">{desc}</p>
        <p className="card-text">
          <small className="text-muted">Author: {!author ? "Unknown" : author} Date: {new Date(date).toGMTString()}</small>
        </p>
        <p onClick={handleReadMoreClick} className="btn btn-btn-sn btn-dark">
        Book Ticket
        </p>
      </div>
      {showForm && <Form />}
    </div>
  );
};

export default Details;
