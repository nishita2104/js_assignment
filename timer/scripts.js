let countdown;
const timerdisplay=document.querySelector('.display__time-left')
const endtime=document.querySelector('.display__end-time');
const buttons=document.querySelectorAll('[data-time]');

function timer(seconds){
    const now=Date.now();
    const then= now+seconds*1000;
    clearInterval(countdown);
    displaytimeleft(seconds);
    displayendtime(then);
    countdown= setInterval(()=>{
        const secondsLeft=Math.round((then-Date.now())/1000);
        if(secondsLeft<0){
            clearInterval(countdown);
            return;
        }
        displaytimeleft(secondsLeft);
    },1000);
}
function displaytimeleft(seconds){
    const mins=Math.floor(seconds/60);
    const remsec=seconds%60;
    const display=`${mins}:${remsec<10 ? '0':''}${remsec}`;
    document.title=display;
    timerdisplay.textContent=display;
    //console.log(displaytimeleft);
}
function displayendtime(timestamp){
    const end=new Date(timestamp);
    const hours=end.getHours();
    const mins=end.getMinutes();
    endtime.textContent=`Be back at ${hours}:${mins < 10 ? '0':''}${mins}`;

}
function startTimer(){
    const seconds=parseInt(this.dataset.time);
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins=this.minutes.value;
    console.log(mins);
    timer(mins*60);
    this.reset();
});
