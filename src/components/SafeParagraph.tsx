"use client";

import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";

const SafeParagraph = ({ description }: { description: string }) => {
  const [desc, setDesc] = useState("");
  useEffect(() => {
    setDesc(DOMPurify.sanitize(description));
  }, [desc]);
  return (
    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: desc }}></p>
  );
};

export default SafeParagraph;
