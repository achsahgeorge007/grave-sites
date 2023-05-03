import { Typography } from "@mui/material";
import React from "react";
import "./sectionCode.scss";
import EnhancedTable from "./table";

function SectionCodeView() {
  return (
    <div className="sectionCode">
      <Typography variant="h3" noWrap>
        Section Code
      </Typography>
      <EnhancedTable />
    </div>
  );
}

export default SectionCodeView;
