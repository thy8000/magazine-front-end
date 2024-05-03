import { useQuery, gql } from "@apollo/client";
import {
  FrontPageQuery,
  ThemeCustomizerQuery,
  ThemeOptionsQuery,
  SpecialsQuery,
} from "../../queries/_index";
import { Meta, Header, CustomColors } from "../../components/_index";
import { Hero, PostsList } from "./components/_index";

export default function FrontPage() {
  const dataFrontPage = useQuery(FrontPageQuery);
  const dataThemeCustomizer = useQuery(ThemeCustomizerQuery);
  const dataThemeOptions = useQuery(ThemeOptionsQuery);
  const dataSpecialPosts = useQuery(SpecialsQuery);

  const customColors =
    dataThemeCustomizer?.data?.themeCustomizer?.customColor ?? [];
  const customLogo =
    dataThemeCustomizer?.data?.themeCustomizer?.customLogo ?? [];
  const socialShare =
    dataThemeCustomizer?.data?.themeCustomizer?.socialMedia ?? [];

  const headerOptions =
    dataThemeOptions?.data?.themeOptions?.themeOptionsHeader ?? [];
  const heroPostID =
    dataThemeOptions?.data?.themeOptions?.themeOptionsHome
      ?.homeFeaturedPostID ?? [];
  const sidebarList =
    dataThemeOptions?.data?.themeOptions?.themeOptionsSidebar?.sidebars ?? [];

  const generalSettings = dataFrontPage?.data?.generalSettings ?? [];

  const specialPosts = dataSpecialPosts?.data?.especiais?.nodes ?? [];

  return (
    <div className="bg-page_color">
      <Meta
        title={generalSettings.title ?? ""}
        description={generalSettings.description ?? ""}
      />

      <CustomColors customColors={customColors} />

      <Header
        headerOptions={headerOptions}
        customLogo={customLogo}
        socialShare={socialShare}
      />

      <main>
        <Hero postID={heroPostID} />

        <PostsList
          posts={specialPosts}
          title="Especiais"
          iconName="special"
          sidebarType={sidebarList[0]?.slug ?? "sidebarSearch"}
          categoryID={sidebarList[0]?.categoryID ?? 0}
          categoryName={sidebarList[0]?.categoryName ?? ""}
        />
      </main>
    </div>
  );
}
