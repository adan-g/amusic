import PlayList from "./components/PlayList"
import Menu from "./components/Menu"
import Search from "./components/Search"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Player from "./components/Player"
import { Notifications } from "./components/Notifications"


function App() {
  return (
    <BrowserRouter>
      <Notifications />
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
