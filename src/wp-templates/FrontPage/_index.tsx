import { useQuery, gql } from "@apollo/client";

import { FrontPageQuery, ThemeCustomizerQuery  } from "../../queries/_index";

import { Meta, Header, CustomColors } from "../../components/_index";

export default function FrontPage() {
  const dataFrontPage = useQuery(FrontPageQuery);
  const dataThemeCustomizer = useQuery(ThemeCustomizerQuery);

  const generalSettings = dataFrontPage?.data?.generalSettings ?? [];

  const customColors = dataThemeCustomizer?.data?.themeCustomizer?.customColor ?? [];

  return (
    <div className="bg-page_color">
      <Meta
        title={generalSettings.title ?? ""}
        description={generalSettings.description ?? ""}
      />
    </div>
  );
}