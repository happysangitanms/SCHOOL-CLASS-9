const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଇଂରାଜୀ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9SLE1P1-2.mp3",
    video:  "https://www.youtube.com/embed/YNbTNwdW8vs?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9SLE1P1-2.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "VEGETARIAN",
            odia: "ନିରାମିଷାହାରୀ",
            emoji: "🥗",
            odiaUse: "ନିରାମିଷାହାରୀ ଅର୍ଥ ମାଛ ମାଂସ ନ ଖାଉଥିବା ଲୋକ । ସେ ଏକ ନିରାମିଷାହାରୀ ଭୋଜନାଳୟକୁ ଗଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RESTAURANT",
            odia: "ଭୋଜନାଳୟ",
            emoji: "🍽️",
            odiaUse: "ଭୋଜନାଳୟ ଅର୍ଥ ଖାଇବା ପାଇଁ ଥିବା ଦୋକାନ । ଭୋଜନାଳୟଟି ବହୁତ ଭିଡ଼ିଆ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CROWDED",
            odia: "ଭିଡ଼ିଆ",
            emoji: "👥",
            odiaUse: "ଭିଡ଼ିଆ ଅର୍ଥ ଲୋକରେ ପୂର୍ଣ୍ଣ । ପର୍ବ ସମୟରେ ବଜାର ବହୁତ ଭିଡ଼ିଆ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PUSHED",
            odia: "ଠେଲାହୋଇଥିଲା",
            emoji: "➡️",
            odiaUse: "ଠେଲାହୋଇଥିଲା ଅର୍ଥ ଏକ ପାର୍ଶ୍ୱକୁ ଚଲାଇ ଦିଆଯାଇଥିଲା । ଚୌକି ଓ ମେଜଗୁଡ଼ିକ କୋଣକୁ ଠେଲାହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CORNER",
            odia: "କୋଣ",
            emoji: "📐",
            odiaUse: "କୋଣ ଅର୍ଥ ଏକ ସ୍ଥାନର ଧାର ବା ଅନ୍ତ । ସେ କୋଣର ମେଜଟି ବାଛିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SEATED",
            odia: "ବସିଲେ",
            emoji: "🪑",
            odiaUse: "ବସିଲେ ଅର୍ଥ ଚୌକିରେ ବସିଗଲେ । ସେ ନିଜକୁ ମେଜ ପାଖରେ ବସାଇଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SKIMMING",
            odia: "ଚଟାଣ ଦେଖିବା",
            emoji: "📰",
            odiaUse: "ଚଟାଣ ଦେଖିବା ଅର୍ଥ ଶୀଘ୍ର ଶୀଘ୍ର ଦେଖିଯିବା । ସେ ଖବରକାଗଜଟି ଶୀଘ୍ର ଦେଖୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NEWSPAPER",
            odia: "ଖବରକାଗଜ",
            emoji: "📰",
            odiaUse: "ଖବରକାଗଜ ଅର୍ଥ ଖବର ଛପା ହେଉଥିବା କାଗଜ । ସେ ଖବରକାଗଜ ପଢ଼ୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NOTICED",
            odia: "ଲକ୍ଷ୍ୟ କଲେ",
            emoji: "👀",
            odiaUse: "ଲକ୍ଷ୍ୟ କଲେ ଅର୍ଥ ଦେଖିପାରିଲେ । ସେ ଏକ ଝିଅକୁ ତାଙ୍କ ଆଡ଼କୁ ଚାହିଁଥିବାର ଲକ୍ଷ୍ୟ କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPRESSION",
            odia: "ମୁହଁର ଭାବ",
            emoji: "😔",
            odiaUse: "ମୁହଁର ଭାବ ଅର୍ଥ ମୁହଁରେ ଦେଖାଯାଉଥିବା ଅନୁଭୂତି । ଝିଅଟିର ମୁହଁରେ ଦୁଃଖର ଭାବ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CASHIER",
            odia: "ଟଙ୍କା ଆଦାୟକାରୀ",
            emoji: "💰",
            odiaUse: "ଟଙ୍କା ଆଦାୟକାରୀ ଅର୍ଥ ଦୋକାନରେ ଟଙ୍କା ନେଉଥିବା ଲୋକ । ଝିଅଟି ଟଙ୍କା ଆଦାୟକାରୀଙ୍କୁ ପ୍ରଶ୍ନ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AROUSED",
            odia: "ଜାଗ୍ରତ ହେଲା",
            emoji: "😮",
            odiaUse: "ଜାଗ୍ରତ ହେଲା ଅର୍ଥ ଉତ୍ପନ୍ନ ହେଲା । ଝିଅଟିର ଆଚରଣ ତାଙ୍କ ମନରେ କୌତୂହଳ ଜାଗ୍ରତ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CURIOSITY",
            odia: "କୌତୂହଳ",
            emoji: "🤔",
            odiaUse: "କୌତୂହଳ ଅର୍ଥ ଜାଣିବାର ଇଚ୍ଛା । ଝିଅଟି ପ୍ରତି ତାଙ୍କ ମନରେ କୌତୂହଳ ଜାଗିଉଠିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SURPRISED",
            odia: "ଆଶ୍ଚର୍ଯ୍ୟାନ୍ୱିତ",
            emoji: "😲",
            odiaUse: "ଆଶ୍ଚର୍ଯ୍ୟାନ୍ୱିତ ଅର୍ଥ ଆଶ୍ଚର୍ଯ୍ୟ ଲାଗିବା । ଝିଅଟିର ପ୍ରଶ୍ନ ତାଙ୍କୁ ଆଶ୍ଚର୍ଯ୍ୟାନ୍ୱିତ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WAITER",
            odia: "ପରିଚାରକ",
            emoji: "🧑‍🍳",
            odiaUse: "ପରିଚାରକ ଅର୍ଥ ଭୋଜନାଳୟରେ ସେବା କରୁଥିବା ଲୋକ । ସେ ପରିଚାରକଙ୍କୁ ଝିଅ ବିଷୟରେ ପଚାରିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOVED",
            odia: "ଆନ୍ଦୋଳିତ ହେଲେ",
            emoji: "😢",
            odiaUse: "ଆନ୍ଦୋଳିତ ହେଲେ ଅର୍ଥ ମନ ଛୁଇଁଲା । ପରିଚାରକଙ୍କ କଥାରେ ସେ ଆନ୍ଦୋଳିତ ହେଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PERSISTED",
            odia: "ଲାଗି ରହିଲା",
            emoji: "🔁",
            odiaUse: "ଲାଗି ରହିଲା ଅର୍ଥ ଚାଲୁରହିଲା । ଝିଅଟି ବିଷୟରେ ତାଙ୍କ କୌତୂହଳ ଲାଗି ରହିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MYSTERIOUS",
            odia: "ରହସ୍ୟମୟ",
            emoji: "🕵️",
            odiaUse: "ରହସ୍ୟମୟ ଅର୍ଥ ବୁଝିହେଉ ନ ଥିବା । ସେ ଭାବିଲେ ଏହି ରହସ୍ୟମୟ ଝିଅ କିଏ ?",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POVERTY-STRICKEN",
            odia: "ଦରିଦ୍ର",
            emoji: "😔",
            odiaUse: "ଦରିଦ୍ର ଅର୍ଥ ଗରିବ ଅବସ୍ଥାରେ ଥିବା । ସେ ଝିଅଟିର ଦରିଦ୍ର ମୁହଁକୁ ଭାବୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ANXIOUS",
            odia: "ଚିନ୍ତିତ",
            emoji: "😟",
            odiaUse: "ଚିନ୍ତିତ ଅର୍ଥ ଭୟଭୀତ ମନ । ଝିଅଟିର ମୁହଁ ଚିନ୍ତିତ ଦେଖାଯାଉଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GUARDIAN",
            odia: "ଅଭିଭାବକ",
            emoji: "🛡️",
            odiaUse: "ଅଭିଭାବକ ଅର୍ଥ ଯତ୍ନ ନେଉଥିବା ବ୍ୟକ୍ତି । ମାଗିର ଏକମାତ୍ର ଅଭିଭାବକ ତାହାର ଭାଇ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WIDOWED",
            odia: "ବିଧବା",
            emoji: "👵",
            odiaUse: "ବିଧବା ଅର୍ଥ ସ୍ୱାମୀ ମରିଯାଇଥିବା ସ୍ତ୍ରୀ । ମାଗି ତାଙ୍କ ବିଧବା ମାଆଙ୍କ ସହ ରହୁଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SOLDIER",
            odia: "ସୈନିକ",
            emoji: "💂",
            odiaUse: "ସୈନିକ ଅର୍ଥ ସେନାରେ କାମ କରୁଥିବା ଲୋକ । ମାଗିର ଭାଇ ଭାରତରେ ଏକ ସୈନିକ ଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WORRIED",
            odia: "ଚିନ୍ତାଗ୍ରସ୍ତ",
            emoji: "😰",
            odiaUse: "ଚିନ୍ତାଗ୍ରସ୍ତ ଅର୍ଥ ମନରେ ଭୟ ଓ ଚିନ୍ତା ଥିବା । ମାଗିର ମାଆ ତାହାର ଭାଇ ପାଇଁ ବହୁତ ଚିନ୍ତାଗ୍ରସ୍ତ ଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COURAGE",
            odia: "ସାହସ",
            emoji: "💪",
            odiaUse: "ସାହସ ଅର୍ଥ ଡରକୁ ଛାଡ଼ି କାମ କରିବାର ଶକ୍ତି । ମାଗିର ତାଙ୍କୁ ଘରକୁ ଡାକିବାର ସାହସ ନ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ACCOMPANY",
            odia: "ସାଙ୍ଗରେ ଯିବା",
            emoji: "🚶‍♂️",
            odiaUse: "ସାଙ୍ଗରେ ଯିବା ଅର୍ଥ ଜଣକ ସହ ଚାଲିଯିବା । ମାଗି ଚାହୁଁଥିଲା ସେ ତାହା ସାଙ୍ଗରେ ଘରକୁ ଯାଆନ୍ତୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OPPOSITE",
            odia: "ସାମ୍ନା",
            emoji: "↔️",
            odiaUse: "ସାମ୍ନା ଅର୍ଥ ଠିକ୍ ଆଗରେ । ସେ ମାଗିର ସାମ୍ନା ଚୌକିରେ ବସିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CONVERSATION",
            odia: "କଥୋପକଥନ",
            emoji: "💬",
            odiaUse: "କଥୋପକଥନ ଅର୍ଥ ଦୁଇ ଜଣଙ୍କ ମଧ୍ୟରେ କଥାବାର୍ତ୍ତା । ସେ ମାଗି ସହ ଏକ କଥୋପକଥନ ଆରମ୍ଭ କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OPPORTUNITY",
            odia: "ସୁଯୋଗ",
            emoji: "🎯",
            odiaUse: "ସୁଯୋଗ ଅର୍ଥ ଏକ ଭଲ ମୁହୂର୍ତ୍ତ । ଏହା ତାଙ୍କୁ ପଚାରିବାର ସୁଯୋଗ ଦେଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NEIGHBOURHOOD",
            odia: "ପଡ଼ୋଶୀ ଅଞ୍ଚଳ",
            emoji: "🏘️",
            odiaUse: "ପଡ଼ୋଶୀ ଅଞ୍ଚଳ ଅର୍ଥ ଆଖପାଖ ବସତି ଅଞ୍ଚଳ । ସେମାନେ ଶୀଘ୍ର ସେମାନଙ୍କ ପଡ଼ୋଶୀ ଅଞ୍ଚଳ ପାଖରେ ପହଞ୍ଚିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DOORWAY",
            odia: "ଦ୍ୱାର ପଥ",
            emoji: "🚪",
            odiaUse: "ଦ୍ୱାର ପଥ ଅର୍ଥ ଘର ଭିତରକୁ ଯିବାର ପଥ । ସେମାନେ ଏକ ସଂକୀର୍ଣ୍ଣ ଦ୍ୱାର ପଥରେ ପହଞ୍ଚିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LATCH KEY",
            odia: "କୁଞ୍ଚିକା",
            emoji: "🔑",
            odiaUse: "କୁଞ୍ଚିକା ଅର୍ଥ ଦ୍ୱାର ଖୋଲିବା ଚାବି । ମାଗି ପକେଟରୁ ଏକ ପତଳା କୁଞ୍ଚିକା ବାହାର କରି ଦ୍ୱାର ଖୋଲିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ଭାରତୀୟ ସଭ୍ୟତା ଓ ଏହାର ବିଶେଷତା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତୀୟ ସଭ୍ୟତା ପୃଥିବୀର ଅନେକ ପ୍ରାଚୀନ ସଭ୍ୟତା ମଧ୍ୟରୁ ଅନ୍ୟତମ । ଭାରତ ପୃଥିବୀର ସର୍ବବୃହତ୍ ଗଣତାନ୍ତ୍ରିକ ରାଷ୍ଟ୍ର ଏବଂ ବିକାଶଶୀଳ ରାଷ୍ଟ୍ରମାନଙ୍କ ମଧ୍ୟରେ ଅଗ୍ରଗଣ୍ୟ । ସ୍ଵାଧୀନତା ପାଇବା ପରଠାରୁ ଭାରତ କୃଷି, ଶିଳ୍ପ, ଯୋଗାଯୋଗ, ବିଜ୍ଞାନ ଓ ପ୍ରଯୁକ୍ତି ବିଦ୍ୟା କ୍ଷେତ୍ରରେ ବହୁତ ଅଗ୍ରଗତି କରିଛି ।<br><br>👉 ଉଦାହରଣ: ଭାରତର ଜନସଂଖ୍ୟା ୧୨୧ କୋଟିରୁ ଅଧିକ ଥିବାରୁ ଏହା ଜନସଂଖ୍ୟା ଦୃଷ୍ଟିରୁ ପୃଥିବୀରେ ଦ୍ୱିତୀୟ ସ୍ଥାନରେ ରହିଛି, ଠିକ୍ ଯେମିତି ତୁମ ସ୍କୁଲର ଛାତ୍ର ସଂଖ୍ୟାକୁ ଅନ୍ୟ ସ୍କୁଲ ସହିତ ତୁଳନା କରାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାରତକୁ କାହିଁକି ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଗଣତାନ୍ତ୍ରିକ ରାଷ୍ଟ୍ର କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ପୃଥିବୀର ସର୍ବବୃହତ୍ ଗଣତାନ୍ତ୍ରିକ ରାଷ୍ଟ୍ର ଏବଂ ବିକାଶଶୀଳ ରାଷ୍ଟ୍ରମାନଙ୍କ ମଧ୍ୟରେ ଅଗ୍ରଗଣ୍ୟ, ତେଣୁ ଏହାକୁ ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଗଣତାନ୍ତ୍ରିକ ରାଷ୍ଟ୍ର କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ସ୍ଵାଧୀନତା ପରେ ଭାରତ କେଉଁ କେଉଁ କ୍ଷେତ୍ରରେ ଅଗ୍ରଗତି କରିଛି ?<br><br><span style='color:green;'>Answer:</span> ସ୍ଵାଧୀନତା ପରେ ଭାରତ କୃଷି, ଶିଳ୍ପ, ଯୋଗାଯୋଗ, ବିଜ୍ଞାନ ଓ ପ୍ରଯୁକ୍ତି ବିଦ୍ୟା କ୍ଷେତ୍ରରେ ଅଗ୍ରଗତି କରିଛି ।",

"<span style='color:red;'>Q-3:</span> ଜନସଂଖ୍ୟା ଦୃଷ୍ଟିରୁ ଭାରତର ପୃଥିବୀରେ କେଉଁ ସ୍ଥାନ ରହିଛି ?<br><br><span style='color:green;'>Answer:</span> ଜନସଂଖ୍ୟା ଦୃଷ୍ଟିରୁ ଭାରତର ପୃଥିବୀରେ ଦ୍ୱିତୀୟ ସ୍ଥାନ ରହିଛି ।",

"<span style='color:red;'>Q-4:</span> ଭାରତର ଜନସଂଖ୍ୟା କେତେ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ଜନସଂଖ୍ୟା ୧୨୧ କୋଟିରୁ ଅଧିକ ।"

]
},

{
heading: "NOTE-2: ବିଭିନ୍ନତା ମଧ୍ୟରେ ଏକତା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତର ଜଳବାୟୁ ଓ ଜନବସତି ବିଭିନ୍ନ ଅଞ୍ଚଳରେ ଭିନ୍ନ ଭିନ୍ନ ଥିବାରୁ ଏହା ପ୍ରାକୃତିକ ବୈଚିତ୍ର୍ୟରେ ପରିପୂର୍ଣ । ଏଠାରେ ସୁଉଚ୍ଚ ପର୍ବତ, ମାଳଭୂମି, ଘନ ଅରଣ୍ୟ, ନଦନଦୀ, ଉର୍ବର ସମତଳ ଭୂମି ଓ ମରୁଭୂମି ଦେଖାଯାଏ । ଏଠାରେ ବିଭିନ୍ନ ଭାଷାଭାଷୀ ଓ ଧର୍ମାବଲମ୍ବୀ ଲୋକ ମିଳିମିଶି ରୁହନ୍ତି, ତେଣୁ ଭାରତକୁ ‘ବିଭିନ୍ନତା ମଧ୍ୟରେ ଏକତା’ ବୋଲି କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଯେମିତି ଏକ ଥାଳିରେ ବିଭିନ୍ନ ପ୍ରକାରର ତରକାରୀ ମିଶି ଏକ ସୁସ୍ୱାଦୁ ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ ହୁଏ, ସେହିପରି ଭାରତରେ ବିଭିନ୍ନ ଭାଷା, ଖାଦ୍ୟପେୟ ଓ ପୋଷାକ ଥାଇ ମଧ୍ୟ ସମସ୍ତେ ମିଶି ଏକ ଦେଶ ଭାବେ ରୁହନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ‘ବିଭିନ୍ନତା ମଧ୍ୟରେ ଏକତା’ କହିଲେ କ'ଣ ବୁଝ ?<br><br><span style='color:green;'>Answer:</span> ଭିନ୍ନ ଭିନ୍ନ ଭାଷା, ଧର୍ମ, ଖାଦ୍ୟପେୟ ଓ ପୋଷାକ ଥାଇ ମଧ୍ୟ ସମସ୍ତ ଲୋକ ମିଶି ଏକ ଦେଶ ଭାବେ ରହିବାକୁ ‘ବିଭିନ୍ନତା ମଧ୍ୟରେ ଏକତା’ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଭାରତରେ କେଉଁ କେଉଁ ପ୍ରାକୃତିକ ଦୃଶ୍ୟ ଦେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତରେ ସୁଉଚ୍ଚ ପର୍ବତ, ମାଳଭୂମି, ଘନ ଅରଣ୍ୟ, ନଦନଦୀ, ଉର୍ବର ସମତଳ ଭୂମି ଓ ମରୁଭୂମି ଦେଖାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଭାରତର ଜଳବାୟୁ ବିଭିନ୍ନ ଅଞ୍ଚଳରେ କାହିଁକି ଭିନ୍ନ ଭିନ୍ନ ହୋଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ଏକ ବିଶାଳ ଦେଶ ହୋଇଥିବାରୁ ଏବଂ ପ୍ରାକୃତିକ ବୈଚିତ୍ର୍ୟରେ ପରିପୂର୍ଣ ହୋଇଥିବାରୁ ଏହାର ଜଳବାୟୁ ବିଭିନ୍ନ ଅଞ୍ଚଳରେ ଭିନ୍ନ ଭିନ୍ନ ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-4:</span> ଭାରତକୁ କାହିଁକି ଏକ ଉପମହାଦେଶ ବୋଲି କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ଏକ ସୁସଂଗଠିତ ଭୂଖଣ୍ଡ ହୋଇଥିବାରୁ ଏବଂ ଏହାର ଏକ ଭୌଗୋଳିକ ସ୍ଵାତନ୍ତ୍ର୍ୟ ଥିବାରୁ ଏହାକୁ ଏକ ଉପମହାଦେଶ ବୋଲି କୁହାଯାଏ ।"

]
},

{
heading: "NOTE-3: ଭାରତର ଗଠନ - ମୂଳଭୂଖଣ୍ଡ ଓ ଦ୍ୱୀପପୁଞ୍ଜ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତ ମୂଳଭୂଖଣ୍ଡ ଓ ଦୁଇଟି ଦ୍ୱୀପପୁଞ୍ଜକୁ ନେଇ ଗଠିତ । ଦକ୍ଷିଣ-ପୂର୍ବ ବଙ୍ଗୋପସାଗରରେ ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜ ଅଛି, ଆଉ ଦକ୍ଷିଣ-ପଶ୍ଚିମରେ ଆରବ ସାଗରରେ ଲାକ୍ଷାଦ୍ୱୀପ ଅବସ୍ଥିତ ।<br><br>👉 ଉଦାହରଣ: ଯେମିତି ଏକ ଘର ମୁଖ୍ୟ ବଡ଼ ଅଂଶ ଏବଂ ତାହା ସହିତ ଥିବା ଛୋଟ ଛୋଟ କୋଠରୀକୁ ମିଶାଇ ସଂପୂର୍ଣ୍ଣ ହୁଏ, ସେହିପରି ଭାରତର ମୂଳଭୂଖଣ୍ଡ ସହିତ ଆଣ୍ଡାମାନ-ନିକୋବର ଓ ଲାକ୍ଷାଦ୍ୱୀପକୁ ମିଶାଇ ସଂପୂର୍ଣ୍ଣ ଭାରତ ଗଠିତ ହୁଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାରତ କେଉଁ କେଉଁ ଅଂଶକୁ ନେଇ ଗଠିତ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ମୂଳଭୂଖଣ୍ଡ ଓ ଦୁଇଟି ଦ୍ୱୀପପୁଞ୍ଜ, ଅର୍ଥାତ୍ ଆଣ୍ଡାମାନ-ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜ ଓ ଲାକ୍ଷାଦ୍ୱୀପକୁ ନେଇ ଗଠିତ ।",

"<span style='color:red;'>Q-2:</span> ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜ କେଉଁଠାରେ ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜ ଦକ୍ଷିଣ-ପୂର୍ବ ବଙ୍ଗୋପସାଗରରେ ଅବସ୍ଥିତ ।",

"<span style='color:red;'>Q-3:</span> ଲାକ୍ଷାଦ୍ୱୀପ କେଉଁ ସାଗରରେ ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ଲାକ୍ଷାଦ୍ୱୀପ ଆରବ ସାଗରର ଦକ୍ଷିଣ-ପଶ୍ଚିମ ଦିଗରେ ଅବସ୍ଥିତ ।",

"<span style='color:red;'>Q-4:</span> ଭାରତର ଦ୍ୱୀପପୁଞ୍ଜ ବିଷୟରେ ଅଧିକ ଜାଣିବାକୁ ଆମେ କେଉଁ ମାଧ୍ୟମ ବ୍ୟବହାର କରିପାରିବା ?<br><br><span style='color:green;'>Answer:</span> ଏହି ଦ୍ୱୀପପୁଞ୍ଜଗୁଡ଼ିକର ବିସ୍ତାର ଜାଣିବା ପାଇଁ ଆମେ ଆଟଲାସ୍ ବ୍ୟବହାର କରିପାରିବା ।"

]
},

{
heading: "NOTE-4: ଭାରତର ଭୌଗୋଳିକ ଅବସ୍ଥିତି :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତ ଉତ୍ତରଗୋଲାର୍ଦ୍ଧରେ ଏସିଆ ମହାଦେଶର ଦକ୍ଷିଣାଂଶରେ ଅବସ୍ଥିତ । କର୍କଟକ୍ରାନ୍ତି ରେଖା ଭାରତର ମଧ୍ୟଭାଗ ଦେଇ ଯାଇଥିବାରୁ ଏହା ଭାରତକୁ ପ୍ରାୟ ଦୁଇ ସମାନ ଭାଗରେ ବିଭକ୍ତ କରେ । ଏହି କାରଣରୁ ଭାରତ ସଂପୂର୍ଣ୍ଣ ରୂପେ ଉତ୍ତରଗୋଲାର୍ଦ୍ଧର ଉପକ୍ରାନ୍ତୀୟ ଓ କ୍ରାନ୍ତୀୟ ମଣ୍ଡଳରେ ରହିଛି ।<br><br>👉 ଉଦାହରଣ: ଯେମିତି ଏକ ଫିତାକୁ ମଝିରୁ କାଟିଲେ ଏହା ଦୁଇ ଭାଗ ହୋଇଯାଏ, ସେହିପରି କର୍କଟକ୍ରାନ୍ତି ରେଖା ଭାରତକୁ ଉତ୍ତର ଓ ଦକ୍ଷିଣ ଭାଗରେ ପ୍ରାୟ ସମାନ ଭାବରେ ବିଭକ୍ତ କରିଥାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାରତ ପୃଥିବୀର କେଉଁ ଗୋଲାର୍ଦ୍ଧ ଓ କେଉଁ ମହାଦେଶରେ ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ଉତ୍ତରଗୋଲାର୍ଦ୍ଧରେ ଏସିଆ ମହାଦେଶର ଦକ୍ଷିଣାଂଶରେ ଅବସ୍ଥିତ ।",

"<span style='color:red;'>Q-2:</span> କର୍କଟକ୍ରାନ୍ତି ରେଖା ଭାରତ ପାଇଁ କେଉଁ ଭୂମିକା ପାଳନ କରେ ?<br><br><span style='color:green;'>Answer:</span> କର୍କଟକ୍ରାନ୍ତି ରେଖା ଭାରତର ମଧ୍ୟଭାଗ ଦେଇ ଯାଇ ଏହାକୁ ପ୍ରାୟ ଦୁଇ ସମାନ ଭାଗରେ ବିଭକ୍ତ କରେ ।",

"<span style='color:red;'>Q-3:</span> କର୍କଟକ୍ରାନ୍ତି ରେଖାର ଅକ୍ଷାଂଶ ମୂଲ୍ୟ କେତେ ?<br><br><span style='color:green;'>Answer:</span> କର୍କଟକ୍ରାନ୍ତି ରେଖାର ଅକ୍ଷାଂଶ ମୂଲ୍ୟ ୨୩°୩୦′ ଉତ୍ତର ।",

"<span style='color:red;'>Q-4:</span> ଭାରତ କେଉଁ ମଣ୍ଡଳରେ ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ସଂପୂର୍ଣ୍ଣ ରୂପେ ଉତ୍ତରଗୋଲାର୍ଦ୍ଧର ଉପକ୍ରାନ୍ତୀୟ ଓ କ୍ରାନ୍ତୀୟ ମଣ୍ଡଳରେ ଅବସ୍ଥିତ ।"

]
},

{
heading: "NOTE-5: ସୁଏଜ୍ କେନାଲ୍ ଓ ପ୍ରାଚୀନ ରେଶମ ମାର୍ଗ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ୧୮୬୯ ମସିହାରେ ସୁଏଜ୍ କେନାଲ୍ ଖୋଲିବା ପରେ ଭାରତ ଓ ଇଉରୋପ ମଧ୍ୟରେ ଦୂରତ୍ୱ ୭୦୦୦ କି.ମି. ହ୍ରାସ ପାଇଥିଲା । ଏହା ବ୍ୟତୀତ ଭାରତ ଉତ୍ତର-ପଶ୍ଚିମ ଦିଗରେ ସ୍ଥଳପଥ ଦ୍ୱାରା ପ୍ରାଚୀନ ‘ରେଶମ ମାର୍ଗ’ ସହ ସଂଯୁକ୍ତ ହୋଇଥିଲା ।<br><br>👉 ଉଦାହରଣ: ଯେମିତି ଏକ ନୂଆ ସିଧା ରାସ୍ତା ତିଆରି ହେଲେ ଦୁଇ ସହର ମଧ୍ୟରେ ଯିବା ସମୟ କମିଯାଏ, ସେହିପରି ସୁଏଜ୍ କେନାଲ୍ ଖୋଲିବା ପରେ ଭାରତରୁ ଇଉରୋପ ଯିବାର ଦୂରତ୍ୱ ବହୁତ କମିଗଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସୁଏଜ୍ କେନାଲ୍ କେବେ ଖୋଲାଯାଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସୁଏଜ୍ କେନାଲ୍ ୧୮୬୯ ମସିହାରେ ଖୋଲାଯାଇଥିଲା ।",

"<span style='color:red;'>Q-2:</span> ସୁଏଜ୍ କେନାଲ୍ ଖୋଲିବା ଫଳରେ କେଉଁ ପରିବର୍ତ୍ତନ ଘଟିଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ସୁଏଜ୍ କେନାଲ୍ ଖୋଲିବା ଫଳରେ ଭାରତ ଓ ଇଉରୋପ ମଧ୍ୟରେ ଦୂରତ୍ୱ ୭୦୦୦ କି.ମି. ହ୍ରାସ ପାଇଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଭାରତ କେଉଁ ପ୍ରାଚୀନ ମାର୍ଗ ସହ ସ୍ଥଳପଥ ଦ୍ୱାରା ସଂଯୁକ୍ତ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଭାରତ ପ୍ରାଚୀନ ‘ରେଶମ ମାର୍ଗ’ ସହ ସ୍ଥଳପଥ ଦ୍ୱାରା ସଂଯୁକ୍ତ ଥିଲା ।",

"<span style='color:red;'>Q-4:</span> ରେଶମ ମାର୍ଗ ଭାରତର କେଉଁ ଦିଗରେ ଅବସ୍ଥିତ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ରେଶମ ମାର୍ଗ ଭାରତର ଉତ୍ତର-ପଶ୍ଚିମ ଦିଗରେ ଅବସ୍ଥିତ ଥିଲା ।"

]
},

{
heading: "NOTE-6: ଭାରତର ଆକାର ଓ କ୍ଷେତ୍ରଫଳ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତର କ୍ଷେତ୍ରଫଳ ୩.୨୮ ନିୟୁତ ବର୍ଗ କି.ମି., ଯାହା ପୃଥିବୀର ସମୁଦାୟ ଭୌଗୋଳିକ କ୍ଷେତ୍ରଫଳର ମାତ୍ର ୨.୪ ପ୍ରତିଶତ । ଏହାର ସ୍ଥଳଭାଗର ସୀମାରେଖା ପ୍ରାୟ ୧୫,୨୦୦ କି.ମି. ଏବଂ ମୂଳଭୂଖଣ୍ଡ ସହିତ ଦ୍ୱୀପପୁଞ୍ଜକୁ ମିଶାଇ ଉପକୂଳରେଖାର ଦୈର୍ଘ୍ୟ ୭,୫୦୦ କି.ମି.ରୁ ଅଧିକ ।<br><br>👉 ଉଦାହରଣ: ଯେମିତି ଏକ ବଡ଼ ମାଠିଆର ଚାରିପାଖରେ ମାପ ନେଲେ ତାହାର ପରିଧି ମିଳେ, ସେହିପରି ଭାରତର ଚାରିପାଖ ମାପିଲେ ଏହାର ସ୍ଥଳ ସୀମାରେଖା ଓ ଉପକୂଳରେଖାର ଦୈର୍ଘ୍ୟ ମିଳେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାରତର କ୍ଷେତ୍ରଫଳ କେତେ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର କ୍ଷେତ୍ରଫଳ ୩.୨୮ ନିୟୁତ ବର୍ଗ କି.ମି. ।",

"<span style='color:red;'>Q-2:</span> ପୃଥିବୀର ମୋଟ କ୍ଷେତ୍ରଫଳର କେତେ ପ୍ରତିଶତ ଭାରତର ଅଂଶ ?<br><br><span style='color:green;'>Answer:</span> ପୃଥିବୀର ମୋଟ କ୍ଷେତ୍ରଫଳର ମାତ୍ର ୨.୪ ପ୍ରତିଶତ ଭାରତର ଅଂଶ ।",

"<span style='color:red;'>Q-3:</span> ଭାରତର ସ୍ଥଳଭାଗ ସୀମାରେଖାର ଦୈର୍ଘ୍ୟ କେତେ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ସ୍ଥଳଭାଗ ସୀମାରେଖାର ଦୈର୍ଘ୍ୟ ପ୍ରାୟ ୧୫,୨୦୦ କି.ମି. ।",

"<span style='color:red;'>Q-4:</span> ଭାରତର ମୋଟ ଉପକୂଳରେଖାର ଦୈର୍ଘ୍ୟ କେତେ ?<br><br><span style='color:green;'>Answer:</span> ମୂଳଭୂଖଣ୍ଡ ସହିତ ଦ୍ୱୀପପୁଞ୍ଜକୁ ମିଶାଇ ଭାରତର ଉପକୂଳରେଖାର ଦୈର୍ଘ୍ୟ ୭,୫୦୦ କି.ମି.ରୁ ଅଧିକ ।"

]
},

{
heading: "NOTE-7: ପୃଥିବୀର ସାତଟି ବୃହତ୍ତମ ଦେଶ ମଧ୍ୟରେ ଭାରତର ସ୍ଥାନ :-",

audioPoints: [{
text:"👉 ଧାରଣା: କ୍ଷେତ୍ରଫଳ ଅନୁସାରେ ପୃଥିବୀର ସାତଟି ବୃହତ୍ତମ ଦେଶ ହେଲା- ରୁଷିଆ, କାନାଡ଼ା, ଯୁକ୍ତରାଷ୍ଟ୍ର ଆମେରିକା, ଚୀନ୍, ବ୍ରାଜିଲ, ଅଷ୍ଟ୍ରେଲିଆ ଓ ଭାରତ । ଏଥିରୁ ସ୍ପଷ୍ଟ ଯେ ଭାରତ କ୍ଷେତ୍ରଫଳ ଦୃଷ୍ଟିରୁ ପୃଥିବୀର ସପ୍ତମ ବୃହତ୍ତମ ଦେଶ ।<br><br>👉 ଉଦାହରଣ: ଯେମିତି ଏକ ଦୌଡ଼ ପ୍ରତିଯୋଗିତାରେ ସାତ ଜଣ ପ୍ରତିଯୋଗୀଙ୍କ ମଧ୍ୟରୁ ସପ୍ତମ ସ୍ଥାନ ପାଇଥିବା ପ୍ରତିଯୋଗୀ ମଧ୍ୟ ଅଗ୍ରଗଣ୍ୟ ଗଣାଯାଏ, ସେହିପରି ଭାରତ ବିଶ୍ୱର ସାତଟି ବୃହତ୍ତମ ଦେଶ ମଧ୍ୟରେ ସପ୍ତମ ସ୍ଥାନରେ ରହିଛି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> କ୍ଷେତ୍ରଫଳ ଅନୁସାରେ ପୃଥିବୀରେ ସବୁଠାରୁ ବଡ଼ ଦେଶ କେଉଁଟି ?<br><br><span style='color:green;'>Answer:</span> କ୍ଷେତ୍ରଫଳ ଅନୁସାରେ ପୃଥିବୀରେ ସବୁଠାରୁ ବଡ଼ ଦେଶ ରୁଷିଆ ।",

"<span style='color:red;'>Q-2:</span> କ୍ଷେତ୍ରଫଳ ଦୃଷ୍ଟିରୁ ଭାରତର ପୃଥିବୀରେ କେଉଁ ସ୍ଥାନ ରହିଛି ?<br><br><span style='color:green;'>Answer:</span> କ୍ଷେତ୍ରଫଳ ଦୃଷ୍ଟିରୁ ଭାରତର ପୃଥିବୀରେ ସପ୍ତମ ସ୍ଥାନ ରହିଛି ।",

"<span style='color:red;'>Q-3:</span> ପୃଥିବୀର ସାତଟି ବୃହତ୍ତମ ଦେଶର ନାମ ଲେଖ ।<br><br><span style='color:green;'>Answer:</span> ରୁଷିଆ, କାନାଡ଼ା, ଯୁକ୍ତରାଷ୍ଟ୍ର ଆମେରିକା, ଚୀନ୍, ବ୍ରାଜିଲ, ଅଷ୍ଟ୍ରେଲିଆ ଓ ଭାରତ ପୃଥିବୀର ସାତଟି ବୃହତ୍ତମ ଦେଶ ।",

"<span style='color:red;'>Q-4:</span> ଭାରତ ଓ ଚୀନ୍ ମଧ୍ୟରୁ କ୍ଷେତ୍ରଫଳରେ କେଉଁଟି ବଡ଼ ?<br><br><span style='color:green;'>Answer:</span> ଚୀନ୍‌ର କ୍ଷେତ୍ରଫଳ ୯.୫୯ ନିୟୁତ ବର୍ଗ କି.ମି. ଥିବାରୁ ଏହା ଭାରତର ୩.୨୮ ନିୟୁତ ବର୍ଗ କି.ମି. ଠାରୁ ବଡ଼ ।"

]
},

{
heading: "NOTE-8: ଭାରତର ଚରମ ବିନ୍ଦୁଗୁଡ଼ିକ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଭାରତର ଦକ୍ଷିଣତମ ସ୍ଥାନର ନାମ ଇନ୍ଦିରା ପଏଣ୍ଟ, ଯାହା ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜରେ ଅବସ୍ଥିତ । ମୂଳଭୂଖଣ୍ଡର ଦକ୍ଷିଣତମ ସ୍ଥାନ କନ୍ୟାକୁମାରୀ, ତାମିଲନାଡୁ ରାଜ୍ୟରେ ଅବସ୍ଥିତ । ଉତ୍ତରତମ ସ୍ଥାନ କାରାକୋରମ ପର୍ବତଶ୍ରେଣୀରେ, ପୂର୍ବତମ ସ୍ଥାନ ଅରୁଣାଚଳ ପ୍ରଦେଶରେ ଏବଂ ପଶ୍ଚିମତମ ସ୍ଥାନ କଚ୍ଛରେ ଅବସ୍ଥିତ ।<br><br>👉 ଉଦାହରଣ: ଯେମିତି ଏକ ମାନଚିତ୍ରର ଚାରି କୋଣକୁ ଚିହ୍ନଟ କରାଯାଏ, ସେହିପରି ଭାରତର ଉତ୍ତର, ଦକ୍ଷିଣ, ପୂର୍ବ ଓ ପଶ୍ଚିମ ଦିଗର ଶେଷ ସ୍ଥାନଗୁଡ଼ିକୁ ଚରମ ବିନ୍ଦୁ କୁହାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଭାରତର ଦକ୍ଷିଣତମ ସ୍ଥାନର ନାମ କ'ଣ ଏବଂ ଏହା କେଉଁଠାରେ ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ଦକ୍ଷିଣତମ ସ୍ଥାନର ନାମ ଇନ୍ଦିରା ପଏଣ୍ଟ, ଯାହା ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜରେ ଅବସ୍ଥିତ ।",

"<span style='color:red;'>Q-2:</span> ମୂଳଭୂଖଣ୍ଡର ଦକ୍ଷିଣତମ ସ୍ଥାନ କେଉଁଠାରେ ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ମୂଳଭୂଖଣ୍ଡର ଦକ୍ଷିଣତମ ସ୍ଥାନ କନ୍ୟାକୁମାରୀ ତାମିଲନାଡୁ ରାଜ୍ୟରେ ଅବସ୍ଥିତ ।",

"<span style='color:red;'>Q-3:</span> ଭାରତର ଉତ୍ତରତମ ଓ ପୂର୍ବତମ ସ୍ଥାନ କେଉଁଠାରେ ଅବସ୍ଥିତ ?<br><br><span style='color:green;'>Answer:</span> ଭାରତର ଉତ୍ତରତମ ସ୍ଥାନ କାରାକୋରମ ପର୍ବତଶ୍ରେଣୀରେ ଏବଂ ପୂର୍ବତମ ସ୍ଥାନ ଅରୁଣାଚଳ ପ୍ରଦେଶରେ ଅବସ୍ଥିତ ।",

"<span style='color:red;'>Q-4:</span> ଇନ୍ଦିରା ପଏଣ୍ଟ ୨୦୦୪ ମସିହାରେ କାହିଁକି ଆଲୋଚିତ ହୋଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ୨୦୦୪ ମସିହାରେ ଆସିଥିବା ସୁନାମି ଦ୍ୱାରା ଇନ୍ଦିରା ପଏଣ୍ଟ ସଂପୂର୍ଣ୍ଣ ଭାବରେ ସମୁଦ୍ର ଗର୍ଭରେ ଲୀନ ହୋଇଯାଇଥିଲା ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ଅମୂଲ୍ୟ ଉପହାର –<br/>ଏକ ଅଜଣା ବାଳିକା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଆରମ୍ଭ\"]\nA --> I1[\"ଉପହାର ବିଷୟରେ<br/>ଆଲୋଚନା କରାଯାଏ।\"]\nA --> I2[\"ଛୋଟ ଉପହାର କାହିଁକି<br/>ମୂଲ୍ୟବାନ ହୁଏ ବିଚାର।\"]\nA --> I3[\"'ଅମୂଲ୍ୟ ଉପହାର' କାହାଣୀ<br/>ପଢ଼ାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ରେଷ୍ଟୁରାଣ୍ଟରେ ଘଟଣା\"]\nM --> M1[\"ଲେଖକ ଏକ ନିରାମିଷ<br/>ରେଷ୍ଟୁରାଣ୍ଟକୁ ଯାଆନ୍ତି।\"]\nM --> M2[\"ଏକ କୋଣ ଟେବୁଲରେ<br/>ବସି ଖବରକାଗଜ ପଢ଼ନ୍ତି।\"]\nM --> M3[\"ଏକ ଛୋଟ ବାଳିକା<br/>ତାଙ୍କୁ ଚାହିଁ ରହିଥାଏ।\"]\nM --> M4[\"ବାଳିକା କ୍ୟାଶିଆରକୁ ପଚାରେ<br/>'ସେ ଭାରତୀୟ କି?'\"]\nM --> M5[\"ଉତ୍ତର ଶୁଣି ବାଳିକା<br/>ଥରେ ଅଣନଜରେ ଚାହିଁ ଚାଲିଯାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 କୌତୁହଳ\"]\nC --> C1[\"ଲେଖକ ବାଳିକାର<br/>ଆଚରଣରେ ଆଶ୍ଚର୍ଯ୍ୟ ହୁଅନ୍ତି।\"]\nC --> C2[\"ସେ ୱେଟରଙ୍କୁ ବାଳିକା<br/>ବିଷୟରେ ପଚାରନ୍ତି।\"]\nC --> C3[\"ବାଳିକାର ଦୁଃଖୀ ଚେହେରା<br/>ତାଙ୍କ ମନରେ ରହିଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ମାଗି ସହିତ<br/>ପରିଚୟ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ୱେଟରଙ୍କ କଥା\"]\nA --> I1[\"ବାଳିକା ପ୍ରତି ଶନିବାର<br/>ଏଠାରେ ଖାଏ।\"]\nA --> I2[\"ସେ କେବଳ 'ପେ ଡେ'<br/>ଦିନ ଆସେ।\"]\nA --> I3[\"ସେ ବେଶୀ ରୋଜଗାର<br/>କରନ୍ତି ନାହିଁ ବୋଲି ଅନୁମାନ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପରବର୍ତ୍ତୀ ଶନିବାର\"]\nM --> M1[\"ଲେଖକ ପୁଣି ସେହି<br/>ରେଷ୍ଟୁରାଣ୍ଟକୁ ଯାଆନ୍ତି।\"]\nM --> M2[\"ବାଳିକା ସାମ୍ନା<br/>ଚଉକିରେ ବସନ୍ତି।\"]\nM --> M3[\"ବାତାଳାପରେ ବାଳିକା<br/>ପଚାରେ 'ଆପଣ ଭାରତୀୟ କି?'\"]\nM --> M4[\"ତାଙ୍କ ଭାଇ ଭାରତରେ<br/>ସୈନିକ ଭାବେ କାର୍ଯ୍ୟରତ।\"]\nM --> M5[\"ବହୁ ଦିନ ହେଲା ଚିଠି<br/>ନ ଆସିବାରୁ ମା ଚିନ୍ତିତ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମାଗି ଓ ତାଙ୍କ ଘର\"]\nC --> C1[\"ବାଳିକାର ନାମ<br/>ମାଗି ବୋଲି ଜଣାପଡ଼େ।\"]\nC --> C2[\"ସେ ବିଧବା ମା<br/>ମିସେସ ବେଥି ସହ ରୁହନ୍ତି।\"]\nC --> C3[\"ଲେଖକ ତାଙ୍କ ସହିତ<br/>ଘର ପର୍ଯ୍ୟନ୍ତ ଯାଆନ୍ତି।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
  
      
}  
]
};  
