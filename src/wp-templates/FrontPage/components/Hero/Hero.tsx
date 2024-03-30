import { useQuery, gql } from "@apollo/client";
import { HeroPostIDQuery, HeroPostByIDQuery } from '../../../../queries/_index';

export default function Hero() {
    const { data: postIDData } = useQuery(HeroPostIDQuery);

    const { data: postByIDData } = useQuery(HeroPostByIDQuery, {
        skip: !postIDData,
        variables: {
            postID: getHeroPostID(postIDData)
        }
    });

    const heroPost = getHeroPostByID(postByIDData);

    if(heroPost.length == 0) {
        return;
    }

    const heroBackgroundImage = heroPost?.featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl ?? [];
    const heroCategory = heroPost?.categories?.nodes[0] ?? [];

    console.log(heroCategory);

    return (
        <section className="flex justify-center items-end w-full h-screen bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-screen before:bg-black/80 before:z-10" style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
            <div className="container">
                <div className="relative z-20 flex flex-col gap-6 py-20 text-link max-w-[90ch]">
                    <h2 className="text-4xl	font-medium text-link hover:text-linkHover transition-all duration-500 linear"><a href="#">{heroPost.title}</a></h2>

                    <div>
                        {heroCategory.length != 0 && (
                            <span className="py-1 px-1.5 bg-button text-link opacity-100 cursor-pointer hover:opacity-70 transition-all duration-500 linear">
                                {heroCategory.name}
                            </span>
                        )}
                    </div>
                            
                    <div dangerouslySetInnerHTML={{ __html: heroPost.excerpt }} className="font-medium font-secondary text-text">
                    </div>
                </div>
            </div>
        </section>
    );
}

function getHeroPostID(data: any) {
    const heroPostID = data?.themeOptionsHome?.data ?? [];

    if(heroPostID.length == 0) {
        return 0;
    }

    const heroPostIDJSON = JSON.parse(heroPostID);

    return heroPostIDJSON.homeFeaturedPost;
}

function getHeroPostByID(data: any) {
    const heroPost = data?.post ?? [];

    if(heroPost.length == 0) {
        return [];
    }

    return heroPost;
}