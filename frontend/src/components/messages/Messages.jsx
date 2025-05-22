import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {

  const {messages, loading }= useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(()=>{
    setTimeout(()=> {
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    }, 100)
  }, [messages]);

  return (
    <div className='flex-1 overflow-auto px-4'>

      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (	
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>				
						
				))}

      {loading && 
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>}

      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-200'>Send a message to start a conversation</p>
      )}
    </div>
  )
}

export default Messages
