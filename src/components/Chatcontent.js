import React, {useEffect, useRef} from "react";


const Chatcontent = ({selectedusermessages, selecteduser}) => {
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if(!selectedusermessages){
    scrollToBottom()
    };
  }, [selectedusermessages]);

  return (
    <>
      <div
        style={{
          height: "450px",
          overflow: "auto",
          border: "8px solid blue",
          padding: "5%",
        }}
      >
        {!selecteduser && 'Please select a friend on the left side to start conversation, if you do not have a friend, Please add one'}
        {selecteduser && <>
        {/*start of actual content */}

        {selectedusermessages.map(message => {
          if(message.whospeak == selecteduser){
            return<div>
            <div className="card" style={{width: '60%', marginRight:'40%', marginTop:'5px', marginBottom:'5px'}}>
            <div className="card-body">
              {message.content}
            </div>
                   </div>
                   <br />
                   </div> 
          }else{
          
         return <div>
         <div className="card" style={{width: '60%', marginLeft:'40%', marginTop:'5px', marginBottom:'5px'}}>
         <div className="card-body">
           {message.content}
         </div>
                </div>
                <br />
                </div>
          ;
          }
        } )}

         <div ref={messagesEndRef} />

        {/*end of actual content */}
        </>
        }
      </div>
    </>
  );
};

export default Chatcontent;