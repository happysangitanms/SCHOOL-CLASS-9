const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଇତିହାସ "
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9SCP1P1-2.mp3",
    video:  "https://www.youtube.com/embed/jyNYTTROtU4?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9SCP1P1-2.pdf"
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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ଉପନିବେଶବାଦର ପରିଚୟ<br/>ଓ ପ୍ରଥମ ପର୍ଯ୍ୟାୟ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଅର୍ଥ\"]\nA --> I1[\"ଉପନିବେଶର ଅର୍ଥ<br/>ବିଦେଶସ୍ଥ ଆବାସ।\"]\nA --> I2[\"ମାତୃ ଦେଶର ଲାଭ<br/>ପାଇଁ କାର୍ଯ୍ୟରେ ଲଗାଇବା।\"]\nA --> I3[\"ଏହାକୁ ଉପନିବେଶବାଦ<br/>କୁହାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ମୁଖ୍ୟ ଲକ୍ଷ୍ୟ ଓ ପର୍ଯ୍ୟାୟ\"]\nM --> M1[\"ବାଣିଜ୍ୟ ଉନ୍ନତି ଓ<br/>ଆର୍ଥିକ ସମୃଦ୍ଧି ଲକ୍ଷ୍ୟ।\"]\nM --> M2[\"ସାମ୍ରାଜ୍ୟ ବିସ୍ତାର ଓ<br/>ଧର୍ମ ପ୍ରୟ ମଧ୍ୟ କାରଣ।\"]\nM --> M3[\"ଷୋଡ଼ଶ ଶତାବ୍ଦୀରେ<br/>ପ୍ରଥମେ ଆରମ୍ଭ ହେଲା।\"]\nM --> M4[\"ଅଷ୍ଟାଦଶ ଶତାବ୍ଦୀ ଶେଷ<br/>ପର୍ଯ୍ୟନ୍ତ ପ୍ରଥମ ପର୍ଯ୍ୟାୟ।\"]\nM --> M5[\"ଊନବିଂଶ ଶତାବ୍ଦୀରେ<br/>ପୁନରୁତ୍ଥାନ ହେଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଫଳାଫଳ\"]\nC --> C1[\"ନୂତନ ପର୍ଯ୍ୟାୟକୁ ଔପନିବେଶିକ<br/>ସାମ୍ରାଜ୍ୟବାଦ କୁହାଯାଏ।\"]\nC --> C2[\"୧୯୧୪ର ପ୍ରଥମ ବିଶ୍ବଯୁଦ୍ଧର<br/>ଏହା ଏକ କାରଣ ଥିଲା।\"]\nC --> C3[\"ଭୌଗୋଳିକ, ବ୍ୟବସାୟିକ ଓ<br/>ଶିଳ୍ପ କାରଣ ଏଥିପାଇଁ ଦାୟୀ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ଉପନିବେଶବାଦର କାରଣ:<br/>ଭୌଗୋଳିକ ଆବିଷ୍କାର\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପୃଷ୍ଠଭୂମି\"]\nA --> I1[\"ପଞ୍ଚଦଶ, ଷୋଡ଼ଶ ଶତାବ୍ଦୀରେ<br/>ଭୌଗୋଳିକ ଆବିଷ୍କାର ହେଲା।\"]\nA --> I2[\"ଅନେକ ନୂତନ ଅଞ୍ଚଳର<br/>ସନ୍ଧାନ ମିଳିଲା।\"]\nA --> I3[\"ଏସିଆ, ଆଫ୍ରିକାକୁ ଜଳପଥ<br/>ଓ ସ୍ଥଳପଥ ଆବିଷ୍କୃତ ହେଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପ୍ରଭାବ\"]\nM --> M1[\"ଦେଶମାନଙ୍କ ମଧ୍ୟରେ ଯାତାୟାତ,<br/>ଯୋଗାଯୋଗ ସହଜ ହେଲା।\"]\nM --> M2[\"ପ୍ରତ୍ୟେକ ଦେଶ ଅନ୍ୟ ଦେଶ<br/>ବିଷୟରେ ଜ୍ଞାନ ଆହରଣ କଲେ।\"]\nM --> M3[\"ଅନୁସନ୍ଧାନକାରୀ ବ୍ୟବସାୟିକ,<br/>ରାଜନୈତିକ ଲାଭ ଉଲ୍ଲେଖ କଲେ।\"]\nM --> M4[\"ନୂତନ ଅଞ୍ଚଳ ଅନୁକୂଳ<br/>ପରିସ୍ଥିତି ଥିଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଭୌଗୋଳିକ ଆବିଷ୍କାର<br/>ଉପନିବେଶ ପାଇଁ ପଥ ଦେଖାଇଲା।\"]\nC --> C2[\"ଏହା ଉପନିବେଶବାଦର<br/>ପ୍ରଥମ ମୁଖ୍ୟ କାରଣ।\"]\nC --> C3[\"ଆବିଷ୍କାରକଙ୍କ ତାଲିକା<br/>ପ୍ରସ୍ତୁତ କରାଯିବ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ଉପନିବେଶବାଦର କାରଣ:<br/>ଲାଭଜନକ ବ୍ୟବସାୟ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଏସିଆର ସାମଗ୍ରୀ\"]\nA --> I1[\"ମସଲା, ରେଶମ, ସୁନା,<br/>ମୁକ୍ତା ଉପଲବ୍ଧ ଥିଲା।\"]\nA --> I2[\"ଏହି ସାମଗ୍ରୀ ସଂଗ୍ରହ କରି<br/>ଇଉରୋପରେ ବିକ୍ରୟ ହେଲା।\"]\nA --> I3[\"ବ୍ୟବସାୟୀମାନେ ପ୍ରଚୁର<br/>ଲାଭ କରିଥିଲେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଆଫ୍ରିକାର ସାମଗ୍ରୀ ଓ ଦାସ ବ୍ୟବସାୟ\"]\nM --> M1[\"ସୁନା, ହୀରା, ତମ୍ବା,<br/>ହାତୀଦାନ୍ତ ଲାଭଦାୟକ ଥିଲା।\"]\nM --> M2[\"ଦାସ ବ୍ୟବସାୟ ସବୁଠାରୁ<br/>ବେଶୀ ଲାଭଦାୟକ ଥିଲା।\"]\nM --> M3[\"ଆଫ୍ରିକୀୟଙ୍କୁ ଦାସ ଭାବେ<br/>ଆମେରିକାକୁ ରପ୍ତାନୀ କଲେ।\"]\nM --> M4[\"ପର୍ତ୍ତୁଗାଲ, ସ୍ପେନ୍, ହଲାଣ୍ଡ,<br/>ଫ୍ରାନ୍ସ ପ୍ରତିଦ୍ୱନ୍ଦିତାରେ ଲାଗିଲେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"କ୍ରୀତଦାସ ନିଜ ସ୍ଵାଧୀନତା<br/>ବିକ୍ରୟ କରି ଗୋଲାମି କରୁଥିଲେ।\"]\nC --> C2[\"ଲାଭ ଲୋଭ ଉପନିବେଶ<br/>ସ୍ଥାପନରେ ପ୍ରେରଣା ଦେଲା।\"]\nC --> C3[\"ଏହା ଉପନିବେଶବାଦର<br/>ଦ୍ୱିତୀୟ ମୁଖ୍ୟ କାରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ଉପନିବେଶବାଦର କାରଣ:<br/>ଶିଳ୍ପ ବିପ୍ଳବ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଶିଳ୍ପ ବିପ୍ଳବ\"]\nA --> I1[\"ଅଷ୍ଟାଦଶ ଶତାବ୍ଦୀରୁ<br/>ନୂତନ ଯନ୍ତ୍ର ଉଦ୍ଭାବନ ହେଲା।\"]\nA --> I2[\"ଏହା ଇଂଲାଣ୍ଡରେ<br/>ଆରମ୍ଭ ହୋଇଥିଲା।\"]\nA --> I3[\"ଅଳ୍ପ ଶ୍ରମରେ ଦ୍ରବ୍ୟ<br/>ଉତ୍ପାଦନ ବଢ଼ିଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପରିଣାମ\"]\nM --> M1[\"ଅଧ‌ିକ ଉତ୍ପାଦିତ ଦ୍ରବ୍ୟ<br/>ପାଇଁ ବଜାର ଆବଶ୍ୟକ ପଡ଼ିଲା।\"]\nM --> M2[\"ଏସିଆ, ଆଫ୍ରିକାରେ ଶିଳ୍ପ<br/>ବିପ୍ଳବ ହୋଇ ନ ଥିଲା।\"]\nM --> M3[\"ବିନା ପ୍ରତିଯୋଗିତାରେ<br/>ବଜାର ସୃଷ୍ଟି ସହଜ ହେଲା।\"]\nM --> M4[\"କୋଇଲା, ଲୁହା, ସୁନା ଭଳି<br/>କଞ୍ଚାମାଲ ସେଠାରେ ମିଳିଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସାରାଂଶ\"]\nC --> C1[\"ବଜାର ଓ କଞ୍ଚାମାଲ<br/>ଉଭୟ ଆବଶ୍ୟକ ଥିଲା।\"]\nC --> C2[\"ଏହା ଉପନିବେଶ ସ୍ଥାପନକୁ<br/>ପ୍ରୋତ୍ସାହିତ କଲା।\"]\nC --> C3[\"ଏହା ଉପନିବେଶବାଦର<br/>ତୃତୀୟ ମୁଖ୍ୟ କାରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`
  ]
