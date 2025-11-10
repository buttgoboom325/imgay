export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const name = req.body.name?.trim();
  if (!name) return res.status(400).json({ error: "Name required" });
  const friendCode = Math.floor(10000000 + Math.random() * 90000000).toString();
  // In real use, save these in DB
  res.json({ name, friendCode });
}
