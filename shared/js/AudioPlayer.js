import React, { useEffect, useRef, useState } from "react";

const AudioPlayer = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
    const [progress, setProgress] = useState(0);
    const progRef = useRef();
    const dasharray = 854;
    
    useEffect( () => {
        const aud = new Audio(props.src || '<%= path %>/audio/clip_1_auspost.mp3');
        aud.addEventListener('timeupdate', e=>{
            setProgress(Math.round((aud.currentTime/aud.duration) * dasharray));
        })
        aud.addEventListener('ended', e=>{
            setIsPlaying( false );
        })
        setAudio( aud );
    },[]);

    const handlePlayPause = () => {
        if (isPlaying) audio.pause();
        else audio.play();

        setIsPlaying(!isPlaying);
    }
    return (
        <div className="audio-player" >
            <button onClick={handlePlayPause} className={isPlaying && 'playing'}>
                <div>
                    <h1>
                        <svg class="AudioIcon " viewBox="0 0 300 300"><g><polygon points="143.5,89.7 108.2,125 84,125 77.6,131.3 77.6,167 83.4,172.7 107.9,172.7 143.5,208.3 150.2,208.3 150.2,89.7"></polygon><path d="M210.9,148.8c0,17.8-6.1,34.1-16.2,47.1l3.6,3.6c14.6-12,24-30.3,24-50.7c0-20.4-9.3-38.7-24-50.7l-3.6,3.6 C204.8,114.7,210.9,131.1,210.9,148.8"></path><path d="M177,148.8c0,10.3-3.1,19.8-8.4,27.8l4.2,4.2c8.2-8.2,13.3-19.5,13.3-32c0-12.5-5.1-23.8-13.3-32l-4.2,4.2 C173.9,129,177,138.6,177,148.8"></path></g></svg>
                        {props.title || 'Missing Title!'}
                    </h1>
                </div>
                <div className="controls">
                    <svg viewBox="0 0 300 300"><g><path class="st0" d="M150.2,5C70.2,5,5.2,69.9,5.2,150c0,80.1,64.9,145,145,145c80.1,0,145-64.9,145-145 C295.2,69.9,230.3,5,150.2,5"></path>
                    <circle ref={progRef} class="progress" cx="150" cy="150" r="136" stroke="white" stroke-width="26" stroke-opacity="0.6" strokeDasharray={dasharray} strokeDashoffset={ dasharray - progress} />
                    {isPlaying && 
                    <g>
                    <polygon class="st1" points="136.3,195.1 110,195.1 110,109.5 116.6,102.9 136.3,102.9 "></polygon>
                    <polygon class="st1" points="189.1,188.6 182.5,195.2 162.7,195.2 162.7,102.9 189.1,102.9 "></polygon>
                    </g>
                    }
                    {!isPlaying && <polygon class="st1" points="217.2,147.7 114.3,105.4 110.7,108.1 110.7,192 114.3,194.7 217.2,152.3 	"></polygon>}
                    </g></svg>
                </div>
            </button>
        </div>
    )
}

export default AudioPlayer;