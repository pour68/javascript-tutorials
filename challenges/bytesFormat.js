const bytesFormat = (volume) => {
  if (volume < 1024) {
    return `${volume} bytes`;
  } else if (volume >= 1024 && volume < 1024000) {
    return `${Math.round(volume / 1024)}Kb`;
  } else if (volume >= 1024000 && volume < 1024000000) {
    return `${Math.round(volume / 1024 / 1024)}Mb`;
  } else {
    return `${Math.round(volume / 1024 / 1024 / 1024)}Gb`;
  }
};

console.log(bytesFormat(1999000));
