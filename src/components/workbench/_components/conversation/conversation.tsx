import * as React from "react";

import { ILlmMessage } from "@/core/types";
import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import LLMResponse from "./llm-response";
import UserMessage from "./user-message";
import { useApiConfigStore } from "@/core/reactive/store/config/apiConfigStore";

interface ConversationProps {
  isLoading: boolean;
  messages: ILlmMessage[];
}

export const Conversation: React.FC<ConversationProps> = ({
  isLoading = false,
  messages = [],
}) => {
  const { model } = useApiConfigStore();

  return (
    <main
      className={cn(
        "flex flex-col w-full h-full gap-5 p-6 overflow-y-auto justify-end"
      )}
    >
      {messages.map((message, index) => (
        <div key={index}>
          {message.role === "user" ? (
            <UserMessage message={message.content} />
          ) : message.role === "assistant" ? (
            <LLMResponse
              model={message.model ?? model}
              message={message.content}
            />
          ) : (
            ""
          )}
        </div>
      ))}

      {/* Loading */}
      {isLoading && (
        <div className="flex w-full">
          <Ellipsis className="w-8 h-8 animate-pulse" />
        </div>
      )}
    </main>
  );
};
Conversation.displayName = "Conversation";

export default Conversation;
