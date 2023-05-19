import { Link } from 'react-router-dom';

const { loremIpsum } = require('lorem-ipsum');

function Home() {
  const characterCount = 10; // Change this to the desired count
  const lorem = loremIpsum({
    count: characterCount,
    format: 'plain',
  });

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
      <section className="home-container">
        <h1 className="home-title">Welcome to our page!</h1>
        <p className="lorem-text">{lorem}</p>
        <p className="lorem-text">{lorem}</p>
      </section>
    </div>
  );
}

export default Home;
