import {
  TextField,
  Box,
  RadioGroup,
  FormControl,
  Stack,
  IconButton,
} from "@mui/material";
import PlayerSpecificationType from "./player-specification-type";
import DeleteIcon from "@mui/icons-material/Delete";

function AddPlayer({ id, name, spec, onChange, onDelete }) {
  const handlePlayerNameChange = (e) => {
    onChange(id, e.target.value, "name");
  };

  const handlePlayerSpecChange = (e, value) => {
    onChange(id, value, "spec");
  };

  const handleDeletePlayer = () => {
    onDelete(id);
  };

  return (
    <Box mt={2}>
      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Player name"
          value={name}
          onChange={handlePlayerNameChange}
        />
        <IconButton
          aria-label="delete"
          disabled={id === 0}
          color="error"
          onClick={handleDeletePlayer}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
      <FormControl>
        <RadioGroup row value={spec} onChange={handlePlayerSpecChange}>
          <PlayerSpecificationType label="Batter" />
          <PlayerSpecificationType label="Bowler" />
          <PlayerSpecificationType label="Allrounder" />
          <PlayerSpecificationType label="WK" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default AddPlayer;
