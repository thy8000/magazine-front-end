export default function Content({themeOptionsHome}: any) {
    const data = getHomePostsList(themeOptionsHome);

    if(data.length == 0) {
        return;
    }

    // Loopar o data dentro do content, com um grid de posts e um sidebar pra cada item.

    return (
        <div>
            Content
        </div>
    )
}

function getHomePostsList(data: any) {
    const dataObject = data?.data ?? [];

    if(dataObject.length == 0) {
        return [];
    }

    const dataJSON = JSON.parse(dataObject);

    const postsLists = dataJSON?.homePostsList ?? [];

    return postsLists;
}