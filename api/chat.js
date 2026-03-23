export default async function handler(req, res) {
  const { message } = req.body;

  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: "Answer in Hinglish like a smart tech assistant.\nUser: " + message
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Kuch problem aa gayi";

    res.status(200).json({ reply });

  } catch (error) {
    res.status(500).json({ reply: "Server error" });
  }
}
