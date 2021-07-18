import React from "react";

const BlockTitle = (props) => {
  return (
    <div className={`block-title text-${props.textAlign} `}>
      <p>{props.paraText}</p>
      <h3>{props.titleText}</h3>
        <p style={{'color':'#5e5e5e','fontSize':'14px','paddingTop':'5px','fontWeight':'300', 'lineHeight':'1.4rem'}}>{props.text}</p>
    </div>
  );
};

export default BlockTitle;
