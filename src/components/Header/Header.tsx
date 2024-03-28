import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import { HeaderQuery } from "../../queries/_index";
import Icon from "../Icon/Icon";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const { data } = useQuery(HeaderQuery);

  const customLogo = getCustomLogo(data);

  const headerCategories = getHeaderCategories(data);

  const headerIsTransparent = getHeaderTransparent(data)
    ? "bg-transparent"
    : "bg-transparent lg:bg-header";

  const socialShares = getSocialShares(data);

  let posts;

  return (
    <header className={`relative flex ${headerIsTransparent}`}>
      <div className="container">
        <div className="absolute lg:relative top-0 left-0 flex justify-evenly flex-col lg:flex-row bg-header lg:bg-transparent w-[90%] lg:w-auto h-screen lg:h-auto">
          <div className="flex justify-center items-center">
            {customLogo.url !== null && (
              <Image
                className="w-auto"
                src={customLogo.url}
                alt={customLogo.description}
                width={customLogo.width ?? 256}
                height={customLogo.height ?? 79}
              />
            )}
          </div>

          {headerCategories && (
            <div>
              <ul className="flex justify-center items-center flex-col lg:flex-row gap-4 lg:gap-8 h-full">
                {headerCategories?.map((category: any) => (
                  <li className="group/menu py-0 lg:py-8" key={category.term_id}>
                    <a
                      className="text-link font-medium group-hover/menu:text-linkHover transition-all duration-500 ease-out"
                      href="#"
                    >
                      {category.name}
                    </a>

                    <MegaMenu termID={category.term_id} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {socialShares && (
            <div className="flex gap-4 items-center justify-center">
              {socialShares?.map(
                (social: any) =>
                  social.url && (
                    <a href="#" className="cursor-pointer">
                      {
                        <Icon
                          name={social.slug}
                          className="fill-icon hover:fill-iconHover transition-all duration-500 ease-out"
                          width={14}
                          height={14}
                        />
                      }
                    </a>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function getCustomLogo(data: any) {
  const customLogo = data?.customLogo?.data ?? [];

  if (customLogo.length === 0) {
    return [];
  }

  return JSON.parse(customLogo);
}

function getHeaderCategories(data: any) {
  const themeOptionsHeader = data?.themeOptionsHeader?.data ?? [];

  if (themeOptionsHeader.length == 0) {
    return;
  }

  const headerCategories = JSON.parse(data.themeOptionsHeader.data) ?? [];

  return headerCategories.categoriesList;
}

function getSocialShares(data: any) {
  const socialSharesData = data?.customSocialShares?.data ?? [];

  if (socialSharesData.length === 0) {
    return;
  }

  const socialShares = JSON.parse(socialSharesData) ?? [];

  return Object.values(socialShares);
}

function getHeaderTransparent(data: any) {
  var headerTransparent = data?.themeOptionsHeader?.data ?? [];

  if (headerTransparent.length == 0) {
    return;
  }

  headerTransparent = JSON.parse(headerTransparent);

  return headerTransparent.transparentHeader;
}
