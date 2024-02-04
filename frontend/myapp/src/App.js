import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
const App = () => {
  return (
    <main>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

export default App;
