export default async function handler(req, res) {
  // Handle non-POST requests
  if (req.method !== "POST") {
    return res.status(200).json({ message: "API is working 🚀" });
  }

  const { message } = req.body;

  // Validate message input
  if (!message || message.trim().length === 0) {
    return res.status(400).json({ 
      reply: "Please send a valid message 📝" 
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // Check if API key is configured
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not configured");
    return res.status(500).json({ 
      reply: "Server configuration error - API key missing ⚠️" 
    });
  }

  try {
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `You are a helpful tech assistant for OmniSphere website. Answer in Hinglish (mixture of Hindi and English). Be friendly, concise, and helpful. User question: ${message}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    };

    console.log("Sending request to Gemini API with message:", message);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    console.log("Gemini API response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      return res.status(500).json({ 
        reply: `API Error: ${errorData?.error?.message || "Service unavailable"} 🔄 Dubara try karo` 
      });
    }

    const data = await response.json();
    console.log("Gemini API response:", data);

    // Extract reply with better error handling
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, mujhe samajh nahi aaya 🤔 Dubara ask karo please";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Chat API error:", error.message);
    console.error("Full error:", error);
    return res.status(500).json({ 
      reply: `Error: ${error.message}` 
    });
  }
}