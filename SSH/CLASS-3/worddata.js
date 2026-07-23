const wordData = {
    currentWord: 0,
    words: [
        {
            word: "IMPERIALISM",
            odia: "ସାମ୍ରାଜ୍ୟବାଦ",
            emoji: "👑",
            odiaUse: "ସାମ୍ରାଜ୍ୟବାଦ ଅର୍ଥ ଅନ୍ୟ ଦେଶ ଉପରେ ଶାସନ ବିସ୍ତାର କରିବାର ନୀତି । ପାଶ୍ଚାତ୍ୟ ଦେଶମାନେ ସାମ୍ରାଜ୍ୟବାଦ ନୀତି ଅନୁସରଣ କରି ଏସିଆ ଓ ଆଫ୍ରିକାରେ ଉପନିବେଶ ସ୍ଥାପନ କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLONY",
            odia: "ଉପନିବେଶ",
            emoji: "🏴",
            odiaUse: "ଉପନିବେଶ ଅର୍ଥ ପରାଧୀନ ଦେଶ, ଯାହା ଅନ୍ୟ ଏକ ଶକ୍ତିଶାଳୀ ଦେଶ ଦ୍ୱାରା ଶାସିତ ହୁଏ । ଏସିଆ ଓ ଆଫ୍ରିକାର ଅନେକ ଦେଶ ଉପନିବେଶରେ ପରିଣତ ହେଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CONTINENT",
            odia: "ମହାଦେଶ",
            emoji: "🌍",
            odiaUse: "ମହାଦେଶ ଅର୍ଥ ପୃଥିବୀର ବଡ଼ ଭୂଖଣ୍ଡ । ଏସିଆ ଓ ଆଫ୍ରିକା ମହାଦେଶର ଦେଶମାନେ ପାଶ୍ଚାତ୍ୟ ପ୍ରଭାବରେ ପଡ଼ିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STEAMSHIP",
            odia: "ବାଷ୍ପୀୟ ଜାହାଜ",
            emoji: "🚢",
            odiaUse: "ବାଷ୍ପୀୟ ଜାହାଜ ଅର୍ଥ ବାଷ୍ପ ଶକ୍ତିରେ ଚାଲୁଥିବା ଜାହାଜ । ବାଷ୍ପୀୟ ଜାହାଜର ଉଭାବନ ଯୋଗେ ସମୁଦ୍ର ଯାତ୍ରା ସହଜ ହେଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STEAM ENGINE",
            odia: "ବାଷ୍ପୀୟ ଇଞ୍ଜିନ",
            emoji: "🚂",
            odiaUse: "ବାଷ୍ପୀୟ ଇଞ୍ଜିନ ଅର୍ଥ ବାଷ୍ପ ଶକ୍ତିରେ ଚାଲୁଥିବା ଯନ୍ତ୍ର । ଷ୍ଟିଫେନସନ ପ୍ରଥମ ବାଷ୍ପୀୟ ଇଞ୍ଜିନ ନିର୍ମାଣ କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RAILWAY",
            odia: "ରେଳପଥ",
            emoji: "🛤️",
            odiaUse: "ରେଳପଥ ଅର୍ଥ ରେଳ ଗାଡ଼ି ଚାଲିବା ପାଇଁ ତିଆରି ହୋଇଥିବା ପଥ । ରେଳପଥର ନିର୍ମାଣ ଯୋଗେ ଉପନିବେଶ ଅଞ୍ଚଳରେ ପରିବହନ ସହଜ ହେଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRANSPORT",
            odia: "ପରିବହନ",
            emoji: "🚗",
            odiaUse: "ପରିବହନ ଅର୍ଥ ଏକ ସ୍ଥାନରୁ ଅନ୍ୟ ସ୍ଥାନକୁ ଲୋକ ବା ଦ୍ରବ୍ୟ ନେବା ବ୍ୟବସ୍ଥା । ପରିବହନ ଓ ଯୋଗାଯୋଗର ଉନ୍ନତି ଯୋଗେ ଦୂର ଦେଶ ପାଖକୁ ଆସିଗଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMMUNICATION",
            odia: "ଯୋଗାଯୋଗ",
            emoji: "📡",
            odiaUse: "ଯୋଗାଯୋଗ ଅର୍ଥ ଖବର ବା ସୂଚନା ଆଦାନ-ପ୍ରଦାନ କରିବା ବ୍ୟବସ୍ଥା । ଯୋଗାଯୋଗର ଉନ୍ନତି ପାଶ୍ଚାତ୍ୟ ଓ ଉପନିବେଶ ମଧ୍ୟରେ ସମ୍ପର୍କ ବଢ଼ାଇଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INVENTION",
            odia: "ଉଭାବନ",
            emoji: "💡",
            odiaUse: "ଉଭାବନ ଅର୍ଥ ନୂଆ କିଛି ତିଆରି କରିବା । ବାଷ୍ପୀୟ ଜାହାଜ ଓ ଇଞ୍ଜିନର ଉଭାବନ ପାଶ୍ଚାତ୍ୟ ଦେଶକୁ ଶକ୍ତିଶାଳୀ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PROPAGATION",
            odia: "ପ୍ରଚାର",
            emoji: "📢",
            odiaUse: "ପ୍ରଚାର ଅର୍ଥ କୌଣସି ବିଷୟକୁ ବ୍ୟାପକ ଭାବେ ଫଇଲାଇବା । ଧର୍ମ ଓ ସଂସ୍କୃତିର ପ୍ରଚାର ଉପନିବେଶବାଦକୁ ବଢ଼ାଇବାରେ ସାହାଯ୍ୟ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHRISTIANITY",
            odia: "ଖ୍ରୀଷ୍ଟଧର୍ମ",
            emoji: "✝️",
            odiaUse: "ଖ୍ରୀଷ୍ଟଧର୍ମ ଅର୍ଥ ଯୀଶୁ ଖ୍ରୀଷ୍ଟଙ୍କ ଶିକ୍ଷାରେ ଆଧାରିତ ଧର୍ମ । ମିଶନାରୀମାନେ ଉପନିବେଶ ଅଞ୍ଚଳରେ ଖ୍ରୀଷ୍ଟଧର୍ମର ପ୍ରଚାର କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MISSIONARY",
            odia: "ମିଶନାରୀ",
            emoji: "⛪",
            odiaUse: "ମିଶନାରୀ ଅର୍ଥ ଧର୍ମ ପ୍ରଚାର କରିବା ପାଇଁ ପଠାଯାଇଥିବା ବ୍ୟକ୍ତି । ମିଶନାରୀମାନେ ଶିକ୍ଷା ଓ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ମାଧ୍ୟମରେ ଧର୍ମ ପ୍ରଚାର କଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CIVILIZATION",
            odia: "ସଭ୍ୟତା",
            emoji: "🏛️",
            odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ଏକ ଉନ୍ନତ ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ ଜୀବନଶୈଳୀ । ପାଶ୍ଚାତ୍ୟ ଦେଶମାନେ ନିଜକୁ ଶ୍ରେଷ୍ଠ ସଭ୍ୟତାର ବାହକ ବୋଲି ଭାବୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ADMINISTRATION",
            odia: "ଶାସନ",
            emoji: "🏢",
            odiaUse: "ଶାସନ ଅର୍ଥ ଦେଶ ବା ରାଜ୍ୟ ଚଳାଇବା ବ୍ୟବସ୍ଥା । ଅନେକ ଏସିଆ ଓ ଆଫ୍ରିକୀୟ ଦେଶରେ ଦୁର୍ବଳ ଶାସନ ଥିଲା, ଯାହା ଉପନିବେଶବାଦକୁ ସହଜ କଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WEAK RULE",
            odia: "ଦୁର୍ବଳ ଶାସନ",
            emoji: "😔",
            odiaUse: "ଦୁର୍ବଳ ଶାସନ ଅର୍ଥ ଅଦକ୍ଷ ଓ ଅସକ୍ଷମ ପ୍ରଶାସନ । ଉନବିଂଶ ଶତାବ୍ଦୀରେ ଏସିଆ ଓ ଆଫ୍ରିକାର ଅନେକ ଦେଶରେ ଶାସନ ଅତ୍ୟନ୍ତ ଦୁର୍ବଳ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BACKWARD",
            odia: "ଅନୁନ୍ନତ",
            emoji: "📉",
            odiaUse: "ଅନୁନ୍ନତ ଅର୍ଥ ବିକାଶ ନହୋଇଥିବା ବା ପଛରେ ପଡ଼ିଥିବା । ଆଫ୍ରିକାର ଦେଶମାନଙ୍କରେ ବିଜ୍ଞାନ ଓ କାରିଗରୀ ବିଦ୍ୟା ଅନୁନ୍ନତ ପର୍ଯ୍ୟାୟରେ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TECHNOLOGY",
            odia: "କାରିଗରୀ ବିଦ୍ୟା",
            emoji: "⚙️",
            odiaUse: "କାରିଗରୀ ବିଦ୍ୟା ଅର୍ଥ ଯନ୍ତ୍ର ଓ ଉପକରଣ ତିଆରି କରିବାର ଜ୍ଞାନ । ଆଫ୍ରିକୀୟ ଦେଶମାନଙ୍କରେ ବିଜ୍ଞାନ ଓ କାରିଗରୀ ବିଦ୍ୟା ଉନ୍ନତ ପର୍ଯ୍ୟାୟରେ ପହଞ୍ଚି ପାରି ନ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SELF-DEFENSE",
            odia: "ଆତ୍ମରକ୍ଷା",
            emoji: "🛡️",
            odiaUse: "ଆତ୍ମରକ୍ଷା ଅର୍ଥ ନିଜକୁ ବିପଦରୁ ରକ୍ଷା କରିବା । ଅନୁନ୍ନତ ପ୍ରଯୁକ୍ତି ଯୋଗୁଁ ସେହି ଲୋକମାନେ ଆକ୍ରମଣକାରୀଙ୍କ ବିରୁଦ୍ଧରେ ଆତ୍ମରକ୍ଷା କରିପାରିଲେ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPLOITATION",
            odia: "ଶୋଷଣ",
            emoji: "⛏️",
            odiaUse: "ଶୋଷଣ ଅର୍ଥ କାହାର ଅନ୍ୟାୟ ଲାଭ ଉଠାଇବା । ଉପନିବେଶବାଦୀମାନେ ଆକ୍ରାନ୍ତ ଦେଶର ଧନ-ସମ୍ପତ୍ତିର ଶୋଷଣ କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MILITARY SUPERIORITY",
            odia: "ସାମରିକ ଶ୍ରେଷ୍ଠତା",
            emoji: "⚔️",
            odiaUse: "ସାମରିକ ଶ୍ରେଷ୍ଠତା ଅର୍ଥ ଅସ୍ତ୍ରଶସ୍ତ୍ର ଓ ସେନାରେ ଅନ୍ୟଠାରୁ ଅଧିକ ଶକ୍ତିଶାଳୀ ହେବା । ପାଶ୍ଚାତ୍ୟ ଦେଶମାନେ ସାମରିକ ଶ୍ରେଷ୍ଠତା ଯୋଗୁଁ ଅନ୍ୟ ଦେଶକୁ ଜୟ କରିପାରିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FAVOURABLE CIRCUMSTANCES",
            odia: "ଅନୁକୂଳ ପରିସ୍ଥିତି",
            emoji: "✅",
            odiaUse: "ଅନୁକୂଳ ପରିସ୍ଥିତି ଅର୍ଥ କାର୍ଯ୍ୟ ସଫଳ ହେବା ପାଇଁ ସହାୟକ ଅବସ୍ଥା । ଅନେକ ଅନୁକୂଳ ପରିସ୍ଥିତି ଯୋଗେ ଉପନିବେଶବାଦୀମାନେ ସହଜରେ ଦେଶ ଅଧିକାର କରିପାରିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ESTABLISHED",
            odia: "ପ୍ରତିଷ୍ଠିତ",
            emoji: "🏗️",
            odiaUse: "ପ୍ରତିଷ୍ଠିତ ଅର୍ଥ ସ୍ଥାପିତ ହୋଇ ମଜବୁତ ହୋଇଥିବା । ଏହି ପରିସ୍ଥିତିରେ ଉପନିବେଶବାଦୀମାନେ ପ୍ରତିଷ୍ଠିତ ଖଣି ଓ କାରଖାନାରୁ ଲାଭ ଉଠାଇଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
      ]
}

];
