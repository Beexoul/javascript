// Converting Celsius to Fahrenheit using a Loop


function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

for (let celsius = 0; celsius <= 100; celsius += 10) {
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C = ${fahrenheit}°F`);
}
