import React, { useState, useEffect } from 'react';
import QuoteDisplay from './QuoteDisplay';
import AuthorDisplay from './AuthorDisplay';

function QuoteContainer() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const category = 'cool';
        const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'nlRPj0maetlZ6qJfu8EsIA==ImM73OwFjTLS6kIK',
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const result = await response.json();
        setQuote(result[0].quote);
        setAuthor(result[0].author);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <p className="loading-text">Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error.message}
      </p>
    );
  }

  return (
    <div>
      <blockquote className="quote-container">
        <QuoteDisplay quote={quote} />
        <AuthorDisplay author={author} />
      </blockquote>
    </div>
  );
}

export default QuoteContainer;
