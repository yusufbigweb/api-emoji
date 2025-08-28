export default function handler(req, res) {
  const emojis = ["😀", "😂", "😍", "🔥"];
  res.status(200).json({ emojis });
}