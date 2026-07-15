const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଭୂଗୋଳ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9SSG1P3-4.mp3",
    video:  "https://www.youtube.com/embed/mVyJ35Bbj1I?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9SSG1P3-4.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "CONTINENT",
            odia: "ମହାଦେଶ",
            emoji: "🌍",
            odiaUse: "ମହାଦେଶ ଅର୍ଥ ପୃଥିବୀର ଏକ ବିରାଟ ସ୍ଥଳଭାଗ । ଏସିଆ ଏକ ମହାଦେଶ ଏବଂ ଭାରତ ଏହାର ଦକ୍ଷିଣାଂଶରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBCONTINENT",
            odia: "ଉପମହାଦେଶ",
            emoji: "🗺️",
            odiaUse: "ଉପମହାଦେଶ ଅର୍ଥ ମହାଦେଶର ଏକ ବିଶାଳ ଅଂଶ ଯାହା ନିଜସ୍ୱ ପରିଚୟ ରଖେ । ଭାରତକୁ ପ୍ରାୟତଃ ଏକ ଉପମହାଦେଶ ବୋଲି କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PENINSULA",
            odia: "ପ୍ରାୟଦ୍ୱୀପ",
            emoji: "🏝️",
            odiaUse: "ପ୍ରାୟଦ୍ୱୀପ ଅର୍ଥ ତିନି ପାଖରେ ଜଳ ଓ ଏକ ପାଖରେ ସ୍ଥଳଭାଗ ଦ୍ୱାରା ଘେରି ରହିଥିବା ଭୂଖଣ୍ଡ । ଭାରତର ଦକ୍ଷିଣ ଅଂଶ ଏକ ପ୍ରାୟଦ୍ୱୀପ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MAP",
            odia: "ମାନଚିତ୍ର",
            emoji: "🗾",
            odiaUse: "ମାନଚିତ୍ର ଅର୍ଥ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ମାପରେ ପୃଥିବୀ ବା ଦେଶର ଚିତ୍ର । ଏହି ମାନଚିତ୍ରଟି ୧:୨ ମାପରେ ତିଆରି ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SCALE",
            odia: "ମାନ",
            emoji: "📐",
            odiaUse: "ମାନ ଅର୍ଥ ମାନଚିତ୍ରରେ ପ୍ରକୃତ ଦୂରତାକୁ କେତେ ଛୋଟ କରି ଦେଖାଯାଇଛି ତାହାର ଅନୁପାତ । ଏହି ମାନଚିତ୍ରର ମାନ ୧:୨ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LATITUDE",
            odia: "ଅକ୍ଷାଂଶ",
            emoji: "📏",
            odiaUse: "ଅକ୍ଷାଂଶ ଅର୍ଥ ପୃଥିବୀ ପୃଷ୍ଠରେ ପୂର୍ବ-ପଶ୍ଚିମ ଦିଗରେ ଅଙ୍କାଯାଇଥିବା କାଳ୍ପନିକ ରେଖା । ମାନଚିତ୍ରରେ ଅକ୍ଷାଂଶ ରେଖା ଦେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LONGITUDE",
            odia: "ଦ୍ରାଘିମା",
            emoji: "🧭",
            odiaUse: "ଦ୍ରାଘିମା ଅର୍ଥ ପୃଥିବୀ ପୃଷ୍ଠରେ ଉତ୍ତର-ଦକ୍ଷିଣ ଦିଗରେ ଅଙ୍କାଯାଇଥିବା କାଳ୍ପନିକ ରେଖା । ଦ୍ରାଘିମା ରେଖା ମାନ ସମୟ ସ୍ଥିର କରିବାରେ ସାହାଯ୍ୟ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STANDARD TIME",
            odia: "ମାନ ସମୟ",
            emoji: "🕰️",
            odiaUse: "ମାନ ସମୟ ଅର୍ଥ ଏକ ଦେଶର ସମସ୍ତ ସ୍ଥାନରେ ବ୍ୟବହୃତ ହେଉଥିବା ଏକକ ସମୟ । ଭାରତୀୟ ପ୍ରାମାଣିକ ସମୟ (IST) ଭାରତର ମାନ ସମୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TROPIC OF CANCER",
            odia: "କର୍କଟ କ୍ରାନ୍ତି",
            emoji: "☀️",
            odiaUse: "କର୍କଟ କ୍ରାନ୍ତି ଅର୍ଥ ପୃଥିବୀର ଉତ୍ତର ଗୋଲାର୍ଦ୍ଧରେ ୨୩.୫° ଅକ୍ଷାଂଶରେ ଥିବା କାଳ୍ପନିକ ରେଖା । ଏହି ରେଖା ଭାରତର ମଧ୍ୟଭାଗ ଦେଇ ଗତି କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OCEAN",
            odia: "ମହାସାଗର",
            emoji: "🌊",
            odiaUse: "ମହାସାଗର ଅର୍ଥ ପୃଥିବୀର ବିରାଟ ଲୁଣିଆ ଜଳରାଶି । ଭାରତର ଦକ୍ଷିଣରେ ଭାରତ ମହାସାଗର ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ISLANDS",
            odia: "ଦ୍ୱୀପପୁଞ୍ଜ",
            emoji: "🏖️",
            odiaUse: "ଦ୍ୱୀପପୁଞ୍ଜ ଅର୍ଥ ଏକାଠି ଥିବା ଅନେକ ଦ୍ୱୀପ । ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜ ଭାରତର ଏକ ଅଂଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOUNTAIN RANGE",
            odia: "ପର୍ବତମାଳା",
            emoji: "⛰️",
            odiaUse: "ପର୍ବତମାଳା ଅର୍ଥ ଧାଡ଼ି ଧାଡ଼ି ପର୍ବତ ମିଶି ତିଆରି ହୋଇଥିବା ଭୂଭାଗ । ହିମାଳୟ ପର୍ବତମାଳା ଭାରତର ଉତ୍ତରରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NEIGHBOURING COUNTRY",
            odia: "ପଡ଼ୋଶୀ ଦେଶ",
            emoji: "🤝",
            odiaUse: "ପଡ଼ୋଶୀ ଦେଶ ଅର୍ଥ ଯାହାର ସୀମା ଆମ ଦେଶ ସହିତ ମିଶିଥାଏ । ପାକିସ୍ତାନ ଭାରତର ଏକ ପଡ଼ୋଶୀ ଦେଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRADE",
            odia: "ବାଣିଜ୍ୟ",
            emoji: "🚢",
            odiaUse: "ବାଣିଜ୍ୟ ଅର୍ଥ ଦେଶ ଦେଶ ମଧ୍ୟରେ ଜିନିଷ କିଣାବିକା କରିବା । ପ୍ରାଚୀନ କାଳରୁ ଭାରତ ଅନ୍ୟ ଦେଶ ସହିତ ବାଣିଜ୍ୟ କରି ଆସିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CULTURE",
            odia: "ସଂସ୍କୃତି",
            emoji: "🎭",
            odiaUse: "ସଂସ୍କୃତି ଅର୍ଥ ଏକ ଜାତିର ପରମ୍ପରା, ଭାଷା ଓ ଜୀବନଶୈଳୀ । ଭାରତର ସଂସ୍କୃତି ପଡ଼ୋଶୀ ଦେଶମାନଙ୍କୁ ପ୍ରଭାବିତ କରିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BOUNDARY",
            odia: "ସୀମାରେଖା",
            emoji: "🚧",
            odiaUse: "ସୀମାରେଖା ଅର୍ଥ ଦୁଇ ଦେଶକୁ ଅଲଗା କରୁଥିବା ରେଖା । ହିମାଳୟ ପର୍ବତ ଭାରତର ଉତ୍ତର ସୀମାରେଖା ପରି କାମ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GULF",
            odia: "ଉପସାଗର",
            emoji: "🌊",
            odiaUse: "ଉପସାଗର ଅର୍ଥ ସ୍ଥଳଭାଗ ଭିତରକୁ ପଶିଆସିଥିବା ସାଗରର ଏକ ଅଂଶ । ବଙ୍ଗୋପସାଗର ଭାରତର ପୂର୍ବରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HEMISPHERE",
            odia: "ଗୋଲାର୍ଦ୍ଧ",
            emoji: "🌐",
            odiaUse: "ଗୋଲାର୍ଦ୍ଧ ଅର୍ଥ ପୃଥିବୀର ଅଧା ଅଂଶ । ଭାରତ ଉତ୍ତର ଗୋଲାର୍ଦ୍ଧରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUNRISE",
            odia: "ସୂର୍ଯ୍ୟୋଦୟ",
            emoji: "🌅",
            odiaUse: "ସୂର୍ଯ୍ୟୋଦୟ ଅର୍ଥ ସକାଳେ ସୂର୍ଯ୍ୟ ଉଠିବା ସମୟ । ଭାରତର ପୂର୍ବ ଭାଗରେ ପଶ୍ଚିମ ଭାଗଠାରୁ ଆଗେ ସୂର୍ଯ୍ୟୋଦୟ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUNSET",
            odia: "ସୂର୍ଯ୍ୟାସ୍ତ",
            emoji: "🌇",
            odiaUse: "ସୂର୍ଯ୍ୟାସ୍ତ ଅର୍ଥ ସନ୍ଧ୍ୟାରେ ସୂର୍ଯ୍ୟ ଅସ୍ତ ଯିବା ସମୟ । ପଶ୍ଚିମ ଭାଗରେ ପୂର୍ବ ଭାଗଠାରୁ ପରେ ସୂର୍ଯ୍ୟାସ୍ତ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TIME DIFFERENCE",
            odia: "ସମୟ ବ୍ୟବଧାନ",
            emoji: "⏱️",
            odiaUse: "ସମୟ ବ୍ୟବଧାନ ଅର୍ଥ ଦୁଇ ସ୍ଥାନ ମଧ୍ୟରେ ସମୟର ପାର୍ଥକ୍ୟ । ଭାରତର ପୂର୍ବ ଓ ପଶ୍ଚିମ ସୀମା ମଧ୍ୟରେ ପ୍ରାୟ ଦୁଇ ଘଣ୍ଟା ସମୟ ବ୍ୟବଧାନ ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MERIDIAN",
            odia: "ମଧ୍ୟାହ୍ନ ରେଖା",
            emoji: "📍",
            odiaUse: "ମଧ୍ୟାହ୍ନ ରେଖା ଅର୍ଥ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଦ୍ରାଘିମା ରେଖା ଯାହା ମାନ ସମୟ ସ୍ଥିର କରିବାରେ ବ୍ୟବହୃତ ହୁଏ । ୮୨.୫° ପୂର୍ବ ଦ୍ରାଘିମା ଭାରତର ମଧ୍ୟାହ୍ନ ରେଖା ଭାବେ ଗ୍ରହଣ କରାଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AREA",
            odia: "ବିସ୍ତାର",
            emoji: "📊",
            odiaUse: "ବିସ୍ତାର ଅର୍ଥ ଏକ ଦେଶ କେତେ ବଡ଼ ଜାଗା ଘେରି ରହିଛି । ପୂର୍ବରୁ ପଶ୍ଚିମକୁ ଭାରତର ବିସ୍ତାର ପ୍ରାୟ ୩୦° ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ANCIENT",
            odia: "ପ୍ରାଚୀନ",
            emoji: "🏛️",
            odiaUse: "ପ୍ରାଚୀନ ଅର୍ଥ ବହୁତ ପୁରୁଣା କାଳର । ପ୍ରାଚୀନ କାଳରୁ ଭାରତ ଏକ ମହତ୍ୱପୂର୍ଣ୍ଣ ଦେଶ ଭାବେ ପରିଚିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ଭାରତର ଭୌଗୋଳିକ ଅବସ୍ଥିତି :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତବର୍ଷ ଏସିଆ ମହାଦେଶର ଦକ୍ଷିଣାଂଶରେ, ପୂର୍ବ ଏସିଆ ଓ ପଶ୍ଚିମ ଏସିଆର ପ୍ରାୟ ମଧ୍ୟଭାଗରେ ଅବସ୍ଥିତ । ଏହି ଅବସ୍ଥିତି ଯୋଗୁଁ ଭାରତ ଆନ୍ତର୍ଜାତୀୟ ଜଳପଥର ଏକ ସୁବିଧାଜନକ ସ୍ଥାନରେ ରହିଛି ।<br><br>👉 ଉଦାହରଣ: ଯେପରି ଏକ ଚୌରାହାରେ ରହିଥିବା ଦୋକାନକୁ ଚାରିଆଡ଼େରୁ ଲୋକ ସହଜରେ ପହଞ୍ଚିପାରନ୍ତି, ସେହିପରି ଭାରତର ମଧ୍ୟସ୍ଥିତିରେ ରହିବା ଯୋଗୁଁ ପୂର୍ବ ଓ ପଶ୍ଚିମର ଜାହାଜଗୁଡ଼ିକ ସହଜରେ ଭାରତକୁ ପହଞ୍ଚୁଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାରତ ଏସିଆ ମହାଦେଶର କେଉଁ ଭାଗରେ ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ଏସିଆ ମହାଦେଶର ଦକ୍ଷିଣାଂଶରେ ଅବସ୍ଥିତ ।",

"<span style='color:red;'>Q-2:</span> ଭାରତ କେଉଁ ଦୁଇ ଅଞ୍ଚଳର ମଧ୍ୟଭାଗରେ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ପୂର୍ବ ଏସିଆ ଏବଂ ପଶ୍ଚିମ ଏସିଆର ପ୍ରାୟ ମଧ୍ୟଭାଗରେ ଅଛି ।",

"<span style='color:red;'>Q-3:</span> ଭାରତର ଅବସ୍ଥିତି କାହିଁକି ସୁବିଧାଜନକ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଆନ୍ତର୍ଜାତୀୟ ଜଳପଥରେ ପଡ଼ୁଥିବାରୁ ବିଶ୍ୱର ଅନେକ ଦେଶ ସହ ସହଜରେ ଯୋଗାଯୋଗ ହୁଏ, ତେଣୁ ଏହା ସୁବିଧାଜନକ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ଭାରତର ଉତ୍ତର ସୀମାରେ କେଉଁ ପର୍ବତମାଳା ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ଉତ୍ତର ସୀମାରେ ହିମାଳୟ ପର୍ବତମାଳା ଅଛି ।"

]
},

{
heading: "NOTE-2: ଭାରତର ଉପଦ୍ୱୀପ ଚରିତ୍ର :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତର ଦକ୍ଷିଣ ଭାଗ ତିନି ଦିଗରୁ ସମୁଦ୍ର ଦ୍ୱାରା ଘେରି ରହିଥିବାରୁ ଏହା ଏକ ବୃହତ ଉପଦ୍ୱୀପ ଭାବେ ପରିଚିତ । ପଶ୍ଚିମରେ ଆରବ ସାଗର, ପୂର୍ବରେ ବଙ୍ଗୋପସାଗର ଏବଂ ଦକ୍ଷିଣରେ ଭାରତ ମହାସାଗର ରହିଛି ।<br><br>👉 ଉଦାହରଣ: ଯେପରି ଏକ ଦ୍ୱୀପକୁ ଚାରିଆଡ଼େ ପାଣି ଘେରି ରହେ, ସେହିପରି ଭାରତର ଦକ୍ଷିଣ ଭାଗକୁ ତିନି ଦିଗରୁ ସମୁଦ୍ର ଘେରି ରହିଛି, ଏଣୁ ଏହାକୁ ଉପଦ୍ୱୀପ କୁହାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଉପଦ୍ୱୀପ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ଭୂଖଣ୍ଡ ତିନି ଦିଗରୁ ସମୁଦ୍ର ଦ୍ୱାରା ଘେରି ରହିଥାଏ, ତାହାକୁ ଉପଦ୍ୱୀପ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଭାରତର ପଶ୍ଚିମରେ କେଉଁ ସାଗର ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ପଶ୍ଚିମରେ ଆରବ ସାଗର ଅଛି ।",

"<span style='color:red;'>Q-3:</span> ଭାରତର ପୂର୍ବରେ କେଉଁ ସାଗର ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ପୂର୍ବରେ ବଙ୍ଗୋପସାଗର ଅଛି ।",

"<span style='color:red;'>Q-4:</span> ଭାରତର ଦକ୍ଷିଣରେ କେଉଁ ମହାସାଗର ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ଦକ୍ଷିଣରେ ଭାରତ ମହାସାଗର ଅଛି ।"

]
},

{
heading: "NOTE-3: ପ୍ରାଚୀନ ବାଣିଜ୍ୟ ଓ ସାଂସ୍କୃତିକ ସମ୍ପର୍କ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରାଚୀନ କାଳରୁ ଭାରତର ଅନେକ ଦେଶ ସହ ବାଣିଜ୍ୟ ଓ ଭ୍ରମଣ ସମ୍ପର୍କ ରହିଆସିଛି । ଏହି ପଥ ଦେଇ ଭାରତୀୟ ସଂସ୍କୃତି, ଗଣିତ ଓ ଆଧ୍ୟାତ୍ମିକ ଜ୍ଞାନ ଅନେକ ଦେଶକୁ ପହଞ୍ଚିଥିଲା ।<br><br>👉 ଉଦାହରଣ: ପ୍ରାଚୀନ ବ୍ୟବସାୟୀମାନେ ଜାହାଜରେ ମସଲା ଓ ଅନ୍ୟ ଦ୍ରବ୍ୟ ନେଇ ପାଶ୍ଚାତ୍ୟ ଦେଶକୁ ଯାଉଥିଲେ ଏବଂ ସେହି ପଥରେ ଭାରତୀୟ ଜ୍ଞାନ ମଧ୍ୟ ବିଦେଶକୁ ପ୍ରସାର ହେଉଥିଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପ୍ରାଚୀନ କାଳରେ ଭାରତ କେଉଁ ପ୍ରକାର ସମ୍ପର୍କ ରଖିଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରାଚୀନ କାଳରେ ଭାରତ ଅନେକ ଦେଶ ସହ ବାଣିଜ୍ୟ ଓ ଭ୍ରମଣ ସମ୍ପର୍କ ରଖିଥିଲା ।",

"<span style='color:red;'>Q-2:</span> ବାଣିଜ୍ୟ ପଥ ଦେଇ ଭାରତରୁ କ'ଣ ବିଦେଶକୁ ଗଲା ?<br><br><span style='color:green;'>Answer:</span> ବାଣିଜ୍ୟ ପଥ ଦେଇ ଭାରତୀୟ ସଂସ୍କୃତି, ଗଣିତ ଓ ଆଧ୍ୟାତ୍ମିକ ଜ୍ଞାନ ବିଦେଶକୁ ଗଲା ।",

"<span style='color:red;'>Q-3:</span> ପ୍ରାଚୀନ ବ୍ୟବସାୟୀମାନେ କେଉଁ ମାଧ୍ୟମରେ ବାଣିଜ୍ୟ କରୁଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରାଚୀନ ବ୍ୟବସାୟୀମାନେ ଜାହାଜ ମାଧ୍ୟମରେ ସାମୁଦ୍ରିକ ପଥ ଦେଇ ବାଣିଜ୍ୟ କରୁଥିଲେ ।",

"<span style='color:red;'>Q-4:</span> ଭାରତର ବାଣିଜ୍ୟ ସମ୍ପର୍କ କେଉଁ କ୍ଷେତ୍ରରେ ମହତ୍ୱପୂର୍ଣ ଭୂମିକା ନେଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ବାଣିଜ୍ୟ ସମ୍ପର୍କ ସାଂସ୍କୃତିକ ଆଦାନ-ପ୍ରଦାନ କ୍ଷେତ୍ରରେ ମହତ୍ୱପୂର୍ଣ ଭୂମିକା ନେଇଥିଲା ।"

]
},

{
heading: "NOTE-4: ଭାରତର ବିସ୍ତାର ଓ ଭାରତୀୟ ପ୍ରାମାଣ୍ୟ ସମୟ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତର ପୂର୍ବ-ପଶ୍ଚିମ ବିସ୍ତାର ପ୍ରାୟ ୩୦ ଡିଗ୍ରୀ ଦ୍ରାଘିମା ଅଟେ, ଯାହା ଦ୍ୱାରା ପୂର୍ବ ଓ ପଶ୍ଚିମ ପ୍ରାନ୍ତରେ ସୂର୍ଯ୍ୟୋଦୟ ସମୟରେ ପ୍ରାୟ ୨ ଘଣ୍ଟାର ପାର୍ଥକ୍ୟ ଦେଖାଯାଏ । ଏହି ପାର୍ଥକ୍ୟକୁ ଦୂର କରିବା ପାଇଁ ୮୨°୩୦' ପୂର୍ବ ଦ୍ରାଘିମା ରେଖାକୁ ଭାରତର ପ୍ରାମାଣ୍ୟ ମାଧ୍ୟରେଖା ଭାବେ ଗ୍ରହଣ କରାଯାଇଛି, ଯାହା ଅନୁସାରେ ଭାରତୀୟ ପ୍ରାମାଣ୍ୟ ସମୟ (Indian Standard Time) ସ୍ଥିର ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ଯେପରି ଗୋଟିଏ ବଡ଼ ପରିବାରର ସମସ୍ତେ ଏକ ଘଣ୍ଟା ଦେଖି କାମ କରନ୍ତି, ସେହିପରି ଭାରତର ପୂର୍ବ ପ୍ରାନ୍ତରୁ ପଶ୍ଚିମ ପ୍ରାନ୍ତ ପର୍ଯ୍ୟନ୍ତ ସମସ୍ତେ ଏକା ୮୨°୩୦' ପୂର୍ବ ମାଧ୍ୟରେଖା ଅନୁସାରେ ସମୟ ଗଣନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାରତର ପୂର୍ବ-ପଶ୍ଚିମ ବିସ୍ତାର କେତେ ଡିଗ୍ରୀ ଦ୍ରାଘିମା ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ପୂର୍ବ-ପଶ୍ଚିମ ବିସ୍ତାର ପ୍ରାୟ ୩୦ ଡିଗ୍ରୀ ଦ୍ରାଘିମା ।",

"<span style='color:red;'>Q-2:</span> ଭାରତର ପୂର୍ବ ଓ ପଶ୍ଚିମ ପ୍ରାନ୍ତ ମଧ୍ୟରେ ସୂର୍ଯ୍ୟୋଦୟ ସମୟର ପାର୍ଥକ୍ୟ କେତେ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ପୂର୍ବ ଓ ପଶ୍ଚିମ ପ୍ରାନ୍ତ ମଧ୍ୟରେ ସୂର୍ଯ୍ୟୋଦୟ ସମୟର ପାର୍ଥକ୍ୟ ପ୍ରାୟ ୨ ଘଣ୍ଟା ।",

"<span style='color:red;'>Q-3:</span> ଭାରତର ପ୍ରାମାଣ୍ୟ ମାଧ୍ୟରେଖା କେଉଁଠି ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ପ୍ରାମାଣ୍ୟ ମାଧ୍ୟରେଖା ୮୨°୩୦' ପୂର୍ବ ଦ୍ରାଘିମାରେ ଅବସ୍ଥିତ ।",

"<span style='color:red;'>Q-4:</span> ଭାରତୀୟ ପ୍ରାମାଣ୍ୟ ସମୟର ଉଦ୍ଦେଶ୍ୟ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ସାରା ଦେଶରେ ଏକ ସମାନ ସମୟ ପାଳନ କରିବା ଏହାର ଉଦ୍ଦେଶ୍ୟ ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ଭାରତର ଅବସ୍ଥିତି<br/>ଓ ପାରସ୍ପରିକ ସମ୍ପର୍କ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଅବସ୍ଥାନ\"]\nA --> I1[\"ଭାରତ ଦକ୍ଷିଣ<br/>ଏସିଆରେ ଅବସ୍ଥିତ।\"]\nA --> I2[\"ଉତ୍ତରରେ ହିମାଳୟ<br/>ପର୍ବତମାଳା ରହିଛି।\"]\nA --> I3[\"ଦକ୍ଷିଣରେ ହିନ୍ଦ<br/>ମହାସାଗର ରହିଛି।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଭୌଗଳିକ ଗୁରୁତ୍ୱ\"]\nM --> M1[\"ପୂର୍ବ ଓ ପଶ୍ଚିମ ଏସିଆର<br/>ମଝିରେ ଅବସ୍ଥିତ।\"]\nM --> M2[\"ପ୍ରାଚୀନ କାଳରୁ<br/>ବାଣିଜ୍ୟ ପଥର କେନ୍ଦ୍ର।\"]\nM --> M3[\"ସ୍ଥଳ ଓ ଜଳପଥ ଦେଇ<br/>ଅନ୍ୟ ଦେଶ ସହ ସମ୍ପର୍କ।\"]\nM --> M4[\"ପଡ଼ୋଶୀ ଦେଶ ସହ<br/>ସାଂସ୍କୃତିକ ଆଦାନପ୍ରଦାନ।\"]\nM --> M5[\"ପ୍ରାୟଦ୍ୱୀପ ଆକୃତି ଯୋଗୁଁ<br/>ସାମୁଦ୍ରିକ ବାଣିଜ୍ୟ ସହଜ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସାରାଂଶ\"]\nC --> C1[\"ଭାରତର ଅବସ୍ଥିତି<br/>ଭୌଗଳିକ ଦୃଷ୍ଟିରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।\"]\nC --> C2[\"ପ୍ରାଚୀନ ବାଣିଜ୍ୟ ପଥ ଭାରତକୁ<br/>ବିଶ୍ୱ ସହ ଯୋଡ଼ିଥିଲା।\"]\nC --> C3[\"ଏହି ସ୍ଥାନ ଭାରତକୁ ଏକ ପ୍ରମୁଖ<br/>ଦେଶ ଭାବରେ ପରିଚିତ କରାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ଭାରତର ବିସ୍ତାର<br/>ଓ ପ୍ରାମାଣିକ ସମୟ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nA --> I1[\"ଭାରତ ପୂର୍ବ-ପଶ୍ଚିମ ଓ<br/>ଉତ୍ତର-ଦକ୍ଷିଣରେ ବିସ୍ତୃତ।\"]\nA --> I2[\"ପୂର୍ବ ଓ ପଶ୍ଚିମ ସୀମାରେ<br/>ସୂର୍ଯ୍ୟୋଦୟ ସମୟ ଭିନ୍ନ ହୁଏ।\"]\nA --> I3[\"ଏହି ପାର୍ଥକ୍ୟ ପ୍ରାୟ<br/>ଦୁଇ ଘଣ୍ଟା ହୁଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପ୍ରାମାଣିକ ଦ୍ରାଘିମା\"]\nM --> M1[\"୮୨°୩୦' ପୂର୍ବ ଦ୍ରାଘିମା<br/>ଭାରତ ମଧ୍ୟଦେଇ ଯାଏ।\"]\nM --> M2[\"ଏହା ମିର୍ଜାପୁର<br/>ନିକଟ ଦେଇ ଗତି କରେ।\"]\nM --> M3[\"ଏହାକୁ ଭାରତର ପ୍ରାମାଣିକ<br/>ଦ୍ରାଘିମା ଭାବେ ଗ୍ରହଣ କରାଯାଏ।\"]\nM --> M4[\"ଏହି ସମୟକୁ 'ଭାରତୀୟ<br/>ପ୍ରାମାଣିକ ସମୟ' କୁହାଯାଏ।\"]\nM --> M5[\"ସମଗ୍ର ଦେଶରେ ଏକା<br/>ସମୟ ବ୍ୟବହାର ହୁଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଏକକ ପ୍ରାମାଣିକ ସମୟ ଦେଶର<br/>କାର୍ଯ୍ୟକଳାପକୁ ସହଜ କରେ।\"]\nC --> C2[\"ପୂର୍ବ-ପଶ୍ଚିମ ବିସ୍ତାର ସତ୍ତ୍ୱେ<br/>ଅଧିକ ସମୟ ପାର୍ଥକ୍ୟ ହୁଏ ନାହିଁ।\"]\nC --> C3[\"୮୨°୩୦'E ଦେଶର ମଧ୍ୟଭାଗ<br/>ଦେଇ ଯିବା ଏହାର କାରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

   `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ପ୍ରାଚୀନ ବାଣିଜ୍ୟ ପଥ<br/>ଓ ସାଂସ୍କୃତିକ ସମ୍ପର୍କ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପ୍ରାଚୀନ ସମ୍ପର୍କ\"]\nA --> I1[\"ପୃଥିବୀର ଅନେକ ଦେଶ ସହ<br/>ଭାରତର ସ୍ଥଳ ଓ ଜଳପଥ ସମ୍ପର୍କ ଥିଲା।\"]\nA --> I2[\"ପ୍ରାଚୀନ ଓ ମଧ୍ୟଯୁଗୀନ<br/>ବାଣିଜ୍ୟ ପଥ ପ୍ରସିଦ୍ଧ ଥିଲା।\"]\nA --> I3[\"ଏହି ପଥଗୁଡ଼ିକ ଦେଇ<br/>ଭାରତ ବିଶ୍ୱ ସହ ଯୋଡ଼ିହୋଇଥିଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ବାଣିଜ୍ୟ ଓ ପ୍ରସାର\"]\nM --> M1[\"ରେଶମ ପଥ ଭଳି ମାର୍ଗ<br/>ପୂର୍ବ-ପଶ୍ଚିମକୁ ଯୋଡ଼ୁଥିଲା।\"]\nM --> M2[\"ଭାରତୀୟ ବଣିକମାନେ<br/>ବିଦେଶରେ ବ୍ୟବସାୟ କରୁଥିଲେ।\"]\nM --> M3[\"ଅନେକ ବଣିକ ବିଦେଶୀ<br/>ଭୂମିରେ ସ୍ଥାୟୀ ବସବାସ କଲେ।\"]\nM --> M4[\"ସେମାନଙ୍କ ସହ ଭାରତୀୟ<br/>ଭାଷା ଓ ଧର୍ମ ମଧ୍ୟ ପ୍ରସାର ପାଇଲା।\"]\nM --> M5[\"ଦକ୍ଷିଣ-ପୂର୍ବ ଏସିଆର<br/>ଅନେକ ଦେଶରେ ଭାରତୀୟ ସଂସ୍କୃତିର ପ୍ରଭାବ ପଡ଼ିଲା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସାରାଂଶ\"]\nC --> C1[\"ବାଣିଜ୍ୟ ପଥ ଭାରତକୁ<br/>ବିଶ୍ୱର ପ୍ରାଚୀନ ଆଦାନପ୍ରଦାନ କେନ୍ଦ୍ର କରିଥିଲା।\"]\nC --> C2[\"ବଣିକଙ୍କ ଗତିବିଧି ଦେଇ<br/>ସଂସ୍କୃତି ବିଦେଶକୁ ପ୍ରସାରିତ ହେଲା।\"]\nC --> C3[\"ଆଜି ମଧ୍ୟ ଏହି ପ୍ରଭାବ<br/>ଅନେକ ଦେଶରେ ଦେଖିବାକୁ ମିଳେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ଅକ୍ଷାଂଶ-ଦ୍ରାଘିମା ବିସ୍ତାର<br/>ଓ ଚିନ୍ତାକର ପ୍ରଶ୍ନ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ତୁଳନାତ୍ମକ ବିସ୍ତାର\"]\nA --> I1[\"ଭାରତର ପୂର୍ବ-ପଶ୍ଚିମ ବିସ୍ତାର<br/>ଉତ୍ତର-ଦକ୍ଷିଣ ବିସ୍ତାର ପରି ସମାନ ନୁହେଁ।\"]\nA --> I2[\"ଦ୍ରାଘିମା ଅନୁସାରେ ସମୟ<br/>ପାର୍ଥକ୍ୟ ହୁଏ, ଅକ୍ଷାଂଶ ଅନୁସାରେ ନୁହେଁ।\"]\nA --> I3[\"ତେଣୁ ପୂର୍ବ-ପଶ୍ଚିମ ବିସ୍ତାର<br/>ସମୟ ଉପରେ ପ୍ରଭାବ ପକାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଚିନ୍ତାକର ପ୍ରଶ୍ନ\"]\nM --> M1[\"୮୨°୩୦'E କୁ କାହିଁକି ଭାରତର<br/>ପ୍ରାମାଣିକ ଦ୍ରାଘିମା ଭାବେ ନିଆଗଲା?\"]\nM --> M2[\"ଏହା ଦେଶର ମଧ୍ୟଭାଗ<br/>(ମିର୍ଜାପୁର) ଦେଇ ଯାଉଥିବାରୁ ବଛାଗଲା।\"]\nM --> M3[\"ପୂର୍ବ-ପଶ୍ଚିମ ପ୍ରାୟ ୨ ଘଣ୍ଟା<br/>ସମୟ ପାର୍ଥକ୍ୟ ସତ୍ତ୍ୱେ କାହିଁକି ଅନୁଭବ ହୁଏ ନାହିଁ?\"]\nM --> M4[\"ଏକକ ପ୍ରାମାଣିକ ସମୟ<br/>ବ୍ୟବହାର ହେଉଥିବାରୁ ଏହା ଅନୁଭବ ହୁଏ ନାହିଁ।\"]\nM --> M5[\"ଦୈନନ୍ଦିନ ଜୀବନ ଓ<br/>କାର୍ଯ୍ୟକଳାପ ଏକା ସମୟରେ ପରିଚାଳିତ ହୁଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଦ୍ରାଘିମା ପାର୍ଥକ୍ୟ ସମୟ<br/>ପାର୍ଥକ୍ୟ ସୃଷ୍ଟି କରେ।\"]\nC --> C2[\"ପ୍ରାମାଣିକ ସମୟ ଏହି<br/>ପାର୍ଥକ୍ୟକୁ ସମାନ କରିଦିଏ।\"]\nC --> C3[\"ଏହା ଦେଶର ପ୍ରଶାସନିକ<br/>କାର୍ଯ୍ୟକୁ ସହଜ କରିଥାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
]
  
      
}  
]
};  
