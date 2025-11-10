import { pusherServer } from "../../lib/pusher";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { from, to, message } = req.body;
  const room = [from, to].sort().join("-");
  await pusherServer.trigger(room, "chat", { from, message, timestamp: Date.now() });
  res.json({ success: true });
}