import PlayList from "./components/PlayList"
import Menu from "./components/Menu"
import Search from "./components/Search"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Player from "./components/Player"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayList />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Player />
      <Menu />
    </BrowserRouter>
  )
}

export default App
