import { Link } from "react-router-dom";


const User = ({user}) => {

    const {id, name, email, website} = user;
    return (
        <div className="p-4 bg-orange-200 space-y-3 text-center">
            <h1>User Name : {name}</h1>
            <h2>Email : {email}</h2>
            <h2>Website : {website}</h2>

            <div className="p-4 bg-blue-500 text-white text-base rounded-lg  font-bold">
                <Link to={`/user/${id}`}>Show Details</Link>
            </div>
        </div>
    );
};

export default User;