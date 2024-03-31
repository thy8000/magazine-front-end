import { gql } from "@apollo/client";

export const FrontPageQuery = gql`
    query getFrontPage {
        generalSettings {
            title
            description
        }
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