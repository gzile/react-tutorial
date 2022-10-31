import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/about/about";
import { Header } from "./components/common/header";
import { Home } from "./components/home/home";

const App = () => {

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Container>

    </>
  )
}
export default App;