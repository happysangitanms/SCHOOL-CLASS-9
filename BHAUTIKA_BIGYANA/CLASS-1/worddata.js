const wordData = {
    currentWord: 0,
    words: [
        {
            word: "MATTER",
            odia: "ପଦାର୍ଥ",
            emoji: "🧪",
            odiaUse: "ପଦାର୍ଥ ଅର୍ଥ ଯେଉଁ ଦ୍ରବ୍ୟକୁ ନେଇ ବସ୍ତୁ ତିଆରି ହୁଏ । ବାୟୁ, ଜଳ ଓ ପଥର ପଦାର୍ଥ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MASS",
            odia: "ବସ୍ତୁତ୍ୱ",
            emoji: "⚖️",
            odiaUse: "ବସ୍ତୁତ୍ୱ ଅର୍ଥ ପଦାର୍ଥର ପରିମାଣ । ପ୍ରତ୍ୟେକ ପଦାର୍ଥର ବସ୍ତୁତ୍ୱ ଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VOLUME",
            odia: "ଆୟତନ",
            emoji: "📦",
            odiaUse: "ଆୟତନ ଅର୍ଥ ପଦାର୍ଥ ଯେତିକି ସ୍ଥାନ ଦଖଲ କରେ । ପ୍ରତ୍ୟେକ ପଦାର୍ଥର ଆୟତନ ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TEXTURE",
            odia: "ରୂପ ବିନ୍ୟାସ",
            emoji: "✋",
            odiaUse: "ରୂପ ବିନ୍ୟାସ ଅର୍ଥ ପୃଷ୍ଠଭାଗର ଗଠନ । ନଡ଼ିଆର ଖୋଲର ରୂପ ବିନ୍ୟାସ ଖରାପିଆ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PHILOSOPHER",
            odia: "ଦାର୍ଶନିକ",
            emoji: "🤔",
            odiaUse: "ଦାର୍ଶନିକ ଅର୍ଥ ଚିନ୍ତାବିଦ୍ । ପ୍ରାଚୀନ ଦାର୍ଶନିକମାନେ ପଞ୍ଚତତ୍ତ୍ୱ ଧାରଣା ଦେଇଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PANCHATATTVA",
            odia: "ପଞ୍ଚତତ୍ତ୍ୱ",
            emoji: "🌍",
            odiaUse: "ପଞ୍ଚତତ୍ତ୍ୱ ଅର୍ଥ ପାଞ୍ଚଟି ମୌଳିକ ଉପାଦାନ । ମାଟି, ଜଳ, ବାୟୁ, ଅଗ୍ନି ଓ ଆକାଶକୁ ପଞ୍ଚତତ୍ତ୍ୱ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PHYSICAL PROPERTY",
            odia: "ଭୌତିକ ଧର୍ମ",
            emoji: "👀",
            odiaUse: "ଭୌତିକ ଧର୍ମ ଅର୍ଥ ଦେଖାଯାଉଥିବା ଗୁଣ । ପଦାର୍ଥର ଭୌତିକ ଧର୍ମ ଅଧ୍ୟୟନ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHEMICAL NATURE",
            odia: "ରାସାୟନିକ ପ୍ରକୃତି",
            emoji: "⚗️",
            odiaUse: "ରାସାୟନିକ ପ୍ରକୃତି ଅର୍ଥ ରାସାୟନିକ ଗୁଣ । ଏହା ପଦାର୍ଥର ଏକ ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PARTICLE",
            odia: "କଣିକା",
            emoji: "🔹",
            odiaUse: "କଣିକା ଅର୍ଥ ଅତି ଛୋଟ ଅଂଶ । ପଦାର୍ଥ କଣିକାକୁ ନେଇ ଗଠିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CONTINUOUS",
            odia: "ଅବିଚ୍ଛିନ୍ନ",
            emoji: "➖",
            odiaUse: "ଅବିଚ୍ଛିନ୍ନ ଅର୍ଥ ଭାଗ କରିହେବ ନାହିଁ ବୋଲି ଧାରଣା । କେତେକଙ୍କ ମତରେ ପଦାର୍ଥ ଅବିଚ୍ଛିନ୍ନ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BEAKER",
            odia: "ବିକର",
            emoji: "🥛",
            odiaUse: "ବିକର ଅର୍ଥ ପରୀକ୍ଷାଗାରର ପାତ୍ର । ଲୁଣ ଓ ଚିନିର ପରୀକ୍ଷା ବିକରରେ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MARK",
            odia: "ଚିହ୍ନଟ",
            emoji: "📍",
            odiaUse: "ଚିହ୍ନଟ ଅର୍ଥ ଚିହ୍ନ ଦେଇ ରଖିବା । ଜଳର ଉପର ସ୍ତରକୁ ଚିହ୍ନଟ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SPREAD",
            odia: "ବ୍ୟାପିଯିବା",
            emoji: "🌊",
            odiaUse: "ବ୍ୟାପିଯିବା ଅର୍ଥ ଚାରିଆଡ଼େ ପ୍ରସାରିତ ହେବା । ଚିନି ଜଳରେ ବ୍ୟାପିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CRYSTAL",
            odia: "ସ୍ଫଟିକ",
            emoji: "💎",
            odiaUse: "ସ୍ଫଟିକ ଅର୍ଥ କ୍ରିଷ୍ଟାଲ୍ । ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍‌ର ସ୍ଫଟିକ ବ୍ୟବହାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DISSOLVE",
            odia: "ଦ୍ରବୀଭୂତ",
            emoji: "💧",
            odiaUse: "ଦ୍ରବୀଭୂତ ଅର୍ଥ ଜଳରେ ମିଶିଯିବା । ସ୍ଫଟିକ ଜଳରେ ଦ୍ରବୀଭୂତ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DILUTION",
            odia: "ଲଘୁକରଣ",
            emoji: "🧴",
            odiaUse: "ଲଘୁକରଣ ଅର୍ଥ ପତଳା କରିବା । ଦ୍ରବଣର ବାରମ୍ବାର ଲଘୁକରଣ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PURE WATER",
            odia: "ବିଶୁଦ୍ଧ ଜଳ",
            emoji: "🚰",
            odiaUse: "ବିଶୁଦ୍ଧ ଜଳ ଅର୍ଥ ସଫା ପାଣି । ଦ୍ରବଣକୁ ବିଶୁଦ୍ଧ ଜଳ ସହିତ ମିଶାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COUNTLESS",
            odia: "ଅସଂଖ୍ୟ",
            emoji: "♾️",
            odiaUse: "ଅସଂଖ୍ୟ ଅର୍ଥ ଗଣନା କରିହେବ ନାହିଁ ଏତେ ଅଧିକ । ଗୋଟିଏ ସ୍ଫଟିକରେ ଅସଂଖ୍ୟ କଣିକା ରହିଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIVIDED",
            odia: "ବିଭାଜିତ",
            emoji: "✂️",
            odiaUse: "ବିଭାଜିତ ଅର୍ଥ ଭାଗ ହୋଇଯିବା । କଣିକାଗୁଡ଼ିକ ବିଭାଜିତ ହୋଇ ଆହୁରି କ୍ଷୁଦ୍ର ହୁଅନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PRESENCE",
            odia: "ଉପସ୍ଥିତି",
            emoji: "✅",
            odiaUse: "ଉପସ୍ଥିତି ଅର୍ଥ ଥିବାର ପ୍ରମାଣ । ଗନ୍ଧରୁ ଡେଟଲ୍‌ର ଉପସ୍ଥିତି ଜଣାପଡ଼େ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TINYNESS",
            odia: "କ୍ଷୁଦ୍ରତା",
            emoji: "🔬",
            odiaUse: "କ୍ଷୁଦ୍ରତା ଅର୍ଥ ଛୋଟପଣ । ପଦାର୍ଥର କଣିକାର କ୍ଷୁଦ୍ରତା ଆମ କଳ୍ପନାର ବାହାରେ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};;