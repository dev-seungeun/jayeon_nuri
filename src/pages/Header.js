import React, {useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { FaLeaf } from "react-icons/fa";
import { GiFallingLeaf, GiChestnutLeaf } from "react-icons/gi";
import { IoLeafOutline, IoLeafSharp, IoLeaf } from "react-icons/io5";
import { TbLeaf } from "react-icons/tb";
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

function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    const [openedMenu, setOpenedMenu] = useState();
    const [isToggled, setIsToggled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showAboutChild, setShowAboutChild] = useState(false);
    const [showRoomChild, setShowRoomChild] = useState(false);
    const [showAroundChild, setShowAroundChild] = useState(false);
    const [showReservationChild, setShowReservationChild] = useState(false);
    const [showCommunityChild, setShowCommunityChild] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [mouseLeaveMenu, setMouseLeaveMenu] = useState(true);
    const [mouseLeaveSubMenu, setMouseLeaveSubMenu] = useState(true);

    const changeMenuFontWeight = (parentId) => {
        document.getElementById("ABOUT").style.fontWeight = "400";
        document.getElementById("ROOM").style.fontWeight = "400";
        document.getElementById("AROUND").style.fontWeight = "400";
        document.getElementById("RESERVATION").style.fontWeight = "400";
        document.getElementById("COMMUNITY").style.fontWeight = "400";
        if(parentId) document.getElementById(parentId).style.fontWeight = "700";
    }

    const handleLinkMove = (e, link) => {

        const childId = link.split("/")[1];
        if(childId == "reservation") {
            window.open("http://www.pensionlife.co.kr/asp/calendar/online_cal.php?jid=1395","","width=900px, location=no, titlebar=no, scrollbars=yes, menubar=no, status = no, left = 500, toolbar=no");
        }else if(document.getElementById(childId) != undefined) {
            document.getElementById(childId).classList.add("selected");
            setOpenedMenu(document.getElementById(childId).parentNode.previousSibling.id+"-"+childId);
            changeMenuFontWeight(document.getElementById(childId).parentNode.previousSibling.id);
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

        if(childId != "reservation") {
            navigate(link);
        }
    }

    const handleMenuOpenClick = (e, menuId, forceFlag, toAll) => {

        // 메인에서 토글 선택
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

        if(isMobile) {
            if(id === "ABOUT" || toAll) {
                setShowAboutChild(forceFlag != null ? forceFlag : !showAboutChild);
            }else if(id === "ROOM" || toAll) {
                setShowRoomChild(forceFlag != null ? forceFlag : !showRoomChild);
            }else if(id === "AROUND" || toAll) {
                setShowAroundChild(forceFlag != null ? forceFlag : !showAroundChild);
            }else if(id === "RESERVATION" || toAll) {
                setShowReservationChild(forceFlag != null ? forceFlag : !showReservationChild);
            }else if(id === "COMMUNITY" || toAll) {
                setShowCommunityChild(forceFlag != null ? forceFlag : !showCommunityChild);
            }
        }
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
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = isToggled ? "hidden" : "unset";
        if(isToggled) {
            // 토글 열릴때 오픈메뉴 셋팅
          let parentId = "";
          if(location.pathname == "/") {
              handleMenuOpenClick(null, null, true);
          }else {
              if(openedMenu != undefined) {
                  parentId = openedMenu.split("-")[0];
              }else {
                  // 메인 박스 아이콘 선택으로 들어왔을 경우 path보고 판단
                  parentId = location.pathname.split("/")[location.pathname.split("/").length-1];
                  setOpenedMenu(parentId+"-"+location.pathname.split("/")[location.pathname.split("/").length-2]);
              }
              handleMenuOpenClick(null, parentId, true);
          }
        }else {
          if(location.pathname == "/") {
            setOpenedMenu();
            handleMenuOpenClick(null, null, false, true);
          }
        }
    }, [isToggled]);


    useEffect(() => {
        if(isMobile) {
            // 오픈메뉴 셋팅되면 색깔 채우기
            if(openedMenu != undefined) {
                if(showAboutChild || showRoomChild || showAroundChild || showReservationChild || showCommunityChild)
                    document.getElementById(openedMenu.split("-")[1]).classList.add("selected");
            }
        }
    }, [showAboutChild, showRoomChild, showAroundChild, showReservationChild, showCommunityChild]);

    useEffect(() => {
        if(!isMobile) {
            if(mouseLeaveMenu && mouseLeaveSubMenu && showSubMenu) {
                setShowSubMenu(false);
                document.getElementById("submenu_background").style.height = "0px";
            }else if(!mouseLeaveMenu && !showSubMenu) {
                setTimeout(function () {
                    setShowSubMenu(true);
                },200)
                document.getElementById("submenu_background").style.height = "230px";
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
                {isMobile && location.pathname != "/" &&
                <div className="name">
                    <span onClick={(e)=>{
                        const parentId = openedMenu ? openedMenu.split("-")[0] : null;
                        //열려있던 sub_ul 닫고 이동
                        handleMenuOpenClick(null, parentId, false);
                        setOpenedMenu();
                        navigate("/");
                    }}>JayeonNuri
                    </span>
                </div>}

                <div className="menuwrap">
                    <div className="toggle_x" onClick={() => { setIsToggled(!isToggled); }}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <div className="logo" onClick={(e)=>{ window.location.reload(); }}>
                        <TbLeaf/>
                    </div>
                    <nav id="menu" onMouseEnter={() => setMouseLeaveMenu(false)} onMouseLeave={() => setMouseLeaveMenu(true)}>
                        <ul className="header__menulist">
                            <li>
                                <div id="ABOUT" onClick={handleMenuOpenClick}>
                                    ABOUT
                                    {isMobile && <span className="btn_toggle">
                                        {!showAboutChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showAboutChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showAboutChild) &&
                                <ul id="about_child_ul" className="inner_ul">
                                    <li id="introduce"><div onClick={(e)=>handleLinkMove(e, "/introduce/ABOUT")}>자연누리 소개</div></li>
                                    <li id="way_to_come"><div onClick={(e)=>handleLinkMove(e, "/way_to_come/ABOUT")}>오시는 길</div></li>
                                </ul>}
                            </li>
                            <li>
                                <div id="ROOM" onClick={handleMenuOpenClick}>
                                    ROOM
                                    {isMobile && <span className="btn_toggle">
                                        {!showRoomChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showRoomChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showRoomChild) &&
                                <ul id="room_child_ul" className="inner_ul">
                                    <li id="room1"><div onClick={(e)=>handleLinkMove(e, "/room1/ROOM")}>객실 1,2,3호</div></li>
                                    <li id="room5"><div onClick={(e)=>handleLinkMove(e, "/room5/ROOM")}>객실 5,6호</div></li>
                                    <li id="caravan1"><div onClick={(e)=>handleLinkMove(e, "/caravan1/ROOM")}>카라반 1호</div></li>
                                    <li id="caravan2"><div onClick={(e)=>handleLinkMove(e, "/caravan2/ROOM")}>카라반 2호</div></li>
                                    <li id="caravan3"><div onClick={(e)=>handleLinkMove(e, "/caravan3/ROOM")}>카라반 3호</div></li>
                                    <li id="caravan4"><div onClick={(e)=>handleLinkMove(e, "/caravan4/ROOM")}>카라반 4호</div></li>
                                </ul>}
                            </li>
                            <li>
                                <div id="AROUND" onClick={handleMenuOpenClick}>
                                    AROUND
                                    {isMobile && <span className="btn_toggle">
                                        {!showAroundChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showAroundChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showAroundChild) &&
                                <ul className="inner_ul" style={{ariaExpanded:"true"}}>
                                    <li id="around"><div onClick={(e)=>handleLinkMove(e, "/around/AROUND")}>주변 여행지</div></li>
                                    <li id="mountain"><div onClick={(e)=>handleLinkMove(e, "/mountain/AROUND")}>소백산 등산로</div></li>
                                </ul>}
                            </li>
                            <li>
                                <div id="RESERVATION" onClick={handleMenuOpenClick}>
                                    RESERVATION
                                    {isMobile && <span className="btn_toggle">
                                        {!showReservationChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showReservationChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showReservationChild) &&
                                <ul className="inner_ul" style={{ariaExpanded:"true"}}>
                                    <li id="reservation"><div onClick={(e)=>handleLinkMove(e, "/reservation")}>실시간 예약</div></li>
                                    <li id="terms_of_use"><div onClick={(e)=>handleLinkMove(e, "/terms_of_use/RESERVATION")}>이용수칙</div></li>
                                    <li id="use_price"><div onClick={(e)=>handleLinkMove(e, "/use_price/RESERVATION")}>이용가격</div></li>
                                </ul>}
                            </li>
                            <li>
                                <div id="COMMUNITY" onClick={handleMenuOpenClick}>
                                    COMMUNITY
                                    {isMobile && <span className="btn_toggle">
                                        {!showCommunityChild && <VscChevronDown onClick={(e)=>e.preventDefault()}/>}
                                        {showCommunityChild && <VscChevronUp/>}
                                    </span>}
                                </div>
                                {(showSubMenu || showCommunityChild) &&
                                <ul className="inner_ul" style={{ariaExpanded:"true"}}>
                                    <li id="notice"><div onClick={(e)=>handleLinkMove(e, "/notice/COMMUNITY")}>공지사항</div></li>
                                    <li id="reviews"><div onClick={(e)=>handleLinkMove(e, "/reviews/COMMUNITY")}>이용후기</div></li>
                                </ul>}
                            </li>
                         </ul>
                    </nav>

                </div>

            </HeaderStyle>
    );
}

export default Header;
