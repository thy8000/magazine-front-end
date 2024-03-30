import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import { HeaderQuery } from "../../queries/_index";
import Icon from "../Icon/Icon";
import MegaMenu from "./MegaMenu";
import { MouseEventHandler } from "react";

export default function Header() {
  const { data } = useQuery(HeaderQuery);

  const customLogo = getCustomLogo(data);

  const headerCategories = getHeaderCategories(data);

  const headerIsTransparent = getHeaderTransparent(data)
    ? "bg-transparent"
    : "bg-header";

  const socialShares = getSocialShares(data);

  let posts;

  return (
    <header className={`absolute top-0 left-0 z-40 flex w-full ${headerIsTransparent}`}>
      <div className="container">
        <div className="relative flex lg:hidden w-full h-20">
          {customLogo.url !== null && (
            <Image
              className="w-52 object-contain"
              src={customLogo.url}
              alt={customLogo.description}
              width={customLogo.width ?? 256}
              height={customLogo.height ?? 79}
            />
          )}

          <button
            className="absolute top-7 right-9 block lg:hidden"
            onClick={handleMenu(true)}
          >
            <Icon className="fill-icon w-6 h-6" name="openMenu" size={24} />
          </button>
        </div>

        <div className="header-wrapper absolute lg:relative top-0 -left-full lg:left-0 flex justify-start lg:justify-between flex-col lg:flex-row bg-header lg:bg-transparent w-full lg:w-auto h-screen lg:h-auto transition-all duration-500 ease-out">
          <div className="flex justify-start lg:justify-center items-center pt-12 lg:pt-0 pl-4 lg:pl-0">
            {customLogo.url !== null && (
              <Image
                className="w-52 lg:w-auto"
                src={customLogo.url}
                alt={customLogo.description}
                width={customLogo.width ?? 256}
                height={customLogo.height ?? 79}
              />
            )}

            <button
              className="absolute right-9 block lg:hidden"
              onClick={handleMenu(false)}
            >
              <Icon className="fill-icon w-6 h-6" name="closeMenu" size={24} />
            </button>
          </div>

          {headerCategories && (
            <div className="pt-6 lg:pt-0">
              <ul className="flex justify-center items-start lg:items-center flex-col lg:flex-row gap-0 lg:gap-8 h-full">
                {headerCategories?.map((category: any) => (
                  <li
                    className="group/menu py-4 lg:py-8 w-full lg:w-auto border-b border-b-link lg:border-b-0"
                    key={category.term_id}
                  >
                    <a
                      className="pl-4 lg:pl-0 text-link font-medium group-hover/menu:text-linkHover transition-all duration-500 ease-out"
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
            <div className="flex gap-4 items-center justify-start lg:justify-center pt-12 lg:pt-0 pl-4 lg:pl-0">
              {socialShares?.map(
                (social: any) =>
                  social.url && (
                    <a href={social.url} className="cursor-pointer">
                      {
                        <Icon
                          name={social.slug}
                          className="w-8 lg:w-auto h-8 lg:h-auto fill-icon hover:fill-iconHover transition-all duration-500 ease-out"
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

function handleMenu(open: boolean = true): MouseEventHandler<HTMLButtonElement> {
  return (event: React.MouseEvent<HTMLButtonElement>) => {
    const menu = document.querySelector(".header-wrapper");

    if (open) {
      menu?.classList.add("open");

      return;
    } 

    menu?.classList.remove("open");

    return;
  };
}
