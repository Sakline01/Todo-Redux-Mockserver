import React, { useState } from "react";
import { add } from '../../action';
import { useDispatch } from 'react-redux';

const Input = ({ onAdd }) => {
  const [text, setText] = useState({ text: "", desc: "" });
  const dispatch = useDispatch();
  const handleOnchange = (event) => {
    setText({ ...text, text: event.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (text.text && text.desc) {
      onAdd(text);
      // dispatch(add(text));
    }
    else {
      alert("Please fillup the Title and Description form");
    }
  };
  return (
    <form action="submit">
      <input
        type="text"
        value={text.text}
        onChange={handleOnchange}
        placeholder="Write title"
      />
      <input
        type="text"
        value={text.desc}
        onChange={e => setText({ ...text, desc: e.target.value })}
        placeholder="Write description"
      />
      <input type="submit" style={{ height: '50px', width: '50px' }} onClick={handleClick} value="+" />
    </form>
  );
};

export default Input;