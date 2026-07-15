const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ସଂସ୍କୃତ ବ୍ୟାକରଣ "
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9TLSG1P1-2.mp3",
    video:  "https://www.youtube.com/embed/h7ZxhbTxWa8?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9TLSG1P1-2.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "ଅଯୋଗବାହ",
            odia: "ସ୍ୱାଧୀନ ଭାବେ ବ୍ୟବହାର ନ ହେଉଥିବା ବର୍ଣ୍ଣ",
            emoji: "🔗",
            odiaUse: "ଅଯୋଗବାହ ଅର୍ଥ ପ୍ରତ୍ୟାହାର ନିର୍ମାଣରେ ନିରପେକ୍ଷ ଓ ଶଢାଦି ପ୍ରୟୋଗରେ ସାପେକ୍ଷ ହୋଇଥିବା ବର୍ଣ୍ଣ । ଅନୁସ୍ୱାର, ବିସର୍ଗ ଓ ଅନୁନାସିକଙ୍କୁ ଅଯୋଗବାହ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଅନୁସ୍ୱାର",
            odia: "ଂ (ନ୍ କିମ୍ବା ମ୍ ର ପରିବର୍ତ୍ତେ ଆସୁଥିବା ବର୍ଣ୍ଣ)",
            emoji: "⚪",
            odiaUse: "ଅନୁସ୍ୱାର କୌଣସି ସ୍ୱର ପରେ ନ୍ କିମ୍ବା ମ୍ ସ୍ଥାନରେ ଆସିଥାଏ । ଉଦାହରଣ - ଗୃହଂ ଗଛତି । ଏଠାରେ 'ଗୃହମ୍' ର ମ୍ ସ୍ଥାନରେ ପୂର୍ବବର୍ତ୍ତୀ 'ଅ' ସ୍ୱର ସହିତ ଅନୁସ୍ୱାର ପ୍ରୟୋଗ ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ବିସର୍ଗ",
            odia: "ଃ (ସ୍ୱର ପରେ ଆସି ପୃଥକ୍ ଉଚ୍ଚାରଣ ହେଉଥିବା ବର୍ଣ୍ଣ)",
            emoji: "❕",
            odiaUse: "ବିସର୍ଗର ପ୍ରୟୋଗ କୌଣସି ସ୍ୱର ପରେ ହୋଇଥାଏ ଏବଂ ଏହାର ପୃଥକ୍ ଉଚ୍ଚାରଣ ହୁଏ । ଉଦାହରଣ- ନରଃ, ସାଧୁଃ ଇତ୍ୟାଦି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଅନୁନାସିକ",
            odia: "ଁ (ଚନ୍ଦ୍ରବିନ୍ଦୁ ଆକୃତିର ନାକରୁ ଉଚ୍ଚାରିତ ହେଉଥିବା ବର୍ଣ୍ଣ)",
            emoji: "👃",
            odiaUse: "ଅନୁନାସିକର ସ୍ୱରୂପ ଚନ୍ଦ୍ରବିନ୍ଦୁ ଅଟେ । ଯଥା- କସ୍ଁୟିତ୍, ସଁବତ୍ସରଃ ଇତ୍ୟାଦି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ପ୍ରତ୍ୟାହାର",
            odia: "ବର୍ଣ୍ଣସମୂହକୁ ସଂକ୍ଷେପରେ ପ୍ରକାଶ କରିବା ପାଇଁ ବ୍ୟାକରଣରେ ବ୍ୟବହୃତ ପଦ୍ଧତି",
            emoji: "📚",
            odiaUse: "ଅଯୋଗବାହ ବର୍ଣ୍ଣମାନ ପ୍ରତ୍ୟାହାର ନିର୍ମାଣରେ ନିରପେକ୍ଷ, ଅର୍ଥାତ୍ ବ୍ୟାକରଣର ସଂକ୍ଷିପ୍ତ ବର୍ଣ୍ଣ-ସମୂହ ତିଆରି କରିବାରେ ଏମାନଙ୍କର ଆବଶ୍ୟକତା ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ନିରପେକ୍ଷ",
            odia: "କାହା ଉପରେ ନିର୍ଭର ନ କରୁଥିବା, ସ୍ୱାଧୀନ",
            emoji: "🚫🔗",
            odiaUse: "ଅଯୋଗବାହ ବର୍ଣ୍ଣମାନ ପ୍ରତ୍ୟାହାର ନିର୍ମାଣରେ ନିରପେକ୍ଷ ହୋଇଥାନ୍ତି, ଅର୍ଥାତ୍ ସେଠାରେ ଏମାନଙ୍କର କୌଣସି ଭୂମିକା ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ସାପେକ୍ଷ",
            odia: "କାହା ଉପରେ ନିର୍ଭର କରୁଥିବା",
            emoji: "🔗✔️",
            odiaUse: "ଶଢାଦି ପ୍ରୟୋଗରେ ଅଯୋଗବାହ ବର୍ଣ୍ଣମାନ ସାପେକ୍ଷ ହୋଇଥାନ୍ତି, ଅର୍ଥାତ୍ ସେଠାରେ ଏମାନଙ୍କର ପ୍ରୟୋଗ ଆବଶ୍ୟକ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଚନ୍ଦ୍ରବିନ୍ଦୁ",
            odia: "ଚନ୍ଦ୍ର ଓ ବିନ୍ଦୁ ମିଶି ତିଆରି ହୋଇଥିବା ଚିହ୍ନ ( ଁ )",
            emoji: "🌙",
            odiaUse: "ଅନୁନାସିକର ସ୍ୱରୂପ ଚନ୍ଦ୍ରବିନ୍ଦୁ ଅଟେ, ଯାହା ଦେଖିବାକୁ ଅର୍ଦ୍ଧଚନ୍ଦ୍ର ଉପରେ ଏକ ବିନ୍ଦୁ ପରି ଲାଗେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଲୌକିକ ସଂସ୍କୃତ",
            odia: "ସାଧାରଣ ଭାବେ ଲୋକମାନଙ୍କ ଦ୍ୱାରା ବ୍ୟବହୃତ ସଂସ୍କୃତ ଭାଷା",
            emoji: "🗣️",
            odiaUse: "ଲୌକିକ ସଂସ୍କୃତରେ ସାଧାରଣ ଭାବେ ବ୍ୟବହୃତ ହେଉଥିବା ବର୍ଣ୍ଣମାନଙ୍କର ସଂଖ୍ୟା ଅଣଚାଶ (୪୯) ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଅଣଚାଶ",
            odia: "୪୯ ସଂଖ୍ୟା (ଏକଚାଳିଶ ପରେ ଓ ପଚାଶ ପୂର୍ବେ ଆସୁଥିବା ସଂଖ୍ୟା)",
            emoji: "🔢",
            odiaUse: "ଲୌକିକ ସଂସ୍କୃତର ମୋଟ ବର୍ଣ୍ଣ ସଂଖ୍ୟା ଅଣଚାଶ, ଯାହା ୧୩ଟି ସ୍ୱର, ୩୩ଟି ବ୍ୟଞ୍ଜନ ଓ ୩ଟି ଅଯୋଗବାହ ମିଶି ତିଆରି ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ଯ ଓ ୟ",
            odia: "ଶବ୍ଦ ଆରମ୍ଭରେ 'ଯ' ଓ ମଧ୍ୟ/ଶେଷରେ 'ୟ' ଉଚ୍ଚାରଣ ହେବାର ନିୟମ",
            emoji: "🔤",
            odiaUse: "ଶବ୍ଦ ଆରମ୍ଭରେ 'ଯ' ରହେ, ମାତ୍ର ପଦ ମଧ୍ୟରେ ବା ଶେଷରେ 'ଯ' ଥିଲେ 'ୟ' ଉଚ୍ଚାରିତ ହୁଏ । ଯଥା- ଯୋଗ-ବିୟୋଗ, ଯମ-ନିୟମ ଇତ୍ୟାଦି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ପୃଥକ୍",
            odia: "ଅଲଗା, ଭିନ୍ନ",
            emoji: "↔️",
            odiaUse: "ବିସର୍ଗର ପ୍ରୟୋଗ କୌଣସି ସ୍ୱର ପରେ ହୋଇଥାଏ ଏବଂ ଏହାର ପୃଥକ୍ ଉଚ୍ଚାରଣ ହୁଏ, ଅର୍ଥାତ୍ ଏହା ପୂର୍ବବର୍ତ୍ତୀ ସ୍ୱର ସହିତ ମିଶେ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ଅଯୋଗବାହ ବର୍ଣ୍ଣ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ସଂସ୍କୃତ ଭାଷାରେ ସ୍ୱର ଓ ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ବ୍ୟତୀତ ତିନୋଟି ବିଶେଷ ବର୍ଣ୍ଣ ମଧ୍ୟ ବ୍ୟବହାର ହୁଏ - ଅନୁସ୍ୱାର, ବିସର୍ଗ ଓ ଅନୁନାସିକ । ଏହି ତିନୋଟି ବର୍ଣ୍ଣକୁ ଏକାଠି ଅଯୋଗବାହ ବର୍ଣ୍ଣ କୁହାଯାଏ । ପ୍ରତ୍ୟାହାର ତିଆରି ସମୟରେ ଏମାନେ ଆବଶ୍ୟକ ହୁଅନ୍ତି ନାହିଁ, କିନ୍ତୁ ଶବ୍ଦ ଲେଖିବା ସମୟରେ ଏମାନଙ୍କର ପ୍ରୟୋଗ ଜରୁରୀ ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ଗୃହଂ ଶବ୍ଦରେ ଥିବା ଂ ଚିହ୍ନ ଏକ ଅଯୋଗବାହ ବର୍ଣ୍ଣ ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅଯୋଗବାହ ବର୍ଣ୍ଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁସ୍ୱାର, ବିସର୍ଗ ଓ ଅନୁନାସିକ - ଏହି ତିନୋଟି ବର୍ଣ୍ଣକୁ ଅଯୋଗବାହ ବର୍ଣ୍ଣ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଅଯୋଗବାହ ବର୍ଣ୍ଣରେ କେତୋଟି ବର୍ଣ୍ଣ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ଅଯୋଗବାହ ବର୍ଣ୍ଣରେ ତିନୋଟି ବର୍ଣ୍ଣ ଅଛି ।",

"<span style='color:red;'>Q-3:</span> ଅଯୋଗବାହ ବର୍ଣ୍ଣର ପ୍ରୟୋଗ କେଉଁ ଭାଷାରେ ଦେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଅଯୋଗବାହ ବର୍ଣ୍ଣର ପ୍ରୟୋଗ ସଂସ୍କୃତ ଭାଷାରେ ଦେଖାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> 'ଗୃହଂ' ଶବ୍ଦରେ କେଉଁ ଅଯୋଗବାହ ବର୍ଣ୍ଣ ବ୍ୟବହୃତ ହୋଇଛି ?<br><br><span style='color:green;'>Answer:</span> 'ଗୃହଂ' ଶବ୍ଦରେ ଅନୁସ୍ୱାର ବ୍ୟବହୃତ ହୋଇଛି ।"

]
},

{
heading: "NOTE-2: ଅନୁସ୍ୱାର (ଂ) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଅନୁସ୍ୱାରର ଚିହ୍ନ ଂ ଅଟେ । ଏହା କୌଣସି ସ୍ୱର ପରେ ନ୍ କିମ୍ବା ମ୍ ର ସ୍ଥାନରେ ବ୍ୟବହାର ହୁଏ । ଯେତେବେଳେ ଶବ୍ଦ ଶେଷରେ ମ୍ ଥାଏ, ସେହି ମ୍ ପୂର୍ବରୁ ଥିବା ସ୍ୱର ସହିତ ମିଶି ଅନୁସ୍ୱାର ପ୍ରୟୋଗ ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ଗୃହମ୍ ଶବ୍ଦରେ ଥିବା ମ୍ ର ପୂର୍ବବର୍ତ୍ତୀ 'ଅ' ସ୍ୱର ସହିତ ମିଶି ଅନୁସ୍ୱାର ପ୍ରୟୋଗ ହୋଇ ଗୃହଂ ହୋଇଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅନୁସ୍ୱାରର ଚିହ୍ନ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁସ୍ୱାରର ଚିହ୍ନ ଂ ଅଟେ ।",

"<span style='color:red;'>Q-2:</span> ଅନୁସ୍ୱାର କେଉଁ ସ୍ଥାନରେ ବ୍ୟବହାର ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁସ୍ୱାର କୌଣସି ସ୍ୱର ପରେ ନ୍ କିମ୍ବା ମ୍ ର ସ୍ଥାନରେ ବ୍ୟବହାର ହୁଏ ।",

"<span style='color:red;'>Q-3:</span> 'ଗୃହମ୍' ଶବ୍ଦ ଅନୁସ୍ୱାର ପ୍ରୟୋଗ ପରେ କେମିତି ହୋଇଯାଏ ?<br><br><span style='color:green;'>Answer:</span> 'ଗୃହମ୍' ଶବ୍ଦ ଅନୁସ୍ୱାର ପ୍ରୟୋଗ ପରେ 'ଗୃହଂ' ହୋଇଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ଅନୁସ୍ୱାର କେଉଁ ପ୍ରକାର ବର୍ଣ୍ଣ ପୂର୍ବରୁ ଆସିଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁସ୍ୱାର କୌଣସି ସ୍ୱର ପୂର୍ବରୁ ଆସିଥାଏ ।"

]
},

{
heading: "NOTE-3: ବିସର୍ଗ (ଃ) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବିସର୍ଗର ଚିହ୍ନ ଃ ଅଟେ । ଏହା କୌଣସି ସ୍ୱର ପରେ ପ୍ରୟୋଗ ହୋଇଥାଏ ଏବଂ ଏହାର ନିଜସ୍ୱ ପୃଥକ୍ ଉଚ୍ଚାରଣ ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ନରଃ ଓ ସାଧୁଃ ଶବ୍ଦରେ ଃ ଚିହ୍ନ ବିସର୍ଗ ଭାବେ ବ୍ୟବହୃତ ହୋଇଛି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବିସର୍ଗର ଚିହ୍ନ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ବିସର୍ଗର ଚିହ୍ନ ଃ ଅଟେ ।",

"<span style='color:red;'>Q-2:</span> ବିସର୍ଗ କେଉଁଠାରେ ପ୍ରୟୋଗ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ବିସର୍ଗ କୌଣସି ସ୍ୱର ପରେ ପ୍ରୟୋଗ ହୁଏ ।",

"<span style='color:red;'>Q-3:</span> ବିସର୍ଗର ଉଚ୍ଚାରଣ କେମିତି ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ବିସର୍ଗର ପୃଥକ୍ ଓ ନିଜସ୍ୱ ଉଚ୍ଚାରଣ ହୁଏ ।",

"<span style='color:red;'>Q-4:</span> ବିସର୍ଗ ବ୍ୟବହୃତ ହୋଇଥିବା ଦୁଇଟି ଶବ୍ଦ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ନରଃ ଓ ସାଧୁଃ ଶବ୍ଦରେ ବିସର୍ଗ ବ୍ୟବହୃତ ହୋଇଛି ।"

]
},

{
heading: "NOTE-4: ଅନୁନାସିକ (ँ) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଅନୁନାସିକର ସ୍ୱରୂପ ଚନ୍ଦ୍ରବିନ୍ଦୁ ( ँ ) ଅଟେ । ଏହା ମଧ୍ୟ ଅଯୋଗବାହ ବର୍ଣ୍ଣ ମଧ୍ୟରୁ ଗୋଟିଏ ଅଟେ ।<br><br>👉 ଉଦାହରଣ: କସ୍ଁଣ୍ଡିତ୍ ଓ ସଁବସରଃ ଶବ୍ଦରେ ଚନ୍ଦ୍ରବିନ୍ଦୁ ଚିହ୍ନ ଦେଖିବାକୁ ମିଳେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅନୁନାସିକର ସ୍ୱରୂପ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁନାସିକର ସ୍ୱରୂପ ଚନ୍ଦ୍ରବିନ୍ଦୁ ଅଟେ ।",

"<span style='color:red;'>Q-2:</span> ଅନୁନାସିକ କେଉଁ ବର୍ଗର ବର୍ଣ୍ଣ ଅଟେ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁନାସିକ ଅଯୋଗବାହ ବର୍ଣ୍ଣ ମଧ୍ୟରୁ ଗୋଟିଏ ଅଟେ ।",

"<span style='color:red;'>Q-3:</span> ଅନୁନାସିକ ବ୍ୟବହୃତ ହୋଇଥିବା ଶବ୍ଦର ଉଦାହରଣ ଦିଅ ।<br><br><span style='color:green;'>Answer:</span> କସ୍ଁଣ୍ଡିତ୍ ଓ ସଁବସରଃ ଶବ୍ଦରେ ଅନୁନାସିକ ବ୍ୟବହୃତ ହୋଇଛି ।",

"<span style='color:red;'>Q-4:</span> ଅନୁନାସିକର ଚିହ୍ନକୁ କ'ଣ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଅନୁନାସିକର ଚିହ୍ନକୁ ଚନ୍ଦ୍ରବିନ୍ଦୁ କୁହାଯାଏ ।"

]
},

{
heading: "NOTE-5: ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳାର ମୋଟ ସଂଖ୍ୟା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଲୌକିକ ସଂସ୍କୃତରେ ସାଧାରଣତଃ ବ୍ୟବହୃତ ହେଉଥିବା ମୋଟ ବର୍ଣ୍ଣ ସଂଖ୍ୟା ଅଣଚାଶ (୪୯) ଅଟେ । ଏଥିରେ ୧୩ଟି ସ୍ୱର, ୩୩ଟି ବ୍ୟଞ୍ଜନ ଓ ୩ଟି ଅଯୋଗବାହ ବର୍ଣ୍ଣ ଅନ୍ତର୍ଭୁକ୍ତ ।<br><br>👉 ଉଦାହରଣ: ଏହି ୪୯ଟି ବର୍ଣ୍ଣ ମଧ୍ୟରୁ ଅନୁସ୍ୱାର, ବିସର୍ଗ ଓ ଅନୁନାସିକ ତିନୋଟି ଅଯୋଗବାହ ବର୍ଣ୍ଣ ଅଟନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳାରେ ମୋଟ କେତୋଟି ବର୍ଣ୍ଣ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳାରେ ମୋଟ ଅଣଚାଶ (୪୯) ଟି ବର୍ଣ୍ଣ ଅଛି ।",

"<span style='color:red;'>Q-2:</span> ସଂସ୍କୃତରେ କେତୋଟି ସ୍ୱର ବର୍ଣ୍ଣ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ସଂସ୍କୃତରେ ୧୩ଟି ସ୍ୱର ବର୍ଣ୍ଣ ଅଛି ।",

"<span style='color:red;'>Q-3:</span> ସଂସ୍କୃତରେ କେତୋଟି ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ସଂସ୍କୃତରେ ୩୩ଟି ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ଅଛି ।",

"<span style='color:red;'>Q-4:</span> ସଂସ୍କୃତରେ କେତୋଟି ଅଯୋଗବାହ ବର୍ଣ୍ଣ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ସଂସ୍କୃତରେ ୩ଟି ଅଯୋଗବାହ ବର୍ଣ୍ଣ ଅଛି ।"

]
},

{
heading: "NOTE-6: 'ଯ' ଓ 'ୟ' ଉଚ୍ଚାରଣ ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଶବ୍ଦର ଆରମ୍ଭରେ 'ଯ' ରହିଥାଏ । କିନ୍ତୁ ଶବ୍ଦ ମଧ୍ୟରେ କିମ୍ବା ଶେଷରେ 'ଯ' ଥିଲେ ତାହା 'ୟ' ଭାବେ ଉଚ୍ଚାରିତ ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ଯୋଗ-ବିୟୋଗ ଓ ଯମ-ନିୟମ ଶବ୍ଦରେ ଆରମ୍ଭରେ 'ଯ' ଓ ମଧ୍ୟ/ଶେଷରେ 'ୟ' ଉଚ୍ଚାରଣ ହୋଇଥିବାର ଦେଖାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଶବ୍ଦ ଆରମ୍ଭରେ କେଉଁ ବର୍ଣ୍ଣ ରହେ ?<br><br><span style='color:green;'>Answer:</span> ଶବ୍ଦ ଆରମ୍ଭରେ 'ଯ' ବର୍ଣ୍ଣ ରହେ ।",

"<span style='color:red;'>Q-2:</span> ଶବ୍ଦ ମଧ୍ୟରେ ବା ଶେଷରେ 'ଯ' ଥିଲେ କେମିତି ଉଚ୍ଚାରଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ଶବ୍ଦ ମଧ୍ୟରେ ବା ଶେଷରେ 'ଯ' ଥିଲେ 'ୟ' ଭାବେ ଉଚ୍ଚାରଣ ହୁଏ ।",

"<span style='color:red;'>Q-3:</span> 'ଯୋଗ-ବିୟୋଗ' ଶବ୍ଦରେ ଏହି ନିୟମ କେମିତି ଦେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> 'ଯୋଗ' ଆରମ୍ଭରେ 'ଯ' ଓ 'ବିୟୋଗ' ମଧ୍ୟରେ 'ୟ' ଉଚ୍ଚାରଣ ହୋଇଥିବାର ଦେଖାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ଏହି ଉଚ୍ଚାରଣ ନିୟମର ଆଉ ଗୋଟିଏ ଉଦାହରଣ ଦିଅ ।<br><br><span style='color:green;'>Answer:</span> ଯମ-ନିୟମ ଶବ୍ଦ ମଧ୍ୟ ଏହି ନିୟମର ଉଦାହରଣ ଅଟେ ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ଅଯୋଗବାହ ବର୍ଣ୍ଣ<br/>(ପରିଚୟ)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"ସ୍ୱର ଓ ବ୍ୟଞ୍ଜନ ବ୍ୟତୀତ<br/>ତିନୋଟି ବିଶେଷ ବର୍ଣ୍ଣ ଅଛନ୍ତି।\"]\nA --> I2[\"ଏମାନେ ହେଲେ ଅନୁସ୍ୱାର,<br/>ବିସର୍ଗ ଓ ଅନୁନାସିକ।\"]\nA --> I3[\"ସଂସ୍କୃତ ଭାଷାରେ<br/>ଏମାନଙ୍କ ପ୍ରୟୋଗ ଦେଖାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ବୈଶିଷ୍ଟ୍ୟ\"]\nM --> M1[\"ପ୍ରତ୍ୟାହାର ନିର୍ମାଣରେ<br/>ଏମାନେ ନିରପେକ୍ଷ ରୁହନ୍ତି।\"]\nM --> M2[\"ଶବ୍ଦାଦି ପ୍ରୟୋଗରେ<br/>ଏମାନେ ସାପେକ୍ଷ ହୋଇଥାନ୍ତି।\"]\nM --> M3[\"ଏହି ଦୁଇ ଗୁଣ ଯୋଗୁଁ<br/>ଏମାନେ ଅଯୋଗବାହ ନାମରେ ପରିଚିତ।\"]\nM --> M4[\"ତିନୋଟି ଚିହ୍ନ:<br/>ଂ, ଃ, ँ ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଅଯୋଗବାହ ବର୍ଣ୍ଣ<br/>ସଂଖ୍ୟାରେ ତିନୋଟି।\"]\nC --> C2[\"ଏମାନେ ସ୍ୱର ବା ବ୍ୟଞ୍ଜନ<br/>ନୁହନ୍ତି, ସ୍ୱତନ୍ତ୍ର ଶ୍ରେଣୀର।\"]\nC --> C3[\"ସଂସ୍କୃତ ବ୍ୟାକରଣରେ<br/>ଏହାର ମହତ୍ୱ ରହିଛି।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ଅନୁସ୍ୱାର<br/>(ଂ)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଅନୁସ୍ୱାର କ'ଣ\"]\nA --> I1[\"ଅନୁସ୍ୱାରର ଚିହ୍ନ<br/>ହେଉଛି ଂ ।\"]\nA --> I2[\"ଏହା କୌଣସି ସ୍ୱର<br/>ପରେ ପ୍ରୟୋଗ ହୁଏ।\"]\nA --> I3[\"ଏହା ନ୍ କିମ୍ବା ମ୍<br/>ର ସ୍ଥାନରେ ଆସେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଉଦାହରଣ ଓ ବ୍ୟାଖ୍ୟା\"]\nM --> M1[\"ଉଦାହରଣ:<br/>ଗୃହଂ ଗଛତି ।\"]\nM --> M2[\"ମୂଳ ଶବ୍ଦ ଥିଲା<br/>ଗୃହମ୍ ।\"]\nM --> M3[\"ଗୃହମ୍ ର ମ୍ ସ୍ଥାନରେ<br/>ଅନୁସ୍ୱାର ପ୍ରୟୋଗ ହୋଇଛି।\"]\nM --> M4[\"ପୂର୍ବବର୍ତ୍ତୀ 'ଅ' ସ୍ୱର<br/>ସହିତ ଏହା ମିଶିଥାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଅନୁସ୍ୱାର ସର୍ବଦା<br/>ସ୍ୱର ପରେ ବସେ।\"]\nC --> C2[\"ଏହା ନ୍ ବା ମ୍ର<br/>ବିକଳ୍ପ ଚିହ୍ନ ଅଟେ।\"]\nC --> C3[\"ଅନୁସ୍ୱାରର ଚିହ୍ନ:<br/>ଂ ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ବିସର୍ଗ<br/>(ଃ)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ବିସର୍ଗ କ'ଣ\"]\nA --> I1[\"ବିସର୍ଗର ଚିହ୍ନ<br/>ହେଉଛି ଃ ।\"]\nA --> I2[\"ଏହା ମଧ୍ୟ କୌଣସି<br/>ସ୍ୱର ପରେ ପ୍ରୟୋଗ ହୁଏ।\"]\nA --> I3[\"ଏହାର ଉଚାରଣ<br/>ପୃଥକ ଭାବେ ହୋଇଥାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଉଦାହରଣ\"]\nM --> M1[\"ଉଦାହରଣ-୧:<br/>ନରଃ ।\"]\nM --> M2[\"ଉଦାହରଣ-୨:<br/>ସାଧୁଃ ।\"]\nM --> M3[\"ଏହି ଶବ୍ଦଗୁଡ଼ିକରେ ଃ<br/>ପୃଥକ ଭାବେ ଉଚାରିତ ହୁଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ବିସର୍ଗ ସର୍ବଦା<br/>ସ୍ୱର ପରେ ବସେ।\"]\nC --> C2[\"ଏହାର ଉଚାରଣ<br/>ସ୍ୱତନ୍ତ୍ର ଅଟେ।\"]\nC --> C3[\"ବିସର୍ଗର ଚିହ୍ନ:<br/>ଃ ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ଅନୁନାସିକ<br/>(ँ)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଅନୁନାସିକ କ'ଣ\"]\nA --> I1[\"ଅନୁନାସିକର ସ୍ୱରୂପ<br/>ଚନ୍ଦ୍ରବିନ୍ଦୁ ଅଟେ।\"]\nA --> I2[\"ଏହାର ଚିହ୍ନ<br/>ହେଉଛି ँ ।\"]\nA --> I3[\"ଏହା ମଧ୍ୟ ଏକ<br/>ଅଯୋଗବାହ ବର୍ଣ୍ଣ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଉଦାହରଣ\"]\nM --> M1[\"ଉଦାହରଣ-୧:<br/>କସ୍ମିଁସ୍ମିନ୍ ।\"]\nM --> M2[\"ଉଦାହରଣ-୨:<br/>ସଁବସରଃ ।\"]\nM --> M3[\"ଉଚାରଣ ସମୟରେ<br/>ନାସିକାର ପ୍ରୟୋଗ ହୁଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଅନୁନାସିକର ଚିହ୍ନ<br/>ଚନ୍ଦ୍ରବିନ୍ଦୁ ँ ।\"]\nC --> C2[\"ଏହା ନାସିକା ଧ୍ୱନି<br/>ସହ ଉଚାରିତ ହୁଏ।\"]\nC --> C3[\"ଅନୁସ୍ୱାର ଓ ଅନୁନାସିକ<br/>ଭିନ୍ନ ଭିନ୍ନ ଚିହ୍ନ ଅଟନ୍ତି।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-5:<br/>ସଂସ୍କୃତ ବର୍ଣ୍ଣମାଳାର<br/>ମୋଟ ସଂଖ୍ୟା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଲୌକିକ ସଂସ୍କୃତ ବର୍ଣ୍ଣ\"]\nA --> I1[\"ଲୌକିକ ସଂସ୍କୃତରେ<br/>ସାଧାରଣତଃ ବ୍ୟବହୃତ ବର୍ଣ୍ଣ ଅଛନ୍ତି।\"]\nA --> I2[\"ଏହି ବର୍ଣ୍ଣମାନଙ୍କ<br/>ମୋଟ ସଂଖ୍ୟା ଅଣଚାଳିଶ (୪୯)।\"]\nA --> I3[\"ଏଥିରେ ସ୍ୱର, ବ୍ୟଞ୍ଜନ<br/>ଓ ଅଯୋଗବାହ ସାମିଲ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ବିଭାଜନ\"]\nM --> M1[\"ସ୍ୱର ସଂଖ୍ୟା:<br/>୧୩ ।\"]\nM --> M2[\"ବ୍ୟଞ୍ଜନ ସଂଖ୍ୟା:<br/>୩୩ ।\"]\nM --> M3[\"ଅଯୋଗବାହ ସଂଖ୍ୟା:<br/>୩ ।\"]\nM --> M4[\"ମୋଟ:<br/>୧୩ + ୩୩ + ୩ = ୪୯ ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ମୋଟ ବର୍ଣ୍ଣ<br/>ସଂଖ୍ୟା ୪୯ ।\"]\nC --> C2[\"ତିନି ଭାଗରେ ବିଭକ୍ତ:<br/>ସ୍ୱର, ବ୍ୟଞ୍ଜନ, ଅଯୋଗବାହ।\"]\nC --> C3[\"ପରୀକ୍ଷାରେ ଏହି<br/>ପ୍ରଶ୍ନ ପ୍ରାୟତଃ ପଚରାଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-6:<br/>ଯ ଓ ୟ ର<br/>ଉଚାରଣ ନିୟମ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ନିୟମ\"]\nA --> I1[\"ଶବ୍ଦ ଆରମ୍ଭରେ<br/>'ଯ' ରହେ।\"]\nA --> I2[\"ପଦ ମଧ୍ୟରେ ବା ଶେଷରେ<br/>'ଯ' ଥିଲେ 'ୟ' ଉଚାରିତ ହୁଏ।\"]\nA --> I3[\"ଏହା ଏକ<br/>ଉଚ୍ଚାରଣ ନିୟମ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଉଦାହରଣ\"]\nM --> M1[\"ଯୋଗ-ବିୟୋଗ:<br/>ଆରମ୍ଭରେ 'ଯ', ମଧ୍ୟରେ 'ୟ'।\"]\nM --> M2[\"ଯମ-ନିୟମ:<br/>ସମାନ ନିୟମ ପ୍ରଯୁଜ୍ୟ।\"]\nM --> M3[\"ସ୍ଥାନ ଅନୁସାରେ<br/>ଉଚାରଣ ବଦଳେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଆରମ୍ଭରେ<br/>ସର୍ବଦା 'ଯ'।\"]\nC --> C2[\"ମଧ୍ୟ ବା ଶେଷରେ<br/>'ୟ' ଉଚାରଣ।\"]\nC --> C3[\"ଉଦାହରଣ ମନେ ରଖିଲେ<br/>ନିୟମ ବୁଝି ହେବ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`
  ]
  
      
}  
]
};  
