import React, {useEffect, useState} from 'react';
import { _databaseGetNotice } from "../helpers/database";
import "../App.css";
import "../css/notice.css";
import {_commonSetCommonInfo, _commonTimestampToDate} from "../helpers/common";
import {useNavigate} from "react-router-dom";

function Notice(props) {

    let noticeListTemp = [];
    const navigate = useNavigate();
    const [noticeList, setNoticeList] = useState([]);

    useEffect(()=> {

        _databaseGetNotice(function (id, notice) {
            notice.key = id;
            noticeListTemp = [notice].concat(noticeListTemp);
            setNoticeList(noticeListTemp);
        });

        _commonSetCommonInfo("selected_notice_id", null);
        _commonSetCommonInfo("selected_notice", null);

    },[])

    return (
        <>
            <div className="top_img">
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjY5/MDAxNjU2ODM5NjUxNjA3.4mOxop3SbpnaVdQezanvynyvT-u4Z5iJ5WjgiXzExwMg.zy8YBUORf8G0KLPVuTgI45YXOLxtMy-TEvKXjVOgWPkg.JPEG.bse14/flower3.jpg?type=w966" />
            </div>

            <div id="notice_wrap">
                <div className="add_wrap">
                    <div id="notice_list">
                        <p className="menu_title">공지사항</p>
                        <table>
                            <thead>
                            <tr>
                                <th className="notice_title">제목</th>
                                <th className="notice_author">작성자</th>
                                <th>등록일</th>
                            </tr>
                            </thead>
                            {noticeList &&
                            <tbody>
                            {noticeList.map((data, index) => {
                                return <tr key={index}
                                           id={data.key}
                                           onClick={(e) => {
                                               _commonSetCommonInfo("selected_notice_id", data.key);
                                               _commonSetCommonInfo("selected_notice", data);
                                               navigate("/notice_steps/COMMUNITY?detail");
                                           }} >
                                    <td className="notice_title">{data.title}</td>
                                    <td>{data.author}</td>
                                    <td className="list_time">{_commonTimestampToDate(data.time)}</td>
                                </tr>
                            })}
                            </tbody>
                            }
                            {noticeList.length == 0 &&
                            <tbody>
                            <tr>
                                <td colSpan="3" style={{height:"200px"}}>공지사항이 없습니다.</td>
                            </tr>
                            </tbody>
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notice;