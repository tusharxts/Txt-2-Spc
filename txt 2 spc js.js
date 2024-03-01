function speak()
{
    let synth = window.speechSynthesis;
    let voice = new  SpeechSynthesisUtterance(`${textarea.value}`);
    let sounds = synth.getVoices();
     voice.voice = sounds[5];
    voice.rate=1;
    voice.volume=2.7;
    synth.speak(voice);

}

