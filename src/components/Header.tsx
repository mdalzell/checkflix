import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>CheckFlix</h1>
      </Link>
    </header>
  );
};

export default Header;
