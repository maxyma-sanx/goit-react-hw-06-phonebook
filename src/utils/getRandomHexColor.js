export default function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`.padEnd(7, '0');
}
