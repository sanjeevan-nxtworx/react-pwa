import { BrowserRouter, Routes, Route } from "react-router-dom";

import MultiChildForm from "./multichildform";
import MultiChildNavbar from "./multichildNavbar";
import MultiChildParent from "./multichildParent";
import ApiComponent from "./apiComponent";

function MultiChildComponent() {
  return (
    <BrowserRouter>
      <div>
        <MultiChildNavbar />
        <Routes>
          <Route path="/" element={<MultiChildParent />} />
          <Route path="/form/:name/:message" element={<MultiChildForm />} />
          <Route path="/Api" element={<ApiComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MultiChildComponent;
