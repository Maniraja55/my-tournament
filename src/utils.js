export function getCamelCaseWord(str) {
  if (!str) return;
  return str[0].toUpperCase() + str.slice(1);
}

export function getCamelCaseText(text) {
  if (!text) return;
  return text.split(" ").map(getCamelCaseWord).join(" ");
}
