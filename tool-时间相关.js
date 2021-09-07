/**
 * 获取一个时间段的数组
 * @param {String} start
 * @param {String} end
 */
export function getTimeArr(start, end) {
    let t1 = new Date(start).getTime();
    let t2 = new Date(end).getTime();
    let timeArr = [];
    for (let i = t1; i <= t2; i += 24 * 60 * 60 * 1000) {
        timeArr.push(i);
    }
    let arr = [];
    for (let i = 0; i < timeArr.length; i++) {
        let time = new Date(timeArr[i]);
        let year = time.getFullYear(time);
        let mouth = (time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : ('0' + (time.getMonth() + 1));
        let day = time.getDate() >= 10 ? time.getDate() : ('0' + time.getDate());
        let YYMMDD = year + '-' + mouth + '-' + day;
        arr.push({
            date: YYMMDD
        })
    }
    return arr
}
// getTimeArr('2020-01-01', '2021-01-01')