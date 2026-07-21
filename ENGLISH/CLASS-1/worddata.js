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
