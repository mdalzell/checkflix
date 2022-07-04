import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { year = "2022" } = useParams();
  return (
    <header>
      <Link to="/">
        <h1>CheckFlix</h1>
      </Link>
    </header>
  );
};

export default Header;
