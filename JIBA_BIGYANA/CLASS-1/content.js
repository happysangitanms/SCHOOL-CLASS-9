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
heading: "ପରିସ୍ଥିତି-୧: ବିଭିନ୍ନ ଜୀବଙ୍କ ଆୟୁଷ ତୁଳନା :-",

audioPoints: [
{
text: "👉 ପରିସ୍ଥିତି: ତୁମର ବଗିଚାରେ ଗୋଟିଏ ଆମ୍ବ ଗଛ ଅଛି । ତୁମ ଜେଜେମା କୁହନ୍ତି ଯେ ଏହି ଗଛଟି ୨୦ ବର୍ଷ ହେଲା ଅଛି । ତୁମେ ଜାଣିବାକୁ ପାଇଲ ଯେ ଏକ ମଶା ମାତ୍ର ୧ ଦିନ ବଞ୍ଚେ ଓ ଏକ ହାତୀ ୧୦୦ ବର୍ଷ ବଞ୍ଚେ । ତୁମର ବନ୍ଧୁ କହିଲା, 'ସବୁ ଜୀବ ସମାନ ସମୟ ବଞ୍ଚନ୍ତି ।'

<b>🤔 ତୁମେ ତୁମ ବନ୍ଧୁକୁ କ'ଣ ଉତ୍ତର ଦେବ ?</b>

👉 ବୈଜ୍ଞାନିକ ବ୍ୟାଖ୍ୟା: ବନ୍ଧୁଙ୍କ କଥା ଭୁଲ୍ । ବିଭିନ୍ନ ଜୀବଙ୍କ ଆୟୁଷ (Life Span) ଭିନ୍ନ ଭିନ୍ନ । ମଶା କିଛି ଦିନ, ଆମ୍ବ ଗଛ ୧୦୦-୧୫୦ ବର୍ଷ, ହାତୀ ୧୦୦ ବର୍ଷ ଓ କଇଁଛ ୨୦୦ ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିପାରନ୍ତି । ଏହା ଜୀବଜଗତର ବିବିଧତା (Diversity) ର ଏକ ଉଦାହରଣ ।",
audio:"audio-url-here"
}
],

questions:[
"<span style='color:red;'>Q-1:</span> ଜୀବମାନଙ୍କର ଆୟୁଷ (Life Span) ବିଷୟରେ କ'ଣ ତୁମେ ଜାଣିବାକୁ ପାଇଲ ?

<span style='color:green;'>Answer:</span> ବିଭିନ୍ନ ଜୀବଙ୍କ ଆୟୁଷ ଭିନ୍ନ ଭିନ୍ନ । କେତେକ ଅଳ୍ପ ଦିନ ବଞ୍ଚନ୍ତି, ପୁଣି କେତେକ ଶହେ ବର୍ଷ ବଞ୍ଚନ୍ତି ।",

"<span style='color:red;'>Q-2:</span> କେଉଁ ଜୀବଟି ଅତ୍ୟଧିକ ସମୟ (୨୦୦ ବର୍ଷ) ବଞ୍ଚିପାରେ ?

<span style='color:green;'>Answer:</span> ବଦବୃଷ୍ଟ (Great Banyan Tree) ଓ କଇଁଛ ୨୦୦ ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିପାରନ୍ତି ।",

"<span style='color:red;'>Q-3:</span> ତୁମ ବଗିଚାର ଆମ୍ବ ଗଛ ଓ ଏକ ମଶା ମଧ୍ୟରେ ଆୟୁଷର କେତେ ଅନ୍ତର ?

<span style='color:green;'>Answer:</span> ଆମ୍ବ ଗଛ ପ୍ରାୟ ୧୦୦-୧୫୦ ବର୍ଷ ବଞ୍ଚେ, ମାତ୍ର ମଶା ମାତ୍ର କିଛି ଦିନ ବଞ୍ଚେ ।",

"<span style='color:red;'>Q-4:</span> ବିଭିନ୍ନ ଜୀବଙ୍କ ଭିନ୍ନ ଭିନ୍ନ ଆୟୁଷ କେଉଁ ପ୍ରାକୃତିକ ତତ୍ତ୍ୱକୁ ଦର୍ଶାଏ ?

<span style='color:green;'>Answer:</span> ଏହା ଜୀବଜଗତର ବିବିଧତା (Biodiversity) କୁ ଦର୍ଶାଏ ।"
]
},

{
heading: "ପରିସ୍ଥିତି-୨: ଶରୀରର ରଙ୍ଗ ଓ ଢାଞ୍ଚାର ବିବିଧତା :-",

audioPoints: [
{
text: "👉 ପରିସ୍ଥିତି: ତୁମେ ଏକ ପକ୍ଷୀ ପାର୍କକୁ ଗଲ । ସେଠାରେ ତୁମେ ଏକ ସବୁଜ ଶୁଆ, ଏକ ବହୁରଙ୍ଗୀ ମୟୂର ଓ ଏକ କଳା ପଟା ବାଘ ଦେଖିଲ । ତୁମ ଛୋଟ ଭାଇ ପଚାରିଲା, 'ସବୁ ପଶୁପକ୍ଷୀଙ୍କ ରଙ୍ଗ ସମାନ କାହିଁକି ନୁହେଁ ?'

<b>🤔 ତୁମେ ତୁମ ଭାଇକୁ କ'ଣ ଉତ୍ତର ଦେବ ?</b>

👉 ବୈଜ୍ଞାନିକ ବ୍ୟାଖ୍ୟା: ପ୍ରତ୍ୟେକ ଜୀବର ଶରୀରର ରଙ୍ଗ ଓ ଢାଞ୍ଚା ଅନନ୍ୟ । ଶୁଆ ସବୁଜ, ମୟୂରର ପୁଛ ଆକର୍ଷଣୀୟ ରଙ୍ଗୀନ, ବାଘର ପଟା ଦାଗ ଅନନ୍ୟ, ଫୁଲର ରଙ୍ଗ ଲାଲ, ହଳଦିଆ, ଧଳା ହୋଇପାରେ । ପ୍ରଜାପତିଙ୍କର ମଧ୍ୟ ବିଭିନ୍ନ ରଙ୍ଗ ଥାଏ । ଏହା ପ୍ରକୃତିର ବୈଚିତ୍ର୍ୟକୁ ଦର୍ଶାଏ ।",
audio:"audio-url-here"
}
],

questions:[
"<span style='color:red;'>Q-1:</span> ଶୁଆ ଓ ମୟୂରଙ୍କ ଶରୀରର ରଙ୍ଗ କିପରି ?

<span style='color:green;'>Answer:</span> ଶୁଆ ସବୁଜ ରଙ୍ଗର ଏବଂ ମୟୂରର ପୁଛ ଆକର୍ଷଣୀୟ ବହୁରଙ୍ଗୀ ।",

"<span style='color:red;'>Q-2:</span> ବାଘର ଶରୀରରେ କେଉଁ ବିଶେଷ ଚିହ୍ନ ଥାଏ ?

<span style='color:green;'>Answer:</span> ବାଘର ଶରୀରରେ କଳା ପଟା ପଟା ଦାଗ ଥାଏ, ଯାହା ପ୍ରତ୍ୟେକ ବାଘରେ ଅନନ୍ୟ ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-3:</span> ଫୁଲଗୁଡ଼ିକର ରଙ୍ଗ କିପରି ଭିନ୍ନ ଭିନ୍ନ ହୋଇପାରେ ?

<span style='color:green;'>Answer:</span> ଫୁଲଗୁଡ଼ିକ ଲାଲ, ହଳଦିଆ, ଧଳା, ବାଇଗଣୀ ଇତ୍ୟାଦି ନାନା ରଙ୍ଗର ହୋଇପାରେ ।",

"<span style='color:red;'>Q-4:</span> ପକ୍ଷୀମାନଙ୍କର ଏହି ରଙ୍ଗ ବିବିଧତା କ'ଣ ଦର୍ଶାଏ ?

<span style='color:green;'>Answer:</span> ଏହା ପ୍ରକୃତିର ଅନନ୍ୟ ବିବିଧତା (Diversity) କୁ ଦର୍ଶାଏ ।"
]
},

{
heading: "ପରିସ୍ଥିତି-୩: ବିଭିନ୍ନ ପରିବେଶରେ ଜୀବଙ୍କ ବାସ :-",

audioPoints: [
{
text: "👉 ପରିସ୍ଥିତି: ତୁମେ ଗ୍ରୀଷ୍ମ ଛୁଟିରେ ପାହାଡ଼, ସମୁଦ୍ର ଓ ଜଙ୍ଗଲ ବୁଲିବାକୁ ଗଲ । ପାହାଡ଼ରେ ଶଙ୍ଖ ପଶୁ, ସମୁଦ୍ରରେ ମାଛ, ଜଙ୍ଗଲରେ ସିଂହ ଓ ବାଘ ଦେଖିଲ । ତୁମ ବନ୍ଧୁ କହିଲା, 'ସବୁ ଜୀବ ସବୁ ଜାଗାରେ ବାସ କରିପାରନ୍ତି ।'

<b>🤔 ତୁମେ ଏହି କଥାରେ ସହମତ କି ?</b>

👉 ବୈଜ୍ଞାନିକ ବ୍ୟାଖ୍ୟା: ବନ୍ଧୁଙ୍କ କଥା ଭୁଲ୍ । ବିଭିନ୍ନ ପ୍ରାକୃତିକ ପରିବେଶ ଯଥା ଜଙ୍ଗଲ, ପାହାଡ଼, ନଦୀ, ସମୁଦ୍ର, ମରୁଭୂମି, ବରଫାବୃତ ଅଞ୍ଚଳ ଇତ୍ୟାଦିରେ ଭିନ୍ନ ଭିନ୍ନ ଜୀବ ବାସ କରନ୍ତି । ପ୍ରତ୍ୟେକ ପରିବେଶର ଜୀବସମୂହ ଅନ୍ୟ ପରିବେଶଠାରୁ ଭିନ୍ନ ।",
audio:"audio-url-here"
}
],

questions:[
"<span style='color:red;'>Q-1:</span> ଜଙ୍ଗଲ, ସମୁଦ୍ର ଓ ମରୁଭୂମିରେ କେଉଁ କେଉଁ ଜୀବ ବାସ କରନ୍ତି ?

<span style='color:green;'>Answer:</span> ଜଙ୍ଗଲରେ ସିଂହ ଓ ବାଘ, ସମୁଦ୍ରରେ ମାଛ, ମରୁଭୂମିରେ ଓଟ ବାସ କରନ୍ତି ।",

"<span style='color:red;'>Q-2:</span> ପାହାଡ଼ ଓ ସମୁଦ୍ର ପରିବେଶ ମଧ୍ୟରେ କ'ଣ ପାର୍ଥକ୍ୟ ରହିଛି ?

<span style='color:green;'>Answer:</span> ପାହାଡ଼ରେ ଶଙ୍ଖ ପଶୁ ଏବଂ ସମୁଦ୍ରରେ ମାଛ ବାସ କରନ୍ତି ।",

"<span style='color:red;'>Q-3:</span> ପ୍ରତ୍ୟେକ ପରିବେଶରେ ଥିବା ଜୀବସମୂହ କାହିଁକି ଭିନ୍ନ ହୋଇଥାଏ ?

<span style='color:green;'>Answer:</span> କାରଣ ପ୍ରତ୍ୟେକ ପରିବେଶର ପାଣିପାଗ, ଖାଦ୍ୟ ଓ ବାସସ୍ଥାନ ଭିନ୍ନ ଭିନ୍ନ ।",

"<span style='color:red;'>Q-4:</span> ଏହି ପରିସ୍ଥିତି ଜୀବଜଗତର କେଉଁ ଗୁଣକୁ ଦର୍ଶାଏ ?

<span style='color:green;'>Answer:</span> ଏହା ଜୀବଜଗତର ବିବିଧତା (Biodiversity) କୁ ଦର୍ଶାଏ ।"
]
},

{
heading: "ପରିସ୍ଥିତି-୪: ବିଲୁପ୍ତ (Extinct) ଜୀବ ଓ ପରିବେଶ ପରିବର୍ତ୍ତନ :-",

audioPoints: [
{
text: "👉 ପରିସ୍ଥିତି: ତୁମ ଜେଜେବାପା ତୁମକୁ ଏକ ପୁରୁଣା ପୁସ୍ତକ ଦେଖାଇଲେ, ଯେଉଁଥିରେ ଡାଇନୋସର (Dinosaurs) ର ଚିତ୍ର ଥିଲା । ସେ କହିଲେ, 'ଏମାନେ ବହୁତ ଦିନ ପୂର୍ବେ ବିଲୁପ୍ତ (Extinct) ହୋଇଯାଇଛନ୍ତି ।' ତୁମେ ଭାବିଲ, 'ଆଜିକାଲି ମଧ୍ୟ କେତେକ ଜୀବ ବିଲୁପ୍ତ ହେଉଛନ୍ତି କି ?'

<b>🤔 ତୁମ ମତରେ ଜୀବମାନେ କାହିଁକି ବିଲୁପ୍ତ ହୁଅନ୍ତି ?</b>

👉 ବୈଜ୍ଞାନିକ ବ୍ୟାଖ୍ୟା: ପୃଥିବୀରେ ବିବର୍ତ୍ତନ (Evolution) ପ୍ରକ୍ରିୟା ଚାଲିଥାଏ । ଏହି ସମୟରେ ଅନେକ ନୂତନ ଜାତି ସୃଷ୍ଟି ହୁଅନ୍ତି ଓ ଅନେକ ଜାତି ବିଲୁପ୍ତ (Extinct) ହୋଇଯାଆନ୍ତି । ମନୁଷ୍ୟର ବୃଦ୍ଧିପାଉଥିବା ଜନସଂଖ୍ୟା ଓ ପରିବେଶର ଅବସ୍ଥା ପରିବର୍ତ୍ତନ ଏହାର ପ୍ରମୁଖ କାରଣ ।",
audio:"audio-url-here"
}
],

questions:[
"<span style='color:red;'>Q-1:</span> ବିଲୁପ୍ତ (Extinct) ଜୀବ କାହାକୁ କୁହାଯାଏ ?

<span style='color:green;'>Answer:</span> ଯେଉଁ ଜୀବମାନେ ଆଉ ପୃଥିବୀରେ ନାହାନ୍ତି, ସେମାନଙ୍କୁ ବିଲୁପ୍ତ ଜୀବ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଡାଇନୋସର (Dinosaurs) ମାନଙ୍କର କ'ଣ ହୋଇଛି ?

<span style='color:green;'>Answer:</span> ଡାଇନୋସରମାନେ ବହୁତ ଦିନ ପୂର୍ବେ ବିଲୁପ୍ତ (Extinct) ହୋଇଯାଇଛନ୍ତି ।",

"<span style='color:red;'>Q-3:</span> ଆଜିକାଲି ଜୀବମାନେ ବିଲୁପ୍ତ ହେବାର ମୂଖ୍ୟ କାରଣ କ'ଣ ?

<span style='color:green;'>Answer:</span> ମନୁଷ୍ୟର ବୃଦ୍ଧିପାଉଥିବା ଜନସଂଖ୍ୟା ଓ ପରିବେଶର ଅବସ୍ଥା ପରିବର୍ତ୍ତନ ଏହାର ମୂଖ୍ୟ କାରଣ ।",

"<span style='color:red;'>Q-4:</span> ବିଲୁପ୍ତି ଓ ଜୀବଜଗତର ବିବିଧତା (Biodiversity) ମଧ୍ୟରେ କ'ଣ ସମ୍ପର୍କ ?

<span style='color:green;'>Answer:</span> ବିଲୁପ୍ତି ଯୋଗୁଁ ଜୀବଜଗତର ବିବିଧତା ହ୍ରାସ ପାଉଛି, ଯାହା ପରିବେଶ ପାଇଁ ଭୟଙ୍କର ।"
]
},

{
heading: "ପରିସ୍ଥିତି-୫: ଟାକ୍ସୋନୋମି (Taxonomy) ର ବ୍ୟବହାର :-",

audioPoints: [
{
text: "👉 ପରିସ୍ଥିତି: ତୁମ ସ୍କୁଲରେ ଏକ 'ଜୀବ ପ୍ରଦର୍ଶନୀ' ଆୟୋଜିତ ହେଲା । ସେଠାରେ ଶତାଧିକ ବିଭିନ୍ନ ପୋକ, ପକ୍ଷୀ ଓ ଗଛ ଥିଲେ । ଆୟୋଜକ କହିଲେ, 'ଏହି ସମସ୍ତଙ୍କୁ ଚିହ୍ନିବା ପାଇଁ ଆମେ ଟାକ୍ସୋନୋମି (Taxonomy) ର ନିୟମ ବ୍ୟବହାର କରିଛୁ ।'

<b>🤔 ତୁମେ ଭାବିଲ, ଟାକ୍ସୋନୋମି ଆମର ଦୈନନ୍ଦିନ ଜୀବନରେ କିପରି ଉପକାରୀ ?</b>

👉 ବୈଜ୍ଞାନିକ ବ୍ୟାଖ୍ୟା: ଟାକ୍ସୋନୋମି (Taxonomy) ବା ସିଷ୍ଟମାଟିକ୍ସ (Systematics) ହେଉଛି ଜୀବମାନଙ୍କୁ ଶ୍ରେଣୀବଦ୍ଧ କରିବାର ବିଜ୍ଞାନ । ଏହା ଦ୍ୱାରା ଜୀବଙ୍କୁ ଚିହ୍ନିବା ସହଜ, ପାରସ୍ପରିକ ସମ୍ପର୍କ (Interrelationship) ଜଣାଯାଏ, ବିସ୍ତାର ବିଷୟରେ ଜ୍ଞାନ ବଢ଼େ । ଏହା ପରିବେଶ ବିଜ୍ଞାନ (Ecology), କୃଷି (Agriculture) ଓ ଜନସ୍ୱାସ୍ଥ୍ୟ (Public Health) କ୍ଷେତ୍ରରେ ସହାୟକ ।",
audio:"audio-url-here"
}
],

questions:[
"<span style='color:red;'>Q-1:</span> ଟାକ୍ସୋନୋମି (Taxonomy) କାହାକୁ କୁହାଯାଏ ?<span style='color:green;'>Answer:</span> ଜୀବମାନଙ୍କୁ ଶ୍ରେଣୀବଦ୍ଧ କରିବାର ବିଜ୍ଞାନକୁ ଟାକ୍ସୋନୋମି କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଟାକ୍ସୋନୋମି ଆମକୁ ଜୀବଙ୍କ ବିଷୟରେ କେଉଁ କେଉଁ ତଥ୍ୟ ଜାଣିବାରେ ସାହାଯ୍ୟ କରେ ?<span style='color:green;'>Answer:</span> ଜୀବଙ୍କ ପାରସ୍ପରିକ ସମ୍ପର୍କ, ବିସ୍ତାର ଓ ଚିହ୍ନଟ କରିବାରେ ସାହାଯ୍ୟ କରେ ।",

"<span style='color:red;'>Q-3:</span> ଟାକ୍ସୋନୋମିର ଅନ୍ୟ ନାମ କ'ଣ ? <span style='color:green;'>Answer:</span> ଏହାକୁ ସିଷ୍ଟମାଟିକ୍ସ (Systematics) ମଧ୍ୟ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-4:</span> ଟାକ୍ସୋନୋମି ବ୍ୟତୀତ ଆଉ କେଉଁ କେଉଁ ବିଜ୍ଞାନ କ୍ଷେତ୍ରରେ ଏହା ଉପକାରୀ ?<span style='color:green;'>Answer:</span> ପରିବେଶ ବିଜ୍ଞାନ (Ecology), କୃଷିବିଜ୍ଞାନ (Agricultural Science) ଓ ଜନସ୍ୱାସ୍ଥ୍ୟ (Public Health) କ୍ଷେତ୍ରରେ ଉପକାରୀ ।"
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
