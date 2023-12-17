import { Card, CardContent } from "@mui/material";
import GradientText from "./gradient-text";
import PlayerInfo from "./player-info";

export default function TeamInfo({ data: { teamName, players } }) {
  return (
    <Card sx={{ my: 4, minWidth: "450px" }}>
      <CardContent>
        <GradientText>{teamName}</GradientText>
        {players.map((player, index) => (
          <PlayerInfo key={player.id} {...player} index={index} />
        ))}
      </CardContent>
    </Card>
  );
}
