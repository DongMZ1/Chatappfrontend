import React from "react";

const Chatcontent = () => {
  return (
    <>
      <div
        style={{
          height: "200%",
          overflow: "auto",
          border: "8px solid blue",
          padding: "5%",
        }}
      >
        This scroll box has had a border added to it. You can add borders to
        anything in HTML - including scroll boxes.
      </div>
    </>
  );
};

export default Chatcontent;