import { Link } from 'react-router-dom';
import QuoteContainer from './QuoteContainer';

function Quote() {
  return (
    <div>
      <nav className="header">
        <h1 className="title">📐 Math Magicians📏</h1>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/Math-Magicians">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/Math-Magicians/calculator">Calculator</Link>
          </li>
          <li className="menu-item">
            <Link to="/Math-Magicians/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <QuoteContainer />
    </div>
  );
}

export default Quote;
