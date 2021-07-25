import React from 'react';

interface IProps {
  name: string;
  email?: string;
  handleRemove: (email: string) => void;
}

const cardStyle = {
  boxShadow: "0 0 5px 1px gray",
  width: "400px",
  height: "100px",
  margin: " 0 auto",
};
const ContactUserDetail = ({name, email = 'N/A', handleRemove}: IProps): JSX.Element => {
    return (
      <div style={cardStyle}>
        <p>
          <strong>Name: </strong> {name}
        </p>
        <p>
          <strong> Email: </strong> {email}
        </p>
        <button onClick={() => handleRemove(email)}>Remove Contact</button>
      </div>
    );
};

export default ContactUserDetail;