import { gql } from "@apollo/client";

export const PostsListQuery = gql`
  query getPostsLists($categoryID: Int) {
    posts(where: { categoryId: $categoryID }) {
      nodes {
        title
        dateGmt
        featuredImage {
          node {
            mediaDetails {
              sizes(include: THUMBNAIL) {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
