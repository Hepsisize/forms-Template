import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Box minHeight="100vh" bgcolor="background.primary" py={5}>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
