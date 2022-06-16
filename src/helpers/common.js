const info = {};

export function _commonGetCommonInfo(key) {
    return info[key];
}
export function _commonSetCommonInfo(key, value) {
    info[key] = value;
}
export function _commonTimestampToDate(timestamp) {
    //let date = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);
    let date = new Intl.DateTimeFormat('ko-KR', {  hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(timestamp);
    return date;
}
export function _commonGetToday() {
    const date = new Date();
    const today = date.getFullYear()+""+("0" + (date.getMonth() + 1)).slice(-2)+""+("0" + date.getDate()).slice(-2);
    return today;
}