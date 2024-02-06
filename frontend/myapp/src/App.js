import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./_main/componenets/Dashboard";
import MainLayout from "./_main/MainLayout";
import Materials from "./_main/componenets/Materials";
import Companies from "./_main/componenets/Companies";
import Ccalculator from "./_main/componenets/Ccalculator";
import Starred from "./_main/componenets/Starred";
import WebDev from "./_main/materials/WebDev";
import Programming from "./_main/materials/Programming";
import Notes from "./_main/materials/Notes";
import AiMl from "./_main/materials/AiMl";
import Ethical from "./_main/materials/Ethical";
const App = () => {
  return (
    <main>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/calculator" element={<Ccalculator />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/web" element={<WebDev />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/aiml" element={<AiMl />} />
          <Route path="/ethical" element={<Ethical />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
