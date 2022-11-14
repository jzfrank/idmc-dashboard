import React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const DataTable = ({ data, columns }) => {
  const theme = useTheme(getTheme());
  return <CompactTable columns={columns} data={data} theme={theme} />;
};

export default DataTable;
