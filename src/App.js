import { Route, Routes } from "react-router-dom";
import Wordle from "./pages/Worlde";
import Home from "./pages/Home";
import Post from "./pages/Post";
import RandomPost from "./pages/RandomPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:slug" element={<Post />} />
        <Route path="/posts" element={<RandomPost />} />
        <Route path="/wordle" element={<Wordle />} />
      </Routes>
    </>
  );
}

export default App;
