import React, {useEffect, useState} from 'react';

let priceJson = null;
let priceCaravnJson = null;
let imageJson = null;
let etcInfoJson = null;

export function getPriceJson() {
    return priceJson;
}
export function getPriceCaravanJson() {
    return priceCaravnJson;
}
export function getImageJson() {
    return imageJson;
}
export function getEtcInfoJson() {
    return etcInfoJson;
}

export async function getJsonData(callback) {
    const result = [false, false, false];
    try {
        await fetch("/data/prices.json")
            .then((res) => res.json())
            .then((data) => {
                priceJson = data;
                result[0] = true;
                if(result[0] && result[1] && result[2]) callback(true);
            });
        await fetch("/data/prices_caravan.json")
            .then((res) => res.json())
            .then((data) => {
                priceCaravnJson = data;
            });
        await fetch("/data/room_detail_images.json")
            .then((res) => res.json())
            .then((data) => {
                imageJson = data;
                result[1] = true;
                if(result[0] && result[1] && result[2]) callback(true);
            });
        await fetch("/data/etc_info.json")
            .then((res) => res.json())
            .then((data) => {
                etcInfoJson = data;
                result[2] = true;
                if(result[0] && result[1] && result[2]) callback(true);
            });
    } catch (e) {
        alert("새로고침 해주세요.")
    }
}
