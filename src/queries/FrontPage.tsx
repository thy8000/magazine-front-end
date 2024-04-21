import { gql } from "@apollo/client";

export const FrontPageQuery = gql`
  query getFrontPage {
    generalSettings {
      title
      description
    }
    themeOptions {
      themeOptionsHome {
        homeFeaturedPostID
      }
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

export const SpecialsQuery = gql`
  query getFrontPageSpecials {
    especiais(first: 4) {
      nodes {
        title
        link
        categories(first: 1) {
          nodes {
            name
            link
          }
        }
        dateGmt
        excerpt
        featuredImage {
          node {
            mediaDetails {
              sizes(include: MEDIUM_LARGE) {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;