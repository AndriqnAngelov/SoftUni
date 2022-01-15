function solved(steps, footprintInMeters, speedKm) {
  let distance = steps * footprintInMeters;
  let speed = (speedKm * 1000) / 3600;
  let rest = Math.floor(distance / 500) * 60;
  let time = distance / speed + rest;
  let hour = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");
  let min = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  let sec = Math.round(time % 60)
    .toString()
    .padStart(2, "0");
  console.log(`${hour}:${min}:${sec}`);
}
