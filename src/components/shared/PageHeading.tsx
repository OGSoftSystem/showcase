const PageHeading = ({
  pageTitle,
  pageSubtitle,
}: {
  pageTitle: string;
  pageSubtitle: string;
}) => {
  return (
    <div className="w-full flex flex-col items-center my-6 lg:my-10">
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
      <p className="text-grad-3 font-hind text-xl">{pageSubtitle}</p>
    </div>
  );
};

export default PageHeading;
