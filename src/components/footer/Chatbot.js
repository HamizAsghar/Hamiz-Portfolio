import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { FaTimes, FaPaperPlane, FaSpinner } from "react-icons/fa";

const responseMap = {
  hi: "Hi there! 👋 How can I help you today?",
  hello: "Hi there! 👋 How can I help you today?",
  greet: "I'm Fine ",
  services: "We offer Web Development, UI/UX Design, E-commerce Solutions, WordPress Development, SEO Optimization, and IT Services.",
  pricing   : "Pricing depends on the project. For a basic website, it starts from $100. Get a custom quote by sharing your needs!",
  cost: "Pricing depends on the project. Get a custom quote by sharing your needs!",
  charge: "Pricing depends on the project. Get a custom quote by sharing your needs!",
  contact: "You can contact us at hamizasghar@gmail.com or via WhatsApp at +923190218951",
  portfolio: "You can view our portfolio here: https://hamiz-portfolio.vercel.app/",
  help: "I'm here to assist you! Ask about services, prices, portfolio, or timelines.",
  support: "I'm here to assist you! Ask about services, prices, portfolio, or timelines.",
  timeline: "Most basic websites are delivered in 1–2 weeks. Complex apps may take 3–6 weeks.",
  duration: "Most basic websites are delivered in 1–2 weeks. Complex apps may take 3–6 weeks.",
};

const suggestedQuestions = [
  "💼 Services?",
  "💰 Pricing?",
  "📞 Contact info?",
  "🖼️ Portfolio?",
  "⏳ Project timeline?",
  "🆘 Need help?",
];

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      text: "Welcome! I'm here to answer questions about our services, pricing, portfolio, and more. Try a suggested question below or type your own!",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;

    const userInput = input.trim();
    setMessages((prev) => [...prev, { text: userInput, isUser: true }]);
    setInput("");
    setIsBotTyping(true);

    setTimeout(() => {
      const lower = userInput.toLowerCase().replace(/[^a-zA-Z ]/g, "");
      const botResponse = Object.keys(responseMap).find((key) => lower.includes(key))
        ? responseMap[Object.keys(responseMap).find((key) => lower.includes(key))]
        : "Sorry, I didn't understand that. Try asking about services, pricing, or support!";

      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
      setIsBotTyping(false);
    }, 500);
  }, [input]);

  const handleSuggestedQuestion = useCallback(
    (question) => {
      setInput(question);
      setTimeout(handleSend, 100);
    },
    [handleSend]
  );

  const clearChat = useCallback(() => {
    setMessages([
      {
        text: "Welcome! I'm here to answer questions about our services, pricing, portfolio, and more. Try a suggested question below or type your own!",
        isUser: false,
        // dsf
      },
    ]);
  }, []);

  const memoizedSuggestedQuestions = useMemo(
    () =>
      suggestedQuestions.map((q, i) => (
        <button
          key={i}
          onClick={() => handleSuggestedQuestion(q)}
          className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition-colors"
          aria-label={`Ask about ${q}`}
        >
          {q}
        </button>
      )),
    [handleSuggestedQuestion]
  );

  return (
    <div className="w-full max-w-md h-[28rem] bg-gray-800 text-white rounded-lg shadow-xl flex flex-col">
      <div className="flex justify-between items-center p-4 bg-designColor rounded-t-lg">
        <h3 className="text-lg font-bold">Quick Chat</h3>
        <div className="flex space-x-2">
          <button
            onClick={clearChat}
            className="text-sm bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
            aria-label="Clear chat"
          >
            Clear
          </button>
          <button onClick={onClose} aria-label="Close chatbot">
            <FaTimes size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block p-2 rounded-lg ${msg.isUser ? "bg-designColor" : "bg-gray-700"} max-w-[80%]`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {isBotTyping && (
          <div className="text-left mb-2">
            <span className="inline-block p-2 rounded-lg bg-gray-700">
              <FaSpinner className="animate-spin" />
            </span>
          </div>
        )}
        <div className="flex flex-wrap gap-2 my-3">{memoizedSuggestedQuestions}</div>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 p-2 bg-gray-900 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Chat input"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-designColor hover:bg-blue-500 rounded-lg"
          aria-label="Send message"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;