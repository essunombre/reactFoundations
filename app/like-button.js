'use client';

import { useState } from 'react';
export default function LikeButton() {
  const [likes, setLikes] = useState(7);

  function handleClick() {
    setLikes(likes + 1);
  }
  return <button onClick={handleClick}>Like ({likes})</button>;
}
