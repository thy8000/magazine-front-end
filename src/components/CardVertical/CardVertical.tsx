import Image  from 'next/image';
import { formatDate } from '../../includes/utils/format-date';

export default function CardVertical({post}: any) {
    let postTitle = post?.title ?? '';
    let postThumbnail = post?.featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl ?? [];

    let postDate = new Date(post.date);
    let formattedDate = formatDate(postDate, "dd 'de' LLLL 'de' yyyy");

    return(
        <div className="flex flex-col gap-[15px]">
            {postThumbnail && (
                <div>
                    <Image 
                        className="aspect-[260/145] object-cover"
                        priority
                        width={260}
                        height={145}
                        src={postThumbnail}
                        alt={postTitle}
                    />
                </div>
            )}

            <div>
                <h3 className="text-lg">{postTitle}</h3>

                <time className="text-xs">{formattedDate}</time>
            </div>
        </div>
    );
}