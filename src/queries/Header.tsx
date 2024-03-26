import { gql } from "@apollo/client";

export const HeaderQuery = gql`
    {
        customLogo {
          data
        }
        themeOptionsHeader {
          categoriesList
        }
        customSocialShares {
          data
        }
    }
`;