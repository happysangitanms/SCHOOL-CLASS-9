const wordData = {
    currentWord: 0,
    words: [
        {
            word: "SENTENCE",
            odia: "ବାକ୍ୟ",
            emoji: "📝",
            odiaUse: "SENTENCE ଅର୍ଥ ବାକ୍ୟ । ଆମେ ନିଜ ଭାବନା ବାକ୍ୟ ମାଧ୍ୟମରେ ପ୍ରକାଶ କରୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FEELINGS",
            odia: "ଅନୁଭୂତି",
            emoji: "❤️",
            odiaUse: "FEELINGS ଅର୍ଥ ଅନୁଭୂତି । ଆମେ ଆମର ଅନୁଭୂତି ବାକ୍ୟରେ କହିଥାଉ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VIEWS",
            odia: "ମତାମତ",
            emoji: "🗣️",
            odiaUse: "VIEWS ଅର୍ଥ ମତାମତ । ଆମେ ଆମର ମତାମତ ବାକ୍ୟ ମାଧ୍ୟମରେ ପ୍ରକାଶ କରୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MEANINGFUL",
            odia: "ଅର୍ଥପୂର୍ଣ୍ଣ",
            emoji: "✅",
            odiaUse: "MEANINGFUL ଅର୍ଥ ଅର୍ଥପୂର୍ଣ୍ଣ । ବାକ୍ୟଟି ଅର୍ଥପୂର୍ଣ୍ଣ ହେବା ଆବଶ୍ୟକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPRESSION",
            odia: "ପ୍ରକାଶ",
            emoji: "💭",
            odiaUse: "EXPRESSION ଅର୍ଥ ପ୍ରକାଶ । ବାକ୍ୟଟି ଏକ ଅର୍ଥପୂର୍ଣ୍ଣ ପ୍ରକାଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POPULAR",
            odia: "ଲୋକପ୍ରିୟ",
            emoji: "⭐",
            odiaUse: "POPULAR ଅର୍ଥ ଲୋକପ୍ରିୟ । ଦିଲିପ ତିର୍କି ଜଣେ ଲୋକପ୍ରିୟ ହକି ଖେଳାଳୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HOCKEY",
            odia: "ହକି",
            emoji: "🏑",
            odiaUse: "HOCKEY ଏକ ଖେଳ । ଦିଲିପ ତିର୍କି ଜଣେ ହକି ଖେଳାଳୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INDUSTRIOUS",
            odia: "ପରିଶ୍ରମୀ",
            emoji: "💪",
            odiaUse: "INDUSTRIOUS ଅର୍ଥ ପରିଶ୍ରମୀ । ଚୀନା ଲୋକମାନେ ବହୁତ ପରିଶ୍ରମୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OXYGEN",
            odia: "ଅମ୍ଳଜାନ",
            emoji: "🌬️",
            odiaUse: "OXYGEN ଅର୍ଥ ଅମ୍ଳଜାନ । ଗଛଗୁଡ଼ିକ ଆମକୁ ଅମ୍ଳଜାନ ଦିଅନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTELLIGENT",
            odia: "ବୁଦ୍ଧିମାନ",
            emoji: "🧠",
            odiaUse: "INTELLIGENT ଅର୍ଥ ବୁଦ୍ଧିମାନ । ସେହି ପିଲାଟି ବୁଦ୍ଧିମାନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBJECT",
            odia: "କର୍ତ୍ତା",
            emoji: "👤",
            odiaUse: "SUBJECT ଅର୍ଥ କର୍ତ୍ତା । ବାକ୍ୟରେ ଯାହା ବିଷୟରେ କୁହାଯାଏ ତାହା SUBJECT ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PREDICATE",
            odia: "ବିଧେୟ",
            emoji: "💬",
            odiaUse: "PREDICATE ଅର୍ଥ ବିଧେୟ । SUBJECT ବିଷୟରେ ବାକ୍ୟରେ ଯାହା କୁହାଯାଏ ତାହା PREDICATE ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ORDER",
            odia: "କ୍ରମ",
            emoji: "🔢",
            odiaUse: "ORDER ଅର୍ଥ କ୍ରମ । ବାକ୍ୟରେ ଶବ୍ଦଗୁଡ଼ିକ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ରମରେ ସଜାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PATTERN",
            odia: "ଢାଞ୍ଚା",
            emoji: "🧩",
            odiaUse: "PATTERN ଅର୍ଥ ଢାଞ୍ଚା । ଶବ୍ଦଗୁଡ଼ିକ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଢାଞ୍ଚାରେ ସଜାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ACCEPTABLE",
            odia: "ଗ୍ରହଣୀୟ",
            emoji: "👍",
            odiaUse: "ACCEPTABLE ଅର୍ଥ ଗ୍ରହଣୀୟ । କିଛି ଢାଞ୍ଚା ଗ୍ରହଣୀୟ ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CLASSICAL",
            odia: "ଶାସ୍ତ୍ରୀୟ",
            emoji: "🎶",
            odiaUse: "CLASSICAL ଅର୍ଥ ଶାସ୍ତ୍ରୀୟ । ଇନ୍ଦ୍ରାଣୀ ଜଣେ ଶାସ୍ତ୍ରୀୟ ସଙ୍ଗୀତଜ୍ଞ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SINGER",
            odia: "ଗାୟିକା",
            emoji: "🎤",
            odiaUse: "SINGER ଅର୍ଥ ଗାୟିକା । ଇନ୍ଦ୍ରାଣୀ ଜଣେ ଶାସ୍ତ୍ରୀୟ ଗାୟିକା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WAITING",
            odia: "ଅପେକ୍ଷା",
            emoji: "⏳",
            odiaUse: "WAITING ଅର୍ଥ ଅପେକ୍ଷା । ତୁମେ ତାଙ୍କ ପାଇଁ ଅପେକ୍ଷା କରୁଛ କି ?",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COOKED",
            odia: "ରାନ୍ଧିଲି",
            emoji: "🍳",
            odiaUse: "COOKED ଅର୍ଥ ରାନ୍ଧିଲି । ମୁଁ ତୁମ ପାଇଁ ରାନ୍ଧି ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TALL",
            odia: "ଲମ୍ବା",
            emoji: "📏",
            odiaUse: "TALL ଅର୍ଥ ଲମ୍ବା । ସେ ଏକ ଲମ୍ବା ପିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NATION",
            odia: "ଜାତି",
            emoji: "🇮🇳",
            odiaUse: "NATION ଅର୍ଥ ଜାତି ବା ଦେଶ । ଗାନ୍ଧିଜୀ ଆମ ଜାତିର ପିତା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FATHER",
            odia: "ପିତା",
            emoji: "👨",
            odiaUse: "FATHER ଅର୍ଥ ପିତା । ଗାନ୍ଧିଜୀ ଆମ ଜାତିର ପିତା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GLITTERS",
            odia: "ଚକମକ ହୁଏ",
            emoji: "✨",
            odiaUse: "GLITTERS ଅର୍ଥ ଚକମକ ହୁଏ । ଯାହା ଚକମକ ହୁଏ ତାହା ସବୁ ସୁନା ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GOLD",
            odia: "ସୁନା",
            emoji: "🥇",
            odiaUse: "GOLD ଅର୍ଥ ସୁନା । ଯାହା ଚକମକ ହୁଏ ତାହା ସବୁ ସୁନା ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SWEETLY",
            odia: "ମଧୁରଭାବେ",
            emoji: "🎵",
            odiaUse: "SWEETLY ଅର୍ଥ ମଧୁରଭାବେ । ଅନିମା ମଧୁରଭାବେ ଗାଉଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GUESS",
            odia: "ଅନୁମାନ",
            emoji: "🤔",
            odiaUse: "GUESS ଅର୍ଥ ଅନୁମାନ କରିବା । ତୁମେ ଉତ୍ତରକୁ ଅନୁମାନ କରିପାରିବ କି ?",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ANSWER",
            odia: "ଉତ୍ତର",
            emoji: "✍️",
            odiaUse: "ANSWER ଅର୍ଥ ଉତ୍ତର । ତୁମେ ଏହି ପ୍ରଶ୍ନର ଉତ୍ତର ଅନୁମାନ କରିପାରିବ କି ?",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUN",
            odia: "ସୂର୍ଯ୍ୟ",
            emoji: "☀️",
            odiaUse: "SUN ଅର୍ଥ ସୂର୍ଯ୍ୟ । ସୂର୍ଯ୍ୟ ଆଡ଼କୁ ଚାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ENGINEER",
            odia: "ଇଞ୍ଜିନିୟର",
            emoji: "👷",
            odiaUse: "ENGINEER ଏକ ବୃତ୍ତି । ମି. କରୁଣାକର ଜଣେ ଇଞ୍ଜିନିୟର ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
