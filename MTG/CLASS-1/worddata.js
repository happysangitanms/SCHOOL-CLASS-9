const wordData = {
  currentWord: 0,
  words: [
    {
      word: "SHAPE",
      odia: "ଆକୃତି",
      emoji: "🔺",
      odiaUse: "ଆକୃତି ଅର୍ଥ ବସ୍ତୁର ବାହ୍ୟ ରୂପ । ଆମ ଚାରିପାଖରେ ଥିବା ପ୍ରତ୍ୟେକ ବସ୍ତୁର କୌଣସି ନା କୌଣସି ଆକୃତି ଥାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SIMILARITY",
      odia: "ସାମ୍ୟ",
      emoji: "🤝",
      odiaUse: "ସାମ୍ୟ ଅର୍ଥ ସମାନ ଗୁଣ ବା ମିଳ । କେତେକ ଆକୃତିରେ ସାମ୍ୟ ଦେଖାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "DIFFERENCE",
      odia: "ପାର୍ଥକ୍ୟ",
      emoji: "⚖️",
      odiaUse: "ପାର୍ଥକ୍ୟ ଅର୍ଥ ଭିନ୍ନତା । ସବୁ ଆକୃତିରେ କେତେକ ପାର୍ଥକ୍ୟ ମଧ୍ୟ ଥାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "CURIOSITY",
      odia: "କୌତୁହଳ",
      emoji: "🤔",
      odiaUse: "କୌତୁହଳ ଅର୍ଥ ଜାଣିବାର ଇଚ୍ଛା । ଆକୃତି ବିଷୟରେ ମଣିଷର ମନରେ କୌତୁହଳ ସୃଷ୍ଟି ହୋଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "GEOMETRY",
      odia: "ଜ୍ୟାମିତି",
      emoji: "📐",
      odiaUse: "ଜ୍ୟାମିତି ଅର୍ଥ ଆକୃତି ଓ ମାପ ସମ୍ବନ୍ଧୀୟ ଗଣିତ ଶାସ୍ତ୍ର । ଜମି ମାପିବାର ଆବଶ୍ୟକତାରୁ ଜ୍ୟାମିତିର ବିକାଶ ହୋଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "MEASUREMENT",
      odia: "ମାପ",
      emoji: "📏",
      odiaUse: "ମାପ ଅର୍ଥ କୌଣସି ବସ୍ତୁର ପରିମାଣ ନିର୍ଣ୍ଣୟ କରିବା । ଜ୍ୟାମିତିରେ ଆକୃତିର ମାପ କରାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "EARTH",
      odia: "ପୃଥିବୀ",
      emoji: "🌍",
      odiaUse: "ପୃଥିବୀ ଅର୍ଥ ଆମର ବାସସ୍ଥାନ ଗ୍ରହ । 'ଜ୍ୟା' ଓ 'Geo' ଶବ୍ଦର ଅର୍ଥ ପୃଥିବୀ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "METRON",
      odia: "ମିତି (ମାପ)",
      emoji: "📏",
      odiaUse: "ମିତି ବା Metron ଅର୍ଥ ମାପ । Geometry ଶବ୍ଦଟି Geo ଓ Metron ଶବ୍ଦରୁ ଗଠିତ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "CIVILIZATION",
      odia: "ସଭ୍ୟତା",
      emoji: "🏛️",
      odiaUse: "ସଭ୍ୟତା ଅର୍ଥ ଉନ୍ନତ ମାନବ ସମାଜ । ମିଶର ସଭ୍ୟତାରେ ଜ୍ୟାମିତିର ପ୍ରଥମ ବିକାଶ ହୋଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "FLOOD",
      odia: "ବନ୍ୟା",
      emoji: "🌊",
      odiaUse: "ବନ୍ୟା ଅର୍ଥ ଅଧିକ ପାଣି ମାଡ଼ି ଆସିବା । ନୀଳନଦୀର ବନ୍ୟା ପରେ ଜମି ବାଣ୍ଟିବାରେ ଜ୍ୟାମିତି ବ୍ୟବହାର ହେଉଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "ALTAR",
      odia: "ଯଜ୍ଞବେଦୀ",
      emoji: "🔥",
      odiaUse: "ଯଜ୍ଞବେଦୀ ଅର୍ଥ ଯଜ୍ଞ କରିବାର ସ୍ଥାନ । ଋଷିମାନେ ଯଜ୍ଞବେଦୀ ତିଆରି କରିବାରେ ଜ୍ୟାମିତି ବ୍ୟବହାର କରୁଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SULBA SUTRA",
      odia: "ଶୁଳ୍ବ ସୂତ୍ର",
      emoji: "📜",
      odiaUse: "ଶୁଳ୍ବ ସୂତ୍ର ଅର୍ଥ ପ୍ରାଚୀନ ଜ୍ୟାମିତି ଗ୍ରନ୍ଥ । ଏହା ଯଜ୍ଞବେଦୀର ମାପ ପାଇଁ ବ୍ୟବହୃତ ହେଉଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "CITY PLANNING",
      odia: "ନଗର ଯୋଜନା",
      emoji: "🏙️",
      odiaUse: "ନଗର ଯୋଜନା ଅର୍ଥ ସହରର ସୁବ୍ୟବସ୍ଥିତ ନିର୍ମାଣ । ମହେଞ୍ଜୋଦାରୋ ଓ ହରପ୍ପାର ନଗର ଯୋଜନାରେ ଜ୍ୟାମିତି ବ୍ୟବହାର ହୋଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "MATHEMATICIAN",
      odia: "ଗଣିତଜ୍ଞ",
      emoji: "🧮",
      odiaUse: "ଗଣିତଜ୍ଞ ଅର୍ଥ ଗଣିତରେ ପାରଙ୍ଗମ ବ୍ୟକ୍ତି । ଆର୍ଯ୍ୟଭଟ ଓ ବ୍ରହ୍ମଗୁପ୍ତ ପ୍ରସିଦ୍ଧ ଗଣିତଜ୍ଞ ଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "PRACTICAL",
      odia: "ପ୍ରାୟୋଗିକ",
      emoji: "🛠️",
      odiaUse: "ପ୍ରାୟୋଗିକ ଅର୍ଥ କାମରେ ବ୍ୟବହୃତ । ପ୍ରାରମ୍ଭରେ ଜ୍ୟାମିତି ପ୍ରାୟୋଗିକ ଅନୁଭବ ଉପରେ ଆଧାରିତ ଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "OBSERVATION",
      odia: "ପର୍ଯ୍ୟବେକ୍ଷଣ",
      emoji: "👀",
      odiaUse: "ପର୍ଯ୍ୟବେକ୍ଷଣ ଅର୍ଥ ଭଲଭାବେ ନିରୀକ୍ଷଣ କରିବା । ପ୍ରତ୍ୟକ୍ଷ ପର୍ଯ୍ୟବେକ୍ଷଣ କରି ବିଭିନ୍ନ ସୂତ୍ର ତିଆରି କରାଯାଉଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "EXPERIENCE",
      odia: "ଅନୁଭବ",
      emoji: "💡",
      odiaUse: "ଅନୁଭବ ଅର୍ଥ କାମ କରି ମିଳିଥିବା ଜ୍ଞାନ । ପ୍ରାଚୀନ ଜ୍ୟାମିତି ଅନୁଭବ ଉପରେ ଆଧାରିତ ଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "LOGICAL",
      odia: "ତାର୍କିକ",
      emoji: "🧠",
      odiaUse: "ତାର୍କିକ ଅର୍ଥ ଯୁକ୍ତି ଉପରେ ଆଧାରିତ । ଗ୍ରୀକ୍ ଗଣିତଜ୍ଞମାନେ ତାର୍କିକ ଜ୍ୟାମିତିର ବିକାଶ କରିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "PROOF",
      odia: "ପ୍ରମାଣ",
      emoji: "✅",
      odiaUse: "ପ୍ରମାଣ ଅର୍ଥ ସତ୍ୟତା ସ୍ଥାପନ କରିବା । ଆଧୁନିକ ଜ୍ୟାମିତି ତାର୍କିକ ପ୍ରମାଣ ଉପରେ ଆଧାରିତ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "ELEMENTS",
      odia: "ଏଲିମେଣ୍ଟସ୍",
      emoji: "📘",
      odiaUse: "Elements ଅର୍ଥ ଇଉକ୍ଲିଡ୍‌ଙ୍କ ପ୍ରସିଦ୍ଧ ଗ୍ରନ୍ଥ । ଏହି ଗ୍ରନ୍ଥରେ ଜ୍ୟାମିତିକୁ ସୁସଂଗଠିତ ଭାବରେ ବ୍ୟାଖ୍ୟା କରାଯାଇଛି ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "DEFINITION",
      odia: "ପରିଭାଷା",
      emoji: "📖",
      odiaUse: "ପରିଭାଷା ଅର୍ଥ କୌଣସି ପଦର ସଠିକ୍ ଅର୍ଥ । ଇଉକ୍ଲିଡ୍ ତାଙ୍କ ଗ୍ରନ୍ଥରେ ପରିଭାଷା ଦେଇଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "FOUNDATION",
      odia: "ମୌଳିକ ପଦକ୍ଷେପ",
      emoji: "🏗️",
      odiaUse: "ମୌଳିକ ପଦକ୍ଷେପ ଅର୍ଥ ଆରମ୍ଭର ମୁଖ୍ୟ ଭିତ୍ତି । ଇଉକ୍ଲିଡ୍‌ଙ୍କ କାର୍ଯ୍ୟ ଜ୍ୟାମିତି ପାଇଁ ମୌଳିକ ପଦକ୍ଷେପ ଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "FATHER OF GEOMETRY",
      odia: "ଜ୍ୟାମିତିର ଜନକ",
      emoji: "👨‍🏫",
      odiaUse: "ଜ୍ୟାମିତିର ଜନକ ଅର୍ଥ ଜ୍ୟାମିତିର ପ୍ରମୁଖ ପ୍ରବର୍ତ୍ତକ । ଇଉକ୍ଲିଡ୍‌ଙ୍କୁ ଜ୍ୟାମିତିର ଜନକ କୁହାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "EUCLIDEAN GEOMETRY",
      odia: "ଇଉକ୍ଲିଡୀୟ ଜ୍ୟାମିତି",
      emoji: "📐",
      odiaUse: "ଇଉକ୍ଲିଡୀୟ ଜ୍ୟାମିତି ଅର୍ଥ ଇଉକ୍ଲିଡ୍‌ଙ୍କ ନାମରେ ପରିଚିତ ଜ୍ୟାମିତି । ପୂର୍ବରୁ ବିଦ୍ୟାଳୟରେ ଏହା ପଢ଼ାଯାଉଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "CRITICISM",
      odia: "ସମାଲୋଚନା",
      emoji: "📝",
      odiaUse: "ସମାଲୋଚନା ଅର୍ଥ ତ୍ରୁଟି ଦେଖାଇ ବିଚାର କରିବା । ବର୍ଟ୍ରାଣ୍ଡ ରସେଲ ଇଉକ୍ଲିଡ୍‌ଙ୍କ ଜ୍ୟାମିତିର ସମାଲୋଚନା କରିଥିଲେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "AXIOMATIC",
      odia: "ସ୍ୱୟଂସିଦ୍ଧ",
      emoji: "📚",
      odiaUse: "ସ୍ୱୟଂସିଦ୍ଧ ଅର୍ଥ ପ୍ରମାଣ ବିନା ସତ୍ୟ ବୋଲି ମାନାଯାଇଥିବା । ଆଧୁନିକ ସ୍ୱୟଂସିଦ୍ଧ ଜ୍ୟାମିତିର ବିକାଶ ହୋଇଥିଲା ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "POSTULATE",
      odia: "ସ୍ୱୀକାର୍ଯ୍ୟ",
      emoji: "✔️",
      odiaUse: "ସ୍ୱୀକାର୍ଯ୍ୟ ଅର୍ଥ ପ୍ରମାଣ ବିନା ଗ୍ରହଣ କରାଯାଇଥିବା ସତ୍ୟ । ପରୀକ୍ଷା ଓ ନିରୀକ୍ଷଣର ତଥ୍ୟକୁ ସ୍ୱୀକାର୍ଯ୍ୟ ବୋଲି ମାନାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "SET",
      odia: "ସେଟ୍",
      emoji: "🗂️",
      odiaUse: "ସେଟ୍ ଅର୍ଥ ବସ୍ତୁମାନଙ୍କର ସଂଗ୍ରହ । ଆଧୁନିକ ଜ୍ୟାମିତିକୁ ସେଟ୍‌ର ଭାଷାରେ ପ୍ରକାଶ କରାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "TERM",
      odia: "ପଦ",
      emoji: "🔤",
      odiaUse: "ପଦ ଅର୍ଥ କୌଣସି ବିଷୟର ବିଶେଷ ଶବ୍ଦ । ଜ୍ୟାମିତିରେ ଅନେକ ପାରିଭାଷିକ ପଦ ବ୍ୟବହାର କରାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "UNDEFINED TERM",
      odia: "ସଂଜ୍ଞାବିହୀନ ପଦ",
      emoji: "❓",
      odiaUse: "ସଂଜ୍ଞାବିହୀନ ପଦ ଅର୍ଥ ଯାହାର ସଂଜ୍ଞା ଦିଆଯାଏ ନାହିଁ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳ ସଂଜ୍ଞାବିହୀନ ପଦ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "DEFINED TERM",
      odia: "ସଂଜ୍ଞାକୃତ ପଦ",
      emoji: "📑",
      odiaUse: "ସଂଜ୍ଞାକୃତ ପଦ ଅର୍ଥ ଯାହାର ସଂଜ୍ଞା ଦିଆଯାଇଥାଏ । ଜ୍ୟାମିତିର ଅନେକ ପଦ ସଂଜ୍ଞାକୃତ ପଦ ଅଟେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "POINT",
      odia: "ବିନ୍ଦୁ",
      emoji: "•",
      odiaUse: "ବିନ୍ଦୁ ଅର୍ଥ ସ୍ଥାନର ସୂଚନା ଦେଉଥିବା ମୌଳିକ ପଦ । ବିନ୍ଦୁ ଜ୍ୟାମିତିର ସଂଜ୍ଞାବିହୀନ ପଦ ଅଟେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "LINE",
      odia: "ରେଖା / ସରଳରେଖା",
      emoji: "📏",
      odiaUse: "ରେଖା ଅର୍ଥ ସିଧା ପଥ । ରେଖା ଜ୍ୟାମିତିର ଏକ ସଂଜ୍ଞାବିହୀନ ପଦ ଅଟେ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "PLANE",
      odia: "ସମତଳ",
      emoji: "⬜",
      odiaUse: "ସମତଳ ଅର୍ଥ ସମାନ ସିଧା ପୃଷ୍ଠ । ସମତଳ ଜ୍ୟାମିତିର ମୌଳିକ ପଦ ମଧ୍ୟରୁ ଗୋଟିଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "FUNDAMENTAL TERM",
      odia: "ମୌଳିକ ପଦ",
      emoji: "🧱",
      odiaUse: "ମୌଳିକ ପଦ ଅର୍ଥ ମୂଳ ଆଧାର ହେଉଥିବା ପଦ । ବିନ୍ଦୁ, ରେଖା ଓ ସମତଳକୁ ମୌଳିକ ପଦ କୁହାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    },
    {
      word: "INSPECTION",
      odia: "ନିରୀକ୍ଷଣ",
      emoji: "🔍",
      odiaUse: "ନିରୀକ୍ଷଣ ଅର୍ଥ ଭଲଭାବେ ଦେଖିବା । ପରୀକ୍ଷା ଓ ନିରୀକ୍ଷଣରୁ ମିଳିଥିବା ତଥ୍ୟକୁ ସ୍ୱୀକାର କରାଯାଏ ।",
      audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
    }
  ]
};