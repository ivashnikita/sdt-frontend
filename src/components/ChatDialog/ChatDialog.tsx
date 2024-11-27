import React, { useState } from "react";
import "./ChatDialog.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatDialog: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [context, setContext] = useState<string | null>(null); // Контекст из первого сообщения

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Добавляем сообщение пользователя
    const userMessage: Message = { sender: "user", text: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Сохраняем контекст, если это первое сообщение
    if (!context) {
      setContext(inputValue); // Сохраняем первое сообщение как контекст
    }

    setInputValue("");

    try {
      // Подготавливаем параметры запроса
      const payload = {
        context: context || inputValue, // Контекстное сообщение (первое)
        question: context ? inputValue : null, // Остальные сообщения
      };

      if (messages.length == 0) {
        const botMessage: Message = { sender: "bot", text: "Context entered successfully!" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }

      // Отправляем запрос на сервер
      if (messages.length > 1) {
        const response = await fetch("http://localhost:9000/api/ask", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
    
          if (!response.ok) {
            throw new Error("Ошибка при получении ответа от сервера.");
          }
    
          const data = await response.json();
    
          // Добавляем ответ бота
          const botMessage: Message = { sender: "bot", text: data.answer };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      // Обрабатываем ошибку
      const errorMessage: Message = { sender: "bot", text: "Ошибка при получении ответа от сервера." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chat-dialog">
      <h2 className="chat-header">AI Helper</h2>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            <span className={`msg ${message.sender}`}>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={context ? "Задайте свой вопрос!" : "Введите контекст беседы"}
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="chat-send-button">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ChatDialog;
