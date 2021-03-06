import React, {useEffect, useState} from 'react';
import {_commonGetCommonInfo, _commonTimestampToDate} from "../helpers/common";
import "../css/board.css";

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
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjY5/MDAxNjU2ODM5NjUxNjA3.4mOxop3SbpnaVdQezanvynyvT-u4Z5iJ5WjgiXzExwMg.zy8YBUORf8G0KLPVuTgI45YXOLxtMy-TEvKXjVOgWPkg.JPEG.bse14/flower3.jpg?type=w966" />
            </div>

            <div id="board_wrap">
                <div className="add_wrap">
                    {selectedData &&
                    <div id="board_detail">
                        {/*<p className="menu_title">공지사항 상세보기</p>*/}
                        <table>
                            <thead>
                            <tr>
                                <th className="detail_title">{selectedData.title}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="detail_author">{selectedData.author}
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
