function digitalClock() {

    let head = document.getElementById('time');
    let format = document.getElementById('format');
    let time = new Date();
    let timeformat = 'AM';
    //console.log(time);
    let hours = time.getHours();
    if (hours > 12) {
        hours = hours - 12
        timeformat = 'PM';
    }
    hours = hours < 10 ? '0' + hours : hours;
    let min = time.getMinutes();
    min = min < 10 ? '0' + min : min;
    let second = time.getSeconds();
    second = second < 10 ? '0' + second : second;
    
    //console.log(`${hours}:${min}:${second}`);
    let show = `${hours}:${min}:${second}`;
    head.innerText = show;
    format.innerText = timeformat;
    setInterval(digitalClock, 1000);
}
digitalClock();