import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ContentCard({ header, item }) {
  const [isUnliked, setIsUnliked] = useState(true);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="160"
        image={item.hdurl}
        alt={item.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.explanation}
        </Typography>
        <hr />
        <Typography color="text.secondary" align="left">
          Date: {item.date}
        </Typography>
        <Typography color="text.secondary" align="left">
          Copyright: {item.copyright}
        </Typography>
        <Typography color="text.secondary" align="left">
          Brought to you by NASA's image API
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={() => setIsUnliked((oldLike) => !oldLike)}
        >
          {isUnliked ? "Like" : "Unlike"}
        </Button>
        <Button size="small">
          <a style={{ textDecoration: "none" }} href={item.url}>
            Link
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ContentCard;
