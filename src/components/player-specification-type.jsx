import { FormControlLabel, Radio } from "@mui/material";

function PlayerSpecificationType({ label }) {
  const value = label.toLowerCase();
  return <FormControlLabel value={value} control={<Radio />} label={label} />;
}

export default PlayerSpecificationType;
