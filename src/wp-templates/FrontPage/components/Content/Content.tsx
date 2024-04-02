export default function Content({themeOptionsHome}: any) {
    const data = getHomePostsList(themeOptionsHome);

    if(data.length == 0) {
        return;
    }

    console.log(data);

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

    if(dataJSON.length == 0) {
        return [];
    }

    const postsLists = dataJSON?.homePostsList ?? [];

    return postsLists;
}