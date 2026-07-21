const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ବୀଜଗଣିତ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9MTA2P2-8.mp3",
    video:  "https://www.youtube.com/embed/p8OXEktMUfM?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9MTA2P2-8.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "UNIVERSAL SET",
            odia: "ବ୍ୟାପକ ସେଟ୍",
            emoji: "🌐",
            odiaUse: "ବ୍ୟାପକ ସେଟ୍ ଅର୍ଥ ଆଲୋଚନାର ପରିସର ମଧ୍ୟରେ ଥିବା ସମସ୍ତ ସେଟ୍‌ର ମୂଳ ସେଟ୍ । ଏହାକୁ E ଚିହ୍ନ ଦ୍ୱାରା ଦର୍ଶାଯାଏ । ଉଦାହରଣ ସ୍ୱରୂପ ମନେକର ଆଲୋଚନାର ପରିସର ମଧ୍ୟରେ ପ୍ରତ୍ୟେକ ସେଟ୍ ଯଦି ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସେଟ୍ E ର ଉପସେଟ୍ ହୁଏ, ତେବେ E କୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNION",
            odia: "ସଂଯୋଗ",
            emoji: "🔗",
            odiaUse: "ସଂଯୋଗ ଅର୍ଥ A ଓ B ଦ୍ୱୟରେ ଥିବା ବା ସମସ୍ତ ଉପାଦାନ ଗୁଡ଼ିକୁ ନେଇ ଗଠିତ ସେଟ୍ । A ଓ B ର ସଂଯୋଗକୁ A ∪ B ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯଥା A = {1,2,3,4} ଓ B = {2,4,6,8} ହେଲେ, A ∪ B = {1,2,3,4,6,8} ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTERSECTION",
            odia: "ଛେଦ",
            emoji: "🔀",
            odiaUse: "ଛେଦ ଅର୍ଥ A ଓ B ସେଟ୍ ଦ୍ୱୟରେ ଥିବା ଉଭୟଙ୍କ ମଧ୍ୟରେ ସାଧାରଣ ଉପାଦାନମାନଙ୍କୁ ନେଇ ଗଠିତ ସେଟ୍ । ଏହାକୁ A ∩ B ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯଥା A = {1,2,3} ଓ B = {1,3,5} ହେଲେ, A ∩ B = {1,3} ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIFFERENCE",
            odia: "ଅନ୍ତର",
            emoji: "➖",
            odiaUse: "ଅନ୍ତର ଅର୍ଥ A ସେଟ୍‌ର ଯେଉଁ ଉପାଦାନଗୁଡ଼ିକ B ରେ ନାହାନ୍ତି, ସେମାନଙ୍କୁ ନେଇ ଗଠିତ ସେଟ୍ । ଏହାକୁ A – B ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯଥା A = {1,2,3,4} ଓ B = {3,4,5,6} ହେଲେ, A – B = {1,2} ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DISJOINT SET",
            odia: "ଅଣଛେଦା ସେଟ୍",
            emoji: "🚫",
            odiaUse: "ଅଣଛେଦା ସେଟ୍ ଅର୍ଥ ଦୁଇଟି ସେଟ୍‌ ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥିବା ସେଟ୍ । ଯଦି A ଓ B ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଏ, ତେବେ A ଓ B ଙ୍କୁ ଅଣଛେଦା ସେଟ୍ କୁହାଯାଏ, ଅର୍ଥାତ୍ A ∩ B = ϕ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBSET",
            odia: "ଉପସେଟ୍",
            emoji: "🧩",
            odiaUse: "ଉପସେଟ୍ ଅର୍ଥ ଏକ ସେଟ୍‌ର ଉପାଦାନଗୁଡ଼ିକ ଅନ୍ୟ ଏକ ବଡ଼ ସେଟ୍‌ ମଧ୍ୟରେ ଅନ୍ତର୍ଭୁକ୍ତ ଥିଲେ ତାହାକୁ ଉପସେଟ୍ କୁହାଯାଏ, ଯଥା ଯଦି ପ୍ରତ୍ୟେକ ଉପାଦାନ E ର ଉପାଦାନ ହୁଏ, ତେବେ ସେଟ୍ ⊆ E ଅର୍ଥାତ୍ ଉପସେଟ୍ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VENN DIAGRAM",
            odia: "ଭେନ୍‌ ଚିତ୍ର",
            emoji: "⭕",
            odiaUse: "ଭେନ୍‌ ଚିତ୍ର ଅର୍ଥ ସେଟ୍‌ ଓ ତାହାର ଉପାଦାନଗୁଡ଼ିକୁ ଆକୃତି ଚିତ୍ର ଦ୍ୱାରା ଦର୍ଶାଇବା ପ୍ରକ୍ରିୟା । ଏଥିରେ ବ୍ୟାପକ ସେଟ୍ E କୁ ଆୟତ ଚିତ୍ର ଦ୍ୱାରା ଓ ତାହାର ଉପସେଟ୍‌ମାନଙ୍କୁ ବୃତ୍ତ ଦ୍ୱାରା ଦର୍ଶାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMMUTATIVE",
            odia: "କ୍ରମବିନିମୟ",
            emoji: "🔄",
            odiaUse: "କ୍ରମବିନିମୟ ଅର୍ଥ ଦୁଇଟି ସେଟ୍‌ର କ୍ରମ ପରିବର୍ତ୍ତନ କଲେ ମଧ୍ୟ ଫଳାଫଳ ସମାନ ରହିବା । ଯଥା A ∪ B = B ∪ A ଓ A ∩ B = B ∩ A ଅର୍ଥାତ୍ ସଂଯୋଗ ଓ ଛେଦ ପ୍ରକ୍ରିୟା କ୍ରମବିନିମୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ASSOCIATIVE",
            odia: "ସହଯୋଗୀ",
            emoji: "🤝",
            odiaUse: "ସହଯୋଗୀ ଅର୍ଥ ତିନୋଟି ସେଟ୍‌କୁ ଯେକୌଣସି ଭାବରେ ଗୋଷ୍ଠୀକୃତ କଲେ ମଧ୍ୟ ଫଳାଫଳ ଅପରିବର୍ତ୍ତିତ ରହିବା । ଯଥା (A ∪ B) ∪ C = A ∪ (B ∪ C) ଅର୍ଥାତ୍ ସଂଯୋଗ ପ୍ରକ୍ରିୟା ସହଯୋଗୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DISTRIBUTIVE LAW",
            odia: "ବଣ୍ଟନ ନିୟମ",
            emoji: "📐",
            odiaUse: "ବଣ୍ଟନ ନିୟମ ଅର୍ଥ ସେଟ୍ ଅଙ୍କରେ ସଂଯୋଗ ଓ ଛେଦ ପ୍ରକ୍ରିୟା ପରସ୍ପରକୁ ବଣ୍ଟନ କରିଥାନ୍ତି । ଯଥା A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) ଓ A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BOOLEAN ALGEBRA",
            odia: "ବୁଲିଆନ୍ ବୀଜଗଣିତ",
            emoji: "🧮",
            odiaUse: "ବୁଲିଆନ୍ ବୀଜଗଣିତ ଅର୍ଥ ସେଟ୍‌ମାନଙ୍କ ମଧ୍ୟରେ ବ୍ୟାକରଣର ବୃଦ୍ଧି ଚାହାଁକୁ ବୁଝାଉଥିବା ବୀଜଗଣିତ, ଯାହା ଗଣିତଜ୍ଞ ଓ ଦର୍ଶନଶାସ୍ତ୍ରବିଦ୍ ଜର୍ଜ ବୁଲ୍ ତାଙ୍କ ନାମରେ ନାମିତ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EMPTY SET",
            odia: "ଶୂନ୍ୟ ସେଟ୍",
            emoji: "⭕",
            odiaUse: "ଶୂନ୍ୟ ସେଟ୍ ଅର୍ଥ କୌଣସି ଉପାଦାନ ନ ଥିବା ସେଟ୍ । ଏହାକୁ ϕ ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯଥା A ∩ ϕ = ϕ ଓ A ∪ ϕ = A ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "IDEMPOTENT",
            odia: "ସ୍ୱ-ପୁନରାବୃତ୍ତି",
            emoji: "🔁",
            odiaUse: "ସ୍ୱ-ପୁନରାବୃତ୍ତି ଅର୍ଥ ଏକ ସେଟ୍ A ର ନିଜ ସହିତ ସଂଯୋଗ ବା ଛେଦ କଲେ ମଧ୍ୟ ସେହି ସେଟ୍ A ହିଁ ରହିବା । ଯଥା A ∪ A = A ଓ A ∩ A = A ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ବ୍ୟାପକ ସେଟ୍ (Universal Set) କ'ଣ ? :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯେତେବେଳେ ଆମେ କୌଣସି ଆଲୋଚନା ପାଇଁ ବିଭିନ୍ନ ସେଟ୍ ନେଉ, ସେତେବେଳେ ସେହି ସବୁ ସେଟ୍ ଏକ ବଡ଼ ସେଟ୍ ଭିତରେ ରହିଥାନ୍ତି । ଏହି ବଡ଼ ସେଟ୍ କୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ ଏବଂ ଏହାକୁ E ଅକ୍ଷରରେ ଦର୍ଶାଯାଏ । ଆଲୋଚନାରେ ରହିଥିବା ପ୍ରତ୍ୟେକ ସେଟ୍ ଏହି E ର ଉପସେଟ୍ ହୋଇଥାଏ ।<br><br>👉 ଉଦାହରଣ: ମନେକର ତୁମେ ତୁମ ଶ୍ରେଣୀର ପିଲାମାନଙ୍କ ବିଷୟରେ କଥା ହେଉଛ । ଏଠାରେ ତୁମ ସମଗ୍ର ଶ୍ରେଣୀ ହେଉଛି ବ୍ୟାପକ ସେଟ୍ । ପିଲାମାନଙ୍କର ଛୋଟ ଛୋଟ ଦଳ (ଯେମିତି ଖେଳାଳି ଦଳ, ପାଠ ଦଳ) ସେହି ବ୍ୟାପକ ସେଟ୍ ର ଉପସେଟ୍ ଅଟନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବ୍ୟାପକ ସେଟ୍ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଆଲୋଚନାରେ ଥିବା ସମସ୍ତ ସେଟ୍ ମାନଙ୍କୁ ନିଜ ଭିତରେ ରଖୁଥିବା ବଡ଼ ସେଟ୍ କୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ବ୍ୟାପକ ସେଟ୍ କୁ କେଉଁ ଅକ୍ଷର ଦ୍ୱାରା ଦର୍ଶାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବ୍ୟାପକ ସେଟ୍ କୁ E ଅକ୍ଷର ଦ୍ୱାରା ଦର୍ଶାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ବ୍ୟାପକ ସେଟ୍ ର ଉପସେଟ୍ ମାନଙ୍କ ମଧ୍ୟରେ କେଉଁ ସମ୍ପର୍କ ରହିଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରତ୍ୟେକ ଆଲୋଚିତ ସେଟ୍ ବ୍ୟାପକ ସେଟ୍ E ର ଉପସେଟ୍ ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-4:</span> ବ୍ୟାପକ ସେଟ୍ ର ଚିତ୍ର ସାଧାରଣତଃ କେଉଁ ଆକୃତିରେ ଅଙ୍କାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବ୍ୟାପକ ସେଟ୍ ର ଚିତ୍ର ସାଧାରଣତଃ ଏକ ଆୟତ ବା ଗୋଲ ଆକୃତି ଦ୍ୱାରା ଅଙ୍କାଯାଏ, ଏବଂ ଭିତରେ ଛୋଟ ଛୋଟ ଚିତ୍ର ଦ୍ୱାରା ଉପସେଟ୍ ମାନଙ୍କୁ ଦେଖାଯାଏ ।"

]
},

{
heading: "NOTE-2: ବ୍ୟାପକ ସେଟ୍ ର ଉଦାହରଣ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ସଂଖ୍ୟା ମାନଙ୍କ ବିଷୟରେ ଆଲୋଚନା କରିବାବେଳେ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ସେଟ୍ (Z) କୁ ପ୍ରାୟତଃ ବ୍ୟାପକ ସେଟ୍ ଭାବେ ନିଆଯାଏ, କାରଣ ଗଣନ ସଂଖ୍ୟା (N), ସ୍ୱାଭାବିକ ସଂଖ୍ୟା (W) ଏମାନେ ସମସ୍ତେ Z ର ଉପସେଟ୍ ଅଟନ୍ତି । କିନ୍ତୁ ଭଗ୍ନାଂଶ ସଂଖ୍ୟା ସେଟ୍ (Q) କୁ ବ୍ୟାପକ ସେଟ୍ ଭାବେ ନିଆଯାଇ ପାରିବ ନାହିଁ, କାରଣ Q ର କେତେକ ଉପସେଟ୍ ରେ ଏମିତି ଉପାଦାନ ରହିପାରନ୍ତି ଯାହା Q ର ମାନ ପାଇଁ ଠିକ୍ ମେଳ ଖାଏ ନାହିଁ ।<br><br>👉 ଉଦାହରଣ: ଯଦି ଆମେ ଗଣନ ସଂଖ୍ୟା ସେଟ୍ N ଓ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ସେଟ୍ Z ନେଇ କାମ କରୁଛୁ, ତେବେ Z କୁ ବ୍ୟାପକ ସେଟ୍ ଭାବେ ନେଇ N କୁ ତାହାର ଉପସେଟ୍ ଭାବେ ଦେଖାଇ ପାରିବା ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> N ସେଟ୍ କ'ଣ ପ୍ରକାଶ କରେ ?<br><br><span style='color:green;'>Answer:</span> N ସେଟ୍ ଗଣନ ସଂଖ୍ୟା (1,2,3,...) ମାନଙ୍କୁ ପ୍ରକାଶ କରେ ।",

"<span style='color:red;'>Q-2:</span> W ବା N* ସେଟ୍ କ'ଣ ପ୍ରକାଶ କରେ ?<br><br><span style='color:green;'>Answer:</span> W ବା N* ସେଟ୍ ଶୂନ୍ୟ ସହିତ ସ୍ୱାଭାବିକ ସଂଖ୍ୟା ମାନଙ୍କୁ ପ୍ରକାଶ କରେ ।",

"<span style='color:red;'>Q-3:</span> Q ସେଟ୍ କୁ ବ୍ୟାପକ ସେଟ୍ ଭାବେ କାହିଁକି ନିଆଯାଇ ପାରିବ ନାହିଁ ?<br><br><span style='color:green;'>Answer:</span> କାରଣ Q ର ଉପସେଟ୍ ମାନଙ୍କରେ ଏମିତି ଉପାଦାନ ରହିପାରନ୍ତି ଯାହା Q ର ମାନ ସହିତ ମେଳ ଖାଏ ନାହିଁ ।",

"<span style='color:red;'>Q-4:</span> ସାଧାରଣତଃ ସଂଖ୍ୟା ସେଟ୍ ମାନଙ୍କ ପାଇଁ କେଉଁ ସେଟ୍ କୁ ବ୍ୟାପକ ସେଟ୍ ଭାବେ ନିଆଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ସେଟ୍ Z କୁ ବ୍ୟାପକ ସେଟ୍ ଭାବେ ନିଆଯାଏ ।"

]
},

{
heading: "NOTE-3: ସେଟ୍ ପ୍ରକ୍ରିୟା - ସଂଯୋଗ (Union) ର ସଂଜ୍ଞା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇଟି ସେଟ୍ ମାନଙ୍କ ମଧ୍ୟରେ ତିନିଗୋଟି ମୁଖ୍ୟ ପ୍ରକ୍ରିୟା ହୁଏ - ସଂଯୋଗ, ଛେଦ ଓ ଅନ୍ତର । ସଂଯୋଗ ପ୍ରକ୍ରିୟାରେ, A ଓ B ସେଟ୍ ର ସମସ୍ତ ଉପାଦାନ ମାନଙ୍କୁ ଏକାଠି ମିଶାଇ ଏକ ନୂଆ ସେଟ୍ ତିଆରି କରାଯାଏ । ଏହାକୁ A ∪ B ଦ୍ୱାରା ଲେଖାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ମନେକର A ରେ ତୁମ ପାଖରେ ଥିବା ପେନ୍‌ ମାନେ ଅଛନ୍ତି ଓ B ରେ ତୁମ ବନ୍ଧୁ ପାଖରେ ଥିବା ପେନ୍‌ ମାନେ ଅଛନ୍ତି । ଯଦି ତୁମେ ଦୁହେଁ ନିଜ ନିଜ ପେନ୍‌ ମାନଙ୍କୁ ଏକାଠି ରଖ, ତେବେ ସେହି ସମସ୍ତ ପେନ୍‌ ମିଶି A ∪ B ସେଟ୍ ତିଆରି ହେବ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସେଟ୍ ମାନଙ୍କ ମଧ୍ୟରେ କେଉଁ ତିନିଗୋଟି ପ୍ରକ୍ରିୟା ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ସେଟ୍ ମାନଙ୍କ ମଧ୍ୟରେ ସଂଯୋଗ, ଛେଦ ଓ ଅନ୍ତର - ଏହି ତିନିଗୋଟି ପ୍ରକ୍ରିୟା ହୁଏ ।",

"<span style='color:red;'>Q-2:</span> ସଂଯୋଗ (Union) ପ୍ରକ୍ରିୟାରେ କ'ଣ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ସଂଯୋଗ ପ୍ରକ୍ରିୟାରେ ଦୁଇଟି ସେଟ୍ ର ସମସ୍ତ ଉପାଦାନ ମାନଙ୍କୁ ଏକାଠି ମିଶାଇ ନୂଆ ସେଟ୍ ତିଆରି କରାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> A ଓ B ର ସଂଯୋଗ ସେଟ୍ କୁ କିପରି ଲେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> A ଓ B ର ସଂଯୋଗ ସେଟ୍ କୁ A ∪ B ଲେଖାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ସେଟ୍ ପ୍ରକ୍ରିୟା ମାନଙ୍କ ବିଚାର କରୁଥିବା ବୀଜଗଣିତ କାହା ନାମରେ ନାମିତ ?<br><br><span style='color:green;'>Answer:</span> ଏହି ବୀଜଗଣିତ ଗଣିତଜ୍ଞ ଜର୍ଜ ବୁଲ୍ (George Boole) ଙ୍କ ନାମରେ ବୁଲିଆନ ବୀଜଗଣିତ (Boolean Algebra) ନାମରେ ନାମିତ ।"

]
},

{
heading: "NOTE-4: ସଂଯୋଗ (Union) ର ଉଦାହରଣ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ସଂଯୋଗ ସେଟ୍ ତିଆରି କରିବାକୁ ହେଲେ ଦୁଇଟି ସେଟ୍ ର ସମସ୍ତ ଉପାଦାନ ମାନଙ୍କୁ ଲେଖ, କିନ୍ତୁ ଯଦି କୌଣସି ଉପାଦାନ ଦୁଇଟି ସେଟ୍ ରେ ହିଁ ଥାଏ, ତେବେ ତାହାକୁ ଥରକ ହିଁ ଲେଖ । ଏହା ଉଭୟ ସେଟ୍ ର ସମସ୍ତ ଅଲଗା ଅଲଗା ଉପାଦାନ ମାନଙ୍କୁ ଏକାଠି ରଖେ ।<br><br>👉 ଉଦାହରଣ: A = {1,2,3,4} ଓ B = {2,4,6,8} ହେଲେ, A ∪ B = {1,2,3,4,6,8} ହେବ, କାରଣ 2 ଓ 4 ଦୁଇଟି ସେଟ୍ ରେ ଥିଲେ ମଧ୍ୟ ଥରକ ହିଁ ଲେଖାଯାଇଛି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> A = {a,b,c} ଓ B = {d,e,f,g} ହେଲେ ଏମାନଙ୍କ ସଂଯୋଗ ସେଟ୍ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ∪ B = {a,b,c,d,e,f,g} ହେବ ।",

"<span style='color:red;'>Q-2:</span> ଦୁଇଟି ସେଟ୍ ର ସଂଯୋଗ ସେଟ୍ ଗଠନ କରିବାକୁ କ'ଣ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ସେଟ୍ ର ସମସ୍ତ ଉପାଦାନ ମାନଙ୍କୁ ମିଶାଯାଏ ଏବଂ ସାଧାରଣ ଉପାଦାନ ମାନଙ୍କୁ ଥରକ ହିଁ ରଖାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> A = {p,q,r} ଓ B = {p,q,r,s} ହେଲେ ଏମାନଙ୍କ ସଂଯୋଗ ସେଟ୍ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ∪ B = {p,q,r,s} ହେବ ।",

"<span style='color:red;'>Q-4:</span> ଦୁଇଟି ସେଟ୍ ମାନଙ୍କ ମଧ୍ୟରେ ସାଧାରଣ ଉପାଦାନ ଥିଲେ ସଂଯୋଗ ସେଟ୍ ରେ ସେଗୁଡିକୁ କେତେ ଥର ଲେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ସାଧାରଣ ଉପାଦାନ ମାନଙ୍କୁ ସଂଯୋଗ ସେଟ୍ ରେ କେବଳ ଥରକ ହିଁ ଲେଖାଯାଏ ।"

]
},

{
heading: "NOTE-5: ସଂଯୋଗ ସମ୍ବନ୍ଧୀୟ ତଥ୍ୟ ଓ ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ସଂଯୋଗ ପ୍ରକ୍ରିୟା ବିଷୟରେ କେତେକ ମହତ୍ୱପୂର୍ଣ୍ଣ ତଥ୍ୟ ଅଛି - ଯଦି A, B ର ଉପସେଟ୍, ତେବେ A ∪ B = B ହୁଏ । ଯେକୌଣସି ସେଟ୍ ର ନିଜ ସହିତ ସଂଯୋଗ ସେହି ସେଟ୍ ହିଁ ହୁଏ (A ∪ A = A) । ଶୂନ୍ୟ ସେଟ୍ ସହିତ ସଂଯୋଗ କଲେ ମଧ୍ୟ ସେଟ୍ ଅପରିବର୍ତ୍ତିତ ରହେ (A ∪ φ = A) । ସଂଯୋଗ ପ୍ରକ୍ରିୟା କ୍ରମ ବିନିମୟ ନିୟମ (A ∪ B = B ∪ A) ଏବଂ ସହଯୋଗ ନିୟମ ((A ∪ B) ∪ C = A ∪ (B ∪ C)) ପାଳନ କରେ ।<br><br>👉 ଉଦାହରଣ: A = {1,2,3}, B = {3,4,5,6} ଓ C = {6,7,8} ନେଲେ, (A ∪ B) ∪ C ଓ A ∪ (B ∪ C) ଦୁହେଁ ସମାନ {1,2,3,4,5,6,7,8} ହୁଅନ୍ତି, ଯାହା ସହଯୋଗ ନିୟମକୁ ପ୍ରମାଣ କରେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> A ⊂ B ହେଲେ A ଓ B ର ସଂଯୋଗ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ⊂ B ହେଲେ A ∪ B = B ହେବ ।",

"<span style='color:red;'>Q-2:</span> ଶୂନ୍ୟ ସେଟ୍ ସହିତ ଯେକୌଣସି ସେଟ୍ A ର ସଂଯୋଗ କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> A ∪ φ = A ହୁଏ, ଅର୍ଥାତ୍ ସେଟ୍ ଅପରିବର୍ତ୍ତିତ ରହେ ।",

"<span style='color:red;'>Q-3:</span> ସଂଯୋଗ ପ୍ରକ୍ରିୟା ର କ୍ରମ ବିନିମୟ ନିୟମ କ'ଣ କୁହେ ?<br><br><span style='color:green;'>Answer:</span> ଏହି ନିୟମ କୁହେ ଯେ A ∪ B = B ∪ A, ଅର୍ଥାତ୍ ସେଟ୍ ମାନଙ୍କ କ୍ରମ ବଦଳାଇଲେ ମଧ୍ୟ ସଂଯୋଗ ସେଟ୍ ସମାନ ରହେ ।",

"<span style='color:red;'>Q-4:</span> ସଂଯୋଗ ପ୍ରକ୍ରିୟା ର ସହଯୋଗ ନିୟମ କେଉଁ ସୂତ୍ର ଦ୍ୱାରା ପ୍ରକାଶ ପାଏ ?<br><br><span style='color:green;'>Answer:</span> ସହଯୋଗ ନିୟମ (A ∪ B) ∪ C = A ∪ (B ∪ C) ସୂତ୍ର ଦ୍ୱାରା ପ୍ରକାଶ ପାଏ ।"

]
},

{
heading: "NOTE-6: ଛେଦ (Intersection) ର ସଂଜ୍ଞା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଛେଦ ପ୍ରକ୍ରିୟାରେ ଦୁଇଟି ସେଟ୍ A ଓ B ର କେବଳ ସାଧାରଣ ଉପାଦାନ ମାନଙ୍କୁ ନେଇ ଏକ ନୂଆ ସେଟ୍ ତିଆରି କରାଯାଏ । ଏହାକୁ A ∩ B ଲେଖାଯାଏ । ଯଦି ଦୁଇଟି ସେଟ୍ ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଏ, ତେବେ ସେମାନଙ୍କୁ ଅଣଛେଦା ସେଟ୍ (Disjoint set) କୁହାଯାଏ ଓ ଛେଦ ଫଳ ଶୂନ୍ୟ ସେଟ୍ ହୁଏ ।<br><br>👉 ଉଦାହରଣ: ମନେକର A ରେ ତୁମର ପସନ୍ଦ ଥିବା ଫଳ ମାନେ ଅଛନ୍ତି ଓ B ରେ ତୁମ ବନ୍ଧୁ ର ପସନ୍ଦ ଥିବା ଫଳ ମାନେ ଅଛନ୍ତି । ଯେଉଁ ଫଳ ଦୁହିଁଙ୍କୁ ମିଳିତ ଭାବେ ପସନ୍ଦ, ସେହି ଫଳ ମାନେ A ∩ B ସେଟ୍ ରେ ରହିବେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଛେଦ (Intersection) ପ୍ରକ୍ରିୟାରେ କ'ଣ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଛେଦ ପ୍ରକ୍ରିୟାରେ ଦୁଇଟି ସେଟ୍ ର କେବଳ ସାଧାରଣ ଉପାଦାନ ମାନଙ୍କୁ ନେଇ ନୂଆ ସେଟ୍ ତିଆରି କରାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> A ଓ B ର ଛେଦ ସେଟ୍ କୁ କିପରି ଲେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> A ଓ B ର ଛେଦ ସେଟ୍ କୁ A ∩ B ଲେଖାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଅଣଛେଦା ସେଟ୍ (Disjoint set) କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ଦୁଇଟି ସେଟ୍ ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଏ, ସେମାନଙ୍କୁ ଅଣଛେଦା ସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ଦୁଇଟି ସେଟ୍ ମଧ୍ୟରେ ସାଧାରଣ ଉପାଦାନ ନ ଥିଲେ ସେମାନଙ୍କ ଛେଦ ସେଟ୍ କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ସେମାନଙ୍କ ଛେଦ ସେଟ୍ ଶୂନ୍ୟ ସେଟ୍ (φ) ହୁଏ ।"

]
},

{
heading: "NOTE-7: ଛେଦ (Intersection) ର ଉଦାହରଣ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଛେଦ ସେଟ୍ ବାହାର କରିବାକୁ ହେଲେ ଦୁଇଟି ସେଟ୍ ମାନଙ୍କୁ ମେଳାଇ ଦେଖ ଯେ କେଉଁ ଉପାଦାନ ଦୁହିଁଙ୍କଠାରେ ଅଛି । ସେହି ସାଧାରଣ ଉପାଦାନ ମାନଙ୍କୁ ନେଇ ଛେଦ ସେଟ୍ ତିଆରି ହୁଏ ।<br><br>👉 ଉଦାହରଣ: A = {1,2,3} ଓ B = {1,3,5} ହେଲେ, ଉଭୟଙ୍କଠାରେ 1 ଓ 3 ସାଧାରଣ ଅଛନ୍ତି, ତେଣୁ A ∩ B = {1,3} ହେବ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> A = {1,2,3} ଓ B = {1,3,5} ହେଲେ ଏମାନଙ୍କ ଛେଦ ସେଟ୍ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ∩ B = {1,3} ହେବ ।",

"<span style='color:red;'>Q-2:</span> A = {a,b,c} ଓ B = {a,b,c,d,e} ହେଲେ ଏମାନଙ୍କ ଛେଦ ସେଟ୍ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ∩ B = {a,b,c} ହେବ ।",

"<span style='color:red;'>Q-3:</span> A = {p,q} ଓ B = {r,s,t} ହେଲେ ଏମାନଙ୍କ ଛେଦ ସେଟ୍ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ∩ B = φ ହେବ, କାରଣ ଉଭୟଙ୍କଠାରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନାହିଁ ।",

"<span style='color:red;'>Q-4:</span> ଛେଦ ସେଟ୍ ଗଠନ କରିବାକୁ ଆମେ କେଉଁ ଉପାଦାନ ମାନଙ୍କୁ ବାଛିବା ?<br><br><span style='color:green;'>Answer:</span> ଆମେ ଦୁଇଟି ସେଟ୍ ରେ ଏକାସାଙ୍ଗରେ ଥିବା ସାଧାରଣ ଉପାଦାନ ମାନଙ୍କୁ ବାଛିବା ।"

]
},

{
heading: "NOTE-8: ଛେଦ ସମ୍ବନ୍ଧୀୟ ତଥ୍ୟ ଓ ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଛେଦ ପ୍ରକ୍ରିୟା ବିଷୟରେ କେତେକ ମହତ୍ୱପୂର୍ଣ୍ଣ ତଥ୍ୟ ଅଛି - ଯଦି A, B ର ଉପସେଟ୍, ତେବେ A ∩ B = A ହୁଏ । ଯେକୌଣସି ସେଟ୍ ର ନିଜ ସହିତ ଛେଦ ସେହି ସେଟ୍ ହିଁ ହୁଏ (A ∩ A = A) । ଶୂନ୍ୟ ସେଟ୍ ସହିତ ଛେଦ କଲେ ସର୍ବଦା ଶୂନ୍ୟ ସେଟ୍ ମିଳେ (A ∩ φ = φ) । ଛେଦ ପ୍ରକ୍ରିୟା ମଧ୍ୟ କ୍ରମ ବିନିମୟ ନିୟମ (A ∩ B = B ∩ A) ଓ ସହଯୋଗ ନିୟମ ((A ∩ B) ∩ C = A ∩ (B ∩ C)) ପାଳନ କରେ ।<br><br>👉 ଉଦାହରଣ: A = {a,b,c}, B = {b,c,d,e} ଓ C = {a,b,c,d} ନେଲେ, (A ∩ B) ∩ C ଓ A ∩ (B ∩ C) ଦୁହେଁ ସମାନ {b,c} ହୁଅନ୍ତି, ଯାହା ସହଯୋଗ ନିୟମକୁ ପ୍ରମାଣ କରେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> A ⊂ B ହେଲେ A ଓ B ର ଛେଦ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ⊂ B ହେଲେ A ∩ B = A ହେବ ।",

"<span style='color:red;'>Q-2:</span> ଯେକୌଣସି ସେଟ୍ A ର ନିଜ ସହିତ ଛେଦ କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> A ∩ A = A ହୁଏ ।",

"<span style='color:red;'>Q-3:</span> ଛେଦ ପ୍ରକ୍ରିୟା ର କ୍ରମ ବିନିମୟ ନିୟମ କ'ଣ କୁହେ ?<br><br><span style='color:green;'>Answer:</span> ଏହି ନିୟମ କୁହେ ଯେ A ∩ B = B ∩ A ।",

"<span style='color:red;'>Q-4:</span> ଛେଦ ପ୍ରକ୍ରିୟା ର ସହଯୋଗ ନିୟମ କେଉଁ ସୂତ୍ର ଦ୍ୱାରା ପ୍ରକାଶ ପାଏ ?<br><br><span style='color:green;'>Answer:</span> ସହଯୋଗ ନିୟମ (A ∩ B) ∩ C = A ∩ (B ∩ C) ସୂତ୍ର ଦ୍ୱାରା ପ୍ରକାଶ ପାଏ ।"

]
},

{
heading: "NOTE-9: ବଣ୍ଟନ ନିୟମ (Distributive Law) :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବଣ୍ଟନ ନିୟମ ଅନୁସାରେ, ତିନୋଟି ସେଟ୍ A, B ଓ C ପାଇଁ, A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) ହୁଏ, ଅର୍ଥାତ୍ ସଂଯୋଗ ଛେଦକୁ ବଣ୍ଟନ କରେ । ସେହିପରି A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) ହୁଏ, ଅର୍ଥାତ୍ ଛେଦ ସଂଯୋଗକୁ ବଣ୍ଟନ କରେ । ସାଧାରଣ ସଂଖ୍ୟା ବୀଜଗଣିତରେ ଗୁଣନ ମାତ୍ର ଯୋଗକୁ ବଣ୍ଟନ କରେ, ଯୋଗ ଗୁଣନକୁ ବଣ୍ଟନ କରେ ନାହିଁ, କିନ୍ତୁ ସେଟ୍ ପ୍ରକ୍ରିୟାରେ ସଂଯୋଗ ଓ ଛେଦ ଉଭୟ ପରସ୍ପରକୁ ବଣ୍ଟନ କରନ୍ତି ।<br><br>👉 ଉଦାହରଣ: A = {1,2,3,4}, B = {3,4,5,6} ଓ C = {1,3,5} ନେଲେ, A ∪ (B ∩ C) ଓ (A ∪ B) ∩ (A ∪ C) ଦୁହେଁ ସମାନ {1,2,3,4,5} ହୁଅନ୍ତି, ଯାହା ବଣ୍ଟନ ନିୟମକୁ ପ୍ରମାଣ କରେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବଣ୍ଟନ ନିୟମ ର ପ୍ରଥମ ସୂତ୍ର କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ପ୍ରଥମ ସୂତ୍ର ହେଉଛି A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) ।",

"<span style='color:red;'>Q-2:</span> ବଣ୍ଟନ ନିୟମ ର ଦ୍ୱିତୀୟ ସୂତ୍ର କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଦ୍ୱିତୀୟ ସୂତ୍ର ହେଉଛି A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) ।",

"<span style='color:red;'>Q-3:</span> ସାଧାରଣ ସଂଖ୍ୟା ବୀଜଗଣିତରେ ଗୁଣନ କେଉଁ କ୍ରିୟାକୁ ବଣ୍ଟନ କରେ ?<br><br><span style='color:green;'>Answer:</span> ସାଧାରଣ ସଂଖ୍ୟା ବୀଜଗଣିତରେ ଗୁଣନ ଯୋଗକୁ ବଣ୍ଟନ କରେ ।",

"<span style='color:red;'>Q-4:</span> ସେଟ୍ ପ୍ରକ୍ରିୟାରେ ସଂଯୋଗ ଓ ଛେଦ ପରସ୍ପରକୁ କିପରି ବଣ୍ଟନ କରନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ସେଟ୍ ପ୍ରକ୍ରିୟାରେ ସଂଯୋଗ ଛେଦକୁ ଏବଂ ଛେଦ ସଂଯୋଗକୁ ଉଭୟ ପାର୍ଶ୍ୱରୁ ବଣ୍ଟନ କରନ୍ତି ।"

]
},

{
heading: "NOTE-10: ଅନ୍ତର (Difference) ର ସଂଜ୍ଞା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇଟି ସେଟ୍ A ଓ B ପାଇଁ, A ର ଯେଉଁ ଉପାଦାନ ମାନେ B ରେ ନାହାନ୍ତି, ସେମାନଙ୍କୁ ନେଇ ଗଠିତ ସେଟ୍ କୁ A ଅନ୍ତର B (A - B) କୁହାଯାଏ । ସେହିପରି B ର ଯେଉଁ ଉପାଦାନ ମାନେ A ରେ ନାହାନ୍ତି, ସେମାନଙ୍କୁ ନେଇ B - A ସେଟ୍ ତିଆରି ହୁଏ । ଏଠାରେ ମନେ ରଖିବାକୁ ହେବ ଯେ A - B ଓ B - A ସାଧାରଣତଃ ସମାନ ହୁଅନ୍ତି ନାହିଁ ।<br><br>👉 ଉଦାହରଣ: A = {1,2,3,4} ଓ B = {3,4,5,6} ହେଲେ, A - B = {1,2} ହେବ (କାରଣ 1,2 କେବଳ A ରେ ଅଛନ୍ତି), ଏବଂ B - A = {5,6} ହେବ (କାରଣ 5,6 କେବଳ B ରେ ଅଛନ୍ତି) ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅନ୍ତର ସେଟ୍ A - B କ'ଣ ପ୍ରକାଶ କରେ ?<br><br><span style='color:green;'>Answer:</span> A - B ସେଟ୍ A ର ଯେଉଁ ଉପାଦାନ ମାନେ B ରେ ନାହାନ୍ତି, ସେମାନଙ୍କୁ ପ୍ରକାଶ କରେ ।",

"<span style='color:red;'>Q-2:</span> A = {1,2,3,4} ଓ B = {3,4,5,6} ହେଲେ A - B କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A - B = {1,2} ହେବ ।",

"<span style='color:red;'>Q-3:</span> B - A ସେଟ୍ ରେ କେଉଁ ଉପାଦାନ ମାନେ ରହନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> B - A ସେଟ୍ ରେ B ର ସେହି ଉପାଦାନ ମାନେ ରହନ୍ତି ଯାହା A ରେ ନାହାନ୍ତି ।",

"<span style='color:red;'>Q-4:</span> A ⊂ B ହେଲେ A - B ସେଟ୍ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ⊂ B ହେଲେ A - B = φ (ଶୂନ୍ୟ ସେଟ୍) ହେବ ।"

]
},

{
heading: "NOTE-11: ଅନ୍ତର ସମ୍ବନ୍ଧୀୟ ତଥ୍ୟ ଓ ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯେକୌଣସି ସେଟ୍ A ପାଇଁ A - A = φ ହୁଏ । ଯେକୌଣସି ଦୁଇଟି ସେଟ୍ A ଓ B ପାଇଁ, A - B, B - A ଓ A ∩ B ଏହି ତିନୋଟି ସେଟ୍ ପରସ୍ପର ମଧ୍ୟରେ ଅଣଛେଦା ରହନ୍ତି, ଅର୍ଥାତ୍ ସେମାନଙ୍କ ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଏ । ଅନ୍ତର ପ୍ରକ୍ରିୟା କ୍ରମ ବିନିମୟ ନିୟମ ପାଳନ କରେ ନାହିଁ, ଅର୍ଥାତ୍ A - B ଓ B - A ସାଧାରଣତଃ ଭିନ୍ନ ହୁଅନ୍ତି । ଅନ୍ତର ପ୍ରକ୍ରିୟା ସହଯୋଗ ନିୟମ ମଧ୍ୟ ପାଳନ କରେ ନାହିଁ ।<br><br>👉 ଉଦାହରଣ: A = {1,2} ଓ B = {2,3} ହେଲେ, A - B = {1} ଓ B - A = {3} ହୁଏ - ଏହା ଦୁହେଁ ଭିନ୍ନ ଅଟନ୍ତି । ସେହିପରି A = {1,2}, B = {2} ଓ C = {2,3} ହେଲେ, A - (B - C) ଓ (A - B) - C ମଧ୍ୟ ଭିନ୍ନ ମାନ ଦିଅନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଯେକୌଣସି ସେଟ୍ A ପାଇଁ A - A କ'ଣ ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> A - A = φ (ଶୂନ୍ୟ ସେଟ୍) ହୁଏ ।",

"<span style='color:red;'>Q-2:</span> A - B, B - A ଓ A ∩ B ଏହି ତିନୋଟି ସେଟ୍ ପରସ୍ପର ମଧ୍ୟରେ କେଉଁ ସମ୍ପର୍କ ରଖନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଏହି ତିନୋଟି ସେଟ୍ ପରସ୍ପର ମଧ୍ୟରେ ଅଣଛେଦା ରହନ୍ତି, ଅର୍ଥାତ୍ ସେମାନଙ୍କର କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଏ ।",

"<span style='color:red;'>Q-3:</span> A = {1,2}, B = {2,3} ହେଲେ A - B ଓ B - A ର ମାନ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A - B = {1} ଓ B - A = {3} ହେବ, ଯାହା ପ୍ରମାଣ କରେ ଯେ ଅନ୍ତର ପ୍ରକ୍ରିୟାରେ କ୍ରମ ବିନିମୟ ନିୟମ ପାଳନ ହୁଏ ନାହିଁ ।",

"<span style='color:red;'>Q-4:</span> A = {1,2}, B = {2}, C = {2,3} ହେଲେ A - (B - C) ର ମାନ କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> B - C = φ ହୋଇଥିବାରୁ A - (B - C) = A - φ = {1,2} ହେବ ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ବ୍ୟାପକ ସେଟ୍<br/>(Universal Set)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଆଲୋଚନା\"]\nA --> I1[\"ବିଭିନ୍ନ ପୁସ୍ତକ ମାନଙ୍କ ସେଟ୍<br/>ନେଇ ଆଲୋଚନା ହୋଇଥାଏ।\"]\nA --> I2[\"ବୀଜଗଣିତ, ଜ୍ୟାମିତି, ପ୍ରୟୋଗ<br/>ଆଦି ପୁସ୍ତକ ଏଥିରେ ଅଛନ୍ତି।\"]\nA --> I3[\"ପ୍ରତ୍ୟେକ ପୁସ୍ତକ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ<br/>ସେଟ୍ E ର ଉପାଦାନ ହୁଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ବ୍ୟାପକ ସେଟ୍ ସଂଜ୍ଞା\"]\nM --> M1[\"ଆଲୋଚନାର ପରିସର ମଧ୍ୟରେ<br/>ପ୍ରତ୍ୟେକ ବସ୍ତୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ<br/>ସେଟ୍ E ର ଉପାଦାନ ହେଲେ<br/>E କୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ।\"]\nM --> M2[\"E କୁ ଆୟତ ଚିତ୍ର ଓ<br/>ଉପସେଟ୍କୁ ବୃତ୍ତ ଦ୍ୱାରା<br/>ଦର୍ଶାଯାଏ।\"]\nM --> M3[\"ଉଦାହରଣ: N (ଗଣନ ସଂଖ୍ୟା)<br/>ପାଇଁ N*/W, Z, S ଉପସେଟ୍।\"]\nM --> M4[\"S = {1/n | n∈N, n≠1}<br/>ଏକ ଉପସେଟ୍ ଅଟେ।\"]\nM --> M5[\"ପରିମେୟ ସଂଖ୍ୟା Q କୁ<br/>ବ୍ୟାପକ ସେଟ୍ ନିଆଯାଇ ପାରେ ନାହିଁ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 କାରଣ\"]\nC --> C1[\"କାରଣ ଅନେକ ଅପରିମେୟ<br/>ସଂଖ୍ୟା Q ର ବାହାରେ ଥାଏ।\"]\nC --> C2[\"ତେଣୁ Q ସବୁ ସଂଖ୍ୟା ସେଟ୍କୁ<br/>ଅନ୍ତର୍ଭୁକ୍ତ କରି ପାରେ ନାହିଁ।\"]\nC --> C3[\"ବ୍ୟାପକ ସେଟ୍ ସର୍ବଦା<br/>ଆଲୋଚନା ଅନୁସାରେ ବଦଳେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ସେଟ୍ ପ୍ରକ୍ରିୟା ଓ<br/>ସଂଯୋଗ (Union)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ସେଟ୍ ପ୍ରକ୍ରିୟା\"]\nA --> I1[\"ଦୁଇଟି ସେଟ୍ A ଓ B ନେଇ<br/>ତିନିଗୋଟି ଦ୍ୱୈତ ପ୍ରକ୍ରିୟା ହୁଏ।\"]\nA --> I2[\"ସଂଯୋଗ, ଛେଦ ଓ ଅନ୍ତର<br/>ଏହି ତିନି ପ୍ରକ୍ରିୟା।\"]\nA --> I3[\"ବୀଜଗଣିତ (Boolean Algebra)<br/>ଏଥିରୁ ଉତ୍ପନ୍ନ; ପ୍ରଖ୍ୟାତ ଗଣିତଜ୍ଞ<br/>George Boole (1815-1866) ନାମରେ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ସଂଯୋଗ (Union)\"]\nM --> M1[\"A ଓ B ର ସମସ୍ତ ଉପାଦାନ<br/>ମିଶାଇ ଗଠିତ ସେଟ୍।\"]\nM --> M2[\"A ∪ B = {x | x ∈ A<br/>ବା x ∈ B}\"]\nM --> M3[\"A,B = {a,b,c},{d,e,f,g}<br/>ହେଲେ A∪B={a,b,c,d,e,f,g}\"]\nM --> M4[\"A ⊂ B ହେଲେ A∪B=B;<br/>B ⊂ A ହେଲେ A∪B=A\"]\nM --> M5[\"A∪A=A; A∪ϕ=A;<br/>A⊂A∪B, B⊂A∪B\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସଂଯୋଗର ନିୟମ\"]\nC --> C1[\"କ୍ରମବିନିମୟ ନିୟମ:<br/>A ∪ B = B ∪ A\"]\nC --> C2[\"ସହଯୋଗୀ ନିୟମ:<br/>(A∪B)∪C = A∪(B∪C)\"]\nC --> C3[\"ଉଦାହରଣ ମାଧ୍ୟମରେ ଏହା<br/>ପ୍ରମାଣିତ ହୋଇପାରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>ଛେଦ<br/>(Intersection)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପର୍ଯ୍ୟବେକ୍ଷଣ\"]\nA --> I1[\"A ଓ B ସେଟ୍ ଦ୍ୱୟରେ ଥିବା<br/>ସାଧାରଣ ଉପାଦାନ ଦେଖାଯାଏ।\"]\nA --> I2[\"ଉଭୟ ସେଟ୍ରେ ଥିବା<br/>ଉପାଦାନ ନେଇ ନୂଆ ସେଟ୍ ହୁଏ।\"]\nA --> I3[\"ସାଧାରଣ ଉପାଦାନ ନ ଥିଲେ<br/>ସେଟ୍ ଅଣଛେଦା (Disjoint) ହୁଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଛେଦର ସଂଜ୍ଞା\"]\nM --> M1[\"A ଓ B ର ସାଧାରଣ ଉପାଦାନ<br/>ନେଇ ଗଠିତ ସେଟ୍କୁ ଛେଦ କୁହାଯାଏ।\"]\nM --> M2[\"A ∩ B = {x | x∈A<br/>ଏବଂ x∈B}\"]\nM --> M3[\"A={1,2,3}, B={1,3,5}<br/>ହେଲେ A∩B={1,3}\"]\nM --> M4[\"A⊂B ହେଲେ A∩B=A;<br/>B⊂A ହେଲେ A∩B=B\"]\nM --> M5[\"A∩A=A; A∩ϕ=ϕ;<br/>A∩B⊂A ଏବଂ A∩B⊂B\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ଛେଦର ନିୟମ\"]\nC --> C1[\"କ୍ରମବିନିମୟ ନିୟମ:<br/>A ∩ B = B ∩ A\"]\nC --> C2[\"ସହଯୋଗୀ ନିୟମ:<br/>(A∩B)∩C = A∩(B∩C)\"]\nC --> C3[\"ଉଦାହରଣ ମାଧ୍ୟମରେ ଏହା<br/>ପ୍ରମାଣିତ ହୋଇପାରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-4:<br/>ବଣ୍ଟନ ନିୟମ<br/>(Distributive Law)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ପରୀକ୍ଷଣ\"]\nA --> I1[\"A, B, C ତିନିଗୋଟି<br/>ସେଟ୍ ନିଆଯାଏ।\"]\nA --> I2[\"ସଂଯୋଗ ଓ ଛେଦ ପ୍ରକ୍ରିୟାକୁ<br/>ମିଶାଇ ପରୀକ୍ଷା କରାଯାଏ।\"]\nA --> I3[\"ଉଭୟ ପାର୍ଶ୍ୱର ଫଳାଫଳ<br/>ତୁଳନା କରାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ବଣ୍ଟନ ନିୟମ\"]\nM --> M1[\"A∪(B∩C) =<br/>(A∪B)∩(A∪C)\"]\nM --> M2[\"ଅର୍ଥାତ୍ ସଂଯୋଗ ଛେଦକୁ<br/>ବଣ୍ଟନ କରେ।\"]\nM --> M3[\"A∩(B∪C) =<br/>(A∩B)∪(A∩C)\"]\nM --> M4[\"ଅର୍ଥାତ୍ ଛେଦ ସଂଯୋଗକୁ<br/>ବଣ୍ଟନ କରେ।\"]\nM --> M5[\"ସଂଖ୍ୟାରେ x(y+z)=xy+xz<br/>ମାତ୍ର x+(yz)≠(x+y)(x+z)।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ମାତ୍ର ସେଟ୍ରେ ଉଭୟ<br/>ସଂଯୋଗ ଓ ଛେଦ ପରସ୍ପରକୁ<br/>ବଣ୍ଟନ କରନ୍ତି।\"]\nC --> C2[\"ଏହା ସାଧାରଣ ବୀଜଗଣିତଠାରୁ<br/>ଏକ ବିଶେଷ ପାର୍ଥକ୍ୟ।\"]\nC --> C3[\"ଉଦାହରଣ ମାଧ୍ୟମରେ ଏହା<br/>ପ୍ରମାଣିତ ହୋଇପାରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-5:<br/>ଅନ୍ତର<br/>(Difference)\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଆଲୋଚନା\"]\nA --> I1[\"A ଓ B ଦୁଇଟି<br/>ତୁଲ୍ୟ ସେଟ୍ ନିଆଯାଏ।\"]\nA --> I2[\"A ର ଉପାଦାନ ମଧ୍ୟରୁ B ରେ<br/>ନଥିବା ଉପାଦାନ ଦେଖାଯାଏ।\"]\nA --> I3[\"ସେହି ଉପାଦାନ ନେଇ<br/>ନୂଆ ସେଟ୍ ଗଠନ ହୁଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଅନ୍ତରର ସଂଜ୍ଞା\"]\nM --> M1[\"A ଅନ୍ତର B: A ର ଉପାଦାନ<br/>ମଧ୍ୟରୁ B ରେ ନାହିଁ ଥିବା ସେଟ୍।\"]\nM --> M2[\"A − B = {x | x∈A<br/>ଏବଂ x∉B}\"]\nM --> M3[\"A={1,2,3,4}, B={3,4,5,6}<br/>ହେଲେ A−B={1,2}, B−A={5,6}\"]\nM --> M4[\"A−A=ϕ ସର୍ବଦା ସତ୍ୟ।\"]\nM --> M5[\"A⊂B ହେଲେ A−B=ϕ ହୁଏ<br/>(A−B ଶୂନ୍ୟସେଟ୍)।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଅନ୍ତର କ୍ରମବିନିମୟ ନୁହେଁ:<br/>A − B ≠ B − A\"]\nC --> C2[\"A={1,2},B={2,3} ହେଲେ<br/>A−B={1}, B−A={3}\"]\nC --> C3[\"ଚିତ୍ର ମାଧ୍ୟମରେ ବିଭିନ୍ନ<br/>ପରିସ୍ଥିତିରେ A−B ଦେଖାଯାଏ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-6:<br/>ଅନ୍ତରର ଅଧିକ<br/>ବିଶେଷତା\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଆଲୋଚନା\"]\nA --> I1[\"A ଓ B ଯେକୌଣସି<br/>ଦୁଇଟି ସେଟ୍ ନିଆଯାଏ।\"]\nA --> I2[\"A−B, B−A ଓ A∩B<br/>ତିନୋଟି ସେଟ୍ ତୁଳନା ହୁଏ।\"]\nA --> I3[\"ଏମାନଙ୍କ ମଧ୍ୟରେ ଥିବା<br/>ସମ୍ପର୍କ ଦେଖାଯାଏ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ମୁଖ୍ୟ ସମ୍ପର୍କ\"]\nM --> M1[\"(A−B) ∩ (B−A) = ϕ\"]\nM --> M2[\"(A−B) ∩ (A∩B) = ϕ\"]\nM --> M3[\"(B−A) ∩ (A∩B) = ϕ\"]\nM --> M4[\"A−B, B−A ଓ A∩B<br/>ପରସ୍ପର ଅଣଛେଦା ଅଟନ୍ତି।\"]\nM --> M5[\"A−B = A−(A∩B),<br/>B−A = B−(A∩B)\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଅନ୍ତର ପ୍ରକ୍ରିୟା ସହଯୋଗୀ<br/>ନୁହେଁ: A−(B−C) ≠ (A−B)−C\"]\nC --> C2[\"A={1,2},B={2},C={2,3}<br/>ହେଲେ A−(B−C)={1,2}\"]\nC --> C3[\"ମାତ୍ର (A−B)−C = {1}<br/>ଅର୍ଥାତ୍ ଉଭୟ ଭିନ୍ନ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
      
}  
]
};  
