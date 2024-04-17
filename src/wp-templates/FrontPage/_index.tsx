import { useQuery, gql } from "@apollo/client";

import { FrontPageQuery, ThemeCustomizerQuery, ThemeOptionsQuery } from "../../queries/_index";

import { Meta, Header, CustomColors } from "../../components/_index";

export default function FrontPage() {
  const dataFrontPage = useQuery(FrontPageQuery);
  const dataThemeCustomizer = useQuery(ThemeCustomizerQuery);
  const dataThemeOptions = useQuery(ThemeOptionsQuery);

  const generalSettings = dataFrontPage?.data?.generalSettings ?? [];

  const customColors = dataThemeCustomizer?.data?.themeCustomizer?.customColor ?? [];

  const headerOptions = dataThemeOptions?.data?.themeOptions?.themeOptionsHeader ?? [];

  const customLogo = dataThemeCustomizer?.data?.themeCustomizer?.customLogo ?? [];

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
      />
    </div>
  );
}