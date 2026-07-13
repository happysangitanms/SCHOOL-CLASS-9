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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>କାଳି ଓ ମହୁର<br/>ବିସରଣ ପରୀକ୍ଷା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରୀକ୍ଷା\"]\nA --> I1[\"ଦୁଇ ଗ୍ଲାସରେ<br/>ଜଳ ପୂର୍ଣ କରାଯାଏ।\"]\nA --> I2[\"ଗୋଟିଏରେ କାଳି ଓ<br/>ଅନ୍ୟଟିରେ ମହୁ ପକାଯାଏ।\"]\nA --> I3[\"ଗ୍ଲାସ ଦୁଇଟିକୁ ହଲଚଲ<br/>ନ କରି ରଖାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ନିରୀକ୍ଷଣ\"]\nM --> M1[\"କାଳି ଟୋପା ଧୀରେ ଧୀରେ<br/>ଜଳରେ ବ୍ୟାପିଯାଏ।\"]\nM --> M2[\"କିଛି ସମୟ ପରେ କାଳି<br/>ସମଭାବରେ ମିଶିଯାଏ।\"]\nM --> M3[\"ମହୁ ଟୋପା ମଧ୍ୟ ଧୀରେ<br/>ଧୀରେ ତଳକୁ ଗଡ଼େ।\"]\nM --> M4[\"ମହୁ ମିଶିବାକୁ କାଳି<br/>ଅପେକ୍ଷା ଅଧ‌ିକ ସମୟ ଲାଗେ।\"]\nM --> M5[\"ହଲଚଲ ନ କରି ମଧ୍ୟ<br/>ମିଶ୍ରଣ ଘଟିଥାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସିଦ୍ଧାନ୍ତ\"]\nC --> C1[\"ବିନା ହଲଚଲରେ ମିଶ୍ରଣ<br/>କଣିକାର ଗତିକୁ ସୂଚାଏ।\"]\nC --> C2[\"ପଦାର୍ଥର କଣିକା<br/>ନିରନ୍ତର ଗତି କରନ୍ତି।\"]\nC --> C3[\"ଏହି ଗତି ଯୋଗୁଁ ପଦାର୍ଥ<br/>ପରସ୍ପର ମଧ୍ୟରେ ବ୍ୟାପିଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ତାପମାତ୍ରା ଓ<br/>ମିଶ୍ରଣ ହାର\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରୀକ୍ଷା\"]\nA --> I1[\"ଗୋଟିଏ ଗ୍ଲାସରେ ଗରମ ଓ<br/>ଅନ୍ୟଟିରେ ଥଣ୍ଡା ଜଳ।\"]\nA --> I2[\"ଉଭୟ ଗ୍ଲାସରେ ଗୋଟିଏ<br/>ଲେଖାଏଁ ସ୍ଫଟିକ ପକାଯାଏ।\"]\nA --> I3[\"ଗ୍ଲାସ ଦୁଇଟିକୁ<br/>ଗୋଳାଯାଏ ନାହିଁ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nM --> M1[\"ଗରମ ଜଳରେ ସ୍ଫଟିକ<br/>ଶୀଘ୍ର ମିଳେଇ ଯାଏ।\"]\nM --> M2[\"ଥଣ୍ଡା ଜଳରେ ମିଳେଇବାକୁ<br/>ଅଧ‌ିକ ସମୟ ଲାଗେ।\"]\nM --> M3[\"ସ୍ଫଟିକର ରଙ୍ଗ ଉପର ଆଡ଼କୁ<br/>ଧୀରେ ଧୀରେ ବ୍ୟାପେ।\"]\nM --> M4[\"ମିଳେଇବାର ହାର ଜଳର<br/>ତାପମାତ୍ରା ଉପରେ ନିର୍ଭରକରେ।\"]\nM --> M5[\"ଅଧ‌ିକ ତାପମାତ୍ରାରେ<br/>ମିଶ୍ରଣ ଦ୍ରୁତ ହୁଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସିଦ୍ଧାନ୍ତ\"]\nC --> C1[\"ତାପ ବୃଦ୍ଧି ସହିତ<br/>କଣିକାର ଗତି ବଢ଼େ।\"]\nC --> C2[\"ଦ୍ରୁତ ଗତି ଯୋଗୁଁ<br/>ମିଶ୍ରଣ ଶୀଘ୍ର ହୁଏ।\"]\nC --> C3[\"ଗରମ ଖାଦ୍ୟର ବାସ୍ନା ଦୂରକୁ<br/>ଶୀଘ୍ର ପହଞ୍ଚିବା ଉଦାହରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>କଣିକାର<br/>ଗତିଜ ଶକ୍ତି\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ ସାରାଂଶ\"]\nA --> I1[\"1.3, 1.4, 1.5 କାର୍ଯ୍ୟର<br/>ଫଳାଫଳ ତୁଳନା କରାଯାଏ।\"]\nA --> I2[\"ସବୁ କ୍ଷେତ୍ରରେ ପଦାର୍ଥ<br/>ନିଜେ ମିଶିଯାଉଥିବା ଦେଖାଯାଏ।\"]\nA --> I3[\"ତାପମାତ୍ରା ବଢ଼ିଲେ ମିଶ୍ରଣ<br/>ଶୀଘ୍ର ହେବା ଲକ୍ଷ୍ୟ କରାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ମୁଖ୍ୟ ତଥ୍ୟ\"]\nM --> M1[\"ପଦାର୍ଥର କଣିକା<br/>ଅବିରତ ଗତି କରନ୍ତି।\"]\nM --> M2[\"ଏହି ଗତି ଯୋଗୁଁ କଣିକାର<br/>ଗତିଜ ଶକ୍ତି ଥାଏ।\"]\nM --> M3[\"ତାପ ପ୍ରୟୋଗରେ କଣିକାର<br/>ଗତି ଦ୍ରୁତତର ହୁଏ।\"]\nM --> M4[\"ଗତିଜ ଶକ୍ତିର ପରିମାଣ<br/>ତାପ ସହିତ ବଢ଼େ।\"]\nM --> M5[\"ଅଧ‌ିକ ଗତିଜ ଶକ୍ତି<br/>ବିସରଣକୁ ଦ୍ରୁତ କରେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"କଣିକାର ଗତି<br/>କେବେ ବନ୍ଦ ହୁଏ ନାହିଁ।\"]\nC --> C2[\"ତାପମାତ୍ରା ଓ ଗତିଜ ଶକ୍ତି<br/>ପରସ୍ପର ସହ ଜଡ଼ିତ।\"]\nC --> C3[\"ଏହା ପଦାର୍ଥର<br/>ମୌଳିକ ଗୁଣ ଅଟେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ବିସରଣର<br/>ପରିଭାଷା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nA --> I1[\"କାଳି, ମହୁ ଓ ସ୍ଫଟିକ ଜଳରେ<br/>ଆପେ ଆପେ ମିଶିଯାଆନ୍ତି।\"]\nA --> I2[\"ମିଶିବା ସମୟରେ କଣିକା<br/>ମଧ୍ୟରେ ଫାଙ୍କା ସ୍ଥାନ ଦେଖାଯାଏ।\"]\nA --> I3[\"ଅନ୍ୟ କଣିକା ସେହି ଫାଙ୍କା<br/>ସ୍ଥାନରେ ପ୍ରବେଶ କରନ୍ତି।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ବିସରଣ\"]\nM --> M1[\"ଦୁଇ ପଦାର୍ଥର କଣିକାର<br/>ଅନ୍ତଃମିଶ୍ରଣକୁ ବିସରଣ କୁହାଯାଏ।\"]\nM --> M2[\"କଣିକା ମଧ୍ୟରେ ଥ‌ିବା<br/>ଫାଙ୍କାସ୍ଥାନ ବିସରଣକୁ ସହଜ କରେ।\"]\nM --> M3[\"କଣିକାର ଗତି ଯୋଗୁଁ<br/>ବିସରଣ ସମ୍ଭବ ହୁଏ।\"]\nM --> M4[\"ତାପ ପ୍ରୟୋଗ ଦ୍ୱାରା<br/>ବିସରଣ ଦ୍ରୁତତର ହୁଏ।\"]\nM --> M5[\"ବିସରଣ ଠୋସ, ତରଳ ଓ<br/>ବାଷ୍ପ ସବୁଥିରେ ଘଟିଥାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସାରାଂଶ\"]\nC --> C1[\"ବିସରଣ ପଦାର୍ଥର<br/>କଣିକାର ଗତିର ପରିଣାମ।\"]\nC --> C2[\"କାଳି, ମହୁ ଓ ସ୍ଫଟିକର<br/>ମିଶ୍ରଣ ବିସରଣର ଉଦାହରଣ।\"]\nC --> C3[\"ଏହା ପଦାର୍ଥର<br/>ଏକ ମୌଳିକ ଗୁଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-5:<br/>ମାନବ ଶୃଙ୍ଖଳ<br/>ଖେଳ ପରୀକ୍ଷା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରୀକ୍ଷା\"]\nA --> I1[\"ପିଲାମାନଙ୍କୁ ଚାରୋଟି<br/>ଦଳରେ ବିଭକ୍ତ କରାଯାଏ।\"]\nA --> I2[\"ପ୍ରଥମ ଦଳ ପରସ୍ପର<br/>ପଛପଟ ଧରି ଛିଡ଼ାହୁଏ।\"]\nA --> I3[\"ଦ୍ୱିତୀୟ ଦଳ ହାତ ଧରି ଓ<br/>ତୃତୀୟ ଦଳ ଆଙ୍ଗୁଳି ସ୍ପର୍ଶ କରେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nM --> M1[\"ଚତୁର୍ଥ ଦଳ ପ୍ରତ୍ୟେକ ଦଳକୁ<br/>ଭାଙ୍ଗିବାକୁ ଚେଷ୍ଟା କରେ।\"]\nM --> M2[\"ଆଙ୍ଗୁଳି ସ୍ପର୍ଶ କରିଥ‌ିବା<br/>ଦଳ ସହଜରେ ଭାଙ୍ଗିଯାଏ।\"]\nM --> M3[\"ହାତ ଧରି ଥ‌ିବା ଦଳ<br/>ଭାଙ୍ଗିବାକୁ ଅଧ‌ିକ କଷ୍ଟ ହୁଏ।\"]\nM --> M4[\"ପଛପଟ ଧରି ଥ‌ିବା ଦଳ<br/>ସବୁଠାରୁ କଠିନ ଭାବେ ଭାଙ୍ଗେ।\"]\nM --> M5[\"ପିଲାମାନଙ୍କୁ କଣିକା ଭାବେ<br/>ଭାବିଲେ ବନ୍ଧନ ବଳ ଭିନ୍ନ ଦେଖାଯାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସିଦ୍ଧାନ୍ତ\"]\nC --> C1[\"ଅଧ‌ିକ ଦୃଢ଼ ବନ୍ଧନ ଥ‌ିବା ଦଳ<br/>ଭାଙ୍ଗିବା କଷ୍ଟସାଧ୍ୟ।\"]\nC --> C2[\"ଏହା କଣିକା ମଧ୍ୟରେ ଥ‌ିବା<br/>ଆକର୍ଷଣ ବଳକୁ ସୂଚାଏ।\"]\nC --> C3[\"ଆକର୍ଷଣ ବଳ ପଦାର୍ଥ<br/>ଅନୁସାରେ ଭିନ୍ନ ହୋଇଥାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-6:<br/>କଣ୍ଟା, ଚକ୍ ଓ<br/>ରବର ବ୍ୟାଣ୍ଡ ପରୀକ୍ଷା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରୀକ୍ଷା\"]\nA --> I1[\"ଲୁହା କଣ୍ଟା, ଚକ୍ ଓ ରବର<br/>ବ୍ୟାଣ୍ଡ ନିଆଯାଏ।\"]\nA --> I2[\"ପ୍ରତ୍ୟେକକୁ ବାଡ଼େଇ, କାଟି ବା<br/>ଟାଣି ଖଣ୍ଡ କରାଯାଏ।\"]\nA --> I3[\"ପ୍ରତିକ୍ରିୟାର ପାର୍ଥକ୍ୟ<br/>ନିରୀକ୍ଷଣ କରାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nM --> M1[\"ଲୁହା କଣ୍ଟା ଭାଙ୍ଗିବା<br/>ସବୁଠାରୁ କଷ୍ଟସାଧ୍ୟ।\"]\nM --> M2[\"ଚକ୍ ସହଜରେ ଖଣ୍ଡ<br/>ଖଣ୍ଡ ହୋଇଯାଏ।\"]\nM --> M3[\"ରବର ବ୍ୟାଣ୍ଡ ଟଣାଯାଇ<br/>ପାରେ ମାତ୍ର ସହଜରେ ଭାଙ୍ଗେ ନାହିଁ।\"]\nM --> M4[\"ଏହା କଣିକା ମଧ୍ୟରେ ଥ‌ିବା<br/>ବଳର ପାର୍ଥକ୍ୟ ଦର୍ଶାଏ।\"]\nM --> M5[\"ଲୁହାର କଣିକା ସବୁଠାରୁ<br/>ଅଧ‌ିକ ବଳରେ ବନ୍ଧା।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସିଦ୍ଧାନ୍ତ\"]\nC --> C1[\"ପ୍ରତ୍ୟେକ ପଦାର୍ଥର ଆକର୍ଷଣ<br/>ବଳ ଭିନ୍ନ ହୋଇଥାଏ।\"]\nC --> C2[\"ଏହି ବଳ କଣିକାଗୁଡ଼ିକୁ<br/>ଏକାଠି ରଖ‌ିଥାଏ।\"]\nC --> C3[\"ବଳର ପାର୍ଥକ୍ୟ ପଦାର୍ଥର<br/>କଠିନତାକୁ ପ୍ରଭାବିତ କରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-7:<br/>ଜଳଧାରା<br/>ପରୀକ୍ଷା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରୀକ୍ଷା\"]\nA --> I1[\"ଏକ ଜଳ ଟ୍ୟାପ୍<br/>ଖୋଲାଯାଏ।\"]\nA --> I2[\"ନିର୍ଗତ ଜଳଧାରାକୁ ଆଙ୍ଗୁଳିରେ<br/>କାଟିବାକୁ ଚେଷ୍ଟା କରାଯାଏ।\"]\nA --> I3[\"ଧାରାର ଆଚରଣ<br/>ନିରୀକ୍ଷଣ କରାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nM --> M1[\"ଜଳଧାରାକୁ ଛୋଟ ଛୋଟ<br/>ଭାଗରେ ବିଭକ୍ତ କରିବା କଷ୍ଟସାଧ୍ୟ।\"]\nM --> M2[\"ଜଳଧାରା ପୁନର୍ବାର<br/>ଏକାଠି ହୋଇଯାଏ।\"]\nM --> M3[\"ଜଳର କଣିକା ପରସ୍ପରକୁ<br/>ଆକର୍ଷଣ କରନ୍ତି।\"]\nM --> M4[\"ଏହି ଆକର୍ଷଣ ଧାରାକୁ<br/>ଏକାଠି ରଖ‌ିଥାଏ।\"]\nM --> M5[\"ତରଳ ପଦାର୍ଥରେ ମଧ୍ୟ<br/>ଆକର୍ଷଣ ବଳ ଥାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସିଦ୍ଧାନ୍ତ\"]\nC --> C1[\"ଜଳର ସ୍ରୋତ ଏକାଠି<br/>ରହିବାର କାରଣ ଆକର୍ଷଣ ବଳ।\"]\nC --> C2[\"ଏହା ଠୋସ ପରି ପ୍ରବଳ ନ<br/>ହେଲେ ମଧ୍ୟ ପ୍ରଭାବଶାଳୀ।\"]\nC --> C3[\"ସନ୍ତରଣକାରୀ ଜଳ କାଟି<br/>ପହଁରିବା ଏହାର ଉଦାହରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-8:<br/>ଆକର୍ଷଣ ବଳ<br/>ସାରାଂଶ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ ସାରାଂଶ\"]\nA --> I1[\"ମାନବ ଶୃଙ୍ଖଳ, କଣ୍ଟା-ଚକ୍-ରବର<br/>ଓ ଜଳଧାରା ଫଳାଫଳ ତୁଳନା।\"]\nA --> I2[\"ସବୁ କ୍ଷେତ୍ରରେ କଣିକା<br/>ଏକାଠି ରହିବାର ପ୍ରବୃତ୍ତି ଦେଖାଯାଏ।\"]\nA --> I3[\"ବନ୍ଧନ ବଳ ପଦାର୍ଥ<br/>ଅନୁସାରେ ଭିନ୍ନ ହୋଇଥାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ମୁଖ୍ୟ ତଥ୍ୟ\"]\nM --> M1[\"କଣିକାମାନଙ୍କ ମଧ୍ୟରେ ଏକ<br/>ଆକର୍ଷଣ ବଳ କାର୍ଯ୍ୟ କରେ।\"]\nM --> M2[\"ଏହି ବଳ କଣିକାଗୁଡ଼ିକୁ<br/>ଏକାଠି ରଖ‌ିବାରେ ସାହାଯ୍ୟ କରେ।\"]\nM --> M3[\"ଠୋସରେ ଆକର୍ଷଣ ବଳ<br/>ସବୁଠାରୁ ଅଧ‌ିକ।\"]\nM --> M4[\"ତରଳରେ ଆକର୍ଷଣ ବଳ<br/>ମଧ୍ୟମ ମାତ୍ରାର।\"]\nM --> M5[\"ବାଷ୍ପରେ ଆକର୍ଷଣ ବଳ<br/>ସବୁଠାରୁ କମ୍।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଆକର୍ଷଣ ବଳର ସାମର୍ଥ୍ୟ<br/>ପଦାର୍ଥ ଅନୁସାରେ ଭିନ୍ନ ହୋଇଥାଏ।\"]\nC --> C2[\"ଏହା ପଦାର୍ଥର ଅବସ୍ଥା<br/>(ଠୋସ/ତରଳ/ବାଷ୍ପ) ନିର୍ଣ୍ଣୟ କରେ।\"]\nC --> C3[\"ଗତି ଓ ଆକର୍ଷଣ ମିଶି<br/>ପଦାର୍ଥର ଆଚରଣ ବ୍ୟାଖ୍ୟା କରନ୍ତି।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
  
      
}  
]
};  
