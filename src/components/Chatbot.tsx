"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import styles from "./Chatbot.module.css";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "¡Hola! Soy el asistente virtual de Jon Parras. ¿En qué puedo ayudarte hoy?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        const userMsg = { role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulate AI response (Mock)
        setTimeout(() => {
            const botMsg = { role: "bot", text: "Gracias por tu mensaje. Esta es una demostración de la IA. Pronto estaré conectado a toda la sabiduría de Jon." };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className={styles.chatbotContainer}>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <span className={styles.headerTitle}>Asistente Jon Parras</span>
                        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`${styles.message} ${msg.role === 'bot' ? styles.botMessage : styles.userMessage}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            className={styles.input}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend} className={styles.sendButton}>
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            <button
                className={styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Chat con IA"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={30} />}
            </button>
        </div>
    );
}
