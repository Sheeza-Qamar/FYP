import { Link } from "react-router-dom";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";

export default function Register() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" }}>
      <Card sx={{ width: 350, padding: 3, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5">Register</Typography>
          <TextField label="Full Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
          <TextField label="Confirm Password" variant="outlined" type="password" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
