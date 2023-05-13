import React from 'react';
import PropTypes from 'prop-types';

const QuoteDisplay = ({ quote }) => (
  <div>
    <p className="quote-text">
      &quot;
      {quote}
      &quot;
    </p>
  </div>
);

QuoteDisplay.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default QuoteDisplay;
