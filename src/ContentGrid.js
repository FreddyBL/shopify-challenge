import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ContentCard from "./ContentCard";

const getFormattedDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
export const ContentGrid = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date(2022, 0, 15));
  const [endDate, setEndDate] = useState(new Date(2022, 0, 17));
  useEffect(() => {
    const fetchData = async () => {
      const startDateStr = getFormattedDate(startDate);
      const endDateStr = getFormattedDate(endDate);

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?start_date=${startDateStr}&end_date=${endDateStr}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, [startDate, endDate]);
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item) => {
          console.log(item.title);
          return (
            <Grid item xs={2} sm={4} md={4}>
              <ContentCard header="Spacestagram" item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
