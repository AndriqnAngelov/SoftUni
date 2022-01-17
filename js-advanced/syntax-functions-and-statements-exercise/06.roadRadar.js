function solved(currentSpeed, area) {
  let speegLimit = 0;
  let difference = 0;
  let status = "";
  if (area == "motorway") {
    speedLimit = 130;
    difference = currentSpeed - speedLimit;
    if (difference > 0 && difference <= 20) {
      status = "speeding";
    } else if (difference > 20 && difference <= 40) {
      status = "excessive speeding";
    } else if (difference > 40) {
      status = "reckless driving";
    }
    if (difference > 0) {
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    }
  } else if (area == "interstate") {
    speedLimit = 90;
    difference = currentSpeed - speedLimit;
    if (difference > 0 && difference <= 20) {
      status = "speeding";
    } else if (difference > 20 && difference <= 40) {
      status = "excessive speeding";
    } else if (difference > 40) {
      status = "reckless driving";
    }
    if (difference > 0) {
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    }
  } else if (area == "city") {
    speedLimit = 50;
    difference = currentSpeed - speedLimit;
    if (difference > 0 && difference <= 20) {
      status = "speeding";
    } else if (difference > 20 && difference <= 40) {
      status = "excessive speeding";
    } else if (difference > 40) {
      status = "reckless driving";
    }
    if (difference > 0) {
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    }
  } else if (area == "residential") {
    speedLimit = 20;
    difference = currentSpeed - speedLimit;
    if (difference > 0 && difference <= 20) {
      status = "speeding";
    } else if (difference > 20 && difference <= 40) {
      status = "excessive speeding";
    } else if (difference > 40) {
      status = "reckless driving";
    }
    if (difference > 0) {
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    }
  }
}

