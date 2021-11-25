setInterval(setClock , 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock()
{
    const currentdate = new Date()
    const secondsratio = currentdate.getSeconds()/60
    const minutesratio = ( secondsratio + currentdate.getMinutes())/60
    const hoursratio = ( minutesratio +currentdate.getHours())/12
    setRotation(secondHand , secondsratio)
    setRotation(minuteHand , minutesratio)
    setRotation(hourHand , hoursratio)

}

function setRotation(element , rotationRatio)
{
    element.style.setProperty('--rotation' , rotationRatio * 360)
}

setClock()