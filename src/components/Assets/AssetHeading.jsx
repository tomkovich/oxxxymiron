import React from "react";

import { renderNode } from "../../utils/common";

const AssetHeading = ({ content }) => (
  <h3 className="news-heading-3">{content && content.map(renderNode)}</h3>
);

export default AssetHeading;
