import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, NotFound, Main, Introduce } from './pages';
import Caravan1 from "./pages/Caravan1";
import Caravan2 from "./pages/Caravan2";
import Caravan3 from "./pages/Caravan3";
import Caravan4 from "./pages/Caravan4";
import Room1 from "./pages/Room1";
import Room5 from "./pages/Room5";
import Around from "./pages/Around";
import Mountain from "./pages/Mountain";
import TermsOfUse from "./pages/TermsOfUse";
import UsePrice from "./pages/UsePrice";
import WayToCome from "./pages/WayToCome";
import Reviews from "./pages/Reviews";

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/introduce/:parent" element={<Introduce />}></Route>
                    <Route path="/way_to_come/:parent" element={<WayToCome />}></Route>
                    <Route path="/room1/:parent" element={<Room1 />}></Route>
                    <Route path="/room5/:parent" element={<Room5 />}></Route>
                    <Route path="/caravan1/:parent" element={<Caravan1 />}></Route>
                    <Route path="/caravan2/:parent" element={<Caravan2 />}></Route>
                    <Route path="/caravan3/:parent" element={<Caravan3 />}></Route>
                    <Route path="/caravan4/:parent" element={<Caravan4 />}></Route>
                    <Route path="/around/:parent" element={<Around />}></Route>
                    <Route path="/mountain/:parent" element={<Mountain />}></Route>
                    <Route path="/terms_of_use/:parent" element={<TermsOfUse />}></Route>
                    <Route path="/use_price/:parent" element={<UsePrice />}></Route>
                    <Route path="/reviews/:parent" element={<Reviews />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;