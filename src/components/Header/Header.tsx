import { useQuery, gql } from "@apollo/client";
import Image  from 'next/image';
import { HeaderQuery } from '../../queries/_index';
import Icon from '../Icon/Icon';

export default function Header() {
    const { data } = useQuery(HeaderQuery);

    const customLogo = data?.customLogo ?? [];
    const headerCategories = getHeaderCategories(data);

    const socialShares = getSocialShares(data);

    return (
        <header className="flex bg-header">
            <div className="container">
                <div className="flex justify-evenly">
                    <div>
                        { customLogo.url !== null && (
                            <Image
                                className="w-auto"
                                src={customLogo.url}
                                alt={customLogo.description}
                                width={customLogo.width ?? 256}
                                height={customLogo.height ?? 79}
                            />
                        ) }        
                    </div>

                    { headerCategories && (
                        <div>
                            <ul className="flex justify-center items-center gap-8 h-full">
                                {headerCategories?.map((category: any) => (
                                    <li key={category.term_id}>
                                        <a href="#">{category.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) }

                    { socialShares && (
                        <div className="flex gap-4 items-center justify-center">
                            {socialShares?.map((social: any) => (
                                social.url && (
                                    <a href="#" className="cursor-pointer">
                                        {<Icon name={social.slug} className="fill-white hover:fill-black transition-all	duration-500 ease-out" width={14} height={14} />}
                                    </a>
                                )
                            ))}
                        </div>
                    ) }
                </div>
            </div>
        </header>
    );
}

function getHeaderCategories(data: any) {
    const themeOptionsHeader = data?.themeOptionsHeader ?? [];

    if(themeOptionsHeader.categoriesList === undefined) {
        return;
    }

    const headerCategories = JSON.parse(themeOptionsHeader.categoriesList) ?? [];

    return headerCategories;
}

function getSocialShares(data: any) {
    const socialSharesData = data?.customSocialShares?.data ?? [];

    if(socialSharesData.length === 0) {
        return;
    }

    const socialShares = JSON.parse(socialSharesData) ?? [];

    return Object.values(socialShares);
}