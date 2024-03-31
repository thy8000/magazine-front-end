import { useQuery, gql } from "@apollo/client";

import { Meta, Header, CustomColors } from "../../components/_index";
import { Hero, Content } from './components/_index';

import { FrontPageQuery  } from "../../queries/FrontPage";

export default function FrontPage() {
  const { data } = useQuery(FrontPageQuery);

  const siteGeneralSettings = data?.generalSettings ?? [];

  const themeOptionsHome = data?.themeOptionsHome ?? [];

  return (
    <div className="bg-page_color">
      <Meta
        title={siteGeneralSettings.title ?? ""}
        description={siteGeneralSettings.description ?? ""}
      />

      <CustomColors />

      <Header />

      <main>
        <Hero 
          themeOptionsHome={themeOptionsHome}
        />
        
        <Content 
          themeOptionsHome={themeOptionsHome}
        />
      </main>
    </div>
  );
}