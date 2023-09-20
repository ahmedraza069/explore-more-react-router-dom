import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();

    console.log(user)
    const {name , email, website} = user;
    return (
        <div className="my-10 text-center">
            <h1 className="text-center text-3xl">User Details</h1>
           <div className="my-10">
           <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
            <h2>Website : {website}</h2>
           </div>
        </div>
    );
};

export default UserDetails;