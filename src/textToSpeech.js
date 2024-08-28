export const speak = (text) => {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
        synth.cancel(); // اگر در حال حاضر در حال صحبت است، آن را لغو کن
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // تنظیم زبان
    utterance.pitch = 1; // تنظیم تون صدا
    utterance.rate = 1; // تنظیم سرعت صدا

    synth.speak(utterance);
};
