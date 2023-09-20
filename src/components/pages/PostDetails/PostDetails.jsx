import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
const {id, title, body} = postDetails;

    return (
        <div className="p-16 bg-slate-100">
            <h1 className="text-center text-3xl font-bold my-10">User Post Details</h1>
            <h1 className="text-center text-3xl font-bold my-10">User Id: {id}</h1>
            <h1 className="text-center text-3xl font-bold my-10">{title}</h1>
            <h1 className="text-center text-3xl font-bold my-10"><small>{body}</small></h1>
        </div>
    );
};

export default PostDetails;