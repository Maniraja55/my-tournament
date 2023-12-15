import React, { useState, useRef, useReducer, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import AddPlayer from "../components/add-player";
import TeamInfo from "../components/team-info";

const actions = {
  changeTeamName: "changeTeamName",
  changePlayerName: "changePlayerName",
  changePlayerSpec: "changePlayerSpec",
  addNewPlayer: "addNewPlayer",
  deletePlayer: "deletePlayer",
};

const initialState = {
  teamName: "",
  players: [
    {
      id: 0,
      name: "",
      spec: "",
    },
  ],
};

const changePlayersInfo = (payload, players, type) => {
  const { id, value } = payload;
  players[id][type] = value;
  return [...players];
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.changeTeamName:
      return {
        teamName: payload,
        players: [...state.players],
      };
    case actions.changePlayerName:
      return {
        teamName: state.teamName,
        players: changePlayersInfo(payload, state.players, "name"),
      };
    case actions.changePlayerSpec:
      return {
        teamName: state.teamName,
        players: changePlayersInfo(payload, state.players, "spec"),
      };
    case actions.addNewPlayer:
      if (state.players.length < 11) {
        return {
          teamName: state.teamName,
          players: [
            ...state.players,
            {
              name: "",
              spec: "",
              id: state.players.length,
            },
          ],
        };
      }
      return state;
    case actions.deletePlayer:
      state.players.splice(payload, 1);
      return {
        teamName: state.teamName,
        players: [...state.players],
      };
    default:
      return state;
  }
};

function TeamEnroll() {
  const addPlayerRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { teamName, players } = state;

  /* Scroll down to the bottom on every add new player */
  useEffect(() => {
    if (addPlayerRef && addPlayerRef.current) {
      addPlayerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [players.length]);

  const handleTeamNameChange = (e) => {
    dispatch({
      type: actions.changeTeamName,
      payload: e.target.value,
    });
  };

  const handlePlayerInfoChange = (id, value, type) => {
    dispatch({
      type:
        type === "name" ? actions.changePlayerName : actions.changePlayerSpec,
      payload: {
        id,
        value,
      },
    });
  };

  const handleAddPlayer = () => {
    dispatch({
      type: actions.addNewPlayer,
    });
  };

  const handleDeletePlayer = (id) => {
    dispatch({
      type: actions.deletePlayer,
      payload: id,
    });
  };

  const renderPlayers = players.map((player) => (
    <AddPlayer
      key={player.id}
      {...player}
      onChange={handlePlayerInfoChange}
      onDelete={handleDeletePlayer}
    />
  ));

  const handleSubmit = () => {
    setShowInfo(true);
  };

  return (
    <Box
      sx={{
        mt: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        <Typography as="span" variant="h4" className="title-gradient">
          Enroll your team!
        </Typography>
      </Typography>
      <Box sx={{ width: "450px" }}>
        <TextField
          fullWidth
          label="Team name"
          variant="outlined"
          value={teamName}
          onChange={handleTeamNameChange}
        />
        <Typography variant="h6" sx={{ fontWeight: 700, mt: "1rem" }}>
          Add Players
        </Typography>
        <Box maxHeight="480px" pr={1} overflow="auto">
          {renderPlayers}
          <Box ref={addPlayerRef} />
        </Box>
        <Stack direction="row" mt={2} spacing={2} justifyContent="flex-end">
          <Button variant="outlined" color="primary" onClick={handleAddPlayer}>
            Add Player
          </Button>
          <Button variant="outlined" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
      {showInfo && (
        <>
          <Divider
            sx={{
              width: "100%",
              mt: 4,
            }}
          />
          <TeamInfo data={state} />
        </>
      )}
    </Box>
  );
}

export default TeamEnroll;
