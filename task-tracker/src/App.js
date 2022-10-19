import { Container } from "@mui/material";
import Navigation from "./components/Navigation";
import TaskItem from "./components/TaskItem/TaskItem";

function App() {
  return (
    
    <div>

      <Navigation/>
      <Container maxWidth="sm">
        <TaskItem />
      </Container>
    </div>
  );
}

export default App;
