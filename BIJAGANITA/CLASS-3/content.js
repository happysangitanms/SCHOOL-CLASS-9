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
text:"👉 ଧାରଣା: ଆଲୋଚନା କରିବା ସମୟରେ ଆମେ ଏକ ବଡ଼ ସେଟ୍ କଳ୍ପନା କରୁ, ଯାହାକୁ E ବୋଲି ଡକାଯାଏ । ଆଲୋଚନାରେ ଥିବା ପ୍ରତ୍ୟେକ ସେଟ୍ ଏହି E ର ଉପସେଟ୍ ହୋଇଥାଏ । ଏହି E କୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ମନେକର, N ପ୍ରାକୃତିକ ସଂଖ୍ୟା ସେଟ୍ ଓ Z ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ସେଟ୍ । ଏଠାରେ Z କୁ ବ୍ୟାପକ ସେଟ୍ ଭାବେ ନେଇ N କୁ ତାହାର ଉପସେଟ୍ ବୋଲି କହିହେବ, କାରଣ N ର ସମସ୍ତ ଉପାଦାନ Z ରେ ମଧ୍ୟ ଅଛନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବ୍ୟାପକ ସେଟ୍ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଆଲୋଚନାରେ ଥିବା ପ୍ରତ୍ୟେକ ସେଟ୍ ଯେଉଁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସେଟ୍ E ର ଉପସେଟ୍ ହୁଏ, ସେହି E କୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ବ୍ୟାପକ ସେଟ୍ E କୁ ଚିତ୍ର ମାଧ୍ୟମରେ କିପରି ଦେଖାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବ୍ୟାପକ ସେଟ୍ E କୁ ଆୟତ ଚିତ୍ର ଦ୍ୱାରା ଓ ତାହାର ଉପସେଟ୍‌ମାନଙ୍କୁ ଆୟତ ଭିତରେ ବୃତ୍ତ ଦ୍ୱାରା ଦେଖାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ପରିମେୟ ସଂଖ୍ୟା ସେଟ୍ Q କୁ ବ୍ୟାପକ ସେଟ୍ ଭାବେ କାହିଁକି ନିଆଯାଇ ପାରିବ ନାହିଁ ?<br><br><span style='color:green;'>Answer:</span> କାରଣ Q ର ଉପସେଟ୍‌ଗୁଡ଼ିକ ମଧ୍ୟରେ ଅପରିମେୟ ଉପାଦାନ ମଧ୍ୟ ରହିଥାଏ, ଯାହା Q ର ଅଂଶ ନୁହେଁ ।",

"<span style='color:red;'>Q-4:</span> ବ୍ୟାପକ ସେଟ୍ ଧାରଣା କାହିଁକି ଆବଶ୍ୟକ ?<br><br><span style='color:green;'>Answer:</span> କୌଣସି ଆଲୋଚନାରେ ସମସ୍ତ ସେଟ୍‌ମାନଙ୍କୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସୀମା ମଧ୍ୟରେ ରଖିବା ପାଇଁ ବ୍ୟାପକ ସେଟ୍ ଆବଶ୍ୟକ ହୁଏ ।"

]
},

{
heading: "NOTE-2: ସଂଯୋଗ (Union) ଏବଂ ଏହାର ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇଟି ସେଟ୍ A ଓ B ର ସଂଯୋଗ ଅର୍ଥାତ୍ A ∪ B ହେଉଛି ସେହି ସେଟ୍ ଯାହା A ର ସମସ୍ତ ଉପାଦାନ ଓ B ର ସମସ୍ତ ଉପାଦାନ ମିଶାଇ ଗଠିତ ହୁଏ । ଅର୍ଥାତ୍ x ∈ A ∪ B ର ଅର୍ଥ ହେଉଛି x, A ରେ କିମ୍ବା B ରେ କିମ୍ବା ଉଭୟ ମଧ୍ୟରେ ରହିଛି ।<br><br>👉 ଉଦାହରଣ: ଯଦି A = {1,2,3,4} ଓ B = {2,4,6,8}, ତେବେ A ∪ B = {1,2,3,4,6,8} ହେବ । ଏଠାରେ ଆମେ A ଓ B ଉଭୟଙ୍କର ସମସ୍ତ ଅଲଗା ଉପାଦାନ ଏକାଠି ଲେଖିଛୁ, କୌଣସି ଉପାଦାନକୁ ଦୁଇଥର ଲେଖା ନାହିଁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ସଂଯୋଗ (Union) କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ସେଟ୍ A ଓ B ର ଥିବା ବା ଉଭୟଙ୍କର ସମସ୍ତ ଉପାଦାନକୁ ନେଇ ଗଠିତ ସେଟ୍‌କୁ A ଓ B ର ସଂଯୋଗ କୁହାଯାଏ, ଯାହାକୁ A ∪ B ଦ୍ୱାରା ଦେଖାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଯଦି A ⊂ B ହୁଏ, ତେବେ A ∪ B କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ⊂ B ହେଲେ, A ∪ B = B ହେବ ।",

"<span style='color:red;'>Q-3:</span> ସଂଯୋଗ ପ୍ରକ୍ରିୟାର କ୍ରମବିନିମୟ ନିୟମ କ'ଣ କୁହେ ?<br><br><span style='color:green;'>Answer:</span> A ଓ B ର ସଂଯୋଗ, B ଓ A ର ସଂଯୋଗ ସହିତ ସମାନ ହୁଏ, ଅର୍ଥାତ୍ A ∪ B = B ∪ A ।",

"<span style='color:red;'>Q-4:</span> ଶୂନ୍ୟ ସେଟ୍ ϕ ସହିତ ଏକ ସେଟ୍ A ର ସଂଯୋଗ କରିଲେ କ'ଣ ମିଳେ ?<br><br><span style='color:green;'>Answer:</span> A ସହିତ ଶୂନ୍ୟ ସେଟ୍ ϕ ର ସଂଯୋଗ ଫଳରେ A ହିଁ ମିଳେ, ଅର୍ଥାତ୍ A ∪ ϕ = A ।"

]
},

{
heading: "NOTE-3: ଛେଦ (Intersection) ଏବଂ ଏହାର ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇଟି ସେଟ୍ A ଓ B ର ଛେଦ ଅର୍ଥାତ୍ A ∩ B ହେଉଛି ସେହି ସେଟ୍ ଯାହାର ଉପାଦାନ A ଓ B ଉଭୟଙ୍କରେ ସାଧାରଣ ଭାବେ ରହିଥାନ୍ତି । ଯଦି A ଓ B ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଏ, ତେବେ ସେମାନଙ୍କୁ ଅଣଛେଦା ସେଟ୍ (Disjoint Set) କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: ଯଦି A = {1,2,3} ଓ B = {1,3,5}, ତେବେ A ∩ B = {1,3} ହେବ, କାରଣ 1 ଓ 3 ଉଭୟ ସେଟ୍‌ରେ ରହିଛନ୍ତି । କିନ୍ତୁ ଯଦି A = {p,q} ଓ B = {r,s,t}, ତେବେ ସେମାନଙ୍କର କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥିବାରୁ A ∩ B = ϕ ହେବ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଛେଦ (Intersection) କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଦୁଇଟି ସେଟ୍ A ଓ B ର ସାଧାରଣ ଉପାଦାନମାନଙ୍କୁ ନେଇ ଗଠିତ ସେଟ୍‌କୁ A ଓ B ର ଛେଦ କୁହାଯାଏ, ଯାହାକୁ A ∩ B ଦ୍ୱାରା ଦେଖାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଅଣଛେଦା ସେଟ୍ (Disjoint Set) କାହାକୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେଉଁ ଦୁଇ ସେଟ୍ ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଏ, ସେମାନଙ୍କୁ ଅଣଛେଦା ସେଟ୍ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> ଏକ ସେଟ୍ A ର ନିଜ ସହିତ ଛେଦ କରିଲେ କ'ଣ ମିଳେ ?<br><br><span style='color:green;'>Answer:</span> A ର ନିଜ ସହିତ ଛେଦ କରିଲେ A ହିଁ ମିଳେ, ଅର୍ଥାତ୍ A ∩ A = A ।",

"<span style='color:red;'>Q-4:</span> ଛେଦ ପ୍ରକ୍ରିୟା ସହଯୋଗୀ (Associative) ନିୟମ କ'ଣ କୁହେ ?<br><br><span style='color:green;'>Answer:</span> A, B, C ଯେକୌଣସି ସେଟ୍ ହେଲେ, (A ∩ B) ∩ C = A ∩ (B ∩ C) ହୁଏ ।"

]
},

{
heading: "NOTE-4: ବଣ୍ଟନ ନିୟମ (Distributive Law) :-",

audioPoints: [{
text:"👉 ଧାରଣା: ବଣ୍ଟନ ନିୟମ ଅନୁସାରେ ସଂଯୋଗ ପ୍ରକ୍ରିୟା ଛେଦ ପ୍ରକ୍ରିୟାକୁ ବଣ୍ଟନ କରେ ଏବଂ ଛେଦ ପ୍ରକ୍ରିୟା ସଂଯୋଗ ପ୍ରକ୍ରିୟାକୁ ବଣ୍ଟନ କରେ । ଅର୍ଥାତ୍ A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) ଏବଂ A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) ।<br><br>👉 ଉଦାହରଣ: ଯଦି A = {1,2,3,4}, B = {3,4,5,6} ଓ C = {1,3,5}, ତେବେ A ∪ (B ∩ C) = {1,2,3,4,5} ମିଳେ ଏବଂ (A ∪ B) ∩ (A ∪ C) ମଧ୍ୟ ସମାନ ଭାବେ {1,2,3,4,5} ମିଳେ । ଏହିପରି ଉଭୟ ପାର୍ଶ୍ୱ ସମାନ ହେବାରୁ ବଣ୍ଟନ ନିୟମ ପ୍ରମାଣିତ ହୁଏ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବଣ୍ଟନ ନିୟମ (Distributive Law) କ'ଣ କୁହେ ?<br><br><span style='color:green;'>Answer:</span> ସଂଯୋଗ ପ୍ରକ୍ରିୟା ଛେଦକୁ ବଣ୍ଟନ କରେ ଓ ଛେଦ ପ୍ରକ୍ରିୟା ସଂଯୋଗକୁ ବଣ୍ଟନ କରେ ବୋଲି ଏହି ନିୟମ କୁହେ ।",

"<span style='color:red;'>Q-2:</span> ବଣ୍ଟନ ନିୟମର ପ୍ରଥମ ସୂତ୍ର କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) ହେଉଛି ପ୍ରଥମ ସୂତ୍ର ।",

"<span style='color:red;'>Q-3:</span> ବଣ୍ଟନ ନିୟମର ଦ୍ୱିତୀୟ ସୂତ୍ର କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) ହେଉଛି ଦ୍ୱିତୀୟ ସୂତ୍ର ।",

"<span style='color:red;'>Q-4:</span> ସାଂଖ୍ୟାମାନଙ୍କ କ୍ଷେତ୍ରରେ ଗୁଣନ ଓ ଯୋଗ ମଧ୍ୟରେ ବଣ୍ଟନ ନିୟମ କେମିତି କାମ କରେ ?<br><br><span style='color:green;'>Answer:</span> ଗୁଣନ ଯୋଗକୁ ବଣ୍ଟନ କରେ, ଅର୍ଥାତ୍ x(y+z) = xy + xz, କିନ୍ତୁ ଯୋଗ ଗୁଣନକୁ ବଣ୍ଟନ କରେ ନାହିଁ ।"

]
},

{
heading: "NOTE-5: ଅନ୍ତର (Difference) ଏବଂ ଏହାର ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇଟି ସେଟ୍ A ଓ B ର ଅନ୍ତର ଅର୍ଥାତ୍ A − B ହେଉଛି ସେହି ସେଟ୍ ଯାହାର ଉପାଦାନ A ରେ ଥାଏ କିନ୍ତୁ B ରେ ନ ଥାଏ । ଏହିପରି B − A ହେଉଛି ସେହି ସେଟ୍ ଯାହାର ଉପାଦାନ B ରେ ଥାଏ କିନ୍ତୁ A ରେ ନ ଥାଏ । ଅନ୍ତର ପ୍ରକ୍ରିୟା କ୍ରମବିନିମୟ ନିୟମ ମାନେ ନାହିଁ, ଅର୍ଥାତ୍ A − B ≠ B − A ।<br><br>👉 ଉଦାହରଣ: ଯଦି A = {1,2,3,4} ଓ B = {3,4,5,6}, ତେବେ A − B = {1,2} ହେବ ଏବଂ B − A = {5,6} ହେବ । ଦେଖ, ଏହି ଦୁଇଟି ଫଳାଫଳ ଅଲଗା ଅଲଗା, ତେଣୁ A − B ଓ B − A ସମାନ ନୁହେଁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅନ୍ତର (Difference) A − B କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> A ସେଟ୍‌ର ଯେଉଁ ଉପାଦାନଗୁଡ଼ିକ B ରେ ନାହାନ୍ତି, ସେମାନଙ୍କୁ ନେଇ ଗଠିତ ସେଟ୍‌କୁ A ଅନ୍ତର B (A − B) କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଏକ ସେଟ୍ A ର ନିଜ ସହିତ ଅନ୍ତର କଲେ କ'ଣ ମିଳେ ?<br><br><span style='color:green;'>Answer:</span> A − A = ϕ, ଅର୍ଥାତ୍ ଏକ ଶୂନ୍ୟ ସେଟ୍ ମିଳେ ।",

"<span style='color:red;'>Q-3:</span> A ⊂ B ହେଲେ A − B କ'ଣ ହେବ ?<br><br><span style='color:green;'>Answer:</span> A ⊂ B ହେଲେ, A − B = ϕ ହେବ ।",

"<span style='color:red;'>Q-4:</span> A − B, B − A ଓ A ∩ B ସେଟ୍‌ତ୍ରୟ ପରସ୍ପର ସହିତ କେମିତି ସମ୍ପର୍କିତ ?<br><br><span style='color:green;'>Answer:</span> A − B, B − A ଓ A ∩ B ପରସ୍ପର ଅଣଛେଦା ଅଟନ୍ତି, ଅର୍ଥାତ୍ ସେମାନଙ୍କ ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନାହିଁ ।"

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
