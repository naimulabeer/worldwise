import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1 className="test">My Homepage</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default Homepage;
