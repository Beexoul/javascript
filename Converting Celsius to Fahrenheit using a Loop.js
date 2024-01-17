// Converting Celsius to Fahrenheit using a Loop

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function printConversionTable() {
  console.log("Celsius\tFahrenheit");

  for (let celsius = 0; celsius <= 100; celsius += 10) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    console.log(`${celsius}\t${fahrenheit}`);
  }
}

// Call the function to print the conversion table
printConversionTable();
