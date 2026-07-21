const wordData = {
    currentWord: 0,
    words: [
        {
            word: "SHAPE",
            odia: "ଆକୃତି",
            emoji: "🔷",
            odiaUse: "ଆକୃତି ଅର୍ଥ ବସ୍ତୁର ରୂପ ବା ଗଠନ । ପତ୍ର, ଫୁଲ ଓ ଫଳର ଭିନ୍ନ ଭିନ୍ନ ଆକୃତି ଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GEOMETRY",
            odia: "ଜ୍ୟାମିତି",
            emoji: "📐",
            odiaUse: "ଜ୍ୟାମିତି ଅର୍ଥ ଆକୃତି, ରେଖା, କୋଣ ଓ ମାପ ସମ୍ବନ୍ଧୀୟ ଗଣିତ ଶାସ୍ତ୍ର ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EARTH",
            odia: "ପୃଥିବୀ",
            emoji: "🌍",
            odiaUse: "ପୃଥିବୀ ଅର୍ଥ ଆମେ ବାସ କରୁଥିବା ଗ୍ରହ । ଜ୍ୟାମିତି ଶବ୍ଦରେ 'ଜ୍ୟା'ର ଅର୍ଥ ପୃଥିବୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MEASUREMENT",
            odia: "ମାପ",
            emoji: "📏",
            odiaUse: "ମାପ ଅର୍ଥ କୌଣସି ବସ୍ତୁର ଲମ୍ବ, ପ୍ରସ୍ଥ ବା ପରିମାଣ ନିର୍ଣ୍ଣୟ କରିବା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LAND",
            odia: "ଜମି",
            emoji: "🌾",
            odiaUse: "ଜମି ଅର୍ଥ ଭୂମି । ଜମି ମାପ କରିବାର ଆବଶ୍ୟକତାରୁ ଜ୍ୟାମିତିର ସୃଷ୍ଟି ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PYRAMID",
            odia: "ପିରାମିଡ୍",
            emoji: "🔺",
            odiaUse: "ପିରାମିଡ୍ ଅର୍ଥ ମିଶରର ପ୍ରସିଦ୍ଧ ବିଶାଳ ସ୍ଥାପତ୍ୟ । ଏହା ଉନ୍ନତ ଜ୍ୟାମିତି ଜ୍ଞାନର ନିଦର୍ଶନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CIVILIZATION",
            odia: "ସଭ୍ୟତା",
            emoji: "🏛️",
            odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ମନୁଷ୍ୟ ସମାଜର ଉନ୍ନତ ଜୀବନଧାରା । ମାନବ ସଭ୍ୟତା ସହିତ ଜ୍ୟାମିତିର ବିକାଶ ଜଡ଼ିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FORMULA",
            odia: "ସୂତ୍ର",
            emoji: "📘",
            odiaUse: "ସୂତ୍ର ଅର୍ଥ ନିୟମ ବା ସିଦ୍ଧାନ୍ତ । ପ୍ରାଚୀନ ଋଷିମାନେ ବିଭିନ୍ନ ଜ୍ୟାମିତିକ ସୂତ୍ରର ପ୍ରୟୋଗ କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "THEOREM",
            odia: "ଉପପାଦ୍ୟ",
            emoji: "📝",
            odiaUse: "ଉପପାଦ୍ୟ ଅର୍ଥ ପ୍ରମାଣ କରାଯାଇଥିବା ଗଣିତୀୟ ସତ୍ୟ । ଇଉକ୍ଲିଡ୍ ତାଙ୍କ ଗ୍ରନ୍ଥରେ ଅନେକ ଉପପାଦ୍ୟ ଦେଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPERIMENT",
            odia: "ପରୀକ୍ଷା",
            emoji: "🧪",
            odiaUse: "ପରୀକ୍ଷା ଅର୍ଥ ଯାଞ୍ଚ କରିବାର ପ୍ରକ୍ରିୟା । ପ୍ରଥମେ ଜ୍ୟାମିତିର ସୂତ୍ରଗୁଡ଼ିକ ପରୀକ୍ଷାମୂଳକ ଉପାୟରେ ନିଶ୍ଚିତ ହେଉଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OBSERVATION",
            odia: "ପର୍ଯ୍ୟବେକ୍ଷଣ",
            emoji: "👀",
            odiaUse: "ପର୍ଯ୍ୟବେକ୍ଷଣ ଅର୍ଥ ଭଲଭାବେ ଦେଖି ଅଧ୍ୟୟନ କରିବା । ପର୍ଯ୍ୟବେକ୍ଷଣରୁ ଅନେକ ଜ୍ୟାମିତିକ ସୂତ୍ର ସୃଷ୍ଟି ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LOGIC",
            odia: "ତର୍କ",
            emoji: "🧠",
            odiaUse: "ତର୍କ ଅର୍ଥ ଯୁକ୍ତିପୂର୍ଣ୍ଣ ଚିନ୍ତା । ଗ୍ରୀକ୍ ବିଦ୍ୱାନମାନେ ତର୍କ ଦ୍ୱାରା ଜ୍ୟାମିତିର ସିଦ୍ଧାନ୍ତ ପ୍ରତିପାଦନ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GEOMETER",
            odia: "ଗଣିତଜ୍ଞ",
            emoji: "👨‍🏫",
            odiaUse: "ଗଣିତଜ୍ଞ ଅର୍ଥ ଗଣିତ ବିଷୟର ପଣ୍ଡିତ । ଇଉକ୍ଲିଡ୍ ଜଣେ ପ୍ରସିଦ୍ଧ ଗଣିତଜ୍ଞ ଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SET",
            odia: "ସେଟ୍",
            emoji: "🗂️",
            odiaUse: "ସେଟ୍ ଅର୍ଥ ବସ୍ତୁଗୁଡ଼ିକର ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସମୂହ । ଆଧୁନିକ ଗଣିତରେ ସେଟ୍‌ର ବ୍ୟବହାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PLANE GEOMETRY",
            odia: "ସମତଳ ଜ୍ୟାମିତି",
            emoji: "📏",
            odiaUse: "ସମତଳ ଜ୍ୟାମିତି ଅର୍ଥ ସମତଳ ଉପରେ ରେଖା ଓ ଆକୃତିର ଅଧ୍ୟୟନ । ବିଦ୍ୟାଳୟରେ ଆମେ ସମତଳ ଜ୍ୟାମିତି ପଢ଼ୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
