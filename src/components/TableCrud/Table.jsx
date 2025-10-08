import  React,{useState,useEffect} from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function TableComponent() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [editingRowId, setEditingRowId] = useState(null);
  const [editedRow, setEditedRow] = useState({});


    useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
      const handleEdit = (row) => {
        setEditingRowId(row.id);
        setEditedRow(row);
      }

      const handleSave = () => {
        const updatedData = data.map((item) =>
          item.id === editingRowId ? editedRow : item
        );
        setData(updatedData);
        setEditingRowId(null);
        setEditedRow({});
      }

      const handleCancel = () => {
        setEditingRowId(null);
        setEditedRow({});
      }

      const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this row?")) {
          const updatedData = data.filter((item) => item.id !== id);
          setData(updatedData);
        }
      }


const filteredData = data.filter((row) => {
  const searchLower = search.toLowerCase();
  return (
    row.name.toLowerCase().includes(searchLower) ||
    row.email.toLowerCase().includes(searchLower) ||
    row.address.zipcode.toLowerCase().includes(searchLower)
  );
});


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 text-lg text-gray-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8 text-lg">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center mt-8 px-4 ">
      <Paper className="w-full max-w-7xl overflow-hidden shadow-lg rounded-2xl ">
        <TableContainer className="max-h-[500px]">
          <Table stickyHeader aria-label="data table">
            <TableHead>
              <TableRow className="bg-gray-100">
                <TableCell className="font-semibold text-gray-700 text-base">
                  Name
                </TableCell>
                <TableCell className="font-semibold text-gray-700 text-base">
                  Email
                </TableCell>
                <TableCell className="font-semibold text-gray-700 text-base">
                  Address
                </TableCell>
                
                <TableCell className="font-semibold text-gray-700 text-base">
                  Latitude/Longitude
                </TableCell>
                <TableCell className="font-semibold text-gray-700 text-base">
                  Zipcode
                </TableCell>
                 <TableCell className="font-semibold text-gray-700 text-base">
                  Edit/Delete
                </TableCell>
              </TableRow>
              <div className="p-2 "> 
                  <input
        type="text"
        placeholder="Search by name, email, or password..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
              </div>
            </TableHead>

       <TableBody>
  {filteredData
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => (
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={row.id}
        className="hover:bg-gray-50 transition-colors"
      > 
        
        <TableCell className="text-gray-800 text-sm">
          {editingRowId === row.id ? (
            <input
              className="p-1 border rounded w-full"
              value={editedRow.name}
              onChange={(e) =>
                setEditedRow({ ...editedRow, name: e.target.value })
              }
            />
          ) : (
            row.name
          )}
        </TableCell>

        
        <TableCell className="text-gray-800 text-sm">
          {editingRowId === row.id ? (
            <input
              className="p-1 border rounded w-full"
              value={editedRow.email}
              onChange={(e) =>
                setEditedRow({ ...editedRow, email: e.target.value })
              }
            />
          ) : (
            row.email
          )}
        </TableCell>


        <TableCell className="text-gray-800 text-sm">
          {editingRowId === row.id ? (
            <input
              className="p-1 border rounded w-full"
              value={`${editedRow.address.city}, ${editedRow.address.street}`}
              onChange={(e) =>
                setEditedRow({
                  ...editedRow,
                  address: {
                    ...editedRow.address,
                    city: e.target.value.split(",")[0],
                    street: e.target.value.split(",")[1] || "",
                  },
                })
              }
            />
          ) : (
            `${row.address.city}, ${row.address.street}`
          )}
        </TableCell>

        
        <TableCell className="text-gray-800 text-sm">
          {editingRowId === row.id ? (
            <input
              className="p-1 border rounded w-full"
              value={`${editedRow.address.geo.lat}, ${editedRow.address.geo.lng}`}
              onChange={(e) =>
                setEditedRow({
                  ...editedRow,
                  address: {
                    ...editedRow.address,
                    geo: {
                      lat: e.target.value.split(",")[0] || "",
                      lng: e.target.value.split(",")[1] || "",
                    },
                  },
                })
              }
            />
          ) : (
            `${row.address.geo.lat}, ${row.address.geo.lng}`
          )}
        </TableCell>

        
        <TableCell className="text-gray-800 text-sm">
          {editingRowId === row.id ? (
            <input
              className="p-1 border rounded w-full"
              value={editedRow.address.zipcode}
              onChange={(e) =>
                setEditedRow({
                  ...editedRow,
                  address: { ...editedRow.address, zipcode: e.target.value },
                })
              }
            />
          ) : (
            row.address.zipcode
          )}
        </TableCell>

        
       <TableCell className="text-gray-800 text-sm">
  {editingRowId === row.id ? (
    <div className="flex gap-1">
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
      >
        Save
      </button>
      <button
        onClick={handleCancel}
        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
      >
        Cancel
      </button>
    </div>
  ) : (
    <div className="flex gap-1">
      <button
        onClick={() => handleEdit(row)}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(row.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  )}
</TableCell>

      </TableRow>
    ))}
</TableBody>

          </Table>
        </TableContainer>

        <div className="bg-gray-50 border-t border-gray-200">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </Paper>
    </div>
  );
}
export default TableComponent;

