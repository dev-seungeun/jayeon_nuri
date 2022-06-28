const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(36.911550, 128.516200),
        level: 1
    };
    const map = new kakao.maps.Map(container, options);
}
