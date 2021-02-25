import React from "react";

class VoiceRec extends React.Component {
    constructor(props) {
        super(props)
        this.startRecorder = this.startRecorder.bind(this)
    }
    startRecorder() {

        // Initialze the speech recognition object
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        // Create A New instance called regognition
        let recognition = new window.SpeechRecognition();

        recognition.start();

        console.log(this.props)

        // captures the input from the users speech
        const onSpeak = (e) => {


            // console.log(e);
            const msg = e.results[0][0].transcript;
            this.props.onRecord(msg)
            // const Voice = document.querySelector('.Search').value;
            // const Voice = document.querySelector('.Search');
            // Voice.value = msg;
            // Voice.focus();
            // console.log(Voice)

        }
        recognition.addEventListener('result', onSpeak);
    }
    render() {
        return (
            <div>
                <button onClick={this.startRecorder}>Click me</button>
            </div>
        )
    }

};

export default VoiceRec;