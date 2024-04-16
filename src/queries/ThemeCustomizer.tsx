import { gql } from "@apollo/client";

export const ThemeCustomizerQuery = gql`
    query getThemeCustomizer {
        themeCustomizer {
            customColor {
                color
                slug
            }
            customLogo {
                url
            }
            socialMedia {
                name
                slug
                url
            }
        }
    }
`;