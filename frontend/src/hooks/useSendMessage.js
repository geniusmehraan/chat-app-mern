import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  const sendMessage = async (message) => {

    if (!selectedConversation) {
      toast.error("No conversation selected.");
      return;
    }

    setLoading(true);

    try {


      const res = await fetch(`https://chat-app-ayaan.onrender.com/api/messages/send/${selectedConversation._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.error) {
        toast.error("err - ",data.error);
      }

      // console.log(messages)
      setMessages([...messages, data]);


    } catch (error) {
      toast.error(error.message);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
