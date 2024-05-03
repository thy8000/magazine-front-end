import { CardHorizontal, SidebarSearch } from "../../../components/_index";
import Icon from "../../../components/Icon";
import { useQuery, gql } from "@apollo/client";
import { PostsListQuery } from "../../../queries/_index";

export default function PostsList({
  posts,
  title,
  iconName,
  sidebarType,
  categoryID,
  categoryName,
}: any) {
  if (posts.length == 0) {
    return;
  }

  const dataSidebarPosts = useQuery(PostsListQuery, {
    variables: { categoryId: categoryID },
  });
  const sidebarPosts = dataSidebarPosts?.data?.posts?.nodes ?? [];

  return (
    <div className="container flex py-14 gap-12">
      <div className="w-4/6">
        <div className="flex items-center gap-4">
          <Icon className="fill-icon w-9 h-9" name={iconName} size={60} />

          <h2 className="text-2xl text-icon font-medium font-secondary">
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-10 pt-10">
          {posts.map((post: any) => (
            <CardHorizontal post={post} />
          ))}
        </div>
      </div>

      {sidebarType == "sidebarSearch" && (
        <SidebarSearch posts={sidebarPosts} title={categoryName} />
      )}
    </div>
  );
}
