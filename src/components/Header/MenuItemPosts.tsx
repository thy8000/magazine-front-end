import { useQuery, gql } from "@apollo/client";
import { PostsByTermIDQuery } from '../../queries/_index';
import Image  from 'next/image';

export default function MenuItemPosts({termID}: any) {
    const data = useQuery(PostsByTermIDQuery, {variables: {termID: termID}});

    const posts = getPostsByTermID(data);

    if(posts.length == 0) {
        return null;
    }

    return (
        <ul className="absolute top-[4.688rem] left-1/2 -translate-x-2/4 bg-black w-screen max-w-[1200px]">
            {posts.map((post: any) => (
                <li key={post.id} className="w-full h-[3.125rem]">
                    <a href={post.link} className="flex justify-center items-center h-full text-white hover:text-white/80">
                        {post.featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl && (
                            <Image
                                className="w-auto"
                                src={post.featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl ?? ''}
                                alt={post.featuredImage?.node?.altText ?? ''}
                                width={260}
                                height={144}
                            />
                        )}
                        {post.title}
                    </a>
                </li>
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