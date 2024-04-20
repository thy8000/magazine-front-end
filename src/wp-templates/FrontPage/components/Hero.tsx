import { useQuery, gql } from "@apollo/client";
import { HeroPostByIDQuery } from "../../../queries/_index";
import { formatDate } from '../../../includes/utils/format-date';

export default function Hero({postID}: any) {
  const postData = useQuery(HeroPostByIDQuery, {variables: {postID: postID,}});

  const heroPost = postData?.data?.post ?? [];

  if (heroPost.length == 0) {
    return;
  }

  const heroBackgroundImage = heroPost?.featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl ?? [];
  const heroCategory = heroPost?.categories?.nodes[0] ?? [];

  let postDate = heroPost.dateGmt;
  let formattedDate = formatDate(postDate, "dd 'de' LLLL 'de' yyyy");

  return (
    <a className="cursor-pointer" href={heroPost.link}>
      <section
        className="flex justify-center items-end w-full h-screen bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-screen before:bg-black/80 before:z-10"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="container">
          <div className="relative z-20 flex flex-col gap-6 py-20 -mb-14 lg:mb-0 text-link max-w-[90ch]">
            <div className="flex justify-start items-center gap-8">
              {heroCategory.length != 0 && (
                <a className="py-2 px-4 bg-button text-link opacity-100 hover:opacity-70 transition-all duration-500 linear" href={heroCategory.link}>
                  {heroCategory.name}
                </a>
              )}
              
              <time className="font-bold text-text" dateTime={postDate}>{formattedDate}</time>
            </div>

            <h2 className="text-4xl	font-medium line-clamp-3 text-link hover:text-linkHover transition-all duration-500 linear">
              {heroPost.title}
            </h2>

            <div
              dangerouslySetInnerHTML={{ __html: heroPost.excerpt }}
              className="font-medium font-secondary text-text line-clamp-2"
            ></div>
          </div>
        </div>
      </section>
    </a>
  );
}