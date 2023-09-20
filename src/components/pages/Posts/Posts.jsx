import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";



const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)

    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-10 ">User Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border p-10">
            {
                posts.map((post) => <Post key={post.div} post={post}></Post>)
            }
          </div>
        </div>
    );
};

export default Posts;