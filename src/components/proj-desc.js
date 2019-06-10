import React from 'react';

const linkStyles = {
  color: 'black',
  textDecoration:'none',
};

const descStyles = {
  color: '#383838',
  display: 'inline-block',
  padding: '0.25rem',
  margin: '0 0.5rem',
};

const ProjDescription = ({ title, description, link }) => (
  <div>
    <h4><u><a style={linkStyles} href={link}>{title}</a></u></h4>
    <p style={descStyles}>{description}
    </p>
    
    <p></p>
  </div>
);

export default ProjDescription;