const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଓଡ଼ିଆ ବ୍ୟାକରଣ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9FLOG2P2.mp3",
    video:  "https://www.youtube.com/embed/IpTuEBbLGmo?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9FLOG2P2.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "PRACTICE/USAGE",
            odia: "ଅନୁଶୀଳନ",
            emoji: "📖",
            odiaUse: "ଅନୁଶୀଳନ ଅର୍ଥ ଅଭ୍ୟାସ ବା ବ୍ୟବହାର । ଅନୁଶୀଳନରୁ ଜଣାଯାଏ ଯେ ଭାଷା ହେଉଛି ଭାବ ବିନିମୟର ସର୍ବଶ୍ରେଷ୍ଠ ମାଧ୍ୟମ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXCHANGE OF FEELINGS",
            odia: "ଭାବ ବିନିମୟ",
            emoji: "💬",
            odiaUse: "ଭାବ ବିନିମୟ ଅର୍ଥ ମନର କଥା ପରସ୍ପର ମଧ୍ୟରେ ଆଦାନ ପ୍ରଦାନ କରିବା । ଭାଷା ହେଉଛି ଭାବ ବିନିମୟର ସର୍ବଶ୍ରେଷ୍ଠ ମାଧ୍ୟମ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VOCABULARY/WORD-STORE",
            odia: "ଶବ୍ଦପୁଞ୍ଜ",
            emoji: "📚",
            odiaUse: "ଶବ୍ଦପୁଞ୍ଜ ଅର୍ଥ ଶବ୍ଦମାନଙ୍କର ସମୂହ । ଶବ୍ଦପୁଞ୍ଜ ହେଉଛି ଭାଷାର ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ ସଦୃଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BODY PARTS/LIMBS",
            odia: "ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ",
            emoji: "🦴",
            odiaUse: "ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ ଅର୍ଥ ଶରୀରର ବିଭିନ୍ନ ଅଂଶ । ଶବ୍ଦପୁଞ୍ଜ ହେଉଛି ଭାଷାର ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ ସଦୃଶ, ଏହିମାନଙ୍କୁ ନେଇ ସେ ନିଜର କଳେବର ବୃଦ୍ଧି କରିବାରେ ସକ୍ଷମ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BODY/STRUCTURE",
            odia: "କଳେବର",
            emoji: "🏛️",
            odiaUse: "କଳେବର ଅର୍ଥ ଶରୀର ବା ଗଠନ । ଭାଷା ନିଜର କଳେବର ବୃଦ୍ଧି କରିବାରେ ସକ୍ଷମ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WORD-STORE/TREASURY",
            odia: "ଶବ୍ଦଭଣ୍ଡାର",
            emoji: "💰",
            odiaUse: "ଶବ୍ଦଭଣ୍ଡାର ଅର୍ଥ ଶବ୍ଦମାନଙ୍କର ଭଣ୍ଡାର ବା ସଂଗ୍ରହ । ଗୋଟିଏ ଭାଷାର ଶବ୍ଦଭଣ୍ଡାରକୁ ଲକ୍ଷ୍ୟ କଲେ ଜଣାଯାଏ ଯେ ସେଥିରୁ ଅନେକ ବହୁକାଳଧରି ଅପରିବର୍ତ୍ତିତ ଅଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNCHANGED",
            odia: "ଅପରିବର୍ତ୍ତିତ",
            emoji: "🔒",
            odiaUse: "ଅପରିବର୍ତ୍ତିତ ଅର୍ଥ ଯାହା ବଦଳି ନାହିଁ । ଅନେକ ଶବ୍ଦ ବହୁକାଳଧରି ଅପରିବର୍ତ୍ତିତ ଥିବାବେଳେ କେତେକ ଶବ୍ଦ କାଳକ୍ରମେ ପରିବର୍ତ୍ତନ ଘଟି ନୂଆରୂପ ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OVER TIME/GRADUALLY",
            odia: "କାଳକ୍ରମେ",
            emoji: "⏳",
            odiaUse: "କାଳକ୍ରମେ ଅର୍ଥ ସମୟ ଅନୁସାରେ ଧୀରେ ଧୀରେ । କେତେକ ଶବ୍ଦ କାଳକ୍ରମେ ପରିବର୍ତ୍ତନ ଘଟି ନୂଆରୂପ ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMMONLY USED SPEECH",
            odia: "ଲୋକମୁଖରୁ",
            emoji: "🗣️",
            odiaUse: "ଲୋକମୁଖରୁ ଅର୍ଥ ଲୋକମାନଙ୍କ ମୁହଁରୁ ବ୍ୟବହୃତ ହୋଇ । କେତେକ ଶବ୍ଦ ଲୋକମୁଖରୁ ନୂତନ ଭାବେ ସୃଷ୍ଟି ହୋଇଥାଆନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MIXED/BLENDED",
            odia: "ମିଶିଯାଇଛନ୍ତି",
            emoji: "🔀",
            odiaUse: "ମିଶିଯାଇଛନ୍ତି ଅର୍ଥ ମିଶି ଏକାକାର ହୋଇଯାଇଛନ୍ତି । କେତେକ ଅନ୍ୟଭାଷାରୁ ଆସି ଏ ଭାଷା ସହିତ ମିଶିଯାଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PREVALENCE/PRACTICE",
            odia: "ପ୍ରଚଳନ",
            emoji: "🔄",
            odiaUse: "ପ୍ରଚଳନ ଅର୍ଥ ଚଳୁଥିବା ପ୍ରଥା ବା ବ୍ୟବହାର । ଏହିଧାରାର ପ୍ରଚଳନ ହେତୁ ଗୋଟିଏ ଭାଷା ମଧ୍ୟରେ ବିବିଧତା ଲକ୍ଷ୍ୟ କରାଯାଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIVERSITY",
            odia: "ବିବିଧତା",
            emoji: "🌈",
            odiaUse: "ବିବିଧତା ଅର୍ଥ ବିଭିନ୍ନତା ବା ଅନେକ ପ୍ରକାର ମିଶ୍ରଣ । ଗୋଟିଏ ଭାଷା ମଧ୍ୟରେ ବିବିଧତା ଲକ୍ଷ୍ୟ କରାଯାଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CATEGORIZED/DIVIDED",
            odia: "ବିଭକ୍ତ",
            emoji: "📂",
            odiaUse: "ବିଭକ୍ତ ଅର୍ଥ ଭାଗ ଭାଗ ହୋଇ ପୃଥକ ହୋଇଥିବା । ଏହି ଧାରାକୁ ଆଖି ଆଗରେ ରଖି ଭାଷାଭଣ୍ଡାରକୁ ଚାରିଭାଗରେ ବିଭକ୍ତ କରାଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TATSAMA (SAME AS SANSKRIT)",
            odia: "ତତ୍ସମ",
            emoji: "🕉️",
            odiaUse: "ତତ୍ ଓ ସମ - ଏ ଦୁଇଟି ଶବ୍ଦ ମିଶ୍ରଣରେ ତତ୍ସମ ଶବ୍ଦଟି ଗଠିତ ହୋଇଛି । ଏହାର ଅର୍ଥ ହେଉଛି ତାହା ସହିତ ସମାନ, ଅର୍ଥାତ୍ ସଂସ୍କୃତ ଭାଷା ସହିତ ସମାନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXACT FORM/UNCHANGED FORM",
            odia: "ଅବିକଳରୂପେ",
            emoji: "🎯",
            odiaUse: "ଅବିକଳରୂପେ ଅର୍ଥ ଠିକ୍ ସେହି ରୂପରେ, କୌଣସି ପରିବର୍ତ୍ତନ ନ ହୋଇ । ସଂସ୍କୃତ ଭାଷାର କେତେକ ଶବ୍ଦ ଅପରିବର୍ତ୍ତିତ ହୋଇ ଅବିକଳରୂପେ ଓଡ଼ିଆ ଭାଷାରେ ପ୍ରଚଳିତ ହୋଇ ଆସୁଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SETTLEMENT",
            odia: "ବସତିସ୍ଥାପନ",
            emoji: "🏡",
            odiaUse: "ବସତିସ୍ଥାପନ ଅର୍ଥ ରହିବା ପାଇଁ ଘର ବନାଇ ସ୍ଥାୟୀ ହେବା । ଆର୍ଯ୍ୟମାନେ ଦୀର୍ଘକାଳ ଧରି ଭାରତବର୍ଷରେ ବସତିସ୍ଥାପନ କରିଆସିଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INFLUENCE",
            odia: "ପ୍ରଭାବ",
            emoji: "🌟",
            odiaUse: "ପ୍ରଭାବ ଅର୍ଥ କୌଣସି ବିଷୟର ପ୍ରଭାବ ପକାଇବା ବା ଛାପ ପକାଇବା । ସଂସ୍କୃତ ଭାଷାର ପ୍ରଭାବ ଏ ଦେଶର ବିଭିନ୍ନ ଭାଷା ଉପରେ ରହିଆସିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TADBHAVA (DERIVED FORM)",
            odia: "ତଦ୍ଭବ",
            emoji: "🔄",
            odiaUse: "ତଦ୍ଭବର ଅର୍ଥ ହେଉଛି ତହିଁରୁ ଭବ ବା ଜାତ, ଅର୍ଥାତ୍ ଓଡ଼ିଆ ଭାଷାର କେତେକ ଶବ୍ଦ ସଂସ୍କୃତ ଶବ୍ଦମାନଙ୍କରୁ ଜାତ ହୋଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BORN FROM/ORIGINATED",
            odia: "ଜାତ",
            emoji: "🌱",
            odiaUse: "ଜାତ ଅର୍ଥ ଜନ୍ମ ହୋଇଥିବା ବା ସୃଷ୍ଟି ହୋଇଥିବା । ଓଡ଼ିଆ ଭାଷାର କେତେକ ଶବ୍ଦ ସଂସ୍କୃତ ଶବ୍ଦମାନଙ୍କରୁ ଜାତ ହୋଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NATIVE/INDIGENOUS (DESHAJA)",
            odia: "ଦେଶଜ",
            emoji: "🏞️",
            odiaUse: "ଦେଶଜ ଅର୍ଥ ନିଜ ଦେଶରେ ଜନ୍ମ ହୋଇଥିବା ଶବ୍ଦ । ଏହା ଶବ୍ଦଭଣ୍ଡାରର ଚାରି ପ୍ରକାର ମଧ୍ୟରୁ ଗୋଟିଏ ପ୍ରକାର ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FOREIGN (VOIDESHIKA)",
            odia: "ବୈଦେଶିକ",
            emoji: "🌏",
            odiaUse: "ବୈଦେଶିକ ଅର୍ଥ ବିଦେଶରୁ ଆସିଥିବା ଶବ୍ଦ । ଏହା ଶବ୍ଦଭଣ୍ଡାରର ଚାରି ପ୍ରକାର ମଧ୍ୟରୁ ଗୋଟିଏ ପ୍ରକାର, ଯାହା ଅନ୍ୟ ଦେଶର ଭାଷାରୁ ଆସିଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ଶବ୍ଦ କ'ଣ ଏବଂ ଏହା କିପରି କାମ କରେ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାଷା ହେଉଛି ଆମ ମନ ଭିତରର ଭାବକୁ ଅନ୍ୟ ଜଣକ ପାଖରେ ପହଞ୍ଚାଇବାର ସବୁଠାରୁ ବଡ଼ ଉପାୟ । ଏହି ଭାଷାକୁ ଗଠନ କରୁଥିବା ଛୋଟ ଛୋଟ ଅଂଶକୁ ଶବ୍ଦ କୁହାଯାଏ, ଠିକ୍ ଯେମିତି ଆମ ଶରୀରର ହାତ, ପାଦ, ମୁଣ୍ଡ ଅଙ୍ଗ ଅଟନ୍ତି । ନୂଆ ନୂଆ ଶବ୍ଦ ମିଶି ଭାଷା ବଢ଼ିଚାଲେ ।<br><br>👉 ଉଦାହରଣ: ଛୋଟ ପିଲାଟି ପ୍ରଥମେ 'ମା', 'ପାଣି' ପରି କେତେଟା ଶବ୍ଦ ଶିଖେ । ଧୀରେ ଧୀରେ ସେ ଅଧିକ ଶବ୍ଦ ଶିଖି ବଡ଼ ବଡ଼ ବାକ୍ୟ କହିପାରେ । ଏହିପରି ହିଁ ଗୋଟିଏ ଭାଷା ମଧ୍ୟ ନୂଆ ଶବ୍ଦ ଯୋଡ଼ି ବଢ଼ିଥାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାଷା କ'ଣ କାମ କରେ ?<br><br><span style='color:green;'>Answer:</span> ଭାଷା ଆମ ମନର ଭାବକୁ ଅନ୍ୟ ଜଣକ ପାଖରେ ପହଞ୍ଚାଇବାର କାମ କରେ ।",

"<span style='color:red;'>Q-2:</span> ଶବ୍ଦଗୁଡ଼ିକ ଭାଷା ପାଇଁ କ'ଣ ପରି କାମ କରନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଶବ୍ଦଗୁଡ଼ିକ ଭାଷାର ଅଙ୍ଗ ପରି କାମ କରନ୍ତି, ଠିକ୍ ଆମ ଶରୀରର ହାତ ପାଦ ପରି ।",

"<span style='color:red;'>Q-3:</span> ଭାଷା କିପରି ବଢ଼ିଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ନୂଆ ନୂଆ ଶବ୍ଦ ମିଶିବା ଦ୍ୱାରା ଭାଷା ବଢ଼ିଥାଏ ।",

"<span style='color:red;'>Q-4:</span> ଛୋଟ ପିଲାମାନେ ଭାଷା କିପରି ଶିଖନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରଥମେ କେତେଟା ସରଳ ଶବ୍ଦ ଶିଖି, ପରେ ଧୀରେ ଧୀରେ ଅଧିକ ଶବ୍ଦ ଶିଖି ବଡ଼ ବାକ୍ୟ କହିପାରନ୍ତି ।"

]
},

{
heading: "NOTE-2: ଶବ୍ଦର ପରିବର୍ତ୍ତନ ଓ ମିଶ୍ରଣ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଗୋଟିଏ ଭାଷାର ଶବ୍ଦଗୁଡ଼ିକ ସବୁ ସମୟ ଏକା ପରି ରହନ୍ତି ନାହିଁ । ବହୁ ବର୍ଷ ପରେ କେତେକ ଶବ୍ଦ ପୁରୁଣା ରୂପ ରଖି ଥାଏ, କେତେକ ବଦଳି ନୂଆ ରୂପ ନେଇଥାଏ, ପୁଣି କେତେକ ସଂପୂର୍ଣ୍ଣ ନୂଆ ଶବ୍ଦ ସୃଷ୍ଟି ହୋଇଥାଏ । ଏହା ସହିତ ଅନ୍ୟ ଭାଷାର ଶବ୍ଦ ମଧ୍ୟ ଆସି ମିଶିଥାଏ, ଯାହା ଦ୍ୱାରା ଭାଷାରେ ବିବିଧତା ଆସେ ।<br><br>👉 ଉଦାହରଣ: ଓଡ଼ିଆ ଭାଷାରେ ମଧ୍ୟ ଏହିଭଳି ପୁରୁଣା, ନୂଆ ଓ ଅନ୍ୟଭାଷାର ଶବ୍ଦ ମିଶିଛି । ଏଥିପାଇଁ ଆମେ ଆଜି ଓଡ଼ିଆରେ ବିଭିନ୍ନ ପ୍ରକାରର ଶବ୍ଦ ଦେଖିବାକୁ ପାଉ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଏକ ଭାଷାର ଶବ୍ଦଗୁଡ଼ିକ ସମୟ ସହିତ କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ସେଗୁଡ଼ିକ ମଧ୍ୟରୁ କେତେକ ପୁରୁଣା ରୂପରେ ରହନ୍ତି, କେତେକ ବଦଳନ୍ତି ଏବଂ କେତେକ ନୂଆ ସୃଷ୍ଟି ହୁଅନ୍ତି ।",

"<span style='color:red;'>Q-2:</span> ଭାଷାରେ ବିବିଧତା କାହିଁକି ଆସେ ?<br><br><span style='color:green;'>Answer:</span> ଅନ୍ୟ ଭାଷାର ଶବ୍ଦ ମିଶିବା ଦ୍ୱାରା ଭାଷାରେ ବିବିଧତା ଆସେ ।",

"<span style='color:red;'>Q-3:</span> ଓଡ଼ିଆ ଭାଷାରେ କେଉଁ ପ୍ରକାରର ଶବ୍ଦ ମିଶିଛି ?<br><br><span style='color:green;'>Answer:</span> ପୁରୁଣା, ନୂଆ ଏବଂ ଅନ୍ୟ ଭାଷାରୁ ଆସିଥିବା ଶବ୍ଦ ମିଶିଛି ।",

"<span style='color:red;'>Q-4:</span> ପୁରୁଣା ଶବ୍ଦ ବଦଳି କ'ଣ ହୋଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ପୁରୁଣା ଶବ୍ଦ ବଦଳି ନୂଆ ରୂପ ନେଇଥାଏ ।"

]
},

{
heading: "NOTE-3: ଓଡ଼ିଆ ଶବ୍ଦଭଣ୍ଡାରର ଚାରି ପ୍ରକାର :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଏହି ପରିବର୍ତ୍ତନ ଓ ମିଶ୍ରଣର ଧାରାକୁ ଆଖି ଆଗରେ ରଖି ଓଡ଼ିଆ ଭାଷାର ସମସ୍ତ ଶବ୍ଦକୁ ଚାରି ଭାଗରେ ଭାଗ କରାଯାଇଛି । ସେହି ଚାରି ଭାଗ ହେଲା - ତତ୍ସମ, ତଦ୍ଭବ, ଦେଶଜ ଓ ବୈଦେଶିକ ।<br><br>👉 ଉଦାହରଣ: ଯେମିତି ଆମେ ଫଳକୁ ମିଠା, ଖଟା ଇତ୍ୟାଦି ଭାଗରେ ଭାଗ କରୁ, ସେମିତି ହିଁ ଭାଷାର ଶାସ୍ତ୍ରଜ୍ଞମାନେ ଓଡ଼ିଆ ଶବ୍ଦଗୁଡ଼ିକୁ ସେମାନଙ୍କ ଉତ୍ପତ୍ତି ଅନୁସାରେ ଏହି ଚାରି ଭାଗରେ ଭାଗ କରିଛନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଓଡ଼ିଆ ଶବ୍ଦଗୁଡ଼ିକୁ କେତେ ଭାଗରେ ବିଭକ୍ତ କରାଯାଇଛି ?<br><br><span style='color:green;'>Answer:</span> ଓଡ଼ିଆ ଶବ୍ଦଗୁଡ଼ିକୁ ଚାରି ଭାଗରେ ବିଭକ୍ତ କରାଯାଇଛି ।",

"<span style='color:red;'>Q-2:</span> ସେହି ଚାରି ଭାଗର ନାମ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ସେହି ଚାରି ଭାଗ ହେଲା ତତ୍ସମ, ତଦ୍ଭବ, ଦେଶଜ ଓ ବୈଦେଶିକ ।",

"<span style='color:red;'>Q-3:</span> ଏହି ବିଭାଜନ କେଉଁ ଆଧାରରେ କରାଯାଇଛି ?<br><br><span style='color:green;'>Answer:</span> ଶବ୍ଦଗୁଡ଼ିକର ଉତ୍ପତ୍ତି ଓ ପରିବର୍ତ୍ତନ ଧାରାକୁ ଆଧାର କରି ଏହି ବିଭାଜନ କରାଯାଇଛି ।",

"<span style='color:red;'>Q-4:</span> ଏହି ଚାରି ଭାଗ ମଧ୍ୟରୁ ପ୍ରଥମ ଦୁଇଟି ଭାଗର ନାମ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରଥମ ଦୁଇଟି ଭାଗର ନାମ ତତ୍ସମ ଓ ତଦ୍ଭବ ।"

]
},

{
heading: "NOTE-4: ତତ୍ସମ ଶବ୍ଦ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: 'ତତ୍' ଓ 'ସମ' ମିଶି 'ତତ୍ସମ' ଶବ୍ଦଟି ହୋଇଛି, ଯାହାର ଅର୍ଥ ହେଉଛି 'ତାହା ସହିତ ସମାନ', ଅର୍ଥାତ୍ ସଂସ୍କୃତ ଭାଷା ସହିତ ସମାନ । ସଂସ୍କୃତର କେତେକ ଶବ୍ଦ କୌଣସି ପରିବର୍ତ୍ତନ ନହୋଇ ଠିକ୍ ସେହିପରି ଓଡ଼ିଆରେ ବ୍ୟବହାର ହୁଅନ୍ତି, ଏହାକୁ ତତ୍ସମ ଶବ୍ଦ କୁହାଯାଏ । ପୁରୁଣା ସମୟରେ ଆର୍ଯ୍ୟମାନଙ୍କ ଭାଷା ସଂସ୍କୃତ ଥିଲା, ତେଣୁ ଏହାର ପ୍ରଭାବ ଓଡ଼ିଆ ଭାଷାରେ ମଧ୍ୟ ପଡ଼ିଛି ।<br><br>👉 ଉଦାହରଣ: ନଦୀ, ଆକାଶ, ଅଙ୍କ, ଆଚାର୍ଯ୍ୟ, ସଂସାର, ପର୍ବତ ଆଦି ଶବ୍ଦ ସଂସ୍କୃତରୁ କୌଣସି ପରିବର୍ତ୍ତନ ନହୋଇ ଠିକ୍ ସେହିପରି ଓଡ଼ିଆରେ ବ୍ୟବହାର ହୁଏ, ତେଣୁ ଏଗୁଡ଼ିକ ତତ୍ସମ ଶବ୍ଦ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ତତ୍ସମ ଶବ୍ଦର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ତତ୍ସମ ଶବ୍ଦର ଅର୍ଥ ହେଉଛି ସଂସ୍କୃତ ଭାଷା ସହିତ ସମାନ ।",

"<span style='color:red;'>Q-2:</span> ତତ୍ସମ ଶବ୍ଦକୁ କେଉଁଠାରୁ ଚିହ୍ନାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ସଂସ୍କୃତରୁ କୌଣସି ପରିବର୍ତ୍ତନ ନହୋଇ ଠିକ୍ ସେହିପରି ଆସିଥିବା ଶବ୍ଦକୁ ତତ୍ସମ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଆର୍ଯ୍ୟମାନଙ୍କ ଭାଷା ପ୍ରଭାବ କାହିଁକି ଓଡ଼ିଆରେ ପଡ଼ିଛି ?<br><br><span style='color:green;'>Answer:</span> ଆର୍ଯ୍ୟମାନେ ଭାରତବର୍ଷରେ ବହୁ ବର୍ଷ ବାସ କରିଥିଲେ ଏବଂ ସେମାନଙ୍କ ଭାଷା ସଂସ୍କୃତ ଥିଲା, ତେଣୁ ଏହାର ପ୍ରଭାବ ଓଡ଼ିଆରେ ପଡ଼ିଛି ।",

"<span style='color:red;'>Q-4:</span> ତତ୍ସମ ଶବ୍ଦର କେତେଟି ଉଦାହରଣ ଦିଅ ।<br><br><span style='color:green;'>Answer:</span> ନଦୀ, ଆକାଶ, ଅଙ୍କ, ଆଚାର୍ଯ୍ୟ, ସଂସାର, ପର୍ବତ ଏହାର କେତେଟି ଉଦାହରଣ ।"

]
},

{
heading: "NOTE-5: ତଦ୍ଭବ ଶବ୍ଦ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ତଦ୍ଭବ ଶବ୍ଦର ଅର୍ଥ ହେଉଛି 'ତାହାରୁ ଜାତ', ଅର୍ଥାତ୍ ସଂସ୍କୃତ ଶବ୍ଦରୁ ଜନ୍ମ ହୋଇ ସେହି ଶବ୍ଦଟି ସମୟ କ୍ରମେ ରୂପ ବଦଳାଇ ଓଡ଼ିଆରେ ଏକ ନୂଆ ରୂପ ନେଇଛି । ଅର୍ଥାତ୍ ମୂଳ ସଂସ୍କୃତ ଶବ୍ଦ ପରିବର୍ତ୍ତିତ ହୋଇ ଓଡ଼ିଆ ଶବ୍ଦ ହୋଇଛି ।<br><br>👉 ଉଦାହରଣ: ସଂସ୍କୃତ 'ନଦୀ' ଓଡ଼ିଆରେ 'ନଈ' ହୋଇଛି, 'କୂପ' 'କୂଅ' ହୋଇଛି, 'ହସ୍ତୀ' 'ହାତୀ' ହୋଇଛି, 'ଘୃତ' 'ଘିଅ' ହୋଇଛି, 'ଗାଭୀ' 'ଗାଈ' ହୋଇଛି, 'ଗର୍ଦ୍ଦଭ' 'ଗଧ' ହୋଇଛି, 'ଘୋଟକ' 'ଘୋଡ଼ା' ହୋଇଛି ଏବଂ 'ଭୂମି' 'ଭୁଇଁ' ହୋଇଛି । ଏହିପରି ପରିବର୍ତ୍ତିତ ରୂପକୁ ତଦ୍ଭବ ଶବ୍ଦ କୁହାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ତଦ୍ଭବ ଶବ୍ଦର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ତଦ୍ଭବ ଶବ୍ଦର ଅର୍ଥ ହେଉଛି ସଂସ୍କୃତ ଶବ୍ଦରୁ ଜାତ ହୋଇ ପରିବର୍ତ୍ତିତ ରୂପ ନେଇଥିବା ଶବ୍ଦ ।",

"<span style='color:red;'>Q-2:</span> ତତ୍ସମ ଓ ତଦ୍ଭବ ଶବ୍ଦ ମଧ୍ୟରେ ମୁଖ୍ୟ ଫରକ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ତତ୍ସମ ଶବ୍ଦ ପରିବର୍ତ୍ତନ ନହୋଇ ସେହିପରି ରହେ, କିନ୍ତୁ ତଦ୍ଭବ ଶବ୍ଦ ସଂସ୍କୃତରୁ ଆସି ରୂପ ବଦଳାଇଥାଏ ।",

"<span style='color:red;'>Q-3:</span> ସଂସ୍କୃତ 'ହସ୍ତୀ' ଓ 'ଘୃତ' ଓଡ଼ିଆରେ କ'ଣ ହୋଇଛି ?<br><br><span style='color:green;'>Answer:</span> ସଂସ୍କୃତ 'ହସ୍ତୀ' ଓଡ଼ିଆରେ 'ହାତୀ' ଓ 'ଘୃତ' ଓଡ଼ିଆରେ 'ଘିଅ' ହୋଇଛି ।",

"<span style='color:red;'>Q-4:</span> ସଂସ୍କୃତ 'ଗର୍ଦ୍ଦଭ' ଓ 'ଘୋଟକ' ଓଡ଼ିଆରେ କ'ଣ ହୋଇଛି ?<br><br><span style='color:green;'>Answer:</span> ସଂସ୍କୃତ 'ଗର୍ଦ୍ଦଭ' ଓଡ଼ିଆରେ 'ଗଧ' ଓ 'ଘୋଟକ' ଓଡ଼ିଆରେ 'ଘୋଡ଼ା' ହୋଇଛି ।"

]
}

];
    
    
const courseData = {
            teacherImage: "https://via.placeholder.com/400x300/667eea/ffffff?text=Teacher",
            sentences: [
{
    text: `
<div class="game-container">
<!-- Progressive Learning Cards -->
    <div class="learning-cards-container">

<!-- Main Navigation Card - Always Visible -->
<div class="learning-card reveal-card card-blue" id="mainNavCard" style="display: block;">
    <div class="learning-card-content">    
    
<!-- Topic Counter with Navigation Buttons on sides -->
<div class="topic-counter-wrapper" id="topicCounterWrapper" style="display: none; justify-content: space-between; align-items: center; gap: 8px;">
    <button class="question-btn" id="prevBtn" onclick="navigateTopic(-1)" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); flex-shrink: 0; padding: 10px 12px; font-size: 13px;">
        ⬅️ ପଛକୁ ଫେରିବା
    </button>
    
    <span id="topicCounter" style="font-weight: bold; font-size: 16px; text-align: center; flex: 1;">Topic 1 of 3</span>
    
    <button class="question-btn" id="nextBtn" onclick="navigateTopic(1)" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); flex-shrink: 0; padding: 10px 12px; font-size: 13px;">
        ଆଗକୁ ଯିବା ➡️ </button>
</div>
        
<!-- Welcome Blackboard -->
<div id="welcomeBlackboard" class="word-display">
    <span class="word-display-text">
        <span class="answer-section" id="welcomeExplanation">
            🌹ଇ-ବିଦ୍ୟା ଏକାଡେମି ଦ୍ଵାରା ପ୍ରସ୍ତୁତ🌹<br>ଏହି ସ୍ଵତନ୍ତ୍ର କ୍ଲାସ୍ ରେ ଆପଣଙ୍କୁ ସ୍ଵାଗତ ।
        </span>
    </span>
</div>

<!-- Topic Content (Hidden Initially) -->
<div id="topicContent" style="display: none;">
    <div class="word-display">
        <span class="word-display-text">
            <span class="question-heading" id="topicHeading"></span><br>
            <span class="answer-section" id="topicExplanation"></span>
        </span>
    </div>
    
    <!-- Question Buttons Grid -->
    <div class="questions-grid" id="questionButtons">
        <button class="question-btn" onclick="showTopicAnswer('q1')">ପ୍ରଶ୍ନ-1</button>
        <button class="question-btn" onclick="showTopicAnswer('q2')">ପ୍ରଶ୍ନ-2</button>
        <button class="question-btn" onclick="showTopicAnswer('q3')">ପ୍ରଶ୍ନ-3</button>
        <button class="question-btn" onclick="showTopicAnswer('q4')">ପ୍ରଶ୍ନ-4</button>
    </div>
    
    <!-- Answer Box -->
    <div id="mainAnswerBox" class="answer-box">
        👆 Click any question above to see the answer
    </div>
</div>
        
<!-- Start Button (Visible Initially) -->
<div id="startButtonContainer" style="display: grid; margin-top: 20px;">
    <button class="question-btn" id="startBtn" onclick="startLearning()" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); font-size: 18px; padding: 15px;">
        🚀 ପଢା ଆରମ୍ଭ କରିବା ପାଇଁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ । 
    </button>
</div>
    </div>
</div>
  `, 
    audio: "",
mermaid: [
`%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE["📖 GRAPH-1:<br/>ଭାଷା ଓ<br/>ଶବ୍ଦଭଣ୍ଡାରର ପରିଚୟ"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA["🟡 ଭାଷାର ପରିଚୟ"]\nA --> I1["ଭାଷା ହେଉଛି ଭାବ<br/>ବିନିମୟର ସର୍ବଶ୍ରେଷ୍ଠ ମାଧ୍ୟମ।"]\nA --> I2["ଶବ୍ଦପୁଞ୍ଜ ଭାଷାର<br/>ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ ସଦୃଶ।"]\nA --> I3["ଶବ୍ଦଗୁଡ଼ିକ ଭାଷାର<br/>କଳେବର ବୃଦ୍ଧି କରନ୍ତି।"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM["🟢 ଶବ୍ଦଭଣ୍ଡାରର କାର୍ଯ୍ୟ"]\nM --> M1["ଶବ୍ଦମାନେ ନିଜର<br/>କଳେବର ବୃଦ୍ଧି କରନ୍ତି।"]\nM --> M2["ଏହା ଦ୍ୱାରା ଭାଷା<br/>ସମୃଦ୍ଧ ହୋଇଥାଏ।"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC["🔵 ସାରାଂଶ"]\nC --> C1["ଭାଷାର ବିକାଶ ପାଇଁ<br/>ଶବ୍ଦଭଣ୍ଡାର ଆବଶ୍ୟକ।"]\nC --> C2["ଶବ୍ଦଗୁଡ଼ିକ ଭାଷାର<br/>ମୌଳିକ ଉପାଦାନ।"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 7 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2 body;\nclass C,C1,C2 conclusion;`,
`%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE["📖 GRAPH-2:<br/>ଶବ୍ଦର ପରିବର୍ତ୍ତନ<br/>ଓ ବିବିଧତା"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA["🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ"]\nA --> I1["କେତେକ ଶବ୍ଦ ବହୁକାଳଧରି<br/>ଅପରିବର୍ତ୍ତିତ ରୁହନ୍ତି।"]\nA --> I2["କେତେକ ଶବ୍ଦ କାଳକ୍ରମେ<br/>ପରିବର୍ତ୍ତନ ଘଟି ନୂଆରୂପ ହୁଅନ୍ତି।"]\nA --> I3["କେତେକ ଶବ୍ଦ ଲୋକମୁଖରୁ<br/>ନୂତନ ଭାବେ ସୃଷ୍ଟି ହୁଅନ୍ତି।"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM["🟢 ମିଶ୍ରଣ ପ୍ରକ୍ରିୟା"]\nM --> M1["କେତେକ ଅନ୍ୟଭାଷାରୁ ଆସି<br/>ଏ ଭାଷା ସହିତ ମିଶିଯାନ୍ତି।"]\nM --> M2["ଏହି ଧାରାର ପ୍ରଚଳନ ହେତୁ<br/>ଭାଷାରେ ବିବିଧତା ଦେଖାଯାଏ।"]\nM --> M3["ଓଡ଼ିଆ ଭାଷା ମଧ୍ୟ ଏହି<br/>ଧାରାରୁ ବାଦ୍ ଯାଏନାହିଁ।"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC["🔵 ବର୍ଗୀକରଣ"]\nC --> C1["ଏହି ଧାରାକୁ ଆଖି ଆଗରେ ରଖି<br/>ଶବ୍ଦଭଣ୍ଡାରକୁ ଚାରିଭାଗରେ ବିଭକ୍ତ କରାଯାଇଛି।"]\nC --> C2["ସେଗୁଡ଼ିକ ହେଲା ତତ୍ସମ,<br/>ତଦ୍ଭବ, ଦେଶଜ ଓ ବୈଦେଶିକ।"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2 conclusion;`,

`%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE["📖 GRAPH-3:<br/>ତତ୍ସମ ଶବ୍ଦ:<br/>ପରିଭାଷା ଓ କାରଣ"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA["🟡 ଅର୍ଥ"]\nA --> I1["'ତତ୍' ଓ 'ସମ' ଏହି ଦୁଇଟି<br/>ଶବ୍ଦ ମିଶ୍ରଣରେ 'ତତ୍ସମ' ଗଠିତ।"]\nA --> I2["ଏହାର ଅର୍ଥ 'ତାହା ସହିତ ସମାନ'<br/>ଅର୍ଥାତ୍ ସଂସ୍କୃତ ସହିତ ସମାନ।"]\nA --> I3["ସଂସ୍କୃତର କେତେକ ଶବ୍ଦ<br/>ଅବିକଳରୂପେ ଓଡ଼ିଆରେ ପ୍ରଚଳିତ।"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM["🟢 କାରଣ"]\nM --> M1["ଆର୍ଯ୍ୟମାନେ ଦୀର୍ଘକାଳ ଧରି<br/>ଭାରତବର୍ଷରେ ବସତିସ୍ଥାପନ କରିଥିଲେ।"]\nM --> M2["ସେହିମାନଙ୍କର<br/>ଭାଷା ଥିଲା ସଂସ୍କୃତ।"]\nM --> M3["ସଂସ୍କୃତ ଭାଷାର ପ୍ରଭାବ<br/>ଦେଶର ବିଭିନ୍ନ ଭାଷା ଉପରେ ରହିଆସିଛି।"]\nM --> M4["ସେହି ଧାରାରୁ ଓଡ଼ିଆ<br/>ଭାଷା ମଧ୍ୟ ବାଦ୍ ଯାଏନାହିଁ।"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC["🔵 ଉଦାହରଣ"]\nC --> C1["ନଦୀ, ଆକାଶ, ଅଙ୍ଗ, ଆଚାର୍ଯ୍ୟ,<br/>ସଂସାର, ପର୍ବତ ଇତ୍ୟାଦି।"]\nC --> C2["ଏହି ଶବ୍ଦଗୁଡ଼ିକ ସଂସ୍କୃତରୁ<br/>ଅବିକଳ ଭାବରେ ଆସିଛନ୍ତି।"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2 conclusion;`,

`%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE["📖 GRAPH-4:<br/>ତଦ୍ଭବ ଶବ୍ଦ:<br/>ପରିଭାଷା ଓ ଉଦାହରଣ"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA["🟡 ଅର୍ଥ"]\nA --> I1["'ତଦ୍ଭବ' ର ଅର୍ଥ ହେଉଛି<br/>'ତହିଁରୁ ଭବ ବା ଜାତ'।"]\nA --> I2["ଅର୍ଥାତ୍ ଓଡ଼ିଆ ଭାଷାର କେତେକ<br/>ଶବ୍ଦ ସଂସ୍କୃତ ଶବ୍ଦମାନଙ୍କର ଜାତ।"]\nA --> I3["ଏହି ଶବ୍ଦଗୁଡ଼ିକ ସଂସ୍କୃତରୁ<br/>ପରିବର୍ତ୍ତିତ ହୋଇ ଓଡ଼ିଆରେ ପ୍ରଚଳିତ।"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM["🟢 ସଂସ୍କୃତ-ତଦ୍ଭବ ରୂପ"]\nM --> M1["ନଦୀ ଠାରୁ ନଈ ଓ<br/>ଗାଭୀ ଠାରୁ ଗାଈ ହୋଇଛି।"]\nM --> M2["କୂପ ଠାରୁ କୂଅ ଓ<br/>ଗର୍ଦ୍ଭ ଠାରୁ ଗଧ ହୋଇଛି।"]\nM --> M3["ହସ୍ତୀ ଠାରୁ ହାତୀ ଓ<br/>ଘୋଟକ ଠାରୁ ଘୋଡ଼ା ହୋଇଛି।"]\nM --> M4["ଘୃତ ଠାରୁ ଘିଅ ଓ<br/>ଭୂମି ଠାରୁ ଭୁଇଁ ହୋଇଛି।"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC["🔵 ମନେରଖ"]\nC --> C1["ତତ୍ସମ ଶବ୍ଦ ଅପରିବର୍ତ୍ତିତ<br/>ରୁହେ, ମାତ୍ର ତଦ୍ଭବ ଶବ୍ଦ ପରିବର୍ତ୍ତିତ ରୂପ।"]\nC --> C2["ଉଭୟ ଶବ୍ଦଶ୍ରେଣୀ ସଂସ୍କୃତ<br/>ଭାଷାର ପ୍ରଭାବ ଦର୍ଶାଏ।"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2 conclusion;`
]
      
}  
]
};  
