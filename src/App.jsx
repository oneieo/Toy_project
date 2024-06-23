import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import VenueList from "./pages/VenueList";
import VenueSearch from "./pages/VenueSearch";
import VenueDetail from "./pages/VenueDetail";
import ShowDetail from "./pages/ShowDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/venue-list" element={<VenueList />} />
          <Route path="/venue-search" element={<VenueSearch />} />
          <Route path="/venue-detail" element={<VenueDetail />} />
          <Route path="/show-detail" element={<ShowDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
