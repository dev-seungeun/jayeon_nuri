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
                    <Route path="/introduce" element={<Introduce />}></Route>
                    <Route path="/caravan1" element={<Caravan1 />}></Route>
                    <Route path="/caravan2" element={<Caravan2 />}></Route>
                    <Route path="/caravan3" element={<Caravan3 />}></Route>
                    <Route path="/caravan4" element={<Caravan4 />}></Route>
                    <Route path="/room1" element={<Room1 />}></Route>
                    <Route path="/room5" element={<Room5 />}></Route>
                    <Route path="/around" element={<Around />}></Route>
                    <Route path="/mountain" element={<Mountain />}></Route>
                    <Route path="/terms_of_use" element={<TermsOfUse />}></Route>
                    <Route path="/use_price" element={<UsePrice />}></Route>
                    <Route path="/way_to_come" element={<WayToCome />}></Route>
                    <Route path="/reviews" element={<Reviews />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;