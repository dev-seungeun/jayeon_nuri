import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { TbLeaf } from "react-icons/tb";

// import "../css/common.css";
import "../css/fonts.css";
import "../css/header.css";

const max_width = 1000;
const HeaderStyle = styled.div`
    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
        .menuwrap {
            left: ${(props) => props.isToggled ? "0" : "-300px"};
         }
    }
`;

const changeToggleColor = (pathname) => {
    if(pathname !== "/") {
        document.querySelector(".toggle").style.color = "black";
    }else {
        document.querySelector(".toggle").style.color = "white";
    }
}

const openReservationLink = () => {
    window.open("http://www.pensionlife.co.kr/asp/calendar/online_cal.php?jid=1395","","width=900px, location=no, titlebar=no, scrollbars=yes, menubar=no, status = no, left = 500, toolbar=no");
}

function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    const [isToggled, setIsToggled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedMenuCheck, setSelectedMenuCheck] = useState(true);
    const [showAboutChild, setShowAboutChild] = useState(false);
    const [showRoomChild, setShowRoomChild] = useState(false);
    const [showAroundChild, setShowAroundChild] = useState(false);
    const [showReservationChild, setShowReservationChild] = useState(false);
    const [showCommunityChild, setShowCommunityChild] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [mouseLeaveMenu, setMouseLeaveMenu] = useState(true);
    const [mouseLeaveSubMenu, setMouseLeaveSubMenu] = useState(true);

    const changeMenuFontWeight = (parentId) => {
        document.querySelectorAll(".parent_menu").forEach((el) => {
            el.style.fontWeight = "400";
        });
        if(parentId) document.getElementById(parentId).style.fontWeight = "700";
    }

    const handleLinkMove = (e, link) => {

        const childId = link.split("/")[1];
        if(childId === "reservation") {
            openReservationLink();
        }else {
            changeMenuFontWeight(document.getElementById(childId).parentNode.parentNode.previousSibling.id);
        }

        if(isMobile) {
            setIsToggled(false);
            setShowSubMenu(false);
            setShowAboutChild(false);
            setShowRoomChild(false);
            setShowAroundChild(false);
            setShowReservationChild(false);
            setShowCommunityChild(false);
        }else {
            setMouseLeaveMenu(true);
        }

        changeToggleColor(link);

        if(childId !== "reservation") {
            navigate(link);
        }
    }

    const handleMenuOpenClick = (e, menuId, forceFlag, toAll) => {

        // ???????????? ?????? ??????
        let id = "";
        if(e != null || menuId != null) {
          id =  menuId ? menuId : e.target.id;
          if(e != null) {
              if(e.target.nodeName === "svg") {
                  id = e.target.parentNode.parentNode.id;
              }else if(e.target.nodeName === "path") {
                  id = e.target.parentNode.parentNode.parentNode.id;
              }
          }
        }

        changeMenuFontWeight();

        if(toAll) {
            setShowAboutChild(forceFlag);
            setShowRoomChild(forceFlag);
            setShowAroundChild(forceFlag);
            setShowReservationChild(forceFlag);
            setShowCommunityChild(forceFlag);
        }else {
            if(isMobile) {
                if(id === "ABOUT") {
                    setShowAboutChild(forceFlag != null ? forceFlag : !showAboutChild);
                }else if(id === "ROOM") {
                    setShowRoomChild(forceFlag != null ? forceFlag : !showRoomChild);
                }else if(id === "AROUND") {
                    setShowAroundChild(forceFlag != null ? forceFlag : !showAroundChild);
                }else if(id === "RESERVATION") {
                    setShowReservationChild(forceFlag != null ? forceFlag : !showReservationChild);
                }else if(id === "COMMUNITY") {
                    setShowCommunityChild(forceFlag != null ? forceFlag : !showCommunityChild);
                }
            }
        }

        setSelectedMenuCheck(!selectedMenuCheck);

    }

    const handleResize = (e) => {
        if(window.innerWidth >= max_width) {
            setIsMobile(false);
            setIsToggled(false);
            setShowSubMenu(false);
            setShowAboutChild(false);
            setShowRoomChild(false);
            setShowAroundChild(false);
            setShowReservationChild(false);
            setShowCommunityChild(false);
        }else {
            setIsMobile(true);
        }
    }

    const clickDimmed = (e) => {
        setIsToggled(false);
    }

    useEffect(() => {
        setIsMobile(window.innerWidth >= max_width ? false : true);
        window.addEventListener("resize", handleResize);
        changeToggleColor(location.pathname);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = isToggled ? "hidden" : "unset";

        if(isToggled) {

            // ?????? ????????? ???????????? ??????
          let parentId = "";
          if(location.pathname !== "/") {
              // path?????? ?????? ??????
              parentId = location.pathname.split("/")[location.pathname.split("/").length-1];
              handleMenuOpenClick(null, null, false, true); // sub_ul ?????? ??????
              handleMenuOpenClick(null, parentId, true); // ?????? parentId ??? sub_ul ??????
          }

        }else {
          if(location.pathname === "/") {
              handleMenuOpenClick(null, null, false, true); // sub_ul ????????????
          }
        }

    }, [isToggled]);


    useEffect(() => {
        if(isMobile) {
            // ???????????? ???????????? ?????? ?????????
            if(location.pathname !== "/") {
                document.querySelectorAll(".child_ul_li").forEach((el) => {
                    el.classList.remove("selected");
                })

                const selectedMenuID = location.pathname.split("/")[1].includes("_steps") ? location.pathname.split("/")[1].split("_steps")[0]: location.pathname.split("/")[1];
                if(document.getElementById(selectedMenuID)) {
                    document.getElementById(selectedMenuID).classList.add("selected");
                }
            }
        }
    }, [selectedMenuCheck]);

    useEffect(() => {
        if(!isMobile) {
            if(mouseLeaveMenu && mouseLeaveSubMenu && showSubMenu) {
                setShowSubMenu(false);
                document.getElementById("submenu_background").style.height = "0px";
            }else if(!mouseLeaveMenu && !showSubMenu) {
                setTimeout(function () {
                    setShowSubMenu(true);
                },200)
                document.getElementById("submenu_background").style.height = "190px";
            }
        }
    }, [mouseLeaveMenu, mouseLeaveSubMenu]);

    return (
            <HeaderStyle id="header" isToggled={isToggled} showSubMenu={showSubMenu} showAboutChild={showAboutChild}>
                { !isMobile && <div id="submenu_background" onMouseEnter={() => setMouseLeaveSubMenu(false)} onMouseLeave={() => setMouseLeaveSubMenu(true)}></div>    }
                { isToggled && <div id="dimmed" onClick={clickDimmed}></div> }

                <div className="toggle" onClick={() => { setIsToggled(!isToggled); }}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                {isMobile && location.pathname !== "/" &&
                <div className="name">
                    <span onClick={(e)=>{
                        changeToggleColor("/");
                        handleMenuOpenClick(null, null, false, true); // sub_ul ?????? ?????? ??????
                        navigate("/");
                    }}>JayeonNuri
                    </span>
                </div>}

                <div className="menuwrap">
                    <div className="toggle_x" onClick={() => { setIsToggled(!isToggled); }}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <div className="logo" onClick={(e)=>{
                        changeToggleColor("/");
                        changeMenuFontWeight();
                        location.pathname === "/" ? window.location.reload() : navigate("/")
                    }}>
                        <TbLeaf/>
                    </div>
                    <nav id="menu">
                        <ul className="header__menulist" onMouseEnter={() => setMouseLeaveMenu(false)} onMouseLeave={() => setMouseLeaveMenu(true)}>
                            <li>
                                <div id="ABOUT" className="parent_menu" onClick={handleMenuOpenClick}>
                                    ABOUT
                                    {isMobile && <span className="btn_toggle">
                                        {!showAboutChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showAboutChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showAboutChild) &&
                                <div>
                                    {!isMobile && <span id="about_child_ul_title">ABOUT</span>}
                                    <ul id="about_child_ul" className="inner_ul">
                                        <li id="introduce" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/introduce/ABOUT")}>???????????? ??????</div></li>
                                        <li id="way_to_come" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/way_to_come/ABOUT")}>????????? ???</div></li>
                                    </ul>
                                </div>}
                            </li>
                            <li>
                                <div id="ROOM" className="parent_menu" onClick={handleMenuOpenClick}>
                                    ROOM
                                    {isMobile && <span className="btn_toggle">
                                        {!showRoomChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showRoomChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showRoomChild) &&
                                <div>
                                    {!isMobile && <span id="room_child_ul_title">ROOM</span>}
                                    <ul id="room_child_ul" className="inner_ul">
                                        <li id="room1" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/room1/ROOM")}>?????? 1,2,3???</div></li>
                                        <li id="room5" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/room5/ROOM")}>?????? 5,6???</div></li>
                                        {/*<li id="caravan1" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/caravan1/ROOM")}>????????? 1???</div></li>*/}
                                        {/*<li id="caravan2" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/caravan2/ROOM")}>????????? 2???</div></li>*/}
                                        {/*<li id="caravan3" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/caravan3/ROOM")}>????????? 3???</div></li>*/}
                                        {/*<li id="caravan4" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/caravan4/ROOM")}>????????? 4???</div></li>*/}
                                    </ul>
                                </div>}
                            </li>
                            <li>
                                <div id="AROUND" className="parent_menu" onClick={handleMenuOpenClick}>
                                    AROUND
                                    {isMobile && <span className="btn_toggle">
                                        {!showAroundChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showAroundChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showAroundChild) &&
                                <div>
                                    {!isMobile && <span id="around_child_ul_title">AROUND</span>}
                                    <ul id="around_child_ul" className="inner_ul" style={{ariaExpanded:"true"}}>
                                        <li id="mountain" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/mountain/AROUND")}>????????? ?????????</div></li>
                                            <li id="around" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/around/AROUND")}>?????? ?????????</div></li>
                                    </ul>
                                </div>}
                            </li>
                            <li>
                                <div id="RESERVATION" className="parent_menu" onClick={handleMenuOpenClick}>
                                    RESERVATION
                                    {isMobile && <span className="btn_toggle">
                                        {!showReservationChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showReservationChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showReservationChild) &&
                                <div>
                                    {!isMobile && <span id="reservation_child_ul_title">RESERVATION</span>}
                                    <ul id="reservation_child_ul" className="inner_ul" style={{ariaExpanded:"true"}}>
                                        <li id="reservation" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/reservation")}>????????? ??????</div></li>
                                        <li id="terms_of_use" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/terms_of_use/RESERVATION")}>????????????</div></li>
                                        <li id="use_price" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/use_price/RESERVATION")}>????????????</div></li>
                                    </ul>
                                </div>}
                            </li>
                            <li>
                                <div id="COMMUNITY" className="parent_menu" onClick={handleMenuOpenClick}>
                                    COMMUNITY
                                    {isMobile && <span className="btn_toggle">
                                        {!showCommunityChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showCommunityChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showCommunityChild) &&
                                <div>
                                    {!isMobile && <span id="community_child_ul_title">COMMUNITY</span>}
                                    <ul id="community_child_ul" className="inner_ul" style={{ariaExpanded:"true"}}>
                                        <li id="notice" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/notice/COMMUNITY")}>????????????</div></li>
                                        <li id="reviews" className="child_ul_li"><div onClick={(e)=>handleLinkMove(e, "/reviews/COMMUNITY")}>????????????</div></li>
                                    </ul>
                                </div>}
                            </li>
                         </ul>
                    </nav>

                </div>

            </HeaderStyle>
    );
}

export default Header;
export { changeToggleColor, openReservationLink };
