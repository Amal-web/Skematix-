function difference(firstDate, secondDate) {
  const d1 = new Date(firstDate);

  const d2 = new Date(secondDate);

  let differenceInMonths;

  let yearDifference = Math.abs((d1.getFullYear() - d2.getFullYear()) * 12);
  differenceInMonths = yearDifference - d2.getMonth();
  differenceInMonths = differenceInMonths + d1.getMonth();

  const differenceInDays = Math.abs(d2.getDate() - d1.getDate());

  const differenceInDates = differenceInMonths * 30 + differenceInDays;

  return differenceInDates;
}

console.log(difference("2022-04-03", "2021-12-01"));
