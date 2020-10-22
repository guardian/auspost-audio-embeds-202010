// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"
import React from "react"
import ReactDOM from "react-dom";
import AudioPlayer from "shared/js/AudioPlayer.js";

ReactDOM.render( <AudioPlayer title="Les Shern on dealing with his diagnosis" src="<%= path %>/audio/clip_1_auspost.mp3" />, document.getElementById('root'));
