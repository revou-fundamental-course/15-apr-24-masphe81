function convert() {
  let celsius = parseFloat(document.getElementById("celsius").value);
  let fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

function reverse() {
  let celsius = parseFloat(document.getElementById("celsius").value);
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

  if (!isNaN(celsius)) {
    let newFahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").value = newFahrenheit.toFixed(2);
  } else if (!isNaN(fahrenheit)) {
    let newCelsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("celsius").value = newCelsius.toFixed(2);
  }
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
}
