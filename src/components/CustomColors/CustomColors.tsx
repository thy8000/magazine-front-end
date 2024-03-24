import { useQuery, gql } from "@apollo/client";
import { CustomColorsQuery } from '../../queries/_index';

import Head from 'next/head';

export default function CustomColors() {
    const { data } = useQuery(CustomColorsQuery);

    var customColors = data?.customColors ?? [];
    const hasCustomColors = Object.keys(customColors).length !== 0;

    if(!hasCustomColors){
        return;
    }

    customColors = filterCustomColors(customColors);

    var customColorsRoot = generateCustomColorsRoot(customColors);

    return (
        <Head>
            <style>{`:root { ${customColorsRoot} }`}</style>
        </Head>
    )
}

function filterCustomColors(customColors: {}) {
    return Object.fromEntries(
        Object.entries(customColors).filter(([key]) => key !== '__typename')
    )
}

function generateCustomColorsRoot(customColors: {}) {
    return Object.entries(customColors).map(([key, value]) => {
        return `--${key}: ${value};`;
    }).join('\n');
}