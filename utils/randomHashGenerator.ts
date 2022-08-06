export function generateRandomHash(numberOfLetters: number): string {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < numberOfLetters; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}