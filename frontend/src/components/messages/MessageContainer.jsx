import { TiMessages } from 'react-icons/ti'

import useConversation from '../../zustand/useConversation'
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {!selectedConversation ? <NoChatSelected /> :
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className='label-text'>To: </span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
        }
    </div>
  )
}

const NoChatSelected = () => {
  const {authUser}= useAuthContext()
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className='flex flex-col gap-2 px-4 items-center text-center sm:text-lg md:text-xl text-gray-200 font-semibold'>
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}


export default MessageContainer
