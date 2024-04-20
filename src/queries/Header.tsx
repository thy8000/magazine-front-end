import { gql } from "@apollo/client";

export const HeaderCategoriesByIDQuery = gql`
  query getHeaderCategoriesByID($termTaxonomyId: [ID]!) {
    categories(where: { termTaxonomyId: $termTaxonomyId }) {
      nodes {
        categoryId
        name
      }
    }
  }
`;

export const MegaMenuPostsByTermID = gql `
  query MegaMenuPostsByTermID($categoryID: Int!) {
    posts(where: {categoryId: $categoryID}, first: 4) {
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