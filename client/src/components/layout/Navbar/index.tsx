import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="flex py-2 pl-2 bg-green-500">
        <Link className="flex-none py-1 px-2 mr-4 border-2 rounded-xl" to="/">
          Home
        </Link>
        <Link
          className="flex-none py-1 px-2 mr-4 border-2 rounded-xl"
          to="/about"
        >
          About
        </Link>
        <Link className="flex-none p-1 px-2 border-2 rounded-xl" to="/users">
          Users
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
