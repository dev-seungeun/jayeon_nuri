import React, {useEffect, useState} from 'react';
// import "../css/room.css";
// import 'bootstrap/dist/css/bootstrap.css';

function RoomPriceTable(priceDataList) {

    const [priceRow, setPriceRow] = useState();

    useEffect(()=>{

        const price = priceDataList.map((priceData, index) => {
            return (
                <tr key={"price_data_"+index}>
                    {priceDataList.length > 1 && <td>{priceData.title}</td>}
                    {priceDataList.length > 1 && <td>{priceData.people}</td>}
                    <td>{priceData.off_season.weekday.toLocaleString()}</td>
                    <td>{priceData.off_season.weekend.toLocaleString()}</td>
                    <td>{priceData.peak_season.weekday.toLocaleString()}</td>
                    <td>{priceData.peak_season.weekend.toLocaleString()}</td>
                    <td>{priceData.high_peak_season.toLocaleString()}</td>
                    <td>{(10000).toLocaleString()}</td>
                </tr>
            )
        });
        setPriceRow(price);

        return () => {
        }
    },[])

    return (
        <>
            <div className="add_wrap">
                {priceDataList.length == 1 && <div className="price_title">가격정보</div>}
                {priceDataList.length > 1 && <div className="price_title">이용가격</div>}
                <div id="room_price">
                    <table cellSpacing="1" cellPadding="8">
                        <tbody>
                        <tr>
                            {priceDataList.length > 1 && <th rowSpan="2">객실명</th>}
                            {priceDataList.length > 1 && <th rowSpan="2">인원</th>}
                            <th colSpan="2">비수기</th>
                            <th colSpan="2">성수기</th>
                            <th colSpan="1">극성수기</th>
                            <th rowSpan="2">인당 추가요금<br/>(4세 이상)</th>
                        </tr>
                        <tr>
                            <th className="room_bold">주중</th>
                            <th className="room_bold">주말(금,토)</th>
                            <th className="room_bold">주중</th>
                            <th className="room_bold">주말(금,토)</th>
                            <th className="room_bold">주중/주말</th>
                        </tr>
                        {priceRow}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default RoomPriceTable;