const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଇଂରାଜୀ ବ୍ଯାକରଣ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9SLEG1P1-2.mp3",
    video:  "https://www.youtube.com/embed/vVfKz0M5vpc?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9SLEG1P1-2.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "SENTENCE",
            odia: "ବାକ୍ୟ",
            emoji: "📝",
            odiaUse: "SENTENCE ଅର୍ଥ ବାକ୍ୟ । ଆମେ ନିଜ ଭାବନା ବାକ୍ୟ ମାଧ୍ୟମରେ ପ୍ରକାଶ କରୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FEELINGS",
            odia: "ଅନୁଭୂତି",
            emoji: "❤️",
            odiaUse: "FEELINGS ଅର୍ଥ ଅନୁଭୂତି । ଆମେ ଆମର ଅନୁଭୂତି ବାକ୍ୟରେ କହିଥାଉ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VIEWS",
            odia: "ମତାମତ",
            emoji: "🗣️",
            odiaUse: "VIEWS ଅର୍ଥ ମତାମତ । ଆମେ ଆମର ମତାମତ ବାକ୍ୟ ମାଧ୍ୟମରେ ପ୍ରକାଶ କରୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MEANINGFUL",
            odia: "ଅର୍ଥପୂର୍ଣ୍ଣ",
            emoji: "✅",
            odiaUse: "MEANINGFUL ଅର୍ଥ ଅର୍ଥପୂର୍ଣ୍ଣ । ବାକ୍ୟଟି ଅର୍ଥପୂର୍ଣ୍ଣ ହେବା ଆବଶ୍ୟକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPRESSION",
            odia: "ପ୍ରକାଶ",
            emoji: "💭",
            odiaUse: "EXPRESSION ଅର୍ଥ ପ୍ରକାଶ । ବାକ୍ୟଟି ଏକ ଅର୍ଥପୂର୍ଣ୍ଣ ପ୍ରକାଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POPULAR",
            odia: "ଲୋକପ୍ରିୟ",
            emoji: "⭐",
            odiaUse: "POPULAR ଅର୍ଥ ଲୋକପ୍ରିୟ । ଦିଲିପ ତିର୍କି ଜଣେ ଲୋକପ୍ରିୟ ହକି ଖେଳାଳୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HOCKEY",
            odia: "ହକି",
            emoji: "🏑",
            odiaUse: "HOCKEY ଏକ ଖେଳ । ଦିଲିପ ତିର୍କି ଜଣେ ହକି ଖେଳାଳୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INDUSTRIOUS",
            odia: "ପରିଶ୍ରମୀ",
            emoji: "💪",
            odiaUse: "INDUSTRIOUS ଅର୍ଥ ପରିଶ୍ରମୀ । ଚୀନା ଲୋକମାନେ ବହୁତ ପରିଶ୍ରମୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OXYGEN",
            odia: "ଅମ୍ଳଜାନ",
            emoji: "🌬️",
            odiaUse: "OXYGEN ଅର୍ଥ ଅମ୍ଳଜାନ । ଗଛଗୁଡ଼ିକ ଆମକୁ ଅମ୍ଳଜାନ ଦିଅନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTELLIGENT",
            odia: "ବୁଦ୍ଧିମାନ",
            emoji: "🧠",
            odiaUse: "INTELLIGENT ଅର୍ଥ ବୁଦ୍ଧିମାନ । ସେହି ପିଲାଟି ବୁଦ୍ଧିମାନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBJECT",
            odia: "କର୍ତ୍ତା",
            emoji: "👤",
            odiaUse: "SUBJECT ଅର୍ଥ କର୍ତ୍ତା । ବାକ୍ୟରେ ଯାହା ବିଷୟରେ କୁହାଯାଏ ତାହା SUBJECT ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PREDICATE",
            odia: "ବିଧେୟ",
            emoji: "💬",
            odiaUse: "PREDICATE ଅର୍ଥ ବିଧେୟ । SUBJECT ବିଷୟରେ ବାକ୍ୟରେ ଯାହା କୁହାଯାଏ ତାହା PREDICATE ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ORDER",
            odia: "କ୍ରମ",
            emoji: "🔢",
            odiaUse: "ORDER ଅର୍ଥ କ୍ରମ । ବାକ୍ୟରେ ଶବ୍ଦଗୁଡ଼ିକ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ରମରେ ସଜାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PATTERN",
            odia: "ଢାଞ୍ଚା",
            emoji: "🧩",
            odiaUse: "PATTERN ଅର୍ଥ ଢାଞ୍ଚା । ଶବ୍ଦଗୁଡ଼ିକ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଢାଞ୍ଚାରେ ସଜାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ACCEPTABLE",
            odia: "ଗ୍ରହଣୀୟ",
            emoji: "👍",
            odiaUse: "ACCEPTABLE ଅର୍ଥ ଗ୍ରହଣୀୟ । କିଛି ଢାଞ୍ଚା ଗ୍ରହଣୀୟ ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CLASSICAL",
            odia: "ଶାସ୍ତ୍ରୀୟ",
            emoji: "🎶",
            odiaUse: "CLASSICAL ଅର୍ଥ ଶାସ୍ତ୍ରୀୟ । ଇନ୍ଦ୍ରାଣୀ ଜଣେ ଶାସ୍ତ୍ରୀୟ ସଙ୍ଗୀତଜ୍ଞ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SINGER",
            odia: "ଗାୟିକା",
            emoji: "🎤",
            odiaUse: "SINGER ଅର୍ଥ ଗାୟିକା । ଇନ୍ଦ୍ରାଣୀ ଜଣେ ଶାସ୍ତ୍ରୀୟ ଗାୟିକା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WAITING",
            odia: "ଅପେକ୍ଷା",
            emoji: "⏳",
            odiaUse: "WAITING ଅର୍ଥ ଅପେକ୍ଷା । ତୁମେ ତାଙ୍କ ପାଇଁ ଅପେକ୍ଷା କରୁଛ କି ?",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COOKED",
            odia: "ରାନ୍ଧିଲି",
            emoji: "🍳",
            odiaUse: "COOKED ଅର୍ଥ ରାନ୍ଧିଲି । ମୁଁ ତୁମ ପାଇଁ ରାନ୍ଧି ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TALL",
            odia: "ଲମ୍ବା",
            emoji: "📏",
            odiaUse: "TALL ଅର୍ଥ ଲମ୍ବା । ସେ ଏକ ଲମ୍ବା ପିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NATION",
            odia: "ଜାତି",
            emoji: "🇮🇳",
            odiaUse: "NATION ଅର୍ଥ ଜାତି ବା ଦେଶ । ଗାନ୍ଧିଜୀ ଆମ ଜାତିର ପିତା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FATHER",
            odia: "ପିତା",
            emoji: "👨",
            odiaUse: "FATHER ଅର୍ଥ ପିତା । ଗାନ୍ଧିଜୀ ଆମ ଜାତିର ପିତା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GLITTERS",
            odia: "ଚକମକ ହୁଏ",
            emoji: "✨",
            odiaUse: "GLITTERS ଅର୍ଥ ଚକମକ ହୁଏ । ଯାହା ଚକମକ ହୁଏ ତାହା ସବୁ ସୁନା ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GOLD",
            odia: "ସୁନା",
            emoji: "🥇",
            odiaUse: "GOLD ଅର୍ଥ ସୁନା । ଯାହା ଚକମକ ହୁଏ ତାହା ସବୁ ସୁନା ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SWEETLY",
            odia: "ମଧୁରଭାବେ",
            emoji: "🎵",
            odiaUse: "SWEETLY ଅର୍ଥ ମଧୁରଭାବେ । ଅନିମା ମଧୁରଭାବେ ଗାଉଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GUESS",
            odia: "ଅନୁମାନ",
            emoji: "🤔",
            odiaUse: "GUESS ଅର୍ଥ ଅନୁମାନ କରିବା । ତୁମେ ଉତ୍ତରକୁ ଅନୁମାନ କରିପାରିବ କି ?",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ANSWER",
            odia: "ଉତ୍ତର",
            emoji: "✍️",
            odiaUse: "ANSWER ଅର୍ଥ ଉତ୍ତର । ତୁମେ ଏହି ପ୍ରଶ୍ନର ଉତ୍ତର ଅନୁମାନ କରିପାରିବ କି ?",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUN",
            odia: "ସୂର୍ଯ୍ୟ",
            emoji: "☀️",
            odiaUse: "SUN ଅର୍ଥ ସୂର୍ଯ୍ୟ । ସୂର୍ଯ୍ୟ ଆଡ଼କୁ ଚାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ENGINEER",
            odia: "ଇଞ୍ଜିନିୟର",
            emoji: "👷",
            odiaUse: "ENGINEER ଏକ ବୃତ୍ତି । ମି. କରୁଣାକର ଜଣେ ଇଞ୍ଜିନିୟର ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ବାକ୍ୟ, କର୍ତ୍ତା ଓ ପ୍ରେଡିକେଟ୍ କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଆମେ ଆମର ଭାବ, ଅନୁଭୂତି ଓ ମତାମତ ବାକ୍ୟ ମାଧ୍ୟମରେ ପ୍ରକାଶ କରୁ । ବାକ୍ୟ ଶବ୍ଦରେ ଗଠିତ ହୋଇଥାଏ ଏବଂ ଏହା ଏକ ଅର୍ଥପୂର୍ଣ୍ଣ ପ୍ରକାଶ ଅଟେ । ପ୍ରତ୍ୟେକ ବାକ୍ୟର ଦୁଇଟି ମୁଖ୍ୟ ଅଂଶ ଥାଏ - କର୍ତ୍ତା (Subject) ଓ ପ୍ରେଡିକେଟ୍ (Predicate) । କର୍ତ୍ତା ହେଉଛି ଯାହା ବିଷୟରେ କୁହାଯାଏ, ପ୍ରେଡିକେଟ୍ ହେଉଛି ତାହା ବିଷୟରେ କ'ଣ କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: 'That boy is intelligent' ବାକ୍ୟରେ 'That boy' କର୍ତ୍ତା ଏବଂ 'is intelligent' ପ୍ରେଡିକେଟ୍ ଅଟେ । ସେହିପରି 'Trees provide us with oxygen' ରେ 'Trees' କର୍ତ୍ତା ଏବଂ 'provide us with oxygen' ପ୍ରେଡିକେଟ୍ ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବାକ୍ୟ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଶବ୍ଦରେ ଗଠିତ ହୋଇ ଅର୍ଥପୂର୍ଣ୍ଣ ପ୍ରକାଶ କରୁଥିବା ବିଷୟକୁ ବାକ୍ୟ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ପ୍ରତ୍ୟେକ ବାକ୍ୟର ମୁଖ୍ୟ ଅଂଶଗୁଡ଼ିକର ନାମ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> କର୍ତ୍ତା (Subject) ଓ ପ୍ରେଡିକେଟ୍ (Predicate) ।",

"<span style='color:red;'>Q-3:</span> କର୍ତ୍ତା କ'ଣ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯାହା ବିଷୟରେ ବାକ୍ୟରେ କୁହାଯାଏ, ତାହାକୁ କର୍ତ୍ତା କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> 'Trees provide us with oxygen' ବାକ୍ୟରେ ପ୍ରେଡିକେଟ୍ କେଉଁଟି ?<br><br><span style='color:green;'>Answer:</span> 'provide us with oxygen' ଏହି ବାକ୍ୟର ପ୍ରେଡିକେଟ୍ ଅଟେ ।"

]
},

{
heading: "NOTE-2: ଶବ୍ଦକ୍ରମର ଗୁରୁତ୍ୱ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବାକ୍ୟ ତିଆରି କରିବା ବେଳେ ଶବ୍ଦଗୁଡ଼ିକୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ରମରେ ସଜାଇବାକୁ ପଡ଼େ । ଶବ୍ଦଗୁଡ଼ିକ ଠିକ୍ ଥିଲେ ମଧ୍ୟ, ସେଗୁଡ଼ିକୁ ଭୁଲ କ୍ରମରେ ସଜାଇଲେ ବାକ୍ୟର ଅର୍ଥ ବୁଝି ହୁଏ ନାହିଁ । ଏଣୁ ସଠିକ୍ ଶବ୍ଦକ୍ରମ ବ୍ୟବହାର କରିବା ଅତ୍ୟନ୍ତ ଜରୁରୀ ।<br><br>👉 ଉଦାହରଣ: 'Indrani is a classical singer' ଏକ ସଠିକ୍ ବାକ୍ୟ, କିନ୍ତୁ 'Singer classical Indrani is a' କୌଣସି ଅର୍ଥ ଦିଏ ନାହିଁ । ସେହିପରି 'her / you / waiting / for / are' ଶବ୍ଦଗୁଡ଼ିକୁ ସଜାଇଲେ 'Are you waiting for her ?' ଏକ ସଠିକ୍ ପ୍ରଶ୍ନ ବାକ୍ୟ ହୁଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବାକ୍ୟ ତିଆରି କରିବା ବେଳେ ଶବ୍ଦଗୁଡ଼ିକୁ କେମିତି ସଜାଇବାକୁ ପଡ଼େ ?<br><br><span style='color:green;'>Answer:</span> ଶବ୍ଦଗୁଡ଼ିକୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ରମରେ ସଜାଇବାକୁ ପଡ଼େ ।",

"<span style='color:red;'>Q-2:</span> ଭୁଲ ଶବ୍ଦକ୍ରମରେ ବାକ୍ୟ ଲେଖିଲେ କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ବାକ୍ୟର ଅର୍ଥ ବୁଝି ହୁଏ ନାହିଁ ।",

"<span style='color:red;'>Q-3:</span> 'her / you / waiting / for / are' ଶବ୍ଦଗୁଡ଼ିକୁ ସଜାଇଲେ କେଉଁ ବାକ୍ୟ ତିଆରି ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> 'Are you waiting for her ?' ବାକ୍ୟ ତିଆରି ହୁଏ ।",

"<span style='color:red;'>Q-4:</span> ସଠିକ୍ ଶବ୍ଦକ୍ରମର ଉଦାହରଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> 'Indrani is a classical singer' ଏକ ସଠିକ୍ ଶବ୍ଦକ୍ରମର ଉଦାହରଣ ଅଟେ ।"

]
},

{
heading: "NOTE-3: ସରଳ ବାକ୍ୟ ମାଧ୍ୟମରେ ବର୍ଣ୍ଣନା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଆମେ ଛୋଟ ଓ ସରଳ ବାକ୍ୟ ମାଧ୍ୟମରେ ଜଣଙ୍କ ବିଷୟରେ ପୂରା ସୂଚନା ଦେଇପାରିବା । ପ୍ରତ୍ୟେକ ବାକ୍ୟ ଗୋଟିଏ ଗୋଟିଏ ତଥ୍ୟ କୁହେ, ଏବଂ ପ୍ରତ୍ୟେକ ବାକ୍ୟରେ କର୍ତ୍ତା ଓ ପ୍ରେଡିକେଟ୍ ଥାଏ ।<br><br>👉 ଉଦାହରଣ: 'This is Itishree.' 'She is in class X.' 'She is fourteen.' 'Mr Karunakar is her father.' 'He is an engineer.' ଏହିପରି ପ୍ରତ୍ୟେକ ସରଳ ବାକ୍ୟ ଇତିଶ୍ରୀ ବିଷୟରେ ଗୋଟିଏ ନୂଆ ତଥ୍ୟ ଦିଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସରଳ ବାକ୍ୟ ଆମକୁ କ'ଣ ଦେଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ସରଳ ବାକ୍ୟ ଆମକୁ ଜଣଙ୍କ ବିଷୟରେ ଗୋଟିଏ ଗୋଟିଏ ସ୍ପଷ୍ଟ ତଥ୍ୟ ଦେଇଥାଏ ।",

"<span style='color:red;'>Q-2:</span> 'She is in class X' ବାକ୍ୟଟି କାହା ବିଷୟରେ ଥିଲା ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଇତିଶ୍ରୀ ବିଷୟରେ ଥିଲା ।",

"<span style='color:red;'>Q-3:</span> ଇତିଶ୍ରୀଙ୍କ ପିତାଙ୍କ ବୃତ୍ତି କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ତାଙ୍କ ପିତା ଜଣେ ଇଞ୍ଜିନିୟର ।",

"<span style='color:red;'>Q-4:</span> ଜଣଙ୍କ ବିଷୟରେ ପୂରା ସୂଚନା ଦେବାକୁ ଆମେ କେମିତି ବାକ୍ୟ ବ୍ୟବହାର କରୁ ?<br><br><span style='color:green;'>Answer:</span> ଆମେ ଛୋଟ ଓ ସରଳ ବାକ୍ୟ ବ୍ୟବହାର କରୁ ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>Sentence, Subject & Predicate<br/>ବାକ୍ୟ, କର୍ତ୍ତା ଓ କ୍ରିୟା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 Example / ଉଦାହରଣ\"]\nA --> I1[\"We express ideas, feelings, views in sentences.<br/>ଆମେ ଆମର ଭାବ, ଅନୁଭୂତି, ମତାମତ ବାକ୍ୟରେ ପ୍ରକାଶ କରୁ।\"]\nA --> I2[\"A sentence is made up of words.<br/>ବାକ୍ୟ ଶବ୍ଦରେ ଗଠିତ।\"]\nA --> I3[\"A sentence is a meaningful expression.<br/>ବାକ୍ୟ ଏକ ଅର୍ଥପୂର୍ଣ୍ଣ ପ୍ରକାଶ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 Subject & Predicate<br/>କର୍ତ୍ତା ଓ କ୍ରିୟା\"]\nM --> M1[\"Every sentence has two parts.<br/>ପ୍ରତ୍ୟେକ ବାକ୍ୟର ଦୁଇଟି ଅଂଶ ଥାଏ।\"]\nM --> M2[\"First part is called Subject.<br/>ପ୍ରଥମ ଅଂଶକୁ କର୍ତ୍ତା କୁହାଯାଏ।\"]\nM --> M3[\"Second part is called Predicate.<br/>ଦ୍ୱିତୀୟ ଅଂଶକୁ ପ୍ରେଡିକେଟ୍ କୁହାଯାଏ।\"]\nM --> M4[\"Subject and Predicate join to form meaning.<br/>କର୍ତ୍ତା ଓ କ୍ରିୟା ମିଶି ଅର୍ଥ ସୃଷ୍ଟି କରନ୍ତି।\"]\nM --> M5[\"Example: That boy is intelligent.<br/>ଉଦାହରଣ: ସେ ପିଲାଟି ବୁଦ୍ଧିମାନ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 Remember / ମନେରଖ\"]\nC --> C1[\"Trees provide us with oxygen.<br/>ଗଛ ଆମକୁ ଅମ୍ଳଜାନ ଦିଏ।\"]\nC --> C2[\"The cows feed on grass.<br/>ଗାଈମାନେ ଘାସ ଖାଆନ୍ତି।\"]\nC --> C3[\"Joining Subject with correct Predicate makes a sentence.<br/>ସଠିକ୍ କ୍ରିୟା ସହ କର୍ତ୍ତା ମିଶାଇଲେ ବାକ୍ୟ ସୃଷ୍ଟି ହୁଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>Importance of Word Order<br/>ଶବ୍ଦକ୍ରମର ଗୁରୁତ୍ୱ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 Observation / ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nA --> I1[\"Is Indrani a classical singer?<br/>ଇନ୍ଦ୍ରାଣୀ କି ଏକ ଶାସ୍ତ୍ରୀୟ ଗାୟିକା?\"]\nA --> I2[\"Indrani is a classical singer.<br/>ଇନ୍ଦ୍ରାଣୀ ଜଣେ ଶାସ୍ତ୍ରୀୟ ଗାୟିକା।\"]\nA --> I3[\"Both sentences follow correct word order.<br/>ଉଭୟ ବାକ୍ୟ ସଠିକ୍ ଶବ୍ଦକ୍ରମ ଅନୁସରଣ କରନ୍ତି।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 Correct vs Incorrect Order<br/>ସଠିକ୍ ଓ ଭୁଲ କ୍ରମ\"]\nM --> M1[\"Words must follow a pattern.<br/>ଶବ୍ଦଗୁଡ଼ିକ ଏକ ନିୟମ ଅନୁସାରେ ସଜାଯିବା ଆବଶ୍ୟକ।\"]\nM --> M2[\"'Classical is Indrani a singer' is not acceptable.<br/>ଏହା ଗ୍ରହଣୀୟ ନୁହେଁ।\"]\nM --> M3[\"'Singer classical Indrani is a' is also wrong.<br/>ଏହା ମଧ୍ୟ ଭୁଲ।\"]\nM --> M4[\"Wrong order breaks the meaning.<br/>ଭୁଲ କ୍ରମ ଅର୍ଥକୁ ନଷ୍ଟ କରେ।\"]\nM --> M5[\"Correct order gives a meaningful sentence.<br/>ସଠିକ୍ କ୍ରମ ଅର୍ଥପୂର୍ଣ୍ଣ ବାକ୍ୟ ଦିଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 Practice / ଅଭ୍ୟାସ\"]\nC --> C1[\"Jumbled words must be rearranged.<br/>ଅବ୍ୟବସ୍ଥିତ ଶବ୍ଦଗୁଡ଼ିକୁ ପୁନଃ ସଜାଇବାକୁ ପଡ଼େ।\"]\nC --> C2[\"Example: her / you / waiting / for / are ?<br/>ଉଦାହରଣ: her / you / waiting / for / are ?\"]\nC --> C3[\"Answer: Are you waiting for her ?<br/>ଉତ୍ତର: Are you waiting for her ?\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>Describing a Person<br/>ଜଣଙ୍କ ବିଷୟରେ ବର୍ଣ୍ଣନା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 Information / ସୂଚନା\"]\nA --> I1[\"This is Itishree.<br/>ଏହା ଇତିଶ୍ରୀ।\"]\nA --> I2[\"She is in class X.<br/>ସେ ଦଶମ ଶ୍ରେଣୀରେ ପଢ଼ନ୍ତି।\"]\nA --> I3[\"She is fourteen.<br/>ତାଙ୍କର ବୟସ ଚଉଦ ବର୍ଷ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 Family Details<br/>ପାରିବାରିକ ସୂଚନା\"]\nM --> M1[\"Mr Karunakar is her father.<br/>ଶ୍ରୀ କରୁଣାକର ତାଙ୍କର ପିତା।\"]\nM --> M2[\"He is an engineer.<br/>ସେ ଜଣେ ଇଞ୍ଜିନିୟର।\"]\nM --> M3[\"Each sentence gives one clear fact.<br/>ପ୍ରତ୍ୟେକ ବାକ୍ୟ ଏକ ସ୍ପଷ୍ଟ ତଥ୍ୟ ଦିଏ।\"]\nM --> M4[\"Simple sentences describe a person fully.<br/>ସରଳ ବାକ୍ୟଗୁଡ଼ିକ ଜଣଙ୍କୁ ସମ୍ପୂର୍ଣ୍ଣ ବର୍ଣ୍ଣନା କରନ୍ତି।\"]\nM --> M5[\"Subject and Predicate appear in every sentence.<br/>ପ୍ରତ୍ୟେକ ବାକ୍ୟରେ କର୍ତ୍ତା ଓ କ୍ରିୟା ଥାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 Summary / ସାରାଂଶ\"]\nC --> C1[\"Sentences are built with correct word order.<br/>ବାକ୍ୟ ସଠିକ୍ ଶବ୍ଦକ୍ରମରେ ତିଆରି ହୁଏ।\"]\nC --> C2[\"Subject and Predicate join to give meaning.<br/>କର୍ତ୍ତା ଓ କ୍ରିୟା ମିଶି ଅର୍ଥ ଦିଅନ୍ତି।\"]\nC --> C3[\"Practice helps in framing correct sentences.<br/>ଅଭ୍ୟାସ ସଠିକ୍ ବାକ୍ୟ ଗଠନରେ ସାହାଯ୍ୟ କରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
  
      
}  
]
};  
