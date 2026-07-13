const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଇଂରାଜୀ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9E1P1.mp3",
    video:  "https://www.youtube.com/embed/cztxNI37UQM?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9E1P1.pdf"
};


const wordData = {
    currentWord: 0,
    words: [
        { word: "I", odia: "ମୁଁ", emoji: "👤", odiaUse: "ମୁଁ ଅର୍ଥ ନିଜକୁ ବୁଝାଏ । ମୁଁ ରେଷ୍ଟୁରାଣ୍ଟକୁ ଯାଇଥିଲି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "WENT", odia: "ଗଲି", emoji: "🚶", odiaUse: "ଗଲି ଅର୍ଥ କୌଣସି ସ୍ଥାନକୁ ଯାଇଥିଲି । ମୁଁ ରେଷ୍ଟୁରାଣ୍ଟକୁ ଗଲି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "TO", odia: "କୁ", emoji: "➡️", odiaUse: "କୁ ଅର୍ଥ କୌଣସି ସ୍ଥାନ ଦିଗକୁ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "A", odia: "ଏକ", emoji: "1️⃣", odiaUse: "ଏକ ଅର୍ଥ ଗୋଟିଏ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "VEGETARIAN", odia: "ଶାକାହାରୀ", emoji: "🥗", odiaUse: "ଶାକାହାରୀ ଅର୍ଥ ଯିଏ ମାଂସ ଖାଏ ନାହିଁ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "RESTAURANT", odia: "ରେଷ୍ଟୁରାଣ୍ଟ", emoji: "🍽️", odiaUse: "ରେଷ୍ଟୁରାଣ୍ଟ ଅର୍ଥ ଖାଦ୍ୟ ଖାଇବା ସ୍ଥାନ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "IT", odia: "ଏହା", emoji: "👉", odiaUse: "ଏହା ଅର୍ଥ ପାଖରେ ଥିବା ବସ୍ତୁ ବା କଥା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "WAS", odia: "ଥିଲା", emoji: "⏳", odiaUse: "ଥିଲା ଅର୍ଥ ଅତୀତ ସମୟର କଥା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "LUNCH", odia: "ମଧ୍ୟାହ୍ନ ଭୋଜନ", emoji: "🍛", odiaUse: "ମଧ୍ୟାହ୍ନ ଭୋଜନ ଅର୍ଥ ଦିନବେଳର ଖାଇବା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "TIME", odia: "ସମୟ", emoji: "⏰", odiaUse: "ସମୟ ଅର୍ଥ ବେଳ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "THERE", odia: "ସେଠାରେ", emoji: "📍", odiaUse: "ସେଠାରେ ଅର୍ଥ ସେହି ସ୍ଥାନରେ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "WERE", odia: "ଥିଲେ", emoji: "👥", odiaUse: "ଥିଲେ ଅର୍ଥ ଅନେକ ଲୋକ ଥିବା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "PEOPLE", odia: "ଲୋକମାନେ", emoji: "👨‍👩‍👧‍👦", odiaUse: "ଲୋକମାନେ ଅର୍ଥ ମଣିଷମାନେ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "EATING", odia: "ଖାଉଥିଲେ", emoji: "🍴", odiaUse: "ଖାଉଥିଲେ ଅର୍ଥ ଖାଦ୍ୟ ଗ୍ରହଣ କରୁଥିଲେ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "AND", odia: "ଏବଂ", emoji: "➕", odiaUse: "ଏବଂ ଅର୍ଥ ଦୁଇଟି କଥାକୁ ଯୋଡ଼ିବା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "DRINKING", odia: "ପିଉଥିଲେ", emoji: "🥤", odiaUse: "ପିଉଥିଲେ ଅର୍ଥ ପାଣି ବା ପାନୀୟ ଗ୍ରହଣ କରୁଥିଲେ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "VERY", odia: "ବହୁତ", emoji: "⭐", odiaUse: "ବହୁତ ଅର୍ଥ ଅଧିକ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "CROWDED", odia: "ଭିଡ଼ପୂର୍ଣ୍ଣ", emoji: "👥", odiaUse: "ଭିଡ଼ପୂର୍ଣ୍ଣ ଅର୍ଥ ଲୋକ ଭର୍ତ୍ତି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "SAW", odia: "ଦେଖିଲି", emoji: "👀", odiaUse: "ଦେଖିଲି ଅର୍ଥ ଆଖିରେ ଦେଖିଥିଲି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "THAT", odia: "ଯେ", emoji: "👉", odiaUse: "ଯେ ଅର୍ଥ ଏକ କଥାକୁ ବୁଝାଏ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "SOME", odia: "କେତେକ", emoji: "🔢", odiaUse: "କେତେକ ଅର୍ଥ କିଛି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "OF", odia: "ର", emoji: "🔗", odiaUse: "ର ଅର୍ଥ ସମ୍ବନ୍ଧ ବୁଝାଏ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "CHAIRS", odia: "ଚେୟାରଗୁଡ଼ିକ", emoji: "🪑", odiaUse: "ଚେୟାରଗୁଡ଼ିକ ଅର୍ଥ ବସିବା ଆସନ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "TABLES", odia: "ଟେବୁଲଗୁଡ଼ିକ", emoji: "🟫", odiaUse: "ଟେବୁଲଗୁଡ଼ିକ ଅର୍ଥ ଜିନିଷ ରଖିବା ଆସବାବ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "HAD", odia: "ଥିଲା", emoji: "📖", odiaUse: "ଥିଲା ଅର୍ଥ ପୂର୍ବରୁ ଘଟିଥିବା କଥା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "BEEN", odia: "ହୋଇ", emoji: "✔️", odiaUse: "ହୋଇ ଅର୍ଥ କାମଟି ଘଟିସାରିଥିଲା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "PUSHED", odia: "ଠେଲି ଦିଆଯାଇଥିଲା", emoji: "↪️", odiaUse: "ଠେଲି ଦିଆଯାଇଥିଲା ଅର୍ଥ ବଳ ଦେଇ ସରାଯାଇଥିଲା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "INTO", odia: "ଭିତରକୁ", emoji: "↩️", odiaUse: "ଭିତରକୁ ଅର୍ଥ କୌଣସି ସ୍ଥାନ ମଧ୍ୟରେ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "CORNER", odia: "କୋଣ", emoji: "📐", odiaUse: "କୋଣ ଅର୍ଥ ଘରର ଏକ ପାର୍ଶ୍ୱ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "CHOSE", odia: "ବାଛିଲି", emoji: "✅", odiaUse: "ବାଛିଲି ଅର୍ଥ ପସନ୍ଦ କଲି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "SEATED", odia: "ବସିଗଲି", emoji: "🪑", odiaUse: "ବସିଗଲି ଅର୍ଥ ଆସନରେ ବସିଲି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "MYSELF", odia: "ନିଜେ", emoji: "🙋", odiaUse: "ନିଜେ ଅର୍ଥ ନିଜ ଦ୍ୱାରା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "STARTED", odia: "ଆରମ୍ଭ କଲି", emoji: "🚀", odiaUse: "ଆରମ୍ଭ କଲି ଅର୍ଥ କାମ ଚାଲୁ କଲି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "SKIMMING", odia: "ଶୀଘ୍ର ପଢିବା", emoji: "📄", odiaUse: "ଶୀଘ୍ର ପଢିବା ଅର୍ଥ ଦ୍ରୁତ ଭାବରେ ପଢିବା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "THROUGH", odia: "ଦେଇ", emoji: "➡️", odiaUse: "ଦେଇ ଅର୍ଥ ମାଧ୍ୟମରେ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "NEWSPAPER", odia: "ଖବରକାଗଜ", emoji: "📰", odiaUse: "ଖବରକାଗଜରେ ଦୈନିକ ଖବର ଥାଏ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "AT", odia: "ରେ", emoji: "📍", odiaUse: "ରେ ଅର୍ଥ କୌଣସି ସ୍ଥାନ ବା ସମୟରେ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "MOMENT", odia: "ମୁହୂର୍ତ୍ତ", emoji: "⏱️", odiaUse: "ମୁହୂର୍ତ୍ତ ଅର୍ଥ ଅତି ଛୋଟ ସମୟ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "NOTICED", odia: "ଲକ୍ଷ୍ୟ କଲି", emoji: "👁️", odiaUse: "ଲକ୍ଷ୍ୟ କଲି ଅର୍ଥ ଧ୍ୟାନ ଦେଇ ଦେଖିଲି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "YOUNG", odia: "ଛୋଟ", emoji: "👧", odiaUse: "ଛୋଟ ଅର୍ଥ କମ୍ ବୟସର ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "GIRL", odia: "ଝିଅ", emoji: "👧", odiaUse: "ଝିଅ ଅର୍ଥ ମହିଳା ଶିଶୁ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "LOOKING", odia: "ଚାହିଁଥିବା", emoji: "👀", odiaUse: "ଚାହିଁଥିବା ଅର୍ଥ ଦେଖୁଥିବା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "ME", odia: "ମୋତେ", emoji: "🙋", odiaUse: "ମୋତେ ଅର୍ଥ ମୋ ପାଖକୁ ବା ମୋ ପ୍ରତି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "HER", odia: "ତାର", emoji: "👧", odiaUse: "ତାର ଅର୍ଥ ଝିଅଟିର ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "EYES", odia: "ଆଖି", emoji: "👀", odiaUse: "ଆଖି ଦ୍ୱାରା ଆମେ ଦେଖୁଥାଉ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "LARGE", odia: "ବଡ଼", emoji: "🔍", odiaUse: "ବଡ଼ ଅର୍ଥ ଆକାରରେ ଅଧିକ ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "SAD", odia: "ଦୁଃଖିତ", emoji: "😢", odiaUse: "ଦୁଃଖିତ ଅର୍ଥ ମନ ଖରାପ ଥିବା ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },

        { word: "EXPRESSION", odia: "ଭାବ", emoji: "🙂", odiaUse: "ଭାବ ଅର୍ଥ ମୁହଁରେ ଦେଖାଯାଉଥିବା ଅନୁଭୂତି ।", audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" } },
        {
    word: "AS",
    odia: "ଯେତେବେଳେ",
    emoji: "⏳",
    odiaUse: "ଯେତେବେଳେ ଅର୍ଥ କୌଣସି ସମୟକୁ ବୁଝାଏ । ଯେତେବେଳେ ଝିଅଟି ବାହାରକୁ ଯାଉଥିଲା ସେ ପ୍ରଶ୍ନ ପଚାରିଲା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "GOING",
    odia: "ଯାଉଥିବା",
    emoji: "🚶",
    odiaUse: "ଯାଉଥିବା ଅର୍ଥ ଗୋଟିଏ ସ୍ଥାନରୁ ଅନ୍ୟ ସ୍ଥାନକୁ ଯିବା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "OUT",
    odia: "ବାହାରକୁ",
    emoji: "🚪",
    odiaUse: "ବାହାରକୁ ଅର୍ଥ ଘର ବା ସ୍ଥାନର ବାହାର ଭାଗକୁ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "SHE",
    odia: "ସେ",
    emoji: "👧",
    odiaUse: "ସେ ଅର୍ଥ ଝିଅଟିକୁ ବୁଝାଏ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "ASKED",
    odia: "ପଚାରିଲା",
    emoji: "❓",
    odiaUse: "ପଚାରିଲା ଅର୍ଥ ପ୍ରଶ୍ନ କଲା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "CASHIER",
    odia: "କ୍ୟାସିଅର",
    emoji: "💰",
    odiaUse: "କ୍ୟାସିଅର ଅର୍ଥ ଟଙ୍କା ନେବା ଓ ହିସାବ ରଖିବା ବ୍ୟକ୍ତି ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "LOW",
    odia: "ଧୀର",
    emoji: "🔉",
    odiaUse: "ଧୀର ଅର୍ଥ କମ୍ ଶବ୍ଦରେ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "VOICE",
    odia: "ସ୍ୱର",
    emoji: "🗣️",
    odiaUse: "ସ୍ୱର ଅର୍ଥ କଥା କହିବାର ଶବ୍ଦ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "IS",
    odia: "ଅଟନ୍ତି",
    emoji: "✅",
    odiaUse: "ଅଟନ୍ତି ଅର୍ଥ ହେଉଛନ୍ତି ବା ଅଛନ୍ତି ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "GENTLEMAN",
    odia: "ଭଦ୍ରଲୋକ",
    emoji: "👨",
    odiaUse: "ଭଦ୍ରଲୋକ ଅର୍ଥ ଭଲ ବ୍ୟବହାର କରୁଥିବା ପୁରୁଷ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "AN",
    odia: "ଜଣେ",
    emoji: "1️⃣",
    odiaUse: "ଜଣେ ଅର୍ଥ ଗୋଟିଏ ବ୍ୟକ୍ତି ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "INDIAN",
    odia: "ଭାରତୀୟ",
    emoji: "🇮🇳",
    odiaUse: "ଭାରତୀୟ ଅର୍ଥ ଭାରତ ଦେଶର ଲୋକ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "THINK",
    odia: "ଭାବିବା",
    emoji: "🤔",
    odiaUse: "ଭାବିବା ଅର୍ଥ ମନରେ ବିଚାର କରିବା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "SO",
    odia: "ସେପରି",
    emoji: "✔️",
    odiaUse: "ସେପରି ଅର୍ଥ ସେହିପରି ଭାବରେ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "REPLIED",
    odia: "ଉତ୍ତର ଦେଲେ",
    emoji: "💬",
    odiaUse: "ଉତ୍ତର ଦେଲେ ଅର୍ଥ ପ୍ରଶ୍ନର ଜବାବ ଦେଲେ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "LOOKED",
    odia: "ଚାହିଁଲା",
    emoji: "👀",
    odiaUse: "ଚାହିଁଲା ଅର୍ଥ ଦେଖିଲା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "ONCE",
    odia: "ଥରେ",
    emoji: "1️⃣",
    odiaUse: "ଥରେ ଅର୍ଥ ଗୋଟିଏ ଥର । ଝିଅଟି ମୋତେ ଥରେ ଚାହିଁଲା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "MORE",
    odia: "ପୁଣି",
    emoji: "➕",
    odiaUse: "ପୁଣି ଅର୍ଥ ଆଉ ଥରେ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "WENT",
    odia: "ଗଲା",
    emoji: "🚶",
    odiaUse: "ଗଲା ଅର୍ଥ କୌଣସି ସ୍ଥାନକୁ ଚାଲିଗଲା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "SURPRISED",
    odia: "ଆଶ୍ଚର୍ଯ୍ୟ କଲା",
    emoji: "😲",
    odiaUse: "ଆଶ୍ଚର୍ଯ୍ୟ କଲା ଅର୍ଥ ଅଚାନକ ଆଶ୍ଚର୍ଯ୍ୟରେ ପକାଇଲା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "WHY",
    odia: "କାହିଁକି",
    emoji: "❓",
    odiaUse: "କାହିଁକି ଅର୍ଥ କେଉଁ କାରଣ ପାଇଁ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "WHAT",
    odia: "କ'ଣ",
    emoji: "❔",
    odiaUse: "କ'ଣ ଅର୍ଥ କେଉଁ ଜିନିଷ ବା କଥା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "MATTER",
    odia: "ବିଷୟ",
    emoji: "📌",
    odiaUse: "ବିଷୟ ଅର୍ଥ କଥା ବା ସମସ୍ୟା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "INTEREST",
    odia: "ଆଗ୍ରହ",
    emoji: "😊",
    odiaUse: "ଆଗ୍ରହ ଅର୍ଥ ଜାଣିବା ବା କରିବାକୁ ଇଚ୍ଛା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "AROUSED",
    odia: "ସୃଷ୍ଟି କଲା",
    emoji: "💡",
    odiaUse: "ସୃଷ୍ଟି କଲା ଅର୍ଥ ଜନ୍ମ ଦେଲା ବା ଉତ୍ପନ୍ନ କଲା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "CURIOSITY",
    odia: "କୌତୁହଳ",
    emoji: "🤔",
    odiaUse: "କୌତୁହଳ ଅର୍ଥ ଜାଣିବାର ଇଚ୍ଛା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "WHEN",
    odia: "ଯେତେବେଳେ",
    emoji: "⏰",
    odiaUse: "ଯେତେବେଳେ ଅର୍ଥ କୌଣସି ସମୟରେ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "FINISHED",
    odia: "ଶେଷ କଲି",
    emoji: "🏁",
    odiaUse: "ଶେଷ କଲି ଅର୍ଥ କାମଟି ପୂରା କଲି ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "MY",
    odia: "ମୋର",
    emoji: "🙋",
    odiaUse: "ମୋର ଅର୍ଥ ମୋ ସମ୍ବନ୍ଧୀୟ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "WAITER",
    odia: "ୱେଟର",
    emoji: "🧑‍🍳",
    odiaUse: "ୱେଟର ଅର୍ଥ ରେଷ୍ଟୁରାଣ୍ଟରେ ଖାଦ୍ୟ ପରିବେଷଣ କରୁଥିବା ବ୍ୟକ୍ତି ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "DO",
    odia: "କର",
    emoji: "⚙️",
    odiaUse: "କର ଅର୍ଥ କୌଣସି କାମ କରିବା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "YOU",
    odia: "ତୁମେ / ଆପଣ",
    emoji: "👤",
    odiaUse: "ତୁମେ ବା ଆପଣ ଅର୍ଥ ଯାହାଙ୍କ ସହ କଥା ହେଉଛି ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "KNOW",
    odia: "ଜାଣ",
    emoji: "🧠",
    odiaUse: "ଜାଣ ଅର୍ଥ କୌଣସି କଥା ସମ୍ବନ୍ଧରେ ଅବଗତ ହେବା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "WHO",
    odia: "ଯିଏ",
    emoji: "👤",
    odiaUse: "ଯିଏ ଅର୍ଥ କୌଣସି ବ୍ୟକ୍ତିକୁ ବୁଝାଏ ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
    word: "SITTING",
    odia: "ବସିଥିଲା",
    emoji: "🪑",
    odiaUse: "ବସିଥିଲା ଅର୍ଥ ଆସନରେ ବସି ରହିଥିଲା ।",
    audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
}
    ]
};
    
const topicsData = [

 {
    heading: "NOTE-1: ବାକ୍ୟ-୧ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>I went to a vegetarian restaurant.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>I went.<br>ଅର୍ଥ : ମୁଁ ଗଲି ।<br><br>I went to a restaurant.<br>ଅର୍ଥ : ମୁଁ ଏକ ରେଷ୍ଟୁରାଣ୍ଟକୁ ଗଲି ।<br><br>I went to a vegetarian restaurant.<br>ଅର୍ଥ : ମୁଁ ଏକ ଶାକାହାରୀ ରେଷ୍ଟୁରାଣ୍ଟକୁ ଗଲି ।<br><br>ଏଠାରେ vegetarian ଅର୍ଥ ହେଉଛି ଶାକାହାରୀ ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Who = କିଏ):</span> Who went to a vegetarian restaurant?<br>(କିଏ ଏକ ଶାକାହାରୀ ରେଷ୍ଟୁରାଣ୍ଟକୁ ଯାଇଥିଲା?)<br><br><span style='color:green;'>Answer:</span> I went to a vegetarian restaurant.<br>(ମୁଁ ଏକ ଶାକାହାରୀ ରେଷ୍ଟୁରାଣ୍ଟକୁ ଯାଇଥିଲି ।)",

        "<span style='color:red;'>Q-2 (Where = କେଉଁଠାକୁ):</span> Where did I go?<br>(ମୁଁ କେଉଁଠାକୁ ଯାଇଥିଲି?)<br><br><span style='color:green;'>Answer:</span> I went to a restaurant.<br>(ମୁଁ ଏକ ରେଷ୍ଟୁରାଣ୍ଟକୁ ଯାଇଥିଲି ।)",

        "<span style='color:red;'>Q-3 (What type = କେଉଁ ପ୍ରକାର):</span> What type of restaurant was it?<br>(ଏହା କେଉଁ ପ୍ରକାରର ରେଷ୍ଟୁରାଣ୍ଟ ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> It was a vegetarian restaurant.<br>(ଏହା ଏକ ଶାକାହାରୀ ରେଷ୍ଟୁରାଣ୍ଟ ଥିଲା ।)",

        "<span style='color:red;'>Q-4 (Meaning = ଅର୍ଥ):</span> What does vegetarian mean?<br>(vegetarian ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Vegetarian means vegetarian food only.<br>(Vegetarian ର ଅର୍ଥ ହେଉଛି ଶାକାହାରୀ ଖାଦ୍ୟ ।)"
    ]
},
{
    heading: "NOTE-2: ବାକ୍ୟ-୨ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>It was lunch time.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>It was.<br>ଅର୍ଥ : ସେହି ସମୟ ଥିଲା ।<br><br>It was lunch time.<br>ଅର୍ଥ : ସେହି ସମୟ ମଧ୍ୟାହ୍ନ ଭୋଜନର ସମୟ ଥିଲା ।<br><br>Lunch time ଅର୍ଥ ହେଉଛି ମଧ୍ୟାହ୍ନ ଭୋଜନ ସମୟ ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (What = କ'ଣ):</span> What was the time?<br>(କେଉଁ ସମୟ ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> It was lunch time.<br>(ମଧ୍ୟାହ୍ନ ଭୋଜନ ସମୟ ଥିଲା ।)",

        "<span style='color:red;'>Q-2 (Meaning = ଅର୍ଥ):</span> What does lunch time mean?<br>(Lunch time ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Lunch time means noon meal time.<br>(Lunch time ଅର୍ଥ ମଧ୍ୟାହ୍ନ ଭୋଜନ ସମୟ ।)",

        "<span style='color:red;'>Q-3 (Was it dinner time?):</span> Was it dinner time?<br>(ଏହା କ'ଣ ରାତ୍ରି ଭୋଜନ ସମୟ ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> No, it was lunch time.<br>(ନା, ଏହା ମଧ୍ୟାହ୍ନ ଭୋଜନ ସମୟ ଥିଲା ।)",

        "<span style='color:red;'>Q-4 (When = କେବେ):</span> When did the story happen?<br>(କାହାଣୀଟି କେଉଁ ସମୟରେ ଘଟିଥିଲା?)<br><br><span style='color:green;'>Answer:</span> The story happened at lunch time.<br>(କାହାଣୀଟି ମଧ୍ୟାହ୍ନ ଭୋଜନ ସମୟରେ ଘଟିଥିଲା ।)"
    ]
},
{
    heading: "NOTE-3: ବାକ୍ୟ-୩ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>There were people eating and drinking.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>There were people.<br>ଅର୍ଥ : ସେଠାରେ ଲୋକମାନେ ଥିଲେ ।<br><br>There were people eating.<br>ଅର୍ଥ : ସେଠାରେ ଲୋକମାନେ ଖାଉଥିଲେ ।<br><br>There were people eating and drinking.<br>ଅର୍ଥ : ସେଠାରେ ଲୋକମାନେ ଖାଉଥିଲେ ଓ ପିଉଥିଲେ ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Who = କିଏ):</span> Who were there?<br>(ସେଠାରେ କିଏ ଥିଲେ?)<br><br><span style='color:green;'>Answer:</span> There were people.<br>(ସେଠାରେ ଲୋକମାନେ ଥିଲେ ।)",

        "<span style='color:red;'>Q-2 (What = କ'ଣ କରୁଥିଲେ):</span> What were the people doing?<br>(ଲୋକମାନେ କ'ଣ କରୁଥିଲେ?)<br><br><span style='color:green;'>Answer:</span> They were eating and drinking.<br>(ସେମାନେ ଖାଉଥିଲେ ଓ ପିଉଥିଲେ ।)",

        "<span style='color:red;'>Q-3 (Were people sleeping?):</span> Were the people sleeping?<br>(ଲୋକମାନେ କ'ଣ ଶୋଇଥିଲେ?)<br><br><span style='color:green;'>Answer:</span> No, they were eating and drinking.<br>(ନା, ସେମାନେ ଖାଉଥିଲେ ଓ ପିଉଥିଲେ ।)",

        "<span style='color:red;'>Q-4 (Where = କେଉଁଠି):</span> Where were the people eating and drinking?<br>(ଲୋକମାନେ କେଉଁଠି ଖାଉଥିଲେ ଓ ପିଉଥିଲେ?)<br><br><span style='color:green;'>Answer:</span> They were in the restaurant.<br>(ସେମାନେ ରେଷ୍ଟୁରାଣ୍ଟରେ ଥିଲେ ।)"
    ]
},
{
    heading: "NOTE-4: ବାକ୍ୟ-୪ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>The restaurant was very crowded.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>The restaurant was.<br>ଅର୍ଥ : ରେଷ୍ଟୁରାଣ୍ଟ ଥିଲା ।<br><br>The restaurant was crowded.<br>ଅର୍ଥ : ରେଷ୍ଟୁରାଣ୍ଟ ଭିଡ଼ ଥିଲା ।<br><br>The restaurant was very crowded.<br>ଅର୍ଥ : ରେଷ୍ଟୁରାଣ୍ଟ ବହୁତ ଭିଡ଼ ଥିଲା ।<br><br>Crowded ଅର୍ଥ ହେଉଛି ଲୋକ ଭର୍ତ୍ତି ବା ଭିଡ଼ପୂର୍ଣ୍ଣ ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (What = କ'ଣ):</span> What was very crowded?<br>(କ'ଣ ବହୁତ ଭିଡ଼ ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> The restaurant was very crowded.<br>(ରେଷ୍ଟୁରାଣ୍ଟ ବହୁତ ଭିଡ଼ ଥିଲା ।)",

        "<span style='color:red;'>Q-2 (How = କେମିତି):</span> How was the restaurant?<br>(ରେଷ୍ଟୁରାଣ୍ଟ କେମିତି ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> It was very crowded.<br>(ଏହା ବହୁତ ଭିଡ଼ ଥିଲା ।)",

        "<span style='color:red;'>Q-3 (Meaning = ଅର୍ଥ):</span> What does crowded mean?<br>(Crowded ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Crowded means full of people.<br>(Crowded ର ଅର୍ଥ ହେଉଛି ଲୋକ ଭର୍ତ୍ତି ।)",

        "<span style='color:red;'>Q-4 (Was it empty?):</span> Was the restaurant empty?<br>(ରେଷ୍ଟୁରାଣ୍ଟ କ'ଣ ଖାଲି ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> No, it was very crowded.<br>(ନା, ଏହା ବହୁତ ଭିଡ଼ ଥିଲା ।)"
    ]
},

    {
    heading: "NOTE-5: ବାକ୍ୟ-୫ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>I saw that some of the chairs and tables had been pushed into a corner.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>I saw.<br>ଅର୍ଥ : ମୁଁ ଦେଖିଲି ।<br><br>I saw that some of the chairs and tables.<br>ଅର୍ଥ : ମୁଁ ଦେଖିଲି ଯେ କେତେକ ଚେୟାର ଓ ଟେବୁଲ ।<br><br>Some of the chairs and tables had been pushed.<br>ଅର୍ଥ : କେତେକ ଚେୟାର ଓ ଟେବୁଲକୁ ଠେଲି ଦିଆଯାଇଥିଲା ।<br><br>Some of the chairs and tables had been pushed into a corner.<br>ଅର୍ଥ : କେତେକ ଚେୟାର ଓ ଟେବୁଲକୁ ଗୋଟିଏ କୋଣକୁ ଠେଲି ଦିଆଯାଇଥିଲା ।<br><br>I saw that some of the chairs and tables had been pushed into a corner.<br>ଅର୍ଥ : ମୁଁ ଦେଖିଲି ଯେ କେତେକ ଚେୟାର ଓ ଟେବୁଲକୁ ଗୋଟିଏ କୋଣକୁ ଠେଲି ଦିଆଯାଇଥିଲା ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Who = କିଏ):</span> Who saw the chairs and tables?<br>(ଚେୟାର ଓ ଟେବୁଲକୁ କିଏ ଦେଖିଥିଲା?)<br><br><span style='color:green;'>Answer:</span> I saw the chairs and tables.<br>(ମୁଁ ଚେୟାର ଓ ଟେବୁଲକୁ ଦେଖିଥିଲି ।)",

        "<span style='color:red;'>Q-2 (What = କ'ଣ):</span> What had been pushed?<br>(କ'ଣ ଠେଲି ଦିଆଯାଇଥିଲା?)<br><br><span style='color:green;'>Answer:</span> Some chairs and tables had been pushed.<br>(କେତେକ ଚେୟାର ଓ ଟେବୁଲକୁ ଠେଲି ଦିଆଯାଇଥିଲା ।)",

        "<span style='color:red;'>Q-3 (Where = କେଉଁଠାକୁ):</span> Where had the chairs and tables been pushed?<br>(ଚେୟାର ଓ ଟେବୁଲକୁ କେଉଁଠାକୁ ଠେଲି ଦିଆଯାଇଥିଲା?)<br><br><span style='color:green;'>Answer:</span> They had been pushed into a corner.<br>(ସେଗୁଡ଼ିକୁ ଗୋଟିଏ କୋଣକୁ ଠେଲି ଦିଆଯାଇଥିଲା ।)",

        "<span style='color:red;'>Q-4 (How many = କେତେ):</span> Were all the chairs and tables pushed?<br>(ସବୁ ଚେୟାର ଓ ଟେବୁଲକୁ ଠେଲି ଦିଆଯାଇଥିଲା କି?)<br><br><span style='color:green;'>Answer:</span> No, only some chairs and tables were pushed.<br>(ନା, କେବଳ କେତେକ ଚେୟାର ଓ ଟେବୁଲକୁ ଠେଲି ଦିଆଯାଇଥିଲା ।)"
    ]
},
{
    heading: "NOTE-6: ବାକ୍ୟ-୬ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>I chose the corner table, seated myself and started skimming through the newspaper.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>I chose the corner table.<br>ଅର୍ଥ : ମୁଁ କୋଣର ଟେବୁଲଟି ବାଛିଲି ।<br><br>I chose the corner table and seated myself.<br>ଅର୍ଥ : ମୁଁ କୋଣର ଟେବୁଲଟି ବାଛିଲି ଏବଂ ବସିଗଲି ।<br><br>I chose the corner table, seated myself and started.<br>ଅର୍ଥ : ମୁଁ କୋଣର ଟେବୁଲଟି ବାଛିଲି, ବସିଗଲି ଏବଂ ଆରମ୍ଭ କଲି ।<br><br>Started skimming through the newspaper.<br>ଅର୍ଥ : ଖବରକାଗଜକୁ ଶୀଘ୍ର ପଢିବା ଆରମ୍ଭ କଲି ।<br><br>I chose the corner table, seated myself and started skimming through the newspaper.<br>ଅର୍ଥ : ମୁଁ କୋଣର ଟେବୁଲଟି ବାଛିଲି, ବସିଗଲି ଏବଂ ଖବରକାଗଜକୁ ଶୀଘ୍ର ପଢିବା ଆରମ୍ଭ କଲି ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Which = କେଉଁ):</span> Which table did I choose?<br>(ମୁଁ କେଉଁ ଟେବୁଲ ବାଛିଥିଲି?)<br><br><span style='color:green;'>Answer:</span> I chose the corner table.<br>(ମୁଁ କୋଣର ଟେବୁଲଟି ବାଛିଥିଲି ।)",

        "<span style='color:red;'>Q-2 (What next = ତାପରେ):</span> What did I do after choosing the table?<br>(ଟେବୁଲ ବାଛିବା ପରେ ମୁଁ କ'ଣ କଲି?)<br><br><span style='color:green;'>Answer:</span> I seated myself.<br>(ମୁଁ ବସିଗଲି ।)",

        "<span style='color:red;'>Q-3 (What = କ'ଣ):</span> What did I start reading?<br>(ମୁଁ କ'ଣ ପଢିବା ଆରମ୍ଭ କଲି?)<br><br><span style='color:green;'>Answer:</span> I started reading the newspaper.<br>(ମୁଁ ଖବରକାଗଜ ପଢିବା ଆରମ୍ଭ କଲି ।)",

        "<span style='color:red;'>Q-4 (Meaning = ଅର୍ଥ):</span> What does skimming mean?<br>(Skimming ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Skimming means reading quickly.<br>(Skimming ର ଅର୍ଥ ହେଉଛି ଶୀଘ୍ର ପଢିବା ।)"
    ]
},
{
    heading: "NOTE-7: ବାକ୍ୟ-୭ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>At that moment I noticed a very young girl looking at me.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>At that moment.<br>ଅର୍ଥ : ସେହି ମୁହୂର୍ତ୍ତରେ ।<br><br>I noticed a very young girl.<br>ଅର୍ଥ : ମୁଁ ଜଣେ ବହୁତ ଛୋଟ ଝିଅକୁ ଲକ୍ଷ୍ୟ କଲି ।<br><br>A very young girl looking at me.<br>ଅର୍ଥ : ଜଣେ ବହୁତ ଛୋଟ ଝିଅ ମୋତେ ଚାହିଁଥିଲା ।<br><br>At that moment I noticed a very young girl looking at me.<br>ଅର୍ଥ : ସେହି ମୁହୂର୍ତ୍ତରେ ମୁଁ ଜଣେ ବହୁତ ଛୋଟ ଝିଅ ମୋତେ ଚାହିଁଥିବାର ଦେଖିଲି ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (When = କେବେ):</span> When did I notice the girl?<br>(ମୁଁ ଝିଅଟିକୁ କେବେ ଲକ୍ଷ୍ୟ କଲି?)<br><br><span style='color:green;'>Answer:</span> I noticed the girl at that moment.<br>(ମୁଁ ସେହି ମୁହୂର୍ତ୍ତରେ ଝିଅଟିକୁ ଲକ୍ଷ୍ୟ କଲି ।)",

        "<span style='color:red;'>Q-2 (Who = କିଏ):</span> Whom did I notice?<br>(ମୁଁ କାହାକୁ ଲକ୍ଷ୍ୟ କଲି?)<br><br><span style='color:green;'>Answer:</span> I noticed a very young girl.<br>(ମୁଁ ଜଣେ ବହୁତ ଛୋଟ ଝିଅକୁ ଲକ୍ଷ୍ୟ କଲି ।)",

        "<span style='color:red;'>Q-3 (How = କେମିତି):</span> How was the girl?<br>(ଝିଅଟି କେମିତି ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> The girl was very young.<br>(ଝିଅଟି ବହୁତ ଛୋଟ ଥିଲା ।)",

        "<span style='color:red;'>Q-4 (Looking at whom = କାହାକୁ):</span> Whom was the girl looking at?<br>(ଝିଅଟି କାହାକୁ ଚାହିଁଥିଲା?)<br><br><span style='color:green;'>Answer:</span> The girl was looking at me.<br>(ଝିଅଟି ମୋତେ ଚାହିଁଥିଲା ।)"
    ]
},

    {
    heading: "NOTE-8: ବାକ୍ୟ-୮ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>Her eyes were large and they had a sad expression.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>Her eyes were large.<br>ଅର୍ଥ : ତାର ଆଖି ବଡ଼ ଥିଲା ।<br><br>They had a sad expression.<br>ଅର୍ଥ : ସେଥିରେ ଦୁଃଖର ଭାବ ଥିଲା ।<br><br>Her eyes were large and they had a sad expression.<br>ଅର୍ଥ : ତାର ଆଖି ବଡ଼ ଥିଲା ଏବଂ ସେଥିରେ ଦୁଃଖର ଭାବ ଦେଖାଯାଉଥିଲା ।<br><br>Sad expression ଅର୍ଥ ହେଉଛି ଦୁଃଖିତ ଭାବ ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Whose = କାହାର):</span> Whose eyes were large?<br>(କାହାର ଆଖି ବଡ଼ ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> The girl's eyes were large.<br>(ଝିଅଟିର ଆଖି ବଡ଼ ଥିଲା ।)",

        "<span style='color:red;'>Q-2 (How = କେମିତି):</span> How were her eyes?<br>(ତାର ଆଖି କେମିତି ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> Her eyes were large.<br>(ତାର ଆଖି ବଡ଼ ଥିଲା ।)",

        "<span style='color:red;'>Q-3 (What kind = କେଉଁ ପ୍ରକାର):</span> What expression did her eyes have?<br>(ତାର ଆଖିରେ କେଉଁ ଭାବ ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> Her eyes had a sad expression.<br>(ତାର ଆଖିରେ ଦୁଃଖର ଭାବ ଥିଲା ।)",

        "<span style='color:red;'>Q-4 (Meaning = ଅର୍ଥ):</span> What does sad expression mean?<br>(Sad expression ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Sad expression means a sad feeling.<br>(Sad expression ର ଅର୍ଥ ହେଉଛି ଦୁଃଖିତ ଭାବ ।)"
    ]
},
{
    heading: "NOTE-9: ବାକ୍ୟ-୯ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>As she was going out she asked the cashier in a low voice, 'Is that gentleman an Indian?'</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>She was going out.<br>ଅର୍ଥ : ସେ ବାହାରକୁ ଯାଉଥିଲା ।<br><br>She asked the cashier.<br>ଅର୍ଥ : ସେ କ୍ୟାସିୟରଙ୍କୁ ପଚାରିଲା ।<br><br>She asked the cashier in a low voice.<br>ଅର୍ଥ : ସେ ଧୀର ସ୍ୱରରେ କ୍ୟାସିୟରଙ୍କୁ ପଚାରିଲା ।<br><br>Is that gentleman an Indian?<br>ଅର୍ଥ : ସେହି ଭଦ୍ରଲୋକ ଜଣେ ଭାରତୀୟ କି ?<br><br>As she was going out she asked the cashier in a low voice, 'Is that gentleman an Indian?'<br>ଅର୍ଥ : ସେ ବାହାରକୁ ଯାଉଥିବା ବେଳେ ଧୀର ସ୍ୱରରେ କ୍ୟାସିୟରଙ୍କୁ ପଚାରିଲା, 'ସେହି ଭଦ୍ରଲୋକ ଜଣେ ଭାରତୀୟ କି ?'"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Who = କିଏ):</span> Who asked the cashier?<br>(କିଏ କ୍ୟାସିୟରଙ୍କୁ ପଚାରିଲା?)<br><br><span style='color:green;'>Answer:</span> The girl asked the cashier.<br>(ଝିଅଟି କ୍ୟାସିୟରଙ୍କୁ ପଚାରିଲା ।)",

        "<span style='color:red;'>Q-2 (When = କେବେ):</span> When did she ask the cashier?<br>(ସେ କେବେ କ୍ୟାସିୟରଙ୍କୁ ପଚାରିଲା?)<br><br><span style='color:green;'>Answer:</span> She asked while going out.<br>(ସେ ବାହାରକୁ ଯାଉଥିବା ବେଳେ ପଚାରିଲା ।)",

        "<span style='color:red;'>Q-3 (How = କେମିତି):</span> How did she ask?<br>(ସେ କେମିତି ପଚାରିଲା?)<br><br><span style='color:green;'>Answer:</span> She asked in a low voice.<br>(ସେ ଧୀର ସ୍ୱରରେ ପଚାରିଲା ।)",

        "<span style='color:red;'>Q-4 (What = କ'ଣ):</span> What did she ask?<br>(ସେ କ'ଣ ପଚାରିଲା?)<br><br><span style='color:green;'>Answer:</span> She asked if the gentleman was an Indian.<br>(ସେ ପଚାରିଲା ଯେ ଭଦ୍ରଲୋକ ଜଣେ ଭାରତୀୟ କି ।)"
    ]
},
{
    heading: "NOTE-10: ବାକ୍ୟ-୧୦ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>'I think so', the cashier replied.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>I think.<br>ଅର୍ଥ : ମୁଁ ଭାବୁଛି ।<br><br>I think so.<br>ଅର୍ଥ : ମୁଁ ସେପରି ଭାବୁଛି ।<br><br>The cashier replied.<br>ଅର୍ଥ : କ୍ୟାସିୟର ଉତ୍ତର ଦେଲେ ।<br><br>'I think so', the cashier replied.<br>ଅର୍ଥ : 'ମୁଁ ସେପରି ଭାବୁଛି', କ୍ୟାସିୟର ଉତ୍ତର ଦେଲେ ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Who = କିଏ):</span> Who replied?<br>(କିଏ ଉତ୍ତର ଦେଲେ?)<br><br><span style='color:green;'>Answer:</span> The cashier replied.<br>(କ୍ୟାସିୟର ଉତ୍ତର ଦେଲେ ।)",

        "<span style='color:red;'>Q-2 (What = କ'ଣ):</span> What did the cashier say?<br>(କ୍ୟାସିୟର କ'ଣ କହିଲେ?)<br><br><span style='color:green;'>Answer:</span> He said, 'I think so.'<br>(ସେ କହିଲେ, 'ମୁଁ ସେପରି ଭାବୁଛି ।')",

        "<span style='color:red;'>Q-3 (Meaning = ଅର୍ଥ):</span> What does 'I think so' mean?<br>(I think so ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> It means 'I believe it is true.'<br>(ଏହାର ଅର୍ଥ 'ମୁଁ ଏହା ସତ ବୋଲି ଭାବୁଛି ।')",

        "<span style='color:red;'>Q-4 (To whom = କାହାକୁ):</span> To whom did the cashier reply?<br>(କ୍ୟାସିୟର କାହାକୁ ଉତ୍ତର ଦେଲେ?)<br><br><span style='color:green;'>Answer:</span> He replied to the girl.<br>(ସେ ଝିଅଟିକୁ ଉତ୍ତର ଦେଲେ ।)"
    ]
},

    {
    heading: "NOTE-11: ବାକ୍ୟ-୧୧ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>The girl looked at me once more, and went out.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>The girl looked at me.<br>ଅର୍ଥ : ଝିଅଟି ମୋତେ ଚାହିଁଲା ।<br><br>The girl looked at me once more.<br>ଅର୍ଥ : ଝିଅଟି ମୋତେ ଆଉ ଥରେ ଚାହିଁଲା ।<br><br>The girl went out.<br>ଅର୍ଥ : ଝିଅଟି ବାହାରକୁ ଚାଲିଗଲା ।<br><br>The girl looked at me once more, and went out.<br>ଅର୍ଥ : ଝିଅଟି ମୋତେ ଆଉ ଥରେ ଚାହିଁଲା ଏବଂ ବାହାରକୁ ଚାଲିଗଲା ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Who = କିଏ):</span> Who looked at me once more?<br>(କିଏ ମୋତେ ଆଉ ଥରେ ଚାହିଁଲା?)<br><br><span style='color:green;'>Answer:</span> The girl looked at me once more.<br>(ଝିଅଟି ମୋତେ ଆଉ ଥରେ ଚାହିଁଲା ।)",

        "<span style='color:red;'>Q-2 (Whom = କାହାକୁ):</span> Whom did the girl look at?<br>(ଝିଅଟି କାହାକୁ ଚାହିଁଲା?)<br><br><span style='color:green;'>Answer:</span> The girl looked at me.<br>(ଝିଅଟି ମୋତେ ଚାହିଁଲା ।)",

        "<span style='color:red;'>Q-3 (How many times = କେତେ ଥର):</span> How many times did she look at me again?<br>(ସେ ମୋତେ ପୁଣି କେତେ ଥର ଚାହିଁଲା?)<br><br><span style='color:green;'>Answer:</span> She looked at me once more.<br>(ସେ ମୋତେ ଆଉ ଥରେ ଚାହିଁଲା ।)",

        "<span style='color:red;'>Q-4 (What next = ତାପରେ):</span> What did she do next?<br>(ତାପରେ ସେ କ'ଣ କଲା?)<br><br><span style='color:green;'>Answer:</span> She went out.<br>(ସେ ବାହାରକୁ ଚାଲିଗଲା ।)"
    ]
},
{
    heading: "NOTE-12: ବାକ୍ୟ-୧୨ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>It surprised me.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>It surprised.<br>ଅର୍ଥ : ଏହା ଆଶ୍ଚର୍ଯ୍ୟ କଲା ।<br><br>It surprised me.<br>ଅର୍ଥ : ଏହା ମୋତେ ଆଶ୍ଚର୍ଯ୍ୟ କରିଦେଲା ।<br><br>Surprised ଅର୍ଥ ହେଉଛି ଆଶ୍ଚର୍ଯ୍ୟ କରିଦେବା ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (What = କ'ଣ):</span> What surprised me?<br>(କ'ଣ ମୋତେ ଆଶ୍ଚର୍ଯ୍ୟ କଲା?)<br><br><span style='color:green;'>Answer:</span> The girl's behaviour surprised me.<br>(ଝିଅଟିର ବ୍ୟବହାର ମୋତେ ଆଶ୍ଚର୍ଯ୍ୟ କଲା ।)",

        "<span style='color:red;'>Q-2 (Whom = କାହାକୁ):</span> Whom did it surprise?<br>(ଏହା କାହାକୁ ଆଶ୍ଚର୍ଯ୍ୟ କଲା?)<br><br><span style='color:green;'>Answer:</span> It surprised me.<br>(ଏହା ମୋତେ ଆଶ୍ଚର୍ଯ୍ୟ କଲା ।)",

        "<span style='color:red;'>Q-3 (Meaning = ଅର୍ଥ):</span> What does surprised mean?<br>(Surprised ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Surprised means amazed.<br>(Surprised ର ଅର୍ଥ ହେଉଛି ଆଶ୍ଚର୍ଯ୍ୟ ହେବା ।)",

        "<span style='color:red;'>Q-4 (Feeling = ଭାବ):</span> How did I feel?<br>(ମୁଁ କେମିତି ଅନୁଭବ କଲି?)<br><br><span style='color:green;'>Answer:</span> I felt surprised.<br>(ମୁଁ ଆଶ୍ଚର୍ଯ୍ୟ ଅନୁଭବ କଲି ।)"
    ]
},
{
    heading: "NOTE-13: ବାକ୍ୟ-୧୩ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>Why?</b><br><br>ଆସନ୍ତୁ, ଏହି ଛୋଟ ବାକ୍ୟର ଅର୍ଥ ବୁଝିବା:<br><br>Why?<br>ଅର୍ଥ : କାହିଁକି ?<br><br>ଏଠାରେ ଲେଖକ ଭାବୁଛନ୍ତି ଯେ ତାଙ୍କୁ ଆଶ୍ଚର୍ଯ୍ୟ କାହିଁକି ଲାଗିଲା ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Meaning = ଅର୍ଥ):</span> What does Why mean?<br>(Why ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Why means କାହିଁକି.<br>(Why ର ଅର୍ଥ କାହିଁକି ।)",

        "<span style='color:red;'>Q-2 (Who = କିଏ):</span> Who asked 'Why'?<br>('କାହିଁକି?' କିଏ ଭାବିଲା?)<br><br><span style='color:green;'>Answer:</span> The narrator asked 'Why'.<br>(କାହାଣୀ କହୁଥିବା ବ୍ୟକ୍ତି 'କାହିଁକି?' ଭାବିଲେ ।)",

        "<span style='color:red;'>Q-3 (Reason = କାରଣ):</span> Why did he think 'Why'?<br>(ସେ କାହିଁକି 'କାହିଁକି?' ଭାବିଲେ?)<br><br><span style='color:green;'>Answer:</span> Because he was surprised.<br>(କାରଣ ସେ ଆଶ୍ଚର୍ଯ୍ୟ ହୋଇଥିଲେ ।)",

        "<span style='color:red;'>Q-4 (Type = ପ୍ରକାର):</span> Is 'Why' a question word?<br>(Why କ'ଣ ଏକ ପ୍ରଶ୍ନବାଚକ ଶବ୍ଦ?)<br><br><span style='color:green;'>Answer:</span> Yes, Why is a question word.<br>(ହଁ, Why ଏକ ପ୍ରଶ୍ନବାଚକ ଶବ୍ଦ ।)"
    ]
},
{
    heading: "NOTE-14: ବାକ୍ୟ-୧୪ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>What was the matter?</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବୁଝିବା:<br><br>What was the matter?<br>ଅର୍ଥ : କ'ଣ ସମସ୍ୟା ଥିଲା ?<br><br>Matter ଅର୍ଥ ହେଉଛି ବିଷୟ ବା ସମସ୍ୟା ।<br><br>ଏଠାରେ ଲେଖକ ଭାବୁଛନ୍ତି ଯେ କ'ଣ ସମସ୍ୟା ଥିଲା ବା କ'ଣ କଥା ଥିଲା ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Meaning = ଅର୍ଥ):</span> What does 'What was the matter?' mean?<br>(What was the matter? ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> It means 'What was the problem?'<br>(ଏହାର ଅର୍ଥ 'କ'ଣ ସମସ୍ୟା ଥିଲା?' ।)",

        "<span style='color:red;'>Q-2 (Word Meaning = ଶବ୍ଦାର୍ଥ):</span> What does matter mean?<br>(Matter ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Matter means problem or issue.<br>(Matter ର ଅର୍ଥ ସମସ୍ୟା ବା ବିଷୟ ।)",

        "<span style='color:red;'>Q-3 (Who = କିଏ):</span> Who thought about the matter?<br>(ସମସ୍ୟା ବିଷୟରେ କିଏ ଭାବୁଥିଲେ?)<br><br><span style='color:green;'>Answer:</span> The narrator thought about it.<br>(କାହାଣୀ କହୁଥିବା ବ୍ୟକ୍ତି ଏହା ବିଷୟରେ ଭାବୁଥିଲେ ।)",

        "<span style='color:red;'>Q-4 (Reason = କାରଣ):</span> Why did he think about the matter?<br>(ସେ କାହିଁକି ଏହା ବିଷୟରେ ଭାବୁଥିଲେ?)<br><br><span style='color:green;'>Answer:</span> Because he was surprised and curious.<br>(କାରଣ ସେ ଆଶ୍ଚର୍ଯ୍ୟ ଓ ଉତ୍ସୁକ ଥିଲେ ।)"
    ]
},

    {
    heading: "NOTE-15: ବାକ୍ୟ-୧୫ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>Her interest in me aroused my curiosity in her.</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>Her interest in me.<br>ଅର୍ଥ : ମୋ ପ୍ରତି ତାର ଆଗ୍ରହ ।<br><br>Her interest in me aroused my curiosity.<br>ଅର୍ଥ : ମୋ ପ୍ରତି ତାର ଆଗ୍ରହ ମୋର କୌତୁହଳ ବଢ଼ାଇଲା ।<br><br>My curiosity in her.<br>ଅର୍ଥ : ତା ବିଷୟରେ ମୋର କୌତୁହଳ ।<br><br>Her interest in me aroused my curiosity in her.<br>ଅର୍ଥ : ମୋ ପ୍ରତି ତାର ଆଗ୍ରହ ତା ବିଷୟରେ ମୋର କୌତୁହଳ ସୃଷ୍ଟି କଲା ।<br><br>Curiosity ଅର୍ଥ ହେଉଛି ଜାଣିବାର ଇଚ୍ଛା ବା କୌତୁହଳ ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Whose = କାହାର):</span> Whose interest aroused curiosity?<br>(କାହାର ଆଗ୍ରହ କୌତୁହଳ ସୃଷ୍ଟି କଲା?)<br><br><span style='color:green;'>Answer:</span> The girl's interest aroused curiosity.<br>(ଝିଅଟିର ଆଗ୍ରହ କୌତୁହଳ ସୃଷ୍ଟି କଲା ।)",

        "<span style='color:red;'>Q-2 (What = କ'ଣ):</span> What did her interest arouse?<br>(ତାର ଆଗ୍ରହ କ'ଣ ସୃଷ୍ଟି କଲା?)<br><br><span style='color:green;'>Answer:</span> It aroused my curiosity.<br>(ଏହା ମୋର କୌତୁହଳ ସୃଷ୍ଟି କଲା ।)",

        "<span style='color:red;'>Q-3 (About whom = କାହା ବିଷୟରେ):</span> Curiosity about whom?<br>(କାହା ବିଷୟରେ କୌତୁହଳ?)<br><br><span style='color:green;'>Answer:</span> Curiosity about the girl.<br>(ଝିଅଟି ବିଷୟରେ କୌତୁହଳ ।)",

        "<span style='color:red;'>Q-4 (Meaning = ଅର୍ଥ):</span> What does curiosity mean?<br>(Curiosity ର ଅର୍ଥ କ'ଣ?)<br><br><span style='color:green;'>Answer:</span> Curiosity means desire to know.<br>(Curiosity ର ଅର୍ଥ ହେଉଛି ଜାଣିବାର ଇଚ୍ଛା ।)"
    ]
},
{
    heading: "NOTE-16: ବାକ୍ୟ-୧୬ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>When I had finished my lunch I asked the waiter,</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>I had finished my lunch.<br>ଅର୍ଥ : ମୁଁ ମୋର ମଧ୍ୟାହ୍ନ ଭୋଜନ ଶେଷ କରିଥିଲି ।<br><br>When I had finished my lunch.<br>ଅର୍ଥ : ଯେତେବେଳେ ମୁଁ ମୋର ମଧ୍ୟାହ୍ନ ଭୋଜନ ଶେଷ କରିଥିଲି ।<br><br>I asked the waiter.<br>ଅର୍ଥ : ମୁଁ ୱେଟରଙ୍କୁ ପଚାରିଲି ।<br><br>When I had finished my lunch I asked the waiter.<br>ଅର୍ଥ : ଯେତେବେଳେ ମୁଁ ମୋର ମଧ୍ୟାହ୍ନ ଭୋଜନ ଶେଷ କରିଥିଲି, ମୁଁ ୱେଟରଙ୍କୁ ପଚାରିଲି ।"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (What = କ'ଣ):</span> What had I finished?<br>(ମୁଁ କ'ଣ ଶେଷ କରିଥିଲି?)<br><br><span style='color:green;'>Answer:</span> I had finished my lunch.<br>(ମୁଁ ମୋର ମଧ୍ୟାହ୍ନ ଭୋଜନ ଶେଷ କରିଥିଲି ।)",

        "<span style='color:red;'>Q-2 (When = କେବେ):</span> When did I ask the waiter?<br>(ମୁଁ କେବେ ୱେଟରଙ୍କୁ ପଚାରିଲି?)<br><br><span style='color:green;'>Answer:</span> I asked after finishing lunch.<br>(ମୁଁ ମଧ୍ୟାହ୍ନ ଭୋଜନ ଶେଷ କରିବା ପରେ ପଚାରିଲି ।)",

        "<span style='color:red;'>Q-3 (Whom = କାହାକୁ):</span> Whom did I ask?<br>(ମୁଁ କାହାକୁ ପଚାରିଲି?)<br><br><span style='color:green;'>Answer:</span> I asked the waiter.<br>(ମୁଁ ୱେଟରଙ୍କୁ ପଚାରିଲି ।)",

        "<span style='color:red;'>Q-4 (Who = କିଏ):</span> Who asked the waiter?<br>(କିଏ ୱେଟରଙ୍କୁ ପଚାରିଲା?)<br><br><span style='color:green;'>Answer:</span> I asked the waiter.<br>(ମୁଁ ୱେଟରଙ୍କୁ ପଚାରିଲି ।)"
    ]
},
{
    heading: "NOTE-17: ବାକ୍ୟ-୧୭ କୁ ପଢିବା ଏବଂ ବୁଝିବା:",

    audioPoints: [
        {
            text: "👉 ENGLISH SENTENCE (ଇଂରାଜୀ ବାକ୍ୟ):<br><br><b>'Do you know the girl who was sitting out there?'</b><br><br>ଆସନ୍ତୁ, ଧୀରେ ଧୀରେ ଏହାର ଅର୍ଥ ବାହାର କରିବା:<br><br>Do you know the girl?<br>ଅର୍ଥ : ଆପଣ ସେହି ଝିଅଟିକୁ ଜାଣନ୍ତି କି ?<br><br>The girl was sitting out there.<br>ଅର୍ଥ : ଝିଅଟି ସେଠାରେ ବାହାରେ ବସିଥିଲା ।<br><br>Do you know the girl who was sitting out there?<br>ଅର୍ଥ : ଆପଣ ସେଠାରେ ବାହାରେ ବସିଥିବା ଝିଅଟିକୁ ଜାଣନ୍ତି କି ?"
        }
    ],

    questions: [
        "<span style='color:red;'>Q-1 (Whom = କାହାକୁ):</span> Whom did he ask about?<br>(ସେ କାହା ବିଷୟରେ ପଚାରିଲେ?)<br><br><span style='color:green;'>Answer:</span> He asked about the girl.<br>(ସେ ଝିଅଟି ବିଷୟରେ ପଚାରିଲେ ।)",

        "<span style='color:red;'>Q-2 (Who = କିଏ):</span> Who was sitting out there?<br>(ସେଠାରେ ବାହାରେ କିଏ ବସିଥିଲା?)<br><br><span style='color:green;'>Answer:</span> The girl was sitting out there.<br>(ଝିଅଟି ସେଠାରେ ବାହାରେ ବସିଥିଲା ।)",

        "<span style='color:red;'>Q-3 (Whom = କାହାକୁ):</span> Whom was the question asked to?<br>(ପ୍ରଶ୍ନଟି କାହାକୁ ପଚାରାଯାଇଥିଲା?)<br><br><span style='color:green;'>Answer:</span> The question was asked to the waiter.<br>(ପ୍ରଶ୍ନଟି ୱେଟରଙ୍କୁ ପଚାରାଯାଇଥିଲା ।)",

        "<span style='color:red;'>Q-4 (What = କ'ଣ):</span> What was the question?<br>(ପ୍ରଶ୍ନଟି କ'ଣ ଥିଲା?)<br><br><span style='color:green;'>Answer:</span> Do you know the girl who was sitting out there?<br>(ଆପଣ ସେଠାରେ ବାହାରେ ବସିଥିବା ଝିଅଟିକୁ ଜାଣନ୍ତି କି?)"
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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>Lead In —<br/>Gifts and Their Value\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 Discussion\"]\nA --> I1[\"Gifts given on birthdays,<br/>weddings or special days.\"]\nA --> I2[\"Classmates discuss<br/>what gifts they'd give.\"]\nA --> I3[\"Why does a small gift<br/>become so valuable?\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 Meaning of 'Priceless'\"]\nM --> M1[\"Priceless means<br/>something of high value.\"]\nM --> M2[\"It is valuable<br/>because it is rare.\"]\nM --> M3[\"The story is set<br/>in a restaurant.\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 Purpose\"]\nC --> C1[\"Readers must match their<br/>discussion points to the story.\"]\nC --> C2[\"The story reveals why a<br/>gift can be priceless.\"]\nC --> C3[\"Title: 'The Priceless Gift'.\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>Part I —<br/>The Crowded Restaurant\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 The Setting\"]\nA --> I1[\"Narrator visits a<br/>vegetarian restaurant.\"]\nA --> I2[\"It is lunch time<br/>and very crowded.\"]\nA --> I3[\"Some chairs and tables<br/>had been pushed into a corner.\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 Narrator's Actions\"]\nM --> M1[\"He chose the<br/>corner table.\"]\nM --> M2[\"He seated himself<br/>and opened a newspaper.\"]\nM --> M3[\"He began skimming<br/>through the news.\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 Turning Point\"]\nC --> C1[\"A young girl is seen<br/>looking at him.\"]\nC --> C2[\"Her eyes are large<br/>with a sad expression.\"]\nC --> C3[\"This sets up the<br/>story's mystery.\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-3:<br/>Part I —<br/>The Mysterious Girl\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 The Question\"]\nA --> I1[\"While leaving, the girl<br/>asks the cashier in a low voice.\"]\nA --> I2[\"She asks: 'Is that<br/>gentleman an Indian?'\"]\nA --> I3[\"The cashier replies,<br/>'I think so.'\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 Her Reaction\"]\nM --> M1[\"The girl looks at the<br/>narrator once more.\"]\nM --> M2[\"She then goes out<br/>of the restaurant.\"]\nM --> M3[\"Her behaviour<br/>surprises the narrator.\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 Rising Curiosity\"]\nC --> C1[\"The narrator wonders<br/>what the matter was.\"]\nC --> C2[\"Her interest in him<br/>arouses his curiosity.\"]\nC --> C3[\"He asks the waiter if<br/>he knows the girl.\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 8 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3 body;\nclass C,C1,C2,C3 conclusion;`
  ]
      
}  
]
};  
