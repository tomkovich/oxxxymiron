import React from "react";

const AssetText = ({ value }) => (
  <span
    dangerouslySetInnerHTML={{ __html: value.replaceAll("\n\n", "<br />") }}
  />
);

export default AssetText;
