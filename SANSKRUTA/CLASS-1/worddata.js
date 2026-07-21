const wordData = {
    currentWord: 0,
    words: [
        {
            word: "LION",
            odia: "ସିଂହ",
            emoji: "🦁",
            odiaUse: "ସିଂହ ଜଙ୍ଗଲର ଶକ୍ତିଶାଳୀ ପଶୁ । ଏହି କଥାରେ ଭାସୁରକ ନାମକ ସିଂହ ବହୁତ ଅତ୍ୟାଚାର କରୁଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RABBIT",
            odia: "ଶଶକ",
            emoji: "🐇",
            odiaUse: "ଶଶକ ଏକ ଛୋଟ ପଶୁ । ଏହି କଥାରେ ଶଶକ ନିଜ ବୁଦ୍ଧି ଦ୍ୱାରା ସିଂହକୁ ପରାସ୍ତ କରିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FOREST",
            odia: "ବନ",
            emoji: "🌳",
            odiaUse: "ବନ ଅର୍ଥ ଜଙ୍ଗଲ । ସିଂହ ଓ ଅନ୍ୟ ସମସ୍ତ ପଶୁ ସେହି ବନରେ ବାସ କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DESTRUCTION",
            odia: "ସର୍ବୋଚ୍ଛେଦନ",
            emoji: "💥",
            odiaUse: "ସର୍ବୋଚ୍ଛେଦନ ଅର୍ଥ ସମସ୍ତଙ୍କ ବିନାଶ । ପଶୁମାନେ ଚାହୁଁଥିଲେ ଯେ ସେମାନଙ୍କର ସର୍ବୋଚ୍ଛେଦନ ନ ହେଉ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HEARD",
            odia: "ଆକର୍ଣ୍ୟ",
            emoji: "👂",
            odiaUse: "ଆକର୍ଣ୍ୟ ଅର୍ଥ ଶୁଣି । ସିଂହ ପଶୁମାନଙ୍କ କଥା ଶୁଣି ସେମାନଙ୍କ ପ୍ରସ୍ତାବ ମାନିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WILD BEAST",
            odia: "ଶ୍ୱାପଦ",
            emoji: "🐺",
            odiaUse: "ଶ୍ୱାପଦ ଅର୍ଥ ହିଂସ୍ରଜନ୍ତୁ । ସିଂହ ଏକ ହିଂସ୍ର ଶ୍ୱାପଦ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WANDER",
            odia: "ପର୍ଯ୍ୟଟନ କରିବା",
            emoji: "🚶",
            odiaUse: "ପର୍ଯ୍ୟଟନ କରିବା ଅର୍ଥ ବୁଲିବା । ସିଂହ ସହ ଚୁକ୍ତି ପରେ ପଶୁମାନେ ନିର୍ଭୟରେ ବନରେ ବୁଲୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WELL",
            odia: "କୂପ",
            emoji: "🕳️",
            odiaUse: "କୂପ ଅର୍ଥ କୂଅ । ଶଶକ ସିଂହକୁ କୂଅ ପାଖକୁ ନେଇ ତାହାର ପ୍ରତିବିମ୍ବ ଦେଖାଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "REFLECTION",
            odia: "ପ୍ରତିବିମ୍ବ",
            emoji: "🪞",
            odiaUse: "ପ୍ରତିବିମ୍ବ ଅର୍ଥ ଛାୟାରୂପ । ସିଂହ କୂଅରେ ନିଜ ପ୍ରତିବିମ୍ବକୁ ଅନ୍ୟ ସିଂହ ବୋଲି ଭାବିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HUNGRY",
            odia: "କ୍ଷୁତ୍କ୍ଷାମକଣ୍ଠ",
            emoji: "🍽️",
            odiaUse: "କ୍ଷୁତ୍କ୍ଷାମକଣ୍ଠ ଅର୍ଥ କ୍ଷୁଧାରେ କଣ୍ଠ ଶୁଖିଯାଇଥିବା । ବିଳମ୍ବ ହେବାରୁ ସିଂହ ବହୁତ ଭୋକିଲା ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ANGRY",
            odia: "ପ୍ରଜ୍ୱଲିତାତ୍ମା",
            emoji: "😡",
            odiaUse: "ପ୍ରଜ୍ୱଲିତାତ୍ମା ଅର୍ଥ ଅତ୍ୟଧିକ କ୍ରୋଧିତ । ଶଶକ ବିଳମ୍ବରେ ଆସିବାରୁ ସିଂହ ବହୁତ କ୍ରୋଧିତ ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "KILL",
            odia: "ନିପାତ୍ୟ",
            emoji: "⚔️",
            odiaUse: "ନିପାତ୍ୟ ଅର୍ଥ ହତ୍ୟା କରି । ସିଂହ ଶଶକକୁ ମାରିଦେବାକୁ ଧମକ ଦେଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CREATURES",
            odia: "ସତ୍ତ୍ୱାନାମ୍",
            emoji: "🐾",
            odiaUse: "ସତ୍ତ୍ୱାନାମ୍ ଅର୍ଥ ପ୍ରାଣୀମାନଙ୍କର । ଶଶକ କହିଲା ଯେ ଅନ୍ୟ ପ୍ରାଣୀମାନଙ୍କର କୌଣସି ଦୋଷ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "KEEP",
            odia: "ସଂସ୍ଥାପ୍ୟ",
            emoji: "📍",
            odiaUse: "ସଂସ୍ଥାପ୍ୟ ଅର୍ଥ ରଖି । ଅନ୍ୟ ସିଂହ ଚାରିଟି ଶଶକକୁ ସେଠାରେ ରଖିବାକୁ କହିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SAID THUS",
            odia: "ଏବମୁକ୍ତ୍ୱା",
            emoji: "🗣️",
            odiaUse: "ଏବମୁକ୍ତ୍ୱା ଅର୍ଥ ଏହିପରି କହି । ଏହା କହି ଶଶକ ସିଂହକୁ କୂଅ ପାଖକୁ ନେଇଗଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SCOLDING",
            odia: "ଭର୍ତ୍ସୟମାନ",
            emoji: "☝️",
            odiaUse: "ଭର୍ତ୍ସୟମାନ ଅର୍ଥ ଗାଳି ଦେଉଥିବା । ସିଂହ ଶଶକକୁ ରାଗରେ ଗାଳି ଦେଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FORTRESS",
            odia: "ଦୁର୍ଗାଶ୍ରୟ",
            emoji: "🏰",
            odiaUse: "ଦୁର୍ଗାଶ୍ରୟ ଅର୍ଥ ଦୁର୍ଗରେ ରହୁଥିବା । ଶଶକ କହିଲା ଯେ ଅନ୍ୟ ସିଂହ ଦୁର୍ଗାଶ୍ରୟ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ECHO",
            odia: "ପ୍ରତିଶବ୍ଦ",
            emoji: "🔊",
            odiaUse: "ପ୍ରତିଶବ୍ଦ ଅର୍ଥ ପ୍ରତିଧ୍ୱନି । ସିଂହର ଗର୍ଜନର ପ୍ରତିଶବ୍ଦ କୂଅରୁ ଫେରି ଆସିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LIVELIHOOD",
            odia: "ପ୍ରାଣଯାତ୍ରା",
            emoji: "🌾",
            odiaUse: "ପ୍ରାଣଯାତ୍ରା ଅର୍ଥ ଜୀବନ ନିର୍ବାହ । ପଶୁମାନେ ସିଂହର ପ୍ରାଣଯାତ୍ରା ପାଇଁ ପ୍ରତିଦିନ ଗୋଟିଏ ପଶୁ ପଠାଇବାକୁ ଠିକ୍ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTELLIGENCE",
            odia: "ବୁଦ୍ଧିବଳ",
            emoji: "🧠",
            odiaUse: "ବୁଦ୍ଧିବଳ ଅର୍ଥ ବୁଦ୍ଧିର ଶକ୍ତି । ଶଶକ ନିଜ ବୁଦ୍ଧିବଳରେ ଶକ୍ତିଶାଳୀ ସିଂହକୁ ବିନାଶ କରିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
