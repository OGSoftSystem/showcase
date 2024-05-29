import React from "react";

const PageHeading = ({
  pageTitle,
  pageSubtitle,
}: {
  pageTitle: string;
  pageSubtitle: string;
}) => {
  return (
    <div className="w-full flex flex-col items-center mt-6 lg:mt-10">
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
      <p className="p-text">{pageSubtitle}</p>
    </div>
  );
};

export default PageHeading;
