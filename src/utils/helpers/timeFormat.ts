export default function secondsToMinutes(seg: string) {
  const segundos = parseInt(seg);
  const minutes = Math.floor(segundos / 60);
  const seconds = segundos % 60;
  return `${minutes}:${seconds}`;
}