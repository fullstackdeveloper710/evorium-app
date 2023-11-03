import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { Pagination } from "../admin";

function ReactDataTable({ columns, data, pagination }) {
  const { loader } = useSelector((state) => state.app);

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  return (
    <DataTable
      fixedHeader
      fixedHeaderScrollHeight="500px"
      columns={columns}
      data={data}
      pagination={pagination}
      progressPending={loader}
      progressComponent={<Loader />}
      subHeader
      subHeaderComponent={<h3>header</h3>}
      persistTableHead
      paginationResetDefaultPage={true}
      paginationComponent={Pagination}
      paginationComponentOptions={paginationComponentOptions}
    />
  );
}

export default ReactDataTable;
