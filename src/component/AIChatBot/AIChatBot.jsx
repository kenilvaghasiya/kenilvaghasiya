import { useState } from "react";
import { motion } from "framer-motion";
import "../../Style/aiChatbot.css";

const quickQuestions = [
  "Summarize your experience",
  "What are your top skills?",
  "Tell me about cloud and AI work",
  "What impact did you deliver?"
];

const getBotReply = (question) => {
  const q = question.toLowerCase();

  if (q.includes("skill") || q.includes("tech stack") || q.includes("technology")) {
    return "My core stack includes React, Next.js, TypeScript, Node.js, ASP.NET Core, .NET, GraphQL, SQL, Azure, AWS, Docker, CI/CD, and AI technologies like LLM integration, LangChain, Semantic Kernel, and RAG pipelines.";
  }

  if (q.includes("cloud") || q.includes("aws") || q.includes("azure")) {
    return "I have hands-on experience with both Azure and AWS. On Azure: App Service, Functions, Service Bus, Event Grid, Blob Storage, Key Vault, and Azure AD. On AWS: EC2, S3, Lambda, CloudFront, API Gateway, and RDS for scalable deployments.";
  }

  if (q.includes("ai") || q.includes("llm") || q.includes("rag")) {
    return "I build AI-powered product features using LLM integration, LangChain, Semantic Kernel, and RAG architecture. I have implemented intelligent invoice summaries, recommendations, and automation workflows in production-oriented applications.";
  }

  if (q.includes("impact") || q.includes("result") || q.includes("achievement")) {
    return "Key results include 40% performance improvement, 30% defect reduction, 90%+ testing coverage, 60% faster check-in flow via QR feature, 70% faster deployments through CI/CD, and 4x traffic growth on a product launch.";
  }

  if (q.includes("project") || q.includes("portfolio")) {
    return "My portfolio highlights full-stack and product-focused work: scalable SaaS features, analytics dashboards, live streaming platforms, and modernized web apps. I focus on user experience, performance, and measurable business outcomes.";
  }

  if (q.includes("certification") || q.includes("certificate")) {
    return "My certifications include React - The Complete Guide (Udemy), Python for Data Science and AI (IBM), Foundations of UX Design (Google), and Databases and SQL for Data Science (IBM).";
  }

  if (q.includes("experience") || q.includes("summary") || q.includes("about")) {
    return "I am a Software Engineer with 3+ years of experience building scalable cloud-native applications. I work across frontend, backend, cloud infrastructure, CI/CD, and AI-powered features, with a strong focus on product quality and measurable impact.";
  }

  return "Great question. I’m a full-stack Software Engineer focused on scalable cloud products and AI-enabled features. Ask me about my experience, skills, projects, cloud architecture, or measurable results.";
};

const AIChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I’m Kenil’s AI profile assistant. Ask anything about my experience, skills, projects, or achievements."
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (value) => {
    const text = value.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    const reply = getBotReply(text);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setIsTyping(false);
    }, 550);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <motion.section
      className="aiBotSection"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="aiBotHeader">
        <div className="aiBotTitle">LLM AI Profile Assistant</div>
        <div className="aiBotSubTitle">Recruiters can chat here to quickly understand my background and impact.</div>
      </div>

      <div className="aiBotQuickActions">
        {quickQuestions.map((question) => (
          <button key={question} onClick={() => sendMessage(question)}>
            {question}
          </button>
        ))}
      </div>

      <div className="aiBotMessages">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={`aiBubble ${message.role === "user" ? "user" : "bot"}`}>
            {message.text}
          </div>
        ))}
        {isTyping && <div className="aiTyping">Assistant is typing...</div>}
      </div>

      <form className="aiBotInputForm" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about experience, skills, cloud, AI, impact..."
        />
        <button type="submit">Send</button>
      </form>
    </motion.section>
  );
};

export default AIChatBot;
