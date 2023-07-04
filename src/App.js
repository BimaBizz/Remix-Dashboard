import Dashboard from "./Routes/Dashboard";
import Posts from "./Routes/Posts";
import ListPost from "./Routes/Listpost";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <div className="flex max-w-screen-2xl w-full">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/list-posts" element={<ListPost />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
