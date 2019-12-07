let time = new Date()
let minutes = seconds = 0;
minutes = 59 - time.getMinutes()
seconds = 59 - time.getSeconds()
let id0 =setInterval(seckill,1000)

function seckill() {
    seconds--
    if(seconds == -1){
        seconds = 59
        minutes--
    } 
    // else {
    //     clearInterval(id0);//秒杀过期，取消定时器
    //     minutes = scounds = '00';
    // }
    if(minutes == -1){
        minutes = 59
    } 
    // else {
    //     clearInterval(id0);//秒杀过期，取消定时器
    //     minutes = seconds = '00';
    // }
    document.getElementById('minutes').innerHTML = minutes +'分'
    document.getElementById('seconds').innerHTML = seconds +'秒'
}
    
  
