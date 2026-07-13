const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଭୂଗୋଳ"
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
            word: "CIVILIZATION",
            odia: "ସଭ୍ୟତା",
            emoji: "🏛️",
            odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ଏକ ଦେଶର ପ୍ରାଚୀନ ସଂସ୍କୃତି ଓ ଜୀବନଶୈଳୀ । ଭାରତୀୟ ସଭ୍ୟତା ବହୁତ ପ୍ରାଚୀନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEMOCRATIC",
            odia: "ଗଣତାନ୍ତ୍ରିକ",
            emoji: "🗳️",
            odiaUse: "ଗଣତାନ୍ତ୍ରିକ ଅର୍ଥ ଜନତାଙ୍କ ଦ୍ୱାରା ଚାଲିଥିବା ଶାସନ । ଭାରତ ବିଶ୍ୱର ସର୍ବବୃହତ୍ ଗଣତାନ୍ତ୍ରିକ ଦେଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEVELOPING",
            odia: "ବିକାଶଶୀଳ",
            emoji: "📈",
            odiaUse: "ବିକାଶଶୀଳ ଅର୍ଥ ଯେଉଁ ଦେଶ ଦ୍ରୁତ ଉନ୍ନତି କରୁଛି । ଭାରତ ଏକ ବିକାଶଶୀଳ ଦେଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INDEPENDENCE",
            odia: "ସ୍ୱାଧୀନତା",
            emoji: "🇮🇳",
            odiaUse: "ସ୍ୱାଧୀନତା ଅର୍ଥ ପରାଧୀନତାରୁ ମୁକ୍ତି । ସ୍ୱାଧୀନତା ପରେ ଭାରତ ବହୁତ ଉନ୍ନତି କରିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POPULATION",
            odia: "ଜନସଂଖ୍ୟା",
            emoji: "👨‍👩‍👧‍👦",
            odiaUse: "ଜନସଂଖ୍ୟା ଅର୍ଥ ଏକ ସ୍ଥାନରେ ବସବାସ କରୁଥିବା ଲୋକଙ୍କ ସଂଖ୍ୟା । ଭାରତର ଜନସଂଖ୍ୟା ବହୁତ ଅଧିକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIVERSITY",
            odia: "ବୈଚିତ୍ର୍ୟ",
            emoji: "🌈",
            odiaUse: "ବୈଚିତ୍ର୍ୟ ଅର୍ଥ ବିଭିନ୍ନ ପ୍ରକାରର ଭିନ୍ନତା । ଭାରତ ପ୍ରାକୃତିକ ବୈଚିତ୍ର୍ୟରେ ପରିପୂର୍ଣ୍ଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PLATEAU",
            odia: "ମାଳଭୂମି",
            emoji: "⛰️",
            odiaUse: "ମାଳଭୂମି ଅର୍ଥ ଉଚ୍ଚ ଓ ସମତଳ ଭୂମି । ଭାରତରେ ଅନେକ ମାଳଭୂମି ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DESERT",
            odia: "ମରୁଭୂମି",
            emoji: "🏜️",
            odiaUse: "ମରୁଭୂମି ଅର୍ଥ ବାଲୁକାମୟ ଶୁଷ୍କ ଅଞ୍ଚଳ । ଭାରତରେ ଥାର ମରୁଭୂମି ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBCONTINENT",
            odia: "ଉପମହାଦେଶ",
            emoji: "🌏",
            odiaUse: "ଉପମହାଦେଶ ଅର୍ଥ ବଡ଼ ଓ ସ୍ୱତନ୍ତ୍ର ଭୂଖଣ୍ଡ । ଭାରତକୁ ଏକ ଉପମହାଦେଶ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNITY",
            odia: "ଏକତା",
            emoji: "🤝",
            odiaUse: "ଏକତା ଅର୍ଥ ସମସ୍ତେ ମିଳିମିଶି ରହିବା । ବିଭିନ୍ନତା ମଧ୍ୟରେ ଏକତା ଭାରତର ବୈଶିଷ୍ଟ୍ୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ISLAND",
            odia: "ଦ୍ୱୀପ",
            emoji: "🏝️",
            odiaUse: "ଦ୍ୱୀପ ଅର୍ଥ ଚାରିପଟେ ପାଣି ଘେରିଥିବା ଭୂମି । ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଏକ ଦ୍ୱୀପପୁଞ୍ଜ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HEMISPHERE",
            odia: "ଗୋଲାର୍ଦ୍ଧ",
            emoji: "🌐",
            odiaUse: "ଗୋଲାର୍ଦ୍ଧ ଅର୍ଥ ପୃଥିବୀର ଅଧା ଭାଗ । ଭାରତ ଉତ୍ତର ଗୋଲାର୍ଦ୍ଧରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LATITUDE",
            odia: "ଅକ୍ଷାଂଶ",
            emoji: "📍",
            odiaUse: "ଅକ୍ଷାଂଶ ଅର୍ଥ ପୂର୍ବ-ପଶ୍ଚିମ ଦିଗରେ ଟଣାଯାଇଥିବା କଳ୍ପନା ରେଖା । ଭାରତର ଅବସ୍ଥିତି ଅକ୍ଷାଂଶରେ ଦର୍ଶାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LONGITUDE",
            odia: "ଦ୍ରାଘିମା",
            emoji: "🧭",
            odiaUse: "ଦ୍ରାଘିମା ଅର୍ଥ ଉତ୍ତର-ଦକ୍ଷିଣ ଦିଗରେ ଟଣାଯାଇଥିବା କଳ୍ପନା ରେଖା । ଭାରତର ଦ୍ରାଘିମା ନିର୍ଦ୍ଦିଷ୍ଟ ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TROPIC",
            odia: "କ୍ରାନ୍ତି",
            emoji: "☀️",
            odiaUse: "କ୍ରାନ୍ତି ଅର୍ଥ ପୃଥିବୀର ବିଶେଷ କଳ୍ପନା ରେଖା । କର୍କଟକ୍ରାନ୍ତି ଭାରତର ମଧ୍ୟଭାଗ ଦେଇ ଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CANAL",
            odia: "କେନାଲ",
            emoji: "🚢",
            odiaUse: "କେନାଲ ଅର୍ଥ ଜଳପଥ ପାଇଁ ତିଆରି ହୋଇଥିବା କୃତ୍ରିମ ନାଳ । ସୁଏଜ କେନାଲ ଭାରତ ଓ ଇଉରୋପର ଦୂରତା କମାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AREA",
            odia: "କ୍ଷେତ୍ରଫଳ",
            emoji: "📐",
            odiaUse: "କ୍ଷେତ୍ରଫଳ ଅର୍ଥ କୌଣସି ସ୍ଥାନର ମୋଟ ଆୟତନ । ଭାରତର କ୍ଷେତ୍ରଫଳ ୩.୨୮ ନିୟୁତ ବର୍ଗ କି.ମି. ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COASTLINE",
            odia: "ଉପକୂଳରେଖା",
            emoji: "🌊",
            odiaUse: "ଉପକୂଳରେଖା ଅର୍ଥ ସମୁଦ୍ର କୂଳର ସୀମାରେଖା । ଭାରତର ଉପକୂଳରେଖା ୭,୫୦୦ କି.ମି.ରୁ ଅଧିକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TSUNAMI",
            odia: "ସୁନାମି",
            emoji: "🌊",
            odiaUse: "ସୁନାମି ଅର୍ଥ ସମୁଦ୍ରର ବିଶାଳ ତରଙ୍ଗ । ୨୦୦୪ ମସିହାରେ ସୁନାମି ଇନ୍ଦିରା ପଏଣ୍ଟକୁ କ୍ଷତି କରିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOUNTAIN RANGE",
            odia: "ପର୍ବତଶ୍ରେଣୀ",
            emoji: "🏔️",
            odiaUse: "ପର୍ବତଶ୍ରେଣୀ ଅର୍ଥ ଅନେକ ପର୍ବତର ଧାଡ଼ି । କାରାକୋରମ ଏକ ପ୍ରସିଦ୍ଧ ପର୍ବତଶ୍ରେଣୀ ।",
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
