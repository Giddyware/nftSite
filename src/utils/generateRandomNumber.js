export function generateRandomNumber(min, max) {
  //   const min = 60;
  //   const max = 95;
  const millisecondsPerHour = 60 * 60 * 1000;

  // Get the current time in milliseconds
  const currentTime = new Date().getTime();

  // Generate a random number between min and max
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Calculate the expiry time by adding one hour to the current time
  const expiryTime = currentTime + millisecondsPerHour;

  // Check if the current time exceeds the expiry time
  if (currentTime > expiryTime) {
    // Regenerate a new random number
    return generateRandomNumber();
  }

  return randomNumber;
}
