import { database, database_ref, database_set, database_update, database_query, database_limit_to_last,
          database_on_child_added, database_on_child_changed, database_on_value } from "../services/firebase";
import { _commonGetToday, _commonGetCommonInfo, _commonSetCommonInfo } from "./common"

export function _databaseGetNotice(callback) {
    const noticeRef = database_ref(database, "notice");
    database_on_child_added(noticeRef, (snapshot) => {
        callback(snapshot.val());
    });
}

export function _databaseGetReview(callback) {
    const reviewRef = database_query(database_ref(database, 'review'));
    database_on_child_added(reviewRef, (snapshot) => {
        callback(snapshot.val());
    });
}

export function _databaseRegistNotice(notice) {
    return database_set(database_ref(database, "notice/"+_commonGetToday()), {
        date: Date.now()
    });
}

export function _databaseUpdateNotice(notice) {
    return database_update(database_ref(database, "notice/"+notice), {
        date: Date.now()
    });
}

export function _databaseRegistReview(review) {
    return database_set(database_ref(database, "review/"+_commonGetToday()), {
        date: Date.now()
    });
}

export function _databaseUpdateReview(review) {
    return database_update(database_ref(database, "review/"+review), {
        date: Date.now()
    });
}