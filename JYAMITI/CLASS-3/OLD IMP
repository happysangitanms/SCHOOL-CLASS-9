const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଜ୍ୟାମିତି"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9MTG2P2-4.mp3",
    video:  "https://www.youtube.com/embed/35h4o8ElesU?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9MTG2P2-4.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "TERM",
            odia: "ପଦ",
            emoji: "📝",
            odiaUse: "ପଦ ଅର୍ଥ କୌଣସି ବିଷୟରେ ବ୍ୟବହୃତ ହେଉଥିବା ନିର୍ଦ୍ଦିଷ୍ଟ ଶବ୍ଦ । ପ୍ରତ୍ୟେକ ପାଠରେ କେତେକ ବିଶେଷ ପଦ ଗୋଟିଏ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥରେ ବ୍ୟବହାର ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNDEFINED TERM",
            odia: "ସଂଜ୍ଞାବିହୀନ ପଦ",
            emoji: "❓",
            odiaUse: "ସଂଜ୍ଞାବିହୀନ ପଦ ଅର୍ଥ ଯାହାର ପୂର୍ବରୁ ସଂଜ୍ଞା ଦିଆଯାଇ ନାହିଁ ଏପରି ପଦ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ଏହି ତିନୋଟି ମୌଳିକ ପଦ ସଂଜ୍ଞାବିହୀନ ପଦ ଭାବେ ବ୍ୟବହାର ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEFINED TERM",
            odia: "ସଂଜ୍ଞାକୃତ ପଦ",
            emoji: "✅",
            odiaUse: "ସଂଜ୍ଞାକୃତ ପଦ ଅର୍ଥ ଯାହାର ଅର୍ଥ ପୂର୍ବରୁ ଜଣାଥିବା ପଦଗୁଡ଼ିକ ମାଧ୍ୟମରେ ନିରୂପିତ ହୋଇଥାଏ । ଅଧିକାଂଶ ପଦ ସଂଜ୍ଞାକୃତ ପଦ ଭାବେ ବ୍ୟବହାର ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEFINITION",
            odia: "ସଂଜ୍ଞା",
            emoji: "📖",
            odiaUse: "ସଂଜ୍ଞା ଅର୍ଥ ପୂର୍ବ ଜଣା ପଦଗୁଡ଼ିକ ସାହାଯ୍ୟରେ କୌଣସି ପଦର ଅର୍ଥ ବିଚାର କରି ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥକୁ ଗ୍ରହଣ କରିବା । ପାଠ ଦ୍ୱାରା ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥକୁ ଆମେ ପଦର ସଂଜ୍ଞା କହୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FUNDAMENTAL TERM (PRIMITIVE TERM)",
            odia: "ମୌଳିକ ପଦ",
            emoji: "🧱",
            odiaUse: "ମୌଳିକ ପଦ ଅର୍ଥ ଯାହା ଆଉ ଅଧିକ ସରଳ ପଦ ମାଧ୍ୟମରେ ବ୍ୟାଖ୍ୟା କରାଯାଇ ପାରେ ନାହିଁ, ଏହାକୁ ଜ୍ଞାପିତ ପଦ ବା ମୌଳିକ ପଦ ମଧ୍ୟ କୁହାଯାଏ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ହେଉଛି ମୌଳିକ ପଦର ଉଦାହରଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POINT",
            odia: "ବିନ୍ଦୁ",
            emoji: "📍",
            odiaUse: "ବିନ୍ଦୁ ଅର୍ଥ ଅବସ୍ଥାନ ମାତ୍ର ପ୍ରକାଶ କରୁଥିବା ଏକ ମୌଳିକ ପଦ, ଯାହାର କୌଣସି ଆକାର ବା ଆୟତନ ନଥାଏ । ରେଖା P ବିନ୍ଦୁ ଦେଇ ଯାଇଥିଲେ P ∈ L ଲେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LINE",
            odia: "ରେଖା",
            emoji: "➖",
            odiaUse: "ରେଖା ଅର୍ଥ ଅନେକ ବିନ୍ଦୁର ସମାହାର ବା ସେଟ୍, ଯାହା ଉଭୟ ଦିଗକୁ ଅସୀମ ଭାବେ ବିସ୍ତାରିତ ହୋଇଥାଏ । ଦୁଇଟି ପୃଥକ୍ ବିନ୍ଦୁ ମଧ୍ୟ ଦେଇ କେବଳ ଏକ ମାତ୍ର ସରଳରେଖା ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PLANE",
            odia: "ସମତଳ",
            emoji: "🔲",
            odiaUse: "ସମତଳ ଅର୍ଥ ଚାରିଆଡ଼େ ବିସ୍ତାରିତ ହୋଇଥିବା ଏକ ସପାଟ ପୃଷ୍ଠ, ଯାହା ଏକ ମୌଳିକ ପଦ ଭାବେ ବ୍ୟବହୃତ ହୁଏ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ହେଉଛି ଜ୍ୟାମିତିର ତିନୋଟି ମୌଳିକ ପଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AXIOM",
            odia: "ସ୍ୱୀକାର୍ଯ୍ୟ",
            emoji: "📜",
            odiaUse: "ସ୍ୱୀକାର୍ଯ୍ୟ ଅର୍ଥ ପ୍ରମାଣ ବିନା ସତ୍ୟ ବୋଲି ମାନି ନିଆଯାଇଥିବା ଉକ୍ତି । ମୌଳିକ ପଦ ପରି ଏହି ଉକ୍ତିଗୁଡ଼ିକୁ ମଧ୍ୟ କୌଣସି ପ୍ରମାଣ ବିନା ସ୍ୱୀକାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLLECTION (SET)",
            odia: "ସଂଗ୍ରହ",
            emoji: "📦",
            odiaUse: "ସଂଗ୍ରହ ଅର୍ଥ ଏକାଠି ରହିଥିବା ବସ୍ତୁ ବା ବିନ୍ଦୁଗୁଡ଼ିକର ସମାହାର । ରେଖା ମଧ୍ୟ ଅନେକ ବିନ୍ଦୁର ଏକ ସଂଗ୍ରହ ଭାବେ ବିଚାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLLINEAR POINTS",
            odia: "ଏକରେଖୀୟ ବିନ୍ଦୁ",
            emoji: "📏",
            odiaUse: "ଏକରେଖୀୟ ବିନ୍ଦୁ ଅର୍ଥ ତିନି ବା ତାହାଠାରୁ ଅଧିକ ବିନ୍ଦୁ ଯଦି ଏକ ସରଳରେଖାରେ ଅବସ୍ଥିତ ହୁଅନ୍ତି, ତେବେ ସେମାନଙ୍କୁ ଏକରେଖା ବିନ୍ଦୁ କୁହାଯାଏ । ତିନି ବିନ୍ଦୁ ଗୋଟିଏ ରେଖା ଉପରେ ରହିଲେ ସେମାନେ ଏକରେଖୀୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NON-COLLINEAR POINTS",
            odia: "ନୈକରେଖୀୟ ବିନ୍ଦୁ",
            emoji: "🔀",
            odiaUse: "ନୈକରେଖୀୟ ବିନ୍ଦୁ ଅର୍ଥ ଯେଉଁ ବିନ୍ଦୁଗୁଡ଼ିକ ଏକ ସରଳରେଖାରେ ଅବସ୍ଥିତ ନୁହଁନ୍ତି, ସେମାନଙ୍କୁ ଅଣସରଳରେଖୀୟ ବିନ୍ଦୁ ମଧ୍ୟ କୁହାଯାଏ । ତିନି ବିନ୍ଦୁ ଗୋଟିଏ ରେଖା ଉପରେ ନ ରହିଲେ ସେମାନେ ନୈକରେଖୀୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTERSECTION",
            odia: "ଛେଦ",
            emoji: "✂️",
            odiaUse: "ଛେଦ ଅର୍ଥ ଦୁଇଟି ସେଟ୍ ବା ରେଖାରେ ଥିବା ସାଧାରଣ ଉପାଦାନଗୁଡ଼ିକର ସେଟ୍ । A ∩ B ଅର୍ଥ A ଓ B ର ସାଧାରଣ ଉପାଦାନ ଥିବା ସେଟ୍ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POINT OF INTERSECTION",
            odia: "ଛେଦବିନ୍ଦୁ",
            emoji: "❎",
            odiaUse: "ଛେଦବିନ୍ଦୁ ଅର୍ଥ ଦୁଇଟି ରେଖା ମିଶିବା ସ୍ଥାନରେ ରହିଥିବା ସାଧାରଣ ବିନ୍ଦୁ । ଯଦି L₁ ∩ L₂ ≠ φ, ତେବେ ଏହି ସାଧାରଣ ବିନ୍ଦୁକୁ ଛେଦବିନ୍ଦୁ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NON-INTERSECTING LINES",
            odia: "ଅଣଛେଦୀ ରେଖା",
            emoji: "↔️",
            odiaUse: "ଅଣଛେଦୀ ରେଖା ଅର୍ଥ ଦୁଇଟି ରେଖା ଯାହାର କୌଣସି ସାଧାରଣ ବିନ୍ଦୁ ବା ଛେଦବିନ୍ଦୁ ନଥାଏ । L₁ ∩ L₂ = φ ହେଲେ ସେହି ରେଖାଦ୍ୱୟକୁ ଅଣଛେଦୀ ରେଖା କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "THEOREM",
            odia: "ଉପପାଦ୍ୟ",
            emoji: "🧮",
            odiaUse: "ଉପପାଦ୍ୟ ଅର୍ଥ ଯୁକ୍ତି ଓ ପ୍ରମାଣ ମାଧ୍ୟମରେ ସ୍ୱୀକାର୍ଯ୍ୟଗୁଡ଼ିକ ଠାରୁ ପ୍ରତିପାଦିତ ହେଉଥିବା ଉକ୍ତି । ଏହି ଉକ୍ତିଗୁଡ଼ିକୁ ପ୍ରମାଣ କରାଗଲେ ହିଁ ସେମାନଙ୍କୁ ଉପପାଦ୍ୟ ବୋଲି ଗ୍ରହଣ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PROOF",
            odia: "ପ୍ରମାଣ",
            emoji: "🔍",
            odiaUse: "ପ୍ରମାଣ ଅର୍ଥ ସ୍ୱୀକାର୍ଯ୍ୟ ଓ ଯୁକ୍ତି ବ୍ୟବହାର କରି ଏକ ଉକ୍ତିର ସତ୍ୟତା ପ୍ରତିପାଦନ କରିବା । ଉପପାଦ୍ୟକୁ ପ୍ରମାଣ ବିନା ଉପାଦେୟ ବୋଲି ଗ୍ରହଣ କରାଯାଏ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RECAPITULATION",
            odia: "ପୁନରାବୃତ୍ତି",
            emoji: "🔄",
            odiaUse: "ପୁନରାବୃତ୍ତି ଅର୍ଥ ପୂର୍ବରୁ ପଢ଼ିଥିବା ବିଷୟକୁ ପୁଣି ଥରେ ମନେ ପକାଇବା ବା ଆଲୋଚନା କରିବା । ମୌଳିକ ଅବବୋଧ ପାଇଁ ପୁନରାବୃତ୍ତି ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ପଦକ୍ଷେପ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LOGICAL (GRAMMATICAL) MEANING",
            odia: "ଭାଷାଗତ ଅର୍ଥ",
            emoji: "💬",
            odiaUse: "ଭାଷାଗତ ଅର୍ଥ ଅର୍ଥ ଦୈନନ୍ଦିନ ଭାଷାରେ ବ୍ୟବହୃତ ହେଉଥିବା ଅର୍ଥ, ଯାହା ଗାଣିତିକ ସଂଜ୍ଞାଠାରୁ ଭିନ୍ନ ହୋଇପାରେ । ପାଠ ଦ୍ୱାରା ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥକୁ ହିଁ ଗ୍ରହଣ କରିବା ଉଚିତ, ଭାଷାଗତ ଅର୍ଥକୁ ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ପଦ (Term) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରତ୍ୟେକ ଅଧ୍ୟାୟରେ କିଛି ନିର୍ଦ୍ଦିଷ୍ଟ ଶବ୍ଦ ବ୍ୟବହାର ହୁଏ, ଯାହାର ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥ ଥାଏ । ଏହିପରି ଶବ୍ଦକୁ 'ପଦ' କୁହାଯାଏ । ପ୍ରାୟ ପଦଗୁଡ଼ିକୁ ଆମେ ପ୍ରତିଦିନ ବ୍ୟବହାର କରୁଥିବା ଭାଷାରୁ ବୁଝିପାରୁ, କିନ୍ତୁ ପାଠ ଆରମ୍ଭରେ ସେମାନଙ୍କର ସଠିକ୍ ଅର୍ଥ ବିଚାର କରି ନିର୍ଦ୍ଧାରଣ କରାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଗଣିତରେ 'ବିନ୍ଦୁ', 'ରେଖା' ଓ 'ସମତଳ' ଭଳି ଶବ୍ଦ ପ୍ରତିଦିନ ବ୍ୟବହୃତ ହେଉଥିବା ଅର୍ଥରୁ ଆସିଥାଏ, କିନ୍ତୁ ଗଣିତ ପାଠରେ ସେମାନଙ୍କୁ ବିଶେଷ ଭାବରେ ବ୍ୟବହାର କରାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଦ କ'ଣ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତ୍ୟେକ ପାଠରେ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥରେ ବ୍ୟବହୃତ ହେଉଥିବା ଶବ୍ଦକୁ ପଦ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଆମେ ପଦଗୁଡ଼ିକୁ କେଉଁଠାରୁ ପ୍ରଥମେ ବୁଝିପାରୁ ?<br><br><span style='color:green;'>Answer:</span> ଆମେ ପ୍ରତିଦିନ ବ୍ୟବହାର କରୁଥିବା ଭାଷାରୁ ପ୍ରଥମେ ପଦଗୁଡ଼ିକୁ ବୁଝିପାରୁ ।",

"<span style='color:red;'>Q-3:</span> ଗଣିତରେ କେଉଁ ତିନୋଟି ପଦ ମୌଳିକ ଭାବେ ବ୍ୟବହୃତ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ଏହି ତିନୋଟି ପଦ ମୌଳିକ ଭାବେ ବ୍ୟବହୃତ ହୁଏ ।",

"<span style='color:red;'>Q-4:</span> ପାଠ ଆରମ୍ଭରେ ପଦଗୁଡ଼ିକ ପାଇଁ କ'ଣ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପାଠ ଆରମ୍ଭରେ ପଦଗୁଡ଼ିକର ସଠିକ୍ ଅର୍ଥ ବିଚାର କରି ନିର୍ଦ୍ଧାରଣ କରାଯାଏ ।"

]
},

{
heading: "NOTE-2: ସଂଜ୍ଞାବିହୀନ ପଦ ଓ ସଂଜ୍ଞାକୃତ ପଦ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଗଣିତର ପଦଗୁଡ଼ିକୁ ଦୁଇ ପ୍ରକାରରେ ଭାଗ କରାଯାଏ - ସଂଜ୍ଞାବିହୀନ ପଦ ଓ ସଂଜ୍ଞାକୃତ ପଦ । ଯେଉଁ ପଦର ଅର୍ଥ ପୂର୍ବରୁ ଅନ୍ୟ ପଦ ମାଧ୍ୟମରେ ବୁଝାଯାଏ, ତାହା ସଂଜ୍ଞାକୃତ ପଦ । ଯେଉଁ ପଦର ଅର୍ଥ ଆଉ କୌଣସି ପଦ ମାଧ୍ୟମରେ ବୁଝାଇ ହୁଏନାହିଁ, ତାହାକୁ ଜଣାପଦ ବା ମୌଳିକ ପଦ କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ଏହି ତିନୋଟି ମୌଳିକ ପଦ, କାରଣ ଏମାନଙ୍କୁ ଆଉ କୌଣସି ସରଳ ପଦ ମାଧ୍ୟମରେ ବୁଝାଇ ହୁଏନାହିଁ । ଏମାନଙ୍କୁ ଆମେ ଛୋଟ ବେଳୁ ଉଦାହରଣ ମାଧ୍ୟମରେ ଚିହ୍ନି ଆସିଛୁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ମୌଳିକ ପଦ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ପଦର ଅର୍ଥ ଆଉ କୌଣସି ପଦ ମାଧ୍ୟମରେ ବୁଝାଇ ହୁଏନାହିଁ, ତାହାକୁ ମୌଳିକ ପଦ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ମୌଳିକ ପଦକୁ ଆଉ କେଉଁ ନାମରେ ଡକାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ମୌଳିକ ପଦକୁ ଜଣାପଦ ମଧ୍ୟ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଗଣିତର ତିନୋଟି ମୌଳିକ ପଦ କ'ଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ଏହି ତିନୋଟି ମୌଳିକ ପଦ ଅଟନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ମୌଳିକ ପଦଗୁଡ଼ିକୁ ଆମେ ପୂର୍ବରୁ କିପରି ଚିହ୍ନିଥିଲୁ ?<br><br><span style='color:green;'>Answer:</span> ଆଗର ଶ୍ରେଣୀରେ ଉଦାହରଣ ମାଧ୍ୟମରେ ଆମେ ମୌଳିକ ପଦଗୁଡ଼ିକୁ ଚିହ୍ନିଥିଲୁ ।"

]
},

{
heading: "NOTE-3: ସ୍ୱୀକାର୍ଯ୍ୟ (Axiom) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ମୌଳିକ ପଦଗୁଡ଼ିକ ମଧ୍ୟରେ ପାରସ୍ପରିକ ସମ୍ପର୍କ ବୁଝାଇବା ପାଇଁ କିଛି ବାକ୍ୟ ବ୍ୟବହାର କରାଯାଏ, ଯାହା ପ୍ରମାଣ ନକରି ସମସ୍ତେ ସତ ବୋଲି ମାନି ନିଅନ୍ତି । ଏହିପରି ବାକ୍ୟକୁ ସ୍ୱୀକାର୍ଯ୍ୟ କୁହାଯାଏ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ମଧ୍ୟରେ ସମ୍ପର୍କ କୌଣସି ସଂଜ୍ଞା ମାଧ୍ୟମରେ ସ୍ଥିର ହୁଏନାହିଁ, ବରଂ ସ୍ୱୀକାର୍ଯ୍ୟ ମାଧ୍ୟମରେ ସ୍ଥିର ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ଆଗ ଶ୍ରେଣୀରେ ଆମେ ଶିଖିଥିବା କିଛି ସ୍ୱୀକାର୍ଯ୍ୟକୁ ପୁଣି ମନେ ପକାଇବା ଆବଶ୍ୟକ, ଯେପରିକି ରେଖା ବିନ୍ଦୁମାନଙ୍କର ସେଟ୍ ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସ୍ୱୀକାର୍ଯ୍ୟ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ମୌଳିକ ପଦଗୁଡ଼ିକ ମଧ୍ୟରେ ସମ୍ପର୍କ ବୁଝାଉଥିବା, ପ୍ରମାଣ ନକରି ସତ ମାନି ନିଆଯାଉଥିବା ବାକ୍ୟକୁ ସ୍ୱୀକାର୍ଯ୍ୟ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ମଧ୍ୟରେ ସମ୍ପର୍କ କେମିତି ସ୍ଥିର ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହି ସମ୍ପର୍କ ସ୍ୱୀକାର୍ଯ୍ୟ ମାଧ୍ୟମରେ ସ୍ଥିର ହୁଏ, କୌଣସି ସଂଜ୍ଞା ମାଧ୍ୟମରେ ନୁହେଁ ।",

"<span style='color:red;'>Q-3:</span> ସ୍ୱୀକାର୍ଯ୍ୟକୁ କେମିତି ମାନି ନିଆଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ସ୍ୱୀକାର୍ଯ୍ୟକୁ ପ୍ରମାଣ ନକରି, ସମସ୍ତେ ସତ ବୋଲି ମାନି ନିଅନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ପାଠ ଆରମ୍ଭରେ ଆମେ କ'ଣ ପୁନରାଲୋଚନା କରିବା ଆବଶ୍ୟକ ?<br><br><span style='color:green;'>Answer:</span> ଆଗରୁ ଜାଣିଥିବା ସ୍ୱୀକାର୍ଯ୍ୟମାନଙ୍କର ସଂକ୍ଷିପ୍ତ ପୁନରାଲୋଚନା କରିବା ଆବଶ୍ୟକ ।"

]
},

{
heading: "NOTE-4: ସ୍ୱୀକାର୍ଯ୍ୟ-1 : ରେଖା ବିନ୍ଦୁମାନଙ୍କର ସେଟ୍ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରଥମ ସ୍ୱୀକାର୍ଯ୍ୟ ଅନୁସାରେ, ଏକ ରେଖା ହେଉଛି ବିନ୍ଦୁମାନଙ୍କର ଏକ ସେଟ୍ ବା ସଂଗ୍ରହ । ଯଦି L ଏକ ରେଖା ଓ P ଏକ ବିନ୍ଦୁ ହୁଏ ଏବଂ P ସେହି ରେଖା ଉପରେ ଥାଏ, ତେବେ ଆମେ ଲେଖିପାରିବା 'P ∈ L' । ଏହାର ଅର୍ଥ P ବିନ୍ଦୁ L ରେଖା ଉପରେ ଅଛି ।<br><br>👉 ଉଦାହରଣ: 'L ରେଖା P ବିନ୍ଦୁକୁ ଧାରଣ କରେ', 'P, L ରେଖାର ଏକ ବିନ୍ଦୁ' - ଏହି ସବୁ ବାକ୍ୟର ଏକମାତ୍ର ଅର୍ଥ ହେଉଛି P ∈ L ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପ୍ରଥମ ସ୍ୱୀକାର୍ଯ୍ୟ ଅନୁସାରେ ରେଖା କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରଥମ ସ୍ୱୀକାର୍ଯ୍ୟ ଅନୁସାରେ ରେଖା ହେଉଛି ବିନ୍ଦୁମାନଙ୍କର ଏକ ସେଟ୍ ।",

"<span style='color:red;'>Q-2:</span> P ∈ L ଲେଖିଲେ କ'ଣ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> P ∈ L ଲେଖିଲେ ବୁଝାଏ ଯେ P ବିନ୍ଦୁ L ରେଖା ଉପରେ ଅଛି ।",

"<span style='color:red;'>Q-3:</span> 'L ରେଖା P ବିନ୍ଦୁକୁ ଧାରଣ କରେ' ଏହି ବାକ୍ୟର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଏହାର ଅର୍ଥ P ବିନ୍ଦୁ L ରେଖା ଉପରେ ଅଛି, ଅର୍ଥାତ୍ P ∈ L ।",

"<span style='color:red;'>Q-4:</span> ଏକ ରେଖା ବିଷୟରେ ବିଭିନ୍ନ ପ୍ରକାର ବାକ୍ୟ କାହିଁକି ବ୍ୟବହାର କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏକା ଅର୍ଥକୁ ବିଭିନ୍ନ ଭାଷାରେ ପ୍ରକାଶ କରିବା ପାଇଁ ଏହିପରି ବିଭିନ୍ନ ବାକ୍ୟ ବ୍ୟବହାର କରାଯାଏ ।"

]
},

{
heading: "NOTE-5: ସ୍ୱୀକାର୍ଯ୍ୟ-2 : ଦୁଇଟି ବିନ୍ଦୁ ମଧ୍ୟଦେଇ ଏକମାତ୍ର ରେଖା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦ୍ୱିତୀୟ ସ୍ୱୀକାର୍ଯ୍ୟ ଅନୁସାରେ, ଦୁଇଟି ପୃଥକ୍ ବିନ୍ଦୁ ମଧ୍ୟଦେଇ ଗୋଟିଏ ଏବଂ କେବଳ ଗୋଟିଏ ସରଳରେଖା ଅତିକ୍ରମ କରେ । ଯଦି P ଓ Q ଦୁଇଟି ପୃଥକ୍ ବିନ୍ଦୁ ଏକ ରେଖା ଉପରେ ଥାଆନ୍ତି, ତେବେ ସେହି ରେଖାକୁ 'PQ ରେଖା' କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଯଦି R ପ୍ରକୃତରେ PQ ରେଖା ଉପରେ ଥିବା ଆଉ ଏକ ବିନ୍ଦୁ ହୁଏ, ତେବେ PR, RP, RQ, QR, PQ ଓ QP ସବୁ ଗୋଟିଏ ରେଖାର ବିଭିନ୍ନ ନାମ, ଏମାନେ ସମସ୍ତେ ଏକ ରେଖାକୁ ବୁଝାନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଦ୍ୱିତୀୟ ସ୍ୱୀକାର୍ଯ୍ୟ କ'ଣ କୁହେ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ପୃଥକ୍ ବିନ୍ଦୁ ମଧ୍ୟଦେଇ ଗୋଟିଏ ଏବଂ କେବଳ ଗୋଟିଏ ସରଳରେଖା ଅତିକ୍ରମ କରେ ବୋଲି ଦ୍ୱିତୀୟ ସ୍ୱୀକାର୍ଯ୍ୟ କୁହେ ।",

"<span style='color:red;'>Q-2:</span> ଦୁଇଟି ପୃଥକ୍ ବିନ୍ଦୁ P ଓ Q ମାଧ୍ୟମରେ ଯାଉଥିବା ରେଖାକୁ କେମିତି ଡକାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ସେହି ରେଖାକୁ PQ ରେଖା କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> PQ ରେଖା ଉପରେ ଥିବା R ବିନ୍ଦୁ ପାଇଁ ରେଖାର କେତେ ପ୍ରକାର ନାମ ଲେଖାଯାଇପାରେ ?<br><br><span style='color:green;'>Answer:</span> PR, RP, RQ, QR, PQ ଓ QP ଏହି ଛଅ ପ୍ରକାର ନାମରେ ସେହି ରେଖାକୁ ଲେଖାଯାଇପାରେ ।",

"<span style='color:red;'>Q-4:</span> ଚିତ୍ର 1.1 ରେ କେଉଁ ବିଷୟ ଦେଖାଯାଇଛି ?<br><br><span style='color:green;'>Answer:</span> ଚିତ୍ର 1.1 ରେ P, R ଓ Q ବିନ୍ଦୁ ଏକ ସରଳରେଖା ଉପରେ ଥିବା ଦେଖାଯାଇଛି ।"

]
},

{
heading: "NOTE-6: ଏକରେଖା ବିନ୍ଦୁ ଓ ନୈକରେଖା ବିନ୍ଦୁ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯଦି ତିନି ବା ତାହାଠାରୁ ଅଧିକ ବିନ୍ଦୁ ଏକ ରେଖା ଉପରେ ଥାଆନ୍ତି, ତେବେ ସେମାନଙ୍କୁ ଏକରେଖା ବିନ୍ଦୁ କୁହାଯାଏ । ଯଦି ବିନ୍ଦୁଗୁଡ଼ିକ ଏକ ରେଖା ଉପରେ ନଥାନ୍ତି, ତେବେ ସେମାନଙ୍କୁ ନୈକରେଖା ବିନ୍ଦୁ କୁହାଯାଏ । ଦୁଇଟି ବିନ୍ଦୁ ସର୍ବଦା ଏକ ରେଖା ତିଆରି କରନ୍ତି, କିନ୍ତୁ ତିନି ବା ଅଧିକ ବିନ୍ଦୁ ସେହିପରି ହୋଇ ନ ପାରନ୍ତି ।<br><br>👉 ଉଦାହରଣ: A, B ଓ C ତିନୋଟି ବିନ୍ଦୁ ଯଦି ଏକା ସରଳରେଖା ଉପରେ ଥାନ୍ତି, ତେବେ ଏମାନେ ଏକରେଖା ବିନ୍ଦୁ । କିନ୍ତୁ ଯଦି C ବିନ୍ଦୁ ଏହି ରେଖା ଉପରେ ନଥାଏ, ତେବେ A, B, C ନୈକରେଖା ବିନ୍ଦୁ ହେବେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଏକରେଖା ବିନ୍ଦୁ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ତିନି ବା ତାହାଠାରୁ ଅଧିକ ବିନ୍ଦୁ ଯଦି ଏକ ରେଖା ଉପରେ ଥାଆନ୍ତି, ତେବେ ସେମାନଙ୍କୁ ଏକରେଖା ବିନ୍ଦୁ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ନୈକରେଖା ବିନ୍ଦୁ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ବିନ୍ଦୁଗୁଡ଼ିକ ଏକ ରେଖା ଉପରେ ନଥାଆନ୍ତି, ସେମାନଙ୍କୁ ନୈକରେଖା ବିନ୍ଦୁ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଦୁଇଟି ବିନ୍ଦୁ ସର୍ବଦା କ'ଣ ତିଆରି କରନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ବିନ୍ଦୁ ସର୍ବଦା ଏକ ରେଖା ତିଆରି କରନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ତିନି ବା ଅଧିକ ବିନ୍ଦୁ ପାଇଁ ଆମେ କ'ଣ ବିଚାର କରିବା ଆବଶ୍ୟକ ?<br><br><span style='color:green;'>Answer:</span> ତିନି ବା ଅଧିକ ବିନ୍ଦୁ ଏକ ରେଖା ଉପରେ ଅଛନ୍ତି କି ନାହିଁ, ତାହା ସ୍ୱୀକାର୍ଯ୍ୟ ମାଧ୍ୟମରେ ବିଚାର କରିବା ଆବଶ୍ୟକ ।"

]
},

{
heading: "NOTE-7: ଦୁଇଟି ସରଳରେଖାର ଛେଦ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇଟି ସେଟ୍ A ଓ B ର ଛେଦ (A ∩ B) ହେଉଛି ସେମାନଙ୍କର ସାଧାରଣ ଉପାଦାନଗୁଡ଼ିକର ସେଟ୍ । ଏହିପରି ଦୁଇଟି ରେଖା L1 ଓ L2 ପାଇଁ ମଧ୍ୟ ଦୁଇଟି ସମ୍ଭାବନା ଥାଏ - ଯଦି L1 ∩ L2 = φ ହୁଏ, ତେବେ ରେଖାଦ୍ୱୟର କୌଣସି ସାଧାରଣ ବିନ୍ଦୁ ନଥାଏ, ଏମାନଙ୍କୁ ଅଣଛେଦା ରେଖା କୁହାଯାଏ । ଯଦି L1 ∩ L2 ≠ φ ହୁଏ, ତେବେ ରେଖାଦ୍ୱୟର ଏକ ସାଧାରଣ ବିନ୍ଦୁ ବା ଛେଦ ବିନ୍ଦୁ ଥାଏ ।<br><br>👉 ଉଦାହରଣ: ଦୁଇଟି ପାରାଲାଲ ରେଖା କେବେ ମିଶନ୍ତି ନାହିଁ, ତେଣୁ ସେମାନେ ଅଣଛେଦା ରେଖା । ଅନ୍ୟ ଦୁଇଟି ରେଖା ଯଦି ଗୋଟିଏ ବିନ୍ଦୁରେ ମିଶନ୍ତି, ତେବେ ସେହି ବିନ୍ଦୁ ସେମାନଙ୍କର ଛେଦ ବିନ୍ଦୁ ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଦୁଇଟି ସେଟ୍ ର ଛେଦ କ'ଣ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ସେଟ୍ ର ଛେଦ ବୁଝାଏ ସେମାନଙ୍କର ସାଧାରଣ ଉପାଦାନଗୁଡ଼ିକର ସେଟ୍ ।",

"<span style='color:red;'>Q-2:</span> ଅଣଛେଦା ରେଖା କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ଦୁଇଟି ରେଖାର କୌଣସି ସାଧାରଣ ବିନ୍ଦୁ ନଥାଏ, ସେମାନଙ୍କୁ ଅଣଛେଦା ରେଖା କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଛେଦ ବିନ୍ଦୁ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ରେଖା ମିଶୁଥିବା ସାଧାରଣ ବିନ୍ଦୁକୁ ଛେଦ ବିନ୍ଦୁ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> L1 ∩ L2 ≠ φ ହେଲେ ଆଉ କେଉଁ ପ୍ରଶ୍ନ ଉଠେ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ରେଖାର ଏକାଧିକ ସାଧାରଣ ବିନ୍ଦୁ ରହିପାରେ କି ନାହିଁ, ଏହି ପ୍ରଶ୍ନ ଉଠେ ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ପଦ (Term) ର ପ୍ରୟୋଗ<br/>ଓ ପ୍ରକାର\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"ପ୍ରତ୍ୟେକ ପାଠ୍ୟ ବିଷୟରେ କେତେକ<br/>ବିଶେଷ ଶବ୍ଦ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥରେ<br/>ବ୍ୟବହୃତ ହୁଏ।\"]\nA --> I2[\"ଏହି ଶବ୍ଦଗୁଡ଼ିକୁ<br/>'ପଦ' (term) କୁହାଯାଏ।\"]\nA --> I3[\"ପଦଗୁଡ଼ିକର ଅର୍ଥ ପାଠ<br/>ପୂର୍ବରୁ ନିର୍ଦ୍ଧାରିତ<br/>ହେବା ଆବଶ୍ୟକ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପଦର ପ୍ରକାର\"]\nM --> M1[\"ପଦବିଶେଷର ଅର୍ଥ ଦୈନନ୍ଦିନ<br/>ଭାଷାରୁ ସଂଗ୍ରହୀତ<br/>ହୋଇଥାଏ।\"]\nM --> M2[\"ପଦଗୁଡ଼ିକ ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାର -<br/>ସଂଜ୍ଞାବିହୀନ ପଦ ଓ<br/>ସଂଜ୍ଞାକୃତ ପଦ।\"]\nM --> M3[\"ସଂଜ୍ଞାକୃତ ପଦଗୁଡ଼ିକୁ ଅନ୍ୟ<br/>ପଦ ସାହାଯ୍ୟରେ<br/>ସଂଜ୍ଞାୟିତ କରାଯାଏ।\"]\nM --> M4[\"ସଂଜ୍ଞାବିହୀନ ପଦଗୁଡ଼ିକୁ<br/>ସଂଜ୍ଞା ଦେବା<br/>ସମ୍ଭବ ନୁହେଁ।\"]\nM --> M5[\"ଏହି ପଦଗୁଡ଼ିକୁ 'ଜଣାପଦ' ବା<br/>'ମୌଳିକ ପଦ'<br/>କୁହାଯାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ -<br/>ତିନୋଟି ମୌଳିକ ପଦ।\"]\nC --> C2[\"ଏଗୁଡ଼ିକର ସଂଜ୍ଞା ଦିଆଯାଏ<br/>ନାହିଁ, କେବଳ ପରିଚୟ<br/>ଦିଆଯାଏ।\"]\nC --> C3[\"ଏହି ମୌଳିକ ପଦ ଉପରେ<br/>ଆଧାର କରି ଅନ୍ୟ ପଦ<br/>ସଂଜ୍ଞାୟିତ ହୁଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ସ୍ୱୀକାର୍ଯ୍ୟ (Axiom)<br/>ର ଧାରଣା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଆବଶ୍ୟକତା\"]\nA --> I1[\"ମୌଳିକ ପଦ (ବିନ୍ଦୁ, ରେଖା,<br/>ସମତଳ) ର ସଂଜ୍ଞା<br/>ନାହିଁ।\"]\nA --> I2[\"ଏହି ପଦଗୁଡ଼ିକ ବ୍ୟବହାର<br/>ପାଇଁ କିଛି ମୌଳିକ<br/>ସତ୍ୟ ଆବଶ୍ୟକ।\"]\nA --> I3[\"ପ୍ରମାଣ ବିନା ଗ୍ରହଣ<br/>କରାଯାଉଥିବା ବିବୃତ୍ତିର<br/>ଆବଶ୍ୟକତା ପଡ଼େ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସ୍ୱୀକାର୍ଯ୍ୟ ଓ ଉପପାଦ୍ୟ\"]\nM --> M1[\"ପ୍ରମାଣ ବିନା ଗ୍ରହଣ କରାଯାଉଥିବା<br/>ବିବୃତ୍ତିକୁ ସ୍ୱୀକାର୍ଯ୍ୟ<br/>(Axiom) କୁହାଯାଏ।\"]\nM --> M2[\"ସ୍ୱୀକାର୍ଯ୍ୟ ମାଧ୍ୟମରେ ମୌଳିକ<br/>ପଦଗୁଡ଼ିକର ଗୁଣ<br/>ବର୍ଣ୍ଣିତ ହୁଏ।\"]\nM --> M3[\"ଉପପାଦ୍ୟ (Theorem)<br/>କୁ ପ୍ରମାଣ<br/>ଆବଶ୍ୟକ ହୁଏ।\"]\nM --> M4[\"ସ୍ୱୀକାର୍ଯ୍ୟ ଓ ଉପପାଦ୍ୟ ମଧ୍ୟରେ<br/>ମୁଖ୍ୟ ପ୍ରଭେଦ ପ୍ରମାଣର<br/>ଉପସ୍ଥିତି।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ସ୍ୱୀକାର୍ଯ୍ୟ - ପ୍ରମାଣ ବିନା<br/>ଗ୍ରହଣୀୟ ସତ୍ୟ।\"]\nC --> C2[\"ଉପପାଦ୍ୟ - ଯୁକ୍ତି ଓ ପ୍ରମାଣ<br/>ଦ୍ୱାରା ପ୍ରତିପାଦିତ<br/>ସତ୍ୟ।\"]\nC --> C3[\"ଜ୍ୟାମିତିର ସମସ୍ତ ଧାରଣା<br/>ସ୍ୱୀକାର୍ଯ୍ୟ ଉପରେ<br/>ଆଧାରିତ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ସ୍ୱୀକାର୍ଯ୍ୟ-1:<br/>ରେଖା ବିନ୍ଦୁର ସେଟ୍\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ସ୍ୱୀକାର୍ଯ୍ୟ-1\"]\nA --> I1[\"ରେଖା ବିନ୍ଦୁମାନଙ୍କର<br/>ସମାହାର ବା<br/>ସେଟ୍।\"]\nA --> I2[\"L ନାମକ ଏକ ରେଖା ଉପରେ<br/>P ବିନ୍ଦୁ ଥାଏ ବୋଲି<br/>ମନେକରାଯାଉ।\"]\nA --> I3[\"ସେଟ୍ ଭାଷାରେ ଏହାକୁ<br/>P ∈ L<br/>ଲେଖାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପ୍ରକାଶ କରିବାର ଉପାୟ\"]\nM --> M1[\"'L ରେଖା P ବିନ୍ଦୁକୁ ଧାରଣ<br/>କରେ' ବୋଲି<br/>କୁହାଯାଇପାରେ।\"]\nM --> M2[\"'L ରେଖା P ମଧ୍ୟଦେଇ<br/>ଯାଏ' ବୋଲି<br/>କୁହାଯାଇପାରେ।\"]\nM --> M3[\"'P, L ରେଖା ଉପରିସ୍ଥ ଏକ<br/>ବିନ୍ଦୁ' ବୋଲି<br/>କୁହାଯାଇପାରେ।\"]\nM --> M4[\"ଏହି ସମସ୍ତ ବାକ୍ୟର ଅର୍ଥ<br/>ସମାନ - P, L ର<br/>ଏକ ବିନ୍ଦୁ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ରେଖା ମାନେ ଅସଂଖ୍ୟ<br/>ବିନ୍ଦୁର ସେଟ୍।\"]\nC --> C2[\"P∈L ର ଅର୍ଥ P ବିନ୍ଦୁ<br/>L ରେଖା ଉପରେ<br/>ଅଛି।\"]\nC --> C3[\"ଏକ ବିନ୍ଦୁକୁ ପ୍ରକାଶ<br/>କରିବାର ଅନେକ<br/>ଭାଷାଗତ ଉପାୟ ଅଛି।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ସ୍ୱୀକାର୍ଯ୍ୟ-2:<br/>ଦୁଇ ବିନ୍ଦୁ ଦେଇ<br/>ଗୋଟିଏ ସରଳରେଖା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ସ୍ୱୀକାର୍ଯ୍ୟ-2\"]\nA --> I1[\"ଦୁଇଟି ପୃଥକ୍ ବିନ୍ଦୁ<br/>ମଧ୍ୟଦେଇ ଗୋଟିଏ<br/>ସରଳରେଖା ଅବସ୍ଥିତ।\"]\nA --> I2[\"ଏହି ସରଳରେଖା<br/>କେବଳ<br/>ଏକମାତ୍ର ଅଟେ।\"]\nA --> I3[\"P ଓ Q ଦୁଇଟି ପୃଥକ୍<br/>ବିନ୍ଦୁ ଥାଏ ବୋଲି<br/>ମନେକରାଯାଉ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ରେଖା ନାମକରଣ\"]\nM --> M1[\"P ଓ Q ବିନ୍ଦୁ ଦେଇ ଯାଉଥିବା<br/>ରେଖାକୁ PQ ଚିହ୍ନରେ<br/>ପ୍ରକାଶ କରାଯାଏ।\"]\nM --> M2[\"ଏହାକୁ 'PQ ରେଖା' ବା<br/>'ସରଳରେଖା'<br/>କୁହାଯାଏ।\"]\nM --> M3[\"PQ ଉପରେ R ଏକ ବିନ୍ଦୁ ହେଲେ,<br/>PR, RP, RQ, QR, PQ, QP<br/>ସମସ୍ତେ ସମାନ ରେଖା।\"]\nM --> M4[\"ଏକ ରେଖାର ଅନେକ<br/>ନାମ<br/>ହୋଇପାରେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଦୁଇ ପୃଥକ୍ ବିନ୍ଦୁ ଦେଇ<br/>କେବଳ ଗୋଟିଏ<br/>ରେଖା ଯାଏ।\"]\nC --> C2[\"ରେଖା ଉପରେ ଥିବା ଯେକୌଣସି<br/>ଦୁଇ ବିନ୍ଦୁ ସେହି ରେଖାର<br/>ନାମ ଦେଇପାରନ୍ତି।\"]\nC --> C3[\"ରେଖାର ନାମ ବିନ୍ଦୁର<br/>କ୍ରମ ଉପରେ<br/>ନିର୍ଭର କରେ ନାହିଁ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-5:<br/>ଏକରେଖୀୟ ଓ<br/>ନୈକରେଖୀୟ ବିନ୍ଦୁ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"ତିନି ବା ତାହାଠାରୁ ଅଧିକ<br/>ବିନ୍ଦୁ ଏକ ସରଳରେଖାରେ<br/>ଥାଇପାରନ୍ତି।\"]\nA --> I2[\"ଅବା ସେମାନେ ଏକ<br/>ସରଳରେଖାରେ ନ<br/>ଥାଇପାରନ୍ତି।\"]\nA --> I3[\"ଉଭୟ ସ୍ଥିତିର<br/>ଅଲଗା ନାମ<br/>ଅଛି।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସଂଜ୍ଞା\"]\nM --> M1[\"ତିନି ବା ଅଧିକ ବିନ୍ଦୁ ଏକ<br/>ସରଳରେଖାରେ ଅବସ୍ଥିତ ହେଲେ,<br/>ସେମାନଙ୍କୁ ଏକରେଖୀୟ ବିନ୍ଦୁ କୁହାଯାଏ।\"]\nM --> M2[\"ଯେଉଁ ବିନ୍ଦୁ ଏକ ସରଳରେଖାରେ<br/>ଅବସ୍ଥିତ ନୁହନ୍ତି, ସେମାନଙ୍କୁ<br/>ନୈକରେଖୀୟ ବିନ୍ଦୁ କୁହାଯାଏ।\"]\nM --> M3[\"ସ୍ୱୀକାର୍ଯ୍ୟ-2 ଅନୁଯାୟୀ ଦୁଇଟି<br/>ପୃଥକ୍ ବିନ୍ଦୁ ସର୍ବଦା<br/>ଏକରେଖୀୟ।\"]\nM --> M4[\"ତିନି ବା ଅଧିକ ବିନ୍ଦୁଙ୍କ<br/>କ୍ଷେତ୍ରରେ ଏକରେଖୀୟତା<br/>ସର୍ବଦା ସତ୍ୟ ନୁହେଁ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଏକରେଖୀୟ ବିନ୍ଦୁ - ଏକ<br/>ସରଳରେଖା ଉପରେ<br/>ଥିବା ବିନ୍ଦୁ।\"]\nC --> C2[\"ନୈକରେଖୀୟ ବିନ୍ଦୁ - ଏକ<br/>ସରଳରେଖାରେ ନଥିବା<br/>ବିନ୍ଦୁ।\"]\nC --> C3[\"ଦୁଇ ବିନ୍ଦୁ ସର୍ବଦା ଏକରେଖୀୟ,<br/>କିନ୍ତୁ ତିନି ବିନ୍ଦୁ<br/>ନ ହୋଇପାରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 9 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-6:<br/>ଦୁଇଟି ସେଟ୍ ର<br/>ଛେଦ (Intersection)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"A ଓ B ଦୁଇଟି ସେଟ୍<br/>ଥାଏ ବୋଲି<br/>ମନେକରାଯାଉ।\"]\nA --> I2[\"A ଓ B ର ଛେଦ A∩B<br/>ଚିହ୍ନରେ ପ୍ରକାଶ<br/>କରାଯାଏ।\"]\nA --> I3[\"A∩B ମାନେ A ଓ B ରେ ଥିବା<br/>ସାଧାରଣ ଉପାଦାନମାନଙ୍କର<br/>ସେଟ୍।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସମ୍ଭାବନା\"]\nM --> M1[\"A∩B = φ ହେଲେ, A ଓ B ର<br/>କୌଣସି ସାଧାରଣ<br/>ଉପାଦାନ ନାହିଁ।\"]\nM --> M2[\"A∩B ≠ φ ହେଲେ, A ଓ B ର<br/>ଏକ ବା ଏକାଧିକ ସାଧାରଣ<br/>ଉପାଦାନ ଅଛି।\"]\nM --> M3[\"ସେଟ୍ ଦୁଇଟି ପରସ୍ପର<br/>ବିଚ୍ଛିନ୍ନ ବା ମିଳିତ<br/>ହୋଇପାରନ୍ତି।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଛେଦ ମାନେ ଦୁଇ ସେଟ୍ ର<br/>ସାଧାରଣ<br/>ଉପାଦାନ।\"]\nC --> C2[\"φ ଚିହ୍ନ ଶୂନ୍ୟ<br/>ସେଟ୍<br/>ବୁଝାଏ।\"]\nC --> C3[\"ଏହି ଧାରଣା ରେଖାର ଛେଦ<br/>ବୁଝିବାରେ<br/>ସାହାଯ୍ୟ କରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-7:<br/>ଦୁଇଟି ସରଳରେଖାର<br/>ଛେଦ (Intersection of<br/>two lines)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"L1 ଓ L2 ଦୁଇଟି ପୃଥକ୍<br/>ସରଳରେଖା ଥାଏ ବୋଲି<br/>ମନେକରାଯାଉ।\"]\nA --> I2[\"ରେଖା ମାନେ ବିନ୍ଦୁର ସେଟ୍,<br/>ତେଣୁ ରେଖା ମଧ୍ୟ ସେଟ୍<br/>ପରି ଛେଦ ହୋଇପାରେ।\"]\nA --> I3[\"L1 ଓ L2 ର ଛେଦ<br/>L1∩L2 ଚିହ୍ନରେ<br/>ପ୍ରକାଶ କରାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସମ୍ଭାବନା\"]\nM --> M1[\"L1∩L2 = φ ହେଲେ, ରେଖା<br/>ଦ୍ୱୟର କୌଣସି ଛେଦବିନ୍ଦୁ<br/>ନାହିଁ।\"]\nM --> M2[\"ଏହିପରି ରେଖାଗୁଡ଼ିକୁ ଅଛେଦୀ<br/>ରେଖା (Non-intersecting<br/>lines) କୁହାଯାଏ।\"]\nM --> M3[\"L1∩L2 ≠ φ ହେଲେ, ରେଖା<br/>ଦ୍ୱୟର ଏକ ବା ଏକାଧିକ<br/>ଛେଦବିନ୍ଦୁ ଅଛି।\"]\nM --> M4[\"ଏହି ସ୍ଥିତିରେ ପ୍ରଶ୍ନ ଉଠେ -<br/>ଦୁଇଟି ରେଖା ଏକାଧିକ ବିନ୍ଦୁରେ<br/>ଛେଦ ହୋଇପାରନ୍ତି କି?\"]\nM --> M5[\"ଏହି ପ୍ରଶ୍ନର ଉତ୍ତର<br/>ଉପପାଦ୍ୟ ମାଧ୍ୟମରେ<br/>ପ୍ରମାଣ କରାଯିବ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଅଛେଦୀ ରେଖା - କୌଣସି<br/>ସାଧାରଣ ବିନ୍ଦୁ<br/>ନଥିବା ରେଖା।\"]\nC --> C2[\"ଛେଦୀ ରେଖା - ଅତି କମରେ<br/>ଗୋଟିଏ ସାଧାରଣ<br/>ବିନ୍ଦୁ ଥିବା ରେଖା।\"]\nC --> C3[\"ଦୁଇଟି ପୃଥକ୍ ରେଖା ଏକରୁ<br/>ଅଧିକ ବିନ୍ଦୁରେ ଛେଦ<br/>ହୋଇପାରନ୍ତି ନାହିଁ (ଉପପାଦ୍ୟ<br/>ଦ୍ୱାରା ପ୍ରମାଣିତ)।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
      
}  
]
};  
