import React from "react";

const Chatcontent = ({selectedusermessages, selecteduser}) => {
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
          if(message.whospeak === selecteduser){
            return <div class="card" style={{width: '60%', float:'left', marginTop:'5px', marginBottom:'5px'}}>
            <div class="card-body">
              {message.content}
            </div>
                   </div>
          }else{
          
         return <div class="card" style={{width: '60%', float:'right', marginTop:'5px', marginBottom:'5px'}}>
  <div class="card-body">
             {message.content}
  </div>
         </div>
          ;
          }
        } )}

         



        {/*end of actual content */}
        </>
        }
      </div>
    </>
  );
};

export default Chatcontent;