import { gql } from "@apollo/client";

export const HeroPostIDQuery = gql`
  query heroPostIDQuery {
    themeOptionsHome {
      data
    }
  }
`;

export const HeroPostByIDQuery = gql`
  query HeroPostByIDQuery($postID: ID!) {
    post(id: $postID, idType: DATABASE_ID) {
      title
      dateGmt
      excerpt
      link
      categories(first: 1) {
        nodes {
          link
          name
        }
      }
      featuredImage {
        node {
          mediaDetails {
            sizes(include: LARGE) {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;