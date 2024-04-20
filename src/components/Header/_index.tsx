import { useQuery, gql } from "@apollo/client";
import { HeaderCategoriesByIDQuery } from '../../queries/_index';
import Image from "next/image";
import Icon from "../Icon";
import MegaMenu from "./components/MegaMenu";
import { MouseEventHandler } from "react";

export default function Header({ headerOptions, customLogo, socialShare }: any) {
  const categoriesID = headerOptions?.categoriesID ?? [];
  const categoriesData = useQuery(HeaderCategoriesByIDQuery, {variables: {termTaxonomyId: categoriesID}});
  const categories = categoriesData?.data?.categories?.nodes ?? [];

  const customLogoURL = customLogo?.url ?? [];

  const isTransparent = headerOptions?.transparentHeader ?? false;
  const transparentClass = isTransparent ? "bg-transparent" : "bg-header";

  const socialShares = socialShare ?? [];

  return (
    <header className={`absolute top-0 left-0 z-40 flex w-full ${transparentClass}`}>
      <div className="container">
        <div className="relative flex lg:hidden w-full h-20">
          {customLogoURL.length > 0 && (
            <Image
              className="w-52 object-contain"
              src={customLogoURL}
              alt=""
              width={256}
              height={79}
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
            {customLogoURL.length > 0 && (
              <Image
                className="w-52 lg:w-auto"
                src={customLogoURL}
                alt=""
                width={256}
                height={79}
              />
            )}

            <button
              className="absolute right-9 block lg:hidden"
              onClick={handleMenu(false)}
            >
              <Icon className="fill-icon w-6 h-6" name="closeMenu" size={24} />
            </button>
          </div>

          {categories && (
            <div className="pt-6 lg:pt-0">
              <ul className="flex justify-center items-start lg:items-center flex-col lg:flex-row gap-0 lg:gap-8 h-full">
                {categories?.map((category: any) => (
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

                    <MegaMenu categoryID={category.categoryId} />
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