import Image  from 'next/image';
import { formatDate } from '../../includes/utils/format-date';

export default function CardVertical({post}: any) {
    let postThumbnail = post?.featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl ?? [];

    let postDate = post.date;
    let formattedDate = formatDate(postDate, "dd 'de' LLLL 'de' yyyy");

    return(
        <a className="group/card flex flex-col gap-[15px] w-3/12 cursor-pointer">
            {postThumbnail && (
                <div>
                    <Image 
                        className="aspect-[260/145] object-cover"
                        priority
                        width={260}
                        height={145}
                        src={postThumbnail}
                        alt={post.title}
                    />
                </div>
            )}

            <div>
                <h3 className="max-w-[23ch] font-medium font-secondary leading-5 text-title group-hover/card:text-titleHover transition-all duration-500 ease-out">
                    <a href={post.link}>{post.title}</a>
                </h3>

                <time className="font-secondary text-xs text-text font-bold" dateTime={postDate}>{formattedDate}</time>
            </div>
        </a>
    );
}