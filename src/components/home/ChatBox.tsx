import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle } from
'@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger } from
'@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { FAQ_QUESTIONS } from '@/lib/constants';
import { MessageSquareIcon, SendIcon, XIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
  {
    id: 'welcome',
    text: 'Hi there! 👋 I\'m the Si Jalu AI assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date()
  }]
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Function to handle sending a message
  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Generate bot response after a short delay
    setTimeout(() => {
      const botResponse = generateResponse(input);
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  // Function to generate bot response based on FAQ
  const generateResponse = (userInput: string): Message => {
    const userQuestion = userInput.toLowerCase();

    // Check if the user's question matches any FAQ
    const matchedFaq = FAQ_QUESTIONS.find((faq) => {
      return userQuestion.includes(faq.question.toLowerCase()) ||
      faq.question.toLowerCase().includes(userQuestion);
    });

    let responseText = matchedFaq ?
    matchedFaq.answer :
    "I'm sorry, I don't have information about that yet. Please contact our support team for more assistance.";

    return {
      id: Date.now().toString(),
      text: responseText,
      sender: 'bot',
      timestamp: new Date()
    };
  };

  // Function to show a notification when minimizing chat
  const handleMinimize = () => {
    if (messages.length > 1) {
      toast({
        title: "Chat minimized",
        description: "Your conversation will remain active in the background."
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50" data-id="jspk6rgn0" data-path="src/components/home/ChatBox.tsx">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            className="rounded-full h-14 w-14 bg-[#357e00] hover:bg-[#1f4a00] text-white shadow-lg"
            size="icon">

            <MessageSquareIcon className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 sm:w-96 p-0" align="end">
          <Card className="border-0 shadow-none">
            <CardHeader className="bg-[#357e00] text-white py-3 flex flex-row items-center justify-between">
              <CardTitle className="text-base font-medium">Si Jalu Assistant</CardTitle>
              <Button variant="ghost" size="icon" onClick={handleMinimize} className="h-8 w-8 text-white">
                <XIcon className="h-5 w-5" />
              </Button>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="h-[300px] overflow-y-auto p-4 space-y-4" data-id="a9pwj2y6p" data-path="src/components/home/ChatBox.tsx">
                {messages.map((message) =>
                <div
                  key={message.id}
                  className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'}`
                  } data-id="zrj0292hg" data-path="src/components/home/ChatBox.tsx">

                    <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user' ?
                    'bg-[#357e00] text-white' :
                    'bg-gray-100 text-gray-800'}`
                    } data-id="s00u56jx9" data-path="src/components/home/ChatBox.tsx">

                      <p className="text-sm" data-id="rmelcjf0n" data-path="src/components/home/ChatBox.tsx">{message.text}</p>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} data-id="0ykty5xv0" data-path="src/components/home/ChatBox.tsx" />
              </div>
            </CardContent>
            
            <CardFooter className="p-3 border-t">
              <form onSubmit={handleSendMessage} className="w-full flex space-x-2" data-id="kkq4035di" data-path="src/components/home/ChatBox.tsx">
                <Input
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1" />

                <Button
                  type="submit"
                  size="icon"
                  className="bg-[#357e00] hover:bg-[#1f4a00]">

                  <SendIcon className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div>);

};

export default ChatBox;