const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଭୌତିକ ବିଜ୍ଞାନ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9PS2P3-4.mp3",
    video:  "https://www.youtube.com/embed/Y-ouPRcmGJ0?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9PS2P3-4.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "BEAKER",
            odia: "ବିକର",
            emoji: "🧪",
            odiaUse: "ବିକର ହେଉଛି ବୈଜ୍ଞାନିକ ପରୀକ୍ଷାରେ ବ୍ୟବହୃତ ଏକ ପାତ୍ର । ଏଥିରେ ଜଳ ଓ ଅନ୍ୟ ପଦାର୍ଥ ରଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INK",
            odia: "କାଳି",
            emoji: "🖋️",
            odiaUse: "କାଳି ଜଳରେ ପକାଇଲେ ଧୀରେ ଧୀରେ ଚାରିଆଡ଼େ ମିଶିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HONEY",
            odia: "ମହୁ",
            emoji: "🍯",
            odiaUse: "ମହୁ ଜଳରେ ପକାଇଲେ କିଛି ସମୟ ପରେ ଧୀରେ ଧୀରେ ମିଶିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OBSERVATION",
            odia: "ନିରୀକ୍ଷଣ",
            emoji: "👀",
            odiaUse: "ପରୀକ୍ଷା ସମୟରେ ଯାହା ଦେଖାଯାଏ, ତାହାକୁ ନିରୀକ୍ଷଣ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CRYSTAL",
            odia: "ସ୍ଫଟିକ",
            emoji: "💎",
            odiaUse: "କପର ସଲ୍‌ଫେଟ୍ କିମ୍ବା ପୋଟାସିୟମ୍ ପରମାଙ୍ଗାନେଟ୍‌ର ସ୍ଫଟିକ ଜଳରେ ଧୀରେ ଧୀରେ ମିଶିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TEMPERATURE",
            odia: "ତାପମାତ୍ରା",
            emoji: "🌡️",
            odiaUse: "ଜଳର ତାପମାତ୍ରା ବଢ଼ିଲେ ସ୍ଫଟିକ ଶୀଘ୍ର ମିଶିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "KINETIC ENERGY",
            odia: "ଗତିଜ ଶକ୍ତି",
            emoji: "⚡",
            odiaUse: "କଣିକା ଗତି କରୁଥିବାରୁ ସେମାନଙ୍କର ଗତିଜ ଶକ୍ତି ଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PARTICLE",
            odia: "କଣିକା",
            emoji: "🔹",
            odiaUse: "ପ୍ରତ୍ୟେକ ପଦାର୍ଥ ଅତି ଛୋଟ ଛୋଟ କଣିକାରେ ଗଠିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIFFUSION",
            odia: "ବିସରଣ",
            emoji: "🌊",
            odiaUse: "ଦୁଇଟି ଭିନ୍ନ ପଦାର୍ଥର କଣିକା ପରସ୍ପର ମିଶିଯିବାକୁ ବିସରଣ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ATTRACTION",
            odia: "ଆକର୍ଷଣ",
            emoji: "🧲",
            odiaUse: "ପଦାର୍ଥର କଣିକାମାନେ ପରସ୍ପରକୁ ଆକର୍ଷଣ କରିଥାନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FORCE",
            odia: "ବଳ",
            emoji: "💪",
            odiaUse: "କଣିକାମାନଙ୍କ ମଧ୍ୟରେ ଥିବା ବଳ ସେମାନଙ୍କୁ ଏକାଠି ଧରି ରଖେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STRENGTH",
            odia: "ସାମର୍ଥ୍ୟ",
            emoji: "🏋️",
            odiaUse: "ଭିନ୍ନ ଭିନ୍ନ ପଦାର୍ଥରେ ଆକର୍ଷଣ ବଳର ସାମର୍ଥ୍ୟ ଭିନ୍ନ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RUBBER BAND",
            odia: "ରବର ବ୍ୟାଣ୍ଡ",
            emoji: "🟠",
            odiaUse: "ରବର ବ୍ୟାଣ୍ଡକୁ ଟାଣିଲେ ଏହା ଲମ୍ବା ହୋଇଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "IRON NAIL",
            odia: "ଲୁହା କଣ୍ଟା",
            emoji: "📌",
            odiaUse: "ଲୁହା କଣ୍ଟାକୁ ଭାଙ୍ଗିବା କଷ୍ଟକର, କାରଣ ଏହାର କଣିକାମାନେ ଦୃଢ଼ ଭାବେ ବନ୍ଧା ଥାଆନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WATER TAP",
            odia: "ପାଣି ଟ୍ୟାପ୍",
            emoji: "🚰",
            odiaUse: "ପାଣି ଟ୍ୟାପ୍‌ରୁ ବାହାରୁଥିବା ଜଳଧାର ଏକାଠି ରହେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MATTER",
            odia: "ପଦାର୍ଥ",
            emoji: "🧱",
            odiaUse: "ଯେଉଁ ବସ୍ତୁର ଭର ଅଛି ଓ ସ୍ଥାନ ଦଖଲ କରେ, ତାହାକୁ ପଦାର୍ଥ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    

const topicsData = [

{
heading: "NOTE-1: କାଳି ଓ ମହୁ ଜଳରେ କିପରି ମିଶେ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଜଳରେ କାଳିର ଟୋପା ପକାଇଲେ ତାହା ଧୀରେ ଧୀରେ ସମଗ୍ର ଜଳରେ ମିଶିଯାଏ । ମହୁ ମଧ୍ୟ ଧୀରେ ଧୀରେ ଜଳରେ ମିଶିଯାଏ । ଏହା ପ୍ରମାଣ କରେ ଯେ ପଦାର୍ଥର କଣିକା ସବୁବେଳେ ଗତି କରିଥାଏ ଏବଂ ପରସ୍ପର ସହ ମିଶିଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଗୋଟିଏ ଗ୍ଲାସ ପାଣିରେ ଗୋଟିଏ ଟୋପା କାଳି ପକାଇଲେ କିଛି ସମୟ ପରେ ସମଗ୍ର ପାଣି ରଙ୍ଗୀନ ହୋଇଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଜଳରେ କାଳି ପକାଇଲେ କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> କାଳି ଧୀରେ ଧୀରେ ସମଗ୍ର ଜଳରେ ମିଶିଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ମହୁ ଜଳରେ ପକାଇଲେ କ'ଣ ଘଟେ ?<br><br><span style='color:green;'>Answer:</span> ମହୁ ଧୀରେ ଧୀରେ ଜଳରେ ମିଶିଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଏହି ପରୀକ୍ଷା କେଉଁ କଥା ପ୍ରମାଣ କରେ ?<br><br><span style='color:green;'>Answer:</span> ପଦାର୍ଥର କଣିକା ସବୁବେଳେ ଗତି କରିଥାଏ ଓ ପରସ୍ପର ସହ ମିଶିଯାଏ ।",

"<span style='color:red;'>Q-4:</span> କାଳି ସମଗ୍ର ଜଳରେ କିପରି ବ୍ୟାପିଯାଏ ?<br><br><span style='color:green;'>Answer:</span> କଣିକାର ଗତି ଯୋଗୁଁ କାଳି ସମଗ୍ର ଜଳରେ ବ୍ୟାପିଯାଏ ।"

]
},

{
heading: "NOTE-2: ତାପମାତ୍ରା ବଢ଼ିଲେ ବିସରଣ କିପରି ବଦଳେ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଗରମ ଓ ଥଣ୍ଡା ଜଳରେ କପର ସଲ୍‌ଫେଟ୍ କିମ୍ବା ପୋଟାସିୟମ୍ ପରମାଙ୍ଗାନେଟ୍ ସ୍ଫଟିକ ପକାଇଲେ ଗରମ ଜଳରେ ସେଗୁଡ଼ିକ ଶୀଘ୍ର ମିଶିଯାଏ । ତାପମାତ୍ରା ବଢ଼ିଲେ କଣିକାର ଗତି ଓ ଗତିଜ ଶକ୍ତି ବଢ଼ିଯାଏ । ଏହି କାରଣରୁ ବିସରଣ ଦ୍ରୁତ ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ଗରମ ପାଣିରେ ରଙ୍ଗ ଶୀଘ୍ର ବ୍ୟାପିଯାଏ, କିନ୍ତୁ ଥଣ୍ଡା ପାଣିରେ ଧୀରେ ବ୍ୟାପେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> କେଉଁ ଜଳରେ ସ୍ଫଟିକ ଶୀଘ୍ର ମିଶିଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଗରମ ଜଳରେ ସ୍ଫଟିକ ଶୀଘ୍ର ମିଶିଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ତାପମାତ୍ରା ବଢ଼ିଲେ କଣିକାର କେଉଁ ଶକ୍ତି ବଢ଼େ ?<br><br><span style='color:green;'>Answer:</span> କଣିକାର ଗତିଜ ଶକ୍ତି ବଢ଼େ ।",

"<span style='color:red;'>Q-3:</span> ବିସରଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ଭିନ୍ନ ପଦାର୍ଥର କଣିକା ପରସ୍ପର ସହ ମିଶିବାକୁ ବିସରଣ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ତାପ ପ୍ରୟୋଗରେ ବିସରଣ କିପରି ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ତାପ ପ୍ରୟୋଗରେ ବିସରଣ ଦ୍ରୁତତର ହୁଏ ।"

]
},

{
heading: "NOTE-3: ପଦାର୍ଥର କଣିକା ପରସ୍ପରକୁ ଆକର୍ଷଣ କରନ୍ତି :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପଦାର୍ଥର କଣିକାମାନଙ୍କ ମଧ୍ୟରେ ଆକର୍ଷଣ ବଳ ଥାଏ । ଏହି ବଳ କଣିକାମାନଙ୍କୁ ଏକାଠି ଧରି ରଖେ । ସମସ୍ତ ପଦାର୍ଥରେ ଏହି ଆକର୍ଷଣ ବଳ ସମାନ ନୁହେଁ । କେତେକ ପଦାର୍ଥରେ ଏହା ଅଧିକ ଏବଂ କେତେକରେ କମ୍ ଥାଏ ।<br><br>👉 ଉଦାହରଣ: ପିଲାମାନେ ଦୃଢ଼ ଭାବରେ ହାତ ଧରି ଠିଆ ହେଲେ ସେମାନଙ୍କୁ ଅଲଗା କରିବା କଷ୍ଟ ହୁଏ । ସେହିପରି କଣିକାମାନେ ମଧ୍ୟ ଆକର୍ଷଣ ବଳରେ ଏକାଠି ରହନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> କଣିକାମାନଙ୍କ ମଧ୍ୟରେ କେଉଁ ବଳ କାର୍ଯ୍ୟ କରେ ?<br><br><span style='color:green;'>Answer:</span> କଣିକାମାନଙ୍କ ମଧ୍ୟରେ ଆକର୍ଷଣ ବଳ କାର୍ଯ୍ୟ କରେ ।",

"<span style='color:red;'>Q-2:</span> ଆକର୍ଷଣ ବଳ କଣିକାମାନଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରେ ?<br><br><span style='color:green;'>Answer:</span> ଆକର୍ଷଣ ବଳ କଣିକାମାନଙ୍କୁ ଏକାଠି ଧରି ରଖେ ।",

"<span style='color:red;'>Q-3:</span> ସମସ୍ତ ପଦାର୍ଥରେ ଆକର୍ଷଣ ବଳ କିପରି ଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ସମସ୍ତ ପଦାର୍ଥରେ ଆକର୍ଷଣ ବଳ ଭିନ୍ନ ଭିନ୍ନ ଥାଏ ।",

"<span style='color:red;'>Q-4:</span> ଖେଳ ପରୀକ୍ଷା କେଉଁ ଗୁଣକୁ ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏହା କଣିକାମାନଙ୍କ ମଧ୍ୟରେ ଆକର୍ଷଣ ବଳ ଥିବାକୁ ବୁଝାଏ ।"

]
},

{
heading: "NOTE-4: ଲୁହା, ଚକ୍ ଓ ଜଳରୁ କ'ଣ ଜଣାପଡ଼େ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଲୁହା କଣ୍ଟା, ଚକ୍ ଏବଂ ରବର ବ୍ୟାଣ୍ଡ ଉପରେ ପରୀକ୍ଷା କଲେ କଣିକାମାନଙ୍କ ଆକର୍ଷଣ ବଳ ସମାନ ନୁହେଁ ବୋଲି ଜଣାପଡ଼େ । ଜଳଧାର ମଧ୍ୟ ସହଜରେ ଅଲଗା ହୁଏ ନାହିଁ, କାରଣ ଜଳର କଣିକାମାନେ ପରସ୍ପରକୁ ଆକର୍ଷଣ କରନ୍ତି ।<br><br>👉 ଉଦାହରଣ: ଚାଲୁଥିବା ପାଣିକୁ ଆଙ୍ଗୁଳିରେ କାଟିବାକୁ ଚେଷ୍ଟା କଲେ ମଧ୍ୟ ଜଳଧାର ପୁଣି ଏକାଠି ରହିଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଲୁହା, ଚକ୍ ଓ ରବର ବ୍ୟାଣ୍ଡ ଉପରେ କାହିଁକି ପରୀକ୍ଷା କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> କଣିକାମାନଙ୍କ ଆକର୍ଷଣ ବଳ ଜାଣିବା ପାଇଁ ପରୀକ୍ଷା କରାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଜଳଧାର ଏକାଠି ରହିବାର କାରଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଜଳର କଣିକାମାନଙ୍କ ମଧ୍ୟରେ ଆକର୍ଷଣ ବଳ ଥାଏ ।",

"<span style='color:red;'>Q-3:</span> ଭିନ୍ନ ପଦାର୍ଥରେ ଆକର୍ଷଣ ବଳ କିପରି ଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଭିନ୍ନ ପଦାର୍ଥରେ ଆକର୍ଷଣ ବଳ ଭିନ୍ନ ଭିନ୍ନ ଥାଏ ।",

"<span style='color:red;'>Q-4:</span> ଜଳଧାରକୁ କାଟିବା ପରୀକ୍ଷା କେଉଁ କଥା ବୁଝାଏ ?<br><br><span style='color:green;'>Answer:</span> ଜଳର କଣିକାମାନେ ପରସ୍ପରକୁ ଆକର୍ଷଣ କରନ୍ତି ବୋଲି ବୁଝାଏ ।"

]
},

{
heading: "NOTE-5: ପଦାର୍ଥର କଣିକାର ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପଦାର୍ଥର କଣିକା ସବୁବେଳେ ଗତି କରିଥାଏ । ସେମାନଙ୍କର ଗତିଜ ଶକ୍ତି ଥାଏ । ସେମାନେ ପରସ୍ପର ସହ ମିଶିଯାଆନ୍ତି ଏବଂ ପରସ୍ପରକୁ ଆକର୍ଷଣ କରନ୍ତି । ତାପମାତ୍ରା ବଢ଼ିଲେ କଣିକାର ଗତି ଓ ବିସରଣ ବଢ଼ିଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଗରମ ଖାଦ୍ୟର ବାସ୍ନା ଦୂର ପର୍ଯ୍ୟନ୍ତ ଶୀଘ୍ର ବ୍ୟାପିଯାଏ, କାରଣ ଗରମରେ କଣିକା ଅଧିକ ଦ୍ରୁତ ଗତି କରେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ପଦାର୍ଥର କଣିକା ସବୁବେଳେ କ'ଣ କରିଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ପଦାର୍ଥର କଣିକା ସବୁବେଳେ ଗତି କରିଥାଏ ।",

"<span style='color:red;'>Q-2:</span> କଣିକାମାନଙ୍କର କେଉଁ ଶକ୍ତି ଥାଏ ?<br><br><span style='color:green;'>Answer:</span> କଣିକାମାନଙ୍କର ଗତିଜ ଶକ୍ତି ଥାଏ ।",

"<span style='color:red;'>Q-3:</span> ଗରମ ଖାଦ୍ୟର ବାସ୍ନା ଦୂରକୁ କାହିଁକି ବ୍ୟାପିଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଗରମରେ କଣିକା ଦ୍ରୁତ ଗତି କରିବାରୁ ବାସ୍ନା ଶୀଘ୍ର ବ୍ୟାପିଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ପଦାର୍ଥର କଣିକାର ଚାରିଟି ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> କଣିକା ସବୁବେଳେ ଗତି କରେ, ଗତିଜ ଶକ୍ତି ଥାଏ, ପରସ୍ପର ସହ ମିଶେ ଏବଂ ପରସ୍ପରକୁ ଆକର୍ଷଣ କରେ ।"

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
