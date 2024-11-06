import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Home } from "./Home";
import Login from "./Login";
import { useUser } from "./state";

export default function App() {
  const { username } = useUser();

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <div className="my-4">
        <Typography variant="h4" component="h1" sx={{ mx: "auto" }}>
          Yale Street
        </Typography>

        {username ? <Home /> : <Login />}
      </div>
    </Container>
  );
}
