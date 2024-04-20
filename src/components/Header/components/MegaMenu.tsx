import { useQuery, gql } from "@apollo/client";
import { MegaMenuPostsByTermID } from '../../../queries/_index';
import { CardVertical } from "../../_index";

export default function MegaMenu({categoryID}: any) {
    const postsData = useQuery(MegaMenuPostsByTermID, {variables: {categoryID: categoryID}});

    let posts = postsData?.data?.posts?.nodes ?? [];

    if(posts.length == 0) {
        return null;
    }

    return (
        <ul className="absolute top-[4.688rem] left-1/2 -translate-x-2/4 hidden group-hover/menu:hidden lg:group-hover/menu:flex bg-megaMenu p-8 w-screen max-w-[1200px]">
            {posts.map((post: any) => (
                <CardVertical 
                    post={post}
                />
            ))}
        </ul>
    )
}