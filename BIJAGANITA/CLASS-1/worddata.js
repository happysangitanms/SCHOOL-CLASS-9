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
