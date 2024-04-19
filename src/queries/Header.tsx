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