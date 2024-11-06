import { useEffect, useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Menu,
  MenuItem,
  TextField,
  Paper,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import API from "../../../../../../api/api";

export default function UsersPage() {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [anchorEl, setAnchorEl] = useState(null);
  const [users, setUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSort = (column) => {
    setSortDirection((prev) =>
      column === sortColumn && prev === "asc" ? "desc" : "asc"
    );
    setSortColumn(column);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ open: false, message: "", severity: "" });
  };

  const makeAdmin = async (userId) => {
    try {
      await API.put(`/users/role/${userId}`, { role: "admin" });
      setSnackbar({
        open: true,
        message: "User promoted to admin.",
        severity: "success",
      });
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, role: "admin" } : user
        )
      );
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error promoting user to admin.",
        severity: "error",
      });
      console.error("Error making user an admin:", error);
    }
  };

  const removeAdmin = async (userId) => {
    try {
      await API.put(`/users/role/${userId}`, { role: "attendee" });
      setSnackbar({
        open: true,
        message: "Admin role removed from user.",
        severity: "success",
      });
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, role: "attendee" } : user
        )
      );
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.response
          ? error.response.data.message
          : "Error removing admin role.",
        severity: "error",
      });
      console.error("Error removing admin role:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await API.delete(`/users/${userId}`);
      setSnackbar({
        open: true,
        message: "User deleted successfully.",
        severity: "success",
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error deleting user.",
        severity: "error",
      });
      console.error("Error deleting user:", error);
    }
  };

  const handleMakeAdmin = (userId) => {
    makeAdmin(userId);
    handleMenuClose();
  };

  const handleRemoveAdmin = (userId) => {
    removeAdmin(userId);
    handleMenuClose();
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
    handleMenuClose();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="font-semibold text-5xl text-gray-800 mb-6 text-center">
        User Management
      </h1>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <TextField
          variant="outlined"
          placeholder="Search users..."
          className="w-full max-w-sm"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Box>

      <TableContainer
        component={Paper}
        elevation={3}
        className="rounded-lg overflow-hidden shadow-sm"
      >
        <Table>
          <TableHead className="bg-gray-50">
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell
                sortDirection={sortColumn === "name" ? sortDirection : false}
              >
                <TableSortLabel
                  active={sortColumn === "name"}
                  direction={sortDirection}
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={sortColumn === "email" ? sortDirection : false}
              >
                <TableSortLabel
                  active={sortColumn === "email"}
                  direction={sortDirection}
                  onClick={() => handleSort("email")}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow key={user._id} className="hover:bg-gray-50 transition">
                <TableCell className="font-medium">{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>

                <TableCell align="right">
                  <IconButton
                    onClick={(event) => handleMenuOpen(event, user._id)}
                  >
                    <MoreHoriz />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      className: "shadow-lg",
                    }}
                  >
                    <MenuItem
                      onClick={() => handleMakeAdmin(user._id)}
                      className="text-green-600"
                    >
                      Make Admin
                    </MenuItem>

                    <MenuItem
                      onClick={() => handleRemoveAdmin(user._id)}
                      className="text-blue-600"
                    >
                      Remove Admin
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-red-600"
                    >
                      Delete User
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
