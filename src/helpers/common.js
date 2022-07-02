const info = {};

export function _commonGetCommonInfo(key) {
    return info.hasOwnProperty(key) ? info[key] : localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
}
export function _commonSetCommonInfo(key, value) {
    info[key] = value;
    localStorage.setItem(key, JSON.stringify(value));
}
export function _commonTimestampToDate(timestamp) {
    let date = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp);
    // let date = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit'}).format(timestamp);
    return timestamp != "" ? date.slice(0,date.length-1) : "-";
}
export function _commonGetToday() {
    const date = new Date();
    const today = date.getFullYear()+""+("0" + (date.getMonth() + 1)).slice(-2)+""+("0" + date.getDate()).slice(-2);
    return today;
}