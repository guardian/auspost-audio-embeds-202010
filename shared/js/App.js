import React from "react";
import AudioPlayer from 'shared/js/AudioPlayer';


const App = () => {
    return (
        <AudioPlayer title="Les Shern on dealing with his diagnosis" src="<%= path %>/audio/clip_2_auspost.mp3" />
    )
};

export default App;