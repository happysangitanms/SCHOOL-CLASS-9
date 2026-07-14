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
heading: "NOTE-1: ପଞ୍ଚତନ୍ତ୍ର ଓ ଏହି କାହାଣୀ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପଞ୍ଚତନ୍ତ୍ର ଏକ ପ୍ରସିଦ୍ଧ କାହାଣୀ ପୁସ୍ତକ ଅଟେ । ଏହାକୁ ପଣ୍ଡିତ ବିଷ୍ଣୁ ଶର୍ମା ପିଲାମାନଙ୍କୁ ନୀତି ଶିକ୍ଷା ଦେବା ପାଇଁ ସହଜ ଭାଷାରେ ଲେଖିଥିଲେ । ଏହି ପୁସ୍ତକରେ ପଶୁ ଓ ପକ୍ଷୀମାନଙ୍କ କାହାଣୀ ମାଧ୍ୟମରେ ନୀତି ଶିକ୍ଷା ଦିଆଯାଇଛି । ସିଂହ ଓ ଶଶକ କାହାଣୀ ଏହି ପୁସ୍ତକରୁ ନିଆଯାଇଛି ।<br><br>👉 ଉଦାହରଣ: ଏହି କାହାଣୀରେ ଏକ ଛୋଟ ଶଶକ, ବୁଦ୍ଧି ବଳରେ ଏକ ଅତ୍ୟାଚାରୀ ସିଂହକୁ କିପରି ବିନାଶ କରିଥିଲା, ତାହା ଦେଖାଯାଇଛି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଞ୍ଚତନ୍ତ୍ର କିଏ ଲେଖିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ପଣ୍ଡିତ ବିଷ୍ଣୁ ଶର୍ମା ପଞ୍ଚତନ୍ତ୍ର ଲେଖିଥିଲେ ।",

"<span style='color:red;'>Q-2:</span> ପଞ୍ଚତନ୍ତ୍ର କେଉଁ ଉଦ୍ଦେଶ୍ୟରେ ଲେଖାଯାଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ପିଲାମାନଙ୍କୁ ସହଜରେ ନୀତି ଶିକ୍ଷା ଦେବା ଉଦ୍ଦେଶ୍ୟରେ ଏହା ଲେଖାଯାଇଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ପଞ୍ଚତନ୍ତ୍ରର କାହାଣୀମାନଙ୍କରେ କେଉଁମାନଙ୍କ ଚରିତ୍ର ବ୍ୟବହାର ହୋଇଛି ?<br><br><span style='color:green;'>Answer:</span> ପଶୁ ଓ ପକ୍ଷୀମାନଙ୍କ ଚରିତ୍ର ବ୍ୟବହାର ହୋଇଛି ।",

"<span style='color:red;'>Q-4:</span> ସିଂହ ଶଶକ କାହାଣୀରେ କ'ଣ ଦେଖାଯାଇଛି ?<br><br><span style='color:green;'>Answer:</span> ବୁଦ୍ଧି ବଳରେ ଏକ ଅତ୍ୟାଚାରୀର ବିନାଶ କିପରି ହୋଇପାରେ, ତାହା ଦେଖାଯାଇଛି ।"

]
},

{
heading: "NOTE-2: ସିଂହ ଭାସୁରକ ଓ ତାହାର ପଶୁ ହତ୍ୟା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଏକ ଜଙ୍ଗଲରେ ଭାସୁରକ ନାମକ ଏକ ସିଂହ ରହୁଥିଲା । ସେ ପ୍ରତିଦିନ ଅନେକ ମୃଗ ଓ ଶଶକମାନଙ୍କୁ ମାରି ଖାଉଥିଲା । ଏହା ଦେଖି ଜଙ୍ଗଲର ପଶୁମାନେ ଡରି ଯାଇଥିଲେ ।<br><br>👉 ଉଦାହରଣ: ପ୍ରତିଦିନ ଅନେକ ପଶୁ ମରୁଥିବାରୁ ଜଙ୍ଗଲର ଶୁଅର ଆଦି ଜୀବମାନେ ଚିନ୍ତିତ ହୋଇ ଏକାଠି ହେଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସିଂହର ନାମ କ'ଣ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସିଂହର ନାମ ଭାସୁରକ ଥିଲା ।",

"<span style='color:red;'>Q-2:</span> ଭାସୁରକ ପ୍ରତିଦିନ କ'ଣ କରୁଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ ପ୍ରତିଦିନ ଅନେକ ମୃଗ ଓ ଶଶକମାନଙ୍କୁ ମାରି ଖାଉଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଜଙ୍ଗଲର ପଶୁମାନେ କାହିଁକି ଚିନ୍ତିତ ହେଲେ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତିଦିନ ଅନେକ ପଶୁ ମରୁଥିବାରୁ ସେମାନେ ଚିନ୍ତିତ ହେଲେ ।",

"<span style='color:red;'>Q-4:</span> କେଉଁ ପଶୁମାନେ ଏକାଠି ହୋଇ ସିଂହ ପାଖକୁ ଗଲେ ?<br><br><span style='color:green;'>Answer:</span> ଶୁଅର ଆଦି ସମସ୍ତ ପଶୁମାନେ ଏକାଠି ହୋଇ ଗଲେ ।"

]
},

{
heading: "NOTE-3: ପଶୁମାନଙ୍କ ପ୍ରସ୍ତାବ ଓ ସିଂହର ପ୍ରତିଜ୍ଞା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପଶୁମାନେ ସିଂହକୁ ଏକ ପ୍ରସ୍ତାବ ଦେଲେ । ପ୍ରତିଦିନ ଏକ ଏକ ପଶୁ ପାଳି କ୍ରମେ ସିଂହ ପାଖକୁ ଖାଦ୍ୟ ଭାବରେ ଯିବ, ଯାହା ଫଳରେ ସିଂହକୁ ପ୍ରତିଦିନ ଅଧିକ ପଶୁ ମାରିବାକୁ ପଡ଼ିବ ନାହିଁ । ସିଂହ ଏହି ପ୍ରସ୍ତାବ ମାନି ନେଲା, କିନ୍ତୁ ଚେତାବନୀ ଦେଲା ଯେ ଯଦି କୌଣସିଦିନ ପଶୁ ନ ଆସିବ, ତେବେ ସେ ସମସ୍ତଙ୍କୁ ମାରି ଦେବ ।<br><br>👉 ଉଦାହରଣ: ଏହି ପ୍ରସ୍ତାବ ଫଳରେ ପଶୁମାନେ ନିର୍ଭୟରେ ଜଙ୍ଗଲରେ ବୁଲୁଥିଲେ, କାରଣ ଜଣେ ଜଣେ ପାଳି କ୍ରମେ ସିଂହ ପାଖକୁ ଯାଉଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଶୁମାନେ ସିଂହକୁ କ'ଣ ପ୍ରସ୍ତାବ ଦେଲେ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତିଦିନ ପାଳି କ୍ରମେ ଏକ ପଶୁ ଖାଦ୍ୟ ଭାବରେ ଯିବାର ପ୍ରସ୍ତାବ ଦେଲେ ।",

"<span style='color:red;'>Q-2:</span> ସିଂହ କେଉଁ ସର୍ତ୍ତରେ ପ୍ରସ୍ତାବ ମାନିଲା ?<br><br><span style='color:green;'>Answer:</span> ଯଦି କୌଣସିଦିନ ପଶୁ ନ ଆସିବ ତେବେ ସେ ସମସ୍ତଙ୍କୁ ମାରିଦେବ ବୋଲି ସର୍ତ୍ତ ଦେଲା ।",

"<span style='color:red;'>Q-3:</span> ଏହି ପ୍ରସ୍ତାବ ପରେ ପଶୁମାନେ କିପରି ରହିଲେ ?<br><br><span style='color:green;'>Answer:</span> ପଶୁମାନେ ନିର୍ଭୟରେ ଜଙ୍ଗଲରେ ବୁଲିବାକୁ ଲାଗିଲେ ।",

"<span style='color:red;'>Q-4:</span> ପାଳି କ୍ରମେ ପଶୁ ପଠାଇବାର ଲାଭ କ'ଣ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଫଳରେ ସିଂହକୁ ଅଧିକ ପଶୁ ମାରିବାକୁ ପଡ଼ୁ ନ ଥିଲା ।"

]
},

{
heading: "NOTE-4: ଶଶକର ପାଳି ଓ ତାହାର ଚିନ୍ତା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଏକଦିନ ପାଳି କ୍ରମେ ଏକ ଛୋଟ ଶଶକର ପାଳି ଆସିଲା । ସେ ଇଚ୍ଛା ନ ଥାଇ ମନ୍ଥର ଗତିରେ ସିଂହ ପାଖକୁ ଯାଉ ଯାଉ ସିଂହକୁ ମାରିବାର ଉପାୟ ଚିନ୍ତା କରୁଥିଲା । ଏହି ଚିନ୍ତାରେ ତାହାର ବିଳମ୍ବ ହୋଇଗଲା ।<br><br>👉 ଉଦାହରଣ: ଶଶକ ଚତୁର ଥିଲା, ତେଣୁ ସେ ବଳ ପରିବର୍ତ୍ତେ ବୁଦ୍ଧି ବ୍ୟବହାର କରି ସିଂହକୁ ପରାସ୍ତ କରିବାର ଉପାୟ ଚିନ୍ତା କରୁଥିଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> କାହାର ପାଳି ଆସିଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଏକ ଛୋଟ ଶଶକର ପାଳି ଆସିଥିଲା ।",

"<span style='color:red;'>Q-2:</span> ଶଶକ କାହିଁକି ମନ୍ଥର ଗତିରେ ଯାଉଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ ସିଂହକୁ ମାରିବାର ଉପାୟ ଚିନ୍ତା କରୁ କରୁ ମନ୍ଥର ଗତିରେ ଯାଉଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଶଶକର ଚିନ୍ତା ଫଳରେ କ'ଣ ହୋଇଗଲା ?<br><br><span style='color:green;'>Answer:</span> ତାହାର ଯିବାରେ ବିଳମ୍ବ ହୋଇଗଲା ।",

"<span style='color:red;'>Q-4:</span> ଶଶକ ସିଂହକୁ ପରାସ୍ତ କରିବାକୁ କେଉଁ ଜିନିଷ ବ୍ୟବହାର କରିବାକୁ ଚାହୁଁଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ ବଳ ପରିବର୍ତ୍ତେ ନିଜର ବୁଦ୍ଧି ବ୍ୟବହାର କରିବାକୁ ଚାହୁଁଥିଲା ।"

]
},

{
heading: "NOTE-5: କୂଅରେ ପ୍ରତିବିମ୍ବ ଦେଖି ଶଶକର ଯୋଜନା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ରାସ୍ତାରେ ଯାଉ ଯାଉ ଶଶକ ଏକ କୂଅ ଦେଖିଲା । କୂଅ ଉପରକୁ ଯାଇ ସେ ଜଳରେ ନିଜର ପ୍ରତିବିମ୍ବ ଦେଖିଲା । ଏହା ଦେଖି ତାହାର ମନରେ ଏକ ଚତୁର ଯୋଜନା ଆସିଲା, ସିଂହକୁ ରାଗାଇ ତାହାକୁ ନିଜ ବୁଦ୍ଧିରେ କୂଅରେ ପକାଇଦେବ ।<br><br>👉 ଉଦାହରଣ: ପାଣିରେ ଥିବା ପ୍ରତିବିମ୍ବ ଦେଖି ମଣିଷ କିମ୍ବା ପଶୁ ବୁଝିପାରନ୍ତି ନାହିଁ ଯେ ତାହା ପ୍ରକୃତରେ ପ୍ରତିଫଳନ ମାତ୍ର । ଶଶକ ଏହି ଜିନିଷକୁ ନିଜ ଉପାୟ ପାଇଁ ବ୍ୟବହାର କରିବାକୁ ସ୍ଥିର କଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ରାସ୍ତାରେ ଶଶକ କ'ଣ ଦେଖିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ ରାସ୍ତାରେ ଏକ କୂଅ ଦେଖିଲା ।",

"<span style='color:red;'>Q-2:</span> କୂଅ ଭିତରେ ଶଶକ କ'ଣ ଦେଖିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ କୂଅ ଭିତରେ ଜଳରେ ନିଜର ପ୍ରତିବିମ୍ବ ଦେଖିଲା ।",

"<span style='color:red;'>Q-3:</span> ପ୍ରତିବିମ୍ବ ଦେଖି ଶଶକ କେଉଁ ଯୋଜନା କଲା ?<br><br><span style='color:green;'>Answer:</span> ସିଂହକୁ ରାଗାଇ କୂଅରେ ପକାଇଦେବାର ଯୋଜନା କଲା ।",

"<span style='color:red;'>Q-4:</span> ଶଶକ କେଉଁ ଜିନିଷ ବ୍ୟବହାର କରି ଏହି ଯୋଜନା କଲା ?<br><br><span style='color:green;'>Answer:</span> କୂଅ ଭିତରେ ଥିବା ପ୍ରତିବିମ୍ବକୁ ବ୍ୟବହାର କରି ସେ ଯୋଜନା କଲା ।"

]
},

{
heading: "NOTE-6: ଶଶକର ବିଳମ୍ବ ଓ ସିଂହର କ୍ରୋଧ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଶଶକ ବିଳମ୍ବରେ ସିଂହ ପାଖରେ ପହଞ୍ଚିଲା । ଏହି ସମୟ ମଧ୍ୟରେ ଭୋକରେ ସିଂହ ଅତ୍ୟନ୍ତ ରାଗିଯାଇଥିଲା । ବିଳମ୍ବ ପାଇଁ ସିଂହ ଶଶକକୁ ବହୁତ ଗାଳି ଦେଲା ଏବଂ ତାହାକୁ ମାରି ପରଦିନ ସମସ୍ତ ମୃଗକୁ ମାରିଦେବାର ଧମକ ଦେଲା ।<br><br>👉 ଉଦାହରଣ: ଭୋକରେ ରାଗିଥିବା ସିଂହ, ବିଳମ୍ବର କାରଣ ନ ଜାଣି ପ୍ରଥମେ ଶଶକକୁ ଗାଳି ଦେଲା । ମାତ୍ର ଶଶକ ବିନମ୍ର ଭାବରେ କାରଣ କହିବାକୁ ଅନୁମତି ମାଗିଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଶଶକ କାହିଁକି ବିଳମ୍ବରେ ପହଞ୍ଚିଲା ?<br><br><span style='color:green;'>Answer:</span> ରାସ୍ତାରେ ଯୋଜନା ଚିନ୍ତା କରୁ କରୁ ସେ ବିଳମ୍ବରେ ପହଞ୍ଚିଲା ।",

"<span style='color:red;'>Q-2:</span> ସିଂହ କାହିଁକି ରାଗିଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଭୋକରେ ଏବଂ ଶଶକର ବିଳମ୍ବ ପାଇଁ ସିଂହ ରାଗିଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ସିଂହ ଶଶକକୁ କେଉଁ ଧମକ ଦେଲା ?<br><br><span style='color:green;'>Answer:</span> ତାହାକୁ ମାରି ପରଦିନ ସମସ୍ତ ମୃଗକୁ ମାରିଦେବାର ଧମକ ଦେଲା ।",

"<span style='color:red;'>Q-4:</span> ଶଶକ ସିଂହ ପାଖରେ କ'ଣ ମାଗିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ ବିଳମ୍ବର କାରଣ କହିବାକୁ ଅନୁମତି ମାଗିଲା ।"

]
},

{
heading: "NOTE-7: ଶଶକର କାହାଣୀ - ଅନ୍ୟ ଏକ ସିଂହ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଶଶକ ସିଂହକୁ ମିଛ କାହାଣୀ କହିଲା । ସେ କହିଲା ଯେ ଆସିବା ବାଟରେ ଆଉ ଏକ ବଡ଼ ସିଂହ ତାହାକୁ ରୋକିଥିଲା ଓ ସେ ଏହି ଜଙ୍ଗଲର ମାଲିକ ବୋଲି କହିଥିଲା । ଏହି ଅନ୍ୟ ସିଂହ ପାଇଁ ହିଁ ଶଶକ ବିଳମ୍ବରେ ପହଞ୍ଚିଲା ବୋଲି ସେ କହିଲା ।<br><br>👉 ଉଦାହରଣ: ଶଶକ ଏହି ମିଛ କାହାଣୀ ମାଧ୍ୟମରେ ସିଂହକୁ ବିଶ୍ୱାସ କରାଇଲା ଯେ ଜଙ୍ଗଲରେ ଆଉ ଏକ ଶକ୍ତିଶାଳୀ ସିଂହ ଅଛି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଶଶକ ସିଂହକୁ କେଉଁ କାହାଣୀ କହିଲା ?<br><br><span style='color:green;'>Answer:</span> ବାଟରେ ଆଉ ଏକ ବଡ଼ ସିଂହ ତାହାକୁ ରୋକିଥିବାର କାହାଣୀ କହିଲା ।",

"<span style='color:red;'>Q-2:</span> ସେହି ଅନ୍ୟ ସିଂହ ନିଜକୁ କ'ଣ ବୋଲି କହିଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ ନିଜକୁ ଜଙ୍ଗଲର ମାଲିକ ବୋଲି କହିଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଏହି କାହାଣୀ ପାଇଁ ଶଶକ କ'ଣ କାରଣ ଦେଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହି ଅନ୍ୟ ସିଂହ ପାଇଁ ହିଁ ସେ ବିଳମ୍ବରେ ପହଞ୍ଚିଲା ବୋଲି କାରଣ ଦେଲା ।",

"<span style='color:red;'>Q-4:</span> ଶଶକ ଏହି କାହାଣୀ କାହିଁକି କହିଲା ?<br><br><span style='color:green;'>Answer:</span> ସିଂହକୁ ରାଗାଇ କୂଅ ପାଖକୁ ଆଣିବା ପାଇଁ ସେ ଏହି କାହାଣୀ କହିଲା ।"

]
},

{
heading: "NOTE-8: ଚୋର ସିଂହର ପ୍ରସ୍ତାବ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଶଶକ ଆହୁରି କହିଲା ଯେ ସେହି ଅନ୍ୟ ସିଂହ ଏକ ପ୍ରସ୍ତାବ ଦେଇଥିଲା, ଦୁହେଁ ମଧ୍ୟରୁ ଯିଏ ପରାକ୍ରମରେ ଜିତିବ ସେ ଜଙ୍ଗଲର ରାଜା ହେବ । ଏହା ଶୁଣି ଭାସୁରକ ସିଂହ ରାଗରେ ସେହି ଅନ୍ୟ ସିଂହକୁ ଦେଖିବାକୁ ଓ ମାରିଦେବାକୁ ଚାହିଁଲା ।<br><br>👉 ଉଦାହରଣ: ଶଶକ ଚତୁରତାର ସହିତ ଭାସୁରକଙ୍କୁ ଏଭଳି କହିଲା ଯେ ସେ ନିଜେ ସେହି ଚୋର ସିଂହକୁ ଦେଖିବାକୁ ଆଗ୍ରହୀ ହୋଇଗଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସେହି ଅନ୍ୟ ସିଂହ କେଉଁ ପ୍ରସ୍ତାବ ଦେଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଯିଏ ପରାକ୍ରମରେ ଜିତିବ ସେ ରାଜା ହେବ ବୋଲି ପ୍ରସ୍ତାବ ଦେଇଥିଲା ।",

"<span style='color:red;'>Q-2:</span> ଏହା ଶୁଣି ଭାସୁରକ କ'ଣ ଚାହିଁଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ ସେହି ଅନ୍ୟ ସିଂହକୁ ଦେଖିବାକୁ ଓ ମାରିଦେବାକୁ ଚାହିଁଲା ।",

"<span style='color:red;'>Q-3:</span> ଶଶକ ଭାସୁରକଙ୍କୁ କ'ଣ କହିଲା ଯେ ଅନ୍ୟ ସିଂହ ଦୁର୍ଗରେ ରହେ ?<br><br><span style='color:green;'>Answer:</span> ଶଶକ କହିଲା ଯେ ଅନ୍ୟ ସିଂହ ଏକ ଦୁର୍ଗରେ ରହେ, ତେଣୁ ତାହାକୁ ଜିତିବା କଠିନ ।",

"<span style='color:red;'>Q-4:</span> ଭାସୁରକ ଶେଷରେ କ'ଣ ନିଷ୍ପତ୍ତି ନେଲା ?<br><br><span style='color:green;'>Answer:</span> ଦୁର୍ଗରେ ଥିଲେ ମଧ୍ୟ ସେ ଅନ୍ୟ ସିଂହକୁ ଦେଖିବାକୁ ଓ ମାରିଦେବାକୁ ନିଷ୍ପତ୍ତି ନେଲା ।"

]
},

{
heading: "NOTE-9: ସିଂହକୁ କୂଅ ପାଖକୁ ନେବା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଶଶକ ଭାସୁରକଙ୍କୁ ଆଗେ ଆଗେ ଚାଲି ପୂର୍ବରୁ ଦେଖିଥିବା କୂଅ ପାଖକୁ ନେଇଗଲା । ସେ କହିଲା ଯେ ତାହାର ପ୍ରତାପ ଦେଖି ଅନ୍ୟ ସିଂହ ନିଜ ଦୁର୍ଗ ଭିତରକୁ ଲୁଚିଯାଇଛି, ଏବଂ ସେହି କୂଅକୁ ଦୁର୍ଗ ବୋଲି ଦେଖାଇଲା ।<br><br>👉 ଉଦାହରଣ: ଶଶକ ଚତୁରତାର ସହିତ ମିଥ୍ୟା କାହାଣୀ ଚାଲୁ ରଖି ସିଂହକୁ କୂଅ ଆଡ଼କୁ ନେଇଗଲା, ଯାହା ଫଳରେ ସିଂହ କିଛି ସନ୍ଦେହ କରିପାରିଲା ନାହିଁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଶଶକ ସିଂହକୁ କେଉଁଠିକୁ ନେଇଗଲା ?<br><br><span style='color:green;'>Answer:</span> ପୂର୍ବରୁ ଦେଖିଥିବା କୂଅ ପାଖକୁ ନେଇଗଲା ।",

"<span style='color:red;'>Q-2:</span> ଶଶକ ସିଂହକୁ କ'ଣ କହିଲା ଯେ ଅନ୍ୟ ସିଂହ କାହିଁକି ଲୁଚିଗଲା ?<br><br><span style='color:green;'>Answer:</span> ସିଂହର ପ୍ରତାପ ଦେଖି ଅନ୍ୟ ସିଂହ ଦୁର୍ଗ ଭିତରକୁ ଲୁଚିଗଲା ବୋଲି କହିଲା ।",

"<span style='color:red;'>Q-3:</span> ଶଶକ କୂଅକୁ କ'ଣ ବୋଲି ଦେଖାଇଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ କୂଅକୁ ଅନ୍ୟ ସିଂହର ଦୁର୍ଗ ବୋଲି ଦେଖାଇଲା ।",

"<span style='color:red;'>Q-4:</span> ସିଂହ କୂଅ ପାଖରେ କ'ଣ କରିବାକୁ ଚାହିଁଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ ଦୁର୍ଗ ଭିତରେ ଥିବା ଶତ୍ରୁକୁ ଦେଖିବାକୁ ଚାହିଁଲା ।"

]
},

{
heading: "NOTE-10: ସିଂହର ମୃତ୍ୟୁ ଓ କାହାଣୀର ଶିକ୍ଷା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାସୁରକ କୂଅ ଭିତରକୁ ଉକି ମାରି ପାଣିରେ ନିଜର ପ୍ରତିବିମ୍ବ ଦେଖିଲା ଓ ତାହାକୁ ଶତ୍ରୁ ମନେକରି ଗର୍ଜନ କଲା । କୂଅ ଭିତରୁ ପ୍ରତିଧ୍ୱନି ଆହୁରି ଜୋର୍ରେ ଆସିଲା, ଯାହା ଫଳରେ ଭାସୁରକ ଆହୁରି ରାଗି କୂଅରେ ଡେଇଁ ପଡ଼ିଲା ଏବଂ ମରିଗଲା । ଶଶକ ସୁରକ୍ଷିତ ଫେରିଆସି ସମସ୍ତ ପଶୁମାନଙ୍କୁ ଖୁସି ଖବର ଦେଲା ।<br><br>👉 ଉଦାହରଣ: ଏହି କାହାଣୀ ଆମକୁ ଶିଖାଏ ଯେ ବଳ ଅପେକ୍ଷା ବୁଦ୍ଧି ଅଧିକ ଶକ୍ତିଶାଳୀ ଅଟେ । ଛୋଟ ଶଶକ ମଧ୍ୟ ନିଜ ବୁଦ୍ଧି ବଳରେ ବଡ଼ ସିଂହକୁ ପରାସ୍ତ କରିପାରିଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାସୁରକ କୂଅ ଭିତରେ କ'ଣ ଦେଖିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେ କୂଅ ଭିତରେ ପାଣିରେ ନିଜର ପ୍ରତିବିମ୍ବ ଦେଖିଲା ।",

"<span style='color:red;'>Q-2:</span> ଭାସୁରକ ଗର୍ଜନ କରିବା ପରେ କ'ଣ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> କୂଅ ଭିତରୁ ଆହୁରି ଜୋର୍ରେ ପ୍ରତିଧ୍ୱନି ଉଠିଲା ।",

"<span style='color:red;'>Q-3:</span> ଭାସୁରକର ମୃତ୍ୟୁ କିପରି ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ଶତ୍ରୁ ମନେକରି ସେ କୂଅରେ ଡେଇଁ ପଡ଼ି ମରିଗଲା ।",

"<span style='color:red;'>Q-4:</span> ଏହି କାହାଣୀ ଆମକୁ କ'ଣ ଶିକ୍ଷା ଦିଏ ?<br><br><span style='color:green;'>Answer:</span> ବଳ ଅପେକ୍ଷା ବୁଦ୍ଧି ଅଧିକ ଶକ୍ତିଶାଳୀ ବୋଲି ଶିକ୍ଷା ଦିଏ ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ସିଂହ ଓ ଶଶକ<br/>କାହାଣୀର ଆରମ୍ଭ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"ଭାସୁରକ ନାମକ ଏକ ସିଂହ<br/>ବଣରେ ରହୁଥିଲା।\"]\nA --> I2[\"ସେ ପ୍ରତିଦିନ ଅନେକ<br/>ପଶୁ ମାରୁଥିଲା।\"]\nA --> I3[\"ପଶୁମାନେ ଏଥିରେ<br/>ବ୍ୟଥିତ ହେଲେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପଶୁମାନଙ୍କର ପ୍ରସ୍ତାବ\"]\nM --> M1[\"ପଶୁମାନେ ମିଶି<br/>ସିଂହ ପାଖକୁ ଗଲେ।\"]\nM --> M2[\"ପ୍ରତିଦିନ ଏକ ପଶୁ<br/>ପଠାଇବାକୁ କହିଲେ।\"]\nM --> M3[\"ସିଂହ ଏହି<br/>ପ୍ରସ୍ତାବ ମାନିଲା।\"]\nM --> M4[\"ସିଂହ ଏକ<br/>ଚେତାବନୀ ଦେଲା।\"]\nM --> M5[\"ପଶୁ ନ ଆସିଲେ ସେ<br/>ସମସ୍ତଙ୍କୁ ମାରିବ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ପାଳି ବ୍ୟବସ୍ଥା\"]\nC --> C1[\"ପ୍ରତିଦିନ ଏକ ପଶୁ<br/>ପାଳି କ୍ରମେ ଯାଉଥିଲା।\"]\nC --> C2[\"ଏକଦିନ ଶଶକର<br/>ପାଳି ଆସିଲା।\"]\nC --> C3[\"ଶଶକ ବିଳମ୍ବରେ ଗଲା,<br/>ଉପାୟ ଚିନ୍ତା କଲା।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ଶଶକର ବୁଦ୍ଧି<br/>ଓ କୂଅର ଯୋଜନା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 କୂଅ ଦର୍ଶନ\"]\nA --> I1[\"ଶଶକ ବାଟରେ<br/>ଏକ କୂଅ ଦେଖିଲା।\"]\nA --> I2[\"କୂଅରେ ନିଜର<br/>ପ୍ରତିବିମ୍ବ ଦେଖିଲା।\"]\nA --> I3[\"ଏଥିରୁ ଏକ<br/>ଉପାୟ ଭାବିଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସିଂହ ପାଖକୁ ଯାତ୍ରା\"]\nM --> M1[\"ଶଶକ ବିଳମ୍ବରେ<br/>ସିଂହ ପାଖରେ ପହଞ୍ଚିଲା।\"]\nM --> M2[\"ସିଂହ କ୍ରୋଧିତ ହୋଇ<br/>ଧମକ ଦେଲା।\"]\nM --> M3[\"ଶଶକ କ୍ଷମା ମାଗି<br/>କାରଣ କହିଲା।\"]\nM --> M4[\"ଏକ ଅନ୍ୟ ସିଂହ ବାଟରେ<br/>ରୋକିଥିଲା ବୋଲି କହିଲା।\"]\nM --> M5[\"ସେ ସିଂହ ନିଜକୁ<br/>ରାଜା କହୁଥିଲା ବୋଲି କହିଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସିଂହର କ୍ରୋଧ\"]\nC --> C1[\"ଭାସୁରକ ଶତ୍ରୁ ସିଂହକୁ<br/>ଦେଖିବାକୁ ଚାହିଁଲା।\"]\nC --> C2[\"ଶଶକ ତାକୁ କୂଅ<br/>ପାଖକୁ ନେଇଗଲା।\"]\nC --> C3[\"ଏହା ଥିଲା ଶଶକର<br/>ଚତୁର ଯୋଜନା।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ସିଂହର ବିନାଶ<br/>ଓ କାହାଣୀର ଶିକ୍ଷା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 କୂଅ ପାଖରେ\"]\nA --> I1[\"ସିଂହ କୂଅ ମଧ୍ୟରେ<br/>ନିଜ ପ୍ରତିବିମ୍ବ ଦେଖିଲା।\"]\nA --> I2[\"ସେ ଏହାକୁ ଶତ୍ରୁ<br/>ବୋଲି ଭାବିଲା।\"]\nA --> I3[\"ସେ ଜୋର୍ରେ<br/>ଗର୍ଜନ କଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପ୍ରତିଧ୍ୱନି ଓ ମୃତ୍ୟୁ\"]\nM --> M1[\"କୂଅରୁ ଏକ<br/>ପ୍ରତିଧ୍ୱନି ଆସିଲା।\"]\nM --> M2[\"ସିଂହ ଏହାକୁ ଶତ୍ରୁର<br/>ଗର୍ଜନ ମନେକଲା।\"]\nM --> M3[\"ଅତି କ୍ରୋଧରେ ସେ<br/>କୂଅରେ ଡେଇଁ ପଡ଼ିଲା।\"]\nM --> M4[\"ସିଂହ କୂଅରେ ପଡ଼ି<br/>ମୃତ୍ୟୁବରଣ କଲା।\"]\nM --> M5[\"ବୁଦ୍ଧିବଳ ଶକ୍ତିଠାରୁ<br/>ବଡ଼ ବୋଲି ପ୍ରମାଣିତ ହେଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଶିକ୍ଷା\"]\nC --> C1[\"ଶଶକ ଓ ସବୁ ପଶୁ<br/>ଆନନ୍ଦିତ ହେଲେ।\"]\nC --> C2[\"ସେମାନେ ବଣରେ<br/>ସୁଖରେ ରହିଲେ।\"]\nC --> C3[\"ବୁଦ୍ଧି ବଳରେ ଅତ୍ୟାଚାରୀର<br/>ବିନାଶ ସମ୍ଭବ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
  
      
}  
]
};  
