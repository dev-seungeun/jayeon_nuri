import React, {useEffect, useState} from 'react';
import {_commonGetCommonInfo, _commonTimestampToDate} from "../helpers/common";
import "../css/notice.css";

function Notice(props) {

    const [selectedData, setSelectedData] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(()=> {

        setSelectedData(_commonGetCommonInfo("selected_notice"));
        setSelectedId(_commonGetCommonInfo("selected_notice_id"));

    },[])

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower3.jpg?alt=media&token=9315a1f7-a128-4887-b873-e1d69637682d" />
            </div>

            <div id="notice_wrap">
                <div className="add_wrap">
                    {selectedData &&
                    <div id="notice_detail">
                        <p className="menu_title">공지사항 상세보기</p>
                        <table>
                            <thead>
                            <tr>
                                <th className="detail_title">{selectedData.title}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="detail_child">{selectedData.author}
                                    <span>{_commonTimestampToDate(selectedData.time)}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail_content" colSpan="4" dangerouslySetInnerHTML={{__html: selectedData.content}}></td>
                            </tr>
                            </tbody>
                        </table>
                        <button className="submit-button list-button" onClick={(e)=>window.history.back()}>목록으로</button>
                    </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Notice;