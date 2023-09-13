import React from "react";
 
import { Route, Routes } from "react-router-dom";
 

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Create from "./components/create";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;