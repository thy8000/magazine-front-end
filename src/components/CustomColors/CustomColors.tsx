import { useQuery, gql } from "@apollo/client";
import { CustomColorsQuery } from '../../queries/_index';

import Head from 'next/head';

export default function CustomColors() {
    const { data } = useQuery(CustomColorsQuery);

    let customColors = getCustomColors(data);

    if(customColors === undefined || customColors.length === 0) {
        return;
    }

    let customColorsRoot = generateCustomColorsRoot(customColors);

    return (
        <Head>
            <style>{`:root { ${customColorsRoot} }`}</style>
        </Head>
    )
}

function getCustomColors(data: any) {
    let customColors = data?.customColors?.data ?? '';

    if(customColors === undefined || customColors.length === 0) {
        return;
    }

    return JSON.parse(customColors) ?? [];
}

function generateCustomColorsRoot(customColors: {}) {
    return Object.entries(customColors).map(([key, value]) => {
        return `--${key}: ${value};`;
    }).join('\n');
}