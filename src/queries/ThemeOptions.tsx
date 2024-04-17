import { gql } from "@apollo/client";

export const ThemeOptionsQuery = gql`
    query getThemeOptions {
        themeOptions {
            themeOptionsHeader {
                categoriesID
                transparentHeader
            }
            themeOptionsHome {
                homeFeaturedPostID
            }
        }
    }
`;