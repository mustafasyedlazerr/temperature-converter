
function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}


function createMessage(fahrenheit, celsius) {
  let message = `The temperature is ${fahrenheit}°F (${celsius.toFixed(1)}°C). It feels `;
  if (celsius < 0) {
      message += "freezing cold.";
  } else if (celsius <= 10) {
      message += "very cold.";
  } else if (celsius <= 20) {
      message += "cold.";
  } else if (celsius <= 30) {
      message += "warm.";
  } else {
      message += "hot.";
  }
  return message;
}

let userFahrenheit = prompt("Please enter the temperature in Fahrenheit:", "32");


let fahrenheit = Number(userFahrenheit);


if (!isNaN(fahrenheit)) {
  let celsius = convertToCelsius(fahrenheit);
  let message = createMessage(fahrenheit, celsius);
  alert(message);
} else {
  alert("Please enter a valid number for the temperature.");
}
