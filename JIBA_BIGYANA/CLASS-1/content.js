const APP_CONFIG = {
    sreni: "ନବମ",
     subject: "ଜୀବ ବିଜ୍ଞାନ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9SCL1P1-2.mp3",
    video:  "https://www.youtube.com/embed/aGBEh4E418U?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9SCL1P1-2.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "DIVERSITY",
            odia: "ବୈବିଧ୍ୟ",
            emoji: "🌿",
            odiaUse: "ବୈବିଧ୍ୟ ଅର୍ଥ ବିଭିନ୍ନତା । ପ୍ରକୃତିରେ ବହୁ ବୈବିଧ୍ୟ ରହିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LIFESPAN",
            odia: "ଆୟୁଷ",
            emoji: "⏳",
            odiaUse: "ଆୟୁଷ ଅର୍ଥ ଜୀବନକାଳ । ଭିନ୍ନ ଭିନ୍ନ ଜୀବଙ୍କ ଆୟୁଷ ଭିନ୍ନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHARACTERISTIC",
            odia: "ବୈଶିଷ୍ଟ୍ୟ",
            emoji: "🔍",
            odiaUse: "ବୈଶିଷ୍ଟ୍ୟ ଅର୍ଥ ବିଶେଷ ଗୁଣ । ପ୍ରତ୍ୟେକ ଜୀବର ନିଜସ୍ୱ ବୈଶିଷ୍ଟ୍ୟ ଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BIODIVERSITY",
            odia: "ଜୈବ ବିବିଧତା",
            emoji: "🌎",
            odiaUse: "ଜୈବ ବିବିଧତା ଅର୍ଥ ପୃଥିବୀରେ ଥିବା ବିଭିନ୍ନ ପ୍ରକାର ଜୀବନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXTINCT",
            odia: "ବିଲୁପ୍ତ",
            emoji: "💀",
            odiaUse: "ବିଲୁପ୍ତ ଅର୍ଥ ଯାହା ଆଉ ନାହିଁ । ଅନେକ ଜୀବ ପ୍ରଜାତି ବିଲୁପ୍ତ ହୋଇଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TAXONOMY",
            odia: "ଟାକ୍ସୋନୋମି",
            emoji: "📊",
            odiaUse: "ଟାକ୍ସୋନୋମି ଅର୍ଥ ଜୀବମାନଙ୍କର ବର୍ଗୀକରଣ । ଏହା ଦ୍ୱାରା ଜୀବଙ୍କୁ ଚିହ୍ନିବା ସହଜ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ECOLOGY",
            odia: "ପରିସ୍ଥିତିବିଜ୍ଞାନ",
            emoji: "🌳",
            odiaUse: "ପରିସ୍ଥିତିବିଜ୍ଞାନ ଅର୍ଥ ଜୀବ ଓ ପରିବେଶ ମଧ୍ୟରେ ସମ୍ପର୍କ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SPECIES",
            odia: "ପ୍ରଜାତି",
            emoji: "🧬",
            odiaUse: "ପ୍ରଜାତି ଅର୍ଥ ଏକାପ୍ରକାର ଜୀବଙ୍କ ସମଷ୍ଟି । ପୃଥିବୀରେ ଅନେକ ପ୍ରଜାତି ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ବିଭିନ୍ନତା (Diversity) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଆମ ଚାରିପାଖରେ ଥିବା ଜୀବମାନଙ୍କ ମଧ୍ୟରେ ଅନେକ ପ୍ରକାର ଭିନ୍ନତା ଦେଖିବାକୁ ମିଳେ । ଏହି ଭିନ୍ନତାକୁ ବିଭିନ୍ନତା (Diversity) କୁହାଯାଏ । ଏକ ପ୍ରକାର ଜୀବ ମଧ୍ୟରେ ମଧ୍ୟ ଚେହେରା, ନାକର ଗଠନ, ହାତ ପାପୁଲିର ଆକାର ଆଦି କ୍ଷେତ୍ରରେ ଭିନ୍ନତା ରହିଥାଏ ।<br><br>👉 ଉଦାହରଣ: ତୁମ ଓ ତୁମ ବନ୍ଧୁଙ୍କ ଚେହେରା, ନାକ ଓ ହାତ ପାପୁଲିର ଆକାର ସମାନ ନୁହେଁ । ଏହା ମନୁଷ୍ୟ ଜାତି ମଧ୍ୟରେ ଥିବା ବିଭିନ୍ନତାର ଏକ ଉଦାହରଣ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବିଭିନ୍ନତା (Diversity) କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଜୀବମାନଙ୍କ ମଧ୍ୟରେ ଦେଖାଯାଉଥିବା ଭିନ୍ନତାକୁ ବିଭିନ୍ନତା କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ମନୁଷ୍ୟ ଜାତି ମଧ୍ୟରେ କେଉଁ କେଉଁ କ୍ଷେତ୍ରରେ ବିଭିନ୍ନତା ଦେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଚେହେରା, ନାକର ଗଠନ ଓ ହାତ ପାପୁଲିର ଆକାରରେ ବିଭିନ୍ନତା ଦେଖାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ବିଭିନ୍ନତା ବିଷୟରେ ଜାଣିବା ପାଇଁ ଆମେ କାହାକୁ ତୁଳନା କରିପାରିବା ?<br><br><span style='color:green;'>Answer:</span> ଆମେ ଆମ ସାଙ୍ଗମାନଙ୍କୁ ତୁଳନା କରି ବିଭିନ୍ନତା ବିଷୟରେ ଜାଣିପାରିବା ।",

"<span style='color:red;'>Q-4:</span> ଏକ ଜାତିର ଜୀବମାନଙ୍କ ମଧ୍ୟରେ ବିଭିନ୍ନତା କାହିଁକି ରହିଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତ୍ୟେକ ଜୀବର ନିଜସ୍ୱ ଶାରୀରିକ ଗଠନରେ ପାର୍ଥକ୍ୟ ଥିବାରୁ ଏହି ବିଭିନ୍ନତା ରହିଥାଏ ।"

]
},

{
heading: "NOTE-2: ଜୀବମାନଙ୍କ ମଧ୍ୟରେ ସାଦୃଶ୍ୟ ଓ ପାର୍ଥକ୍ୟ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯେତେବେଳେ ଆମେ ନିଜକୁ ଓ ଆମ ସାଙ୍ଗମାନଙ୍କୁ ତୁଳନା କରୁ, ସେତେବେଳେ ମନୁଷ୍ୟ ମଧ୍ୟରେ କେତେ ସାଦୃଶ୍ୟ ଓ କେତେ ପାର୍ଥକ୍ୟ ରହିଛି ତାହା ଜାଣିପାରୁ । ଏହିଭଳି ମନୁଷ୍ୟ ଓ ମାଙ୍କଡ଼ ଭଳି ଅନ୍ୟ ଜୀବ ମଧ୍ୟରେ ମଧ୍ୟ କିଛି ସାଦୃଶ୍ୟ ଦେଖିବାକୁ ମିଳେ ।<br><br>👉 ଉଦାହରଣ: ମନୁଷ୍ୟ ଓ ମାଙ୍କଡ଼ଙ୍କ ହାତ, ମୁହଁ ଓ ଶରୀରର ଗଠନରେ କିଛି ସାଦୃଶ୍ୟ ଦେଖାଯାଏ, କିନ୍ତୁ ସେମାନେ ଏକା ଜାତିର ନୁହନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ମନୁଷ୍ୟ ଓ ମାଙ୍କଡ଼ ମଧ୍ୟରେ କେଉଁ ପ୍ରକାର ସାଦୃଶ୍ୟ ଦେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଶରୀରର ଗଠନ ଓ ହାତ ପାପୁଲି ପରି କିଛି ଲକ୍ଷଣରେ ସାଦୃଶ୍ୟ ଦେଖାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଆମେ ଜୀବମାନଙ୍କ ମଧ୍ୟରେ ସାଦୃଶ୍ୟ ଓ ପାର୍ଥକ୍ୟ କିପରି ବୁଝିପାରିବା ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ଜୀବଙ୍କୁ ଏକାଠି ରଖି ତୁଳନା କରି ଆମେ ସାଦୃଶ୍ୟ ଓ ପାର୍ଥକ୍ୟ ବୁଝିପାରିବା ।",

"<span style='color:red;'>Q-3:</span> ଏକ ଜୀବଗୋଷ୍ଠୀର ସଦସ୍ୟମାନଙ୍କ ମଧ୍ୟରେ କେଉଁ ପ୍ରକାର ସାଦୃଶ୍ୟ ରହିଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ସେମାନଙ୍କ ମୌଳିକ ଶାରୀରିକ ଗଠନ ଓ ଲକ୍ଷଣରେ ସାଦୃଶ୍ୟ ରହିଥାଏ ।",

"<span style='color:red;'>Q-4:</span> ସାଦୃଶ୍ୟ ଓ ପାର୍ଥକ୍ୟ ଅଧ୍ୟୟନ କରିବାର ଲାଭ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଦ୍ୱାରା ଆମେ ବିଭିନ୍ନ ଜୀବଙ୍କ ମଧ୍ୟରେ ଥିବା ସମ୍ପର୍କ ବୁଝିପାରିବା ।"

]
},

{
heading: "NOTE-3: ବିଶେଷ ଲକ୍ଷଣ (Characteristic) :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବିଶେଷ ଲକ୍ଷଣ (Characteristic) ଦ୍ୱାରା ଆମେ ଜୀବମାନଙ୍କୁ ଏକ ଗୋଷ୍ଠୀ ଭାବେ ଚିହ୍ନଟ କରିପାରୁ ଅଥବା ଅଲଗା ବୋଲି ବିଚାର କରିପାରୁ । ପ୍ରତ୍ୟେକ ମନୁଷ୍ୟର ଅଙ୍ଗୁଳିଛାପ ମଧ୍ୟ ଅନ୍ୟଠାରୁ ଭିନ୍ନ ହୋଇଥାଏ, ଯାହା ଖାଲି ଆଖିରେ ଦେଖାଯାଏ ନାହିଁ ।<br><br>👉 ଉଦାହରଣ: ଅଙ୍ଗୁଳିଛାପକୁ ମାଇକ୍ରୋମିଟର (μm) ଏକକରେ ମପାଯାଏ, ଯେଉଁଠାରେ 1 ମାଇକ୍ରୋମିଟର ସମାନ 10^-6 ମିଟର ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବିଶେଷ ଲକ୍ଷଣ (Characteristic) କ'ଣ କାମରେ ଆସେ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଦ୍ୱାରା ଆମେ ଜୀବମାନଙ୍କୁ ଏକ ଗୋଷ୍ଠୀ ଭାବେ ଚିହ୍ନଟ କରିପାରୁ କିମ୍ବା ଅଲଗା ବୋଲି ବିଚାର କରିପାରୁ ।",

"<span style='color:red;'>Q-2:</span> ଅଙ୍ଗୁଳିଛାପ ବିଷୟରେ କ'ଣ ବିଶେଷତ୍ୱ ରହିଛି ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତ୍ୟେକ ମନୁଷ୍ୟର ଅଙ୍ଗୁଳିଛାପ ଅନ୍ୟଠାରୁ ଭିନ୍ନ ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-3:</span> ଅଙ୍ଗୁଳିଛାପକୁ କେଉଁ ଏକକରେ ମପାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ମାଇକ୍ରୋମିଟର (μm) ଏକକରେ ମପାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ମାଇକ୍ରୋମିଟରର ମୂଲ୍ୟ କେତେ ?<br><br><span style='color:green;'>Answer:</span> 1 ମାଇକ୍ରୋମିଟର ସମାନ 10^-6 ମିଟର ।"

]
},

{
heading: "NOTE-4: ଜୀବନକାଳ (Life Span) :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରତ୍ୟେକ ଜୀବର ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଜୀବନକାଳ (Life Span) ଥାଏ, ଯାହା ଜାତି ଅନୁସାରେ ଭିନ୍ନ ଭିନ୍ନ ହୋଇଥାଏ । କେତେକ ଗଛ ପ୍ରାୟ 100 ରୁ 150 ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିଥାନ୍ତି, ଆଉ କେତେକ ଅଧିକ ସମୟ ପର୍ଯ୍ୟନ୍ତ ଜୀବିତ ରହିପାରନ୍ତି ।<br><br>👉 ଉଦାହରଣ: ବଟ ବୃକ୍ଷ (Great Banyan Tree) ପ୍ରାୟ 200 ବର୍ଷରୁ ଅଧିକ ସମୟ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିପାରେ, ଯାହା ଅନ୍ୟ ଅନେକ ଗଛଠାରୁ ଢେର ଅଧିକ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଜୀବନକାଳ (Life Span) କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏକ ଜୀବ ଜନ୍ମରୁ ମୃତ୍ୟୁ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିଥିବା ସମୟକୁ ଜୀବନକାଳ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ସାଧାରଣ ଗଛମାନେ ପ୍ରାୟ କେତେ ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିଥାନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ସାଧାରଣ ଗଛମାନେ ପ୍ରାୟ 100 ରୁ 150 ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିଥାନ୍ତି ।",

"<span style='color:red;'>Q-3:</span> ବଟ ବୃକ୍ଷ (Great Banyan Tree) ର ଜୀବନକାଳ କେତେ ?<br><br><span style='color:green;'>Answer:</span> ବଟ ବୃକ୍ଷ ପ୍ରାୟ 200 ବର୍ଷରୁ ଅଧିକ ସମୟ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିପାରେ ।",

"<span style='color:red;'>Q-4:</span> ବିଭିନ୍ନ ଜୀବଙ୍କ ଜୀବନକାଳ ମଧ୍ୟରେ କେମିତି ପାର୍ଥକ୍ୟ ଦେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତ୍ୟେକ ଜାତିର ଜୀବନକାଳ ଭିନ୍ନ ଭିନ୍ନ ହୋଇଥାଏ, କେହି କମ୍ ଦିନ ଆଉ କେହି ଅଧିକ ଦିନ ବଞ୍ଚିଥାନ୍ତି ।"

]
},

{
heading: "NOTE-5: ଜୈବ ବିବିଧତା (Biodiversity) :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରାକୃତିକ ପରିବେଶର ବିବିଧତା ହେତୁ ଜୀବଜଗତରେ ଦେଖାଯାଉଥିବା ବିବିଧତାକୁ ଜୈବ ବିବିଧତା (Biodiversity) କୁହାଯାଏ । ଜଙ୍ଗଲ, ପାହାଡ଼, ମରୁଭୂମି, ନଦୀ ଓ ସମୁଦ୍ର ଭଳି ପ୍ରତ୍ୟେକ ପ୍ରାକୃତିକ ପରିବେଶର ଜଳବାୟୁ ଭିନ୍ନ ହୋଇଥାଏ ।<br><br>👉 ଉଦାହରଣ: ପ୍ରତ୍ୟେକ ପରିବେଶର ଜଳବାୟୁ ଭିନ୍ନ ହୋଇଥିବାରୁ ସେଠାରେ ଉପଯୁକ୍ତ ଓ ଭିନ୍ନ ଭିନ୍ନ ଜୀବଜାତି ବାସ କରନ୍ତି, ଯେପରି ଜଙ୍ଗଲର ଜୀବ ମରୁଭୂମିର ଜୀବଠାରୁ ଭିନ୍ନ ହୋଇଥାନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଜୈବ ବିବିଧତା (Biodiversity) କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରାକୃତିକ ପରିବେଶର ବିବିଧତା ହେତୁ ଜୀବଜଗତରେ ଦେଖାଯାଉଥିବା ବିବିଧତାକୁ ଜୈବ ବିବିଧତା କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ପ୍ରାକୃତିକ ପରିବେଶର କେଉଁ କେଉଁ ଉଦାହରଣ ଦେଖିବାକୁ ମିଳେ ?<br><br><span style='color:green;'>Answer:</span> ଜଙ୍ଗଲ, ପାହାଡ଼, ମରୁଭୂମି, ନଦୀ ଓ ସମୁଦ୍ର ଆଦି ପ୍ରାକୃତିକ ପରିବେଶର ଉଦାହରଣ ।",

"<span style='color:red;'>Q-3:</span> ଭିନ୍ନ ଭିନ୍ନ ପରିବେଶରେ ଭିନ୍ନ ଭିନ୍ନ ଜୀବ କାହିଁକି ବାସ କରନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତ୍ୟେକ ପରିବେଶର ଜଳବାୟୁ ଭିନ୍ନ ହୋଇଥିବାରୁ ସେଠାରେ ଉପଯୁକ୍ତ ଜୀବ ବାସ କରନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ଜୈବ ବିବିଧତା ଅଧ୍ୟୟନ କରିବାର ଉଦ୍ଦେଶ୍ୟ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଦ୍ୱାରା ଆମେ ପୃଥିବୀରେ ଥିବା ବିଭିନ୍ନ ଜୀବଜାତିଙ୍କ ବିଷୟରେ ଜାଣି ସେମାନଙ୍କର ସୁରକ୍ଷା କରିପାରିବା ।"

]
},

{
heading: "NOTE-6: ଜୈବ ବିକାଶ (Organic Evolution) ଓ ବିଲୁପ୍ତି (Extinction) :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରାକୃତିକ ପରିବେଶରେ କ୍ରମଶଃ ପରିବର୍ତ୍ତନ ହେବା ଫଳରେ ଜୀବଜଗତରେ ମଧ୍ୟ କ୍ରମାଗତ ଭାବେ ପରିବର୍ତ୍ତନ ହୋଇଥାଏ, ଯାହାକୁ ଜୈବ ବିକାଶ (Organic Evolution) କୁହାଯାଏ । ଏହି ପ୍ରକ୍ରିୟାରେ କେତେକ ନୂଆ ଜାତି ସୃଷ୍ଟି ହୁଅନ୍ତି ।<br><br>👉 ଉଦାହରଣ: ପରିବେଶ ସହ ଖାପ ଖୁଆଇ ନ ପାରି କେତେକ ଜୀବଜାତି ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଲୋପ ପାଇଯାନ୍ତି, ଏହାକୁ ବିଲୁପ୍ତ (Extinct) ଜାତି କୁହାଯାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଜୈବ ବିକାଶ (Organic Evolution) କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରାକୃତିକ ପରିବେଶର ପରିବର୍ତ୍ତନ ଫଳରେ ଜୀବଜଗତରେ ହେଉଥିବା କ୍ରମାଗତ ପରିବର୍ତ୍ତନକୁ ଜୈବ ବିକାଶ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ବିଲୁପ୍ତ (Extinct) ଜାତି କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପରିବେଶ ସହ ଖାପ ଖୁଆଇ ନ ପାରି ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଲୋପ ପାଇଥିବା ଜାତିକୁ ବିଲୁପ୍ତ ଜାତି କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଜୈବ ବିକାଶ ପ୍ରକ୍ରିୟାରେ କ'ଣ ଘଟିଥାଏ ?<br><br><span style='color:green;'>Answer:</span> କେତେକ ନୂଆ ଜାତି ସୃଷ୍ଟି ହୁଅନ୍ତି ଏବଂ କେତେକ ପୁରୁଣା ଜାତି ବିଲୁପ୍ତ ହୋଇଯାନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ଜୀବଜାତିଙ୍କ ପାଇଁ ପରିବେଶ ସହ ଖାପ ଖୁଆଇବାର ଗୁରୁତ୍ୱ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ଦ୍ୱାରା ସେମାନେ ଜୀବିତ ରହିପାରନ୍ତି, ନଚେତ୍ ବିଲୁପ୍ତ ହେବାର ସମ୍ଭାବନା ରହେ ।"

]
},

{
heading: "NOTE-7: ଶ୍ରେଣୀବିଭାଗ ବିଜ୍ଞାନ (Taxonomy/Systematics) :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପୃଥିବୀରେ ଥିବା ଅନେକ ଜାତିର ଜୀବଙ୍କୁ ତୁଳନା କରି ଓ ପାର୍ଥକ୍ୟ ବିଚାର କରି ଶ୍ରେଣୀରେ ବିଭକ୍ତ କରିବା ପ୍ରକ୍ରିୟାକୁ ଶ୍ରେଣୀବିଭାଗ ବିଜ୍ଞାନ (Taxonomy) କିମ୍ବା ବ୍ୟବସ୍ଥାବିଜ୍ଞାନ (Systematics) କୁହାଯାଏ । ଏହା ଦ୍ୱାରା ଜୀବଙ୍କ ମଧ୍ୟରେ ଥିବା ପାରସ୍ପରିକ ସମ୍ପର୍କ ବୁଝିବାରେ ସହଜ ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ଏହି ଅଧ୍ୟୟନ ପରିବେଶ ବିଜ୍ଞାନ (Ecology), କୃଷି ବିଜ୍ଞାନ (Agricultural Science) ଓ ଜନସ୍ୱାସ୍ଥ୍ୟ (Public Health) କ୍ଷେତ୍ରରେ ମଧ୍ୟ ପ୍ରଯୋଗ ହୋଇଥାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଶ୍ରେଣୀବିଭାଗ ବିଜ୍ଞାନ (Taxonomy) କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଜୀବମାନଙ୍କୁ ତୁଳନା କରି ଓ ପାର୍ଥକ୍ୟ ବିଚାର କରି ଶ୍ରେଣୀରେ ବିଭକ୍ତ କରିବା ପ୍ରକ୍ରିୟାକୁ ଶ୍ରେଣୀବିଭାଗ ବିଜ୍ଞାନ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଶ୍ରେଣୀବିଭାଗ ଦ୍ୱାରା ଆମେ କ'ଣ ବୁଝିପାରିବା ?<br><br><span style='color:green;'>Answer:</span> ବିଭିନ୍ନ ଜୀବଙ୍କ ମଧ୍ୟରେ ଥିବା ପାରସ୍ପରିକ ସମ୍ପର୍କ ବୁଝିପାରିବା ।",

"<span style='color:red;'>Q-3:</span> ଶ୍ରେଣୀବିଭାଗ ବିଜ୍ଞାନର ଉପଯୋଗ କେଉଁ କେଉଁ କ୍ଷେତ୍ରରେ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ପରିବେଶ ବିଜ୍ଞାନ, କୃଷି ବିଜ୍ଞାନ ଓ ଜନସ୍ୱାସ୍ଥ୍ୟ କ୍ଷେତ୍ରରେ ଏହାର ଉପଯୋଗ ହୁଏ ।",

"<span style='color:red;'>Q-4:</span> ପୃଥିବୀରେ ଏପର୍ଯ୍ୟନ୍ତ ପ୍ରାୟ କେତେ ଜାତିର ଜୀବ ବିଷୟରେ ଅନୁସନ୍ଧାନ କରାଯାଇଛି ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରାୟ 15 ଲକ୍ଷରୁ ଅଧିକ ଜାତିର ଜୀବ ବିଷୟରେ ଅନୁସନ୍ଧାନ କରାଯାଇଛି ।"

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
%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ଜୀବ ବିବିଧତା<br/>(Biodiversity)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"ଜୀବନଗତର<br/>ବିବିଧତା।\"]\nA --> I2[\"ପ୍ରାକୃତିକ ପରିବେଶର<br/>ଭିନ୍ନତା।\"]\nA --> I3[\"ଜୀବଜଗତର<br/>ବ୍ୟାପକତା।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ\"]\nM --> M1[\"ଏକା ପ୍ରଜାତିରେ<br/>ଭିନ୍ନତା (ଯଥା: ରଙ୍ଗ, ଆୟୁଷ)\"]\nM --> M2[\"ଭିନ୍ନ ପ୍ରଜାତି ମଧ୍ୟରେ<br/>ଭିନ୍ନତା (ଯଥା: ଗଛ ଓ ପତଙ୍ଗ)\"]\nM --> M3[\"ବିଭିନ୍ନ ପରିବେଶରେ<br/>ଭିନ୍ନତା (ଯଥା: ଜଙ୍ଗଲ, ମରୁଭୂମି)\"]\nM --> M4[\"ପୃଥିବୀରେ 15 ଲକ୍ଷରୁ<br/>ଅଧିକ ଜାତି ଅଛନ୍ତି।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଉଦାହରଣ\"]\nC --> C1[\"🌳 ବଦବୃଷ୍ଟ (Great Banyan Tree)<br/>200 ବର୍ଷରୁ ଅଧିକ ବଞ୍ଚେ।\"]\nC --> C2[\"🦋 ପ୍ରଜାପତି: ଭିନ୍ନ ଭିନ୍ନ<br/>ରଙ୍ଗ ଓ ଢାଞ୍ଚା।\"]\nC --> C3[\"🐯 ବାଘ: ପ୍ରତ୍ୟେକର<br/>ପଟା ପଟା ଦାଗ ଅନନ୍ୟ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;,

%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ଆୟୁଷ ଓ ଭୌତିକ<br/>(Life Span & Physical Diversity)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଆୟୁଷ (Life Span)\"]\nA --> I1[\"ଜୀବନକାଳରେ<br/>ବିବିଧତା ଥାଏ।\"]\nA --> I2[\"କେତେକ ଜୀବ ଅଳ୍ପ<br/>ଦିନ ବଞ୍ଚନ୍ତି।\"]\nA --> I3[\"କେତେକ ଜୀବ ଶହେ<br/>ବର୍ଷ ବଞ୍ଚନ୍ତି।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ତୁଳନା\"]\nM --> M1[\"🦟 ମଶା: କେବଳ<br/>କିଛି ଦିନ ବଞ୍ଚେ।\"]\nM --> M2[\"🐘 ହାତୀ: 100 ବର୍ଷ<br/>ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚେ।\"]\nM --> M3[\"🌳 ଶାସ୍ତ୍ରାନ ଗଛ: 100-150<br/>ବର୍ଷ ବଞ୍ଚେ।\"]\nM --> M4[\"🌳 ବଦବୃଷ୍ଟ: 200 ବର୍ଷ<br/>ରୁ ଅଧିକ ବଞ୍ଚେ।\"]\nM --> M5[\"🐢 କଇଁଛ: 200 ବର୍ଷ<br/>ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିପାରେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ରଙ୍ଗ ଓ ଢାଞ୍ଚା\"]\nC --> C1[\"ଶୁଆ: ସବୁଜ ରଙ୍ଗ।\"]\nC --> C2[\"ବାଘ: କଳା ପଟା ପଟା<br/>ଦାଗ ଥାଏ।\"]\nC --> C3[\"ଫୁଲ: ଲାଲ, ହଳଦିଆ,<br/>ଧଳା ଇତ୍ୟାଦି।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;,

%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ଟାକ୍ସୋନୋମି (Taxonomy)<br/>& ସିଷ୍ଟମାଟିକ୍ସ (Systematics)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"ଜୀବମାନଙ୍କୁ<br/>ଶ୍ରେଣୀବଦ୍ଧ କରାଯାଏ।\"]\nA --> I2[\"ଏହାକୁ ଟାକ୍ସୋନୋମି<br/>କୁହାଯାଏ।\"]\nA --> I3[\"ଏହାକୁ ସିଷ୍ଟମାଟିକ୍ସ<br/>ମଧ୍ୟ କୁହାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଟାକ୍ସୋନୋମିର ଉପକାରିତା\"]\nM --> M1[\"ଜୀବମାନଙ୍କୁ ଚିହ୍ନିବା<br/>ସହଜ ହୁଏ।\"]\nM --> M2[\"ଜୀବମାନଙ୍କ ମଧ୍ୟରେ<br/>ପାରସ୍ପରିକ ସମ୍ପର୍କ ଜଣାଯାଏ।\"]\nM --> M3[\"ବିଭିନ୍ନ ଅଞ୍ଚଳରେ<br/>ଜୀବଙ୍କ ବିସ୍ତାର ଜଣାଯାଏ।\"]\nM --> M4[\"ପରିବେଶ ବିଜ୍ଞାନ,<br/>କୃଷି ଓ ସ୍ୱାସ୍ଥ୍ୟ କ୍ଷେତ୍ରରେ ସହାୟକ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଜୈବିକ ବିବର୍ତ୍ତନ (Evolution)\"]\nC --> C1[\"ବର୍ତ୍ତମାନର ବିବିଧତା<br/>କୋଟି କୋଟି ବର୍ଷର ବିବର୍ତ୍ତନ ଫଳ।\"]\nC --> C2[\"ଅନେକ ଜାତି ବିଲୁପ୍ତ<br/>(Extinct) ମଧ୍ୟ ହୋଇଯାଇଛନ୍ତି।\"]\nC --> C3[\"ଜନସଂଖ୍ୟା ବୃଦ୍ଧି ଓ ପରିବେଶ<br/>ପରିବର୍ତ୍ତନ ବିଲୁପ୍ତିର କାରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4 body;\nclass C,C1,C2,C3 conclusion;
]
  
      
}  
]
};  
