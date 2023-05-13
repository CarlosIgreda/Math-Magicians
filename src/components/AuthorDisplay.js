import React from 'react';
import PropTypes from 'prop-types';

const AuthorDisplay = ({ author }) => (
  <div>
    <cite className="quote-author">
      &ndash;
      {' '}
      {author}
    </cite>
  </div>
);

AuthorDisplay.propTypes = {
  author: PropTypes.string.isRequired,
};

export default AuthorDisplay;
