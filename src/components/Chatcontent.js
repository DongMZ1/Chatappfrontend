import React from "react";

const Chatcontent = ({messagearray, selecteduser}) => {
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



        {/*end of actual content */}
        </>
        }
      </div>
    </>
  );
};

export default Chatcontent;