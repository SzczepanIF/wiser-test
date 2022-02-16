export function zeroPad(num: number, places: number) {
  return num.toString().padStart(places, "0");
}
