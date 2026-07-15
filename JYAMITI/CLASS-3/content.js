const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଜ୍ୟାମିତି"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9MTG1P1-2.mp3",
    video:  "https://www.youtube.com/embed/bJFHdrKDmpM?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9MTG1P1-2.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "SHAPE",
            odia: "ଆକୃତି",
            emoji: "🔷",
            odiaUse: "ଆକୃତି ଅର୍ଥ ବସ୍ତୁର ରୂପ ବା ଗଠନ । ପତ୍ର, ଫୁଲ ଓ ଫଳର ଭିନ୍ନ ଭିନ୍ନ ଆକୃତି ଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GEOMETRY",
            odia: "ଜ୍ୟାମିତି",
            emoji: "📐",
            odiaUse: "ଜ୍ୟାମିତି ଅର୍ଥ ଆକୃତି, ରେଖା, କୋଣ ଓ ମାପ ସମ୍ବନ୍ଧୀୟ ଗଣିତ ଶାସ୍ତ୍ର ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EARTH",
            odia: "ପୃଥିବୀ",
            emoji: "🌍",
            odiaUse: "ପୃଥିବୀ ଅର୍ଥ ଆମେ ବାସ କରୁଥିବା ଗ୍ରହ । ଜ୍ୟାମିତି ଶବ୍ଦରେ 'ଜ୍ୟା'ର ଅର୍ଥ ପୃଥିବୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MEASUREMENT",
            odia: "ମାପ",
            emoji: "📏",
            odiaUse: "ମାପ ଅର୍ଥ କୌଣସି ବସ୍ତୁର ଲମ୍ବ, ପ୍ରସ୍ଥ ବା ପରିମାଣ ନିର୍ଣ୍ଣୟ କରିବା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LAND",
            odia: "ଜମି",
            emoji: "🌾",
            odiaUse: "ଜମି ଅର୍ଥ ଭୂମି । ଜମି ମାପ କରିବାର ଆବଶ୍ୟକତାରୁ ଜ୍ୟାମିତିର ସୃଷ୍ଟି ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PYRAMID",
            odia: "ପିରାମିଡ୍",
            emoji: "🔺",
            odiaUse: "ପିରାମିଡ୍ ଅର୍ଥ ମିଶରର ପ୍ରସିଦ୍ଧ ବିଶାଳ ସ୍ଥାପତ୍ୟ । ଏହା ଉନ୍ନତ ଜ୍ୟାମିତି ଜ୍ଞାନର ନିଦର୍ଶନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CIVILIZATION",
            odia: "ସଭ୍ୟତା",
            emoji: "🏛️",
            odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ମନୁଷ୍ୟ ସମାଜର ଉନ୍ନତ ଜୀବନଧାରା । ମାନବ ସଭ୍ୟତା ସହିତ ଜ୍ୟାମିତିର ବିକାଶ ଜଡ଼ିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FORMULA",
            odia: "ସୂତ୍ର",
            emoji: "📘",
            odiaUse: "ସୂତ୍ର ଅର୍ଥ ନିୟମ ବା ସିଦ୍ଧାନ୍ତ । ପ୍ରାଚୀନ ଋଷିମାନେ ବିଭିନ୍ନ ଜ୍ୟାମିତିକ ସୂତ୍ରର ପ୍ରୟୋଗ କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "THEOREM",
            odia: "ଉପପାଦ୍ୟ",
            emoji: "📝",
            odiaUse: "ଉପପାଦ୍ୟ ଅର୍ଥ ପ୍ରମାଣ କରାଯାଇଥିବା ଗଣିତୀୟ ସତ୍ୟ । ଇଉକ୍ଲିଡ୍ ତାଙ୍କ ଗ୍ରନ୍ଥରେ ଅନେକ ଉପପାଦ୍ୟ ଦେଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPERIMENT",
            odia: "ପରୀକ୍ଷା",
            emoji: "🧪",
            odiaUse: "ପରୀକ୍ଷା ଅର୍ଥ ଯାଞ୍ଚ କରିବାର ପ୍ରକ୍ରିୟା । ପ୍ରଥମେ ଜ୍ୟାମିତିର ସୂତ୍ରଗୁଡ଼ିକ ପରୀକ୍ଷାମୂଳକ ଉପାୟରେ ନିଶ୍ଚିତ ହେଉଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OBSERVATION",
            odia: "ପର୍ଯ୍ୟବେକ୍ଷଣ",
            emoji: "👀",
            odiaUse: "ପର୍ଯ୍ୟବେକ୍ଷଣ ଅର୍ଥ ଭଲଭାବେ ଦେଖି ଅଧ୍ୟୟନ କରିବା । ପର୍ଯ୍ୟବେକ୍ଷଣରୁ ଅନେକ ଜ୍ୟାମିତିକ ସୂତ୍ର ସୃଷ୍ଟି ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LOGIC",
            odia: "ତର୍କ",
            emoji: "🧠",
            odiaUse: "ତର୍କ ଅର୍ଥ ଯୁକ୍ତିପୂର୍ଣ୍ଣ ଚିନ୍ତା । ଗ୍ରୀକ୍ ବିଦ୍ୱାନମାନେ ତର୍କ ଦ୍ୱାରା ଜ୍ୟାମିତିର ସିଦ୍ଧାନ୍ତ ପ୍ରତିପାଦନ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GEOMETER",
            odia: "ଗଣିତଜ୍ଞ",
            emoji: "👨‍🏫",
            odiaUse: "ଗଣିତଜ୍ଞ ଅର୍ଥ ଗଣିତ ବିଷୟର ପଣ୍ଡିତ । ଇଉକ୍ଲିଡ୍ ଜଣେ ପ୍ରସିଦ୍ଧ ଗଣିତଜ୍ଞ ଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SET",
            odia: "ସେଟ୍",
            emoji: "🗂️",
            odiaUse: "ସେଟ୍ ଅର୍ଥ ବସ୍ତୁଗୁଡ଼ିକର ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସମୂହ । ଆଧୁନିକ ଗଣିତରେ ସେଟ୍‌ର ବ୍ୟବହାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PLANE GEOMETRY",
            odia: "ସମତଳ ଜ୍ୟାମିତି",
            emoji: "📏",
            odiaUse: "ସମତଳ ଜ୍ୟାମିତି ଅର୍ଥ ସମତଳ ଉପରେ ରେଖା ଓ ଆକୃତିର ଅଧ୍ୟୟନ । ବିଦ୍ୟାଳୟରେ ଆମେ ସମତଳ ଜ୍ୟାମିତି ପଢ଼ୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ଜ୍ୟାମିତି ଶବ୍ଦର ଅର୍ଥ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଆମ ଚାରିପାଖରେ ଥିବା ପ୍ରାୟ ସମସ୍ତ ପଦାର୍ଥ ଏକ ନା ଏକ ଆକୃତି ଧାରଣ କରିଥାଏ । ଏହି ଆକୃତିଗୁଡ଼ିକର ଅଧ୍ୟୟନକୁ ଜ୍ୟାମିତି କୁହାଯାଏ । 'ଜ୍ୟାମିତି' ଶବ୍ଦର 'ଜ୍ୟା' ଅର୍ଥ ଦୂରତ୍ୱ ଓ 'ମିତି' ଅର୍ଥ ମାପ । ଇଂରାଜୀ ଶବ୍ଦ 'Geometry' ଗ୍ରୀକ୍ ଶବ୍ଦ Geo (ଭୂଖଣ୍ଡ) ଓ Metron (ମାପ) ରୁ ସୃଷ୍ଟି ହୋଇଛି ।<br><br>👉 ଉଦାହରଣ: ପତ୍ର, ଫୁଲ, ଫଳ ଆଦି ପ୍ରତ୍ୟେକ ପଦାର୍ଥ ନିଜର ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଆକୃତି ଧାରଣ କରିଥାଏ । ଆକୃତି ଚିହ୍ନଟ କରିବାର ସାମର୍ଥ୍ୟ ମଣିଷର ଏକ ବିଶେଷତ୍ୱ, ଯାହା ଜୀବଜନ୍ତୁଙ୍କ ମଧ୍ୟରେ ଅନୁପସ୍ଥିତ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଜ୍ୟାମିତି କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଆକୃତିଗୁଡ଼ିକର ଅଧ୍ୟୟନକୁ ଜ୍ୟାମିତି କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> 'ଜ୍ୟା' ଓ 'ମିତି' ଶବ୍ଦର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> 'ଜ୍ୟା' ଅର୍ଥ ଦୂରତ୍ୱ ଓ 'ମିତି' ଅର୍ଥ ମାପ ।",

"<span style='color:red;'>Q-3:</span> 'Geometry' ଶବ୍ଦଟି କେଉଁ ଦୁଇଟି ଗ୍ରୀକ୍ ଶବ୍ଦରୁ ସୃଷ୍ଟି ହୋଇଛି ?<br><br><span style='color:green;'>Answer:</span> Geo (ଭୂଖଣ୍ଡ) ଓ Metron (ମାପ) ରୁ ସୃଷ୍ଟି ହୋଇଛି ।",

"<span style='color:red;'>Q-4:</span> ଆକୃତି ଚିହ୍ନଟ କରିବାର ସାମର୍ଥ୍ୟ କାହାର ବିଶେଷତ୍ୱ ?<br><br><span style='color:green;'>Answer:</span> ଆକୃତି ଚିହ୍ନଟ କରିବାର ସାମର୍ଥ୍ୟ ମଣିଷର ବିଶେଷତ୍ୱ ।"

]
},

{
heading: "NOTE-2: ଜ୍ୟାମିତିର ଆବଶ୍ୟକତା ଓ ଆରମ୍ଭ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ମାପ କରିବାର ଆବଶ୍ୟକତାରୁ ହିଁ ଜ୍ୟାମିତିର ସୃଷ୍ଟି ହୋଇଥିଲା । ମାନବ ସଭ୍ୟତାର ଅଗ୍ରଗତି ସହିତ ଜ୍ୟାମିତି ମଧ୍ୟ ବିକଶିତ ହେଲା । ଚାଷ ଜମିନ ଆକାର ନିର୍ଣ୍ଣୟ, ରାସ୍ତା ଓ ବାସଗୃହ ନିର୍ମାଣରେ ପ୍ରାଚୀନ ମନୁଷ୍ୟ ଜ୍ୟାମିତି ଜ୍ଞାନର ପ୍ରୟୋଗ କରି ନିଜ ସମସ୍ୟାର ସମାଧାନ କରିଥିଲେ ।<br><br>👉 ଉଦାହରଣ: ବନ୍ୟା ପରେ ନଦୀକୂଳର ଜମି ପୁଣି ମାପିବାକୁ ପଡ଼ୁଥିବାରୁ ପ୍ରାଚୀନ ଈଜିପ୍ଟୀୟମାନେ ଜମି ମାପିବାର ପଦ୍ଧତି ବିକଶିତ କରିଥିଲେ, ଯାହା ଜ୍ୟାମିତିର ଆଦ୍ୟ ପ୍ରୟୋଗ ଥିଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଜ୍ୟାମିତିର ସୃଷ୍ଟି କେଉଁ ଆବଶ୍ୟକତାରୁ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ମାପ କରିବାର ଆବଶ୍ୟକତାରୁ ଜ୍ୟାମିତିର ସୃଷ୍ଟି ହେଲା ।",

"<span style='color:red;'>Q-2:</span> ପ୍ରାଚୀନ ମନୁଷ୍ୟ ଜ୍ୟାମିତି ଜ୍ଞାନ କେଉଁଠି ପ୍ରୟୋଗ କରୁଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ଚାଷ ଜମିନ ଆକାର ନିର୍ଣ୍ଣୟ, ରାସ୍ତା ଓ ବାସଗୃହ ନିର୍ମାଣରେ ପ୍ରୟୋଗ କରୁଥିଲେ ।",

"<span style='color:red;'>Q-3:</span> ମାନବ ସଭ୍ୟତାର ଅଗ୍ରଗତି ସହିତ ଜ୍ୟାମିତିର କ'ଣ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ମାନବ ସଭ୍ୟତାର ଅଗ୍ରଗତି ସହିତ ଜ୍ୟାମିତି ମଧ୍ୟ ବିକଶିତ ହେଲା ।",

"<span style='color:red;'>Q-4:</span> ଜ୍ୟାମିତି ପ୍ରୟୋଗ କରି ପ୍ରାଚୀନ ମନୁଷ୍ୟ କ'ଣ ସାଧନ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ନିଜ ସମସ୍ୟାର ସମାଧାନ ଓ ଜ୍ଞାନର ଉତ୍କର୍ଷ ସାଧନ କରିଥିଲେ ।"

]
},

{
heading: "NOTE-3: ଶୁଳ୍ବ ସୂତ୍ର - ବୈଦିକ ଜ୍ୟାମିତି :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବୈଦିକ ଯୁଗରେ ଯଜ୍ଞ ବେଦି ନିର୍ମାଣ କାର୍ଯ୍ୟରେ ପ୍ରାଚୀନ ଭାରତରେ ଜ୍ୟାମିତିର ପ୍ରୟୋଗ ହୋଇଥିଲା । ଏହି ଜ୍ୟାମିତି ଶାଖାର ନାମ 'ଶୁଳ୍ବ ସୂତ୍ର' । ଏହା ଆନୁମାନିକ ୮୦୦ ଖ୍ରୀଷ୍ଟପୂର୍ବରୁ ୫୦୦ ଖ୍ରୀଷ୍ଟପୂର୍ବ ମଧ୍ୟରେ ଭାରତରେ ରଚିତ ହୋଇଥିଲା ।<br><br>👉 ଉଦାହରଣ: ଶୁଳ୍ବ ଅର୍ଥାତ୍ ରଜ୍ଜୁ ଦ୍ୱାରା ଜ୍ୟାମିତିର ମାପ ସମ୍ପାଦନ ସୂତ୍ରକୁ ନେଇ ଭାରତରେ ୟଜ୍ଞ ବେଦିର ସଠିକ୍ ଆକାର ଓ ଆକୃତି ନିର୍ଣ୍ଣୟ କରାଯାଉଥିଲା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବୈଦିକ ଯୁଗରେ ଯଜ୍ଞ ବେଦି ନିର୍ମାଣ ପାଇଁ ପ୍ରୟୋଗ ହୋଇଥିବା ଜ୍ୟାମିତି ଶାଖାର ନାମ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଏହାର ନାମ 'ଶୁଳ୍ବ ସୂତ୍ର' ।",

"<span style='color:red;'>Q-2:</span> 'ଶୁଳ୍ବ' ଶବ୍ଦର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> 'ଶୁଳ୍ବ' ଅର୍ଥ ରଜ୍ଜୁ ଦ୍ୱାରା ଜ୍ୟାମିତିର ମାପ ସମ୍ପାଦନ ।",

"<span style='color:red;'>Q-3:</span> ଶୁଳ୍ବ ସୂତ୍ର ଆନୁମାନିକ କେଉଁ ସମୟ ମଧ୍ୟରେ ରଚିତ ହୋଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଆନୁମାନିକ ୮୦୦ ରୁ ୫୦୦ ଖ୍ରୀଷ୍ଟପୂର୍ବ ମଧ୍ୟରେ ରଚିତ ହୋଇଥିଲା ।",

"<span style='color:red;'>Q-4:</span> ଶୁଳ୍ବ ସୂତ୍ର ସାହାଯ୍ୟରେ କ'ଣ ନିର୍ଣ୍ଣୟ କରାଯାଉଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଯଜ୍ଞ ବେଦିର ସଠିକ୍ ଆକାର ଓ ଆକୃତି ନିର୍ଣ୍ଣୟ କରାଯାଉଥିଲା ।"

]
},

{
heading: "NOTE-4: ପ୍ରାଚୀନ ସଭ୍ୟତାରେ ଜ୍ୟାମିତିର ପ୍ରୟୋଗ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରାଚୀନ ମିଶରୀୟମାନେ ପିରାମିଡ୍ ନିର୍ମାଣରେ ଜ୍ୟାମିତିର ପ୍ରୟୋଗ କରିଥିଲେ । ଭାରତରେ ମହେନ୍‌ଜୋଦାରୋ ଓ ହରପ୍ପାର ସଭ୍ୟତାରେ ମଧ୍ୟ ଭାସଗୃହ, ସ୍ନାନାଗାର ଓ ରାସ୍ତା ନିର୍ମାଣ କାର୍ଯ୍ୟରେ ଜ୍ୟାମିତିକ ଚିହ୍ନ ପ୍ରୟୋଗର ପ୍ରମାଣ ମିଳେ ।<br><br>👉 ଉଦାହରଣ: ପିରାମିଡ୍‌ର ସଠିକ୍ ତ୍ରିଭୁଜାକାର ଗଠନ ଓ ହରପ୍ପାର ସୁସଜ୍ଜିତ ନଗର-ଯୋଜନା ଦର୍ଶାଏ ଯେ ପ୍ରାଚୀନ ଲୋକମାନେ ଜ୍ୟାମିତି ଜ୍ଞାନରେ ପାରଙ୍ଗମ ଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ମିଶରୀୟମାନେ କେଉଁ ନିର୍ମାଣରେ ଜ୍ୟାମିତି ପ୍ରୟୋଗ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ପିରାମିଡ୍ ନିର୍ମାଣରେ ଜ୍ୟାମିତି ପ୍ରୟୋଗ କରିଥିଲେ ।",

"<span style='color:red;'>Q-2:</span> ଭାରତରେ କେଉଁ ପ୍ରାଚୀନ ସ୍ଥାନରେ ଜ୍ୟାମିତିକ ଚିହ୍ନ ମିଳେ ?<br><br><span style='color:green;'>Answer:</span> ମହେନ୍‌ଜୋଦାରୋ ଓ ହରପ୍ପାରେ ଜ୍ୟାମିତିକ ଚିହ୍ନ ମିଳେ ।",

"<span style='color:red;'>Q-3:</span> ହରପ୍ପାର ସଭ୍ୟତାରେ ଜ୍ୟାମିତି କେଉଁ କାର୍ଯ୍ୟରେ ପ୍ରୟୋଗ ହୋଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ବାସଗୃହ, ସ୍ନାନାଗାର ଓ ରାସ୍ତା ନିର୍ମାଣ କାର୍ଯ୍ୟରେ ପ୍ରୟୋଗ ହୋଇଥିଲା ।",

"<span style='color:red;'>Q-4:</span> ପିରାମିଡ୍ ଓ ହରପ୍ପା ଉଦାହରଣ ଆମକୁ କ'ଣ ଦର୍ଶାଏ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରାଚୀନ ଲୋକମାନେ ଜ୍ୟାମିତି ଜ୍ଞାନରେ ପାରଙ୍ଗମ ଥିଲେ ବୋଲି ଦର୍ଶାଏ ।"

]
},

{
heading: "NOTE-5: ପରବର୍ତ୍ତୀ କାଳର ଭାରତୀୟ ଗଣିତଜ୍ଞ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପରବର୍ତ୍ତୀ କାଳରେ ଭାସ୍କର, ଆର୍ଯ୍ୟଭଟ, ବ୍ରହ୍ମଗୁପ୍ତ ଓ ମହାବୀର ଆଦି ମହାନ ଭାରତୀୟ ଗଣିତଜ୍ଞ ଜ୍ୟାମିତି ଶାଖାର ଉନ୍ନତି ପାଇଁ ମହତ୍ତ୍ୱପୂର୍ଣ୍ଣ ଅବଦାନ ଦେଇଥିଲେ ।<br><br>👉 ଉଦାହରଣ: ଆର୍ଯ୍ୟଭଟ ଓ ବ୍ରହ୍ମଗୁପ୍ତଙ୍କ ପରି ଗଣିତଜ୍ଞମାନେ ନିଜ ଗ୍ରନ୍ଥରେ ବିଭିନ୍ନ ଜ୍ୟାମିତିକ ସୂତ୍ର ଓ ନିୟମ ଉଲ୍ଲେଖ କରି ଭାରତୀୟ ଜ୍ୟାମିତିକୁ ସମୃଦ୍ଧ କରିଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଜ୍ୟାମିତି ଉନ୍ନତି ପାଇଁ ଅବଦାନ ଦେଇଥିବା ଚାରିଜଣ ଭାରତୀୟ ଗଣିତଜ୍ଞଙ୍କ ନାମ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଭାସ୍କର, ଆର୍ଯ୍ୟଭଟ, ବ୍ରହ୍ମଗୁପ୍ତ ଓ ମହାବୀର ।",

"<span style='color:red;'>Q-2:</span> ଏହି ଗଣିତଜ୍ଞମାନେ ଜ୍ୟାମିତି ପାଇଁ କ'ଣ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ଜ୍ୟାମିତି ଶାଖାର ଉନ୍ନତି ପାଇଁ ମହତ୍ତ୍ୱପୂର୍ଣ୍ଣ ଅବଦାନ ଦେଇଥିଲେ ।",

"<span style='color:red;'>Q-3:</span> ଏହି ଗଣିତଜ୍ଞମାନେ ନିଜ ଗ୍ରନ୍ଥରେ କ'ଣ ଉଲ୍ଲେଖ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ବିଭିନ୍ନ ଜ୍ୟାମିତିକ ସୂତ୍ର ଓ ନିୟମ ଉଲ୍ଲେଖ କରିଥିଲେ ।",

"<span style='color:red;'>Q-4:</span> ଏହି ଗଣିତଜ୍ଞମାନଙ୍କ ଅବଦାନ ଫଳରେ କ'ଣ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> ଭାରତୀୟ ଜ୍ୟାମିତି ସମୃଦ୍ଧ ହେଲା ।"

]
},

{
heading: "NOTE-6: ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନଙ୍କ ଭୂମିକା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଥେଲ୍ସ, ପିଥାଗୋରସ୍, ସକ୍ରେଟିସ୍, ପ୍ଲାଟୋ ଓ ଆରିଷ୍ଟଟଲ ଆଦି ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନେ ଯୁକ୍ତି ଓ ଦର୍ଶନ ପ୍ରୟୋଗ କରି ଜ୍ୟାମିତିକୁ ନୂତନ ଉଦ୍ଭାବନ କରିବାର ପ୍ରୟାସ ଆରମ୍ଭ କରିଥିଲେ ।<br><br>👉 ଉଦାହରଣ: ପୂର୍ବେ ଜ୍ୟାମିତି କେବଳ ପରୀକ୍ଷାମୂଳକ ଭାବରେ ବ୍ୟବହୃତ ହେଉଥିଲା, କିନ୍ତୁ ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନେ ଏହାକୁ ଯୁକ୍ତିଯୁକ୍ତ ପ୍ରମାଣ ଉପରେ ଆଧାରିତ କରିବାର ପ୍ରୟାସ କଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> କେଉଁ ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନେ ଜ୍ୟାମିତିକୁ ନୂତନ ଉଦ୍ଭାବନ କରିବାର ପ୍ରୟାସ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ଥେଲ୍ସ, ପିଥାଗୋରସ୍, ସକ୍ରେଟିସ୍, ପ୍ଲାଟୋ ଓ ଆରିଷ୍ଟଟଲ ।",

"<span style='color:red;'>Q-2:</span> ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନେ ଜ୍ୟାମିତିରେ କ'ଣ ପ୍ରୟୋଗ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ଯୁକ୍ତି ଓ ଦର୍ଶନ ପ୍ରୟୋଗ କରିଥିଲେ ।",

"<span style='color:red;'>Q-3:</span> ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନଙ୍କ ପୂର୍ବରୁ ଜ୍ୟାମିତି କେମିତି ବ୍ୟବହୃତ ହେଉଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ପୂର୍ବେ ଜ୍ୟାମିତି କେବଳ ପରୀକ୍ଷାମୂଳକ ଭାବରେ ବ୍ୟବହୃତ ହେଉଥିଲା ।",

"<span style='color:red;'>Q-4:</span> ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନେ ଜ୍ୟାମିତିକୁ କେଉଁ ଆଧାରରେ ପ୍ରତିଷ୍ଠିତ କରିବାକୁ ଚେଷ୍ଟା କଲେ ?<br><br><span style='color:green;'>Answer:</span> ଯୁକ୍ତିଯୁକ୍ତ ପ୍ରମାଣ ଉପରେ ଆଧାରିତ କରିବାକୁ ଚେଷ୍ଟା କଲେ ।"

]
},

{
heading: "NOTE-7: ଇଉକ୍ଲିଡ୍ - ଜ୍ୟାମିତିର ଜନକ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଇଉକ୍ଲିଡ୍‌ଙ୍କୁ 'ଜ୍ୟାମିତିର ଜନକ' କୁହାଯାଏ । ତାଙ୍କ ନାମାନୁସାରେ ଜ୍ୟାମିତିର ନାମ 'ଇଉକ୍ଲିଡ଼ୀୟ ଜ୍ୟାମିତି' (Euclidean Geometry) ପ୍ରଚଳିତ ହୋଇଛି । ଇଉକ୍ଲିଡ୍‌ଙ୍କ ପ୍ରସିଦ୍ଧ ଗ୍ରନ୍ଥ 'Elements' ତେର ଅଧ୍ୟାୟରେ ବିଭକ୍ତ ଥିଲା ।<br><br>👉 ଉଦାହରଣ: ଇଉକ୍ଲିଡ୍‌ 'Elements' ଗ୍ରନ୍ଥରେ କେତେକ ପରାଖା (Postulate) ଉପାୟରେ ଅନ୍ୟ ସମସ୍ତ ସିଦ୍ଧାନ୍ତକୁ ଯୁକ୍ତି ଦ୍ୱାରା ପ୍ରତିପାଦନ କରିବାର ପ୍ରଥମ ପ୍ରୟାସ କରିଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> 'ଜ୍ୟାମିତିର ଜନକ' କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଇଉକ୍ଲିଡ୍‌ଙ୍କୁ 'ଜ୍ୟାମିତିର ଜନକ' କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଇଉକ୍ଲିଡ୍‌ଙ୍କ ନାମାନୁସାରେ ଜ୍ୟାମିତିର କେଉଁ ନାମ ପ୍ରଚଳିତ ହେଲା ?<br><br><span style='color:green;'>Answer:</span> 'ଇଉକ୍ଲିଡ଼ୀୟ ଜ୍ୟାମିତି' ନାମ ପ୍ରଚଳିତ ହେଲା ।",

"<span style='color:red;'>Q-3:</span> ଇଉକ୍ଲିଡ୍‌ଙ୍କ ପ୍ରସିଦ୍ଧ ଗ୍ରନ୍ଥର ନାମ ଓ ଅଧ୍ୟାୟ ସଂଖ୍ୟା କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଗ୍ରନ୍ଥର ନାମ 'Elements' ଓ ଏହା ତେର ଅଧ୍ୟାୟରେ ବିଭକ୍ତ ଥିଲା ।",

"<span style='color:red;'>Q-4:</span> ଇଉକ୍ଲିଡ୍‌ 'Elements' ଗ୍ରନ୍ଥରେ କେଉଁ ପ୍ରୟାସ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ପରାଖା ଉପାୟରେ ସିଦ୍ଧାନ୍ତକୁ ଯୁକ୍ତି ଦ୍ୱାରା ପ୍ରତିପାଦନ କରିବାର ପ୍ରଥମ ପ୍ରୟାସ କରିଥିଲେ ।"

]
},

{
heading: "NOTE-8: ବର୍ଟ୍ରାଣ୍ଡ ରସେଲ୍‌ଙ୍କ ମତ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବିଖ୍ୟାତ ଦାର୍ଶନିକ ଓ ଗଣିତଜ୍ଞ ବର୍ଟ୍ରାଣ୍ଡ ରସେଲ୍ ତାଙ୍କର 'Mathematics and Metaphysics' ପୁସ୍ତକରେ ଇଉକ୍ଲିଡ୍‌ଙ୍କ ଜ୍ୟାମିତି ସମ୍ପର୍କରେ କେତେକ ଯୁକ୍ତି ଓ ଅସଙ୍ଗତି ବିଷୟରେ ମତ ପ୍ରକାଶ କରିଥିଲେ ।<br><br>👉 ଉଦାହରଣ: ରସେଲ୍‌ଙ୍କ ମତ ପରେ ଅନ୍ୟ ଗଣିତଜ୍ଞମାନେ ମଧ୍ୟ ଇଉକ୍ଲିଡ୍‌ଙ୍କ ଜ୍ୟାମିତିକୁ ତ୍ରୁଟିମୁକ୍ତ କରି ଏକ ଦୃଢ଼ ଭିତ୍ତିରେ ପ୍ରତିଷ୍ଠିତ କରିବାର ଚେଷ୍ଟା ଆରମ୍ଭ କରିଥିଲେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> କେଉଁ ବିଖ୍ୟାତ ଦାର୍ଶନିକ ଇଉକ୍ଲିଡ୍‌ଙ୍କ ଜ୍ୟାମିତି ସମ୍ପର୍କରେ ମତ ପ୍ରକାଶ କରିଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ବର୍ଟ୍ରାଣ୍ଡ ରସେଲ୍ ମତ ପ୍ରକାଶ କରିଥିଲେ ।",

"<span style='color:red;'>Q-2:</span> ରସେଲ୍‌ଙ୍କ ପୁସ୍ତକର ନାମ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ପୁସ୍ତକର ନାମ 'Mathematics and Metaphysics' ।",

"<span style='color:red;'>Q-3:</span> ରସେଲ୍ ଇଉକ୍ଲିଡ୍‌ଙ୍କ ଜ୍ୟାମିତି ସମ୍ପର୍କରେ କ'ଣ ମତ ଦେଇଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ଏଥିରେ କେତେକ ଯୁକ୍ତି ଓ ଅସଙ୍ଗତି ଥିବା ମତ ଦେଇଥିଲେ ।",

"<span style='color:red;'>Q-4:</span> ରସେଲ୍‌ଙ୍କ ମତ ପରେ ଗଣିତଜ୍ଞମାନେ କ'ଣ ଚେଷ୍ଟା କଲେ ?<br><br><span style='color:green;'>Answer:</span> ଜ୍ୟାମିତିକୁ ତ୍ରୁଟିମୁକ୍ତ କରି ଏକ ଦୃଢ଼ ଭିତ୍ତିରେ ପ୍ରତିଷ୍ଠିତ କରିବାର ଚେଷ୍ଟା କଲେ ।"

]
},

{
heading: "NOTE-9: ବିରକ୍‌ହଫ୍ ଓ ହିଲବର୍ଟଙ୍କ ଅବଦାନ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଆଧୁନିକ ଗଣିତଜ୍ଞ ଜର୍ଜ ଡେଭିଡ୍ ବିରକ୍‌ହଫ୍ ଓ ଡେଭିଡ୍ ହିଲବର୍ଟ ଜ୍ୟାମିତିକୁ ତ୍ରୁଟିମୁକ୍ତ କରି ବିଦ୍ୟାଳୟ ସ୍ତର ପାଠ୍ୟକ୍ରମ ପାଇଁ ଉପଯୁକ୍ତ କରିବାରେ ପ୍ରୟାସ କରିଥିଲେ । ବିରକ୍‌ହଫ୍‌ଙ୍କ ଦ୍ୱାରା ପ୍ରସ୍ତାବିତ 'A set of postulates for plane geometry based on scale and protractor' ୧୯୩୨ ମସିହାରେ ପ୍ରକାଶିତ ହୋଇଥିଲା ।<br><br>👉 ଉଦାହରଣ: ଏହି ପ୍ରୟାସ ଫଳରେ ଜ୍ୟାମିତି ଅଧ୍ୟୟନ ପାଇଁ ଅଧିକ ସରଳ ଓ ବ୍ୟବହାରିକ ପଦ୍ଧତି ମିଳିଲା, ଯାହା ଆଜି ମଧ୍ୟ ବିଦ୍ୟାଳୟରେ ପଢ଼ାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଆଧୁନିକ ଜ୍ୟାମିତିକୁ ତ୍ରୁଟିମୁକ୍ତ କରିବାରେ କେଉଁ ଦୁଇଜଣ ଗଣିତଜ୍ଞ ଅବଦାନ ଦେଇଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ଜର୍ଜ ଡେଭିଡ୍ ବିରକ୍‌ହଫ୍ ଓ ଡେଭିଡ୍ ହିଲବର୍ଟ ଅବଦାନ ଦେଇଥିଲେ ।",

"<span style='color:red;'>Q-2:</span> ବିରକ୍‌ହଫ୍‌ଙ୍କ ପ୍ରସ୍ତାବିତ ପୁସ୍ତକ କେଉଁ ମସିହାରେ ପ୍ରକାଶିତ ହୋଇଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ୧୯୩୨ ମସିହାରେ ପ୍ରକାଶିତ ହୋଇଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ବିରକ୍‌ହଫ୍‌ଙ୍କ ପରାଖା ପଦ୍ଧତି କେଉଁ ଦୁଇଟି ଉପକରଣ ଉପରେ ଆଧାରିତ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> Scale ଓ Protractor ଉପରେ ଆଧାରିତ ଥିଲା ।",

"<span style='color:red;'>Q-4:</span> ବିରକ୍‌ହଫ୍ ଓ ହିଲବର୍ଟଙ୍କ ପ୍ରୟାସ ଫଳରେ କ'ଣ ମିଳିଲା ?<br><br><span style='color:green;'>Answer:</span> ଜ୍ୟାମିତି ଅଧ୍ୟୟନ ପାଇଁ ଅଧିକ ସରଳ ଓ ବ୍ୟବହାରିକ ପଦ୍ଧତି ମିଳିଲା ।"

]
},

{
heading: "NOTE-10: ଆଧୁନିକ ଜ୍ୟାମିତିର ପ୍ରୟୋଗ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଆଧୁନିକ ଜ୍ୟାମିତିର ଉଭୟ ତାତ୍ତ୍ୱିକ ଓ ପ୍ରୟୋଗାତ୍ମକ ଦୃଷ୍ଟିରୁ ବହୁତ ମହତ୍ତ୍ୱ ଅଛି । ଏହା ବିଜ୍ଞାନ, ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଓ ଆଧୁନିକ ଶାସ୍ତ୍ର ନିର୍ମାଣ ଆଦିରେ ବ୍ୟବହୃତ ହୋଇଥାଏ । ମାଧ୍ୟମିକ ବିଦ୍ୟାଳୟ ସ୍ତରରେ ମୁଖ୍ୟତଃ ଇଉକ୍ଲିଡ଼ୀୟ ବା ସମତଳ ଜ୍ୟାମିତି ପଢ଼ାଯାଇଥାଏ ।<br><br>👉 ଉଦାହରଣ: ଆଜିକାଲି ଜ୍ୟାମିତିକୁ 'ସେଟ୍' (Set) ମାଧ୍ୟମରେ ପ୍ରକାଶ କରାଯାଏ, ଯାହା ଏହାର ପାଠ୍ୟକ୍ରମକୁ ଅଧିକ ସ୍ପଷ୍ଟ ଓ ବିଜ୍ଞାନସମ୍ମତ କରିଥାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଆଧୁନିକ ଜ୍ୟାମିତି କେଉଁ କେଉଁ କ୍ଷେତ୍ରରେ ବ୍ୟବହୃତ ହୋଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ବିଜ୍ଞାନ, ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଓ ଆଧୁନିକ ଶାସ୍ତ୍ର ନିର୍ମାଣରେ ବ୍ୟବହୃତ ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-2:</span> ମାଧ୍ୟମିକ ବିଦ୍ୟାଳୟ ସ୍ତରରେ ମୁଖ୍ୟତଃ କେଉଁ ଜ୍ୟାମିତି ପଢ଼ାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଇଉକ୍ଲିଡ଼ୀୟ ବା ସମତଳ ଜ୍ୟାମିତି ପଢ଼ାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଆଜିକାଲି ଜ୍ୟାମିତିକୁ କେଉଁ ଗାଣିତିକ ମାଧ୍ୟମରେ ପ୍ରକାଶ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବେଦ (Set) ମାଧ୍ୟମରେ ପ୍ରକାଶ କରାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> 'ବେଦ' ମାଧ୍ୟମରେ ପ୍ରକାଶ କରିବା ଫଳରେ ଜ୍ୟାମିତିର କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ଜ୍ୟାମିତି ପାଠ୍ୟକ୍ରମ ଅଧିକ ସ୍ପଷ୍ଟ ଓ ବିଜ୍ଞାନସମ୍ମତ ହୁଏ ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ଜ୍ୟାମିତି ଶବ୍ଦର ଅର୍ଥ<br/>ଓ ଆକୃତି-ସଚେତନତା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଆକୃତି\"]\nA --> I1[\"ପତ୍ର, ଫୁଲ, ଫଳ<br/>ବିଭିନ୍ନ ପ୍ରକାର ଆକୃତିରେ ଥାଏ।\"]\nA --> I2[\"ଆକୃତି-ସଚେତନତା<br/>ମଣିଷର ବିଶେଷତ୍ୱ।\"]\nA --> I3[\"ଏହା ଜୀବଜନ୍ତୁଙ୍କ ମଧ୍ୟ<br/>ପ୍ରବୃତ୍ତିଗତ ଅଟେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଜ୍ୟାମିତି ଶବ୍ଦ\"]\nM --> M1[\"ଆକୃତିତତ୍ତ୍ୱ ଜ୍ଞାନର<br/>ପ୍ରଥମ ଶାଖା ଜ୍ୟାମିତି।\"]\nM --> M2[\"'ଜ୍ୟା' ଅର୍ଥ ଦୂରତ୍ୱ<br/>ଓ 'ମିତି' ଅର୍ଥ ମାପ।\"]\nM --> M3[\"Geometry ଶବ୍ଦ Geo (ଭୂଖଣ୍ଡ)<br/>ଓ Metron (ମାପ)ରୁ ସୃଷ୍ଟି।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଆବଶ୍ୟକତା\"]\nC --> C1[\"ମାପ କରିବାର ଆବଶ୍ୟକତାରୁ<br/>ଜ୍ୟାମିତିର ସୃଷ୍ଟି ହେଲା।\"]\nC --> C2[\"ମାନବ ସଭ୍ୟତାର ଅଗ୍ରଗତି<br/>ସହିତ ଜ୍ୟାମିତି ବିକଶିତ ହେଲା।\"]\nC --> C3[\"ପ୍ରାଚୀନ ସଭ୍ୟତାର ଗୃହନିର୍ମାଣ,<br/>ରାସ୍ତା ଓ ବାସଗୃହରେ ପ୍ରୟୋଗ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ପ୍ରାଚୀନ ସଭ୍ୟତାରେ<br/>ଜ୍ୟାମିତିର ପ୍ରୟୋଗ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପ୍ରାଥମିକ ଅବସ୍ଥା\"]\nA --> I1[\"ପ୍ରାଥମିକ ଅବସ୍ଥାରେ ଜ୍ୟାମିତି<br/>ପରୀକ୍ଷାମୂଳକ ଉପାୟରେ ବିକଶିତ।\"]\nA --> I2[\"ପରାଖା ଓ ପର୍ଯ୍ୟବେକ୍ଷଣ<br/>ଆଧାରରେ ପଦ୍ଧତି ପ୍ରୟୋଗ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପ୍ରାଚୀନ ଉଦାହରଣ\"]\nM --> M1[\"ବୈଦିକ ଯୁଗରେ ଯଜ୍ଞ ବେଦି<br/>ନିର୍ମାଣରେ 'ଶୁଳ୍ବ ସୂତ୍ର' ପ୍ରୟୋଗ।\"]\nM --> M2[\"ଶୁଳ୍ବ ସୂତ୍ର ୮୦୦ ରୁ ୫୦୦<br/>ଖ୍ରୀଷ୍ଟପୂର୍ବ ମଧ୍ୟରେ ରଚିତ।\"]\nM --> M3[\"ମିଶରୀୟମାନେ ପିରାମିଡ୍<br/>ନିର୍ମାଣରେ ଜ୍ୟାମିତି ପ୍ରୟୋଗ କଲେ।\"]\nM --> M4[\"ମହେନ୍‌ଜୋଦାରୋ ଓ ହରପ୍ପାରେ<br/>ମଧ୍ୟ ଜ୍ୟାମିତିର ପ୍ରୟୋଗ ମିଳେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ପରବର୍ତ୍ତୀ ପ୍ରୟୋଗ\"]\nC --> C1[\"ଭାୟର, ଆର୍ଯ୍ୟଭଟ, ବ୍ରହ୍ମଗୁପ୍ତ<br/>ମହାବୀର ଭାରତୀୟ ଅବଦାନକାରୀ।\"]\nC --> C2[\"ମନ୍ଦିର ନିର୍ମାଣ ଓ ନଗର<br/>ଯୋଜନାରେ ପ୍ରୟୋଗ ଚାଲିଲା।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 3 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ଗ୍ରୀକ୍ ଦାର୍ଶନିକ ଓ<br/>ଇଉକ୍ଲିଡ୍‌ଙ୍କ ଅବଦାନ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଗ୍ରୀକ୍ ଦାର୍ଶନିକ\"]\nA --> I1[\"ଥେଲ୍ସ, ପିଥାଗୋରସ୍,<br/>ସକ୍ରେଟିସ୍, ପ୍ଲାଟୋ, ଆରିଷ୍ଟଟଲ।\"]\nA --> I2[\"ଏମାନେ ଯୁକ୍ତି ଓ ଦର୍ଶନ<br/>ପ୍ରୟୋଗ କରି ଉଦ୍ଭାବନ କଲେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଇଉକ୍ଲିଡ୍\"]\nM --> M1[\"ଖ୍ରୀଷ୍ଟପୂର୍ବ ଚତୁର୍ଥ ଶତାବ୍ଦୀରେ<br/>ଜନ୍ମ ଏଲେକ୍ଜାଣ୍ଡ୍ରିଆରେ।\"]\nM --> M2[\"ତାଙ୍କର ଗ୍ରନ୍ଥ 'Elements'<br/>ତେର ଅଧ୍ୟାୟରେ ବିଭକ୍ତ।\"]\nM --> M3[\"ପରାଖାମାନଙ୍କ ମଧ୍ୟରୁ<br/>ଆହରଣ ମାର୍ଗ ପ୍ରଶସ୍ତ କଲେ।\"]\nM --> M4[\"ତାଙ୍କୁ 'ଜ୍ୟାମିତିର ଜନକ'<br/>ବୋଲି କୁହାଯାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଇଉକ୍ଲିଡ଼ୀୟ ଜ୍ୟାମିତି\"]\nC --> C1[\"ତାଙ୍କ ନାମାନୁସାରେ<br/>'ଇଉକ୍ଲିଡ଼ୀୟ ଜ୍ୟାମିତି' ପ୍ରଚଳିତ।\"]\nC --> C2[\"ବର୍ଟ୍ରାଣ୍ଡ ରସେଲ୍ ଏହାର<br/>ଅସଙ୍ଗତି ବିଷୟରେ ଉଲ୍ଲେଖ କଲେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 3 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ଆଧୁନିକ ଜ୍ୟାମିତିର<br/>ବିକାଶ ଓ ପ୍ରୟୋଗ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ତ୍ରୁଟି ସୁଧାର\"]\nA --> I1[\"ଇଉକ୍ଲିଡ଼ୀୟ ଜ୍ୟାମିତିରେ<br/>କେତେକ ତ୍ରୁଟି ମିଳିଥିଲା।\"]\nA --> I2[\"ଏହାକୁ ଚୂଡ଼ାନ୍ତ ରୂପ<br/>ଦେବାର ପ୍ରୟାସ ଆରମ୍ଭ ହେଲା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଆଧୁନିକ ଗଣିତଜ୍ଞ\"]\nM --> M1[\"ଜର୍ଜ ଡେଭିଡ୍ ବିରକ୍‌ହଫ୍<br/>ଓ ଡେଭିଡ୍ ହିଲବର୍ଟ ଅବଦାନ ଦେଲେ।\"]\nM --> M2[\"ବିରକ୍‌ହଫ୍‌ଙ୍କ ପ୍ରସ୍ତାବ<br/>1932 ମସିହାରେ ପ୍ରକାଶିତ।\"]\nM --> M3[\"'Scale ଓ Protractor'<br/>ଆଧାରିତ ପରାଖା ପ୍ରସ୍ତୁତ କଲେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ପ୍ରୟୋଗ\"]\nC --> C1[\"ବିଜ୍ଞାନ, ପ୍ରଯୁକ୍ତି ଓ<br/>ଆଧୁନିକ ଶାସ୍ତ୍ର ନିର୍ମାଣରେ ବ୍ୟବହୃତ।\"]\nC --> C2[\"ବେଦ (Set) ମାଧ୍ୟମରେ<br/>ପ୍ରକାଶ କରାଯାଏ।\"]\nC --> C3[\"ମାଧ୍ୟମିକ ବିଦ୍ୟାଳୟ ସ୍ତରରେ<br/>ମୁଖ୍ୟତଃ ଇଉକ୍ଲିଡ଼ୀୟ ଜ୍ୟାମିତି ପଢ଼ାଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 3 stroke-width:0px;\nlinkStyle 7 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`
  ]
      
}  
]
};  
