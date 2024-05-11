import "./App.css";
import Form from "./components/FORMCONTROLLER/Form";
import Headers from "./components/HEADER/Header";
import Navbar from "./components/NAVBAR/Navbar";
import TripInfo from "./components/TRIPINFO/TripInfo";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Headers></Headers>
      <TripInfo></TripInfo>
      <Form></Form>
    </div>
  );
};

export default App;
