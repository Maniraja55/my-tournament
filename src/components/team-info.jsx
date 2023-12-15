import { Typography, Card, CardContent } from "@mui/material";

export default function TeamInfo({ data: { teamName, players } }) {
  return (
    <Card sx={{ my: 4, minWidth: "450px" }}>
      <CardContent>
        <Typography variant="h4" gutterBottom textAlign="center">
          <Typography as="span" variant="h4" className="title-gradient">
            {teamName}
          </Typography>
        </Typography>
        {players.map(({ id, name, spec }) => (
          <Typography variant="subtitle1" gutterBottom key={id}>
            {`${id + 1}.) ${name}`} (
            <Typography variant="subtitle2" gutterBottom as="span">
              {spec}
            </Typography>
            )
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
