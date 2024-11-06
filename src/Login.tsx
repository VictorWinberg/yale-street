import { Button, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useUser } from "./state";

export default function Login() {
  const { username, updateUsername } = useUser();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const username = formData.get("username");

        if (username) {
          updateUsername(username as string);
        } else {
          console.log("Username is required");
        }
      }}
    >
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Typography variant="h6" component="h2">
          Login
        </Typography>
        <TextField name="username" label="Username" variant="outlined" />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
}
