/*

템플릿 리터럴과 Date를 이용한 지연 로직

*/
let start_time = Date.now();
while(Date.now()-start_time<3000){
    let curr_time = Date.now();
    console.log(`akk from ${start_time}`);
    while(Date.now() - curr_time < 1000){
        // sleep
    }
}

/*

Delay 함수

*/
function fw_delay(milliseconds){
    let current_time = Date.now();
    while(Date.now() - current_time < milliseconds){
        // sleep
    }
}

/*

이중 array

*/

let arr = [[1,2],[3,4,5]];
console.log(arr[1][2]);