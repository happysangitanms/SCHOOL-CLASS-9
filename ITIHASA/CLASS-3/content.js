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
            word: "IMPERIALISM",
            odia: "ସାମ୍ରାଜ୍ୟବାଦ",
            emoji: "👑",
            odiaUse: "ସାମ୍ରାଜ୍ୟବାଦ ଅର୍ଥ ଅନ୍ୟ ଦେଶ ଉପରେ ଶାସନ ବିସ୍ତାର କରିବାର ନୀତି । ପାଶ୍ଚାତ୍ୟ ଦେଶମାନେ ସାମ୍ରାଜ୍ୟବାଦ ନୀତି ଅନୁସରଣ କରି ଏସିଆ ଓ ଆଫ୍ରିକାରେ ଉପନିବେଶ ସ୍ଥାପନ କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLONY",
            odia: "ଉପନିବେଶ",
            emoji: "🏴",
            odiaUse: "ଉପନିବେଶ ଅର୍ଥ ପରାଧୀନ ଦେଶ, ଯାହା ଅନ୍ୟ ଏକ ଶକ୍ତିଶାଳୀ ଦେଶ ଦ୍ୱାରା ଶାସିତ ହୁଏ । ଏସିଆ ଓ ଆଫ୍ରିକାର ଅନେକ ଦେଶ ଉପନିବେଶରେ ପରିଣତ ହେଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CONTINENT",
            odia: "ମହାଦେଶ",
            emoji: "🌍",
            odiaUse: "ମହାଦେଶ ଅର୍ଥ ପୃଥିବୀର ବଡ଼ ଭୂଖଣ୍ଡ । ଏସିଆ ଓ ଆଫ୍ରିକା ମହାଦେଶର ଦେଶମାନେ ପାଶ୍ଚାତ୍ୟ ପ୍ରଭାବରେ ପଡ଼ିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STEAMSHIP",
            odia: "ବାଷ୍ପୀୟ ଜାହାଜ",
            emoji: "🚢",
            odiaUse: "ବାଷ୍ପୀୟ ଜାହାଜ ଅର୍ଥ ବାଷ୍ପ ଶକ୍ତିରେ ଚାଲୁଥିବା ଜାହାଜ । ବାଷ୍ପୀୟ ଜାହାଜର ଉଭାବନ ଯୋଗେ ସମୁଦ୍ର ଯାତ୍ରା ସହଜ ହେଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STEAM ENGINE",
            odia: "ବାଷ୍ପୀୟ ଇଞ୍ଜିନ",
            emoji: "🚂",
            odiaUse: "ବାଷ୍ପୀୟ ଇଞ୍ଜିନ ଅର୍ଥ ବାଷ୍ପ ଶକ୍ତିରେ ଚାଲୁଥିବା ଯନ୍ତ୍ର । ଷ୍ଟିଫେନସନ ପ୍ରଥମ ବାଷ୍ପୀୟ ଇଞ୍ଜିନ ନିର୍ମାଣ କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RAILWAY",
            odia: "ରେଳପଥ",
            emoji: "🛤️",
            odiaUse: "ରେଳପଥ ଅର୍ଥ ରେଳ ଗାଡ଼ି ଚାଲିବା ପାଇଁ ତିଆରି ହୋଇଥିବା ପଥ । ରେଳପଥର ନିର୍ମାଣ ଯୋଗେ ଉପନିବେଶ ଅଞ୍ଚଳରେ ପରିବହନ ସହଜ ହେଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRANSPORT",
            odia: "ପରିବହନ",
            emoji: "🚗",
            odiaUse: "ପରିବହନ ଅର୍ଥ ଏକ ସ୍ଥାନରୁ ଅନ୍ୟ ସ୍ଥାନକୁ ଲୋକ ବା ଦ୍ରବ୍ୟ ନେବା ବ୍ୟବସ୍ଥା । ପରିବହନ ଓ ଯୋଗାଯୋଗର ଉନ୍ନତି ଯୋଗେ ଦୂର ଦେଶ ପାଖକୁ ଆସିଗଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMMUNICATION",
            odia: "ଯୋଗାଯୋଗ",
            emoji: "📡",
            odiaUse: "ଯୋଗାଯୋଗ ଅର୍ଥ ଖବର ବା ସୂଚନା ଆଦାନ-ପ୍ରଦାନ କରିବା ବ୍ୟବସ୍ଥା । ଯୋଗାଯୋଗର ଉନ୍ନତି ପାଶ୍ଚାତ୍ୟ ଓ ଉପନିବେଶ ମଧ୍ୟରେ ସମ୍ପର୍କ ବଢ଼ାଇଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INVENTION",
            odia: "ଉଭାବନ",
            emoji: "💡",
            odiaUse: "ଉଭାବନ ଅର୍ଥ ନୂଆ କିଛି ତିଆରି କରିବା । ବାଷ୍ପୀୟ ଜାହାଜ ଓ ଇଞ୍ଜିନର ଉଭାବନ ପାଶ୍ଚାତ୍ୟ ଦେଶକୁ ଶକ୍ତିଶାଳୀ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PROPAGATION",
            odia: "ପ୍ରଚାର",
            emoji: "📢",
            odiaUse: "ପ୍ରଚାର ଅର୍ଥ କୌଣସି ବିଷୟକୁ ବ୍ୟାପକ ଭାବେ ଫଇଲାଇବା । ଧର୍ମ ଓ ସଂସ୍କୃତିର ପ୍ରଚାର ଉପନିବେଶବାଦକୁ ବଢ଼ାଇବାରେ ସାହାଯ୍ୟ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHRISTIANITY",
            odia: "ଖ୍ରୀଷ୍ଟଧର୍ମ",
            emoji: "✝️",
            odiaUse: "ଖ୍ରୀଷ୍ଟଧର୍ମ ଅର୍ଥ ଯୀଶୁ ଖ୍ରୀଷ୍ଟଙ୍କ ଶିକ୍ଷାରେ ଆଧାରିତ ଧର୍ମ । ମିଶନାରୀମାନେ ଉପନିବେଶ ଅଞ୍ଚଳରେ ଖ୍ରୀଷ୍ଟଧର୍ମର ପ୍ରଚାର କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MISSIONARY",
            odia: "ମିଶନାରୀ",
            emoji: "⛪",
            odiaUse: "ମିଶନାରୀ ଅର୍ଥ ଧର୍ମ ପ୍ରଚାର କରିବା ପାଇଁ ପଠାଯାଇଥିବା ବ୍ୟକ୍ତି । ମିଶନାରୀମାନେ ଶିକ୍ଷା ଓ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ମାଧ୍ୟମରେ ଧର୍ମ ପ୍ରଚାର କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CIVILIZATION",
            odia: "ସଭ୍ୟତା",
            emoji: "🏛️",
            odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ଏକ ଉନ୍ନତ ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ ଜୀବନଶୈଳୀ । ପାଶ୍ଚାତ୍ୟ ଦେଶମାନେ ନିଜକୁ ଶ୍ରେଷ୍ଠ ସଭ୍ୟତାର ବାହକ ବୋଲି ଭାବୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ADMINISTRATION",
            odia: "ଶାସନ",
            emoji: "🏢",
            odiaUse: "ଶାସନ ଅର୍ଥ ଦେଶ ବା ରାଜ୍ୟ ଚଳାଇବା ବ୍ୟବସ୍ଥା । ଅନେକ ଏସିଆ ଓ ଆଫ୍ରିକୀୟ ଦେଶରେ ଦୁର୍ବଳ ଶାସନ ଥିଲା, ଯାହା ଉପନିବେଶବାଦକୁ ସହଜ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WEAK RULE",
            odia: "ଦୁର୍ବଳ ଶାସନ",
            emoji: "😔",
            odiaUse: "ଦୁର୍ବଳ ଶାସନ ଅର୍ଥ ଅଦକ୍ଷ ଓ ଅସକ୍ଷମ ପ୍ରଶାସନ । ଉନବିଂଶ ଶତାବ୍ଦୀରେ ଏସିଆ ଓ ଆଫ୍ରିକାର ଅନେକ ଦେଶରେ ଶାସନ ଅତ୍ୟନ୍ତ ଦୁର୍ବଳ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BACKWARD",
            odia: "ଅନୁନ୍ନତ",
            emoji: "📉",
            odiaUse: "ଅନୁନ୍ନତ ଅର୍ଥ ବିକାଶ ନହୋଇଥିବା ବା ପଛରେ ପଡ଼ିଥିବା । ଆଫ୍ରିକାର ଦେଶମାନଙ୍କରେ ବିଜ୍ଞାନ ଓ କାରିଗରୀ ବିଦ୍ୟା ଅନୁନ୍ନତ ପର୍ଯ୍ୟାୟରେ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TECHNOLOGY",
            odia: "କାରିଗରୀ ବିଦ୍ୟା",
            emoji: "⚙️",
            odiaUse: "କାରିଗରୀ ବିଦ୍ୟା ଅର୍ଥ ଯନ୍ତ୍ର ଓ ଉପକରଣ ତିଆରି କରିବାର ଜ୍ଞାନ । ଆଫ୍ରିକୀୟ ଦେଶମାନଙ୍କରେ ବିଜ୍ଞାନ ଓ କାରିଗରୀ ବିଦ୍ୟା ଉନ୍ନତ ପର୍ଯ୍ୟାୟରେ ପହଞ୍ଚି ପାରି ନ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SELF-DEFENSE",
            odia: "ଆତ୍ମରକ୍ଷା",
            emoji: "🛡️",
            odiaUse: "ଆତ୍ମରକ୍ଷା ଅର୍ଥ ନିଜକୁ ବିପଦରୁ ରକ୍ଷା କରିବା । ଅନୁନ୍ନତ ପ୍ରଯୁକ୍ତି ଯୋଗୁଁ ସେହି ଲୋକମାନେ ଆକ୍ରମଣକାରୀଙ୍କ ବିରୁଦ୍ଧରେ ଆତ୍ମରକ୍ଷା କରିପାରିଲେ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPLOITATION",
            odia: "ଶୋଷଣ",
            emoji: "⛏️",
            odiaUse: "ଶୋଷଣ ଅର୍ଥ କାହାର ଅନ୍ୟାୟ ଲାଭ ଉଠାଇବା । ଉପନିବେଶବାଦୀମାନେ ଆକ୍ରାନ୍ତ ଦେଶର ଧନ-ସମ୍ପତ୍ତିର ଶୋଷଣ କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MILITARY SUPERIORITY",
            odia: "ସାମରିକ ଶ୍ରେଷ୍ଠତା",
            emoji: "⚔️",
            odiaUse: "ସାମରିକ ଶ୍ରେଷ୍ଠତା ଅର୍ଥ ଅସ୍ତ୍ରଶସ୍ତ୍ର ଓ ସେନାରେ ଅନ୍ୟଠାରୁ ଅଧିକ ଶକ୍ତିଶାଳୀ ହେବା । ପାଶ୍ଚାତ୍ୟ ଦେଶମାନେ ସାମରିକ ଶ୍ରେଷ୍ଠତା ଯୋଗୁଁ ଅନ୍ୟ ଦେଶକୁ ଜୟ କରିପାରିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FAVOURABLE CIRCUMSTANCES",
            odia: "ଅନୁକୂଳ ପରିସ୍ଥିତି",
            emoji: "✅",
            odiaUse: "ଅନୁକୂଳ ପରିସ୍ଥିତି ଅର୍ଥ କାର୍ଯ୍ୟ ସଫଳ ହେବା ପାଇଁ ସହାୟକ ଅବସ୍ଥା । ଅନେକ ଅନୁକୂଳ ପରିସ୍ଥିତି ଯୋଗେ ଉପନିବେଶବାଦୀମାନେ ସହଜରେ ଦେଶ ଅଧିକାର କରିପାରିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ESTABLISHED",
            odia: "ପ୍ରତିଷ୍ଠିତ",
            emoji: "🏗️",
            odiaUse: "ପ୍ରତିଷ୍ଠିତ ଅର୍ଥ ସ୍ଥାପିତ ହୋଇ ମଜବୁତ ହୋଇଥିବା । ଏହି ପରିସ୍ଥିତିରେ ଉପନିବେଶବାଦୀମାନେ ପ୍ରତିଷ୍ଠିତ ଖଣି ଓ କାରଖାନାରୁ ଲାଭ ଉଠାଇଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ଏସିଆ ଓ ଆଫ୍ରୀକାରେ ପ୍ରତିରୋଧର ଅଭାବ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଏସିଆ ଓ ଆଫ୍ରୀକାରେ ପୂର୍ବରୁ ମଧ୍ୟସ୍ଥାୟୀ ଶାସନ ଚଳୁଥିଲା । ଲୋକମାନେ ଏକ ବଡ଼ ଶାସକ ପରିବର୍ତ୍ତେ ନିଜ ନିଜ ସ୍ଥାନୀୟ ମୁଖ୍ୟଙ୍କ ପ୍ରତି ଆନୁଗତ୍ୟ ପ୍ରଦର୍ଶନ କରୁଥିଲେ । ସେମାନଙ୍କ ପାଖରେ ଉନ୍ନତ ପ୍ରତିରକ୍ଷା ବ୍ୟବସ୍ଥା ନ ଥିଲା, ତେଣୁ ଉପନିବେଶିକ ଶକ୍ତିମାନେ ସହଜରେ ସେମାନଙ୍କୁ ପରାସ୍ତ କରିପାରୁଥିଲେ ।<br><br>👉 ଉଦାହରଣ: ପାରିଶ୍ରମିକ ପାଇବା ଆଶାରେ ଅନେକ ଏସିଆ ଓ ଆଫ୍ରୀକୀ ଲୋକ ଉପନିବେଶିକ ସୈନ୍ୟବାହିନୀରେ ଯୋଗ ଦେଇ କାମ କରୁଥିଲେ । ଏହାଦ୍ୱାରା ନିଜ ଦେଶର ପ୍ରତିରୋଧ ଶକ୍ତି ଆହୁରି ଦୁର୍ବଳ ହୋଇଗଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଏସିଆ ଓ ଆଫ୍ରୀକାର ଲୋକମାନେ କାହା ପ୍ରତି ଆନୁଗତ୍ୟ ପ୍ରଦର୍ଶନ କରୁଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ସେମାନେ ନିଜ ନିଜ ସ୍ଥାନୀୟ ମୁଖ୍ୟଙ୍କ ପ୍ରତି ଆନୁଗତ୍ୟ ପ୍ରଦର୍ଶନ କରୁଥିଲେ ।",

"<span style='color:red;'>Q-2:</span> ଉପନିବେଶିକ ଶାସକମାନେ ଏସିଆ ଓ ଆଫ୍ରୀକାକୁ କାହିଁକି ସହଜରେ ଜୟ କରିପାରିଲେ ?<br><br><span style='color:green;'>Answer:</span> କାରଣ ସେଠାରେ ଉନ୍ନତ ପ୍ରତିରକ୍ଷା ବ୍ୟବସ୍ଥା ନ ଥିଲା ଓ ଶାସନ ମଧ୍ୟସ୍ଥାୟୀ ଥିଲା ।",

"<span style='color:red;'>Q-3:</span> କେଉଁ ଲୋକମାନେ ଉପନିବେଶିକ ସୈନ୍ୟବାହିନୀରେ ଯୋଗ ଦେଉଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ପାରିଶ୍ରମିକ ପାଇବା ଆଶାରେ ଅନେକ ଏସିଆ ଓ ଆଫ୍ରୀକୀ ଲୋକ ଉପନିବେଶିକ ସୈନ୍ୟବାହିନୀରେ ଯୋଗ ଦେଉଥିଲେ ।",

"<span style='color:red;'>Q-4:</span> ସ୍ଥାନୀୟ ଲୋକମାନେ ସୈନ୍ୟବାହିନୀରେ ଯୋଗ ଦେବାର ପରିଣାମ କ'ଣ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହାଦ୍ୱାରା ସେମାନଙ୍କ ନିଜ ଦେଶର ପ୍ରତିରୋଧ ଶକ୍ତି ଆହୁରି ଦୁର୍ବଳ ହୋଇଗଲା ।"

]
},

{
heading: "NOTE-2: ପରିବହନ ଓ ଯୋଗାଯୋଗର ଉନ୍ନତି :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବାଷ୍ପୀୟ ଜାହାଜର ଉଭାବନ ଦ୍ୱାରା ଏସିଆ ଓ ଆଫ୍ରୀକାକୁ ଯାତାୟାତ ସହଜ ଓ ଶୀଘ୍ର ହୋଇଗଲା । ରେଳପଥ, ସ୍ଥଳପଥ ଓ ଜଳପଥ ନିର୍ମାଣ ହେବା ଫଳରେ ଦୂର ଅଞ୍ଚଳକୁ ସୈନ୍ୟ ଓ ସାମଗ୍ରୀ ପଠାଇବା ସହଜ ହେଲା ।<br><br>👉 ଉଦାହରଣ: ୧୮୨୯ ମସିହାରେ ଜେଓର୍ଜ ଷ୍ଟିଫେନ୍‌ସନ୍‌ 'ରକେଟ' ନାମକ ପ୍ରଥମ ବାଷ୍ପଚାଳିତ ରେଳଗାଡ଼ି ଲିଭରପୁଲରୁ ମାଞ୍ଚେଷ୍ଟର ପର୍ଯ୍ୟନ୍ତ ଚଳାଇଥିଲେ । ୧୮୪୧ ମସିହାରେ ଆଫ୍ରୀକାରେ ପ୍ରଥମ ରେଳବାଇ ଆରମ୍ଭ ହୋଇଥିଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବାଷ୍ପୀୟ ଜାହାଜର ଉଭାବନ ଉପନିବେଶ ସ୍ଥାପନରେ କିପରି ସାହାଯ୍ୟ କଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଦ୍ୱାରା ଏସିଆ ଓ ଆଫ୍ରୀକାକୁ ଯାତାୟାତ ସହଜ ଓ ଶୀଘ୍ର ହେଲା ।",

"<span style='color:red;'>Q-2:</span> ରେଳପଥ ନିର୍ମାଣ ଉପନିବେଶ ରାଷ୍ଟ୍ରମାନଙ୍କୁ କେଉଁ ସୁବିଧା ଦେଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଦ୍ୱାରା ଦୂର ଅଞ୍ଚଳକୁ ସୈନ୍ୟ ଓ ସାମଗ୍ରୀ ପଠାଇବା ସହଜ ହେଲା ।",

"<span style='color:red;'>Q-3:</span> ପ୍ରଥମ ବାଷ୍ପଚାଳିତ ରେଳଗାଡ଼ି କେଉଁ ନାମରେ ପରିଚିତ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା 'ରକେଟ' ନାମରେ ପରିଚିତ ଥିଲା, ଯାହା ଜେଓର୍ଜ ଷ୍ଟିଫେନ୍‌ସନ୍‌ ନିର୍ମାଣ କରିଥିଲେ ।",

"<span style='color:red;'>Q-4:</span> ଆଫ୍ରୀକାରେ ପ୍ରଥମ ରେଳବାଇ କେବେ ଆରମ୍ଭ ହୋଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ୧୮୪୧ ମସିହାରେ ଆଫ୍ରୀକାରେ ପ୍ରଥମ ରେଳବାଇ ଆରମ୍ଭ ହୋଇଥିଲା ।"

]
},

{
heading: "NOTE-3: ଧର୍ମ ଓ ସଂସ୍କୃତିର ପ୍ରଚାର :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଉପନିବେଶିକ ଶକ୍ତିମାନେ ନିଜର ପାଶ୍ଚାତ୍ୟ ଧର୍ମ ଓ ସଂସ୍କୃତିକୁ ଅନ୍ୟ ଅଞ୍ଚଳରେ ବିସ୍ତାର କରିବାକୁ ଚାହୁଁଥିଲେ । ସେମାନେ ଏହାକୁ ନିଜର ନୈତିକ କର୍ତ୍ତବ୍ୟ ବୋଲି ମାନୁଥିଲେ ।<br><br>👉 ଉଦାହରଣ: ଏସିଆ ଓ ଆଫ୍ରୀକାର ମୂଳ ଅଧିବାସୀମାନେ ଉପନିବେଶିକମାନଙ୍କୁ ସଭ୍ୟ ଓ ସମୃଦ୍ଧ ଭାବି ସେମାନଙ୍କ ଧର୍ମ ଓ ଆଚରଣକୁ ଅନୁସରଣ କରିବାକୁ ଲାଗିଲେ । ଏହା ଉପନିବେଶିକମାନଙ୍କୁ ଅଧିକ ଅଞ୍ଚଳରେ ଉପନିବେଶ ସ୍ଥାପନ କରିବାକୁ ଉତ୍ସାହିତ କଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଉପନିବେଶିକ ଶକ୍ତିମାନେ କେଉଁ ଉଦ୍ଦେଶ୍ୟରେ ପାଶ୍ଚାତ୍ୟ ସଂସ୍କୃତି ପ୍ରଚାର କରୁଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ସେମାନେ ନିଜ ଧର୍ମ ଓ ସଂସ୍କୃତିକୁ ଅନ୍ୟ ଅଞ୍ଚଳରେ ବିସ୍ତାର କରିବାକୁ ଚାହୁଁଥିଲେ ।",

"<span style='color:red;'>Q-2:</span> ଉପନିବେଶିକମାନେ ଉପନିବେଶ ସ୍ଥାପନକୁ କେଉଁ ଭାବରେ ଦେଖୁଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ସେମାନେ ଏହାକୁ ନିଜର ନୈତିକ କର୍ତ୍ତବ୍ୟ ବୋଲି ଭାବୁଥିଲେ ।",

"<span style='color:red;'>Q-3:</span> ଏସିଆ ଓ ଆଫ୍ରୀକାର ମୂଳ ଅଧିବାସୀମାନେ କ'ଣ କଲେ ?<br><br><span style='color:green;'>Answer:</span> ଅନେକ ମୂଳ ଅଧିବାସୀ ଉପନିବେଶିକମାନଙ୍କ ଧର୍ମ ଓ ଆଚରଣକୁ ଅନୁସରଣ କରିବାକୁ ଲାଗିଲେ ।",

"<span style='color:red;'>Q-4:</span> ଏହି ପ୍ରଚାର ଉପନିବେଶ ସ୍ଥାପନରେ କେଉଁ ଭୂମିକା ନେଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଉପନିବେଶିକମାନଙ୍କୁ ଉତ୍ସାହିତ କରି ଅଧିକ ଅଞ୍ଚଳରେ ଉପନିବେଶ ସ୍ଥାପନ କରାଇଲା ।"

]
},

{
heading: "NOTE-4: ଦୁର୍ବଳ ଶାସନ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଊନବିଂଶ ଶତାବ୍ଦୀରେ ଏସିଆ ଓ ଆଫ୍ରୀକା ମହାଦେଶରେ ଶାସନ ଅତ୍ୟନ୍ତ ଦୁର୍ବଳ ଥିଲା । ଅନେକ ନୂଆ ଜାତୀୟ ରାଷ୍ଟ୍ର ସୃଷ୍ଟି ହୋଇଥିଲେ ମଧ୍ୟ ସେମାନଙ୍କ ଶାସନ ବ୍ୟବସ୍ଥା ମଜବୁତ ନ ଥିଲା ।<br><br>👉 ଉଦାହରଣ: ଦୁର୍ବଳ ଶାସନ ଥିବା ଅଞ୍ଚଳକୁ ଉପନିବେଶିକ ଶକ୍ତିମାନେ ଅଧିକ ସହଜରେ ନିଜ ଅଧୀନକୁ ଆଣିପାରୁଥିଲେ, ଯେହେତୁ ସେଠାରେ ପ୍ରତିରୋଧ କରିବାକୁ ମଜବୁତ ଶାସକ ନ ଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଊନବିଂଶ ଶତାବ୍ଦୀରେ ଏସିଆ ଓ ଆଫ୍ରୀକାର ଶାସନ କେମିତି ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହି ମହାଦେଶମାନଙ୍କରେ ଶାସନ ଅତ୍ୟନ୍ତ ଦୁର୍ବଳ ଥିଲା ।",

"<span style='color:red;'>Q-2:</span> ଦୁର୍ବଳ ଶାସନର ପରିଣାମ କ'ଣ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଦ୍ୱାରା ଉପନିବେଶିକ ଶକ୍ତିମାନେ ଏହି ଅଞ୍ଚଳରେ ସହଜରେ ପ୍ରଭାବ ବିସ୍ତାର କରିପାରିଲେ ।",

"<span style='color:red;'>Q-3:</span> ନୂଆ ଜାତୀୟ ରାଷ୍ଟ୍ର ସୃଷ୍ଟି ହେଲେ ମଧ୍ୟ କେଉଁ ସମସ୍ୟା ରହିଲା ?<br><br><span style='color:green;'>Answer:</span> ନୂଆ ରାଷ୍ଟ୍ରମାନଙ୍କର ଶାସନ ବ୍ୟବସ୍ଥା ମଧ୍ୟ ଦୁର୍ବଳ ରହିଲା ।",

"<span style='color:red;'>Q-4:</span> ଦୁର୍ବଳ ଶାସନ ଉପନିବେଶବାଦକୁ କିପରି ସାହାଯ୍ୟ କଲା ?<br><br><span style='color:green;'>Answer:</span> ଦୁର୍ବଳ ଶାସନ ଥିବା ଅଞ୍ଚଳକୁ ଉପନିବେଶିକମାନେ ଅଧିକ ସହଜରେ ନିଜ ଅଧୀନକୁ ଆଣିପାରିଲେ ।"

]
},

{
heading: "NOTE-5: ଅନ୍ୟାନ୍ୟ ଅନୁକୂଳ ପରିସ୍ଥିତି :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଏସିଆ ଓ ଆଫ୍ରୀକାର ସାମରିକ ଓ ଭୌଗୋଳିକ ଗୁରୁତ୍ୱ ଅନେକ ଉପନିବେଶିକ ରାଷ୍ଟ୍ରକୁ ଆକୃଷ୍ଟ କଲା । ଏଠାରେ ବିଜ୍ଞାନ ଓ କାରିଗରୀ ଅନୁନ୍ନତ ଥିଲା, ତେଣୁ ସ୍ଥାନୀୟ ଲୋକମାନେ ଉପନିବେଶିକ ଦେଶମାନଙ୍କ ସାମଗ୍ରୀ ଉପରେ ନିର୍ଭର କରିବାକୁ ପଡ଼ିଲା ।<br><br>👉 ଉଦାହରଣ: ଏସିଆ ଓ ଆଫ୍ରୀକାରେ ବହୁସଂଖ୍ୟାରେ ମାନବ ସମ୍ପଦ ଉପଲବ୍ଧ ଥିଲା, ଯାହା ଉପନିବେଶିକ ଶକ୍ତିମାନେ ମଜୁରି ଓ ସୈନ୍ୟ ଭାବରେ ବ୍ୟବହାର କରୁଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଏସିଆ ଓ ଆଫ୍ରୀକାର କେଉଁ ଗୁରୁତ୍ୱ ଉପନିବେଶିକ ରାଷ୍ଟ୍ରମାନଙ୍କୁ ଆକୃଷ୍ଟ କଲା ?<br><br><span style='color:green;'>Answer:</span> ସେମାନଙ୍କର ସାମରିକ ଓ ଭୌଗୋଳିକ ଗୁରୁତ୍ୱ ଉପନିବେଶିକ ରାଷ୍ଟ୍ରମାନଙ୍କୁ ଆକୃଷ୍ଟ କଲା ।",

"<span style='color:red;'>Q-2:</span> ଏସିଆ ଓ ଆଫ୍ରୀକାର ବିଜ୍ଞାନ ଓ କାରିଗରୀ ସ୍ଥିତି କେମିତି ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେଠାରେ ବିଜ୍ଞାନ ଓ କାରିଗରୀ ଅନୁନ୍ନତ ଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଅନୁନ୍ନତ କାରିଗରୀ ହେତୁ ସ୍ଥାନୀୟ ଲୋକମାନଙ୍କୁ କ'ଣ କରିବାକୁ ପଡ଼ିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେମାନେ ଉପନିବେଶିକ ଦେଶମାନଙ୍କ ସାମଗ୍ରୀ ଉପରେ ନିର୍ଭର କରିବାକୁ ପଡ଼ିଲା ।",

"<span style='color:red;'>Q-4:</span> ଏସିଆ ଓ ଆଫ୍ରୀକାରେ କେଉଁ ସମ୍ପଦ ପ୍ରଚୁର ମାତ୍ରାରେ ଉପଲବ୍ଧ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସେଠାରେ ବହୁସଂଖ୍ୟାରେ ମାନବ ସମ୍ପଦ (ମଜୁରି ଓ ସୈନ୍ୟ) ଉପଲବ୍ଧ ଥିଲା ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ପରିବହନ ଓ ଯୋଗାଯୋଗର<br/>ଉନ୍ନତି\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପ୍ରଶ୍ନ\"]\nA --> I1[\"ଉପନିବେଶ ସ୍ଥାପନରେ<br/>ପରିବହନର ଭୂମିକା କ'ଣ?\"]\nA --> I2[\"ବାଷ୍ପୀୟ ଜାହାଜ ଓ<br/>ରେଳଗାଡ଼ି ଆବିଷ୍କାର ହେଲା।\"]\nA --> I3[\"ଏହା ଦୂର ଦେଶମାନଙ୍କୁ<br/>ଯିବା ସହଜ କଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଉନ୍ନତିର ପ୍ରଭାବ\"]\nM --> M1[\"୧୮୧୪ରେ ଷ୍ଟିଫେନ୍‌ସନ୍‌<br/>ପ୍ରଥମ ରେଳ ଇଞ୍ଜିନ ତିଆରି କଲେ।\"]\nM --> M2[\"୧୮୨୯ରେ 'ରକେଟ୍‌'<br/>ନାମକ ଇଞ୍ଜିନ ନିର୍ମିତ ହେଲା।\"]\nM --> M3[\"ବାଷ୍ପଚାଳିତ ଜାହାଜ ଓ<br/>ଟେଲିଗ୍ରାଫ ମଧ୍ୟ ବିକଶିତ ହେଲା।\"]\nM --> M4[\"ଉପନିବେଶ ଅଞ୍ଚଳକୁ<br/>ପ୍ରଶାସନ ପରିଚାଳନା ସହଜ ହେଲା।\"]\nM --> M5[\"ପଣ୍ୟ ଓ ସୈନ୍ୟ ପରିବହନ<br/>ଅତି ଦ୍ରୁତ ହେଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ପରିବହନ ଓ ଯୋଗାଯୋଗର<br/>ଉନ୍ନତି ଉପନିବେଶ ସ୍ଥାପନକୁ<br/>ସହଜ କଲା।\"]\nC --> C2[\"ଦୂର ଦେଶ ଉପରେ ଶାସନ<br/>ପାଇଁ ଏହା ଆବଶ୍ୟକ ଥିଲା।\"]\nC --> C3[\"ଉପନିବେଶବାଦୀ ଶକ୍ତି ଏହାର<br/>ପୂର୍ଣ୍ଣ ଲାଭ ଉଠାଇଲେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ଧର୍ମ ଓ ସଂସ୍କୃତିର<br/>ପ୍ରଚାର\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nA --> I1[\"ଖ୍ରୀଷ୍ଟିଆନ ମିଶନାରୀମାନେ<br/>ଉପନିବେଶ ଅଞ୍ଚଳକୁ ଗଲେ।\"]\nA --> I2[\"ସେମାନେ ଧର୍ମ ପ୍ରଚାର<br/>ଆରମ୍ଭ କଲେ।\"]\nA --> I3[\"ସାଙ୍ଗକୁ ପାଶ୍ଚାତ୍ୟ ସଂସ୍କୃତି<br/>ମଧ୍ୟ ଆସିଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପ୍ରଚାରର ପ୍ରଭାବ\"]\nM --> M1[\"ମିଶନାରୀ ଦେଶମାନଙ୍କରେ<br/>ବିଦ୍ୟାଳୟ ଓ ଚର୍ଚ୍ଚ ସ୍ଥାପନ କଲେ।\"]\nM --> M2[\"ପାଶ୍ଚାତ୍ୟ ଶିକ୍ଷା ଓ<br/>ମୂଲ୍ୟବୋଧର ପ୍ରସାର ହେଲା।\"]\nM --> M3[\"କେତେକ ସ୍ଥାନୀୟ ଶାସକ<br/>ଏହାର ବିରୋଧ କଲେ।\"]\nM --> M4[\"ତଥାପି ଧର୍ମାନ୍ତରଣ<br/>ଜାରି ରହିଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଧର୍ମ ଓ ସଂସ୍କୃତିର ପ୍ରଚାର<br/>ଉପନିବେଶବାଦକୁ ମଜବୁତ କଲା।\"]\nC --> C2[\"ଏହା ସ୍ଥାନୀୟ ସମାଜରେ<br/>ପାଶ୍ଚାତ୍ୟ ପ୍ରଭାବ ବଢ଼ାଇଲା।\"]\nC --> C3[\"ଉପନିବେଶବାଦୀ ଶାସନକୁ<br/>ଆଉ ଏକ ଆଧାର ମିଳିଲା।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ଦୁର୍ବଳ ଶାସନ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nA --> I1[\"ଊନବିଂଶ ଶତାବ୍ଦୀରେ ଏସିଆ ଓ<br/>ଆଫ୍ରୀକାର ଅନେକ ଦେଶରେ<br/>ଶାସନ ଅତ୍ୟନ୍ତ ଦୁର୍ବଳ ଥିଲା।\"]\nA --> I2[\"ପ୍ରଶାସନ ଠିକ୍‌ ଭାବେ<br/>ଚାଲୁ ନ ଥିଲା।\"]\nA --> I3[\"ଅନେକ ଅଞ୍ଚଳରେ ଦୁର୍ଭିକ୍ଷ<br/>ଓ ଅସନ୍ତୋଷ ଦେଖାଦେଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଦୁର୍ବଳତାର କାରଣ\"]\nM --> M1[\"ନୂତନ ଓ ସୁଦୃଢ଼ ଶାସନ<br/>ବ୍ୟବସ୍ଥା ନିର୍ମାଣ ହୋଇ ନ ଥିଲା।\"]\nM --> M2[\"ପୁରୁଣା ଶାସନ ପ୍ରଣାଳୀ<br/>ପରିବର୍ତ୍ତିତ ପରିସ୍ଥିତି ସହ<br/>ଖାପ ଖାଇ ପାରୁ ନ ଥିଲା।\"]\nM --> M3[\"ସ୍ଥାନୀୟ ଲୋକେ ଦୁର୍ବଳ<br/>ପ୍ରଶାସନର ପ୍ରତିରୋଧ<br/>କରି ପାରୁ ନ ଥିଲେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଦୁର୍ବଳ ଶାସନ ଉପନିବେଶବାଦୀ<br/>ଶକ୍ତିଙ୍କୁ ସହଜରେ କ୍ଷମତା<br/>ହାସଲ କରିବାର ସୁଯୋଗ ଦେଲା।\"]\nC --> C2[\"ଏଥିପାଇଁ ଏସିଆ ଓ ଆଫ୍ରୀକାର<br/>ଅନେକ ଦେଶ ଉପନିବେଶିତ ହେଲେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ଅନ୍ୟାନ୍ୟ ଅନୁକୂଳ<br/>ପରିସ୍ଥିତି\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nA --> I1[\"ଏସିଆ ଓ ଆଫ୍ରୀକାର ଅନେକ<br/>ଦେଶରେ ଭୌଗୋଳିକ ଓ ସାମରିକ<br/>ଦୁର୍ବଳତା ଥିଲା।\"]\nA --> I2[\"ସେଠାରେ ମଧ୍ୟସ୍ଥ ଶାସନ<br/>ପ୍ରଚଳିତ ଥିଲା।\"]\nA --> I3[\"ଲୋକେ ସ୍ଥାନୀୟ ମୁଖ୍ୟଙ୍କ<br/>ପ୍ରତି ଆନୁଗତ୍ୟ ଦେଖାଉଥିଲେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଅନୁକୂଳ ପରିସ୍ଥିତିର ପ୍ରଭାବ\"]\nM --> M1[\"ବଇଥିଆ ଓ ଆଫ୍ରୀକାର ଦେଶ<br/>ଉନ୍ନତ ସୈନ୍ୟଶକ୍ତି ଗଢ଼ି<br/>ପାରି ନ ଥିଲେ।\"]\nM --> M2[\"ଫଳରେ ଉପନିବେଶବାଦୀ<br/>ରାଷ୍ଟ୍ର ସହଜରେ ସେମାନଙ୍କୁ<br/>ଅଧୀନ କରିପାରୁଥିଲେ।\"]\nM --> M3[\"ବହୁ ସ୍ଥାନୀୟ ଲୋକ ଉପନିବେଶ<br/>ବ୍ୟବସାୟ ପାଇଁ ଅଧ୍ୟବସାୟ<br/>କାରଖାନାରେ କାମ କରୁଥିଲେ।\"]\nM --> M4[\"ଏହା ଉପନିବେଶବାଦୀ<br/>ଅର୍ଥନୀତିକୁ ଆହୁରି<br/>ମଜବୁତ କଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସାରାଂଶ\"]\nC --> C1[\"ଏହି ସବୁ ଅନୁକୂଳ ପରିସ୍ଥିତି<br/>ଉପନିବେଶ ସ୍ଥାପନରେ<br/>ସାହାଯ୍ୟ କଲା।\"]\nC --> C2[\"ଉପନିବେଶ ଶାସକମାନେ<br/>ନିଜ ଆର୍ଥିକ ଲାଭ ପାଇଁ<br/>ଶାସନ କଲେ।\"]\nC --> C3[\"ଏହିପରି ଏସିଆ ଓ ଆଫ୍ରୀକାରେ<br/>ଉପନିବେଶବାଦ ଦୃଢ଼ ଭାବେ<br/>ପ୍ରତିଷ୍ଠିତ ହେଲା।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`
  ]


    }  
]
};  
