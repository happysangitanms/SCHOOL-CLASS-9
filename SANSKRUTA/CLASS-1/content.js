const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ସଂସ୍କୃତ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9TLS1P2-3.mp3",
    video:  "https://www.youtube.com/embed/QS0X7cpzo1g?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9TLS1P2-3.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "LION",
            odia: "ସିଂହ",
            emoji: "🦁",
            odiaUse: "ସିଂହ ଜଙ୍ଗଲର ଶକ୍ତିଶାଳୀ ପଶୁ । ଏହି କଥାରେ ଭାସୁରକ ନାମକ ସିଂହ ବହୁତ ଅତ୍ୟାଚାର କରୁଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RABBIT",
            odia: "ଶଶକ",
            emoji: "🐇",
            odiaUse: "ଶଶକ ଏକ ଛୋଟ ପଶୁ । ଏହି କଥାରେ ଶଶକ ନିଜ ବୁଦ୍ଧି ଦ୍ୱାରା ସିଂହକୁ ପରାସ୍ତ କରିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FOREST",
            odia: "ବନ",
            emoji: "🌳",
            odiaUse: "ବନ ଅର୍ଥ ଜଙ୍ଗଲ । ସିଂହ ଓ ଅନ୍ୟ ସମସ୍ତ ପଶୁ ସେହି ବନରେ ବାସ କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DESTRUCTION",
            odia: "ସର୍ବୋଚ୍ଛେଦନ",
            emoji: "💥",
            odiaUse: "ସର୍ବୋଚ୍ଛେଦନ ଅର୍ଥ ସମସ୍ତଙ୍କ ବିନାଶ । ପଶୁମାନେ ଚାହୁଁଥିଲେ ଯେ ସେମାନଙ୍କର ସର୍ବୋଚ୍ଛେଦନ ନ ହେଉ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HEARD",
            odia: "ଆକର୍ଣ୍ୟ",
            emoji: "👂",
            odiaUse: "ଆକର୍ଣ୍ୟ ଅର୍ଥ ଶୁଣି । ସିଂହ ପଶୁମାନଙ୍କ କଥା ଶୁଣି ସେମାନଙ୍କ ପ୍ରସ୍ତାବ ମାନିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WILD BEAST",
            odia: "ଶ୍ୱାପଦ",
            emoji: "🐺",
            odiaUse: "ଶ୍ୱାପଦ ଅର୍ଥ ହିଂସ୍ରଜନ୍ତୁ । ସିଂହ ଏକ ହିଂସ୍ର ଶ୍ୱାପଦ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WANDER",
            odia: "ପର୍ଯ୍ୟଟନ କରିବା",
            emoji: "🚶",
            odiaUse: "ପର୍ଯ୍ୟଟନ କରିବା ଅର୍ଥ ବୁଲିବା । ସିଂହ ସହ ଚୁକ୍ତି ପରେ ପଶୁମାନେ ନିର୍ଭୟରେ ବନରେ ବୁଲୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WELL",
            odia: "କୂପ",
            emoji: "🕳️",
            odiaUse: "କୂପ ଅର୍ଥ କୂଅ । ଶଶକ ସିଂହକୁ କୂଅ ପାଖକୁ ନେଇ ତାହାର ପ୍ରତିବିମ୍ବ ଦେଖାଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "REFLECTION",
            odia: "ପ୍ରତିବିମ୍ବ",
            emoji: "🪞",
            odiaUse: "ପ୍ରତିବିମ୍ବ ଅର୍ଥ ଛାୟାରୂପ । ସିଂହ କୂଅରେ ନିଜ ପ୍ରତିବିମ୍ବକୁ ଅନ୍ୟ ସିଂହ ବୋଲି ଭାବିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HUNGRY",
            odia: "କ୍ଷୁତ୍କ୍ଷାମକଣ୍ଠ",
            emoji: "🍽️",
            odiaUse: "କ୍ଷୁତ୍କ୍ଷାମକଣ୍ଠ ଅର୍ଥ କ୍ଷୁଧାରେ କଣ୍ଠ ଶୁଖିଯାଇଥିବା । ବିଳମ୍ବ ହେବାରୁ ସିଂହ ବହୁତ ଭୋକିଲା ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ANGRY",
            odia: "ପ୍ରଜ୍ୱଲିତାତ୍ମା",
            emoji: "😡",
            odiaUse: "ପ୍ରଜ୍ୱଲିତାତ୍ମା ଅର୍ଥ ଅତ୍ୟଧିକ କ୍ରୋଧିତ । ଶଶକ ବିଳମ୍ବରେ ଆସିବାରୁ ସିଂହ ବହୁତ କ୍ରୋଧିତ ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "KILL",
            odia: "ନିପାତ୍ୟ",
            emoji: "⚔️",
            odiaUse: "ନିପାତ୍ୟ ଅର୍ଥ ହତ୍ୟା କରି । ସିଂହ ଶଶକକୁ ମାରିଦେବାକୁ ଧମକ ଦେଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CREATURES",
            odia: "ସତ୍ତ୍ୱାନାମ୍",
            emoji: "🐾",
            odiaUse: "ସତ୍ତ୍ୱାନାମ୍ ଅର୍ଥ ପ୍ରାଣୀମାନଙ୍କର । ଶଶକ କହିଲା ଯେ ଅନ୍ୟ ପ୍ରାଣୀମାନଙ୍କର କୌଣସି ଦୋଷ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "KEEP",
            odia: "ସଂସ୍ଥାପ୍ୟ",
            emoji: "📍",
            odiaUse: "ସଂସ୍ଥାପ୍ୟ ଅର୍ଥ ରଖି । ଅନ୍ୟ ସିଂହ ଚାରିଟି ଶଶକକୁ ସେଠାରେ ରଖିବାକୁ କହିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SAID THUS",
            odia: "ଏବମୁକ୍ତ୍ୱା",
            emoji: "🗣️",
            odiaUse: "ଏବମୁକ୍ତ୍ୱା ଅର୍ଥ ଏହିପରି କହି । ଏହା କହି ଶଶକ ସିଂହକୁ କୂଅ ପାଖକୁ ନେଇଗଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SCOLDING",
            odia: "ଭର୍ତ୍ସୟମାନ",
            emoji: "☝️",
            odiaUse: "ଭର୍ତ୍ସୟମାନ ଅର୍ଥ ଗାଳି ଦେଉଥିବା । ସିଂହ ଶଶକକୁ ରାଗରେ ଗାଳି ଦେଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FORTRESS",
            odia: "ଦୁର୍ଗାଶ୍ରୟ",
            emoji: "🏰",
            odiaUse: "ଦୁର୍ଗାଶ୍ରୟ ଅର୍ଥ ଦୁର୍ଗରେ ରହୁଥିବା । ଶଶକ କହିଲା ଯେ ଅନ୍ୟ ସିଂହ ଦୁର୍ଗାଶ୍ରୟ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ECHO",
            odia: "ପ୍ରତିଶବ୍ଦ",
            emoji: "🔊",
            odiaUse: "ପ୍ରତିଶବ୍ଦ ଅର୍ଥ ପ୍ରତିଧ୍ୱନି । ସିଂହର ଗର୍ଜନର ପ୍ରତିଶବ୍ଦ କୂଅରୁ ଫେରି ଆସିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LIVELIHOOD",
            odia: "ପ୍ରାଣଯାତ୍ରା",
            emoji: "🌾",
            odiaUse: "ପ୍ରାଣଯାତ୍ରା ଅର୍ଥ ଜୀବନ ନିର୍ବାହ । ପଶୁମାନେ ସିଂହର ପ୍ରାଣଯାତ୍ରା ପାଇଁ ପ୍ରତିଦିନ ଗୋଟିଏ ପଶୁ ପଠାଇବାକୁ ଠିକ୍ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTELLIGENCE",
            odia: "ବୁଦ୍ଧିବଳ",
            emoji: "🧠",
            odiaUse: "ବୁଦ୍ଧିବଳ ଅର୍ଥ ବୁଦ୍ଧିର ଶକ୍ତି । ଶଶକ ନିଜ ବୁଦ୍ଧିବଳରେ ଶକ୍ତିଶାଳୀ ସିଂହକୁ ବିନାଶ କରିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ପଦାର୍ଥ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପଦାର୍ଥ ହେଉଛି ସେହି ଦ୍ରବ୍ୟ ଯାହାକୁ ନେଇ ଏହି ବିଶ୍ୱର ସମସ୍ତ ବସ୍ତୁ ଗଠିତ ହୋଇଛି । ବାୟୁ, ପାଣି, ପଥର, ଗଛ, ପଶୁ, ଖାଦ୍ୟ ଓ ଆମ ଶରୀର ମଧ୍ୟ ପଦାର୍ଥ ଅଟେ । ପ୍ରତ୍ୟେକ ପଦାର୍ଥର ବସ୍ତୁତ୍ୱ ଏବଂ ଆୟତନ ଥାଏ ।<br><br>👉 ଉଦାହରଣ: ତୁମ ଟେବୁଲ ଉପରେ ଥିବା ବହି, ପେନ୍‌, ପାଣି ବୋତଲ ଏବଂ ତୁମେ ଶ୍ୱାସରେ ନେଉଥିବା ବାୟୁ ସବୁ ପଦାର୍ଥ ଅଟେ । କାରଣ ସେମାନଙ୍କର ବସ୍ତୁତ୍ୱ ଅଛି ଓ ସେମାନେ କିଛି ସ୍ଥାନ ଦଖଲ କରନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଦାର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ଦ୍ରବ୍ୟକୁ ନେଇ ଏହି ବିଶ୍ୱର ସମସ୍ତ ବସ୍ତୁ ଗଠିତ ହୋଇଛି, ତାହାକୁ ପଦାର୍ଥ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ବାୟୁ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ବାୟୁ ଏକ ପଦାର୍ଥ ଅଟେ ।",

"<span style='color:red;'>Q-3:</span> ପ୍ରତ୍ୟେକ ପଦାର୍ଥର କେଉଁ ଦୁଇଟି ଗୁଣ ଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତ୍ୟେକ ପଦାର୍ଥର ବସ୍ତୁତ୍ୱ ଓ ଆୟତନ ଥାଏ ।",

"<span style='color:red;'>Q-4:</span> ଜଳବିନ୍ଦୁ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଜଳବିନ୍ଦୁ ମଧ୍ୟ ଏକ ପଦାର୍ଥ ଅଟେ ।"

]
},

{
heading: "NOTE-2: ପଦାର୍ଥ ସମ୍ପର୍କରେ ପ୍ରାଚୀନ ଓ ଆଧୁନିକ ଧାରଣା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରାଚୀନ ଭାରତୀୟ ଦାର୍ଶନିକମାନଙ୍କ ମତରେ ସମସ୍ତ ବସ୍ତୁ ପଞ୍ଚତତ୍ତ୍ୱ, ଅର୍ଥାତ୍ ମାଟି, ଜଳ, ବାୟୁ, ଅଗ୍ନି ଓ ଆକାଶକୁ ନେଇ ଗଠିତ । ଆଧୁନିକ ବୈଜ୍ଞାନିକମାନେ ପଦାର୍ଥକୁ ତାହାର ଭୌତିକ ଧର୍ମ ଓ ରାସାୟନିକ ପ୍ରକୃତି ଅନୁସାରେ ଅଧ୍ୟୟନ କରନ୍ତି ।<br><br>👉 ଉଦାହରଣ: ପୂର୍ବରୁ ଲୋକମାନେ ପ୍ରକୃତିକୁ ଦେଖି ପଦାର୍ଥ ବିଷୟରେ ଧାରଣା କରୁଥିଲେ । କିନ୍ତୁ ବର୍ତ୍ତମାନ ବୈଜ୍ଞାନିକମାନେ ପରୀକ୍ଷା ଓ ଗବେଷଣା ମାଧ୍ୟମରେ ପଦାର୍ଥର ଗୁଣ ଓ ପ୍ରକୃତିକୁ ବୁଝନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଞ୍ଚତତ୍ତ୍ୱ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ମାଟି, ଜଳ, ବାୟୁ, ଅଗ୍ନି ଓ ଆକାଶକୁ ପଞ୍ଚତତ୍ତ୍ୱ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ପ୍ରାଚୀନ ଭାରତୀୟ ଦାର୍ଶନିକମାନଙ୍କ ମତ କ'ଣ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସମସ୍ତ ବସ୍ତୁ ପାଞ୍ଚଟି ମୌଳିକ ଉପାଦାନକୁ ନେଇ ଗଠିତ ବୋଲି ସେମାନଙ୍କର ମତ ଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଆଧୁନିକ ବୈଜ୍ଞାନିକମାନେ ପଦାର୍ଥକୁ କିପରି ବିଭକ୍ତ କରିଛନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଭୌତିକ ଧର୍ମ ଓ ରାସାୟନିକ ପ୍ରକୃତି ଅନୁସାରେ ଦୁଇ ଭାଗରେ ବିଭକ୍ତ କରିଛନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ଏହି ଅଧ୍ୟାୟରେ କେଉଁ ଗୁଣ ବିଷୟରେ ଜାଣିବା ?<br><br><span style='color:green;'>Answer:</span> ପଦାର୍ଥର ଭୌତିକ ଗୁଣ ବିଷୟରେ ଜାଣିବା ।"

]
},

    {
heading: "NOTE-3: ପଦାର୍ଥ କଣିକାକୁ ନେଇ ଗଠିତ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୀର୍ଘ ସମୟ ଧରି ପଦାର୍ଥର ପ୍ରକୃତି ସମ୍ପର୍କରେ ଦୁଇ ପ୍ରକାର ମତ ଥିଲା । କେତେକଙ୍କ ମତରେ ପଦାର୍ଥ ଅବିଚ୍ଛିନ୍ନ ଥିଲା, ଆଉ ଅନ୍ୟମାନଙ୍କ ମତରେ ପଦାର୍ଥ ଅସଂଖ୍ୟ କ୍ଷୁଦ୍ର କଣିକାକୁ ନେଇ ଗଠିତ । ପରୀକ୍ଷା ଓ ପ୍ରମାଣ ଦ୍ୱାରା ବୈଜ୍ଞାନିକମାନେ ଜାଣିଲେ ଯେ ପଦାର୍ଥ କଣିକାକୁ ନେଇ ଗଠିତ ।<br><br>👉 ଉଦାହରଣ: ଗୋଟିଏ ବାଲି ଗଦାକୁ ଦେଖିଲେ ଏହା ଅନେକ ଛୋଟ ଛୋଟ ବାଲି କଣିକାରେ ତିଆରି ବୋଲି ଜଣାପଡ଼େ । ସେହିପରି ପ୍ରତ୍ୟେକ ପଦାର୍ଥ ମଧ୍ୟ ଅତି କ୍ଷୁଦ୍ର କଣିକାକୁ ନେଇ ଗଠିତ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଦାର୍ଥର ପ୍ରକୃତି ସମ୍ପର୍କରେ କେତେ ପ୍ରକାର ମତ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇ ପ୍ରକାର ମତ ଥିଲା ।",

"<span style='color:red;'>Q-2:</span> କେତେକଙ୍କ ମତରେ ପଦାର୍ଥ କିପରି ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> କେତେକଙ୍କ ମତରେ ପଦାର୍ଥ ଅବିଚ୍ଛିନ୍ନ ଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଅନ୍ୟମାନଙ୍କ ମତରେ ପଦାର୍ଥ କିପରି ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଅନ୍ୟମାନଙ୍କ ମତରେ ପଦାର୍ଥ କଣିକାକୁ ନେଇ ଗଠିତ ଥିଲା ।",

"<span style='color:red;'>Q-4:</span> ବାଲି କାହାର ଉଦାହରଣ ?<br><br><span style='color:green;'>Answer:</span> ବାଲି କଣିକାକୁ ନେଇ ଗଠିତ ପଦାର୍ଥର ଉଦାହରଣ ଅଟେ ।"

]
},

{
heading: "NOTE-4: ଲୁଣ ଓ ଚିନି ଜଳରେ କେଉଁଠି ଯାଏ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଲୁଣ କିମ୍ବା ଚିନିକୁ ଜଳରେ ପକାଇ ଗୋଳାଇଲେ ସେଗୁଡ଼ିକ ଆଖିକୁ ଦେଖାଯାଏ ନାହିଁ, କିନ୍ତୁ ଜଳରେ ସମାନ ଭାବରେ ବ୍ୟାପିଯାଆନ୍ତି । ଏହା ପ୍ରମାଣ କରେ ଯେ ପଦାର୍ଥ ଅତି କ୍ଷୁଦ୍ର କଣିକାକୁ ନେଇ ଗଠିତ ଏବଂ ସେହି କଣିକାଗୁଡ଼ିକ ଜଳରେ ମିଶି ଚାରିଆଡ଼େ ପ୍ରସାରିତ ହୋଇଯାଆନ୍ତି ।<br><br>👉 ଉଦାହରଣ: ତୁମେ ଗୋଟିଏ ଗ୍ଲାସ ପାଣିରେ ଏକ ଚାମଚ ଚିନି ପକାଇ ଗୋଳାଇଲେ କିଛି ସମୟ ପରେ ଚିନି ଦେଖାଯାଏ ନାହିଁ, କିନ୍ତୁ ପାଣିର ସବୁ ଅଂଶ ମିଠା ହୋଇଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବିକରରେ କ'ଣ ପକାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବିକରରେ ଲୁଣ କିମ୍ବା ଚିନି ପକାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଲୁଣ ବା ଚିନି ଜଳରେ ମିଶିଲେ କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ଲୁଣ ବା ଚିନି ଜଳରେ ଚାରିଆଡ଼େ ବ୍ୟାପିଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଏହି ପରୀକ୍ଷା କ'ଣ ପ୍ରମାଣ କରେ ?<br><br><span style='color:green;'>Answer:</span> ଏହି ପରୀକ୍ଷା ପ୍ରମାଣ କରେ ଯେ ପଦାର୍ଥ କଣିକାକୁ ନେଇ ଗଠିତ ।",

"<span style='color:red;'>Q-4:</span> ଜଳକୁ କେଉଁ ସାହାଯ୍ୟରେ ଗୋଳାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଜଳକୁ କାଚଦଣ୍ଡ ସାହାଯ୍ୟରେ ଗୋଳାଯାଏ ।"

]
},

    {
heading: "NOTE-5: ପଦାର୍ଥର କଣିକାଗୁଡ଼ିକ କେତେ ଛୋଟ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପଦାର୍ଥର କଣିକାଗୁଡ଼ିକ ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ହୋଇଥାଏ । ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍‌ର ଅଳ୍ପ କିଛି ସ୍ଫଟିକକୁ ବାରମ୍ବାର ଜଳରେ ମିଶାଇ ପତଳା କରିଲେ ମଧ୍ୟ ଜଳର ରଙ୍ଗ ଦେଖାଯାଏ । ଏହାରୁ ଜଣାପଡ଼େ ଯେ ଅତି କ୍ଷୁଦ୍ର କଣିକା ମଧ୍ୟ ନିଜର ପ୍ରଭାବ ଦେଖାଇପାରେ ।<br><br>👉 ଉଦାହରଣ: ଏକ ଛୋଟ ଚିମୁଟି ରଙ୍ଗକୁ ବହୁତ ପାଣିରେ ମିଶାଇଲେ ମଧ୍ୟ ପାଣିରେ ରଙ୍ଗ ଦେଖାଯାଏ । ସେହିପରି ପଦାର୍ଥର କଣିକା ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ହୋଇଥିଲେ ମଧ୍ୟ ସେମାନଙ୍କର ପ୍ରଭାବ ସ୍ପଷ୍ଟ ଭାବରେ ଦେଖାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> କେଉଁ ପଦାର୍ଥର ସ୍ଫଟିକ ନିଆଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍‌ର ସ୍ଫଟିକ ନିଆଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଦ୍ରବଣକୁ କାହିଁକି ଲଘୁକରଣ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> କଣିକାର କ୍ଷୁଦ୍ରତା ଜାଣିବା ପାଇଁ ଦ୍ରବଣକୁ ଲଘୁକରଣ କରାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ବାରମ୍ବାର ଲଘୁକରଣ ପରେ ମଧ୍ୟ ଜଳ କିପରି ରହେ ?<br><br><span style='color:green;'>Answer:</span> ବାରମ୍ବାର ଲଘୁକରଣ ପରେ ମଧ୍ୟ ଜଳ ରଙ୍ଗୀନ ହୋଇ ରହେ ।",

"<span style='color:red;'>Q-4:</span> ଏହି ପରୀକ୍ଷା କ'ଣ ସୂଚାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହି ପରୀକ୍ଷା ସୂଚାଏ ଯେ ଅଳ୍ପ ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍ ବହୁତ ଜଳକୁ ରଙ୍ଗୀନ କରିପାରେ ।"

]
},

{
heading: "NOTE-6: ପଦାର୍ଥର କଣିକାର ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଆକାର :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପଦାର୍ଥର କଣିକାଗୁଡ଼ିକ ଏତେ କ୍ଷୁଦ୍ର ଯେ ସେମାନଙ୍କର ଆକାରକୁ ସହଜରେ କଳ୍ପନା କରିହେବ ନାହିଁ । ଗୋଟିଏ ସ୍ଫଟିକରେ ଅସଂଖ୍ୟ କ୍ଷୁଦ୍ର କଣିକା ରହିଥାଏ । ବାରମ୍ବାର ଲଘୁକରଣ କରିଲେ ମଧ୍ୟ ସେହି କଣିକାଗୁଡ଼ିକର ପ୍ରଭାବ ରହିଥାଏ ।<br><br>👉 ଉଦାହରଣ: ଗୋଟିଏ କୋଠରୀର ଗୋଟିଏ କୋଣରେ ସୁଗନ୍ଧି କିମ୍ବା ଡେଟଲ୍‌ର କିଛି ବୁନ୍ଦା ପକାଇଲେ କିଛି ସମୟ ପରେ ସାରା କୋଠରୀରେ ତାହାର ଗନ୍ଧ ବ୍ୟାପିଯାଏ । ଏହାରୁ ଜଣାପଡ଼େ ଯେ ପଦାର୍ଥର କଣିକା ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ହୋଇଥିଲେ ମଧ୍ୟ ସେମାନେ ଚାରିଆଡ଼େ ବ୍ୟାପିପାରନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଗୋଟିଏ ସ୍ଫଟିକରେ କ'ଣ ରହିଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଗୋଟିଏ ସ୍ଫଟିକରେ ଅସଂଖ୍ୟ କ୍ଷୁଦ୍ର କଣିକା ରହିଥାଏ ।",

"<span style='color:red;'>Q-2:</span> ଡେଟଲ୍‌ର ଉପସ୍ଥିତି କିପରି ଜଣାପଡ଼େ ?<br><br><span style='color:green;'>Answer:</span> ଦ୍ରବଣର ଗନ୍ଧରୁ ଡେଟଲ୍‌ର ଉପସ୍ଥିତି ଜଣାପଡ଼େ ।",

"<span style='color:red;'>Q-3:</span> ପଦାର୍ଥର କଣିକା କିପରି ହୋଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ପଦାର୍ଥର କଣିକା ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-4:</span> କଣିକାର କ୍ଷୁଦ୍ରତା କିପରି ?<br><br><span style='color:green;'>Answer:</span> କଣିକାର କ୍ଷୁଦ୍ରତା ଆମ କଳ୍ପନାର ବାହାରେ ଅଟେ ।"

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
`%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-1:<br/>ପଦାର୍ଥ କ'ଣ ?"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ପଦାର୍ଥର ଅର୍ଥ ଏଠାରେ<br/>ବୁଝାଯାଇଛି।"]
A --> I2["ଆମ ଚାରିପାଖରେ ଅନେକ<br/>ପ୍ରକାର ବସ୍ତୁ ଅଛି।"]
A --> I3["ସବୁ ବସ୍ତୁ କୌଣସି ନା<br/>କୌଣସି ପଦାର୍ଥରେ ଗଠିତ।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ଘର, ଗଛ, ପଥର, ପାଣି ଓ<br/>ବାୟୁ ସବୁ ପଦାର୍ଥ ଅଟେ।"]
M --> M2["ବସ୍ତୁମାନଙ୍କର ଆକାର,<br/>ଆକୃତି ଓ ରୂପ ଭିନ୍ନ ଅଟେ।"]
M --> M3["ସମସ୍ତ ବସ୍ତୁ ଯେଉଁ ଦ୍ରବ୍ୟରେ<br/>ତିଆରି ହୁଏ ତାହା ପଦାର୍ଥ।"]
M --> M4["ବାୟୁ, ଖାଦ୍ୟ, ପଥର,<br/>ମେଘ ଓ ତାରା ପଦାର୍ଥ ଅଟେ।"]
M --> M5["ଉଦ୍ଭିଦ, ପଶୁ, ଜଳବିନ୍ଦୁ ଓ<br/>ବାଲି କଣିକା ମଧ୍ୟ ପଦାର୍ଥ ଅଟେ।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପ୍ରତ୍ୟେକ ପଦାର୍ଥ କିଛି<br/>ସ୍ଥାନ ଅଧିକାର କରେ।"]
C --> C2["ପ୍ରତ୍ୟେକ ପଦାର୍ଥର<br/>ବସ୍ତୁତ୍ୱ ରହିଥାଏ।"]
C --> C3["ପ୍ରତ୍ୟେକ ପଦାର୍ଥର<br/>ଆୟତନ ମଧ୍ୟ ଥାଏ।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

`%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-2:<br/>ପଦାର୍ଥ ସମ୍ପର୍କରେ ପ୍ରାଚୀନ ଓ<br/>ଆଧୁନିକ ଧାରଣା"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ମନୁଷ୍ୟ ପୁରାତନ କାଳରୁ<br/>ପଦାର୍ଥକୁ ବୁଝିବାକୁ ଚେଷ୍ଟା କରିଛି।"]
A --> I2["ପଦାର୍ଥ କିପରି ଗଠିତ<br/>ତାହା ଜାଣିବାକୁ ଇଚ୍ଛା କରିଛି।"]
A --> I3["ପ୍ରାଚୀନ ଓ ଆଧୁନିକ ଯୁଗରେ<br/>ଭିନ୍ନ ଭିନ୍ନ ଧାରଣା ଥିଲା।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ପ୍ରାଚୀନ ଭାରତୀୟ ଦାର୍ଶନିକମାନେ<br/>ପଞ୍ଚତତ୍ତ୍ୱ ଧାରଣା ଦେଇଥିଲେ।"]
M --> M2["ମାଟି, ଜଳ, ବାୟୁ,<br/>ଅଗ୍ନି ଓ ଆକାଶ ପଞ୍ଚତତ୍ତ୍ୱ ଅଟେ।"]
M --> M3["ସଜୀବ ଓ ନିର୍ଜୀବ ସବୁ ବସ୍ତୁ<br/>ଏହି ପାଞ୍ଚଟି ଉପାଦାନରେ ଗଠିତ।"]
M --> M4["ପ୍ରାଚୀନ ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନେ<br/>ମଧ୍ୟ ଏହିପରି ମତ ଦେଇଥିଲେ।"]
M --> M5["ଆଧୁନିକ ବୈଜ୍ଞାନିକମାନେ ପଦାର୍ଥକୁ<br/>ଭୌତିକ ଓ ରାସାୟନିକ ଗୁଣରେ ବିଭକ୍ତ କରିଛନ୍ତି।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପ୍ରାଚୀନ କାଳରେ<br/>ପଞ୍ଚତତ୍ତ୍ୱ ଧାରଣା ଥିଲା।"]
C --> C2["ଆଧୁନିକ ବିଜ୍ଞାନ ପଦାର୍ଥକୁ<br/>ଭୌତିକ ଓ ରାସାୟନିକ ଗୁଣରେ ଅଧ୍ୟୟନ କରେ।"]
C --> C3["ବିଜ୍ଞାନ ସମୟ ସହିତ<br/>ନୂଆ ଜ୍ଞାନ ଦେଇଥାଏ।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

    `%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-3:<br/>ପଦାର୍ଥ କଣିକାକୁ ନେଇ<br/>ଗଠିତ"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ପଦାର୍ଥର ଗଠନ ବିଷୟରେ<br/>ଭିନ୍ନ ମତ ଥିଲା।"]
A --> I2["ବାଲି ଅନେକ ଛୋଟ<br/>କଣିକାରେ ତିଆରି।"]
A --> I3["ପଦାର୍ଥର ପ୍ରକୃତି ଜାଣିବାକୁ<br/>ଚେଷ୍ଟା କରାଯାଇଥିଲା।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ଦୀର୍ଘ ସମୟ ଧରି<br/>ଦୁଇ ପ୍ରକାର ମତ ଥିଲା।"]
M --> M2["କେତେକଙ୍କ ମତରେ ପଦାର୍ଥ<br/>ଅବିଚ୍ଛିନ୍ନ ଅଟେ।"]
M --> M3["କାଠ, କାଚ ଓ କାଗଜ<br/>ଏହାର ଉଦାହରଣ ଥିଲା।"]
M --> M4["ଅନ୍ୟମାନଙ୍କ ମତରେ ପଦାର୍ଥ<br/>କଣିକାକୁ ନେଇ ଗଠିତ।"]
M --> M5["ବାଲି ଏହାର ଉଦାହରଣ।<br/>ସତ୍ୟ ଜାଣିବାକୁ ପରୀକ୍ଷା ଦରକାର।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପଦାର୍ଥର ପ୍ରକୃତି ବିଷୟରେ<br/>ଦୁଇଟି ଧାରଣା ଥିଲା।"]
C --> C2["ପରୀକ୍ଷା ଦ୍ୱାରା ସତ୍ୟ<br/>ଜାଣିବା ସମ୍ଭବ ହେଲା।"]
C --> C3["ପଦାର୍ଥ କଣିକାକୁ ନେଇ<br/>ଗଠିତ ବୋଲି ଜଣାପଡ଼ିଲା।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

    `%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-4:<br/>ଲୁଣ ଓ ଚିନି ଜଳରେ<br/>କେଉଁଠି ଯାଏ ?"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ଲୁଣ ବା ଚିନି<br/>ଜଳରେ ମିଶିଯାଏ।"]
A --> I2["ମିଶିଗଲେ ସେମାନେ<br/>ଦେଖାଯାଆନ୍ତି ନାହିଁ।"]
A --> I3["ଏହାର କାରଣ<br/>ଜାଣିବା ଦରକାର।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["100 ମିଲି ବିକର ନେଇ<br/>ଅଧା ଜଳ ଭରାଯାଏ।"]
M --> M2["ଜଳସ୍ତରକୁ ଚିହ୍ନଟ କରି<br/>ଲୁଣ ବା ଚିନି ପକାଯାଏ।"]
M --> M3["କାଚଦଣ୍ଡ ସାହାଯ୍ୟରେ<br/>ଜଳକୁ ଗୋଳାଯାଏ।"]
M --> M4["ଜଳସ୍ତରର ପରିବର୍ତ୍ତନ ଓ<br/>ଚିନି କେଉଁଠି ଗଲା ଦେଖାଯାଏ।"]
M --> M5["ଲୁଣ ବା ଚିନି ଜଳରେ<br/>ବ୍ୟାପିଯାଏ। ଏହା ପଦାର୍ଥ କଣିକାରୁ ଗଠିତ ବୋଲି ପ୍ରମାଣ କରେ।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ଚିନି ବା ଲୁଣ<br/>ଜଳରେ ବ୍ୟାପିଯାଏ।"]
C --> C2["ପଦାର୍ଥ କଣିକାକୁ ନେଇ<br/>ଗଠିତ ହୋଇଥାଏ।"]
C --> C3["ସରଳ ପରୀକ୍ଷାରୁ ମଧ୍ୟ<br/>ବୈଜ୍ଞାନିକ ସତ୍ୟ ଜଣାଯାଏ।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

`%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-5:<br/>ପଦାର୍ଥର କଣିକାଗୁଡ଼ିକ<br/>କେତେ ଛୋଟ ?"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ପଦାର୍ଥର କଣିକା<br/>ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଅଟେ।"]
A --> I2["ରଙ୍ଗ ମିଶାଇଲେ ମଧ୍ୟ<br/>ପାଣି ରଙ୍ଗୀନ ଦେଖାଯାଏ।"]
A --> I3["ଏକ ପରୀକ୍ଷା ଦ୍ୱାରା<br/>ଏହା ଜଣାଯାଏ।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍‌ର<br/>ସ୍ଫଟିକ ଜଳରେ ମିଶାଯାଏ।"]
M --> M2["ଦ୍ରବଣର କିଛି ଅଂଶ ନେଇ<br/>ବିଶୁଦ୍ଧ ଜଳରେ ମିଶାଯାଏ।"]
M --> M3["ଏହି ପ୍ରକ୍ରିୟାରେ ଦ୍ରବଣର<br/>ବାରମ୍ବାର ଲଘୁକରଣ ହୁଏ।"]
M --> M4["ପାଞ୍ଚରୁ ଆଠ ଥର ପରେ ମଧ୍ୟ<br/>ଜଳ ରଙ୍ଗୀନ ରହିଥାଏ।"]
M --> M5["ଅଳ୍ପ ପଦାର୍ଥ ବହୁତ ଜଳକୁ<br/>ରଙ୍ଗୀନ କରିପାରେ।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପଦାର୍ଥର କଣିକା<br/>ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଅଟେ।"]
C --> C2["ବାରମ୍ବାର ଲଘୁକରଣ ପରେ ମଧ୍ୟ<br/>ତାହାର ପ୍ରଭାବ ରହେ।"]
C --> C3["କ୍ଷୁଦ୍ର କଣିକାର ପ୍ରଭାବ<br/>ସହଜରେ ଦେଖାଯାଏ।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

`%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-6:<br/>ପଦାର୍ଥର କଣିକାର<br/>ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଆକାର"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ପଦାର୍ଥର କଣିକା<br/>ବହୁତ ଛୋଟ ହୋଇଥାଏ।"]
A --> I2["ସୁଗନ୍ଧିର ଗନ୍ଧ<br/>ସାରା ଘରେ ବ୍ୟାପିଯାଏ।"]
A --> I3["ଏହା କଣିକାର<br/>କ୍ଷୁଦ୍ରତାକୁ ଦେଖାଏ।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ଅଳ୍ପ ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍<br/>ବହୁତ ଜଳକୁ ରଙ୍ଗୀନ କରେ।"]
M --> M2["ଗୋଟିଏ ସ୍ଫଟିକରେ ଅସଂଖ୍ୟ<br/>କ୍ଷୁଦ୍ର କଣିକା ରହିଥାଏ।"]
M --> M3["କଣିକାଗୁଡ଼ିକ ବିଭାଜିତ ହୋଇ<br/>ଆହୁରି ଛୋଟ ହୋଇଯାନ୍ତି।"]
M --> M4["ଡେଟଲ୍‌କୁ ବାରମ୍ବାର ଲଘୁକରଣ<br/>କଲେ ମଧ୍ୟ ଗନ୍ଧ ରହିଥାଏ।"]
M --> M5["ଗନ୍ଧରୁ ଡେଟଲ୍‌ର ଉପସ୍ଥିତି ଜଣାପଡ଼େ।<br/>କଣିକାର କ୍ଷୁଦ୍ରତା କଳ୍ପନାର ବାହାରେ।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପଦାର୍ଥର କଣିକା<br/>ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଅଟେ।"]
C --> C2["ଗୋଟିଏ ସ୍ଫଟିକରେ<br/>ଅସଂଖ୍ୟ କଣିକା ଥାଏ।"]
C --> C3["କଣିକାର ଆକାର<br/>କଳ୍ପନା କରିବା କଷ୍ଟକର।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`    
]
  
      
}  
]
};  
