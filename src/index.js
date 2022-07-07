import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Nowosci from "./routes/nowosci";
import Malwa from "./routes/malwa";
import Opony from "./routes/Opony";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="nowosci" element={<Nowosci />} />
        <Route path="malwa" element={<Malwa />} />
        <Route path="Opony" element={<Opony />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);