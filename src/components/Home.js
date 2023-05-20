import { Link } from 'react-router-dom';

function Home() {
  const characterCount = 500;
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam consectetur felis nec commodo. Integer consectetur sed neque nec ultrices. Sed facilisis tristique ligula, ut consectetur libero posuere nec. Duis fringilla nulla ac aliquet rutrum. Maecenas eu elit at neque dapibus mollis. Aliquam erat volutpat. Morbi quis pulvinar purus. Sed sagittis quam id nisl fermentum, a scelerisque felis fermentum. Proin imperdiet ante at lorem finibus, non posuere arcu condimentum. Etiam eu lorem justo. Morbi rutrum felis vel tempor varius. Aliquam erat volutpat. Morbi quis felis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce auctor odio id libero consectetur, vitae fermentum mi tristique.';

  const limitedLorem = lorem.substring(0, characterCount);

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
      <section className="home-container" data-testid="lorem-container">
        <h1 className="home-title">Welcome to our page!</h1>
        <p className="lorem-text">{limitedLorem}</p>
        <p className="lorem-text">{limitedLorem}</p>
      </section>
    </div>
  );
}

export default Home;
