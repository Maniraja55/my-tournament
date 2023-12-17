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
import { playersSpecTypes } from "./data";

function AddPlayer({ id, name, spec, subSpec, disabled, onChange, onDelete }) {
  const handlePlayerNameChange = (e) => {
    onChange(id, e.target.value, "name");
  };

  const handlePlayerSpecChange = (value, isSub = false) => {
    onChange(id, value, isSub ? "subSpec" : "spec");
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
          disabled={disabled}
          color="error"
          onClick={handleDeletePlayer}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
      <FormControl>
        <RadioGroup
          row
          value={spec}
          onChange={(e, val) => handlePlayerSpecChange(val)}
        >
          {playersSpecTypes.spec.map((playerSpec) => (
            <PlayerSpecificationType key={playerSpec} label={playerSpec} />
          ))}
        </RadioGroup>
        {spec && (
          <RadioGroup
            row
            value={subSpec}
            onChange={(e, val) => handlePlayerSpecChange(val, true)}
          >
            {playersSpecTypes[spec]?.map((playerSpec) => (
              <PlayerSpecificationType key={playerSpec} label={playerSpec} />
            ))}
          </RadioGroup>
        )}
      </FormControl>
    </Box>
  );
}

export default AddPlayer;
