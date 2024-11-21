import React from "react";
import Conversations from "./Conversations";
import useGetConversation from "../hooks/useGetConversation";
import { getRandomEmoji } from "../utils/randomemojis";


const Conversation = () => {
  const { loading, conversations } = useGetConversation();


  

  // Corrected from `conversation` to `conversations`

  return (
    <div className="flex  flex-col px-2  py-2 h-full overflow-auto select-none  ">
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        conversations.map((conversation) => (

          

          <Conversations
            key={conversation._id}
            conversationt={conversation}
            lastidx={conversation.length - 1}
            emoji={getRandomEmoji()}
          />
        ))
      )}
    </div>
  );
};

export default Conversation;
