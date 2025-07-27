import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi Peter, How can I assist you?' },
  ])
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (input.trim() === '') return
    const userMessage = { from: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { from: 'bot', text: data.reply }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: 'Sorry, there was an error connecting to the chatbot.',
        },
      ])
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7D7F7] via-[#F6FAFD] to-[#FDDCF8] font-sans flex flex-col">
      {/* Spacer for fixed navbar */}
      <div className="h-24"></div>

      {/* Chat Header */}
      <div className="bg-[#7C1C6C] px-6 py-4 flex justify-between items-center shadow rounded-b-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">
            🗨️ Planova AI Assistant
          </span>
        </div>
        <button
          className="text-2xl text-white hover:text-yellow-300 transition"
          title="Clear chat"
          onClick={() =>
            setMessages([
              { from: 'bot', text: 'Hi Peter, How can I assist you?' },
            ])
          }
        >
          🔄
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-lg px-5 py-3 rounded-2xl text-base shadow-sm mb-2 animate-fade-in ${
              msg.from === 'bot'
                ? 'bg-white text-[#7C1C6C] self-start border border-[#F7D7F7]'
                : 'bg-[#7C1C6C] text-white self-end ml-auto border border-[#FDDCF8]'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="max-w-lg px-5 py-3 rounded-2xl text-base shadow-sm mb-2 bg-white text-[#7C1C6C] self-start border border-[#F7D7F7] animate-pulse">
            <span className="italic">Planova is typing…</span>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="px-4 py-3 border-t bg-white/80 backdrop-blur rounded-t-2xl">
        <form
          className="flex items-center gap-2 border rounded-full px-4 py-2 shadow-md bg-white"
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
        >
          <input
            type="text"
            placeholder="Ask your event planning question…"
            className="flex-1 outline-none bg-transparent text-base px-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading}
            autoFocus
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-[#7C1C6C] hover:bg-[#5e1452] text-white rounded-full px-4 py-2 font-semibold transition-colors shadow"
          >
            {loading ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <span>Send</span>
            )}
          </button>
        </form>
      </div>
      {/* Footer */}
      <footer className="text-center py-3 text-xs text-gray-500 bg-transparent">
        Powered by Planova AI & OpenAI
      </footer>
      {/* Animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .animate-fade-in { animation: fade-in 0.4s; }
      `}</style>
    </div>
  )
}

export default Chatbot
