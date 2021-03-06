import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import platform from 'platform';
import Carousel from 're-carousel';

import { openImageModal } from "../App";
import { changeToggleColor } from "./Header";
import { _databaseGetNotice } from "../helpers/database";
import { _commonSetCommonInfo, _commonTimestampToDate } from "../helpers/common";
import IndicatorDots from '../components/CarouselIndicatorDots';
import Buttons from '../components/CarouselButtons';

import { HiOutlineHome } from "react-icons/hi";
import { TbListCheck, TbPencil } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { BiBed } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";

// import "../css/common.css";
import "../css/main.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

const Main = (props) => {

    let noticeListTemp = [];
    const navigate = useNavigate();
    const videoRef = useRef();
    const [noticeList, setNoticeList] = useState([]);

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        handleResize();

        // alert(platform.name.toLowerCase());
        // platform.name //
        // PC : Chrome, Electron, Firefox, Firefox for iOS, IE, Microsoft Edge, PhantomJS, Safari, SeaMonkey, Silk, Opera Mini, Opera
        // Mobile : Chrome Mobile, Firefox Mobile, IE Mobile, Opera Mobile
        if(platform.name.toLowerCase() === "safari") {
            videoRef.current.pause();
        }else {
            videoRef.current.play();
        }

        _databaseGetNotice(function (id, notice) {
            notice.key = id;
            noticeListTemp = [notice].concat(noticeListTemp);
            setNoticeList(noticeListTemp);
        });
        _commonSetCommonInfo("selected_notice_id", null);
        _commonSetCommonInfo("selected_notice", null);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    const handleResize = (e) => {
        var innerWidth = window.innerWidth;
        if(innerWidth > 1000) {
            document.getElementById("etc_info_intro").setAttribute("rowSpan", 2);
            document.getElementById("etc_info_intro").removeAttribute("colSpan", 2);

            if(document.getElementById("temp_tr") != null) {
                document.getElementById("etc_info_intro").insertAdjacentElement("afterend", document.getElementById("etc_info_notice"));
                document.getElementById("temp_tr").remove();
            }

        }else {
            document.getElementById("etc_info_intro").setAttribute("colSpan", 2);
            document.getElementById("etc_info_intro").removeAttribute("rowSpan", 2);

            if(document.getElementById("temp_tr") == undefined) {
                var tr = document.createElement("tr");
                tr.setAttribute("id", "temp_tr");
                tr.appendChild(document.getElementById("etc_info_notice"));
                document.getElementById("etc_info_intro").parentNode.insertAdjacentElement("afterend", tr);
            }

            if(innerWidth < 520) {
                if(document.getElementById("temp_account_tr") == undefined) {
                    var account_tr = document.createElement("tr");
                    account_tr.setAttribute("id", "temp_account_tr");
                    account_tr.appendChild(document.getElementById("etc_info_account"));
                    document.getElementById("etc_info_call").parentNode.insertAdjacentElement("afterend", account_tr);
                }
            }else {
              if(document.getElementById("temp_account_tr") != null) {
                  document.getElementById("etc_info_call").insertAdjacentElement("afterend", document.getElementById("etc_info_account"));
                  document.getElementById("temp_account_tr").remove();
              }
            }
        }
    }

    const handleLinkMove = (e, link) => {
        window.scrollTo(0, 0);
        changeToggleColor(link.split("/")[2]);
        navigate(link);
    }

    return (
        <>
            <div id="main_wrap">
                <div className="main_carousel_wrap">
                    <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
                        <img className="main_carousel_img" src="/main/carousel/1.jpg" />
                        <img className="main_carousel_img" src="/main/carousel/2.jpg" />
                        <img className="main_carousel_img" src="/main/carousel/3.jpg" />
                        <img className="main_carousel_img" src="/main/carousel/4.jpg" />
                    </Carousel>
                    <div className="main_title">JAYEONNURI PENSION</div>
                </div>
                <div className="menu_box_wrap">
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/introduce/ABOUT")}><HiOutlineHome /><br/><span className="menu_box_eng">INTRODUCE</span><br/><span className="menu_box_kor">????????????</span></div>
                    </div>
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/room1/ROOM")}><BiBed /><br/><span className="menu_box_eng">ROOM</span><br/><span className="menu_box_kor">????????????</span></div>
                    </div>
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/terms_of_use/RESERVATION")}><TbListCheck /><br/><span className="menu_box_eng">RULES</span><br/><span className="menu_box_kor">????????????</span></div>
                    </div>
                    <div>
                        <div onClick={(e) => {window.open("http://www.pensionlife.co.kr/asp/calendar/online_cal.php?jid=1395","","width=900px, location=no, titlebar=no, scrollbars=yes, menubar=no, status = no, left = 500, toolbar=no");}} className="menu_box"><IoCalendarOutline />
                            <br/><span className="menu_box_eng">RESERVATION</span><br/><span className="menu_box_kor">??????</span>
                        </div>
                    </div>
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/reviews/COMMUNITY")}><TbPencil /><br/><span className="menu_box_eng">REVIEWS</span><br/><span className="menu_box_kor">????????????</span></div>
                    </div>
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/way_to_come/ABOUT")}><GrMapLocation /><br/><span className="menu_box_eng">LOCATION</span><br/><span className="menu_box_kor">????????? ???</span></div>
                    </div>
                </div>
                <div className="main_img">
                    <div className="tz-gallery">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6" style={{paddingTop:"0px !important"}}>
                                <img src="/main/main_list/1.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6" style={{paddingTop:"0px !important"}}>
                                <img src="/main/main_list/2.jpg" onClick={openImageModal} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/main_list/3.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/main_list/4.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/main_list/5.jpg" onClick={openImageModal} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-xs-12">
                                <video id="summer_video" ref={videoRef} autoPlay controls muted loop>
                                    <source src="/main/main_list/summer_video1.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/main_list/6.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/main_list/7.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/main_list/8.jpg" onClick={openImageModal} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="etc_info">
                    <table>
                      <thead></thead>
                      <tbody>
                        <tr>
                            <td id="etc_info_intro">
                                <div>
                                    <div>JAYEONNURI PENSION</div>
                                    <div>Happiness & Comfort</div>
                                    <div>???????????? ????????? ????????? ??????<br/>?????? ???????????? ????????? ???????????? ???????????? ?????? ?????????????????????</div>
                                    <div>
                                        <img src="/main/main_list/bottom.jpg" />
                                    </div>
                                </div>
                            </td>
                            <td id="etc_info_notice" colSpan={2}>
                                <div>
                                    <div>Notice</div>
                                    {noticeList.length > 0 &&
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="notice_title">??????</th>
                                            <th className="notice_author">?????????</th>
                                            <th>?????????</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {noticeList.map((data, index) => {
                                            return <tr key={index}
                                                       id={data.key}
                                                       onClick={(e) => {
                                                           _commonSetCommonInfo("selected_notice_id", data.key);
                                                           _commonSetCommonInfo("selected_notice", data);
                                                           navigate("/notice_steps/COMMUNITY?detail");
                                                       }} >
                                                <td className="notice_cont_title">{data.title}</td>
                                                <td>{data.author}</td>
                                                <td className="list_time">{_commonTimestampToDate(data.time)}</td>
                                            </tr>
                                        })}
                                        </tbody>
                                    </table>
                                    }
                                    {noticeList.length === 0 &&
                                    <div>
                                        ??????????????? ????????????.
                                    </div>
                                    }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td id="etc_info_call">
                                <div>
                                    <div>[????????????]</div>
                                    <div>010-4382-0056</div>
                                </div>
                            </td>
                            <td id="etc_info_account">
                                <div>
                                    <div>[????????????] </div>
                                    <div>???????????? 351-7557-4935-03</div>
                                    <div>????????? : ?????????</div>
                                </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Main;
