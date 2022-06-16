import React from 'react';
import { Link } from 'react-router-dom';


const test = {
    zIndex: 999,
    position: "fixed",
    top: "0px",
    marginLeft: "0px",
    height: "70px",
    width: "733px",
    left: "0px",
    borderWidth: "0 0 1px",
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderStyle: "solid"
}
const menu = {
    "border-width": "0 0 1px",
    "border-color": "rgba(255, 255, 255, 0.3)",
    "border-style": "solid"
}

function Header(props) {
    return (
        <>
            <div id="inline_header_mobile" style={{minHeight: "30px", height: "auto"}} className="tansparent_bg first_scroll_fixed">
                <div data-type="section-wrap"
                     className="inline-section-wrap fixed_transform _fixed_header_section scroll-to-fixed-fixed2"
                     id="s201804135ad016fe17a28"
                     style={test}>ee
                </div>
            </div>
        </>
    );
}

export default Header;