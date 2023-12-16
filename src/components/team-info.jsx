import { Typography, Card, CardContent } from "@mui/material";
import GradientText from "./gradient-text";
import { getCamelCaseWord } from "../utils";

export default function TeamInfo({ data: { teamName, players } }) {
  return (
    <Card sx={{ my: 4, minWidth: "450px" }}>
      <CardContent>
        <GradientText>{teamName}</GradientText>
        {players.map(({ id, name, spec }, index) => (
          <Typography variant="body1" gutterBottom key={id}>
            {`${index + 1}.) ${name}`} (
            <Typography variant="caption" gutterBottom as="span">
              {getCamelCaseWord(spec)}
            </Typography>
            )
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
