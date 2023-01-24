import { Route, Routes } from "react-router-dom";
import Wordle from "./pages/Worlde";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="/wordle" element={<Wordle />} />
      </Routes>
    </div>
  );
}

export default App;
