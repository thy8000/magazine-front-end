import CardHorizontal from "../../../components/CardHorizontal";

export default function PostsList({posts, title}: any) {
    if(posts.length == 0) {
        return;
    }

    return (
        <div className="container py-14">
            <h2 className="text-2xl text-title font-medium font-secondary">{title}</h2>

            <div className="pt-4">
                {posts.map((post: any) => (
                    <CardHorizontal 
                        post={post}
                    />
                ))}
            </div>
        </div>
    )
}