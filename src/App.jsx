import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import { Home, About, Service, Contact } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
