import { Typography } from "@mui/material";
export default function GradientText({ children, styles = {} }) {
  return (
    <Typography
      variant="h4"
      textAlign="center"
      gutterBottom
      className="title-gradient"
      {...styles}
    >
      {children}
    </Typography>
  );
}
