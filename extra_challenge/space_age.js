function spaceAge(seconds, planet) {
  if (
    (isNaN(seconds) && planet === "Mercury") ||
    planet === "Venus" ||
    planet === "Earth" ||
    planet === "Mars" ||
    planet === "Jupiter"
  ) {
    switch (planet) {
      case "Mercury":
        return (seconds * 0.2408467) / 31557600;
      case "Venus":
        return (seconds * 0.61519726) / 31557600;
      case "Earth":
        return seconds / 31557600;
      case "Mars":
        return (seconds * 1.8808158) / 31557600;
      case "Jupiter":
        return (seconds * 11.862615) / 31557600;
    }
  } else {
    console.log("Enter first the time in seconds and second the planet.");
  }
}

console.log(spaceAge(365.25 * 24 * 60 * 60, "Earth"));

console.log(spaceAge(365.25 * 24 * 60 * 60 * 35, "Mars"));

console.log(spaceAge(365.25 * 24 * 60 * 60 * 100, "Venus"));

console.log(spaceAge(365.25 * 24 * 60 * 60 * 18, "Jupiter"));
