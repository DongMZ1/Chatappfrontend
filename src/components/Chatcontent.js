import React from "react";

const Chatcontent = ({messagearray}) => {
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
        This scroll box has had a border added to it. You can add borders to
        anything in HTML - including scroll boxes.
      </div>
    </>
  );
};

export default Chatcontent;