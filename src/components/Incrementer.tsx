import React from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface IncrementerProps {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const Incrementer: React.FC<IncrementerProps> = ({
  value,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div>
      <IconButton aria-label="remove from shopping cart" onClick={onDecrement}>
        <RemoveIcon />
      </IconButton>
      <TextField
        variant="outlined"
        value={value}
        sx={{
          width: "3em",
          textAlign: "center",
          "& .MuiInputBase-input": {
            textAlign: "center",
          },
        }}
        InputProps={{
          readOnly: true,
        }}
      />
      <IconButton aria-label="add to shopping cart" onClick={onIncrement}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Incrementer;
