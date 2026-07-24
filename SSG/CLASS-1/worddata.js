const wordData = {
  currentWord: 0,
  words: [
    {
      word: "CIVILIZATION",
      odia: "ସଭ୍ୟତା",
      emoji: "🏛️",
      odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ମଣିଷର ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ ବିକାଶ । ଭାରତୀୟ ସଭ୍ୟତା ପୃଥିବୀର ପ୍ରମୁଖ ପୁରାତନ ସଭ୍ୟତା ମଧ୍ୟରୁ ଗୋଟିଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "DEMOCRATIC",
      odia: "ଗଣତାନ୍ତ୍ରିକ",
      emoji: "🗳️",
      odiaUse: "ଗଣତାନ୍ତ୍ରିକ ଅର୍ଥ ଲୋକଙ୍କ ଦ୍ୱାରା ଚାଲିଥିବା ଶାସନ ବ୍ୟବସ୍ଥା । ଭାରତ ପୃଥିବୀର ସବୁଠାରୁ ବଡ଼ ଗଣତାନ୍ତ୍ରିକ ଦେଶ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "DEVELOPING",
      odia: "ବିକାଶଶୀଳ",
      emoji: "📈",
      odiaUse: "ବିକାଶଶୀଳ ଅର୍ଥ ଦ୍ରୁତ ଉନ୍ନତି କରୁଥିବା । ଭାରତ ବିକାଶଶୀଳ ଦେଶମାନଙ୍କ ମଧ୍ୟରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସ୍ଥାନରେ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "INDEPENDENCE",
      odia: "ସ୍ୱାଧୀନତା",
      emoji: "🇮🇳",
      odiaUse: "ସ୍ୱାଧୀନତା ଅର୍ଥ ପରାଧୀନତାରୁ ମୁକ୍ତି । ସ୍ୱାଧୀନତା ପାଇବା ପରେ ଭାରତ ଅନେକ କ୍ଷେତ୍ରରେ ସଫଳତା ପାଇଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "AGRICULTURE",
      odia: "କୃଷି",
      emoji: "🌾",
      odiaUse: "କୃଷି ଅର୍ଥ ଚାଷ କାମ । ସ୍ୱାଧୀନତା ପରେ ଭାରତ କୃଷି କ୍ଷେତ୍ରରେ ବଡ଼ ସଫଳତା ପାଇଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "INDUSTRY",
      odia: "ଶିଳ୍ପ",
      emoji: "🏭",
      odiaUse: "ଶିଳ୍ପ ଅର୍ଥ କାରଖାନା ଓ ଉତ୍ପାଦନ କାମ । ଭାରତ ଶିଳ୍ପ କ୍ଷେତ୍ରରେ ମଧ୍ୟ ଉନ୍ନତି କରିଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "COMMUNICATION",
      odia: "ଯୋଗାଯୋଗ",
      emoji: "📡",
      odiaUse: "ଯୋଗାଯୋଗ ଅର୍ଥ ସଂପର୍କ ସ୍ଥାପନ କରିବାର ବ୍ୟବସ୍ଥା । ଭାରତ ଯୋଗାଯୋଗ କ୍ଷେତ୍ରରେ ବହୁତ ଉନ୍ନତି କରିଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "TECHNOLOGY",
      odia: "ପ୍ରଯୁକ୍ତି ବିଦ୍ୟା",
      emoji: "💻",
      odiaUse: "ପ୍ରଯୁକ୍ତି ବିଦ୍ୟା ଅର୍ଥ ନୂଆ ବୈଜ୍ଞାନିକ କୌଶଳ । ଭାରତ ପ୍ରଯୁକ୍ତି ବିଦ୍ୟାରେ ସଫଳତା ପାଇଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "ECONOMIC",
      odia: "ଆର୍ଥିକ",
      emoji: "💰",
      odiaUse: "ଆର୍ଥିକ ଅର୍ଥ ଧନ ସମ୍ବନ୍ଧୀୟ । ଭାରତ ଆର୍ଥିକ ବିକାଶ ଦିଗରେ ଆଗକୁ ବଢ଼ୁଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "POPULATION",
      odia: "ଜନସଂଖ୍ୟା",
      emoji: "👨‍👩‍👧‍👦",
      odiaUse: "ଜନସଂଖ୍ୟା ଅର୍ଥ ମୋଟ ଲୋକସଂଖ୍ୟା । ଭାରତର ଜନସଂଖ୍ୟା ବିଶ୍ୱରେ ଦ୍ୱିତୀୟ ସ୍ଥାନରେ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "CLIMATE",
      odia: "ଜଳବାୟୁ",
      emoji: "🌦️",
      odiaUse: "ଜଳବାୟୁ ଅର୍ଥ କୌଣସି ସ୍ଥାନର ଦୀର୍ଘ ସମୟର ପାଗ । ଭାରତର ବିଭିନ୍ନ ସ୍ଥାନରେ ଜଳବାୟୁ ଭିନ୍ନ ଅଟେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SETTLEMENT",
      odia: "ଜନବସତି",
      emoji: "🏘️",
      odiaUse: "ଜନବସତି ଅର୍ଥ ଲୋକ ବାସ କରୁଥିବା ସ୍ଥାନ । ଭାରତର ଜନବସତି ସବୁ ଅଞ୍ଚଳରେ ସମାନ ନୁହେଁ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "DIVERSITY",
      odia: "ବୈଚିତ୍ର୍ୟ",
      emoji: "🌈",
      odiaUse: "ବୈଚିତ୍ର୍ୟ ଅର୍ଥ ବିଭିନ୍ନ ପ୍ରକାରର ଭିନ୍ନତା । ଭାରତରେ ବହୁ ପ୍ରାକୃତିକ ବୈଚିତ୍ର୍ୟ ଦେଖାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "PLATEAU",
      odia: "ମାଳଭୂମି",
      emoji: "⛰️",
      odiaUse: "ମାଳଭୂମି ଅର୍ଥ ଉଚ୍ଚ ସମତଳ ଭୂମି । ଭାରତରେ ବହୁ ମାଳଭୂମି ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "FERTILE",
      odia: "ଉର୍ବର",
      emoji: "🌱",
      odiaUse: "ଉର୍ବର ଅର୍ଥ ଭଲ ଫସଲ ହେଉଥିବା । ଭାରତରେ ଉର୍ବର ସମତଳ ଭୂମି ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "DESERT",
      odia: "ମରୁଭୂମି",
      emoji: "🏜️",
      odiaUse: "ମରୁଭୂମି ଅର୍ଥ ବାଲିରେ ଭରା ଶୁଷ୍କ ଅଞ୍ଚଳ । ଭାରତରେ ମରୁଭୂମି ମଧ୍ୟ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "GEOGRAPHICAL",
      odia: "ଭୌଗୋଳିକ",
      emoji: "🗺️",
      odiaUse: "ଭୌଗୋଳିକ ଅର୍ଥ ପୃଥିବୀର ସ୍ଥିତି ସମ୍ବନ୍ଧୀୟ । ଭାରତର ନିଜସ୍ୱ ଭୌଗୋଳିକ ସ୍ୱାତନ୍ତ୍ର୍ୟ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SUBCONTINENT",
      odia: "ଉପମହାଦେଶ",
      emoji: "🌏",
      odiaUse: "ଉପମହାଦେଶ ଅର୍ଥ ବଡ଼ ଭୂଖଣ୍ଡର ଏକ ସ୍ୱତନ୍ତ୍ର ଅଂଶ । ଭାରତକୁ ଏକ ଉପମହାଦେଶ କୁହାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "UNITY",
      odia: "ଏକତା",
      emoji: "🤝",
      odiaUse: "ଏକତା ଅର୍ଥ ସମସ୍ତେ ମିଳିମିଶି ରହିବା । ବିଭିନ୍ନତା ମଧ୍ୟରେ ଏକତା ଭାରତର ପ୍ରମୁଖ ବୈଶିଷ୍ଟ୍ୟ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "MAINLAND",
      odia: "ମୂଳ ଭୂଖଣ୍ଡ",
      emoji: "🗾",
      odiaUse: "ମୂଳ ଭୂଖଣ୍ଡ ଅର୍ଥ ଦେଶର ପ୍ରଧାନ ସ୍ଥଳଭାଗ । ଭାରତର ମୂଳ ଭୂଖଣ୍ଡ ସହ ଦୁଇଟି ଦ୍ୱୀପପୁଞ୍ଜ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "ARCHIPELAGO",
      odia: "ଦ୍ୱୀପପୁଞ୍ଜ",
      emoji: "🏝️",
      odiaUse: "ଦ୍ୱୀପପୁଞ୍ଜ ଅର୍ଥ ଅନେକ ଦ୍ୱୀପର ସମୂହ । ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଏକ ଦ୍ୱୀପପୁଞ୍ଜ ।",
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
      odiaUse: "ଅକ୍ଷାଂଶ ଅର୍ଥ ପୂର୍ବ-ପଶ୍ଚିମ ଦିଗରେ ଅଙ୍କାଯାଇଥିବା କଳ୍ପନା ରେଖା । ଭାରତ ୮°୪’ ରୁ ୩୭°୬’ ଉତ୍ତର ଅକ୍ଷାଂଶ ମଧ୍ୟରେ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "LONGITUDE",
      odia: "ଦ୍ରାଘିମା",
      emoji: "📏",
      odiaUse: "ଦ୍ରାଘିମା ଅର୍ଥ ଉତ୍ତର-ଦକ୍ଷିଣ ଦିଗରେ ଅଙ୍କାଯାଇଥିବା କଳ୍ପନା ରେଖା । ଭାରତ ୬୮°୭’ ରୁ ୯୭°୨୫’ ପୂର୍ବ ଦ୍ରାଘିମା ମଧ୍ୟରେ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "TROPIC OF CANCER",
      odia: "କର୍କଟକ୍ରାନ୍ତି",
      emoji: "☀️",
      odiaUse: "କର୍କଟକ୍ରାନ୍ତି ଅର୍ଥ ୨୩°୩୦’ ଉତ୍ତର ଅକ୍ଷାଂଶର ରେଖା । କର୍କଟକ୍ରାନ୍ତି ଭାରତର ମଝି ଭାଗ ଦେଇ ଯାଇଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "TROPICAL",
      odia: "କ୍ରାନ୍ତୀୟ",
      emoji: "🌴",
      odiaUse: "କ୍ରାନ୍ତୀୟ ଅର୍ଥ କ୍ରାନ୍ତିବୃତ୍ତ ନିକଟର ଅଞ୍ଚଳ । ଭାରତର କିଛି ଅଂଶ କ୍ରାନ୍ତୀୟ ମଣ୍ଡଳରେ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SUBTROPICAL",
      odia: "ଉପକ୍ରାନ୍ତୀୟ",
      emoji: "🌤️",
      odiaUse: "ଉପକ୍ରାନ୍ତୀୟ ଅର୍ଥ କ୍ରାନ୍ତୀୟ ମଣ୍ଡଳର ବାହାର ନିକଟବର୍ତ୍ତୀ ଅଞ୍ଚଳ । ଭାରତର ଉତ୍ତର ଭାଗ ଉପକ୍ରାନ୍ତୀୟ ମଣ୍ଡଳରେ ଅଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SUEZ CANAL",
      odia: "ସୁଏଜ କେନାଲ",
      emoji: "🚢",
      odiaUse: "ସୁଏଜ କେନାଲ ଅର୍ଥ ସମୁଦ୍ରକୁ ଯୋଡ଼ିଥିବା କୃତ୍ରିମ ଜଳପଥ । ସୁଏଜ କେନାଲ ଖୋଲିବା ପରେ ଭାରତ ଓ ଇଉରୋପର ଦୂରତା କମିଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SILK ROUTE",
      odia: "ରେଶମ ମାର୍ଗ",
      emoji: "🛤️",
      odiaUse: "ରେଶମ ମାର୍ଗ ଅର୍ଥ ପ୍ରାଚୀନ ବାଣିଜ୍ୟ ପଥ । ଭାରତ ସ୍ଥଳପଥରେ ରେଶମ ମାର୍ଗ ସହ ଯୋଡ଼ି ହୋଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "AREA",
      odia: "କ୍ଷେତ୍ରଫଳ",
      emoji: "📐",
      odiaUse: "କ୍ଷେତ୍ରଫଳ ଅର୍ଥ କୌଣସି ସ୍ଥାନର ମୋଟ ପରିମାଣ । ଭାରତର କ୍ଷେତ୍ରଫଳ ୩.୨୮ ନିୟୁତ ବର୍ଗ କିଲୋମିଟର ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "COASTLINE",
      odia: "ଉପକୂଳ",
      emoji: "🌊",
      odiaUse: "ଉପକୂଳ ଅର୍ଥ ସମୁଦ୍ର କୂଳ ଅଞ୍ଚଳ । ଭାରତର ଉପକୂଳର ମୋଟ ଲମ୍ବ ୭,୫୦୦ କି.ମି.ରୁ ଅଧିକ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "BOUNDARY",
      odia: "ସୀମା",
      emoji: "🚩",
      odiaUse: "ସୀମା ଅର୍ଥ ଦେଶର ଶେଷ ଭାଗ । ଭାରତର ସ୍ଥଳ ସୀମାର ଲମ୍ବ ପ୍ରାୟ ୧୫,୨୦୦ କିଲୋମିଟର ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "TSUNAMI",
      odia: "ସୁନାମି",
      emoji: "🌊",
      odiaUse: "ସୁନାମି ଅର୍ଥ ସମୁଦ୍ରର ବିଶାଳ ବିନାଶକାରୀ ତରଙ୍ଗ । ୨୦୦୪ ମସିହାର ସୁନାମିରେ ଇନ୍ଦିରା ପଏଣ୍ଟ ସମୁଦ୍ର ଗର୍ଭରେ ଲୀନ ହୋଇଯାଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SUBMERGED",
      odia: "ଲୀନ",
      emoji: "🌊",
      odiaUse: "ଲୀନ ଅର୍ଥ ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ପାଣି ଭିତରେ ଡୁବିଯିବା । ସୁନାମି ପରେ ଇନ୍ଦିରା ପଏଣ୍ଟ ସମୁଦ୍ର ଗର୍ଭରେ ଲୀନ ହୋଇଯାଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    }
  ]
};