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
        categories(first: 1) {
            nodes {
            link
            name
            }
        }
        dateGmt
        excerpt
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
`