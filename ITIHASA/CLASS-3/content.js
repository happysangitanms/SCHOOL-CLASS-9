const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଇତିହାସ "
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9H2P3-4.mp3",
    video:  "https://www.youtube.com/embed/rxPngCWZ0BY?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9H2P3-4.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "COLONISATION",
            odia: "ଉପନିବେଶବାଦ",
            emoji: "🏴",
            odiaUse: "ଉପନିବେଶବାଦ ଅର୍ଥ ଅନ୍ୟ ଦେଶକୁ ନିଜ ଅଧୀନରେ ରଖି ଶାସନ କରିବା । ଇଉରୋପୀୟ ଦେଶମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାରେ ଉପନିବେଶବାଦ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLONY",
            odia: "ଉପନିବେଶ",
            emoji: "🏘️",
            odiaUse: "ଉପନିବେଶ ଅର୍ଥ ବିଦେଶସ୍ଥ ଆବାସ ବା ଅନ୍ୟ ଦେଶର ଅଧୀନ ଅଞ୍ଚଳ । ଇଉରୋପୀୟମାନେ ଅନେକ ଉପନିବେଶ ସ୍ଥାପନ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRADE",
            odia: "ବାଣିଜ୍ୟ",
            emoji: "🚢",
            odiaUse: "ବାଣିଜ୍ୟ ଅର୍ଥ କିଣାବିକା ଓ ବ୍ୟବସାୟ । ବାଣିଜ୍ୟ ପାଇଁ ଇଉରୋପୀୟମାନେ ଏସିଆକୁ ଆସିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EMPIRE",
            odia: "ସାମ୍ରାଜ୍ୟ",
            emoji: "👑",
            odiaUse: "ସାମ୍ରାଜ୍ୟ ଅର୍ଥ ବହୁ ଅଞ୍ଚଳକୁ ନେଇ ଗଠିତ ବଡ଼ ରାଜ୍ୟ । ସାମ୍ରାଜ୍ୟ ବିସ୍ତାର ଉପନିବେଶବାଦର ଲକ୍ଷ୍ୟ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DISCOVERY",
            odia: "ଆବିଷ୍କାର",
            emoji: "🧭",
            odiaUse: "ଆବିଷ୍କାର ଅର୍ଥ ନୂଆ ସ୍ଥାନ ବା ବସ୍ତୁର ସନ୍ଧାନ । ଭୌଗୋଳିକ ଆବିଷ୍କାର ଉପନିବେଶ ସ୍ଥାପନରେ ସାହାଯ୍ୟ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GEOGRAPHY",
            odia: "ଭୌଗୋଳିକ",
            emoji: "🗺️",
            odiaUse: "ଭୌଗୋଳିକ ଅର୍ଥ ପୃଥିବୀର ସ୍ଥାନ ଓ ପରିବେଶ ସମ୍ବନ୍ଧୀୟ । ଭୌଗୋଳିକ ଆବିଷ୍କାର ଯାତାୟାତକୁ ସହଜ କରିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SLAVE",
            odia: "କ୍ରୀତଦାସ",
            emoji: "⛓️",
            odiaUse: "କ୍ରୀତଦାସ ଅର୍ଥ ଅର୍ଥର ବିନିମୟରେ ଗୋଲାମ ଭାବେ ବିକ୍ରି ହୋଇଥିବା ବ୍ୟକ୍ତି । ଆଫ୍ରିକାରେ ଦାସ ବ୍ୟବସାୟ ଲାଭଦାୟକ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INDUSTRIAL REVOLUTION",
            odia: "ଶିଳ୍ପ ବିପ୍ଳବ",
            emoji: "🏭",
            odiaUse: "ଶିଳ୍ପ ବିପ୍ଳବ ଅର୍ଥ ନୂତନ ଯନ୍ତ୍ର ସାହାଯ୍ୟରେ ବହୁ ପରିମାଣରେ ଉତ୍ପାଦନ ହେବା । ଏହା ଇଂଲାଣ୍ଡରେ ଆରମ୍ଭ ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FACTORY",
            odia: "କଳ କାରଖାନା",
            emoji: "🏭",
            odiaUse: "କଳ କାରଖାନା ଅର୍ଥ ଯନ୍ତ୍ର ସାହାଯ୍ୟରେ ଦ୍ରବ୍ୟ ତିଆରି କରାଯାଉଥିବା ସ୍ଥାନ । ଶିଳ୍ପ ବିପ୍ଳବ ପରେ କଳ କାରଖାନା ବଢ଼ିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MARKET",
            odia: "ବଜାର",
            emoji: "🛒",
            odiaUse: "ବଜାର ଅର୍ଥ କିଣାବିକାର ସ୍ଥାନ । ଇଉରୋପୀୟ ଦେଶମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାରେ ନୂଆ ବଜାର ସୃଷ୍ଟି କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RAW MATERIAL",
            odia: "କଞ୍ଚାମାଲ",
            emoji: "⛏️",
            odiaUse: "କଞ୍ଚାମାଲ ଅର୍ଥ ଜିନିଷ ତିଆରି ପାଇଁ ଦରକାର ହେଉଥିବା ମୂଳ ସାମଗ୍ରୀ । ଏସିଆ ଓ ଆଫ୍ରିକାରେ ପ୍ରଚୁର କଞ୍ଚାମାଲ ମିଳୁଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMPETITION",
            odia: "ପ୍ରତିଦ୍ୱନ୍ଦିତା",
            emoji: "⚔️",
            odiaUse: "ପ୍ରତିଦ୍ୱନ୍ଦିତା ଅର୍ଥ ପରସ୍ପର ଆଗକୁ ବଢ଼ିବା ପାଇଁ ହେଉଥିବା ଲଢ଼େଇ । ଉପନିବେଶ ସ୍ଥାପନ ପାଇଁ ଇଉରୋପୀୟ ଦେଶମାନଙ୍କ ମଧ୍ୟରେ ପ୍ରତିଦ୍ୱନ୍ଦିତା ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ଉପନିବେଶ ଓ ଉପନିବେଶବାଦ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଉପନିବେଶର ଆକ୍ଷରିକ ଅର୍ଥ ହେଉଛି ବିଦେଶସ୍ଥ ଆବାସ । କୌଣସି ଅଞ୍ଚଳରେ ପ୍ରବାସୀମାନଙ୍କ ବସତି ସ୍ଥାପନ କରି ତାହାକୁ ମାତୃଦେଶର ଲାଭ ପାଇଁ କାର୍ଯ୍ୟରେ ଲଗାଇବାକୁ ଉପନିବେଶବାଦ କୁହାଯାଏ । ବାଣିଜ୍ୟ ଉନ୍ନତି, ଆର୍ଥିକ ସମୃଦ୍ଧି, ସାମ୍ରାଜ୍ୟ ବିସ୍ତାର ଓ ଧର୍ମ ପ୍ରୟାର ଏହାର ମୁଖ୍ୟ ଲକ୍ଷ୍ୟ ଥିଲା । ଏହା ଷୋଡ଼ଶ ଶତାବ୍ଦୀରେ ଆରମ୍ଭ ହୋଇଥିଲା ।<br><br>👉 ଉଦାହରଣ: ଇଉରୋପୀୟ ରାଷ୍ଟ୍ରମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାକୁ ବାଣିଜ୍ୟ ଉଦ୍ଦେଶ୍ୟରେ ଆସି ସେଠାରେ ବାଣିଜ୍ୟ କେନ୍ଦ୍ର ଖୋଲି ନିଜର ଉପନିବେଶ ସ୍ଥାପନ କରିଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଉପନିବେଶର ଆକ୍ଷରିକ ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଉପନିବେଶର ଆକ୍ଷରିକ ଅର୍ଥ ହେଉଛି ବିଦେଶସ୍ଥ ଆବାସ ।",

"<span style='color:red;'>Q-2:</span> ଉପନିବେଶବାଦକୁ କିପରି ବ୍ୟାଖ୍ୟା କରାଯାଇପାରେ ?<br><br><span style='color:green;'>Answer:</span> କୌଣସି ଅଞ୍ଚଳରେ ପ୍ରବାସୀମାନଙ୍କ ବସତି ସ୍ଥାପନ କରି ମାତୃଦେଶର ଲାଭ ପାଇଁ କାର୍ଯ୍ୟରେ ଲଗାଇବାକୁ ଉପନିବେଶବାଦ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଉପନିବେଶବାଦର ମୁଖ୍ୟ ଲକ୍ଷ୍ୟଗୁଡ଼ିକ କ'ଣ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ବାଣିଜ୍ୟ ବ୍ୟବସାୟର ଉନ୍ନତି, ଆର୍ଥିକ ସମୃଦ୍ଧି, ସାମ୍ରାଜ୍ୟ ବିସ୍ତାର ଓ ଧର୍ମ ପ୍ରୟାର ଉପନିବେଶବାଦର ମୁଖ୍ୟ ଲକ୍ଷ୍ୟ ଥିଲା ।",

"<span style='color:red;'>Q-4:</span> ଉପନିବେଶବାଦ କେବେ ଆରମ୍ଭ ହୋଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଉପନିବେଶବାଦ ପ୍ରଥମେ ଷୋଡ଼ଶ ଶତାବ୍ଦୀରେ ଆରମ୍ଭ ହୋଇଥିଲା ।"

]
},

{
heading: "NOTE-2: ଉପନିବେଶବାଦର ପର୍ଯ୍ୟାୟ ଓ ଔପନିବେଶିକ ସାମ୍ରାଜ୍ୟବାଦ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଉପନିବେଶବାଦର ପ୍ରଥମ ପର୍ଯ୍ୟାୟ ଅଷ୍ଟାଦଶ ଶତାବ୍ଦୀର ଶେଷଭାଗ ପର୍ଯ୍ୟନ୍ତ ଚାଲିଥିଲା । ଊନବିଂଶ ଶତାବ୍ଦୀର ଶେଷବେଳକୁ ଉପନିବେଶ ସ୍ଥାପନ ପୁଣି ଆରମ୍ଭ ହେଲା, ଯାହାକୁ ଔପନିବେଶିକ ସାମ୍ରାଜ୍ୟବାଦ କୁହାଯାଏ । ସାମ୍ରାଜ୍ୟବାଦୀ ରାଷ୍ଟ୍ରମାନେ ନିଜ ସ୍ୱାର୍ଥ ପାଇଁ ଅଞ୍ଚଳ ଜୟ କରି ଉପନିବେଶ ସ୍ଥାପନ କଲେ ।<br><br>👉 ଉଦାହରଣ: ଏହି ଔପନିବେଶିକ ସାମ୍ରାଜ୍ୟବାଦ ୧୯୧୪ ମସିହାରେ ଆରମ୍ଭ ହୋଇଥିବା ପ୍ରଥମ ବିଶ୍ୱଯୁଦ୍ଧର ଏକ ପ୍ରମୁଖ କାରଣ ହୋଇଥିଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଉପନିବେଶବାଦର ପ୍ରଥମ ପର୍ଯ୍ୟାୟ କେତେ ସମୟ ପର୍ଯ୍ୟନ୍ତ ଚାଲିଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରଥମ ପର୍ଯ୍ୟାୟ ଅଷ୍ଟାଦଶ ଶତାବ୍ଦୀର ଶେଷଭାଗ ପର୍ଯ୍ୟନ୍ତ ଚାଲିଥିଲା ।",

"<span style='color:red;'>Q-2:</span> ଔପନିବେଶିକ ସାମ୍ରାଜ୍ୟବାଦ କେବେ ଆରମ୍ଭ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ଊନବିଂଶ ଶତାବ୍ଦୀର ଶେଷବେଳକୁ ଔପନିବେଶିକ ସାମ୍ରାଜ୍ୟବାଦର ପୁନରୁତ୍ଥାନ ହେଲା ।",

"<span style='color:red;'>Q-3:</span> ସାମ୍ରାଜ୍ୟବାଦୀ ରାଷ୍ଟ୍ରମାନେ କ'ଣ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ସେମାନେ ନିଜ ସ୍ୱାର୍ଥକୁ ସୁହାଉଥିବା ଅଞ୍ଚଳ ଜୟ କରି ସେଠାରେ ଉପନିବେଶ ସ୍ଥାପନ କଲେ ।",

"<span style='color:red;'>Q-4:</span> ଔପନିବେଶିକ ସାମ୍ରାଜ୍ୟବାଦ କେଉଁ ଘଟଣା ପାଇଁ କାରଣ ହୋଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା ୧୯୧୪ ମସିହାର ପ୍ରଥମ ବିଶ୍ୱଯୁଦ୍ଧ ପାଇଁ ଏକ ପ୍ରମୁଖ କାରଣ ହୋଇଥିଲା ।"

]
},

{
heading: "NOTE-3: ଉପନିବେଶବାଦର କାରଣ - ଭୌଗୋଳିକ ଆବିଷ୍କାର :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପଞ୍ଚଦଶ ଓ ଷୋଡ଼ଶ ଶତାବ୍ଦୀର ଭୌଗୋଳିକ ଆବିଷ୍କାର ଫଳରେ ଅନେକ ନୂତନ ଅଞ୍ଚଳର ସନ୍ଧାନ ମିଳିଲା । ଇଉରୋପରୁ ଏସିଆ ଓ ଆଫ୍ରିକାକୁ ଜଳପଥ ଓ ସ୍ଥଳପଥ ଆବିଷ୍କୃତ ହେବାରୁ ଦେଶମାନଙ୍କ ମଧ୍ୟରେ ଯାତାୟାତ ସହଜ ହେଲା ।<br><br>👉 ଉଦାହରଣ: ଅନୁସନ୍ଧାନକାରୀମାନେ ନୂତନ ଅଞ୍ଚଳରେ ବ୍ୟବସାୟିକ ଓ ରାଜନୈତିକ ଲାଭ ଥିବା କଥା ନିଜ ବିବରଣୀରେ ଲେଖିଲେ, ଯାହା ଉପନିବେଶ ସ୍ଥାପନ ପାଇଁ ପଥ ଦେଖାଇଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଞ୍ଚଦଶ ଓ ଷୋଡ଼ଶ ଶତାବ୍ଦୀର ଭୌଗୋଳିକ ଆବିଷ୍କାର ଫଳରେ କ'ଣ ମିଳିଲା ?<br><br><span style='color:green;'>Answer:</span> ଭିନ୍ନ ଭିନ୍ନ ସ୍ଥାନରେ ଅନେକ ନୂତନ ଅଞ୍ଚଳର ସନ୍ଧାନ ମିଳିଲା ।",

"<span style='color:red;'>Q-2:</span> ଜଳପଥ ଓ ସ୍ଥଳପଥ ଆବିଷ୍କାରର ପରିଣାମ କ'ଣ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ଦେଶମାନଙ୍କ ମଧ୍ୟରେ ଯାତାୟାତ ଓ ଯୋଗାଯୋଗର ଅଧିକ ସୁବିଧା ହେଲା ।",

"<span style='color:red;'>Q-3:</span> ଭୌଗୋଳିକ ଅନୁସନ୍ଧାନକାରୀମାନେ ନିଜ ବିବରଣୀରେ କ'ଣ ଉଲ୍ଲେଖ କଲେ ?<br><br><span style='color:green;'>Answer:</span> ନୂତନ ଆବିଷ୍କୃତ ଅଞ୍ଚଳରେ ବ୍ୟବସାୟିକ ଓ ରାଜନୈତିକ ଲାଭ ପାଇଁ ଅନୁକୂଳ ପରିସ୍ଥିତି ଥିବା କଥା ଉଲ୍ଲେଖ କଲେ ।",

"<span style='color:red;'>Q-4:</span> ଭୌଗୋଳିକ ଆବିଷ୍କାର ଉପନିବେଶବାଦ ପାଇଁ କିପରି ସହାୟକ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଉପନିବେଶ ସ୍ଥାପନ ପାଇଁ ପଥ ପ୍ରଦର୍ଶନ କଲା ।"

]
},

{
heading: "NOTE-4: ଉପନିବେଶବାଦର କାରଣ - ଲାଭଜନକ ବ୍ୟବସାୟର ସୁବିଧା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତ ସମେତ ଏସିଆର ଅନେକ ଦେଶରେ ମସଲା, ରେଶମ, ସୁନା, ମୁକ୍ତା ଭଳି ଲାଭଦାୟକ ସାମଗ୍ରୀ ମିଳୁଥିଲା । ଆଫ୍ରିକାରେ ସୁନା, ହୀରା, ହାତୀଦାନ୍ତ ମିଳୁଥିଲା ଏବଂ ଦାସ ବ୍ୟବସାୟ ସବୁଠାରୁ ଲାଭଦାୟକ ଥିଲା ।<br><br>👉 ଉଦାହରଣ: ଇଉରୋପୀୟ ବ୍ୟବସାୟୀମାନେ ଏସିଆରୁ ମସଲା ଓ ରେଶମ ସଂଗ୍ରହ କରି ନିଜ ଦେଶରେ ବିକ୍ରୟ କରି ଲାଭ ପାଉଥିଲେ, ଏଥିପାଇଁ ପର୍ତ୍ତୁଗାଲ, ସ୍ପେନ୍‌, ହଲାଣ୍ଡ, ଫ୍ରାନ୍ସ ଭଳି ରାଷ୍ଟ୍ର ଉପନିବେଶ ପାଇଁ ପ୍ରତିଦ୍ୱନ୍ଦିତା କରୁଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଏସିଆରୁ ଇଉରୋପୀୟମାନେ କେଉଁ ସାମଗ୍ରୀ ସଂଗ୍ରହ କରୁଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ମସଲା, ରୁହା, କାର୍ପାସ ବସ୍ତ୍ର, ରେଶମ, ସୁନା, ମୁକ୍ତା ଓ ପ୍ରାକୃତିକ ଔଷଧ ଭଳି ସାମଗ୍ରୀ ସଂଗ୍ରହ କରୁଥିଲେ ।",

"<span style='color:red;'>Q-2:</span> ଆଫ୍ରିକାରୁ କେଉଁ ଦ୍ରବ୍ୟ ଇଉରୋପୀୟ ବ୍ୟବସାୟୀଙ୍କୁ ଲାଭବାନ୍ କରୁଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସୁନା, ହୀରା, ତମ୍ବା, ମୂଲ୍ୟବାନ କାଠ, ହାତୀଦାନ୍ତ, ରବର ଓ ୟୁରାନିୟମ୍‌ ଭଳି ଦ୍ରବ୍ୟ ଲାଭବାନ୍ କରୁଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଆଫ୍ରିକାରେ ସବୁଠାରୁ ଲାଭଦାୟକ ବ୍ୟବସାୟ କ'ଣ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଦାସ ବ୍ୟବସାୟ ସବୁଠାରୁ ବେଶୀ ଲାଭଦାୟକ ଥିଲା ।",

"<span style='color:red;'>Q-4:</span> କେଉଁ ଇଉରୋପୀୟ ରାଷ୍ଟ୍ରମାନେ ଉପନିବେଶ ପାଇଁ ପ୍ରତିଦ୍ୱନ୍ଦିତା କରୁଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ପର୍ତ୍ତୁଗାଲ, ସ୍ପେନ୍‌, ହଲାଣ୍ଡ ଓ ଫ୍ରାନ୍ସ ପ୍ରଭୃତି ରାଷ୍ଟ୍ର ଏଥିପାଇଁ ପ୍ରତିଦ୍ୱନ୍ଦିତା କରୁଥିଲେ ।"

]
},

{
heading: "NOTE-5: ଉପନିବେଶବାଦର କାରଣ - ଶିଳ୍ପ ବିପ୍ଳବ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଅଷ୍ଟାଦଶ ଶତାବ୍ଦୀରୁ ବିଂଶ ଶତାବ୍ଦୀ ମଧ୍ୟରେ ଅନେକ ନୂତନ ଯନ୍ତ୍ର ଉଦ୍ଭାବନ ହେବାରୁ ଉତ୍ପାଦନ ବଢ଼ିଲା, ଏହାକୁ ଶିଳ୍ପ ବିପ୍ଳବ କୁହାଯାଏ । ଏହା ଇଂଲାଣ୍ଡରେ ଆରମ୍ଭ ହୋଇଥିଲା ।<br><br>👉 ଉଦାହରଣ: ନିଜ ଦେଶରେ ଉତ୍ପାଦିତ ଦ୍ରବ୍ୟ ବିକ୍ରୟ ପାଇଁ ବଜାର ଖୋଜୁଥିବା ଇଉରୋପୀୟ ରାଷ୍ଟ୍ରମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାରେ ବଜାର ସୃଷ୍ଟି କରି ସେଠାରୁ କୋଇଲା, ଲୁହା, ସୁନା ଭଳି କଞ୍ଚାମାଲ ମଧ୍ୟ ସଂଗ୍ରହ କରୁଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଶିଳ୍ପ ବିପ୍ଳବ କେଉଁଠାରେ ଆରମ୍ଭ ହୋଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଶିଳ୍ପ ବିପ୍ଳବ ଇଂଲାଣ୍ଡରେ ଆରମ୍ଭ ହୋଇଥିଲା ।",

"<span style='color:red;'>Q-2:</span> ଶିଳ୍ପ ବିପ୍ଳବ ଫଳରେ କ'ଣ ଘଟିଲା ?<br><br><span style='color:green;'>Answer:</span> କଳ କାରଖାନାରେ ଅଳ୍ପ ଶ୍ରମ ଓ ସମୟରେ ଦ୍ରବ୍ୟର ଉତ୍ପାଦନ ବହୁତ ବଢ଼ିଲା ।",

"<span style='color:red;'>Q-3:</span> ଇଉରୋପୀୟ ରାଷ୍ଟ୍ରମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାରେ ବଜାର କାହିଁକି ଖୋଜୁଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ନିଜ ଦେଶରେ ଅଧିକ ଉତ୍ପାଦିତ ଦ୍ରବ୍ୟ ବିକ୍ରୟ ପାଇଁ ବଜାରର ଆବଶ୍ୟକତା ପଡ଼ିଲା, ତେଣୁ ସେମାନେ ବଜାର ଖୋଜୁଥିଲେ ।",

"<span style='color:red;'>Q-4:</span> ଇଉରୋପୀୟ ଶିଳ୍ପ ପାଇଁ କେଉଁ କଞ୍ଚାମାଲ ଏସିଆ ଓ ଆଫ୍ରିକାରୁ ମିଳୁଥିଲା ?<br><br><span style='color:green;'>Answer:</span> କୋଇଲା, ଲୁହା, ଟିଣ, ସୁନା, ତମ୍ବା ଓ ତୈଳ ଭଳି କଞ୍ଚାମାଲ ମିଳୁଥିଲା ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ଉପନିବେଶବାଦର ପରିଚୟ<br/>ଓ ପ୍ରଥମ ପର୍ଯ୍ୟାୟ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଅର୍ଥ\"]\nA --> I1[\"ଉପନିବେଶର ଅର୍ଥ<br/>ବିଦେଶସ୍ଥ ଆବାସ।\"]\nA --> I2[\"ମାତୃ ଦେଶର ଲାଭ<br/>ପାଇଁ କାର୍ଯ୍ୟରେ ଲଗାଇବା।\"]\nA --> I3[\"ଏହାକୁ ଉପନିବେଶବାଦ<br/>କୁହାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ମୁଖ୍ୟ ଲକ୍ଷ୍ୟ ଓ ପର୍ଯ୍ୟାୟ\"]\nM --> M1[\"ବାଣିଜ୍ୟ ଉନ୍ନତି ଓ<br/>ଆର୍ଥିକ ସମୃଦ୍ଧି ଲକ୍ଷ୍ୟ।\"]\nM --> M2[\"ସାମ୍ରାଜ୍ୟ ବିସ୍ତାର ଓ<br/>ଧର୍ମ ପ୍ରୟ ମଧ୍ୟ କାରଣ।\"]\nM --> M3[\"ଷୋଡ଼ଶ ଶତାବ୍ଦୀରେ<br/>ପ୍ରଥମେ ଆରମ୍ଭ ହେଲା।\"]\nM --> M4[\"ଅଷ୍ଟାଦଶ ଶତାବ୍ଦୀ ଶେଷ<br/>ପର୍ଯ୍ୟନ୍ତ ପ୍ରଥମ ପର୍ଯ୍ୟାୟ।\"]\nM --> M5[\"ଊନବିଂଶ ଶତାବ୍ଦୀରେ<br/>ପୁନରୁତ୍ଥାନ ହେଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଫଳାଫଳ\"]\nC --> C1[\"ନୂତନ ପର୍ଯ୍ୟାୟକୁ ଔପନିବେଶିକ<br/>ସାମ୍ରାଜ୍ୟବାଦ କୁହାଯାଏ।\"]\nC --> C2[\"୧୯୧୪ର ପ୍ରଥମ ବିଶ୍ବଯୁଦ୍ଧର<br/>ଏହା ଏକ କାରଣ ଥିଲା।\"]\nC --> C3[\"ଭୌଗୋଳିକ, ବ୍ୟବସାୟିକ ଓ<br/>ଶିଳ୍ପ କାରଣ ଏଥିପାଇଁ ଦାୟୀ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ଉପନିବେଶବାଦର କାରଣ:<br/>ଭୌଗୋଳିକ ଆବିଷ୍କାର\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପୃଷ୍ଠଭୂମି\"]\nA --> I1[\"ପଞ୍ଚଦଶ, ଷୋଡ଼ଶ ଶତାବ୍ଦୀରେ<br/>ଭୌଗୋଳିକ ଆବିଷ୍କାର ହେଲା।\"]\nA --> I2[\"ଅନେକ ନୂତନ ଅଞ୍ଚଳର<br/>ସନ୍ଧାନ ମିଳିଲା।\"]\nA --> I3[\"ଏସିଆ, ଆଫ୍ରିକାକୁ ଜଳପଥ<br/>ଓ ସ୍ଥଳପଥ ଆବିଷ୍କୃତ ହେଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପ୍ରଭାବ\"]\nM --> M1[\"ଦେଶମାନଙ୍କ ମଧ୍ୟରେ ଯାତାୟାତ,<br/>ଯୋଗାଯୋଗ ସହଜ ହେଲା।\"]\nM --> M2[\"ପ୍ରତ୍ୟେକ ଦେଶ ଅନ୍ୟ ଦେଶ<br/>ବିଷୟରେ ଜ୍ଞାନ ଆହରଣ କଲେ।\"]\nM --> M3[\"ଅନୁସନ୍ଧାନକାରୀ ବ୍ୟବସାୟିକ,<br/>ରାଜନୈତିକ ଲାଭ ଉଲ୍ଲେଖ କଲେ।\"]\nM --> M4[\"ନୂତନ ଅଞ୍ଚଳ ଅନୁକୂଳ<br/>ପରିସ୍ଥିତି ଥିଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଭୌଗୋଳିକ ଆବିଷ୍କାର<br/>ଉପନିବେଶ ପାଇଁ ପଥ ଦେଖାଇଲା।\"]\nC --> C2[\"ଏହା ଉପନିବେଶବାଦର<br/>ପ୍ରଥମ ମୁଖ୍ୟ କାରଣ।\"]\nC --> C3[\"ଆବିଷ୍କାରକଙ୍କ ତାଲିକା<br/>ପ୍ରସ୍ତୁତ କରାଯିବ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ଉପନିବେଶବାଦର କାରଣ:<br/>ଲାଭଜନକ ବ୍ୟବସାୟ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଏସିଆର ସାମଗ୍ରୀ\"]\nA --> I1[\"ମସଲା, ରେଶମ, ସୁନା,<br/>ମୁକ୍ତା ଉପଲବ୍ଧ ଥିଲା।\"]\nA --> I2[\"ଏହି ସାମଗ୍ରୀ ସଂଗ୍ରହ କରି<br/>ଇଉରୋପରେ ବିକ୍ରୟ ହେଲା।\"]\nA --> I3[\"ବ୍ୟବସାୟୀମାନେ ପ୍ରଚୁର<br/>ଲାଭ କରିଥିଲେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଆଫ୍ରିକାର ସାମଗ୍ରୀ ଓ ଦାସ ବ୍ୟବସାୟ\"]\nM --> M1[\"ସୁନା, ହୀରା, ତମ୍ବା,<br/>ହାତୀଦାନ୍ତ ଲାଭଦାୟକ ଥିଲା।\"]\nM --> M2[\"ଦାସ ବ୍ୟବସାୟ ସବୁଠାରୁ<br/>ବେଶୀ ଲାଭଦାୟକ ଥିଲା।\"]\nM --> M3[\"ଆଫ୍ରିକୀୟଙ୍କୁ ଦାସ ଭାବେ<br/>ଆମେରିକାକୁ ରପ୍ତାନୀ କଲେ।\"]\nM --> M4[\"ପର୍ତ୍ତୁଗାଲ, ସ୍ପେନ୍, ହଲାଣ୍ଡ,<br/>ଫ୍ରାନ୍ସ ପ୍ରତିଦ୍ୱନ୍ଦିତାରେ ଲାଗିଲେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"କ୍ରୀତଦାସ ନିଜ ସ୍ଵାଧୀନତା<br/>ବିକ୍ରୟ କରି ଗୋଲାମି କରୁଥିଲେ।\"]\nC --> C2[\"ଲାଭ ଲୋଭ ଉପନିବେଶ<br/>ସ୍ଥାପନରେ ପ୍ରେରଣା ଦେଲା।\"]\nC --> C3[\"ଏହା ଉପନିବେଶବାଦର<br/>ଦ୍ୱିତୀୟ ମୁଖ୍ୟ କାରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ଉପନିବେଶବାଦର କାରଣ:<br/>ଶିଳ୍ପ ବିପ୍ଳବ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଶିଳ୍ପ ବିପ୍ଳବ\"]\nA --> I1[\"ଅଷ୍ଟାଦଶ ଶତାବ୍ଦୀରୁ<br/>ନୂତନ ଯନ୍ତ୍ର ଉଦ୍ଭାବନ ହେଲା।\"]\nA --> I2[\"ଏହା ଇଂଲାଣ୍ଡରେ<br/>ଆରମ୍ଭ ହୋଇଥିଲା।\"]\nA --> I3[\"ଅଳ୍ପ ଶ୍ରମରେ ଦ୍ରବ୍ୟ<br/>ଉତ୍ପାଦନ ବଢ଼ିଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପରିଣାମ\"]\nM --> M1[\"ଅଧ‌ିକ ଉତ୍ପାଦିତ ଦ୍ରବ୍ୟ<br/>ପାଇଁ ବଜାର ଆବଶ୍ୟକ ପଡ଼ିଲା।\"]\nM --> M2[\"ଏସିଆ, ଆଫ୍ରିକାରେ ଶିଳ୍ପ<br/>ବିପ୍ଳବ ହୋଇ ନ ଥିଲା।\"]\nM --> M3[\"ବିନା ପ୍ରତିଯୋଗିତାରେ<br/>ବଜାର ସୃଷ୍ଟି ସହଜ ହେଲା।\"]\nM --> M4[\"କୋଇଲା, ଲୁହା, ସୁନା ଭଳି<br/>କଞ୍ଚାମାଲ ସେଠାରେ ମିଳିଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସାରାଂଶ\"]\nC --> C1[\"ବଜାର ଓ କଞ୍ଚାମାଲ<br/>ଉଭୟ ଆବଶ୍ୟକ ଥିଲା।\"]\nC --> C2[\"ଏହା ଉପନିବେଶ ସ୍ଥାପନକୁ<br/>ପ୍ରୋତ୍ସାହିତ କଲା।\"]\nC --> C3[\"ଏହା ଉପନିବେଶବାଦର<br/>ତୃତୀୟ ମୁଖ୍ୟ କାରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`
  ]


    }  
]
};  
