const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

function setDate(){
    const now = new Date();

    const getseconds = now.getSeconds();
    const getminutes = now.getMinutes();
    const gethours = now.getHours();

    const secdegree = (getseconds/60)*360;
    const mindegree = (getminutes/60)*360;
    const hourdegree = (gethours/60)*360;

    second.style.transform = `rotate(${secdegree}deg)`
    minute.style.transform = `rotate(${mindegree}deg)`
    hour.style.transform = `rotate(${hourdegree}deg)`
}
setInterval(setDate,1000);
setDate();