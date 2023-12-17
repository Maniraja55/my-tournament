import { Typography } from "@mui/material";
import { getCamelCaseWord } from "../utils";

export default function PlayerInfo({ id, index, name, spec, subSpec }) {
  return (
    <Typography variant="body1" gutterBottom key={id}>
      {`${index + 1}.) ${name}`} (
      <Typography variant="caption" gutterBottom as="span">
        {getCamelCaseWord(spec)}
        {subSpec ? ":" + getCamelCaseWord(subSpec) : ""}
      </Typography>
      )
    </Typography>
  );
}
