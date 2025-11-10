export default function handler(req, res) {
  const code = req.query.code;
  // In a real project, look up from DB
  res.json({ friendCode: code, name: "StubUser" });
}