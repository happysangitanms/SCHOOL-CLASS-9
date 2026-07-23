const wordData = {
    currentWord: 0,
    words: [
        {
            word: "CONTINENT",
            odia: "ମହାଦେଶ",
            emoji: "🌍",
            odiaUse: "ମହାଦେଶ ଅର୍ଥ ପୃଥିବୀର ଏକ ବିରାଟ ସ୍ଥଳଭାଗ । ଏସିଆ ଏକ ମହାଦେଶ ଏବଂ ଭାରତ ଏହାର ଦକ୍ଷିଣାଂଶରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBCONTINENT",
            odia: "ଉପମହାଦେଶ",
            emoji: "🗺️",
            odiaUse: "ଉପମହାଦେଶ ଅର୍ଥ ମହାଦେଶର ଏକ ବିଶାଳ ଅଂଶ ଯାହା ନିଜସ୍ୱ ପରିଚୟ ରଖେ । ଭାରତକୁ ପ୍ରାୟତଃ ଏକ ଉପମହାଦେଶ ବୋଲି କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PENINSULA",
            odia: "ପ୍ରାୟଦ୍ୱୀପ",
            emoji: "🏝️",
            odiaUse: "ପ୍ରାୟଦ୍ୱୀପ ଅର୍ଥ ତିନି ପାଖରେ ଜଳ ଓ ଏକ ପାଖରେ ସ୍ଥଳଭାଗ ଦ୍ୱାରା ଘେରି ରହିଥିବା ଭୂଖଣ୍ଡ । ଭାରତର ଦକ୍ଷିଣ ଅଂଶ ଏକ ପ୍ରାୟଦ୍ୱୀପ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MAP",
            odia: "ମାନଚିତ୍ର",
            emoji: "🗾",
            odiaUse: "ମାନଚିତ୍ର ଅର୍ଥ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ମାପରେ ପୃଥିବୀ ବା ଦେଶର ଚିତ୍ର । ଏହି ମାନଚିତ୍ରଟି ୧:୨ ମାପରେ ତିଆରି ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SCALE",
            odia: "ମାନ",
            emoji: "📐",
            odiaUse: "ମାନ ଅର୍ଥ ମାନଚିତ୍ରରେ ପ୍ରକୃତ ଦୂରତାକୁ କେତେ ଛୋଟ କରି ଦେଖାଯାଇଛି ତାହାର ଅନୁପାତ । ଏହି ମାନଚିତ୍ରର ମାନ ୧:୨ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LATITUDE",
            odia: "ଅକ୍ଷାଂଶ",
            emoji: "📏",
            odiaUse: "ଅକ୍ଷାଂଶ ଅର୍ଥ ପୃଥିବୀ ପୃଷ୍ଠରେ ପୂର୍ବ-ପଶ୍ଚିମ ଦିଗରେ ଅଙ୍କାଯାଇଥିବା କାଳ୍ପନିକ ରେଖା । ମାନଚିତ୍ରରେ ଅକ୍ଷାଂଶ ରେଖା ଦେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LONGITUDE",
            odia: "ଦ୍ରାଘିମା",
            emoji: "🧭",
            odiaUse: "ଦ୍ରାଘିମା ଅର୍ଥ ପୃଥିବୀ ପୃଷ୍ଠରେ ଉତ୍ତର-ଦକ୍ଷିଣ ଦିଗରେ ଅଙ୍କାଯାଇଥିବା କାଳ୍ପନିକ ରେଖା । ଦ୍ରାଘିମା ରେଖା ମାନ ସମୟ ସ୍ଥିର କରିବାରେ ସାହାଯ୍ୟ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STANDARD TIME",
            odia: "ମାନ ସମୟ",
            emoji: "🕰️",
            odiaUse: "ମାନ ସମୟ ଅର୍ଥ ଏକ ଦେଶର ସମସ୍ତ ସ୍ଥାନରେ ବ୍ୟବହୃତ ହେଉଥିବା ଏକକ ସମୟ । ଭାରତୀୟ ପ୍ରାମାଣିକ ସମୟ (IST) ଭାରତର ମାନ ସମୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TROPIC OF CANCER",
            odia: "କର୍କଟ କ୍ରାନ୍ତି",
            emoji: "☀️",
            odiaUse: "କର୍କଟ କ୍ରାନ୍ତି ଅର୍ଥ ପୃଥିବୀର ଉତ୍ତର ଗୋଲାର୍ଦ୍ଧରେ ୨୩.୫° ଅକ୍ଷାଂଶରେ ଥିବା କାଳ୍ପନିକ ରେଖା । ଏହି ରେଖା ଭାରତର ମଧ୍ୟଭାଗ ଦେଇ ଗତି କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OCEAN",
            odia: "ମହାସାଗର",
            emoji: "🌊",
            odiaUse: "ମହାସାଗର ଅର୍ଥ ପୃଥିବୀର ବିରାଟ ଲୁଣିଆ ଜଳରାଶି । ଭାରତର ଦକ୍ଷିଣରେ ଭାରତ ମହାସାଗର ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ISLANDS",
            odia: "ଦ୍ୱୀପପୁଞ୍ଜ",
            emoji: "🏖️",
            odiaUse: "ଦ୍ୱୀପପୁଞ୍ଜ ଅର୍ଥ ଏକାଠି ଥିବା ଅନେକ ଦ୍ୱୀପ । ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜ ଭାରତର ଏକ ଅଂଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOUNTAIN RANGE",
            odia: "ପର୍ବତମାଳା",
            emoji: "⛰️",
            odiaUse: "ପର୍ବତମାଳା ଅର୍ଥ ଧାଡ଼ି ଧାଡ଼ି ପର୍ବତ ମିଶି ତିଆରି ହୋଇଥିବା ଭୂଭାଗ । ହିମାଳୟ ପର୍ବତମାଳା ଭାରତର ଉତ୍ତରରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NEIGHBOURING COUNTRY",
            odia: "ପଡ଼ୋଶୀ ଦେଶ",
            emoji: "🤝",
            odiaUse: "ପଡ଼ୋଶୀ ଦେଶ ଅର୍ଥ ଯାହାର ସୀମା ଆମ ଦେଶ ସହିତ ମିଶିଥାଏ । ପାକିସ୍ତାନ ଭାରତର ଏକ ପଡ଼ୋଶୀ ଦେଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRADE",
            odia: "ବାଣିଜ୍ୟ",
            emoji: "🚢",
            odiaUse: "ବାଣିଜ୍ୟ ଅର୍ଥ ଦେଶ ଦେଶ ମଧ୍ୟରେ ଜିନିଷ କିଣାବିକା କରିବା । ପ୍ରାଚୀନ କାଳରୁ ଭାରତ ଅନ୍ୟ ଦେଶ ସହିତ ବାଣିଜ୍ୟ କରି ଆସିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CULTURE",
            odia: "ସଂସ୍କୃତି",
            emoji: "🎭",
            odiaUse: "ସଂସ୍କୃତି ଅର୍ଥ ଏକ ଜାତିର ପରମ୍ପରା, ଭାଷା ଓ ଜୀବନଶୈଳୀ । ଭାରତର ସଂସ୍କୃତି ପଡ଼ୋଶୀ ଦେଶମାନଙ୍କୁ ପ୍ରଭାବିତ କରିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BOUNDARY",
            odia: "ସୀମାରେଖା",
            emoji: "🚧",
            odiaUse: "ସୀମାରେଖା ଅର୍ଥ ଦୁଇ ଦେଶକୁ ଅଲଗା କରୁଥିବା ରେଖା । ହିମାଳୟ ପର୍ବତ ଭାରତର ଉତ୍ତର ସୀମାରେଖା ପରି କାମ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GULF",
            odia: "ଉପସାଗର",
            emoji: "🌊",
            odiaUse: "ଉପସାଗର ଅର୍ଥ ସ୍ଥଳଭାଗ ଭିତରକୁ ପଶିଆସିଥିବା ସାଗରର ଏକ ଅଂଶ । ବଙ୍ଗୋପସାଗର ଭାରତର ପୂର୍ବରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HEMISPHERE",
            odia: "ଗୋଲାର୍ଦ୍ଧ",
            emoji: "🌐",
            odiaUse: "ଗୋଲାର୍ଦ୍ଧ ଅର୍ଥ ପୃଥିବୀର ଅଧା ଅଂଶ । ଭାରତ ଉତ୍ତର ଗୋଲାର୍ଦ୍ଧରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUNRISE",
            odia: "ସୂର୍ଯ୍ୟୋଦୟ",
            emoji: "🌅",
            odiaUse: "ସୂର୍ଯ୍ୟୋଦୟ ଅର୍ଥ ସକାଳେ ସୂର୍ଯ୍ୟ ଉଠିବା ସମୟ । ଭାରତର ପୂର୍ବ ଭାଗରେ ପଶ୍ଚିମ ଭାଗଠାରୁ ଆଗେ ସୂର୍ଯ୍ୟୋଦୟ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUNSET",
            odia: "ସୂର୍ଯ୍ୟାସ୍ତ",
            emoji: "🌇",
            odiaUse: "ସୂର୍ଯ୍ୟାସ୍ତ ଅର୍ଥ ସନ୍ଧ୍ୟାରେ ସୂର୍ଯ୍ୟ ଅସ୍ତ ଯିବା ସମୟ । ପଶ୍ଚିମ ଭାଗରେ ପୂର୍ବ ଭାଗଠାରୁ ପରେ ସୂର୍ଯ୍ୟାସ୍ତ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TIME DIFFERENCE",
            odia: "ସମୟ ବ୍ୟବଧାନ",
            emoji: "⏱️",
            odiaUse: "ସମୟ ବ୍ୟବଧାନ ଅର୍ଥ ଦୁଇ ସ୍ଥାନ ମଧ୍ୟରେ ସମୟର ପାର୍ଥକ୍ୟ । ଭାରତର ପୂର୍ବ ଓ ପଶ୍ଚିମ ସୀମା ମଧ୍ୟରେ ପ୍ରାୟ ଦୁଇ ଘଣ୍ଟା ସମୟ ବ୍ୟବଧାନ ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MERIDIAN",
            odia: "ମଧ୍ୟାହ୍ନ ରେଖା",
            emoji: "📍",
            odiaUse: "ମଧ୍ୟାହ୍ନ ରେଖା ଅର୍ଥ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଦ୍ରାଘିମା ରେଖା ଯାହା ମାନ ସମୟ ସ୍ଥିର କରିବାରେ ବ୍ୟବହୃତ ହୁଏ । ୮୨.୫° ପୂର୍ବ ଦ୍ରାଘିମା ଭାରତର ମଧ୍ୟାହ୍ନ ରେଖା ଭାବେ ଗ୍ରହଣ କରାଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AREA",
            odia: "ବିସ୍ତାର",
            emoji: "📊",
            odiaUse: "ବିସ୍ତାର ଅର୍ଥ ଏକ ଦେଶ କେତେ ବଡ଼ ଜାଗା ଘେରି ରହିଛି । ପୂର୍ବରୁ ପଶ୍ଚିମକୁ ଭାରତର ବିସ୍ତାର ପ୍ରାୟ ୩୦° ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ANCIENT",
            odia: "ପ୍ରାଚୀନ",
            emoji: "🏛️",
            odiaUse: "ପ୍ରାଚୀନ ଅର୍ଥ ବହୁତ ପୁରୁଣା କାଳର । ପ୍ରାଚୀନ କାଳରୁ ଭାରତ ଏକ ମହତ୍ୱପୂର୍ଣ୍ଣ ଦେଶ ଭାବେ ପରିଚିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
   
