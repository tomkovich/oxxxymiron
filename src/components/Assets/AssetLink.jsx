import React from "react";

import { renderNode } from "../../utils/common";

const AssetLink = ({ uri, content }) => (
  <a href={uri} target="_blank" rel="noopener noreferrer">
    {content && content.map(renderNode)}
  </a>
);

export default AssetLink;
