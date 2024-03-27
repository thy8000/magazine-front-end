import { useQuery, gql } from "@apollo/client";
import { PostsByTermIDQuery } from '../../queries/_index';
import { CardVertical } from "../_index";

export default function MegaMenu({termID}: any) {
    const data = useQuery(PostsByTermIDQuery, {variables: {termID: termID}});

    const posts = getPostsByTermID(data);

    if(posts.length == 0) {
        return null;
    }

    return (
        <ul className="absolute top-[4.688rem] left-1/2 -translate-x-2/4 hidden group-hover/menu:flex bg-black p-8 w-screen max-w-[1200px]">
            {posts.map((post: any) => (
                <CardVertical 
                    post={post}
                />
            ))}
        </ul>
    )
}

function getPostsByTermID(data: any) {
    let postsData = data?.data?.posts?.nodes ?? [];

    if(postsData.length == 0) {
        return [];
    }

    return postsData;
}