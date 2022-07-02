import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Introduce from './pages/Introduce';
import Caravan1 from './pages/Caravan1';
import Caravan2 from './pages/Caravan2';
import Caravan3 from './pages/Caravan3';
import Caravan4 from './pages/Caravan4';
import Room1 from './pages/Room1';
import Room5 from './pages/Room5';
import Around from './pages/Around';
import Mountain from './pages/Mountain';
import TermsOfUse from './pages/TermsOfUse';
import UsePrice from './pages/UsePrice';
import WayToCome from './pages/WayToCome';
import Reviews from './pages/Reviews';
import ReviewsSteps from './pages/ReviewsSteps';
import Notice from './pages/Notice';
import NoticeSteps from './pages/NoticeSteps';
import { getJsonData } from "./components/FetchData";
import "./App.css";
import { HiX } from "react-icons/hi";

const openImageModal = (e, src) => {
  document.getElementById("my_modal").style.display = "block";
  let imgSrc = src ? src : e.target.src;
  document.getElementById("modalBoxImg").src = imgSrc;
};

const closeImageModal = (e) => {
  document.getElementById("my_modal").style.display = "none";
};

const App = () => {

  const [getDataDone, setGetDataDone] = useState(false);
  getJsonData(function(res){
      setGetDataDone(res)
  })

  return (
      <div className='App'>
        <div id="my_modal" className="my_modal" onClick={closeImageModal}>
          <button onClick={closeImageModal}><HiX /></button>
          <div id="modalBox" className="modalBox">
            <img id="modalBoxImg" src="" />
          </div>
        </div>
          {getDataDone &&
          <HashRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Main/>}></Route>
                  <Route path="/introduce/:parent" element={<Introduce/>}></Route>
                  <Route path="/way_to_come/:parent" element={<WayToCome/>}></Route>
                  <Route path="/room1/:parent" element={<Room1/>}></Route>
                  <Route path="/room5/:parent" element={<Room5/>}></Route>
                  <Route path="/caravan1/:parent" element={<Caravan1/>}></Route>
                  <Route path="/caravan2/:parent" element={<Caravan2/>}></Route>
                  <Route path="/caravan3/:parent" element={<Caravan3/>}></Route>
                  <Route path="/caravan4/:parent" element={<Caravan4/>}></Route>
                  <Route path="/around/:parent" element={<Around/>}></Route>
                  <Route path="/mountain/:parent" element={<Mountain/>}></Route>
                  <Route path="/terms_of_use/:parent" element={<TermsOfUse/>}></Route>
                  <Route path="/use_price/:parent" element={<UsePrice/>}></Route>
                  <Route path="/notice/:parent" element={<Notice/>}></Route>
                  <Route path="/notice_steps/:parent" element={<NoticeSteps/>}></Route>
                  <Route path="/reviews/:parent" element={<Reviews/>}></Route>
                  <Route path="/reviews_steps/:parent" element={<ReviewsSteps/>}></Route>
                  <Route path="*" element={<NotFound/>}></Route>
              </Routes>
              <Footer/>
          </HashRouter>
          }
      </div>
  );
}

export default App;
export { openImageModal, closeImageModal };
