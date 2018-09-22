const POMODORO_STATES = {
 WORK: 'work',
 REST: 'rest'
};
const WORKING_TIME_LENGTH_IN_MINUTES = 25;
const RESTING_TIME_LENGTH_IN_MINUTES = 5;
new Vue({
 el: '#app',
 data: {
 minute: WORKING_TIME_LENGTH_IN_MINUTES,
 second: 0,
 pomodoroState: POMODORO_STATES.WORK,
 timestamp: 0
 },
 methods: {
 start: function () {
 this._tick();
 this.interval = setInterval(this._tick, 1000);
 },
 _tick: function () {
 //if second is not 0, just decrement second
 if (this.second !== 0) {
 this.second--;
 return;
 }
 //if second is 0 and minute is not 0,
 //decrement minute and set second to 59
 if (this.minute !== 0) {
 this.minute--;
 this.second = 59;
 return;
 }
 //if second is 0 and minute is 0,
 //toggle working/resting intervals
 this.pomodoroState = this.pomodoroState ===
 POMODORO_STATES.WORK ? POMODORO_STATES.REST :
 POMODORO_STATES.WORK;
 
 if (this.pomodoroState === POMODORO_STATES.WORK) {
 this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
 } else {
 this.minute = RESTING_TIME_LENGTH_IN_MINUTES;
 }
 }
 }
});