"use client";

import { createContext, useContext, useState, useCallback } from "react";

const ChatbotContext = createContext();

export function ChatbotProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const openChat = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeChat = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <ChatbotContext.Provider value={{ isOpen, toggleChat, openChat, closeChat }}>
            {children}
        </ChatbotContext.Provider>
    );
}

export function useChatbot() {
    const context = useContext(ChatbotContext);
    if (!context) {
        throw new Error("useChatbot must be used within a ChatbotProvider");
    }
    return context;
}
