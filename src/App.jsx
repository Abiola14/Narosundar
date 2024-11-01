import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Layout from "./components/Layout";
import { Home, About, Service } from "./Pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
