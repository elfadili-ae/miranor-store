import React, { ReactNode } from "react";

const PaddingWrapper = ({
  children,
  paddingSize = "4",
}: {
  children: ReactNode;
  paddingSize?: string;
}) => {
  return <div className={`p-${paddingSize}`}>{children}</div>;
};

export default PaddingWrapper;
