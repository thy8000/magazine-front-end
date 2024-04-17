import Head from 'next/head';

interface CustomColor {
    color: string;
    slug: string;
}

interface CustomColorProps {
    customColors?: CustomColor[];
}

export default function CustomColors({customColors}: CustomColorProps) {
    if(customColors.length == 0) {
        return;
    }

    let customColorsRoot = createRoot(customColors);

    return (
        <Head>
            <style>{`:root { ${customColorsRoot} }`}</style>
        </Head>
    )
}

function createRoot(customColors:  CustomColor[]) {
    return Object.entries(customColors).map(([key, value]) => {
        return `--${value.slug}: ${value.color};`;
    }).join('\n');
}