const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ସଂସ୍କୃତ ବ୍ୟାକରଣ "
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9TLSG1P2-3.mp3",
    video:  "https://www.youtube.com/embed/ALYME29DZAA?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9TLSG1P2-3.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "LETTER",
            odia: "ବର୍ଣ୍ଣ",
            emoji: "🔤",
            odiaUse: "ଲିଖନ ପ୍ରକ୍ରିୟା ମାଧ୍ୟମରେ ଭାଷାକୁ ବ୍ୟକ୍ତ କରିବା ଲାଗି ଉପଯୋଗୀ ଧ୍ୱନିଗୁଡ଼ିକୁ ବର୍ଣ୍ଣ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VOWEL",
            odia: "ସ୍ୱରବର୍ଣ୍ଣ",
            emoji: "🗣️",
            odiaUse: "ଯେଉଁ ବର୍ଣ୍ଣ ନିରପେକ୍ଷ ଭାବରେ ସ୍ୱତଃ ସ୍ପଷ୍ଟ ଉଚ୍ଚାରିତ ହୁଏ, ତାହା ସ୍ୱରବର୍ଣ୍ଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CONSONANT",
            odia: "ବ୍ୟଞ୍ଜନ",
            emoji: "🔡",
            odiaUse: "ଯାହା ସ୍ୱରର ଅନୁଗାମୀ ବା ସ୍ୱର ବିନା ଉଚ୍ଚାରଣ ହୋଇପାରେ ନାହିଁ, ସେ ‘ବ୍ୟଞ୍ଜନ’ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SHORT VOWEL",
            odia: "ହ୍ରସ୍ୱ ସ୍ୱର",
            emoji: "⏱️",
            odiaUse: "ଅ, ଇ, ଉ, ଋ, ଌ ଏହି ମୂଳସ୍ୱର ପାଞ୍ଚଗୋଟି, ଏମାନଙ୍କର ଉଚ୍ଚାରଣ କାଳ ଏକ ମାତ୍ରା ସମୟ ବିଶିଷ୍ଟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LONG VOWEL",
            odia: "ଦୀର୍ଘସ୍ୱର",
            emoji: "⏳",
            odiaUse: "ଆ, ଈ, ଊ, ଋ, ଏ, ଐ, ଓ, ଔ ଏହି ଦୀର୍ଘସ୍ୱର ଆଠଗୋଟି, ଏମାନଙ୍କର ଉଚ୍ଚାରଣ କାଳ ଦୁଇମାତ୍ରା ସମୟ ବିଶିଷ୍ଟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CLASSIFIED CONSONANT",
            odia: "ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ",
            emoji: "🗂️",
            odiaUse: "ଏଗୁଡ଼ିକୁ ‘ସ୍ପର୍ଶବର୍ଣ୍ଣ’ ମଧ୍ୟ କୁହାଯାଏ । ଏମାନଙ୍କ ସଂଖ୍ୟା ସମୁଦାୟ ୨୫ ଓ ପାଞ୍ଚଗୋଟି ବର୍ଗରେ ବିଭକ୍ତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNCLASSIFIED CONSONANT",
            odia: "ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ",
            emoji: "🧩",
            odiaUse: "ଏମାନଙ୍କ ସଂଖ୍ୟା ସମୁଦାୟ ୮ । ଏହା ଦୁଇଭାଗରେ ବିଭକ୍ତ - ଅନ୍ତଃସ୍ଥ ଓ ଉଷ୍ମ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SEMIVOWEL",
            odia: "ଅନ୍ତଃସ୍ଥ",
            emoji: "🔀",
            odiaUse: "ଯ, ର, ଲ, ବ ଏହି ବର୍ଣ୍ଣମାନଙ୍କୁ ଅର୍ଦ୍ଧସ୍ୱର ମଧ୍ୟ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SIBILANT",
            odia: "ଉଷ୍ମ",
            emoji: "💨",
            odiaUse: "ଶ, ଷ, ସ, ହ ଏହି ବର୍ଣ୍ଣମାନେ ଉଷ୍ମବର୍ଣ୍ଣ ଅଟନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HALANT",
            odia: "ହଳ",
            emoji: "➖",
            odiaUse: "ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣକୁ ହଳ୍ ମଧ୍ୟ କୁହାଯାଏ । କେବଳ ବ୍ୟଞ୍ଜନର ପ୍ରୟୋଗ ‘ହଳ୍’ ଚିହ୍ନ ଯୋଗରେ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AYOGAVAHA",
            odia: "ଅଯୋଗବାହ",
            emoji: "🔗",
            odiaUse: "ଅନୁସ୍ୱାର, ବିସର୍ଗ ଓ ଚନ୍ଦ୍ରବିନ୍ଦୁ ଏହା ସ୍ୱରବର୍ଣ୍ଣ ଓ ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣରେ ମିଶି ଉଚ୍ଚାରିତ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ବର୍ଣ୍ଣ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଲିଖନ ପ୍ରକ୍ରିୟା ମାଧ୍ୟମରେ ଭାଷାକୁ ବ୍ୟକ୍ତ କରିବା ଲାଗି ଉପଯୋଗୀ ବିଶିଷ୍ଟ ଧ୍ୱନିଗୁଡ଼ିକୁ ବା ଧ୍ୱନ୍ୟାତ୍ମକ ସଙ୍କେତଗୁଡ଼ିକୁ ବର୍ଣ୍ଣ କୁହାଯାଏ । ଆମେ ଯାହା କହୁ, ତାହାକୁ ଲେଖିବା ପାଇଁ ବର୍ଣ୍ଣର ଆବଶ୍ୟକତା ପଡ଼େ ।<br><br>👉 ଉଦାହରଣ: ଆମେ ଯେତେବେଳେ 'କ' କହୁ, ସେହି ଧ୍ୱନିକୁ ଲେଖିବା ପାଇଁ ଆମେ 'କ' ବର୍ଣ୍ଣ ବ୍ୟବହାର କରୁ । ସେହିପରି 'ଅ', 'ଆ', 'ଖ' ଆଦି ମଧ୍ୟ ବର୍ଣ୍ଣ ଅଟନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବର୍ଣ୍ଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଲିଖନ ପ୍ରକ୍ରିୟା ମାଧ୍ୟମରେ ଭାଷାକୁ ବ୍ୟକ୍ତ କରିବା ଲାଗି ଉପଯୋଗୀ ଧ୍ୱନ୍ୟାତ୍ମକ ସଙ୍କେତଗୁଡ଼ିକୁ ବର୍ଣ୍ଣ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ବର୍ଣ୍ଣର ଆବଶ୍ୟକତା କାହିଁକି ପଡ଼େ ?<br><br><span style='color:green;'>Answer:</span> ଆମେ କହୁଥିବା କଥାକୁ ଲେଖିବା ପାଇଁ ବର୍ଣ୍ଣର ଆବଶ୍ୟକତା ପଡ଼େ ।",

"<span style='color:red;'>Q-3:</span> ବର୍ଣ୍ଣ କେଉଁ ପ୍ରକାର ଜିନିଷକୁ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ବର୍ଣ୍ଣ ଧ୍ୱନିଗୁଡ଼ିକୁ ବା ଧ୍ୱନ୍ୟାତ୍ମକ ସଙ୍କେତଗୁଡ଼ିକୁ ବୁଝାଏ ।",

"<span style='color:red;'>Q-4:</span> 'କ' ବର୍ଣ୍ଣର ଉଦାହରଣ କାହିଁକି ଅଟେ ?<br><br><span style='color:green;'>Answer:</span> ଆମେ 'କ' ଧ୍ୱନି କହିଲେ, ତାହାକୁ ଲେଖିବା ପାଇଁ 'କ' ବର୍ଣ୍ଣ ବ୍ୟବହାର ହୁଏ, ତେଣୁ ଏହା ବର୍ଣ୍ଣର ଉଦାହରଣ ।"

]
},

{
heading: "NOTE-2: ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳାକୁ ଦୁଇଟି ପ୍ରଧାନ ଶ୍ରେଣୀରେ ବିଭକ୍ତ କରାଯାଏ - ସ୍ୱର ଓ ବ୍ୟଞ୍ଜନ । ମହର୍ଷି ପାଣିନି ଅଷ୍ଟାଧ୍ୟାୟୀରେ ୧୪ଟି ମାହେଶ୍ୱର ସୂତ୍ର ଉଲ୍ଲେଖ କରି ୯ଟି ସ୍ୱରବର୍ଣ୍ଣ ଓ ୩୩ଟି ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣର ବିନ୍ୟାସ କରିଛନ୍ତି ।<br><br>👉 ଉଦାହରଣ: ମାତ୍ର ଭାଷାରେ ପାଣିନୀୟ ବର୍ଣ୍ଣମାଳା ସହ ଅଯୋଗବାହ ମିଶି ମୋଟ ୪୯ଗୋଟି ବର୍ଣ୍ଣର ବ୍ୟବହାର ଦେଖାଯାଏ ।"
,
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳାକୁ କେତେ ଶ୍ରେଣୀରେ ବିଭକ୍ତ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳାକୁ ଦୁଇଟି ପ୍ରଧାନ ଶ୍ରେଣୀ, ଅର୍ଥାତ୍ ସ୍ୱର ଓ ବ୍ୟଞ୍ଜନରେ ବିଭକ୍ତ କରାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ପାଣିନି କେଉଁ ଗ୍ରନ୍ଥରେ ମାହେଶ୍ୱର ସୂତ୍ର ଉଲ୍ଲେଖ କରିଛନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ପାଣିନି ଅଷ୍ଟାଧ୍ୟାୟୀ ଗ୍ରନ୍ଥରେ ମାହେଶ୍ୱର ସୂତ୍ର ଉଲ୍ଲେଖ କରିଛନ୍ତି ।",

"<span style='color:red;'>Q-3:</span> ପାଣିନିଙ୍କ ମତେ ସ୍ୱର ଓ ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ସଂଖ୍ୟା କେତେ ?<br><br><span style='color:green;'>Answer:</span> ପାଣିନିଙ୍କ ମତେ ୯ଟି ସ୍ୱରବର୍ଣ୍ଣ ଓ ୩୩ଟି ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ଅଛନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ମାତୃଭାଷାରେ ମୋଟ କେତେଗୋଟି ବର୍ଣ୍ଣ ବ୍ୟବହାର ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ମାତୃଭାଷାରେ ପାଣିନୀୟ ବର୍ଣ୍ଣମାଳା ସହ ଅଯୋଗବାହ ମିଶି ମୋଟ ୪୯ଗୋଟି ବର୍ଣ୍ଣ ବ୍ୟବହାର ହୁଏ ।"

]
},

{
heading: "NOTE-3: ସ୍ୱରବର୍ଣ୍ଣ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯେଉଁ ବର୍ଣ୍ଣ ନିରପେକ୍ଷ ଭାବରେ ସ୍ୱତଃ ସ୍ପଷ୍ଟ ଉଚ୍ଚାରିତ ହୁଏ, ତାହାକୁ ସ୍ୱରବର୍ଣ୍ଣ କୁହାଯାଏ । ସ୍ୱରବର୍ଣ୍ଣ ସାହାଯ୍ୟରେ ବ୍ୟଞ୍ଜନର ସ୍ପଷ୍ଟ ଉଚ୍ଚାରଣ ସମ୍ଭବ ହୁଏ । ଉଚ୍ଚାରଣ କାଳର ମାତ୍ରା ଆଧାରରେ ସ୍ୱର ତିନି ପ୍ରକାର - ହ୍ରସ୍ୱ, ଦୀର୍ଘ ଓ ପ୍ଲୁତ ।<br><br>👉 ଉଦାହରଣ: ଆମେ ମୁଖ୍ୟତଃ ହ୍ରସ୍ୱ ଓ ଦୀର୍ଘ ସ୍ୱର ଅଧ୍ୟୟନ କରୁ, ଯାହାର ମୋଟ ସଂଖ୍ୟା ୧୩ ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସ୍ୱରବର୍ଣ୍ଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ବର୍ଣ୍ଣ ନିରପେକ୍ଷ ଭାବରେ ସ୍ୱତଃ ସ୍ପଷ୍ଟ ଉଚ୍ଚାରିତ ହୁଏ, ତାହାକୁ ସ୍ୱରବର୍ଣ୍ଣ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଉଚ୍ଚାରଣ କାଳର ମାତ୍ରା ଆଧାରରେ ସ୍ୱର କେତେ ପ୍ରକାର ?<br><br><span style='color:green;'>Answer:</span> ଉଚ୍ଚାରଣ କାଳର ମାତ୍ରା ଆଧାରରେ ସ୍ୱର ତିନି ପ୍ରକାର - ହ୍ରସ୍ୱ, ଦୀର୍ଘ ଓ ପ୍ଲୁତ ।",

"<span style='color:red;'>Q-3:</span> ସ୍ୱରବର୍ଣ୍ଣ ସାହାଯ୍ୟରେ କ'ଣ ସମ୍ଭବ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ସ୍ୱରବର୍ଣ୍ଣ ସାହାଯ୍ୟରେ ବ୍ୟଞ୍ଜନର ସ୍ପଷ୍ଟ ଉଚ୍ଚାରଣ ସମ୍ଭବ ହୁଏ ।",

"<span style='color:red;'>Q-4:</span> ହ୍ରସ୍ୱ ଓ ଦୀର୍ଘ ସ୍ୱରର ମୋଟ ସଂଖ୍ୟା କେତେ ?<br><br><span style='color:green;'>Answer:</span> ହ୍ରସ୍ୱ ଓ ଦୀର୍ଘ ସ୍ୱରର ମୋଟ ସଂଖ୍ୟା ୧୩ ଅଟେ ।"

]
},

{
heading: "NOTE-4: ହ୍ରସ୍ୱ ସ୍ୱର :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଅ, ଇ, ଉ, ର, ଳ ଏହି ମୂଳସ୍ୱର ସମୁଦାୟ ପାଞ୍ଚଗୋଟିକୁ ହ୍ରସ୍ୱ ସ୍ୱର କୁହାଯାଏ । ଏମାନଙ୍କର ଉଚ୍ଚାରଣ କାଳ ଏକ ମାତ୍ରା ସମୟ ବିଶିଷ୍ଟ, ଅର୍ଥାତ୍ ଏମାନେ ଅଳ୍ପ ସମୟରେ ଉଚ୍ଚାରିତ ହୁଅନ୍ତି ।<br><br>👉 ଉଦାହରଣ: 'ଅ' ଓ 'ଇ' ପରି ବର୍ଣ୍ଣକୁ ଆମେ ବେଶୀ ଟାଣି ଉଚ୍ଚାରଣ କରୁନାହୁଁ, ଏହା ହ୍ରସ୍ୱ ସ୍ୱରର ଗୁଣ ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ହ୍ରସ୍ୱ ସ୍ୱର କେଉଁ କେଉଁ ବର୍ଣ୍ଣ ଅଟନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଅ, ଇ, ଉ, ର, ଳ ଏହି ପାଞ୍ଚଗୋଟି ବର୍ଣ୍ଣ ହ୍ରସ୍ୱ ସ୍ୱର ଅଟନ୍ତି ।",

"<span style='color:red;'>Q-2:</span> ହ୍ରସ୍ୱ ସ୍ୱରର ଉଚ୍ଚାରଣ କାଳ କେତେ ?<br><br><span style='color:green;'>Answer:</span> ହ୍ରସ୍ୱ ସ୍ୱରର ଉଚ୍ଚାରଣ କାଳ ଏକ ମାତ୍ରା ସମୟ ବିଶିଷ୍ଟ ।",

"<span style='color:red;'>Q-3:</span> ହ୍ରସ୍ୱ ସ୍ୱର ମୋଟ କେତେଗୋଟି ଅଛନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ହ୍ରସ୍ୱ ସ୍ୱର ମୋଟ ପାଞ୍ଚଗୋଟି ଅଛନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ହ୍ରସ୍ୱ ସ୍ୱରକୁ କାହିଁକି ଏହିପରି ନାମ ଦିଆଯାଇଛି ?<br><br><span style='color:green;'>Answer:</span> ଏମାନେ ଅଳ୍ପ ସମୟରେ ଉଚ୍ଚାରିତ ହୁଅନ୍ତି, ତେଣୁ ଏମାନଙ୍କୁ ହ୍ରସ୍ୱ ସ୍ୱର କୁହାଯାଏ ।"

]
},

{
heading: "NOTE-5: ଦୀର୍ଘସ୍ୱର :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଆ, ଈ, ଊ, ର, ଏ, ଐ, ଓ, ଔ ସମୁଦାୟ ଆଠଗୋଟି ବର୍ଣ୍ଣକୁ ଦୀର୍ଘସ୍ୱର କୁହାଯାଏ । ଏମାନଙ୍କର ଉଚ୍ଚାରଣ କାଳ ଦୁଇମାତ୍ରା ସମୟ ବିଶିଷ୍ଟ । ପ୍ରଥମ ଚାରିଗୋଟି ଦୀର୍ଘସ୍ୱର ଆ, ଈ, ଊ, ର ର ହ୍ରସ୍ୱରୂପ କ୍ରମଶଃ ଅ, ଇ, ଉ, ଳ ଅଟେ ।<br><br>👉 ଉଦାହରଣ: ଏ, ଐ, ଓ, ଔ ର ହ୍ରସ୍ୱରୂପ ନାହିଁ । ଏମାନେ ଯଥାକ୍ରମେ ଅ ସହିତ ଇ, ଏ, ଉ ଏବଂ ଓ ମିଳନରୁ ଉଚ୍ଚାରିତ ହୋଇଥିବାରୁ ଏମାନଙ୍କୁ ସନ୍ଧ୍ୟକ୍ଷର କୁହାଯାଏ, ଯଥା ଅ+ଇ=ଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଦୀର୍ଘସ୍ୱର କେଉଁ କେଉଁ ବର୍ଣ୍ଣ ଅଟନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଆ, ଈ, ଊ, ର, ଏ, ଐ, ଓ, ଔ ଏହି ଆଠଗୋଟି ବର୍ଣ୍ଣ ଦୀର୍ଘସ୍ୱର ଅଟନ୍ତି ।",

"<span style='color:red;'>Q-2:</span> ଦୀର୍ଘସ୍ୱରର ଉଚ୍ଚାରଣ କାଳ କେତେ ?<br><br><span style='color:green;'>Answer:</span> ଦୀର୍ଘସ୍ୱରର ଉଚ୍ଚାରଣ କାଳ ଦୁଇମାତ୍ରା ସମୟ ବିଶିଷ୍ଟ ।",

"<span style='color:red;'>Q-3:</span> କେଉଁ ଦୀର୍ଘସ୍ୱରମାନଙ୍କର ହ୍ରସ୍ୱରୂପ ନାହିଁ ?<br><br><span style='color:green;'>Answer:</span> ଏ, ଐ, ଓ, ଔ ର ହ୍ରସ୍ୱରୂପ ନାହିଁ ।",

"<span style='color:red;'>Q-4:</span> ସନ୍ଧ୍ୟକ୍ଷର କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଅ ସହିତ ଇ, ଏ, ଉ ଓ ଓ ମିଳନରୁ ଉଚ୍ଚାରିତ ହେଉଥିବା ଏ, ଐ, ଓ, ଔ ବର୍ଣ୍ଣକୁ ସନ୍ଧ୍ୟକ୍ଷର କୁହାଯାଏ ।"

]
},

{
heading: "NOTE-6: ବ୍ୟଞ୍ଜନବର୍ଣ୍ଣ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯାହା ସ୍ୱରର ଅନୁଗାମୀ ବା ସ୍ୱର ବିନା ଯାହାର ଉଚ୍ଚାରଣ ହୋଇପାରେ ନାହିଁ, ସେ ବ୍ୟଞ୍ଜନ । ବର୍ଣ୍ଣମାଳାର 'କ' ଆଦି ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ସହିତ ଯେଉଁ 'ଅ' ମିଶାଇ ଲେଖାଯାଏ, ତାହା କେବଳ ବ୍ୟଞ୍ଜନର ଉଚ୍ଚାରଣ ଲାଗି ଉଦ୍ଦିଷ୍ଟ ।<br><br>👉 ଉଦାହରଣ: ସମୁଦାୟ ବ୍ୟଞ୍ଜନ ସଂଖ୍ୟା ୩୩ ଅଟେ । ଏହାର ଦୁଇଟି ଭାଗ ଅଛି - ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ ଓ ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବ୍ୟଞ୍ଜନ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯାହା ସ୍ୱର ବିନା ଉଚ୍ଚାରଣ ହୋଇପାରେ ନାହିଁ, ତାହାକୁ ବ୍ୟଞ୍ଜନ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ମୋଟ ବ୍ୟଞ୍ଜନ ସଂଖ୍ୟା କେତେ ?<br><br><span style='color:green;'>Answer:</span> ମୋଟ ବ୍ୟଞ୍ଜନ ସଂଖ୍ୟା ୩୩ ଅଟେ ।",

"<span style='color:red;'>Q-3:</span> ବ୍ୟଞ୍ଜନକୁ କେତେ ଭାଗରେ ବିଭକ୍ତ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବ୍ୟଞ୍ଜନକୁ ଦୁଇ ଭାଗରେ ବିଭକ୍ତ କରାଯାଏ - ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ ଓ ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ ।",

"<span style='color:red;'>Q-4:</span> ବର୍ଣ୍ଣମାଳାରେ ବ୍ୟଞ୍ଜନ ସହିତ କେଉଁ ସ୍ୱର ମିଶାଇ ଲେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ସହିତ 'ଅ' ସ୍ୱର ମିଶାଇ ଲେଖାଯାଏ ।"

]
},

{
heading: "NOTE-7: ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯେଉଁ ବ୍ୟଞ୍ଜନଗୁଡ଼ିକୁ ସ୍ୱର ବର୍ଣ୍ଣ ମଧ୍ୟ କୁହାଯାଏ ନାହିଁ ଓ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ରମରେ ପାଞ୍ଚ-ପାଞ୍ଚଟି ବର୍ଣ୍ଣକୁ ସ୍ଥାପିତ କରାଯାଇଛି, ସେମାନଙ୍କୁ ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ କୁହାଯାଏ । ଏମାନଙ୍କ ସଂଖ୍ୟା ସମୁଦାୟ ୨୫ ।<br><br>👉 ଉଦାହରଣ: କ ବର୍ଗ - କ, ଖ, ଗ, ଘ, ଙ; ଚ ବର୍ଗ - ଚ, ଛ, ଜ, ଝ, ଞ; ଟ ବର୍ଗ - ଟ, ଠ, ଡ, ଢ, ଣ; ତ ବର୍ଗ - ତ, ଥ, ଦ, ଧ, ନ; ପ ବର୍ଗ - ପ, ଫ, ବ, ଭ, ମ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ବ୍ୟଞ୍ଜନଗୁଡ଼ିକୁ ପାଞ୍ଚ-ପାଞ୍ଚଟି କରି ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ରମରେ ସ୍ଥାପିତ କରାଯାଇଛି, ସେମାନଙ୍କୁ ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ ସଂଖ୍ୟା କେତେ ?<br><br><span style='color:green;'>Answer:</span> ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ ସଂଖ୍ୟା ସମୁଦାୟ ୨୫ ।",

"<span style='color:red;'>Q-3:</span> ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ କେତେ ବର୍ଗରେ ବିଭକ୍ତ ?<br><br><span style='color:green;'>Answer:</span> ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ ପାଞ୍ଚଗୋଟି ବର୍ଗରେ ବିଭକ୍ତ - କ ବର୍ଗ, ଚ ବର୍ଗ, ଟ ବର୍ଗ, ତ ବର୍ଗ ଓ ପ ବର୍ଗ ।",

"<span style='color:red;'>Q-4:</span> କ ବର୍ଗର ବର୍ଣ୍ଣଗୁଡ଼ିକ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> କ ବର୍ଗର ବର୍ଣ୍ଣଗୁଡ଼ିକ ହେଲା କ, ଖ, ଗ, ଘ, ଙ ।"

]
},

{
heading: "NOTE-8: ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ - ଅନ୍ତଃସ୍ଥ ଓ ଉଷ୍ମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯେଉଁ ବ୍ୟଞ୍ଜନଗୁଡ଼ିକ କୌଣସି ବର୍ଗରେ ପଡ଼ନ୍ତି ନାହିଁ, ସେମାନଙ୍କୁ ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ କୁହାଯାଏ । ଏମାନଙ୍କ ସଂଖ୍ୟା ସମୁଦାୟ ୮ ଓ ଏହା ଦୁଇ ଭାଗରେ ବିଭକ୍ତ - ଅନ୍ତଃସ୍ଥ ଓ ଉଷ୍ମ ।<br><br>👉 ଉଦାହରଣ: ଅନ୍ତଃସ୍ଥ ବ୍ୟଞ୍ଜନ - ଯ, ର, ଲ, ବ; ଉଷ୍ମ ବ୍ୟଞ୍ଜନ - ଶ, ଷ, ସ, ହ । ଅନ୍ତଃସ୍ଥକୁ ଅର୍ଦ୍ଧସ୍ୱର ମଧ୍ୟ କୁହାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ବ୍ୟଞ୍ଜନଗୁଡ଼ିକ କୌଣସି ବର୍ଗରେ ପଡ଼ନ୍ତି ନାହିଁ, ସେମାନଙ୍କୁ ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନକୁ କେତେ ଭାଗରେ ବିଭକ୍ତ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନକୁ ଦୁଇ ଭାଗରେ ବିଭକ୍ତ କରାଯାଏ - ଅନ୍ତଃସ୍ଥ ଓ ଉଷ୍ମ ।",

"<span style='color:red;'>Q-3:</span> ଅନ୍ତଃସ୍ଥ ବ୍ୟଞ୍ଜନ କେଉଁଗୁଡ଼ିକ ?<br><br><span style='color:green;'>Answer:</span> ଅନ୍ତଃସ୍ଥ ବ୍ୟଞ୍ଜନ ହେଲା ଯ, ର, ଲ, ବ ।",

"<span style='color:red;'>Q-4:</span> ଉଷ୍ମ ବ୍ୟଞ୍ଜନ କେଉଁଗୁଡ଼ିକ ?<br><br><span style='color:green;'>Answer:</span> ଉଷ୍ମ ବ୍ୟଞ୍ଜନ ହେଲା ଶ, ଷ, ସ, ହ ।"

]
},

{
heading: "NOTE-9: ହଳ ବ୍ୟଞ୍ଜନ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣକୁ ହଳ୍ ମଧ୍ୟ କୁହାଯାଏ । ଏହା ଅର୍ଦ୍ଧମାତ୍ରା ବିଶିଷ୍ଟ ଓ ଏହାର ଉଚ୍ଚାରଣ କାଳ ଅର୍ଦ୍ଧନିମେଷ ମାତ୍ର । କେବଳ ବ୍ୟଞ୍ଜନର ପ୍ରୟୋଗ 'ହଳ୍' ଚିହ୍ନ ଯୋଗରେ କରାଯାଏ ଏବଂ ଏହି ସଙ୍କେତ ବର୍ଣ୍ଣର ଅଧୋଭାଗରେ ଅଙ୍କିତ ରହେ ।<br><br>👉 ଉଦାହରଣ: ଯେତେବେଳେ ଆମେ ଏକ ବ୍ୟଞ୍ଜନକୁ ସ୍ୱର ବିନା ଲେଖିବାକୁ ଚାହୁଁ, ସେତେବେଳେ ତାହା ତଳେ ହଳ୍ ଚିହ୍ନ ଲଗାଇ ଲେଖାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣକୁ ଆଉ କେଉଁ ନାମରେ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣକୁ ହଳ୍ ମଧ୍ୟ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ହଳ୍ ର ଉଚ୍ଚାରଣ କାଳ କେତେ ?<br><br><span style='color:green;'>Answer:</span> ହଳ୍ ର ଉଚ୍ଚାରଣ କାଳ ଅର୍ଦ୍ଧନିମେଷ ମାତ୍ର ।",

"<span style='color:red;'>Q-3:</span> କେବଳ ବ୍ୟଞ୍ଜନର ପ୍ରୟୋଗ କେଉଁ ଚିହ୍ନ ଯୋଗରେ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> କେବଳ ବ୍ୟଞ୍ଜନର ପ୍ରୟୋଗ 'ହଳ୍' ଚିହ୍ନ ଯୋଗରେ କରାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ହଳ୍ ଚିହ୍ନ ବର୍ଣ୍ଣର କେଉଁ ଭାଗରେ ଅଙ୍କିତ ରହେ ?<br><br><span style='color:green;'>Answer:</span> ହଳ୍ ଚିହ୍ନ ବର୍ଣ୍ଣର ଅଧୋଭାଗରେ ଅଙ୍କିତ ରହେ ।"

]
},

{
heading: "NOTE-10: ଅଯୋଗବାହ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଅନୁସ୍ୱାର (ଂ), ବିସର୍ଗ (ଃ) ଓ ଚନ୍ଦ୍ରବିନ୍ଦୁ (ଁ) ଏହି ତିନିଗୋଟିକୁ ଅଯୋଗବାହ କୁହାଯାଏ । ଏଗୁଡ଼ିକ ସ୍ୱରବର୍ଣ୍ଣ ଓ ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ଦୁଇଟିରେ ମିଶି ଉଚ୍ଚାରିତ ହୁଅନ୍ତି, ତେଣୁ ଏମାନେ ନା ସମ୍ପୂର୍ଣ୍ଣ ସ୍ୱର, ନା ସମ୍ପୂର୍ଣ୍ଣ ବ୍ୟଞ୍ଜନ ।<br><br>👉 ଉଦାହରଣ: 'ପାଣି' ଶବ୍ଦରେ ଥିବା ଅନୁସ୍ୱାର ଓ 'ଦୁଃଖ' ଶବ୍ଦରେ ଥିବା ବିସର୍ଗ ଅଯୋଗବାହର ଉଦାହରଣ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅଯୋଗବାହ କେଉଁଗୁଡ଼ିକ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁସ୍ୱାର (ଂ), ବିସର୍ଗ (ଃ) ଓ ଚନ୍ଦ୍ରବିନ୍ଦୁ (ଁ) ଏହି ତିନିଗୋଟି ଅଯୋଗବାହ ଅଟନ୍ତି ।",

"<span style='color:red;'>Q-2:</span> ଅଯୋଗବାହ କେଉଁଠି ମିଶି ଉଚ୍ଚାରିତ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ଅଯୋଗବାହ ସ୍ୱରବର୍ଣ୍ଣ ଓ ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ଦୁଇଟିରେ ମିଶି ଉଚ୍ଚାରିତ ହୁଏ ।",

"<span style='color:red;'>Q-3:</span> ଅନୁସ୍ୱାର ସଙ୍କେତ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁସ୍ୱାର ସଙ୍କେତ ହେଲା ଂ ।",

"<span style='color:red;'>Q-4:</span> 'ଦୁଃଖ' ଶବ୍ଦରେ କେଉଁ ଅଯୋଗବାହ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> 'ଦୁଃଖ' ଶବ୍ଦରେ ବିସର୍ଗ ଅଯୋଗବାହ ଅଛି ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ବର୍ଣ୍ଣର ପରିଚୟ ଓ<br/>ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଭାଷା\"]\nA --> I1[\"ଲିଖନ ପ୍ରକ୍ରିୟା ମାଧ୍ୟମରେ<br/>ଭାଷାକୁ ବ୍ୟକ୍ତ କରାଯାଏ।\"]\nA --> I2[\"ଏଥିପାଇଁ ଉପଯୋଗୀ<br/>ଧ୍ୱନିଗୁଡ଼ିକୁ ବର୍ଣ୍ଣ କୁହାଯାଏ।\"]\nA --> I3[\"ପାଣିନି ଅଷ୍ଟାଧ୍ୟାୟୀରେ<br/>ଏହାର ବର୍ଣ୍ଣନା ଅଛି।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳାର ବିଭାଜନ\"]\nM --> M1[\"ବର୍ଣ୍ଣମାଳାକୁ ଦୁଇଟି<br/>ପ୍ରଧାନ ଶ୍ରେଣୀରେ ବିଭକ୍ତ କରାଯାଏ।\"]\nM --> M2[\"ପ୍ରଥମ ଶ୍ରେଣୀ ସ୍ୱର<br/>ବର୍ଣ୍ଣ, ସଂଖ୍ୟା ୯।\"]\nM --> M3[\"ଦ୍ୱିତୀୟ ଶ୍ରେଣୀ ବ୍ୟଞ୍ଜନ<br/>ବର୍ଣ୍ଣ, ସଂଖ୍ୟା ୩୩।\"]\nM --> M4[\"ଦୀର୍ଘସ୍ୱର ୪ ଓ<br/>ଅଯୋଗବାହ ୩ ମିଶେ।\"]\nM --> M5[\"ମାତୃଭାଷାରେ ମୋଟ<br/>୪୯ଗୋଟି ବର୍ଣ୍ଣ ବ୍ୟବହୃତ ହୁଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"୯ ସ୍ୱର + ୩୩ ବ୍ୟଞ୍ଜନ<br/>+ ୪ ଦୀର୍ଘ + ୩ ଅଯୋଗବାହ = ୪୯।\"]\nC --> C2[\"ସ୍ୱର ଓ ବ୍ୟଞ୍ଜନ ମିଶି<br/>ବର୍ଣ୍ଣମାଳା ଗଠିତ ହୁଏ।\"]\nC --> C3[\"ପ୍ରତ୍ୟେକ ବର୍ଣ୍ଣର ନିଜସ୍ୱ<br/>ଉଚ୍ଚାରଣ ସ୍ଥାନ ଥାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ସ୍ୱରବର୍ଣ୍ଣ:<br/>ହ୍ରସ୍ୱ ଓ ଦୀର୍ଘ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ସ୍ୱର କ'ଣ\"]\nA --> I1[\"ଯେଉଁ ବର୍ଣ୍ଣ ନିରପେକ୍ଷ<br/>ଭାବରେ ଉଚ୍ଚାରିତ ହୁଏ।\"]\nA --> I2[\"ସ୍ୱରର ସାହାଯ୍ୟରେ ବ୍ୟଞ୍ଜନର<br/>ସ୍ପଷ୍ଟ ଉଚ୍ଚାରଣ ସମ୍ଭବ ହୁଏ।\"]\nA --> I3[\"ଉଚ୍ଚାରଣ କାଳର ମାତ୍ରା<br/>ଅନୁସାରେ ତିନି ପ୍ରକାର।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଦୁଇ ପ୍ରକାର ସ୍ୱର\"]\nM --> M1[\"ହ୍ରସ୍ୱ ସ୍ୱର: ଅ, ଇ, ଉ,<br/>ଋ, ୠ - ପାଞ୍ଚଗୋଟି।\"]\nM --> M2[\"ହ୍ରସ୍ୱର ଉଚ୍ଚାରଣ କାଳ<br/>ଏକମାତ୍ରା ବିଶିଷ୍ଟ।\"]\nM --> M3[\"ଦୀର୍ଘସ୍ୱର: ଆ, ଈ, ଊ, ଏ,<br/>ଐ, ଓ, ଔ - ଆଠଗୋଟି।\"]\nM --> M4[\"ଦୀର୍ଘସ୍ୱରର ଉଚ୍ଚାରଣ କାଳ<br/>ଦୁଇମାତ୍ରା ବିଶିଷ୍ଟ।\"]\nM --> M5[\"ପ୍ରଥମ ଚାରିଗୋଟି ଦୀର୍ଘସ୍ୱର<br/>ହ୍ରସ୍ୱର ମିଳନରୁ ହୁଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଅ+ଅ=ଆ, ଇ+ଇ=ଈ,<br/>ଉ+ଉ=ଊ, ଋ+ଋ=ୠ।\"]\nC --> C2[\"ଏ, ଐ, ଓ, ଔର ହ୍ରସ୍ୱରୂପ<br/>ନାହିଁ, ସନ୍ଧିରୁ ଉତ୍ପନ୍ନ।\"]\nC --> C3[\"ମୋଟ ସ୍ୱର ସଂଖ୍ୟା<br/>୫+୮=୧୩।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ବ୍ୟଞ୍ଜନବର୍ଣ୍ଣ:<br/>ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ବ୍ୟଞ୍ଜନ କ'ଣ\"]\nA --> I1[\"ଯାହା ସ୍ୱରର ଅନୁଗାମୀ<br/>ବିନା ଉଚ୍ଚାରିତ ହୋଇପାରେ ନାହିଁ।\"]\nA --> I2[\"ମୋଟ ବ୍ୟଞ୍ଜନ<br/>ସଂଖ୍ୟା ୩୩ଗୋଟି।\"]\nA --> I3[\"ଏହା ବର୍ଗୀୟ ଓ<br/>ଅବର୍ଗୀୟ ଭାବେ ଦୁଇଭାଗ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ (୨୫ଗୋଟି)\"]\nM --> M1[\"କ ବର୍ଗ: କ, ଖ, ଗ,<br/>ଘ, ଙ।\"]\nM --> M2[\"ଚ ବର୍ଗ: ଚ, ଛ, ଜ,<br/>ଝ, ଞ।\"]\nM --> M3[\"ଟ ବର୍ଗ: ଟ, ଠ, ଡ,<br/>ଢ, ଣ।\"]\nM --> M4[\"ତ ବର୍ଗ: ତ, ଥ, ଦ,<br/>ଧ, ନ।\"]\nM --> M5[\"ପ ବର୍ଗ: ପ, ଫ, ବ,<br/>ଭ, ମ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ପ୍ରତ୍ୟେକ ବର୍ଗରେ<br/>ପାଞ୍ଚଗୋଟି ବର୍ଣ୍ଣ ଥାଏ।\"]\nC --> C2[\"ମୋଟ ୫ଗୋଟି ବର୍ଗ<br/>= ୫x୫ = ୨୫ ବର୍ଣ୍ଣ।\"]\nC --> C3[\"ଏଗୁଡ଼ିକୁ ସ୍ପର୍ଶବର୍ଣ୍ଣ<br/>ମଧ୍ୟ କୁହାଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ<br/>ଓ ଅଯୋଗବାହ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଅବର୍ଗୀୟ ବ୍ୟଞ୍ଜନ\"]\nA --> I1[\"ଏମାନଙ୍କ ସଂଖ୍ୟା<br/>ମୋଟ ୮ଗୋଟି।\"]\nA --> I2[\"ଦୁଇଭାଗରେ ବିଭକ୍ତ:<br/>ଅନ୍ତଃସ୍ଥ ଓ ଉଷ୍ମ।\"]\nA --> I3[\"ଅନ୍ତଃସ୍ଥ: ଯ, ର,<br/>ଲ, ବ - ଚାରିଗୋଟି।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଉଷ୍ମ ଓ ହଲ୍\"]\nM --> M1[\"ଉଷ୍ମ ବ୍ୟଞ୍ଜନ: ଶ, ଷ,<br/>ସ, ହ - ଚାରିଗୋଟି।\"]\nM --> M2[\"ଅନ୍ତଃସ୍ଥ+ଉଷ୍ମ<br/>= ୪+୪ = ୮ଗୋଟି।\"]\nM --> M3[\"ସ୍ୱର ବିନା ବ୍ୟଞ୍ଜନକୁ<br/>ହଲ୍ ମଧ୍ୟ କୁହାଯାଏ।\"]\nM --> M4[\"ହଲ୍ ଚିହ୍ନ (୍) ବର୍ଣ୍ଣର<br/>ତଳଭାଗରେ ଅଙ୍କିତ ହୁଏ।\"]\nM --> M5[\"ହଲ୍ ବ୍ୟଞ୍ଜନର ଉଚ୍ଚାରଣ<br/>ଅର୍ଦ୍ଧନିମେଷ ମାତ୍ର।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଅଯୋଗବାହ\"]\nC --> C1[\"ଅନୁସ୍ୱାର (ଂ), ବିସର୍ଗ (ଃ),<br/>ଚନ୍ଦ୍ରବିନ୍ଦୁ (ଁ) ତିନିଗୋଟି।\"]\nC --> C2[\"ଏମାନେ ସ୍ୱର ଓ ବ୍ୟଞ୍ଜନ<br/>ଦୁଇଟିରେ ମିଶି ଉଚ୍ଚାରିତ ହୁଅନ୍ତି।\"]\nC --> C3[\"ଏଥିପାଇଁ ଏମାନଙ୍କୁ<br/>ଅଯୋଗବାହ କୁହାଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
  
      
}  
]
};  
