import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { FaLeaf } from "react-icons/fa";
import { GiFallingLeaf, GiChestnutLeaf } from "react-icons/gi";
import { IoLeafOutline, IoLeafSharp, IoLeaf } from "react-icons/io5";
import { TbLeaf } from "react-icons/tb";

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
        if(document.getElementById(childId) != undefined) {
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

        navigate(link);
    }

    const handleMenuOpenClick = (e, menuId, flag) => {

        let id =  menuId ? menuId : e.target.id;

        if(e != null) {
            if(e.target.nodeName === "svg") {
                id = e.target.parentNode.parentNode.id;
            }else if(e.target.nodeName === "path") {
                id = e.target.parentNode.parentNode.parentNode.id;
            }
        }

        if(isMobile) {
            if(id === "ABOUT") {
                setShowAboutChild(flag ? flag : !showAboutChild);
            }else if(id === "ROOM") {
                setShowRoomChild(flag ? flag : !showRoomChild);
            }else if(id === "AROUND") {
                setShowAroundChild(flag ? flag : !showAroundChild);
            }else if(id === "RESERVATION") {
                setShowReservationChild(flag ? flag : !showReservationChild);
            }else if(id === "COMMUNITY") {
                setShowCommunityChild(flag ? flag : !showCommunityChild);
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
            if(openedMenu != undefined) {
                const parentId = openedMenu.split("-")[0];
                handleMenuOpenClick(null, parentId, true);
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
                setShowSubMenu(true);
                document.getElementById("submenu_background").style.height = "180px";
            }
        }
    }, [mouseLeaveMenu, mouseLeaveSubMenu]);

    return (
            <HeaderStyle id="header" isToggled={isToggled} showSubMenu={showSubMenu} showAboutChild={showAboutChild}>
                { !isMobile && <div id="submenu_background" onMouseOver={() => setMouseLeaveSubMenu(false)} onMouseOut={() => setMouseLeaveSubMenu(true)}></div>    }
                { isToggled && <div id="dimmed" onClick={clickDimmed}></div> }

                <div className="toggle" onClick={() => { setIsToggled(!isToggled); }}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>

                <div className="menuwrap">
                    <div className="logo">
                        <Link to="/"><TbLeaf/></Link>
                        {/*FaLeaf, GiFallingLeaf, GiChestnutLeaf, loLeafOutline, IoLeafSharp, IoLeaf, TbLeaf */}
                    </div>
                    <div className="toggle_x" onClick={() => { setIsToggled(!isToggled); }}>
                        <FontAwesomeIcon icon={faTimes}/>
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
                                    <li id="introduce"><div onClick={(e)=>handleLinkMove(e, "/introduce")}>자연누리 소개</div></li>
                                    <li id="way_to_come"><div onClick={(e)=>handleLinkMove(e, "/way_to_come")}>오시는 길</div></li>
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
                                    <li id="room1"><div onClick={(e)=>handleLinkMove(e, "/room1")}>객실 1,2,3호</div></li>
                                    <li id="room5"><div onClick={(e)=>handleLinkMove(e, "/room5")}>객실 5,6호</div></li>
                                    <li id="caravan1"><div onClick={(e)=>handleLinkMove(e, "/caravan1")}>카라반 1호</div></li>
                                    <li id="caravan2"><div onClick={(e)=>handleLinkMove(e, "/caravan2")}>카라반 2호</div></li>
                                    <li id="caravan3"><div onClick={(e)=>handleLinkMove(e, "/caravan3")}>카라반 3호</div></li>
                                    <li id="caravan4"><div onClick={(e)=>handleLinkMove(e, "/caravan4")}>카라반 4호</div></li>
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
                                    <li id="around"><div onClick={(e)=>handleLinkMove(e, "/around")}>주변 여행지</div></li>
                                    <li id="mountain"><div onClick={(e)=>handleLinkMove(e, "/mountain")}>소백산 등산로</div></li>
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
                                    <li id="terms_of_use"><div onClick={(e)=>handleLinkMove(e, "/terms_of_use")}>이용수칙</div></li>
                                    <li id="use_price"><div onClick={(e)=>handleLinkMove(e, "/use_price")}>이용가격</div></li>
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
                                    <li id="notice"><div onClick={(e)=>handleLinkMove(e, "/notice")}>공지사항</div></li>
                                    <li id="reviews"><div onClick={(e)=>handleLinkMove(e, "/reviews")}>이용후기</div></li>
                                </ul>}
                            </li>
                         </ul>
                    </nav>

                </div>

            </HeaderStyle>
    );
}

export default Header;