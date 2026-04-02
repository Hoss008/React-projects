export const Chatbot = {
  getResponse: (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes("date") || message.includes("today")) {
      return "Today is March 16, 2026";
    }

    if (message.includes("weather")) {
      return "The weather is sunny and 72°F";
    }

    if (message.includes("time")) {
      const time = new Date().toLocaleTimeString();
      return `The current time is ${time}`;
    }

    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! How can I help you today?";
    }

    if (message.includes("how are you")) {
      return "I am doing great! Thank you for asking.";
    }

    if (message.includes("name")) {
      return "I am a Chatbot created with React and Vite";
    }

    if (message.includes("help")) {
      return "I can help you with questions about date, time, weather, or general conversation. What would you like to know?";
    }

    // Default response
    return "That's interesting! Tell me more.";
  },
};
