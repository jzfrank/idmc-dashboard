import React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useSort } from "@table-library/react-table-library/sort";
import cellWrapper from "../utility/cellWrapper";

const DataTable = ({ data }) => {
  const theme = useTheme(getTheme());

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

  const columns = [
    {
      label: "Day",
      renderCell: (item) => cellWrapper(item.day),
    },
    {
      label: "Event Type",
      renderCell: (item) => cellWrapper(item.eventType),
      sort: { sortKey: "EVENT_TYPE" },
    },
    { label: "Event Name", renderCell: (item) => cellWrapper(item.eventName) },
    {
      label: "title",
      renderCell: (item) => cellWrapper(item.title),
    },
    {
      label: "text",
      renderCell: (item) => cellWrapper(item.text),
    },
    {
      label: "displacement",
      renderCell: (item) => cellWrapper(item.displacement),
    },

    // {
    //   label: "Number of Death",
    //   renderCell: (item) => cellWrapper(item.numberOfDeath),
    // },
    {
      label: "State",
      renderCell: (item) => cellWrapper(item.state),
    },
    {
      label: "City",
      renderCell: (item) => cellWrapper(item.city),
    },
    {
      label: "url",
      renderCell: (item) => (
        <a href={item.url} title={item.url}>
          {item.url}
        </a>
      ),
    },
  ];

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        EVENT_TYPE: (array) =>
          array.sort((a, b) => a.eventType.localeCompare(b.eventType)),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10,
    },
  });
  return (
    <>
      <CompactTable
        columns={columns}
        data={data}
        theme={theme}
        pagination={pagination}
        sort={sort}
      />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>

        <span>
          Page:{" "}
          {pagination.state.getPages(data.nodes).map((_, index) => (
            <button
              key={index}
              type="button"
              className="mx-1"
              style={{
                fontWeight: pagination.state.page === index ? "bold" : "normal",
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </span>
      </div>

      <br />
    </>
  );
};

export default DataTable;
