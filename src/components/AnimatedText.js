import { useEffect, useState } from "react";

const homeData = {
  skills: ["Engineer", "Developer"]
};
const AnimatedText = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < 2 ? text + 1 : 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <span className="cd-headline rotate-1">
      <span className="blc">{text===2?'Javascript':'Software'} </span>
      <span className="cd-words-wrapper">
        {homeData.skills.map((skill, i) => (
          <b key={i} className={text === i+1 ? "is-visible" : "is-hidden"}>
            {skill}
          </b>
        ))}
      </span>
    </span>
  );
};
export default AnimatedText;
