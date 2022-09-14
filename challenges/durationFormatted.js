const formatTime = (time, label, pluralLabel) =>
  time === 0 ? "" : `${time} ${time <= 1 ? `${label}` : `${pluralLabel}`}`;

const displayAnd = (time) => (time > 0 ? "and" : "");

const durationFormatted = (duration) => {
  let hours, minutes, seconds;
  let result, hourOutput, minuteOutput, secondOutput;

  if (duration < 60) result = `${formatTime(duration, "second", "seconds")}`;
  else if (duration >= 60 && duration < 3600) {
    minutes = Math.floor(duration / 60);
    seconds = duration % 60;

    minuteOutput = formatTime(minutes, "minute", "minutes");
    secondOutput = formatTime(seconds, "second", "seconds");

    result = `${minuteOutput} ${displayAnd(seconds)} ${secondOutput}`;
  } else {
    hours = Math.floor(duration / 3600);
    minutes = Math.floor((duration % 3600) / 60);
    seconds = duration % 60;

    hourOutput = formatTime(hours, "hour", "hours");
    minuteOutput = formatTime(minutes, "minute", "minutes");
    secondOutput = formatTime(seconds, "second", "seconds");

    result = `${hourOutput} ${displayAnd(minutes)} ${minuteOutput} ${displayAnd(
      seconds
    )} ${secondOutput}`;
  }

  return result;
};

console.log(durationFormatted(59));
