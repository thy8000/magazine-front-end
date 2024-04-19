import { useQuery, gql } from "@apollo/client";
import { HeaderCategoriesByIDQuery } from '../../queries/_index';

export default function Header({ headerOptions, customLogo, socialShare }: any) {
  const categoriesID = headerOptions?.categoriesID ?? [];
  const categoriesData = useQuery(HeaderCategoriesByIDQuery, {variables: {termTaxonomyId: categoriesID}});
  const categories = categoriesData?.data?.categories?.nodes ?? [];

  const customLogoURL = customLogo?.url ?? [];

  const isTransparent = headerOptions?.transparentHeader ?? false;
  const transparentClass = isTransparent ? "bg-transparent" : "bg-header";

  const socialShares = socialShare ?? [];

  return (
    <>
      <h1>Header</h1>
    </>
  );
}