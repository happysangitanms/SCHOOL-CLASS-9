const wordData = {
    currentWord: 0,
    words: [
        {
            word: "CIVILIZATION",
            odia: "ସଭ୍ୟତା",
            emoji: "🏛️",
            odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ଏକ ଦେଶର ପ୍ରାଚୀନ ସଂସ୍କୃତି ଓ ଜୀବନଶୈଳୀ । ଭାରତୀୟ ସଭ୍ୟତା ବହୁତ ପ୍ରାଚୀନ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEMOCRATIC",
            odia: "ଗଣତାନ୍ତ୍ରିକ",
            emoji: "🗳️",
            odiaUse: "ଗଣତାନ୍ତ୍ରିକ ଅର୍ଥ ଜନତାଙ୍କ ଦ୍ୱାରା ଚାଲିଥିବା ଶାସନ । ଭାରତ ବିଶ୍ୱର ସର୍ବବୃହତ୍ ଗଣତାନ୍ତ୍ରିକ ଦେଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DEVELOPING",
            odia: "ବିକାଶଶୀଳ",
            emoji: "📈",
            odiaUse: "ବିକାଶଶୀଳ ଅର୍ଥ ଯେଉଁ ଦେଶ ଦ୍ରୁତ ଉନ୍ନତି କରୁଛି । ଭାରତ ଏକ ବିକାଶଶୀଳ ଦେଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INDEPENDENCE",
            odia: "ସ୍ୱାଧୀନତା",
            emoji: "🇮🇳",
            odiaUse: "ସ୍ୱାଧୀନତା ଅର୍ଥ ପରାଧୀନତାରୁ ମୁକ୍ତି । ସ୍ୱାଧୀନତା ପରେ ଭାରତ ବହୁତ ଉନ୍ନତି କରିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POPULATION",
            odia: "ଜନସଂଖ୍ୟା",
            emoji: "👨‍👩‍👧‍👦",
            odiaUse: "ଜନସଂଖ୍ୟା ଅର୍ଥ ଏକ ସ୍ଥାନରେ ବସବାସ କରୁଥିବା ଲୋକଙ୍କ ସଂଖ୍ୟା । ଭାରତର ଜନସଂଖ୍ୟା ବହୁତ ଅଧିକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIVERSITY",
            odia: "ବୈଚିତ୍ର୍ୟ",
            emoji: "🌈",
            odiaUse: "ବୈଚିତ୍ର୍ୟ ଅର୍ଥ ବିଭିନ୍ନ ପ୍ରକାରର ଭିନ୍ନତା । ଭାରତ ପ୍ରାକୃତିକ ବୈଚିତ୍ର୍ୟରେ ପରିପୂର୍ଣ୍ଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PLATEAU",
            odia: "ମାଳଭୂମି",
            emoji: "⛰️",
            odiaUse: "ମାଳଭୂମି ଅର୍ଥ ଉଚ୍ଚ ଓ ସମତଳ ଭୂମି । ଭାରତରେ ଅନେକ ମାଳଭୂମି ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DESERT",
            odia: "ମରୁଭୂମି",
            emoji: "🏜️",
            odiaUse: "ମରୁଭୂମି ଅର୍ଥ ବାଲୁକାମୟ ଶୁଷ୍କ ଅଞ୍ଚଳ । ଭାରତରେ ଥାର ମରୁଭୂମି ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBCONTINENT",
            odia: "ଉପମହାଦେଶ",
            emoji: "🌏",
            odiaUse: "ଉପମହାଦେଶ ଅର୍ଥ ବଡ଼ ଓ ସ୍ୱତନ୍ତ୍ର ଭୂଖଣ୍ଡ । ଭାରତକୁ ଏକ ଉପମହାଦେଶ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNITY",
            odia: "ଏକତା",
            emoji: "🤝",
            odiaUse: "ଏକତା ଅର୍ଥ ସମସ୍ତେ ମିଳିମିଶି ରହିବା । ବିଭିନ୍ନତା ମଧ୍ୟରେ ଏକତା ଭାରତର ବୈଶିଷ୍ଟ୍ୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ISLAND",
            odia: "ଦ୍ୱୀପ",
            emoji: "🏝️",
            odiaUse: "ଦ୍ୱୀପ ଅର୍ଥ ଚାରିପଟେ ପାଣି ଘେରିଥିବା ଭୂମି । ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଏକ ଦ୍ୱୀପପୁଞ୍ଜ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HEMISPHERE",
            odia: "ଗୋଲାର୍ଦ୍ଧ",
            emoji: "🌐",
            odiaUse: "ଗୋଲାର୍ଦ୍ଧ ଅର୍ଥ ପୃଥିବୀର ଅଧା ଭାଗ । ଭାରତ ଉତ୍ତର ଗୋଲାର୍ଦ୍ଧରେ ଅବସ୍ଥିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LATITUDE",
            odia: "ଅକ୍ଷାଂଶ",
            emoji: "📍",
            odiaUse: "ଅକ୍ଷାଂଶ ଅର୍ଥ ପୂର୍ବ-ପଶ୍ଚିମ ଦିଗରେ ଟଣାଯାଇଥିବା କଳ୍ପନା ରେଖା । ଭାରତର ଅବସ୍ଥିତି ଅକ୍ଷାଂଶରେ ଦର୍ଶାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LONGITUDE",
            odia: "ଦ୍ରାଘିମା",
            emoji: "🧭",
            odiaUse: "ଦ୍ରାଘିମା ଅର୍ଥ ଉତ୍ତର-ଦକ୍ଷିଣ ଦିଗରେ ଟଣାଯାଇଥିବା କଳ୍ପନା ରେଖା । ଭାରତର ଦ୍ରାଘିମା ନିର୍ଦ୍ଦିଷ୍ଟ ଅଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TROPIC",
            odia: "କ୍ରାନ୍ତି",
            emoji: "☀️",
            odiaUse: "କ୍ରାନ୍ତି ଅର୍ଥ ପୃଥିବୀର ବିଶେଷ କଳ୍ପନା ରେଖା । କର୍କଟକ୍ରାନ୍ତି ଭାରତର ମଧ୍ୟଭାଗ ଦେଇ ଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CANAL",
            odia: "କେନାଲ",
            emoji: "🚢",
            odiaUse: "କେନାଲ ଅର୍ଥ ଜଳପଥ ପାଇଁ ତିଆରି ହୋଇଥିବା କୃତ୍ରିମ ନାଳ । ସୁଏଜ କେନାଲ ଭାରତ ଓ ଇଉରୋପର ଦୂରତା କମାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AREA",
            odia: "କ୍ଷେତ୍ରଫଳ",
            emoji: "📐",
            odiaUse: "କ୍ଷେତ୍ରଫଳ ଅର୍ଥ କୌଣସି ସ୍ଥାନର ମୋଟ ଆୟତନ । ଭାରତର କ୍ଷେତ୍ରଫଳ ୩.୨୮ ନିୟୁତ ବର୍ଗ କି.ମି. ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COASTLINE",
            odia: "ଉପକୂଳରେଖା",
            emoji: "🌊",
            odiaUse: "ଉପକୂଳରେଖା ଅର୍ଥ ସମୁଦ୍ର କୂଳର ସୀମାରେଖା । ଭାରତର ଉପକୂଳରେଖା ୭,୫୦୦ କି.ମି.ରୁ ଅଧିକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TSUNAMI",
            odia: "ସୁନାମି",
            emoji: "🌊",
            odiaUse: "ସୁନାମି ଅର୍ଥ ସମୁଦ୍ରର ବିଶାଳ ତରଙ୍ଗ । ୨୦୦୪ ମସିହାରେ ସୁନାମି ଇନ୍ଦିରା ପଏଣ୍ଟକୁ କ୍ଷତି କରିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOUNTAIN RANGE",
            odia: "ପର୍ବତଶ୍ରେଣୀ",
            emoji: "🏔️",
            odiaUse: "ପର୍ବତଶ୍ରେଣୀ ଅର୍ଥ ଅନେକ ପର୍ବତର ଧାଡ଼ି । କାରାକୋରମ ଏକ ପ୍ରସିଦ୍ଧ ପର୍ବତଶ୍ରେଣୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
