import React from 'react';

const linkStyles = {
  color: 'white',
  display: 'inline-block',
  margin: '0 0.5rem',
  padding: '0.25rem',
  textDecoration:'none',
  textAlign: `center`
};

const SocialMediaLink = ({ children, href, title }) => (
  <a href={href} style={linkStyles} title={title} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default SocialMediaLink;