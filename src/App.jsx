import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Compo/Home'
// import Student from './Components/Student';
import Contact from './Compo/Contact';
import Data from './Compo/Data';
import Addnew from './Compo/AddStudent'
import Table from "./Compo/Table";
import Edit from './Compo/Edit';

const App = () => {

  const [data, setData] = useState([{ name: "Sara", age: 22, course: "Fashion Designing", batch: "2022" }, { name: "Varun", age: 22, course: "Engineering", batch: "2022" },{ name: "Aditi", age: 22, course: "MCA", batch: "2022" }])
  return (
    <div className='background'>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />


          <Route path="/Student" element={
            <Data.Provider value={{ entries: data, UpdateFun: setData }} >
              <Table />
            </Data.Provider>
          } />

          <Route path="/addnew" element={
            <Data.Provider value={{ entries: data, UpdateFun: setData }} >
              <Addnew />
            </Data.Provider>
          } />

          <Route path='/editStudent' element={<Data.Provider value={{ entries: data, UpdateFun: setData }} >
            <Edit />
          </Data.Provider>

          } />



          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;