export function formatToThousand(number) {
  // Check if the input is a valid number
  if (isNaN(number)) {
    return "Invalid number";
  }

  // Convert the number to a string
  const numStr = number.toString();

  // Split the number into integer and decimal parts (if any)
  const parts = numStr.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  // Format the integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine the integer and decimal parts
  const formattedNumber =
    decimalPart.length > 0
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;

  return formattedNumber;
}
