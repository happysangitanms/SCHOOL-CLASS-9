const wordData = {
    currentWord: 0,
    words: [
        {
            word: "BEAKER",
            odia: "ବିକର",
            emoji: "🧪",
            odiaUse: "ବିକର ହେଉଛି ବୈଜ୍ଞାନିକ ପରୀକ୍ଷାରେ ବ୍ୟବହୃତ ଏକ ପାତ୍ର । ଏଥିରେ ଜଳ ଓ ଅନ୍ୟ ପଦାର୍ଥ ରଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INK",
            odia: "କାଳି",
            emoji: "🖋️",
            odiaUse: "କାଳି ଜଳରେ ପକାଇଲେ ଧୀରେ ଧୀରେ ଚାରିଆଡ଼େ ମିଶିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HONEY",
            odia: "ମହୁ",
            emoji: "🍯",
            odiaUse: "ମହୁ ଜଳରେ ପକାଇଲେ କିଛି ସମୟ ପରେ ଧୀରେ ଧୀରେ ମିଶିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OBSERVATION",
            odia: "ନିରୀକ୍ଷଣ",
            emoji: "👀",
            odiaUse: "ପରୀକ୍ଷା ସମୟରେ ଯାହା ଦେଖାଯାଏ, ତାହାକୁ ନିରୀକ୍ଷଣ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CRYSTAL",
            odia: "ସ୍ଫଟିକ",
            emoji: "💎",
            odiaUse: "କପର ସଲ୍‌ଫେଟ୍ କିମ୍ବା ପୋଟାସିୟମ୍ ପରମାଙ୍ଗାନେଟ୍‌ର ସ୍ଫଟିକ ଜଳରେ ଧୀରେ ଧୀରେ ମିଶିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TEMPERATURE",
            odia: "ତାପମାତ୍ରା",
            emoji: "🌡️",
            odiaUse: "ଜଳର ତାପମାତ୍ରା ବଢ଼ିଲେ ସ୍ଫଟିକ ଶୀଘ୍ର ମିଶିଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "KINETIC ENERGY",
            odia: "ଗତିଜ ଶକ୍ତି",
            emoji: "⚡",
            odiaUse: "କଣିକା ଗତି କରୁଥିବାରୁ ସେମାନଙ୍କର ଗତିଜ ଶକ୍ତି ଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PARTICLE",
            odia: "କଣିକା",
            emoji: "🔹",
            odiaUse: "ପ୍ରତ୍ୟେକ ପଦାର୍ଥ ଅତି ଛୋଟ ଛୋଟ କଣିକାରେ ଗଠିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIFFUSION",
            odia: "ବିସରଣ",
            emoji: "🌊",
            odiaUse: "ଦୁଇଟି ଭିନ୍ନ ପଦାର୍ଥର କଣିକା ପରସ୍ପର ମିଶିଯିବାକୁ ବିସରଣ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ATTRACTION",
            odia: "ଆକର୍ଷଣ",
            emoji: "🧲",
            odiaUse: "ପଦାର୍ଥର କଣିକାମାନେ ପରସ୍ପରକୁ ଆକର୍ଷଣ କରିଥାନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FORCE",
            odia: "ବଳ",
            emoji: "💪",
            odiaUse: "କଣିକାମାନଙ୍କ ମଧ୍ୟରେ ଥିବା ବଳ ସେମାନଙ୍କୁ ଏକାଠି ଧରି ରଖେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STRENGTH",
            odia: "ସାମର୍ଥ୍ୟ",
            emoji: "🏋️",
            odiaUse: "ଭିନ୍ନ ଭିନ୍ନ ପଦାର୍ଥରେ ଆକର୍ଷଣ ବଳର ସାମର୍ଥ୍ୟ ଭିନ୍ନ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RUBBER BAND",
            odia: "ରବର ବ୍ୟାଣ୍ଡ",
            emoji: "🟠",
            odiaUse: "ରବର ବ୍ୟାଣ୍ଡକୁ ଟାଣିଲେ ଏହା ଲମ୍ବା ହୋଇଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "IRON NAIL",
            odia: "ଲୁହା କଣ୍ଟା",
            emoji: "📌",
            odiaUse: "ଲୁହା କଣ୍ଟାକୁ ଭାଙ୍ଗିବା କଷ୍ଟକର, କାରଣ ଏହାର କଣିକାମାନେ ଦୃଢ଼ ଭାବେ ବନ୍ଧା ଥାଆନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WATER TAP",
            odia: "ପାଣି ଟ୍ୟାପ୍",
            emoji: "🚰",
            odiaUse: "ପାଣି ଟ୍ୟାପ୍‌ରୁ ବାହାରୁଥିବା ଜଳଧାର ଏକାଠି ରହେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MATTER",
            odia: "ପଦାର୍ଥ",
            emoji: "🧱",
            odiaUse: "ଯେଉଁ ବସ୍ତୁର ଭର ଅଛି ଓ ସ୍ଥାନ ଦଖଲ କରେ, ତାହାକୁ ପଦାର୍ଥ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
