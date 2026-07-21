const wordData = {
    currentWord: 0,
    words: [
        {
            word: "DARK CLOUD / KRISHNA",
            odia: "ଶ୍ୟାମଘନ",
            emoji: "☁️",
            odiaUse: "ଶ୍ୟାମଘନ ଅର୍ଥ କଳାମେଘ ବା ଶ୍ରୀକୃଷ୍ଣ । ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ଶ୍ୟାମଘନ ବୋଲି କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MATHURA",
            odia: "ମଧୁଭୁବନ",
            emoji: "🏛️",
            odiaUse: "ମଧୁଭୁବନ ଅର୍ଥ ମଥୁରା । ମଥୁରାକୁ ମଧୁଭୁବନ ବୋଲି କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TEN DIRECTIONS",
            odia: "ଦଶଦିଗ",
            emoji: "🧭",
            odiaUse: "ଦଶଦିଗ ଅର୍ଥ ଉତ୍ତର, ଦକ୍ଷିଣ, ପୂର୍ବ, ପଶ୍ଚିମ ଆଦି ଦଶଟି ଦିଗ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WATER",
            odia: "ଜୀବନ",
            emoji: "💧",
            odiaUse: "ଜୀବନ ଅର୍ଥ ଜଳ । ଜଳ ବିନା ଜୀବନ ସମ୍ଭବ ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FISH",
            odia: "ଝଷ",
            emoji: "🐟",
            odiaUse: "ଝଷ ଅର୍ଥ ମାଛ । ମାଛ ଜଳରେ ବାସ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LIKE / AS",
            odia: "ଯେହ୍ନେ",
            emoji: "🔄",
            odiaUse: "ଯେହ୍ନେ ଅର୍ଥ ଯେପରି । ଯେହ୍ନେ କରିବ ସେହିପରି ଫଳ ମିଳିବ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BANANA PLANT",
            odia: "ରମ୍ଭା",
            emoji: "🍌",
            odiaUse: "ରମ୍ଭା ଅର୍ଥ କଦଳୀ । କଦଳୀ ଏକ ଉପକାରୀ ଫଳ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TO CARESS / CONSOLE",
            odia: "ନାଳିଆଇ",
            emoji: "🤱",
            odiaUse: "ନାଳିଆଇ ଅର୍ଥ କଅଁଳେଇ ବା ବୁଝେଇ ଶୁଝେଇ । ମାଆ ପିଲାକୁ ନାଳିଆଇ ଶାନ୍ତ କରନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FOUR-FOLD FRAGRANCE",
            odia: "ଚତୁଃସମ",
            emoji: "🪔",
            odiaUse: "ଚତୁଃସମ ଅର୍ଥ ଚନ୍ଦନ, ଅଗୁରୁ, କୁଙ୍କୁମ ଓ କସ୍ତୂରୀର ମିଶ୍ରଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FORCIBLY",
            odia: "ବଳିଆଇ",
            emoji: "💪",
            odiaUse: "ବଳିଆଇ ଅର୍ଥ ବଳେଇ କରି । ବଳିଆଇ କାମ କରାଇବା ଭଲ ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BEAUTIFUL",
            odia: "ସୁଷମ",
            emoji: "🌸",
            odiaUse: "ସୁଷମ ଅର୍ଥ ସୁନ୍ଦର । ପ୍ରକୃତିର ସୁଷମ ସମସ୍ତଙ୍କୁ ଆକର୍ଷିତ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COOKING POT",
            odia: "ପାକ ଭାଣ୍ଡ",
            emoji: "🍲",
            odiaUse: "ପାକ ଭାଣ୍ଡ ଅର୍ଥ ରାନ୍ଧିବା ହାଣ୍ଡି । ପାକ ଭାଣ୍ଡରେ ଖାଦ୍ୟ ରନ୍ଧାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "KOHL / KAJAL",
            odia: "ଅଞ୍ଜନ",
            emoji: "🖤",
            odiaUse: "ଅଞ୍ଜନ ଅର୍ଥ କଜ୍ଜ୍ବଳ । ଆଖିରେ ଅଞ୍ଜନ ଲଗାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CRUEL",
            odia: "ଦାରୁଣ",
            emoji: "😠",
            odiaUse: "ଦାରୁଣ ଅର୍ଥ ନିଷ୍ଠୁର । ଦାରୁଣ ବ୍ୟବହାର ସମସ୍ତଙ୍କୁ କଷ୍ଟ ଦେଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SPREAD / LAY",
            odia: "ପାଡ଼ି",
            emoji: "🛏️",
            odiaUse: "ପାଡ଼ି ଅର୍ଥ ବିଛେଇ ବା ପାରିଦେଇ । ମାଆ ଶୋଇବା ପାଇଁ ଚାଦର ପାଡ଼ି ଦେଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STAIR / STEP",
            odia: "ପାବଚ୍ଛ",
            emoji: "🪜",
            odiaUse: "ପାବଚ୍ଛ ଅର୍ଥ ପାହାଚ । ପାହାଚ ଚଢ଼ି ଉପରକୁ ଯିବାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOON",
            odia: "ହରି",
            emoji: "🌙",
            odiaUse: "ହରି ଅର୍ଥ ଚନ୍ଦ୍ର । ରାତିରେ ହରି ଆକାଶରେ ଦେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NOT FEAR AGAIN",
            odia: "ନ ପୁଣ ଡରୁ",
            emoji: "😊",
            odiaUse: "ନ ପୁଣ ଡରୁ ଅର୍ଥ ଯେପରି ଆଉ ଥରେ ନ ଡରୁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SON / BOY",
            odia: "ବାଳ",
            emoji: "👦",
            odiaUse: "ବାଳ ଅର୍ଥ ବାଳକ ବା ପୁଅ । ବାଳମାନେ ଖେଳିବାକୁ ଭଲ ପାଆନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ROW / GROUP",
            odia: "ପନ୍ତି",
            emoji: "👥",
            odiaUse: "ପନ୍ତି ଅର୍ଥ ସମୂହ ବା ଧାଡ଼ି । ଛାତ୍ରମାନେ ପନ୍ତିରେ ଠିଆ ହେଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SHORT CLOTH",
            odia: "କାଛି",
            emoji: "🩳",
            odiaUse: "କାଛି ଅର୍ଥ ଛୋଟଲୁଗା ବା କାଛିଆ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOTHER",
            odia: "ମାଏ",
            emoji: "👩",
            odiaUse: "ମାଏ ଅର୍ଥ ମାଆ । ମାଏ ସନ୍ତାନଙ୍କୁ ସ୍ନେହ କରନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOMENT",
            odia: "ନିମିଷେ",
            emoji: "⏳",
            odiaUse: "ନିମିଷେ ଅର୍ଥ ଅଳ୍ପ ସମୟ ପାଇଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HELPER / SUPPORT",
            odia: "ସାହା",
            emoji: "🤝",
            odiaUse: "ସାହା ଅର୍ଥ ସହାୟ । ଭଲ ବନ୍ଧୁ ସବୁବେଳେ ସାହା ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEEP",
            odia: "ଗଣ୍ଡ",
            emoji: "🌊",
            odiaUse: "ଗଣ୍ଡ ଅର୍ଥ ଗଭୀର । ନଦୀର ଜଳ କେତେକ ସ୍ଥାନରେ ଗଣ୍ଡ ଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TIRED / EXHAUSTED",
            odia: "ଶ୍ରମବଳେ",
            emoji: "🥵",
            odiaUse: "ଶ୍ରମବଳେ ଅର୍ଥ କ୍ଲାନ୍ତ ହୋଇ । ଶ୍ରମବଳେ ସେ ବିଶ୍ରାମ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RABIDI",
            odia: "ଅଧାମ",
            emoji: "🥣",
            odiaUse: "ଅଧାମ ଅର୍ଥ ରାବିଡ଼ି । ଅଧାମ ଏକ ଖାଦ୍ୟ ପଦାର୍ଥ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
