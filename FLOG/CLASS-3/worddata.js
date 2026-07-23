const wordData = {
    currentWord: 0,
    words: [
        {
            word: "PRACTICE/USAGE",
            odia: "ଅନୁଶୀଳନ",
            emoji: "📖",
            odiaUse: "ଅନୁଶୀଳନ ଅର୍ଥ ଅଭ୍ୟାସ ବା ବ୍ୟବହାର । ଅନୁଶୀଳନରୁ ଜଣାଯାଏ ଯେ ଭାଷା ହେଉଛି ଭାବ ବିନିମୟର ସର୍ବଶ୍ରେଷ୍ଠ ମାଧ୍ୟମ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXCHANGE OF FEELINGS",
            odia: "ଭାବ ବିନିମୟ",
            emoji: "💬",
            odiaUse: "ଭାବ ବିନିମୟ ଅର୍ଥ ମନର କଥା ପରସ୍ପର ମଧ୍ୟରେ ଆଦାନ ପ୍ରଦାନ କରିବା । ଭାଷା ହେଉଛି ଭାବ ବିନିମୟର ସର୍ବଶ୍ରେଷ୍ଠ ମାଧ୍ୟମ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VOCABULARY/WORD-STORE",
            odia: "ଶବ୍ଦପୁଞ୍ଜ",
            emoji: "📚",
            odiaUse: "ଶବ୍ଦପୁଞ୍ଜ ଅର୍ଥ ଶବ୍ଦମାନଙ୍କର ସମୂହ । ଶବ୍ଦପୁଞ୍ଜ ହେଉଛି ଭାଷାର ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ ସଦୃଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BODY PARTS/LIMBS",
            odia: "ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ",
            emoji: "🦴",
            odiaUse: "ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ ଅର୍ଥ ଶରୀରର ବିଭିନ୍ନ ଅଂଶ । ଶବ୍ଦପୁଞ୍ଜ ହେଉଛି ଭାଷାର ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ ସଦୃଶ, ଏହିମାନଙ୍କୁ ନେଇ ସେ ନିଜର କଳେବର ବୃଦ୍ଧି କରିବାରେ ସକ୍ଷମ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BODY/STRUCTURE",
            odia: "କଳେବର",
            emoji: "🏛️",
            odiaUse: "କଳେବର ଅର୍ଥ ଶରୀର ବା ଗଠନ । ଭାଷା ନିଜର କଳେବର ବୃଦ୍ଧି କରିବାରେ ସକ୍ଷମ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WORD-STORE/TREASURY",
            odia: "ଶବ୍ଦଭଣ୍ଡାର",
            emoji: "💰",
            odiaUse: "ଶବ୍ଦଭଣ୍ଡାର ଅର୍ଥ ଶବ୍ଦମାନଙ୍କର ଭଣ୍ଡାର ବା ସଂଗ୍ରହ । ଗୋଟିଏ ଭାଷାର ଶବ୍ଦଭଣ୍ଡାରକୁ ଲକ୍ଷ୍ୟ କଲେ ଜଣାଯାଏ ଯେ ସେଥିରୁ ଅନେକ ବହୁକାଳଧରି ଅପରିବର୍ତ୍ତିତ ଅଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNCHANGED",
            odia: "ଅପରିବର୍ତ୍ତିତ",
            emoji: "🔒",
            odiaUse: "ଅପରିବର୍ତ୍ତିତ ଅର୍ଥ ଯାହା ବଦଳି ନାହିଁ । ଅନେକ ଶବ୍ଦ ବହୁକାଳଧରି ଅପରିବର୍ତ୍ତିତ ଥିବାବେଳେ କେତେକ ଶବ୍ଦ କାଳକ୍ରମେ ପରିବର୍ତ୍ତନ ଘଟି ନୂଆରୂପ ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OVER TIME/GRADUALLY",
            odia: "କାଳକ୍ରମେ",
            emoji: "⏳",
            odiaUse: "କାଳକ୍ରମେ ଅର୍ଥ ସମୟ ଅନୁସାରେ ଧୀରେ ଧୀରେ । କେତେକ ଶବ୍ଦ କାଳକ୍ରମେ ପରିବର୍ତ୍ତନ ଘଟି ନୂଆରୂପ ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMMONLY USED SPEECH",
            odia: "ଲୋକମୁଖରୁ",
            emoji: "🗣️",
            odiaUse: "ଲୋକମୁଖରୁ ଅର୍ଥ ଲୋକମାନଙ୍କ ମୁହଁରୁ ବ୍ୟବହୃତ ହୋଇ । କେତେକ ଶବ୍ଦ ଲୋକମୁଖରୁ ନୂତନ ଭାବେ ସୃଷ୍ଟି ହୋଇଥାଆନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MIXED/BLENDED",
            odia: "ମିଶିଯାଇଛନ୍ତି",
            emoji: "🔀",
            odiaUse: "ମିଶିଯାଇଛନ୍ତି ଅର୍ଥ ମିଶି ଏକାକାର ହୋଇଯାଇଛନ୍ତି । କେତେକ ଅନ୍ୟଭାଷାରୁ ଆସି ଏ ଭାଷା ସହିତ ମିଶିଯାଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PREVALENCE/PRACTICE",
            odia: "ପ୍ରଚଳନ",
            emoji: "🔄",
            odiaUse: "ପ୍ରଚଳନ ଅର୍ଥ ଚଳୁଥିବା ପ୍ରଥା ବା ବ୍ୟବହାର । ଏହିଧାରାର ପ୍ରଚଳନ ହେତୁ ଗୋଟିଏ ଭାଷା ମଧ୍ୟରେ ବିବିଧତା ଲକ୍ଷ୍ୟ କରାଯାଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIVERSITY",
            odia: "ବିବିଧତା",
            emoji: "🌈",
            odiaUse: "ବିବିଧତା ଅର୍ଥ ବିଭିନ୍ନତା ବା ଅନେକ ପ୍ରକାର ମିଶ୍ରଣ । ଗୋଟିଏ ଭାଷା ମଧ୍ୟରେ ବିବିଧତା ଲକ୍ଷ୍ୟ କରାଯାଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CATEGORIZED/DIVIDED",
            odia: "ବିଭକ୍ତ",
            emoji: "📂",
            odiaUse: "ବିଭକ୍ତ ଅର୍ଥ ଭାଗ ଭାଗ ହୋଇ ପୃଥକ ହୋଇଥିବା । ଏହି ଧାରାକୁ ଆଖି ଆଗରେ ରଖି ଭାଷାଭଣ୍ଡାରକୁ ଚାରିଭାଗରେ ବିଭକ୍ତ କରାଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TATSAMA (SAME AS SANSKRIT)",
            odia: "ତତ୍ସମ",
            emoji: "🕉️",
            odiaUse: "ତତ୍ ଓ ସମ - ଏ ଦୁଇଟି ଶବ୍ଦ ମିଶ୍ରଣରେ ତତ୍ସମ ଶବ୍ଦଟି ଗଠିତ ହୋଇଛି । ଏହାର ଅର୍ଥ ହେଉଛି ତାହା ସହିତ ସମାନ, ଅର୍ଥାତ୍ ସଂସ୍କୃତ ଭାଷା ସହିତ ସମାନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXACT FORM/UNCHANGED FORM",
            odia: "ଅବିକଳରୂପେ",
            emoji: "🎯",
            odiaUse: "ଅବିକଳରୂପେ ଅର୍ଥ ଠିକ୍ ସେହି ରୂପରେ, କୌଣସି ପରିବର୍ତ୍ତନ ନ ହୋଇ । ସଂସ୍କୃତ ଭାଷାର କେତେକ ଶବ୍ଦ ଅପରିବର୍ତ୍ତିତ ହୋଇ ଅବିକଳରୂପେ ଓଡ଼ିଆ ଭାଷାରେ ପ୍ରଚଳିତ ହୋଇ ଆସୁଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SETTLEMENT",
            odia: "ବସତିସ୍ଥାପନ",
            emoji: "🏡",
            odiaUse: "ବସତିସ୍ଥାପନ ଅର୍ଥ ରହିବା ପାଇଁ ଘର ବନାଇ ସ୍ଥାୟୀ ହେବା । ଆର୍ଯ୍ୟମାନେ ଦୀର୍ଘକାଳ ଧରି ଭାରତବର୍ଷରେ ବସତିସ୍ଥାପନ କରିଆସିଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INFLUENCE",
            odia: "ପ୍ରଭାବ",
            emoji: "🌟",
            odiaUse: "ପ୍ରଭାବ ଅର୍ଥ କୌଣସି ବିଷୟର ପ୍ରଭାବ ପକାଇବା ବା ଛାପ ପକାଇବା । ସଂସ୍କୃତ ଭାଷାର ପ୍ରଭାବ ଏ ଦେଶର ବିଭିନ୍ନ ଭାଷା ଉପରେ ରହିଆସିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TADBHAVA (DERIVED FORM)",
            odia: "ତଦ୍ଭବ",
            emoji: "🔄",
            odiaUse: "ତଦ୍ଭବର ଅର୍ଥ ହେଉଛି ତହିଁରୁ ଭବ ବା ଜାତ, ଅର୍ଥାତ୍ ଓଡ଼ିଆ ଭାଷାର କେତେକ ଶବ୍ଦ ସଂସ୍କୃତ ଶବ୍ଦମାନଙ୍କରୁ ଜାତ ହୋଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BORN FROM/ORIGINATED",
            odia: "ଜାତ",
            emoji: "🌱",
            odiaUse: "ଜାତ ଅର୍ଥ ଜନ୍ମ ହୋଇଥିବା ବା ସୃଷ୍ଟି ହୋଇଥିବା । ଓଡ଼ିଆ ଭାଷାର କେତେକ ଶବ୍ଦ ସଂସ୍କୃତ ଶବ୍ଦମାନଙ୍କରୁ ଜାତ ହୋଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NATIVE/INDIGENOUS (DESHAJA)",
            odia: "ଦେଶଜ",
            emoji: "🏞️",
            odiaUse: "ଦେଶଜ ଅର୍ଥ ନିଜ ଦେଶରେ ଜନ୍ମ ହୋଇଥିବା ଶବ୍ଦ । ଏହା ଶବ୍ଦଭଣ୍ଡାରର ଚାରି ପ୍ରକାର ମଧ୍ୟରୁ ଗୋଟିଏ ପ୍ରକାର ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FOREIGN (VOIDESHIKA)",
            odia: "ବୈଦେଶିକ",
            emoji: "🌏",
            odiaUse: "ବୈଦେଶିକ ଅର୍ଥ ବିଦେଶରୁ ଆସିଥିବା ଶବ୍ଦ । ଏହା ଶବ୍ଦଭଣ୍ଡାରର ଚାରି ପ୍ରକାର ମଧ୍ୟରୁ ଗୋଟିଏ ପ୍ରକାର, ଯାହା ଅନ୍ୟ ଦେଶର ଭାଷାରୁ ଆସିଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
