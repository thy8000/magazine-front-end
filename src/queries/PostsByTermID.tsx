import { gql } from "@apollo/client";

export const PostsByTermIDQuery = gql`
query PostsByTermID($termID: Int!) {
    posts(where: {categoryId: $termID}, first: 4) {
      nodes {
        id
        title
        date
        excerpt
        link
        featuredImage {
            node {
                title
                altText
                mediaDetails {
                    sizes(include: MEDIUM_LARGE) {
                    sourceUrl
                    width
                    height
                }
              }
            }
        }
      }
    }
  }
`;