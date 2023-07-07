function toHours(seconds){
    var hours = Math.floor(seconds/3600);
    var remainder = seconds % 3600;

    return {hours: hours, remainder: remainder}
}

function toMinutes(seconds){
    var minutes = Math.floor(seconds/60);
    var remainder = seconds % 60;

    return {minutes: minutes, remainder: remainder}
}

function humanDuration(duration) {
    var hoursObject = toHours(duration);
    var minutesObject = toMinutes(hoursObject.remainder);
    var seconds = minutesObject.remainder;
  
    return console.log(`The formatted duration of ${duration} is ${hoursObject.hours} ${hoursObject.hours > 1? "hours" : "hour"}, ${minutesObject.minutes} ${minutesObject.minutes > 1? "minutes" : "minute"} and ${seconds} ${seconds > 1? "seconds" : "second"}.`);
}

humanDuration(4800);

humanDuration(5212);

humanDuration(300);
