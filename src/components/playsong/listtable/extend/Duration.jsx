import React, { useRef, useEffect, useState } from 'react'

export default function Duration({url}) {

    const ref = useRef(null);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (ref?.current?.duration) setDuration(ref?.current?.duration);
    })
  let second = duration % 60 - (duration % 60) % 1;
  let second_1 = duration % 60;
  let minute = (duration - second_1) / 60;
  return (
    <>
       <audio 
        ref={ref}
        style={{display:'none'}}
       >
            <source  src={url} type="audio/mpeg"/>
        </audio>
        <p>{minute>=10? minute : "0" + minute} : {second>=10? second : "0" + second}</p>
    </>
  )
}
