import React, { useEffect, useRef } from "react";


const Chatcontent = ({ selectedusermessages, selecteduser }) => {
  //for auto scroll down ref
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {

    scrollToBottom();

  }, [selectedusermessages]);

  return (
    <>
      <div
       className='height-60 overflow-auto green-border round-border p-3' id='chat-box'
      >
        {!selecteduser && 'Please select a friend on the left side to start conversation, if you do not have a friend, Please add one'}
        {selecteduser && <>
          {/*start of actual content------------------------------------------------------------ */}

          {selectedusermessages.map(message => {
            if(!message.content){
                return null;
            }
            if (message.whospeak == selecteduser) {
              return <div className="disp-flex my-1">
                  <div className='green-border width-50-max px-2 py-0-5 rounder-border font-14p green-color'>
                    {message.content}
                  </div>
                </div>
              
            } else {

              return <div className="disp-flex my-1">
                  <div className='green-border ms-auto width-50-max px-2 py-0-5 rounder-border font-14p green-color'>
                    {message.content}
                  </div>
                </div>
                ;
            }
          })}
          {/*start auto scroll down effect-------------------------------------- */}
          <div ref={messagesEndRef} />
          {/*end auto scroll down effect-------------------------------------- */}

          {/*end of actual content --------------------------------------------------------------------*/}
        </>
        }
      </div>
    </>
  );
};

export default Chatcontent;