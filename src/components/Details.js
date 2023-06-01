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
    <div className="container">
      <h1>{title}</h1>
      <div className="row">
        <div className="col-lg-6">
          <img src={imageUrl} alt="Snow" className="img-fluid" />
        </div>
        <div className="col-lg-6">
        <div className="col-lg-12">{desc}</div>
        <small className="text-muted">

          Author: {!author ? 'Unknown' : author} Date: {new Date(date).toGMTString()}
        </small>
        <div><p onClick={handleReadMoreClick} className="btn btn-dark">
          Book Ticket
        </p>
        </div>
        </div>
      </div>

      
      
      {showForm && <Form />}
    </div>
  );
};

export default Details;
