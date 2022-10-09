class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  };

  addClock(time, action, id) {
    if (id == null) {
      throw new Error("Невозможно идентифицировать будильник. Параметр id не передан");
    };

    let foundItems = this.alarmCollection.find(item => item.id === id);

    if (foundItems) {//foundItems != undefined
      console.error("Будильник с таким id уже существует");
      return;
    };

    this.alarmCollection.push({ id, time, action });
  };

  removeClock(id) {
    const addLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    return addLength !== this.alarmCollection;
  };

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  checkClock(alarm) {
    if (this.getCurrentFormattedTime() == alarm.time) {
      alarm.action();
    };
  };

  start() {
    const checkAllClocks = () => {
      this.alarmCollection.forEach(item => {
        this.checkClock(item);
      });
    };

    if (this.timerId == null) {
      this.timerId = setInterval(checkAllClocks, 1000);
    };
  };

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    };
  };

  printAlarms() {
    this.alarmCollection.forEach(item => {
      console.log(item.id + item.time);
    });
  };

  clearAlarms() {
    this.stop();
    this.alarmCollection.length = [];
  };
};


function testCase() {

  let alarmClock = new AlarmClock();

  alarmClock.addClock("20:04", () => { console.log("Доброе утро!") }, 1);


  alarmClock.addClock("20:05", () => { console.log("Доброе утро снова!"); alarmClock.removeClock(2) }, 2);

  alarmClock.addClock("20:06", () => { console.log("Доброе утро опять!"); alarmClock.stop(); alarmClock.clearAlarms() }, 3);

  alarmClock.printAlarms();

  alarmClock.start();
}

testCase();
