import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Card, CardContent, Typography, Button } from "@mui/material";
import API from "../../../../../api/api";

const EventDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await API.get(id);
      setEvent(response.data);
    };
    fetchEvent();
  }, [id]);

  // const handleRSVP = async () => {
  //   await rsvpEvent(id);
  //   alert("RSVP successful");
  // };

  return (
    <div className="container mx-auto p-4">
      {event && (
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h4" className="font-bold mb-2">
              {event.title}
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              {event.description}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              {new Date(event.date).toLocaleDateString()} - {event.location}
            </Typography>
            {/* <Button
              onClick={handleRSVP}
              variant="contained"
              color="primary"
              className="mt-4"
            >
              RSVP
            </Button> */}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EventDetail;
