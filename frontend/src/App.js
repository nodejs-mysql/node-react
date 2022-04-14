import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VacancieList from "./components/VacancieList";
import VacanciePublic from "./components/VacanciePublic";
import AddVacancie from "./components/AddVacancie";
import EditVacancie from "./components/EditVacancie";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route path="/" element={<VacancieList />}>
            </Route>
            <Route path="/public" element={<VacanciePublic />}>
            </Route>
            <Route path="/add" element={<AddVacancie/>}>
            </Route>
            <Route path="/edit/:id" element={<EditVacancie />}>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;
