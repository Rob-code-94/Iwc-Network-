import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../../services/geminiService';
import { ChatMessage, ChatRole } from '../../types';
import { BusinessLine } from '../../constants/businessInfo';

interface AIChatProps {
  businessLine: BusinessLine;
}

const welcomeMessages: Record<BusinessLine, string> = {
  courier: 'Hello! I am the IWC Logistics Assistant. How can I help you with your medical delivery needs today?',
  nemt: 'Hello! I am the IWC NEMT Assistant. I can help with mobility levels, scheduling rides, and service area questions in Dallas–Fort Worth.',
};

const AIChat: React.FC<AIChatProps> = ({ businessLine }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', role: ChatRole.MODEL, text: welcomeMessages[businessLine] },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    setMessages([{ id: 'welcome', role: ChatRole.MODEL, text: welcomeMessages[businessLine] }]);
  }, [businessLine]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: ChatRole.USER, text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.slice(-10).map((m) => ({
      role: m.role === ChatRole.USER ? 'user' : 'model',
      parts: [{ text: m.text }],
    }));

    const responseText = await sendMessageToGemini(userMsg.text, history, businessLine);
    setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: ChatRole.MODEL, text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 bg-brand-600 text-white'
        }`}
        aria-label="Open Support Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <div
        className={`fixed bottom-6 right-6 z-50 w-full sm:w-[380px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right border border-slate-100 overflow-hidden ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: 'min(500px, 80vh)' }}
      >
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <div>
              <h3 className="font-bold text-sm">{businessLine === 'nemt' ? 'IWC NEMT Assistant' : 'IWC Assistant'}</h3>
              <p className="text-xs text-brand-100">Powered by Gemini AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === ChatRole.USER
                    ? 'bg-brand-600 text-white rounded-br-none'
                    : 'bg-white text-slate-700 border border-slate-200 shadow-sm rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
                <Loader2 className="h-5 w-5 text-brand-500 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
              placeholder={businessLine === 'nemt' ? 'Ask about NEMT rides...' : 'Ask about our services...'}
              className="flex-1 p-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
