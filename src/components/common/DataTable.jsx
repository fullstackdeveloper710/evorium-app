import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { Pagination } from "../admin";
import "../../styles/common/dataTable.scss";

function ReactDataTable({
  columns,
  data,
  pagination,
  dateFilter,
  searchBar,
  header,
  subHeader,
}) {
  const { loader } = useSelector((state) => state.app);

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  return (
    <DataTable
      // fixedHeader
      // fixedHeaderScrollHeight="500px"
      columns={columns}
      data={data}
      pagination={pagination}
      progressPending={loader}
      progressComponent={<Loader />}
      subHeader={subHeader}
      // responsive
      subHeaderComponent={
        <div className="top_bar">
          {header && (
            <h3 className="title pt-2 mb-0 text-capitalize">{header}</h3>
          )}
          {searchBar && (
            <div className="right_search_bar">
              <div className="search_block">
                <input type="text" placeholder="Search" />
                <button type="" className="search_btn">
                  Search
                </button>
              </div>

              {dateFilter && (
                <div className="date_block">
                  <div className="input_wraper">
                    <label>From Date</label>
                    <input type="date" />
                  </div>
                  <div className="input_wraper">
                    <label>To date</label>
                    <input type="date" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      }
      persistTableHead
      paginationResetDefaultPage={true}
      paginationComponent={Pagination}
      paginationComponentOptions={paginationComponentOptions}
    />
  );
}

export default ReactDataTable;
