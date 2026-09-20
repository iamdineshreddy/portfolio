import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bot, MessageSquare, X } from "lucide-react";
import { scrollToId } from "../lib/scroll";
import {
  assistantEngine,
  assistantQuestions,
  type AssistantAnswer,
} from "../lib/assistant";

interface Message {
  role: "user" | "assistant";
  text: string;
  scrollTo?: string;
}

const greeting: Message = {
  role: "assistant",
  text: "Hi! I'm a local portfolio navigator. Ask me anything about Dinesh's work, and I'll answer or take you to the right section.",
};

export function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, loading, open]);

  const ask = async (questionId: string) => {
    const question = assistantQuestions.find((q) => q.id === questionId);
    if (!question) return;

    setMessages((m) => [
      ...m,
      { role: "user", text: question.label } as Message,
    ]);
    setLoading(true);

    const answer: AssistantAnswer = await assistantEngine(questionId);
    setMessages((m) => [
      ...m,
      { role: "assistant", text: answer.text, scrollTo: answer.scrollTo },
    ]);
    setLoading(false);
  };

  const askFreeText = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text } as Message]);
    setInput("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 350));
    const answer: AssistantAnswer = await assistantEngine("projects");
    setMessages((m) => [
      ...m,
      {
        role: "assistant",
        text: `I'm a local navigator, so I work best with the quick questions above. ${answer.text}`,
        scrollTo: answer.scrollTo,
      },
    ]);
    setLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2 }}
              className="flex h-[440px] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border hairline bg-ink-900 shadow-2xl"
              role="dialog"
              aria-label="Ask my portfolio assistant"
            >
              <div className="flex items-center justify-between border-b hairline bg-ink-850 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-400/15 text-accent-300 ring-1 ring-accent-400/30">
                    <Bot className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Ask My Portfolio</p>
                    <p className="text-[11px] text-muted-500">
                      Local navigator · LLM-ready
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close assistant"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-400 hover:bg-ink-800 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div
                ref={listRef}
                className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={
                      msg.role === "user"
                        ? "ml-8 rounded-xl rounded-tr-sm bg-ink-800 px-3.5 py-2.5 text-sm text-white"
                        : "mr-8 rounded-xl rounded-tl-sm border hairline bg-ink-850 px-3.5 py-2.5 text-sm text-muted-300"
                    }
                  >
                    {msg.text}
                    {msg.scrollTo && (
                      <button
                        type="button"
                        onClick={() => scrollToId(msg.scrollTo as string)}
                        className="mt-2 block font-mono text-xs text-accent-300 underline-offset-4 hover:underline"
                      >
                        → Scroll to {msg.scrollTo}
                      </button>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="mr-8 w-fit rounded-xl border hairline bg-ink-850 px-3.5 py-2.5 text-sm text-muted-500">
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-500" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-500 [animation-delay:0.1s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-500 [animation-delay:0.2s]" />
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t hairline px-4 py-3">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-500">
                  Quick questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {assistantQuestions.slice(0, 3).map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      disabled={loading}
                      onClick={() => ask(q.id)}
                      className="rounded-full border hairline bg-ink-850 px-3 py-1.5 text-xs text-muted-300 transition-colors hover:border-accent-400/40 hover:text-accent-300 disabled:opacity-50"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <label htmlFor="assistant-input" className="sr-only">
                    Ask a question
                  </label>
                  <input
                    id="assistant-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && askFreeText()}
                    placeholder="Ask anything…"
                    className="w-full rounded-lg border hairline bg-ink-850 px-3 py-2 text-sm text-white placeholder:text-muted-500 focus:border-accent-400/50 focus:outline-none"
                  />
                  <button
                    type="button"
                    aria-label="Send message"
                    onClick={askFreeText}
                    disabled={loading}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-400 text-ink-950 transition-colors hover:bg-accent-300 disabled:opacity-50"
                  >
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          aria-label={open ? "Close portfolio assistant" : "Ask my portfolio"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-400 text-ink-950 shadow-lg shadow-accent-400/25 transition-all hover:scale-105 hover:bg-accent-300"
        >
          {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </button>
      </div>
    </>
  );
}