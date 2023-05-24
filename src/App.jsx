import Navbar from "./components/Navbar";
import Mainblob from "./components/Mainblob";
import "./App.css";
import Secondblob from "./components/Secondblob";

function App() {
  return (
    <div className="flex flex-col w-screen">
      <Navbar />
      <Mainblob />
      <Secondblob />
    </div>
  );
}

export default App;
