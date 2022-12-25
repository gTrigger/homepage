import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            This page does not exist. Please, return to the <Link to="/">Homepage</Link>
        </div>
    );
}

export { NotFound };
