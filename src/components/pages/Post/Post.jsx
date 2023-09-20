import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className="p-6 bg-orange-200 rounded-lg space-y-3 text-center">
            <h1 className="text-2xl font-bold">Post Id : {id}</h1>
            <h1 className="text-xl text-center font-semibold"> {title}</h1>
           <div className="p-4 bg-blue-500 text-white text-base rounded-lg  font-bold">
           <Link to={`/post/${id}`}>Show Post Details</Link>
           </div>
        </div>
    );
};

export default Post;