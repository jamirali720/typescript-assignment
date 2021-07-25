import React from 'react';


interface IProps{
    name : string , 
    email?: string,
    
}
const cardStyle ={
    boxShadow: '0 0 5px 1px gray',
    width: '400px', 
    height: '100px',
    margin: ' 0 auto'
}
const Contact = ({name, email = 'N/A'}: IProps): JSX.Element => {
    return (
        <div style={cardStyle}>
            <p>
                <strong>Name: </strong> {name}
            </p>
            <p>
                <strong> Email: </strong> {email}
            </p>
           
            
        </div>
    );
};

export const ContactDemo : React.FC<IProps>= ({name, email = 'N/A'}) => {
     return (
       <div style={cardStyle}>
         <p>
           <strong>Name: </strong> {name}
         </p>
         <p>
           <strong> Email: </strong> {email}
         </p>
       </div>
     );
}

export default Contact;