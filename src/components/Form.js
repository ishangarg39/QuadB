import React from 'react';

export default function Form() {
  const handleSubmit = event => {
    event.preventDefault();
    // Access form values using event.target
    const userName = event.target.userName.value;
    const email = event.target.email.value;

    // Do something with the user details
    console.log('User details:', userName, email);
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@Username</span>
          <input
            type="text"
            name="userName"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Recipient's Email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">Email</span>
        </div>

        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
