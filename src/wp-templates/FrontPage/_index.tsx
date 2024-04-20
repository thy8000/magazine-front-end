import { useQuery, gql } from "@apollo/client";
import { FrontPageQuery, ThemeCustomizerQuery, ThemeOptionsQuery } from "../../queries/_index";
import { Meta, Header, CustomColors } from "../../components/_index";
import { Hero } from "./components/_index";

export default function FrontPage() {
  const dataFrontPage = useQuery(FrontPageQuery);
  const dataThemeCustomizer = useQuery(ThemeCustomizerQuery);
  const dataThemeOptions = useQuery(ThemeOptionsQuery);

  const customColors = dataThemeCustomizer?.data?.themeCustomizer?.customColor ?? [];
  const customLogo = dataThemeCustomizer?.data?.themeCustomizer?.customLogo ?? [];
  const socialShare = dataThemeCustomizer?.data?.themeCustomizer?.socialMedia ?? [];

  const headerOptions = dataThemeOptions?.data?.themeOptions?.themeOptionsHeader ?? [];
  const heroPostID = dataThemeOptions?.data?.themeOptions?.themeOptionsHome?.homeFeaturedPostID ?? [];

  const generalSettings = dataFrontPage?.data?.generalSettings ?? [];

  return (
    <div className="bg-page_color">
      <Meta
        title={generalSettings.title ?? ""}
        description={generalSettings.description ?? ""}
      />

      <CustomColors 
        customColors={customColors}
      />

      <Header
        headerOptions={headerOptions}
        customLogo={customLogo}
        socialShare={socialShare}
      />

      <main>
        <Hero 
          postID={heroPostID}
        />
      </main>
    </div>
  );
}