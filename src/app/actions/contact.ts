"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const automation = formData.get("automation") as string;

  if (!name || !company || !email || !phone || !automation) {
    return { success: false, error: "All fields are required." };
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Missing Telegram environment variables.");
    return { success: false, error: "Server configuration error. Please try again later." };
  }

  const message = `New Aliende Lead

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Automation request: ${automation}
Source: Landing page
Time: ${new Date().toISOString()}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (!response.ok) {
      console.error("Telegram API Error:", await response.text());
      return { success: false, error: "Failed to deliver message. Please try again." };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send message to Telegram", error);
    return { success: false, error: "Network error occurred. Please try again." };
  }
}
