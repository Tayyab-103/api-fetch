import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Cards = ({ records }) => {
  return (
    <>
      <div className="container">
        <h1 className="text-center py-5">Fetching Data Using Axios</h1>
        <div className="row my-3 p-4">
          {records.map((value) => {
            return (
              <Card
                className="my-2 mx-2 shadow-lg p-3 mb-5 bg-white rounder"
                key={value.id}
                sx={{ maxWidth: 345 }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={value.thumbnail}
                  title={value.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Price: ${value.price}</Button>
                  <Button size="small">Stock: {value.stock}</Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
