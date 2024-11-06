import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Home } from "./Home";
import Login from "./Login";
import { useUser } from "./state";
import { Box } from "@mui/material";
import backgroundImage from "./street.jpeg";

export default function App() {
  const { username } = useUser();

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
          zIndex: -1,
        }}
      ></Box>
      <div className="my-4">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mx: "auto",
            color: "white",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Yale Street
        </Typography>

        {username ? <Home /> : <Login />}
      </div>
    </Container>
  );
}
