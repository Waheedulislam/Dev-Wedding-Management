import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Select,
  MenuItem,
  Pagination,
  Grid,
  Container,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import API from "../../../../../api/api";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await API.get(
        `/events?page=${page}&limit=10&sortBy=${sortBy}&order=${order}&searchTerm=${searchTerm}`
      );
      setEvents(response.data);
    };
    fetchEvents();
  }, [page, sortBy, order, searchTerm]);

  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexDirection: { xs: "column", sm: "row" }, // Stack on smaller screens
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "primary.main", mb: { xs: 2, sm: 0 } }}
        >
          Our Events
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{ mr: 2, width: { xs: "100%", sm: "200px" } }} // Responsive width
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ mr: 2, minWidth: "120px" }}
          >
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
          </Select>
          <Button
            onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
            variant="contained"
            size="small"
            color="primary"
          >
            {order === "asc" ? "Ascending" : "Descending"}
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {events.slice(0, 4).map((event) => (
          <Grid item key={event._id} xs={12} sm={6} md={4} lg={3}>
            <Link
              to={`event-management/${event._id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 20,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    event.imageUrl ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1NfT0N-m7mJgBUDb6W7-v4iWexFEzOXZ3A&s"
                  } // Assuming this is the field for the image URL
                  alt={event.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "primary.dark" }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1 }}
                  >
                    {event.description}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.disabled" }}>
                    {new Date(event.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(events.length / 10)} // Adjust count based on total events
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ display: "flex", justifyContent: "center", mt: 4 }}
      />
    </Container>
  );
};

export default EventList;
