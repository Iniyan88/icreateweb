import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
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
