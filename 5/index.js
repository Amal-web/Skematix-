const newSchedule = [
  { dayOfWeek: 5, fromHour: 12, toHour: 10 },
  { dayOfWeek: 1, fromHour: 7, toHour: 12 },
  { dayOfWeek: 1, fromHour: 5, toHour: 8 },
  { dayOfWeek: 1, fromHour: 9, toHour: 12 },
  { dayOfWeek: 4, fromHour: 7, toHour: 10 },
];

const previousSchedule = [
  {
    dayOfWeek: 1,

    fromHour: 7,

    toHour: 10,
  },

  {
    dayOfWeek: 2,

    fromHour: 9,

    toHour: 6,
  },
];
function schedule(sch) {
  for (let i = 0; i < previousSchedule.length; i++) {
    // console.log(previousSchedule[i].dayOfWeek);
    // console.log(sch.dayOfWeek);
    if (previousSchedule[i].dayOfWeek === sch.dayOfWeek) {
      return { message: "Schedule overlaps with existing record" };
    }
    if (sch.fromHour > sch.toHour) {
      return { message: "To hour should be after from hour" };
    }

    return { message: "valid" };
  }
}
newSchedule.forEach((el) => {
  console.log(schedule(el));
});

// TO CHECK THE CONDITION
// console.log(schedule({dayOfWeek:5,fromHour:12,toHour:10}))
// console.log(schedule({dayOfWeek:1,fromHour:7,toHour:12}))
// console.log(schedule({dayOfWeek:1,fromHour:5,toHour:8}))
// console.log(schedule({dayOfWeek:1,fromHour:9,toHour:11}))
// console.log(schedule({dayOfWeek:4,fromHour:7,toHour:10}))
