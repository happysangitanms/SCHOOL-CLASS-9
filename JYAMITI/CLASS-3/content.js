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
            word: "RECAPITULATION",
            odia: "ପୁନରାବୃତ୍ତି",
            emoji: "🔁",
            odiaUse: "ପୁନରାବୃତ୍ତି ଅର୍ଥ ପୂର୍ବ ଶିଖିଥିବା ବିଷୟକୁ ପୁଣି ଥରେ ମନେ ପକାଇବା । ଏହି ଅଧ୍ୟାୟରେ ମୌଳିକ ଅବବୋଧର ପୁନରାବୃତ୍ତି କରାଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TERM",
            odia: "ପଦ",
            emoji: "🔤",
            odiaUse: "ପଦ ଅର୍ଥ କୌଣସି ବିଶେଷ ଅର୍ଥରେ ବ୍ୟବହୃତ ଶବ୍ଦ । ପ୍ରତ୍ୟେକ ପାଠରେ କେତେକ ବିଶେଷ ଶବ୍ଦକୁ ପଦ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNDEFINED TERM",
            odia: "ସଂଜ୍ଞାବିହୀନ ପଦ",
            emoji: "❓",
            odiaUse: "ସଂଜ୍ଞାବିହୀନ ପଦ ଅର୍ଥ ଯାହାର ସଂଜ୍ଞା ଦିଆଯାଇ ନଥାଏ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ହେଉଛି ସଂଜ୍ଞାବିହୀନ ପଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEFINED TERM",
            odia: "ସଂଜ୍ଞାକୃତ ପଦ",
            emoji: "📖",
            odiaUse: "ସଂଜ୍ଞାକୃତ ପଦ ଅର୍ଥ ଯାହାର ସଠିକ୍ ଅର୍ଥ ବିଚାର କରି ସଂଜ୍ଞା ଦିଆଯାଇଛି । ପଦସମୂହ ଦୁଇ ପ୍ରକାର - ସଂଜ୍ଞାବିହୀନ ପଦ ଓ ସଂଜ୍ଞାକୃତ ପଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEFINITION",
            odia: "ସଂଜ୍ଞା",
            emoji: "📝",
            odiaUse: "ସଂଜ୍ଞା ଅର୍ଥ କୌଣସି ପଦର ଅର୍ଥ ନିରୂପଣ କରି ଦିଆଯାଇଥିବା ବାକ୍ୟ । ଅର୍ଥନିରୂପକ ବାକ୍ୟକୁ ସଂଜ୍ଞା କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FUNDAMENTAL TERM",
            odia: "ମୌଳିକ ପଦ",
            emoji: "🧱",
            odiaUse: "ମୌଳିକ ପଦ ଅର୍ଥ ଅନ୍ୟ ପଦମାନଙ୍କର ମୂଳଭିତ୍ତି । ସଂଜ୍ଞା ନିରୂପଣ ପାଇଁ ଆଣ ପାଖରେ ପର୍ଯ୍ୟାପ୍ତ ସଂଖ୍ୟକ ମୌଳିକ ପଦ ଥାଇବା ଆବଶ୍ୟକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POINT",
            odia: "ବିନ୍ଦୁ",
            emoji: "•",
            odiaUse: "ବିନ୍ଦୁ ଅର୍ଥ ଏକ ସ୍ଥାନ ଯାହାର କୌଣସି ଆକାର ନାହିଁ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ହେଉଛି ତିନୋଟି ମୌଳିକ ପଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LINE",
            odia: "ରେଖା",
            emoji: "➖",
            odiaUse: "ରେଖା ଅର୍ଥ ଅସଂଖ୍ୟ ବିନ୍ଦୁର ସମାହାର ଯାହା ସିଧା ବା ବକ୍ର ହୋଇପାରେ । ଦୁଇଟି ବିନ୍ଦୁ ମଧ୍ୟ ଦେଇ ଏକ ରେଖା ଯାଇପାରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STRAIGHT LINE",
            odia: "ସରଳରେଖା",
            emoji: "📏",
            odiaUse: "ସରଳରେଖା ଅର୍ଥ ଏକ ସିଧା ରେଖା ଯାହା ବଙ୍କା ହୋଇନଥାଏ । ଦୁଇଟି ପୃଥକ୍ ବିନ୍ଦୁ ଦେଇ ଗୋଟିଏ ମାତ୍ର ସରଳରେଖା ଯାଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PLANE",
            odia: "ସମତଳ",
            emoji: "▭",
            odiaUse: "ସମତଳ ଅର୍ଥ ଚାରିଆଡେ ଅସୀମ ଭାବେ ବିସ୍ତୃତ ଏକ ସମାନ ପୃଷ୍ଠ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ତିନୋଟି ମୌଳିକ ପଦ ଅଟନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AXIOM",
            odia: "ସ୍ୱୀକାର୍ଯ୍ୟ",
            emoji: "✅",
            odiaUse: "ସ୍ୱୀକାର୍ଯ୍ୟ ଅର୍ଥ ଏକ ସତ୍ୟ ଯାହାକୁ ପ୍ରମାଣ ବିନା ସିଧାସଳଖ ଗ୍ରହଣ କରାଯାଏ । ସୋମାନଙ୍କର କେତେକ ଧର୍ମକୁ ସ୍ୱୀକାର୍ଯ୍ୟ ଆଖ୍ୟା ଦେଇ ମାନି ନିଆଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SET",
            odia: "ସେଟ୍",
            emoji: "🗃️",
            odiaUse: "ସେଟ୍ ଅର୍ଥ କେତେକ ବସ୍ତୁର ସମାହାର ବା ସଂଗ୍ରହ । ରେଖା ବିନ୍ଦୁମାନଙ୍କର ଏକ ସେଟ୍ ବା ସମାହାର ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLLINEAR POINTS",
            odia: "ଏକରେଖୀ ବିନ୍ଦୁ",
            emoji: "📍",
            odiaUse: "ଏକରେଖୀ ବିନ୍ଦୁ ଅର୍ଥ ତିନି ବା ତାହାଠାରୁ ଅଧିକ ବିନ୍ଦୁ ଯାହା ଏକ ସରଳରେଖାରେ ଅବସ୍ଥିତ ହୁଅନ୍ତି । ସେମାନଙ୍କୁ ଏକରେଖୀ ବିନ୍ଦୁ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NON-COLLINEAR POINTS",
            odia: "ନୈକରେଖୀ ବିନ୍ଦୁ",
            emoji: "🔀",
            odiaUse: "ନୈକରେଖୀ ବିନ୍ଦୁ ଅର୍ଥ ଯେଉଁ ବିନ୍ଦୁମାନେ ଏକ ସରଳରେଖାରେ ଅବସ୍ଥିତ ହୁଅନ୍ତି ନାହିଁ । ସେମାନଙ୍କୁ ନୈକରେଖୀ ବା ଅଣସରଳରେଖୀ ବିନ୍ଦୁ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTERSECTION",
            odia: "ଛେଦ",
            emoji: "✂️",
            odiaUse: "ଛେଦ ଅର୍ଥ ଦୁଇଟି ସେଟ୍ ର ସାଧାରଣ ଉପାଦାନମାନଙ୍କର ସେଟ୍ । ଦୁଇଟି ସରଳରେଖାର ଛେଦ ବିଷୟ ବିଚାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POINT OF INTERSECTION",
            odia: "ଛେଦବିନ୍ଦୁ",
            emoji: "❌",
            odiaUse: "ଛେଦବିନ୍ଦୁ ଅର୍ଥ ଦୁଇଟି ରେଖା ମିଳିତ ହେଉଥିବା ସାଧାରଣ ବିନ୍ଦୁ । ଯେଉଁଠାରେ ଦୁଇଟି ରେଖା ମିଶନ୍ତି, ତାହାକୁ ଛେଦବିନ୍ଦୁ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NON-INTERSECTING LINES",
            odia: "ଅଣଛେଦୀ ରେଖା",
            emoji: "∥",
            odiaUse: "ଅଣଛେଦୀ ରେଖା ଅର୍ଥ ଯେଉଁ ଦୁଇଟି ରେଖାର କୌଣସି ସାଧାରଣ ବିନ୍ଦୁ ବା ଛେଦବିନ୍ଦୁ ନଥାଏ । ସେମାନଙ୍କୁ ଅଣଛେଦୀ ରେଖା କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "THEOREM",
            odia: "ଉପପାଦ୍ୟ",
            emoji: "📐",
            odiaUse: "ଉପପାଦ୍ୟ ଅର୍ଥ ଏକ ଗାଣିତିକ ପ୍ରସ୍ତାବ ଯାହାକୁ ପ୍ରମାଣ କରାଯାଏ । ସ୍ୱୀକାର୍ଯ୍ୟଙ୍କୁ ସାହାଯ୍ୟରେ ଉପପାଦ୍ୟ ପ୍ରମାଣ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PROOF",
            odia: "ପ୍ରମାଣ",
            emoji: "🔍",
            odiaUse: "ପ୍ରମାଣ ଅର୍ଥ ତର୍କ ଓ ଯୁକ୍ତି ମାଧ୍ୟମରେ କୌଣସି କଥାର ସତ୍ୟତା ପ୍ରତିପାଦନ କରିବା । ଉପପାଦ୍ୟର ପ୍ରମାଣ ଆବଶ୍ୟକ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POSTULATE",
            odia: "ସ୍ୱୀକାର୍ଯ୍ୟମାନ",
            emoji: "📃",
            odiaUse: "ସ୍ୱୀକାର୍ଯ୍ୟମାନ ଅର୍ଥ ମୌଳିକ ପଦମାନଙ୍କର ପାରସ୍ପରିକ ସମ୍ପର୍କକୁ ପ୍ରକାଶ କରୁଥିବା ମାନ୍ୟ ସତ୍ୟ । ଆଗକୁ ଏହି ପର୍ଯ୍ୟନ୍ତ ଜାଣିଥିବା ସ୍ୱୀକାର୍ଯ୍ୟମାନଙ୍କର ସଂକ୍ଷିପ୍ତ ପୁନରାଲୋଚନା କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};

const topicsData = [

{
heading: "NOTE-1: ପଦ (Term) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରତ୍ୟେକ ପାଠରେ କିଛି ନିର୍ଦ୍ଦିଷ୍ଟ ଶବ୍ଦ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥରେ ବ୍ୟବହାର ହୁଏ । ଏହି ପ୍ରକାର ଶବ୍ଦକୁ 'ପଦ' (Term) କୁହାଯାଏ । ପାଠ ପଢ଼ିବା ପୂର୍ବରୁ ଏହି ପଦଗୁଡ଼ିକର ଠିକ ଅର୍ଥ ଜାଣିବା ଜରୁରୀ, ନହେଲେ ପାଠ ବୁଝିବାରେ ଅସୁବିଧା ହେବ ।<br><br>👉 ଉଦାହରଣ: ଗଣିତ ପାଠରେ 'ବିନ୍ଦୁ', 'ରେଖା' ଭଳି ଶବ୍ଦଗୁଡ଼ିକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥରେ ବ୍ୟବହାର ହୁଏ, ସାଧାରଣ କଥାବାର୍ତ୍ତାରେ ଏହି ଶବ୍ଦଗୁଡ଼ିକର ଅର୍ଥ ଭିନ୍ନ ହୋଇପାରେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଦ (Term) କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପାଠରେ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥରେ ବ୍ୟବହାର ହେଉଥିବା ଶବ୍ଦକୁ ପଦ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ପାଠ ପଢ଼ିବା ପୂର୍ବରୁ କ'ଣ ଜାଣିବା ଜରୁରୀ ?<br><br><span style='color:green;'>Answer:</span> ପାଠରେ ବ୍ୟବହୃତ ପଦଗୁଡ଼ିକର ଠିକ ଅର୍ଥ ଜାଣିବା ଜରୁରୀ ।",

"<span style='color:red;'>Q-3:</span> ଗଣିତରେ ପଦର ଉଦାହରଣ ଦିଅ ।<br><br><span style='color:green;'>Answer:</span> ବିନ୍ଦୁ ଓ ରେଖା ଗଣିତର ଦୁଇଟି ପଦ ଅଟନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ପଦର ଅର୍ଥ କାହିଁକି ଠିକ ଭାବରେ ଜାଣିବା ଦରକାର ?<br><br><span style='color:green;'>Answer:</span> ଠିକ ଅର୍ଥ ନଜାଣିଲେ ପାଠ ବୁଝିବାରେ ଗଣ୍ଡଗୋଳ ହେବ, ତେଣୁ ଠିକ ଅର୍ଥ ଜାଣିବା ଦରକାର ।"

]
},

{
heading: "NOTE-2: ମୌଳିକ ପଦ ବା ଜ୍ଞାପିତ ପଦ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: କୌଣସି ଶବ୍ଦର ଅର୍ଥ ବୁଝାଇବାକୁ ଗଲେ ଅନ୍ୟ ଶବ୍ଦମାନଙ୍କ ସାହାଯ୍ୟ ନେବାକୁ ପଡ଼େ । ଏହିପରି ଚାଲିଥିଲେ ଏହା କେବେ ଶେଷ ହେବ ନାହିଁ । ତେଣୁ ଗଣିତରେ କିଛି ପଦକୁ ବିନା ସଂଜ୍ଞାରେ ରଖାଯାଏ, ଏହାକୁ ମୌଳିକ ପଦ ବା ଜ୍ଞାପିତ ପଦ କୁହାଯାଏ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ଏହିପରି ତିନୋଟି ମୌଳିକ ପଦ ।<br><br>👉 ଉଦାହରଣ: ଆମେ ବିନ୍ଦୁ କ'ଣ ତାହା ଚିତ୍ର ଦେଖାଇ ବୁଝାଇ ପାରିବା, କିନ୍ତୁ ଏହାର ଠିକ ସଂଜ୍ଞା ଦେଇ ପାରିବା ନାହିଁ । ସେହିପରି ରେଖା ଓ ସମତଳ ମଧ୍ୟ ଚିତ୍ର ମାଧ୍ୟମରେ ବୁଝାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ମୌଳିକ ପଦ କାହିଁକି ସଂଜ୍ଞାହୀନ ରଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ସଂଜ୍ଞା ଦେବାର ପ୍ରକ୍ରିୟାର କେବେ ଶେଷ ନହେବା ଏଡ଼ାଇବା ପାଇଁ କିଛି ପଦକୁ ସଂଜ୍ଞାହୀନ ରଖାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଗଣିତର ତିନୋଟି ମୌଳିକ ପଦର ନାମ ଲେଖ ।<br><br><span style='color:green;'>Answer:</span> ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ଗଣିତର ତିନୋଟି ମୌଳିକ ପଦ ।",

"<span style='color:red;'>Q-3:</span> ମୌଳିକ ପଦକୁ ଆଉ କେଉଁ ନାମରେ ଡକାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ମୌଳିକ ପଦକୁ ଜ୍ଞାପିତ ପଦ ମଧ୍ୟ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ବିନ୍ଦୁ କ'ଣ ତାହା କିପରି ବୁଝାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବିନ୍ଦୁକୁ ଚିତ୍ର ମାଧ୍ୟମରେ ଉଦାହରଣ ଦେଇ ବୁଝାଯାଏ, ସଂଜ୍ଞା ଦେଇ ନୁହେଁ ।"

]
},

{
heading: "NOTE-3: ସଂଜ୍ଞା (Definition) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: କୌଣସି ଶବ୍ଦର ଅର୍ଥକୁ ଅନ୍ୟ ପରିଚିତ ଶବ୍ଦମାନଙ୍କ ସାହାଯ୍ୟରେ ସ୍ପଷ୍ଟ ଭାବରେ ବୁଝାଇବାକୁ ସଂଜ୍ଞା କୁହାଯାଏ । ମୌଳିକ ପଦ ଛଡ଼ା ଗଣିତର ଅନ୍ୟ ସମସ୍ତ ପଦର ସଂଜ୍ଞା ଦିଆଯାଇଥାଏ ।<br><br>👉 ଉଦାହରଣ: ଯଦି ଆମେ କହୁ 'ତ୍ରିଭୁଜ ହେଉଛି ତିନୋଟି ରେଖାଖଣ୍ଡରେ ଘେରି ହୋଇଥିବା ଚିତ୍ର', ଏହା ତ୍ରିଭୁଜର ସଂଜ୍ଞା ଅଟେ, କାରଣ ଏହା ଆଗରୁ ଜଣା ଥିବା ପଦ (ରେଖାଖଣ୍ଡ) ର ସାହାଯ୍ୟ ନେଇଛି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସଂଜ୍ଞା କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> କୌଣସି ଶବ୍ଦର ଅର୍ଥକୁ ପରିଚିତ ଶବ୍ଦ ସାହାଯ୍ୟରେ ବୁଝାଇବାକୁ ସଂଜ୍ଞା କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ମୌଳିକ ପଦ ଛଡ଼ା ଅନ୍ୟ ପଦମାନଙ୍କ କ'ଣ ଦିଆଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ମୌଳିକ ପଦ ଛଡ଼ା ଅନ୍ୟ ସମସ୍ତ ପଦର ସଂଜ୍ଞା ଦିଆଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ସଂଜ୍ଞା ଦେବା ପାଇଁ କ'ଣ ଆବଶ୍ୟକ ?<br><br><span style='color:green;'>Answer:</span> ସଂଜ୍ଞା ଦେବା ପାଇଁ ଆଗରୁ ଜଣା ଥିବା ପଦର ସାହାଯ୍ୟ ଆବଶ୍ୟକ ।",

"<span style='color:red;'>Q-4:</span> ତ୍ରିଭୁଜର ସଂଜ୍ଞା କେଉଁ ପଦ ସାହାଯ୍ୟରେ ଦିଆଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ତ୍ରିଭୁଜର ସଂଜ୍ଞା ରେଖାଖଣ୍ଡ ପଦ ସାହାଯ୍ୟରେ ଦିଆଯାଏ ।"

]
},

{
heading: "NOTE-4: ସ୍ୱୀକାର୍ଯ୍ୟ (Axiom) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯେଉଁ ବକ୍ତବ୍ୟକୁ ପ୍ରମାଣ ନକରି ସତ୍ୟ ବୋଲି ମାନି ନିଆଯାଏ, ତାହାକୁ ସ୍ୱୀକାର୍ଯ୍ୟ କୁହାଯାଏ । ଗଣିତ ଆଗକୁ ବଢ଼ାଇବା ପାଇଁ କିଛି ମୌଳିକ ଗୁଣକୁ ପ୍ରମାଣ ବିନା ଗ୍ରହଣ କରାଯାଏ ।<br><br>👉 ଉଦାହରଣ: 'ଦୁଇଟି ଭିନ୍ନ ବିନ୍ଦୁ ଦେଇ ଏକମାତ୍ର ସରଳରେଖା ଯାଏ' - ଏହା ଏକ ସ୍ୱୀକାର୍ଯ୍ୟ, ଆମେ ଏହାକୁ ପ୍ରମାଣ ନକରି ସତ୍ୟ ମାନି ନେଉ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସ୍ୱୀକାର୍ଯ୍ୟ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରମାଣ ବିନା ସତ୍ୟ ବୋଲି ମାନି ନିଆଯାଇଥିବା ବକ୍ତବ୍ୟକୁ ସ୍ୱୀକାର୍ଯ୍ୟ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ସ୍ୱୀକାର୍ଯ୍ୟ ଗ୍ରହଣ କରିବାର କାରଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଗଣିତକୁ ଆଗକୁ ବଢ଼ାଇବା ପାଇଁ କିଛି ମୌଳିକ ଗୁଣକୁ ପ୍ରମାଣ ବିନା ଗ୍ରହଣ କରାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ସ୍ୱୀକାର୍ଯ୍ୟର ଏକ ଉଦାହରଣ ଦିଅ ।<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ଭିନ୍ନ ବିନ୍ଦୁ ଦେଇ ଏକମାତ୍ର ସରଳରେଖା ଯାଏ, ଏହା ଏକ ସ୍ୱୀକାର୍ଯ୍ୟର ଉଦାହରଣ ।",

"<span style='color:red;'>Q-4:</span> ସ୍ୱୀକାର୍ଯ୍ୟ ଓ ସଂଜ୍ଞା ମଧ୍ୟରେ କ'ଣ ପାର୍ଥକ୍ୟ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ସଂଜ୍ଞା ଶବ୍ଦର ଅର୍ଥ ବୁଝାଏ, କିନ୍ତୁ ସ୍ୱୀକାର୍ଯ୍ୟ ପ୍ରମାଣ ବିନା ମାନି ନିଆଯାଇଥିବା ସତ୍ୟ ବକ୍ତବ୍ୟ ।"

]
},

{
heading: "NOTE-5: ସ୍ୱୀକାର୍ଯ୍ୟ-1 : ରେଖା ଉପରେ ଥିବା ବିନ୍ଦୁ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରଥମ ସ୍ୱୀକାର୍ଯ୍ୟ ଅନୁସାରେ, ଏକ ରେଖା ଉପରେ ଅସଂଖ୍ୟ ବିନ୍ଦୁ ଥାଏ । ଯଦି P ବିନ୍ଦୁ L ରେଖା ଉପରେ ଥାଏ, ତାହାହେଲେ ଆମେ ଏହାକୁ P∈L ଲେଖି ପାରିବା । ଏହାର ଅର୍ଥ 'L ରେଖା P ବିନ୍ଦୁ ଦେଇ ଯାଏ' କିମ୍ବା 'L ରେଖା P ବିନ୍ଦୁକୁ ଧାରଣ କରେ' ।<br><br>👉 ଉଦାହରଣ: ଯଦି କୌଣସି ରେଖା L ଉପରେ ଏକ ବିନ୍ଦୁ P ଅଛି, ତାହାହେଲେ ଆମେ କହିପାରିବା ଯେ 'L ରେଖା P ବିନ୍ଦୁ ଦେଇ ଯାଉଛି' । ଏହାର ଅର୍ଥ ଆଉ କିଛି ଅଧିକ ଗଭୀର ଭାବରେ ବିଚାର କରାଯାଏ ନାହିଁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> P∈L ଲେଖିଲେ କ'ଣ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ବୁଝାଏ ଯେ P ବିନ୍ଦୁ L ରେଖା ଉପରେ ଅଛି ।",

"<span style='color:red;'>Q-2:</span> 'ରେଖା ବିନ୍ଦୁ ଦେଇ ଯାଏ' ବୋଲି କେବେ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେତେବେଳେ ସେହି ବିନ୍ଦୁ ସେହି ରେଖା ଉପରେ ଅବସ୍ଥିତ ଥାଏ, ସେତେବେଳେ ଏହା କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଏକ ରେଖା ଉପରେ କେତେ ବିନ୍ଦୁ ରହିପାରେ ?<br><br><span style='color:green;'>Answer:</span> ଏକ ରେଖା ଉପରେ ଅସଂଖ୍ୟ ବିନ୍ଦୁ ରହିପାରେ ।",

"<span style='color:red;'>Q-4:</span> P,L ର ସମ୍ପର୍କକୁ କ'ଣ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହାକୁ ରେଖା ଓ ବିନ୍ଦୁର ଉପଯୋଗ ସମ୍ପର୍କ (incidence relation) କୁହାଯାଏ ।"

]
},

{
heading: "NOTE-6: ସ୍ୱୀକାର୍ଯ୍ୟ-2 : ଦୁଇ ବିନ୍ଦୁ ଦେଇ ଏକମାତ୍ର ରେଖା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦ୍ୱିତୀୟ ସ୍ୱୀକାର୍ଯ୍ୟ ଅନୁସାରେ, ଦୁଇଟି ଭିନ୍ନ ବିନ୍ଦୁ ମଧ୍ୟଦେଇ ସର୍ବଦା ଗୋଟିଏ ଓ କେବଳ ଗୋଟିଏ ସରଳରେଖା ଯାଏ । ଯଦି P ଓ Q ଦୁଇଟି ଭିନ୍ନ ବିନ୍ଦୁ L ରେଖା ଉପରେ ଅଛନ୍ତି, ତାହାହେଲେ ସେହି ରେଖାକୁ ରେଖା PQ କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଯଦି PQ ରେଖା ଉପରେ R ନାମକ ଆଉ ଏକ ବିନ୍ଦୁ ଥାଏ, ତାହାହେଲେ PR, RP, RQ, QR, PQ ଓ QP - ଏହି ସବୁ ନାମ ଏକା ରେଖାକୁ ହିଁ ବୁଝାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଦ୍ୱିତୀୟ ସ୍ୱୀକାର୍ଯ୍ୟ କ'ଣ କୁହେ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ଭିନ୍ନ ବିନ୍ଦୁ ଦେଇ ସର୍ବଦା ଗୋଟିଏ ଓ କେବଳ ଗୋଟିଏ ସରଳରେଖା ଯାଏ ବୋଲି କୁହେ ।",

"<span style='color:red;'>Q-2:</span> ଦୁଇଟି ବିନ୍ଦୁ P ଓ Q ଦେଇ ଯାଉଥିବା ରେଖାକୁ କ'ଣ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହାକୁ ରେଖା PQ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଯଦି PQ ରେଖା ଉପରେ R ବିନ୍ଦୁ ଥାଏ, ତାହାହେଲେ ସେହି ରେଖାର ଅନ୍ୟ ନାମଗୁଡ଼ିକ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> PR, RP, RQ, QR, PQ ଓ QP ଏହି ସବୁ ସେହି ରେଖାର ଅନ୍ୟ ନାମ ।",

"<span style='color:red;'>Q-4:</span> ଏକ ରେଖାର ନାମ କେତେ ପ୍ରକାରେ ଲେଖାଯାଇପାରେ ?<br><br><span style='color:green;'>Answer:</span> ରେଖା ଉପରେ ଥିବା ଯେକୌଣସି ଦୁଇ ବିନ୍ଦୁର କ୍ରମ ଅନୁସାରେ ରେଖାର ନାମ ଲେଖାଯାଇପାରେ ।"

]
},

{
heading: "NOTE-7: ଏକରେଖୀୟ ଓ ନୈକରେଖୀୟ ବିନ୍ଦୁ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯଦି ତିନି ବା ତିନିରୁ ଅଧିକ ବିନ୍ଦୁ ଏକ ରେଖା ଉପରେ ଅବସ୍ଥିତ ଥାନ୍ତି, ତାହାହେଲେ ସେମାନଙ୍କୁ ଏକରେଖୀୟ ବିନ୍ଦୁ କୁହାଯାଏ । ଆଉ ଯଦି ବିନ୍ଦୁଗୁଡ଼ିକ ଏକ ରେଖା ଉପରେ ନ ଥାନ୍ତି, ତାହାହେଲେ ସେମାନଙ୍କୁ ନୈକରେଖୀୟ ବିନ୍ଦୁ କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଯଦି A, B, C ତିନୋଟି ବିନ୍ଦୁ ଗୋଟିଏ ସିଧା ରେଖା ଉପରେ ଅଛନ୍ତି, ତାହାହେଲେ ଏମାନେ ଏକରେଖୀୟ ବିନ୍ଦୁ । ମାତ୍ର ଯଦି ତିନୋଟି ବିନ୍ଦୁ ମିଶି ଏକ ତ୍ରିଭୁଜ ତିଆରି କରନ୍ତି, ତାହାହେଲେ ସେମାନେ ନୈକରେଖୀୟ ବିନ୍ଦୁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଏକରେଖୀୟ ବିନ୍ଦୁ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏକ ରେଖା ଉପରେ ଥିବା ତିନି ବା ଅଧିକ ବିନ୍ଦୁକୁ ଏକରେଖୀୟ ବିନ୍ଦୁ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ନୈକରେଖୀୟ ବିନ୍ଦୁ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏକ ରେଖା ଉପରେ ନ ଥିବା ବିନ୍ଦୁଗୁଡ଼ିକୁ ନୈକରେଖୀୟ ବିନ୍ଦୁ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ତିନୋଟି ବିନ୍ଦୁ ମିଶି ତ୍ରିଭୁଜ ତିଆରି କଲେ ସେମାନେ କେଉଁ ପ୍ରକାର ବିନ୍ଦୁ ହୁଅନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ସେମାନେ ନୈକରେଖୀୟ ବିନ୍ଦୁ ହୁଅନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ଦ୍ୱିତୀୟ ସ୍ୱୀକାର୍ଯ୍ୟ ସହିତ ଏକରେଖୀୟ ବିନ୍ଦୁର କ'ଣ ସମ୍ପର୍କ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ଦ୍ୱିତୀୟ ସ୍ୱୀକାର୍ଯ୍ୟ ଅନୁସାରେ ଏକ ବିନ୍ଦୁ ଅନେକ ରେଖା ଉପରେ ରହିପାରେ, ଯାହା ଏକରେଖୀୟତା ବୁଝିବାରେ ସାହାଯ୍ୟ କରେ ।"

]
},

{
heading: "NOTE-8: ଦୁଇଟି ସେଟ୍‌ର ଛେଦ (Intersection) :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇଟି ସେଟ୍ A ଓ B ର ଛେଦ (A∩B) ହେଉଛି ସେହି ସେଟ୍ ଯେଉଁଥିରେ A ଓ B ଉଭୟଙ୍କରେ ଥିବା ସାଧାରଣ ଉପାଦାନ ରହିଥାଏ । ଏଥିରେ ଦୁଇଟି ସମ୍ଭାବନା ଥାଏ - ସେମାନଙ୍କର କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଇପାରେ, କିମ୍ବା ଗୋଟିଏ ବା ଅନେକ ସାଧାରଣ ଉପାଦାନ ଥାଇପାରେ ।<br><br>👉 ଉଦାହରଣ: ଯଦି A = {1,2,3} ଏବଂ B = {3,4,5}, ତାହାହେଲେ A∩B = {3}, କାରଣ 3 ଉଭୟ ସେଟ୍‌ରେ ଅଛି । ଯଦି A ଓ B ର କୌଣସି ଉପାଦାନ ସମାନ ନ ଥାଏ, ତାହାହେଲେ A∩B = φ (ଖାଲି ସେଟ୍) ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଦୁଇଟି ସେଟ୍‌ର ଛେଦ କ'ଣ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ସେଟ୍‌ରେ ଥିବା ସାଧାରଣ ଉପାଦାନଗୁଡ଼ିକର ସେଟ୍‌କୁ ଛେଦ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> A∩B = φ ହେଲେ କ'ଣ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ବୁଝାଏ ଯେ A ଓ B ର କୌଣସି ସାଧାରଣ ଉପାଦାନ ନାହିଁ ।",

"<span style='color:red;'>Q-3:</span> A∩B ≠ φ ହେଲେ କ'ଣ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ବୁଝାଏ ଯେ A ଓ B ର ଗୋଟିଏ ବା ଅଧିକ ସାଧାରଣ ଉପାଦାନ ଅଛି ।",

"<span style='color:red;'>Q-4:</span> A = {1,2,3} ଏବଂ B = {3,4,5} ହେଲେ A∩B କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A∩B = {3} ହେବ ।"

]
},

{
heading: "NOTE-9: ଦୁଇଟି ସରଳରେଖାର ଛେଦ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇଟି ଭିନ୍ନ ରେଖା L1 ଓ L2 ଙ୍କ କ୍ଷେତ୍ରରେ ଦୁଇଟି ସମ୍ଭାବନା ଥାଏ । ଯଦି L1∩L2 = φ, ତାହାହେଲେ ଏହି ଦୁଇ ରେଖାର କୌଣସି ସାଧାରଣ ବିନ୍ଦୁ ନାହିଁ, ଏମାନଙ୍କୁ ଅଛେଦୀ ରେଖା କୁହାଯାଏ । ଆଉ ଯଦି L1∩L2 ≠ φ, ତାହାହେଲେ ରେଖା ଦୁଇଟିର ସାଧାରଣ ବିନ୍ଦୁ ଅଛି ।<br><br>👉 ଉଦାହରଣ: ଦୁଇଟି ସମାନ୍ତରାଳ ରେଖା କେବେ ମିଳନ୍ତି ନାହିଁ, ତେଣୁ ସେମାନେ ଅଛେଦୀ ରେଖା । କିନ୍ତୁ ଦୁଇଟି ରେଖା ଯଦି ଗୋଟିଏ ସ୍ଥାନରେ ମିଶନ୍ତି, ତାହାହେଲେ ସେମାନଙ୍କର ଏକ ସାଧାରଣ ବିନ୍ଦୁ ଥାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅଛେଦୀ ରେଖା କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ଦୁଇଟି ରେଖାର କୌଣସି ସାଧାରଣ ବିନ୍ଦୁ ନାହିଁ, ସେମାନଙ୍କୁ ଅଛେଦୀ ରେଖା କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> L1∩L2 ≠ φ ହେଲେ ରେଖା ଦୁଇଟି ମଧ୍ୟରେ କ'ଣ ଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ରେଖା ଦୁଇଟିର ଗୋଟିଏ ସାଧାରଣ ବିନ୍ଦୁ ବା ଛେଦବିନ୍ଦୁ ଥାଏ ।",

"<span style='color:red;'>Q-3:</span> ଦୁଇଟି ସମାନ୍ତରାଳ ରେଖା କେଉଁ ପ୍ରକାର ରେଖା ଅଟନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ସମାନ୍ତରାଳ ରେଖା ଅଛେଦୀ ରେଖା ଅଟନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ଦୁଇଟି ରେଖା ମିଶିଲେ ସେମାନଙ୍କର କେତେ ସାଧାରଣ ବିନ୍ଦୁ ରହିପାରେ ବୋଲି କ'ଣ ପ୍ରଶ୍ନ ଉଠେ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ରେଖା ମିଶିଲେ ସେମାନଙ୍କର ଗୋଟିଏରୁ ଅଧିକ ସାଧାରଣ ବିନ୍ଦୁ ରହିପାରେ କି ନାହିଁ, ସେ ପ୍ରଶ୍ନ ଉଠେ ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ପଦ, ସଂଜ୍ଞା<br/>ଓ ମୌଳିକ ପଦ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପଠନ\"]\nA --> I1[\"ପ୍ରତ୍ୟେକ ପାଠରେ କେତେକ ବିଶେଷ<br/>ଶବ୍ଦ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥରେ ବ୍ୟବହୃତ ହୁଏ।\"]\nA --> I2[\"ଏହି ଶବ୍ଦଗୁଡ଼ିକୁ<br/>'ପଦ' (term) କୁହାଯାଏ।\"]\nA --> I3[\"ପାଠ୍ୟପୁସ୍ତକରେ ପଦର ଅର୍ଥ ପୂର୍ବରୁ<br/>ନିର୍ଦ୍ଧାରିତ ଅର୍ଥ ଦ୍ୱାରା ବୁଝାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପଦର ପ୍ରକାର\"]\nM --> M1[\"ପଦ ଦୁଇ ପ୍ରକାର - ସଂଜ୍ଞାବିହୀନ<br/>ପଦ ଓ ସଂଜ୍ଞାକୃତ ପଦ।\"]\nM --> M2[\"ସଂଜ୍ଞାକୃତ ପଦର ଅର୍ଥ<br/>'ସଂଜ୍ଞା' ଦ୍ୱାରା ନିରୂପିତ ହୁଏ।\"]\nM --> M3[\"ପ୍ରତ୍ୟେକ ସଂଜ୍ଞା ପାଇଁ ପୂର୍ବ<br/>ନିରୂପିତ ପଦ ଆବଶ୍ୟକ।\"]\nM --> M4[\"ଅସୀମିତ ପଛୁଆ ଯାତ୍ରା ରୋକିବାକୁ<br/>କିଛି ପଦ ସଂଜ୍ଞା ବିନା ଗ୍ରହଣ କରାଯାଏ।\"]\nM --> M5[\"ଏହାକୁ 'ଅନାପରିଭାଷିତ ପଦ' କିମ୍ବା<br/>'ମୌଳିକ ପଦ' କୁହାଯାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମୌଳିକ ପଦର ଉଦାହରଣ\"]\nC --> C1[\"ଜ୍ୟାମିତିରେ ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ<br/>- ଏହି ତିନୋଟି ମୌଳିକ ପଦ।\"]\nC --> C2[\"ପୂର୍ବ ଶ୍ରେଣୀରେ ଏମାନଙ୍କ ପରିଚୟ<br/>ଉଦାହରଣ ମାଧ୍ୟମରେ ଦିଆଯାଇଥିଲା।\"]\nC --> C3[\"ଏମାନଙ୍କ ସହ ଜଡ଼ିତ ସ୍ୱୀକାର୍ଯ୍ୟ<br/>(Axiom) ପୁନରାଲୋଚନା କରାଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ସ୍ୱୀକାର୍ଯ୍ୟ ଓ ସ୍ୱୀକାର୍ଯ୍ୟ-୧:<br/>ରେଖା ଉପରେ ବିନ୍ଦୁ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପ୍ରସ୍ତାବନା\"]\nA --> I1[\"ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ<br/>ସଂଜ୍ଞାବିହୀନ ମୌଳିକ ପଦ।\"]\nA --> I2[\"ଏମାନଙ୍କ ଗୁଣ ବର୍ଣ୍ଣନା ପାଇଁ<br/>ପ୍ରାରମ୍ଭିକ ବାକ୍ୟ ଆବଶ୍ୟକ ହୁଏ।\"]\nA --> I3[\"ଏହି ବାକ୍ୟଗୁଡ଼ିକୁ ପ୍ରମାଣ ବିନା<br/>ସତ୍ୟ ବୋଲି ମାନି ନିଆଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସ୍ୱୀକାର୍ଯ୍ୟ (Axiom)\"]\nM --> M1[\"ପ୍ରମାଣ ଆବଶ୍ୟକ ନଥିବା ଏହି ମୂଳଭିତ୍ତି<br/>ବାକ୍ୟକୁ ସ୍ୱୀକାର୍ଯ୍ୟ କୁହାଯାଏ।\"]\nM --> M2[\"ସ୍ୱୀକାର୍ଯ୍ୟ-୧: ରେଖା ବିନ୍ଦୁମାନଙ୍କର<br/>ସମାହାର ବା ସେଟ୍।\"]\nM --> M3[\"L ରେଖା P ବିନ୍ଦୁ ଦେଇ ଗଲେ,<br/>P∈L ଲେଖାଯାଏ।\"]\nM --> M4[\"'L ସବୁ P ମଧ୍ୟ ଦେଇ ଅତିକ୍ରମ କରେ'<br/>ଓ 'L, P ବିନ୍ଦୁଗାମୀ' - ଏକାର୍ଥକ।\"]\nM --> M5[\"'P, L ଉପରିସ୍ଥ ଏକ ବିନ୍ଦୁ' ମଧ୍ୟ<br/>P∈L ର ସମାର୍ଥକ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଏକ ମାତ୍ର ଅର୍ଥ ପ୍ରକାଶ କରୁଥିବା<br/>ବାକ୍ୟ ନୂଆ ଅର୍ଥ ସୃଷ୍ଟି କରନ୍ତି ନାହିଁ।\"]\nC --> C2[\"ରେଖା ମଧ୍ୟରେ ଅସଂଖ୍ୟ<br/>ବିନ୍ଦୁ ରହିପାରେ।\"]\nC --> C3[\"ପରବର୍ତ୍ତୀ ସ୍ୱୀକାର୍ଯ୍ୟଗୁଡ଼ିକ ମଧ୍ୟ<br/>ଏହି ପଦ୍ଧତିରେ ପୁନରାଲୋଚନା କରାଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ସ୍ୱୀକାର୍ଯ୍ୟ-୨:<br/>ଦୁଇ ବିନ୍ଦୁ ଓ ଅନନ୍ୟ ରେଖା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପ୍ରସ୍ତାବନା\"]\nA --> I1[\"ଦୁଇଟି ପୃଥକ ବିନ୍ଦୁ ମଧ୍ୟ ଦେଇ<br/>କେତେଗୋଟି ରେଖା ଯାଇପାରେ?\"]\nA --> I2[\"ଏହି ପ୍ରଶ୍ନର ଉତ୍ତର ସ୍ୱୀକାର୍ଯ୍ୟ-୨<br/>ଦ୍ୱାରା ମିଳେ।\"]\nA --> I3[\"ଏହା ଜ୍ୟାମିତିର ଏକ<br/>ମୌଳିକ ସ୍ୱୀକାର୍ଯ୍ୟ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସ୍ୱୀକାର୍ଯ୍ୟ-୨ର ବକ୍ତବ୍ୟ\"]\nM --> M1[\"ଦୁଇଟି ପୃଥକ ବିନ୍ଦୁ ମଧ୍ୟ ଦେଇ<br/>ଗୋଟିଏ ଓ କେବଳ ଗୋଟିଏ ରେଖା।\"]\nM --> M2[\"P ଓ Q ଯଦି L ରେଖାରେ ଥାଆନ୍ତି,<br/>L କୁ PQ ରେଖା କୁହାଯାଏ।\"]\nM --> M3[\"PQ ରେଖାକୁ ତୀରଚିହ୍ନ ସହିତ<br/>(↔PQ) ପ୍ରତୀକରେ ଦର୍ଶାଯାଏ।\"]\nM --> M4[\"PQ ରେଖା ଉପରିସ୍ଥ ଯେକୌଣସି<br/>ବିନ୍ଦୁ R ମଧ୍ୟ ସେହି ରେଖାରେ ରୁହେ।\"]\nM --> M5[\"PR, RP, RQ, QR, PQ, QP -<br/>ସମସ୍ତ ନାମ ଏକ ରେଖାକୁ ବୁଝାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଏକ ରେଖାକୁ ତାହା ଉପରିସ୍ଥ ଯେକୌଣସି<br/>ଦୁଇ ବିନ୍ଦୁ ନାମରେ ଡକାଯାଇପାରେ।\"]\nC --> C2[\"ଏହି ସମସ୍ତ ନାମକୁ ରେଖାର<br/>ବିନ୍ଦୁ ନାମ କୁହାଯାଏ।\"]\nC --> C3[\"ଦୁଇ ବିନ୍ଦୁ ମଧ୍ୟ ଦେଇ ଏକାଧିକ<br/>ରେଖା ଥାଇ ପାରେ ନାହିଁ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ଏକରେଖୀୟ ଓ<br/>ନୈକରେଖୀୟ ବିନ୍ଦୁ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପ୍ରସ୍ତାବନା\"]\nA --> I1[\"ସ୍ୱୀକାର୍ଯ୍ୟ-୨ ଅନୁଯାୟୀ ଦୁଇଟି ପୃଥକ<br/>ବିନ୍ଦୁ ସର୍ବଦା ଏକ ରେଖା ଗଠନ କରନ୍ତି।\"]\nA --> I2[\"କିନ୍ତୁ ତିନି ବା ଅଧିକ ବିନ୍ଦୁ ସର୍ବଦା<br/>ଏକ ରେଖାରେ ନ ଥାଇ ପାରନ୍ତି।\"]\nA --> I3[\"ଏହି ଅବସ୍ଥାକୁ<br/>ପରୀକ୍ଷା କରାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସଂଜ୍ଞା\"]\nM --> M1[\"ତିନି ବା ତତୋଧିକ ବିନ୍ଦୁ ଯଦି ଏକ<br/>ସରଳରେଖାରେ ଥାଆନ୍ତି, ସେମାନଙ୍କୁ<br/>ଏକରେଖୀୟ ବିନ୍ଦୁ କୁହାଯାଏ।\"]\nM --> M2[\"ଏକରେଖୀୟ ବିନ୍ଦୁକୁ 'ସରଳରେଖୀୟ'<br/>ବିନ୍ଦୁ ମଧ୍ୟ କୁହାଯାଏ।\"]\nM --> M3[\"ଯେଉଁ ବିନ୍ଦୁ ଏକ ସାଧାରଣ ରେଖାରେ<br/>ନାହାନ୍ତି, ସେମାନେ ନୈକରେଖୀୟ ବିନ୍ଦୁ।\"]\nM --> M4[\"ନୈକରେଖୀୟ ବିନ୍ଦୁକୁ ଅସରଳରେଖୀୟ<br/>ବିନ୍ଦୁ ମଧ୍ୟ କୁହାଯାଏ।\"]\nM --> M5[\"ଦୁଇ ବିନ୍ଦୁ ସର୍ବଦା ଏକରେଖୀୟ,<br/>କାରଣ ସେମାନେ ସର୍ବଦା ଏକ<br/>ରେଖା ଗଠନ କରନ୍ତି।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଏକରେଖୀୟତା ତିନି ବା ଅଧିକ ବିନ୍ଦୁ<br/>ପାଇଁ ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଗୁଣ।\"]\nC --> C2[\"ଏହା ସ୍ୱୀକାର୍ଯ୍ୟ-୨ର<br/>ପ୍ରତ୍ୟକ୍ଷ ପରିଣାମ।\"]\nC --> C3[\"ତ୍ରିଭୁଜ, ବହୁଭୁଜ ଆଦିର ପାର୍ଶ୍ୱ<br/>ନିର୍ଣ୍ଣୟ ପାଇଁ ଏହା ଉପଯୋଗୀ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-5:<br/>ଦୁଇଟି ରେଖାର ଛେଦ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ସେଟ୍‌ ର ଛେଦ\"]\nA --> I1[\"ଦୁଇଟି ସେଟ୍‌ A ଓ B ର ଛେଦ<br/>A∩B ଦ୍ୱାରା ଦର୍ଶାଯାଏ।\"]\nA --> I2[\"A∩B ଅର୍ଥ A ଓ B ରେ ଥିବା<br/>ସାଧାରଣ ଉପାଦାନମାନଙ୍କର ସେଟ୍‌।\"]\nA --> I3[\"A∩B=∅ ହୋଇପାରେ<br/>କିମ୍ବା A∩B≠∅ ହୋଇପାରେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ରେଖାର ଛେଦ\"]\nM --> M1[\"L1 ଓ L2 ଦୁଇଟି ପୃଥକ ସରଳରେଖା<br/>ହେଲେ ମଧ୍ୟ ଦୁଇଟି ସମ୍ଭାବନା ଥାଏ।\"]\nM --> M2[\"L1∩L2=∅ ହେଲେ, କୌଣସି<br/>ସାଧାରଣ ବିନ୍ଦୁ ନାହିଁ।\"]\nM --> M3[\"ଏହି ପ୍ରକାର ରେଖାଦ୍ୱୟକୁ<br/>ଅଛେଦୀ ରେଖା କୁହାଯାଏ।\"]\nM --> M4[\"L1∩L2≠∅ ହେଲେ, ରେଖାଦ୍ୱୟର<br/>ଏକ ସାଧାରଣ ବିନ୍ଦୁ ଥାଏ, ଏହାକୁ<br/>ଛେଦବିନ୍ଦୁ କୁହାଯାଏ।\"]\nM --> M5[\"ପ୍ରଶ୍ନ - ଦୁଇଟି ରେଖାର ଏକାଧିକ<br/>ସାଧାରଣ ବିନ୍ଦୁ ରହିପାରେ କି?\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଉତ୍ତର ବ୍ୟାପାଦ୍ୟ (ବିପରୀତ ମାନି<br/>ଚର୍ଚ୍ଚା) ପଦ୍ଧତିରେ ଦିଆଯାଏ।\"]\nC --> C2[\"ଦୁଇଟି ପୃଥକ ରେଖା ଅଧିକରୁ<br/>ଅଧିକ ଗୋଟିଏ ସାଧାରଣ<br/>ବିନ୍ଦୁ ରଖିପାରନ୍ତି।\"]\nC --> C3[\"ଏହା ସ୍ୱୀକାର୍ଯ୍ୟ-୨ ସହ<br/>ସିଧାସଳଖ ଜଡ଼ିତ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
      
}  
]
};  
