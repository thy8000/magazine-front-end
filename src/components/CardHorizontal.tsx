import Image from "next/image";

export default function CardHorizontal({ post }: any) {
  const featuredImage = post?.featuredImage ?? [];
  const featuredImageURL =
    featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl ?? [];
  const featuredImageClasses = featuredImageURL.length > 0 ? "" : "hidden";

  const postDate = new Date(post?.dateGmt);
  const postDay = postDate.toLocaleDateString("pt-br", { day: "numeric" });
  const postMonth = postDate.toLocaleString("pt-br", { month: "long" });
  const postYear = postDate.getFullYear();
  const formattedDate = `${postDay} de ${postMonth} de ${postYear}`;

  return (
    <div className="flex gap-8">
      <a href={post.link ?? ""}>
        <div className="aspect-[320/210] h-[13rem]">
          <Image
            className={"object-cover w-full h-full " + featuredImageClasses}
            width={320}
            height={210}
            src={featuredImageURL}
            alt=""
          />
        </div>
      </a>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl	font-medium	line-clamp-2 text-title hover:text-titleHover transition-all duration-500 linear">
          <a href={post.link}>{post.title}</a>
        </h3>

        <div className="flex gap-4 justify-start items-center">
          <a
            href={post.categories.nodes[0].link}
            className="py-2 px-4 bg-button text-link opacity-100 hover:opacity-70 transition-all duration-500 linear"
          >
            {post.categories.nodes[0].name}
          </a>

          <time className="text-text font-bold" dateTime={post.dateGmt}>
            {formattedDate}
          </time>
        </div>

        <div
          className="text-text font-medium text-sm line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        ></div>
      </div>
    </div>
  );
}
