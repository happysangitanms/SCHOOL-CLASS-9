const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ବୀଜଗଣିତ"
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
            word: "SET",
            odia: "ସେଟ୍",
            emoji: "🔢",
            odiaUse: "ସେଟ୍ ଅର୍ଥ ଏକ ଉପାଦାନ ସମୂହ । S = {1, 2, 3, 4, 5} ଏକ ସେଟ୍ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ELEMENT",
            odia: "ଉପାଦାନ",
            emoji: "🔹",
            odiaUse: "ଉପାଦାନ ଅର୍ଥ ସେଟ୍‌ର ଅନ୍ତର୍ଗତ ବସ୍ତୁ । x ∈ S ଅର୍ଥ x, S ସେଟ୍‌ର ଉପାଦାନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TABULAR METHOD",
            odia: "ତାଲିକା ପ୍ରଣାଳୀ",
            emoji: "📋",
            odiaUse: "ତାଲିକା ପ୍ରଣାଳୀରେ ସେଟ୍‌ର ଉପାଦାନଗୁଡ଼ିକୁ କୁଟାଙ୍କଚିହ୍ନ ମଧ୍ୟରେ ସିଧାସଳଖ ଲେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SET-BUILDER METHOD",
            odia: "ବ୍ରୁତ ପ୍ରଣାଳୀ",
            emoji: "🧩",
            odiaUse: "ବ୍ରୁତ ପ୍ରଣାଳୀରେ ସେଟ୍‌ର ଉପାଦାନମାନଙ୍କର ସାଧାରଣ ଧର୍ମ ଉଲ୍ଲେଖ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FINITE SET",
            odia: "ସସୀମ ସେଟ୍",
            emoji: "🔚",
            odiaUse: "ସସୀମ ସେଟ୍‌ର ଉପାଦାନଗୁଡ଼ିକୁ ଗଣନା କଲେ ଗଣନ ପ୍ରକ୍ରିୟାର ପରିସମାପ୍ତି ଘଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INFINITE SET",
            odia: "ଅସୀମ ସେଟ୍",
            emoji: "♾️",
            odiaUse: "ଅସୀମ ସେଟ୍‌ର ଉପାଦାନ ଗଣନା ପ୍ରକ୍ରିୟାର କେବେ ପରିସମାପ୍ତି ଘଟେ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CARDINALITY",
            odia: "ଉପାଦାନ ସଂଖ୍ୟା",
            emoji: "🔟",
            odiaUse: "ଏକ ସସୀମ ସେଟ୍ A ର ଉପାଦାନ ସଂଖ୍ୟାକୁ |A| କିମ୍ବା n(A) ଦ୍ୱାରା ସୂଚାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EMPTY SET",
            odia: "ଶୂନ୍ୟ ସେଟ୍",
            emoji: "⭕",
            odiaUse: "ଯେଉଁ ସେଟ୍‌ରେ କୌଣସି ଉପାଦାନ ନ ଥାଏ, ତାହାକୁ ଶୂନ୍ୟ ସେଟ୍ କୁହାଯାଏ, ଏହାକୁ φ ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBSET",
            odia: "ଉପସେଟ୍",
            emoji: "📦",
            odiaUse: "ଯଦି A ସେଟ୍‌ର ପ୍ରତ୍ୟେକ ଉପାଦାନ B ସେଟ୍‌ର ଉପାଦାନ ହୁଏ, ତେବେ A କୁ B ର ଉପସେଟ୍ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNIVERSAL SET",
            odia: "ବ୍ୟାପକ ସେଟ୍",
            emoji: "🌐",
            odiaUse: "ଆଲୋଚନାରେ ବ୍ୟବହୃତ ସମସ୍ତ ସେଟ୍ ଓ ଉପାଦାନ ଥିବା ସର୍ବବୃହତ ସେଟ୍‌କୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ସେଟ୍ ତତ୍ତ୍ୱର ଆବଶ୍ୟକତା ଓ ପ୍ରବର୍ତ୍ତକ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବିଂଶ ଶତାବ୍ଦୀରେ ଗଣିତଶାସ୍ତ୍ରର ବିଭିନ୍ନ ଶାଖା ବ୍ୟାପକ ଭାବେ ବଢ଼ିବାରୁ ସେଟ୍ ତତ୍ତ୍ୱର ଆବଶ୍ୟକତା ପଡ଼ିଲା । ଜର୍ମାନ ଗଣିତଜ୍ଞ ଜର୍ଜ କାଣ୍ଟର (୧୮୪୫-୧୯୧୮) ସେଟ୍ ତତ୍ତ୍ୱର ପ୍ରବର୍ତ୍ତକ ଥିଲେ । ସେଟ୍ ତତ୍ତ୍ୱ ବିନା ଜ୍ୟାମିତି, ବୀଜଗଣିତ ଓ କଳନ ଶାସ୍ତ୍ର ଭଳି ବିଭାଗଗୁଡ଼ିକ ଠିକ୍ ଭାବରେ ବୁଝିହୁଏ ନାହିଁ ।<br><br>👉 ଉଦାହରଣ: ସେଟ୍ ତତ୍ତ୍ୱ ସାହାଯ୍ୟରେ ଆମେ ଜଟିଳ ଗାଣିତିକ ତଥ୍ୟକୁ ସହଜ ଓ ସୁନ୍ଦର ଭାବେ ପ୍ରକାଶ କରିପାରୁ, ଯେପରି ଏକ ସ୍କୁଲର ଛାତ୍ରଛାତ୍ରୀଙ୍କ ତାଲିକାକୁ ଏକ ସେଟ୍ ଭାବେ ଦେଖାଇ ପାରିବା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସେଟ୍ ତତ୍ତ୍ୱର ପ୍ରବର୍ତ୍ତକ କିଏ ଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ଜର୍ମାନ ଗଣିତଜ୍ଞ ଜର୍ଜ କାଣ୍ଟର ସେଟ୍ ତତ୍ତ୍ୱର ପ୍ରବର୍ତ୍ତକ ଥିଲେ ।",

"<span style='color:red;'>Q-2:</span> ସେଟ୍ ତତ୍ତ୍ୱର ଆବଶ୍ୟକତା କାହିଁକି ପଡ଼ିଲା ?<br><br><span style='color:green;'>Answer:</span> ଗଣିତଶାସ୍ତ୍ରର ବିଭିନ୍ନ ଶାଖା ବ୍ୟାପକ ଭାବେ ବଢ଼ିବାରୁ ଏହାର ଆବଶ୍ୟକତା ପଡ଼ିଲା ।",

"<span style='color:red;'>Q-3:</span> ସେଟ୍ ତତ୍ତ୍ୱ ବିନା କେଉଁ ବିଭାଗଗୁଡ଼ିକ ବୁଝିହୁଏ ନାହିଁ ?<br><br><span style='color:green;'>Answer:</span> ଜ୍ୟାମିତି, ବୀଜଗଣିତ ଓ କଳନ ଶାସ୍ତ୍ର ଭଳି ବିଭାଗଗୁଡ଼ିକ ସେଟ୍ ତତ୍ତ୍ୱ ବିନା ଠିକ୍ ଭାବେ ବୁଝିହୁଏ ନାହିଁ ।",

"<span style='color:red;'>Q-4:</span> ଜର୍ଜ କାଣ୍ଟର କେଉଁ ସମୟରେ ଜୀବିତ ଥିଲେ ?<br><br><span style='color:green;'>Answer:</span> ଜର୍ଜ କାଣ୍ଟର ୧୮୪୫ରୁ ୧୯୧୮ ମସିହା ମଧ୍ୟରେ ଜୀବିତ ଥିଲେ ।"

]
},

{
heading: "NOTE-2: ସେଟ୍ ଓ ଏହାର ଉପାଦାନ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ସେଟ୍ ଓ ସେଟ୍ ର ଉପାଦାନ ଏକ ସୁଚିନ୍ତିତ ସଂଜ୍ଞା ନାହିଁ । ମାତ୍ର ଆମେ ଏକ ସେଟ୍ S ଓ ଏକ ବସ୍ତୁ x ପାଇଁ କହିପାରିବା ଯେ, x ∈ S, ଅର୍ଥାତ୍ x ସେଟ୍ S ର ଏକ ଉପାଦାନ । ଯଦି x ସେହି ସେଟ୍ ର ଉପାଦାନ ନୁହେଁ, ତାହାହେଲେ x ∉ S ଲେଖାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଯଦି S ଏକ ସେଟ୍ ଯେଉଁଥିରେ ୧, ୨, ୩ ସଂଖ୍ୟା ଅଛି, ତାହାହେଲେ ୨ ∈ S ଲେଖାଯିବ କାରଣ ୨ ସେହି ସେଟ୍ ର ଉପାଦାନ, କିନ୍ତୁ ୫ ∉ S ଲେଖାଯିବ କାରଣ ୫ ସେହି ସେଟ୍ ରେ ନାହିଁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> x ∈ S ର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> x ∈ S ର ଅର୍ଥ ହେଉଛି x ସେଟ୍ S ର ଏକ ଉପାଦାନ ।",

"<span style='color:red;'>Q-2:</span> x ∉ S ର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> x ∉ S ର ଅର୍ଥ ହେଉଛି x ସେଟ୍ S ର ଉପାଦାନ ନୁହେଁ ।",

"<span style='color:red;'>Q-3:</span> ସେଟ୍ ଓ ଏହାର ଉପାଦାନ ବିଷୟରେ କ'ଣ ବିଶେଷତ୍ୱ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ସେଟ୍ ଓ ଏହାର ଉପାଦାନର କୌଣସି ସୁଚିନ୍ତିତ ସଂଜ୍ଞା ନାହିଁ ।",

"<span style='color:red;'>Q-4:</span> ଏକ ସେଟ୍ ର ଉପାଦାନ ବିଷୟରେ କିପରି ପ୍ରକାଶ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏକ ବସ୍ତୁ ସେଟ୍ ର ଉପାଦାନ କି ନୁହେଁ ତାହା ∈ କିମ୍ବା ∉ ଚିହ୍ନ ମାଧ୍ୟମରେ ପ୍ରକାଶ କରାଯାଏ ।"

]
},

{
heading: "NOTE-3: ସେଟ୍ ପ୍ରକାଶ କରିବାର ପ୍ରଣାଳୀ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ସେଟ୍ କୁ ପ୍ରକାଶ କରିବା ପାଇଁ ମୁଖ୍ୟତଃ ଦୁଇଟି ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ । ପ୍ରଥମଟି ହେଉଛି ତାଲିକା ପ୍ରଣାଳୀ (Tabular or Roster Method), ଯେଉଁଥିରେ ଉପାଦାନଗୁଡ଼ିକୁ କୁଣ୍ଡଳାକୁନ୍ଧନ ମଧ୍ୟରେ ଲେଖାଯାଏ । ଦ୍ୱିତୀୟଟି ହେଉଛି ସେଟ୍ ଗଠନକାରୀ ପ୍ରଣାଳୀ (Set-builder method), ଯେଉଁଥିରେ ଉପାଦାନମାନଙ୍କର ସାଧାରଣ ଧର୍ମ ଲେଖାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ତାଲିକା ପ୍ରଣାଳୀରେ S = {1, 2, 3, 4, 5} ଲେଖାଯାଏ । ସେହି ସେଟ୍ କୁ ସେଟ୍-ଗଠନକାରୀ ପ୍ରଣାଳୀରେ S = {x | x, ଏକ ଗଣନ ସଂଖ୍ୟା ଓ 1 ≤ x ≤ 5} ଭାବେ ଲେଖାଯାଇପାରେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସେଟ୍ ପ୍ରକାଶ କରିବାର କେତୋଟି ପ୍ରଣାଳୀ ଅଛି ?<br><br><span style='color:green;'>Answer:</span> ସେଟ୍ ପ୍ରକାଶ କରିବାର ଦୁଇଟି ପ୍ରଣାଳୀ ଅଛି ।",

"<span style='color:red;'>Q-2:</span> ତାଲିକା ପ୍ରଣାଳୀରେ ଉପାଦାନଗୁଡ଼ିକୁ କିପରି ଲେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ତାଲିକା ପ୍ରଣାଳୀରେ ଉପାଦାନଗୁଡ଼ିକୁ କୁଣ୍ଡଳାକୁନ୍ଧନ ମଧ୍ୟରେ ଲେଖାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ସେଟ୍-ଗଠନକାରୀ ପ୍ରଣାଳୀରେ କ'ଣ ଲେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ସେଟ୍-ଗଠନକାରୀ ପ୍ରଣାଳୀରେ ଉପାଦାନମାନଙ୍କର ସାଧାରଣ ଧର୍ମ ଲେଖାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> N = {1, 2, 3, 4, 5, 6....} କେଉଁ ପ୍ରଣାଳୀର ଉଦାହରଣ ?<br><br><span style='color:green;'>Answer:</span> ଏହା ତାଲିକା ପ୍ରଣାଳୀର ଏକ ଉଦାହରଣ ।"

]
},

{
heading: "NOTE-4: ସସୀମ ଓ ଅସୀମ ସେଟ୍ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯଦି କୌଣସି ସେଟ୍ ର ଉପାଦାନଗୁଡ଼ିକୁ ଗଣନା କରିଲେ ସେହି ଗଣନ ପ୍ରକ୍ରିୟାର ପରିସମାପ୍ତି ଘଟେ, ତେବେ ସେହି ସେଟ୍ କୁ ସସୀମ ସେଟ୍ କୁହାଯାଏ । ଯଦି ଗଣନ ପ୍ରକ୍ରିୟାର କେବେ ପରିସମାପ୍ତି ନ ଘଟେ, ତେବେ ସେହି ସେଟ୍ କୁ ଅସୀମ ସେଟ୍ କୁହାଯାଏ । ଏକ ସସୀମ ସେଟ୍ A ର ଉପାଦାନ ସଂଖ୍ୟାକୁ |A| କିମ୍ବା n(A) ଦ୍ୱାରା ଦର୍ଶାଯାଏ, ଏହାକୁ ସେଟ୍ ର Cardinality କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: {1, 2, 3, 4, 5} ଏକ ସସୀମ ସେଟ୍, କାରଣ ଏଥିରେ ଠିକ୍ ୫ଟି ଉପାଦାନ ଅଛି, ତେଣୁ n(A) = 5 । ମାତ୍ର ସମସ୍ତ ଗଣନ ସଂଖ୍ୟାର ସେଟ୍ N = {1, 2, 3, 4, 5, 6....} ଏକ ଅସୀମ ସେଟ୍, କାରଣ ଏହାର ଗଣନା କେବେ ସରେ ନାହିଁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସସୀମ ସେଟ୍ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ସେଟ୍ ର ଉପାଦାନ ଗଣନା କରିଲେ ପ୍ରକ୍ରିୟାର ପରିସମାପ୍ତି ଘଟେ, ତାହାକୁ ସସୀମ ସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଅସୀମ ସେଟ୍ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ସେଟ୍ ର ଗଣନ ପ୍ରକ୍ରିୟାର କେବେ ପରିସମାପ୍ତି ନ ଘଟେ, ତାହାକୁ ଅସୀମ ସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> n(A) କ'ଣ ଦର୍ଶାଏ ?<br><br><span style='color:green;'>Answer:</span> n(A) ଏକ ସସୀମ ସେଟ୍ A ର ଉପାଦାନ ସଂଖ୍ୟାକୁ ଦର୍ଶାଏ, ଏହାକୁ Cardinality କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ସମସ୍ତ ଗଣନ ସଂଖ୍ୟାର ସେଟ୍ କେଉଁ ପ୍ରକାର ସେଟ୍ ?<br><br><span style='color:green;'>Answer:</span> ସମସ୍ତ ଗଣନ ସଂଖ୍ୟାର ସେଟ୍ ଏକ ଅସୀମ ସେଟ୍ ।"

]
},

{
heading: "NOTE-5: ଶୂନ୍ୟ ସେଟ୍ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯଦି କୌଣସି ସେଟ୍ ରେ ଉପାଦାନ ବିହୀନ ଥାଏ, ଅର୍ଥାତ୍ ସେଥିରେ ଗୋଟିଏ ବି ଉପାଦାନ ନ ଥାଏ, ତେବେ ସେହି ସେଟ୍ କୁ ଶୂନ୍ୟ ସେଟ୍ କୁହାଯାଏ । ଶୂନ୍ୟ ସେଟ୍ କୁ φ (ଫି) କିମ୍ବା { } ଚିହ୍ନ ଦ୍ୱାରା ପ୍ରକାଶ କରାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ୧୦ ଠାରୁ କମ୍ ଓ ୨୦ ଠାରୁ ଅଧିକ ପ୍ରାକୃତିକ ସଂଖ୍ୟାର ସେଟ୍ ଏକ ଶୂନ୍ୟ ସେଟ୍, କାରଣ ଏପରି କୌଣସି ସଂଖ୍ୟା ନାହିଁ ଯାହା ୧୦ରୁ କମ୍ ଓ ୨୦ରୁ ଅଧିକ ହୋଇଥାଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଶୂନ୍ୟ ସେଟ୍ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଉପାଦାନ ବିହୀନ ସେଟ୍ କୁ ଶୂନ୍ୟ ସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଶୂନ୍ୟ ସେଟ୍ କୁ କେଉଁ ଚିହ୍ନ ଦ୍ୱାରା ପ୍ରକାଶ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଶୂନ୍ୟ ସେଟ୍ କୁ φ କିମ୍ବା { } ଚିହ୍ନ ଦ୍ୱାରା ପ୍ରକାଶ କରାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଶୂନ୍ୟ ସେଟ୍ ର ଅନ୍ୟ ନାମ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଶୂନ୍ୟ ସେଟ୍ କୁ Null Set କିମ୍ବା Empty Set ମଧ୍ୟ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ଏକ ଉଦାହରଣ ମାଧ୍ୟମରେ ଶୂନ୍ୟ ସେଟ୍ କୁ ବୁଝାଅ ।<br><br><span style='color:green;'>Answer:</span> ୧୦ ଠାରୁ କମ୍ ଓ ୨୦ ଠାରୁ ଅଧିକ ପ୍ରାକୃତିକ ସଂଖ୍ୟାର ସେଟ୍ ଏକ ଶୂନ୍ୟ ସେଟ୍ ର ଉଦାହରଣ ।"

]
},

{
heading: "NOTE-6: ଉପସେଟ୍ :-",

audioPoints: [{
text:"👉 ଧାରଣା: A ଓ B ଦୁଇଟି ସେଟ୍ ମଧ୍ୟରେ ଯଦି A ସେଟ୍ ର ପ୍ରତ୍ୟେକ ଉପାଦାନ B ସେଟ୍ ର ଉପାଦାନ ହୋଇଥାଏ, ତେବେ A କୁ B ର ଉପସେଟ୍ କୁହାଯାଏ ଏବଂ ଏହାକୁ A ⊂ B ଭାବେ ଲେଖାଯାଏ । ଶୂନ୍ୟ ସେଟ୍ ପ୍ରତ୍ୟେକ ସେଟ୍ ର ଉପସେଟ୍, ଆଉ ପ୍ରତ୍ୟେକ ସେଟ୍ ନିଜର ମଧ୍ୟ ଉପସେଟ୍ ।<br><br>👉 ଉଦାହରଣ: ଯଦି A = {1, 2} ଓ B = {1, 2, 3, 4} ହୁଏ, ତାହାହେଲେ A ର ପ୍ରତ୍ୟେକ ଉପାଦାନ (୧ ଓ ୨) B ରେ ଅଛି, ତେଣୁ A ⊂ B ଅଟେ, ଅର୍ଥାତ୍ A, B ର ଏକ ଉପସେଟ୍ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଉପସେଟ୍ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯଦି A ସେଟ୍ ର ପ୍ରତ୍ୟେକ ଉପାଦାନ B ସେଟ୍ ର ଉପାଦାନ ହୁଏ, ତେବେ A କୁ B ର ଉପସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଶୂନ୍ୟ ସେଟ୍ କାହାର ଉପସେଟ୍ ଅଟେ ?<br><br><span style='color:green;'>Answer:</span> ଶୂନ୍ୟ ସେଟ୍ ପ୍ରତ୍ୟେକ ସେଟ୍ ର ଉପସେଟ୍ ଅଟେ ।",

"<span style='color:red;'>Q-3:</span> ପ୍ରତ୍ୟେକ ସେଟ୍ କାହାର ଉପସେଟ୍ ଅଟେ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତ୍ୟେକ ସେଟ୍ ନିଜର ମଧ୍ୟ ଉପସେଟ୍ ଅଟେ ।",

"<span style='color:red;'>Q-4:</span> A ⊂ B ର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> A ⊂ B ର ଅର୍ଥ ହେଉଛି, x ∈ A ହେଲେ x ∈ B ମଧ୍ୟ ହୁଏ ।"

]
},

{
heading: "NOTE-7: ଦୁଇଟି ସେଟ୍ ର ସମାନତା :-",

audioPoints: [{
text:"👉 ଧାରଣା: A ଓ B ସେଟ୍ ଦ୍ୱୟ ମଧ୍ୟରେ ଯଦି A ⊂ B ଏବଂ B ⊂ A ଦୁଇଟି ସର୍ତ୍ତ ପୂରଣ ହୁଏ, ତେବେ A ଓ B ସେଟ୍ ଦ୍ୱୟକୁ ସମାନ କୁହାଯାଏ ଓ A = B ଲେଖାଯାଏ । ସେଟ୍ ର ଉପାଦାନମାନଙ୍କର କ୍ରମ ପରିବର୍ତ୍ତନ କଲେ କିମ୍ବା ଏକ ଉପାଦାନକୁ ଅଧିକ ଥର ଲେଖିଲେ ମଧ୍ୟ ସେଟ୍ ର ମାନ ବଦଳେ ନାହିଁ ।<br><br>👉 ଉଦାହରଣ: {1, 2, 3, 4} ଓ {4, 2, 1, 3} ଦୁଇଟି ସେଟ୍ ସମାନ, କାରଣ ଉଭୟଙ୍କର ସମାନ ଉପାଦାନ ଅଛି । {1, 1, 2, 3, 4} ଓ {1, 2, 3, 4} ମଧ୍ୟ ସମାନ ସେଟ୍, କାରଣ ଉପାଦାନକୁ ଥରକୁ ଥର ଲେଖିଲେ ମଧ୍ୟ ନୂଆ ଉପାଦାନ ସୃଷ୍ଟି ହୁଏ ନାହିଁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଦୁଇଟି ସେଟ୍ କେବେ ସମାନ ହୁଅନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଯେତେବେଳେ A ⊂ B ଏବଂ B ⊂ A ଦୁଇଟି ସର୍ତ୍ତ ପୂରଣ ହୁଏ, ସେତେବେଳେ A ଓ B ସେଟ୍ ସମାନ ହୁଅନ୍ତି ।",

"<span style='color:red;'>Q-2:</span> ସେଟ୍ ର ଉପାଦାନ କ୍ରମ ପରିବର୍ତ୍ତନ କଲେ କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ଉପାଦାନମାନଙ୍କର କ୍ରମ ପରିବର୍ତ୍ତନ କଲେ ମଧ୍ୟ ସେଟ୍ ର ମାନ ବଦଳେ ନାହିଁ ।",

"<span style='color:red;'>Q-3:</span> {1,2,3,4} ଓ {4,2,1,3} ସେଟ୍ ଦ୍ୱୟ ପରସ୍ପର ସହିତ କେଉଁ ସମ୍ପର୍କ ରଖନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଏହି ଦୁଇଟି ସେଟ୍ ପରସ୍ପର ସହିତ ସମାନ ସମ୍ପର୍କ ରଖନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> ଏକ ଉପାଦାନକୁ ଥରକୁ ଥର ଲେଖିଲେ ସେଟ୍ ର ମାନ ଉପରେ କ'ଣ ପ୍ରଭାବ ପଡ଼େ ?<br><br><span style='color:green;'>Answer:</span> ଏକ ଉପାଦାନକୁ ଥରକୁ ଥର ଲେଖିଲେ ମଧ୍ୟ ସେଟ୍ ର ମାନ ଉପରେ କୌଣସି ପ୍ରଭାବ ପଡ଼େ ନାହିଁ ।"

]
},

{
heading: "NOTE-8: ବ୍ୟାପକ ସେଟ୍ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଆଲୋଚନା କାଳରେ ବିଭିନ୍ନ ସେଟ୍ ଓ ଉପାଦାନମାନେ ଯେଉଁ ବୃହତ୍ତର ସେଟ୍ ର ସଦସ୍ୟ ଥାଆନ୍ତି, ସେହି ବୃହତ୍ତର ସେଟ୍ କୁ ବ୍ୟାପକ ସେଟ୍ (Universal Set) କୁହାଯାଏ । ସାଧାରଣତଃ ଏହାକୁ S କିମ୍ବା U ଅକ୍ଷର ଦ୍ୱାରା ପ୍ରକାଶ କରାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଯଦି ଆମେ ମନେକର ମାଧ୍ୟମିକ ଗଣିତ ପାଠ୍ୟ ପୁସ୍ତକ ମାନଙ୍କୁ ନେଇ ଆଲୋଚନା କରୁଛୁ, ତେବେ ସେହି ସମସ୍ତ ପାଠ୍ୟ ପୁସ୍ତକ ମାନଙ୍କର ସେଟ୍ ଆମର ବ୍ୟାପକ ସେଟ୍ ହେବ, ଆଉ ବୀଜଗଣିତ, ଜ୍ୟାମିତି ପୁସ୍ତକ ମାନେ ଏହାର ଉପସେଟ୍ ହେବେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବ୍ୟାପକ ସେଟ୍ କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଆଲୋଚନାରେ ବ୍ୟବହୃତ ସମସ୍ତ ସେଟ୍ ଓ ଉପାଦାନ ଯେଉଁ ବୃହତ୍ତର ସେଟ୍ ର ସଦସ୍ୟ ହୁଅନ୍ତି, ତାହାକୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ବ୍ୟାପକ ସେଟ୍ କୁ କେଉଁ ଅକ୍ଷର ଦ୍ୱାରା ପ୍ରକାଶ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବ୍ୟାପକ ସେଟ୍ କୁ ସାଧାରଣତଃ S କିମ୍ବା U ଅକ୍ଷର ଦ୍ୱାରା ପ୍ରକାଶ କରାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ବ୍ୟାପକ ସେଟ୍ ର ଏକ ଉଦାହରଣ ଦିଅ ।<br><br><span style='color:green;'>Answer:</span> ମାଧ୍ୟମିକ ଗଣିତ ପାଠ୍ୟ ପୁସ୍ତକ ମାନଙ୍କର ସେଟ୍ ବ୍ୟାପକ ସେଟ୍ ର ଏକ ଉଦାହରଣ ।",

"<span style='color:red;'>Q-4:</span> ବ୍ୟାପକ ସେଟ୍ ସହିତ ଅନ୍ୟ ସେଟ୍ ମାନଙ୍କର କ'ଣ ସମ୍ପର୍କ ଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଆଲୋଚିତ ଅନ୍ୟ ସେଟ୍ ମାନେ ବ୍ୟାପକ ସେଟ୍ ର ଉପସେଟ୍ ଭାବେ ରୁହନ୍ତି ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ସେଟ୍ ପ୍ରକ୍ରିୟା<br/>ଓ ପ୍ରକାଶ ପ୍ରଣାଳୀ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"କର୍କ କ୍ୟାଣ୍ଟର (1845-1918)<br/>ସେଟ୍ ତତ୍ତ୍ୱର ପ୍ରବର୍ତ୍ତକ।\"]\nA --> I2[\"ସେଟ୍ ତତ୍ତ୍ୱ ବିନା<br/>ଗଣିତଶାସ୍ତ୍ର ଅସମ୍ପୂର୍ଣ୍ଣ।\"]\nA --> I3[\"ପୂର୍ବ ଶ୍ରେଣୀରେ ସେଟ୍ ଓ<br/>ଉପାଦାନ ବିଷୟରେ ପଢ଼ିଥିଲୁ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସେଟ୍ ପ୍ରକାଶ ପ୍ରଣାଳୀ\"]\nM --> M1[\"ସେଟ୍‌କୁ ଦୁଇ ପ୍ରଣାଳୀରେ<br/>ପ୍ରକାଶ କରାଯାଏ।\"]\nM --> M2[\"ତାଲିକା ପ୍ରଣାଳୀରେ<br/>ଉପାଦାନ ଲେଖାଯାଏ।\"]\nM --> M3[\"S = {1,2,3,4,5}<br/>ତାଲିକା ପ୍ରଣାଳୀର ଉଦାହରଣ।\"]\nM --> M4[\"ବ୍ରୁତ ପ୍ରଣାଳୀରେ ଧର୍ମ<br/>ଅନୁସାରେ ସେଟ୍ ଲେଖାଯାଏ।\"]\nM --> M5[\"S={x|x,1≤x≤5}<br/>ବ୍ରୁତ ପ୍ରଣାଳୀର ଉଦାହରଣ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ସେଟ୍‌କୁ ଦୁଇ ପ୍ରକାରେ<br/>ପ୍ରକାଶ କରାଯାଏ।\"]\nC --> C2[\"ଦୁଇଟି ପ୍ରଣାଳୀ ଏକା<br/>ସେଟ୍‌କୁ ବର୍ଣ୍ଣନା କରେ।\"]\nC --> C3[\"ପ୍ରଣାଳୀ ଚୟନ ସେଟ୍‌ର<br/>ପ୍ରକୃତି ଉପରେ ନିର୍ଭରକରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ସସୀମ, ଅସୀମ<br/>ଓ ଶୂନ୍ୟ ସେଟ୍\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nA --> I1[\"ଏକ ସେଟ୍‌ର ଉପାଦାନ<br/>ଗଣନା କରାଯାଇପାରେ।\"]\nA --> I2[\"କେତେକ ସେଟ୍‌ର ଉପାଦାନ<br/>ଅସୀମ ହୋଇଥାଏ।\"]\nA --> I3[\"କେତେକ ସେଟ୍‌ରେ କୌଣସି<br/>ଉପାଦାନ ନଥାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସେଟ୍‌ର ପ୍ରକାର\"]\nM --> M1[\"ଗଣନା ପ୍ରକ୍ରିୟା ସମାପ୍ତ<br/>ହେଲେ ସସୀମ ସେଟ୍।\"]\nM --> M2[\"ଗଣନା ପ୍ରକ୍ରିୟା ସମାପ୍ତ<br/>ନହେଲେ ଅସୀମ ସେଟ୍।\"]\nM --> M3[\"ସସୀମ ସେଟ୍ A ର ଉପାଦାନ<br/>ସଂଖ୍ୟାକୁ |A| କୁହାଯାଏ।\"]\nM --> M4[\"କୌଣସି ଉପାଦାନ ନଥିବା<br/>ସେଟ୍‌କୁ ଶୂନ୍ୟ ସେଟ୍ କୁହାଯାଏ।\"]\nM --> M5[\"ଶୂନ୍ୟ ସେଟ୍‌କୁ φ କିମ୍ବା<br/>{ } ଦ୍ୱାରା ବ୍ୟକ୍ତ କରାଯାଏ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ସସୀମ ସେଟ୍‌ର ଉପାଦାନ<br/>ସଂଖ୍ୟା ନିର୍ଦ୍ଦିଷ୍ଟ।\"]\nC --> C2[\"ଅସୀମ ସେଟ୍‌ର ଉପାଦାନ<br/>ସଂଖ୍ୟା ଅନିର୍ଦ୍ଦିଷ୍ଟ।\"]\nC --> C3[\"ଶୂନ୍ୟ ସେଟ୍ ମଧ୍ୟ<br/>ଏକ ସସୀମ ସେଟ୍।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ଉପସେଟ୍ ଓ ସେଟ୍‌ର<br/>ସମାନତା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରିଚୟ\"]\nA --> I1[\"A ଓ B ଦୁଇଟି ସେଟ୍<br/>ବିଚାର କରାଯାଉ।\"]\nA --> I2[\"A ର ପ୍ରତ୍ୟେକ ଉପାଦାନ<br/>B ରେ ଥାଇପାରେ।\"]\nA --> I3[\"ଏହି ସମ୍ପର୍କକୁ<br/>ଉପସେଟ୍ କୁହାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଉପସେଟ୍ ଓ ସମାନତା\"]\nM --> M1[\"A ର ପ୍ରତ୍ୟେକ ଉପାଦାନ B ର<br/>ଉପାଦାନ ହେଲେ A⊂B।\"]\nM --> M2[\"ଶୂନ୍ୟ ସେଟ୍ ପ୍ରତ୍ୟେକ<br/>ସେଟ୍‌ର ଉପସେଟ୍।\"]\nM --> M3[\"ପ୍ରତ୍ୟେକ ସେଟ୍<br/>ନିଜର ଉପସେଟ୍।\"]\nM --> M4[\"A⊂B ଓ B⊂A ହେଲେ<br/>A ଓ B ସମାନ ସେଟ୍।\"]\nM --> M5[\"ଉପାଦାନ କ୍ରମ ପରିବର୍ତ୍ତନରେ<br/>ସେଟ୍ ଅପରିବର୍ତ୍ତିତ ରହେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସାରାଂଶ\"]\nC --> C1[\"ଉପସେଟ୍ ସମ୍ପର୍କ ଦୁଇ ସେଟ୍<br/>ମଧ୍ୟରେ ଅନ୍ତର୍ଭୁକ୍ତି ଦର୍ଶାଏ।\"]\nC --> C2[\"ଦୁଇ ଉପସେଟ୍ ସମ୍ପର୍କ ମିଶି<br/>ସମାନତା ପ୍ରମାଣ କରେ।\"]\nC --> C3[\"ଏହି ଧାରଣା ସେଟ୍<br/>ପ୍ରକ୍ରିୟାର ମୂଳଦୁଆ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
  
      
}  
]
};  
