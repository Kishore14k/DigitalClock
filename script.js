function displaytime(){
    let datetime=new Date()
    let h=datetime.getHours()
    let m=datetime.getMinutes()
    let s=datetime.getSeconds()
    if(h>12){
        h=h-12
        document.getElementById('ampm').innerHTML='PM'
    }
    document.getElementById('hrs').innerHTML=add0(h)
    document.getElementById('mins').innerHTML=add0(m)
    document.getElementById('secs').innerHTML=add0(s)
}
function add0(n){
    return n<10?"0"+n:n
}
setInterval(displaytime,1000)