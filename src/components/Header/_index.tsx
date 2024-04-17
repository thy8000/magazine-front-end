interface HeaderOptions {
  headerOptions: {
    categoriesID: number[];
    transparentHeader: boolean;
  };
}

interface CustomLogo {
  customLogo: {
    url: string;
  }
}

export default function Header({ headerOptions, customLogo }: HeaderOptions & CustomLogo) {
  console.log(headerOptions);
  console.log(customLogo);

  return (
    <>
      <h1>Header</h1>
    </>
  );
}