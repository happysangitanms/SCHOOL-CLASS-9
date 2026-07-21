const wordData = {
    currentWord: 0,
    words: [
        {
            word: "UNIVERSAL SET",
            odia: "ବ୍ୟାପକ ସେଟ୍",
            emoji: "🌐",
            odiaUse: "ବ୍ୟାପକ ସେଟ୍ ଅର୍ଥ ଆଲୋଚନାର ପରିସର ମଧ୍ୟରେ ଥିବା ସମସ୍ତ ସେଟ୍‌ର ମୂଳ ସେଟ୍ । ଏହାକୁ E ଚିହ୍ନ ଦ୍ୱାରା ଦର୍ଶାଯାଏ । ଉଦାହରଣ ସ୍ୱରୂପ ମନେକର ଆଲୋଚନାର ପରିସର ମଧ୍ୟରେ ପ୍ରତ୍ୟେକ ସେଟ୍ ଯଦି ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସେଟ୍ E ର ଉପସେଟ୍ ହୁଏ, ତେବେ E କୁ ବ୍ୟାପକ ସେଟ୍ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "UNION",
            odia: "ସଂଯୋଗ",
            emoji: "🔗",
            odiaUse: "ସଂଯୋଗ ଅର୍ଥ A ଓ B ଦ୍ୱୟରେ ଥିବା ବା ସମସ୍ତ ଉପାଦାନ ଗୁଡ଼ିକୁ ନେଇ ଗଠିତ ସେଟ୍ । A ଓ B ର ସଂଯୋଗକୁ A ∪ B ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯଥା A = {1,2,3,4} ଓ B = {2,4,6,8} ହେଲେ, A ∪ B = {1,2,3,4,6,8} ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTERSECTION",
            odia: "ଛେଦ",
            emoji: "🔀",
            odiaUse: "ଛେଦ ଅର୍ଥ A ଓ B ସେଟ୍ ଦ୍ୱୟରେ ଥିବା ଉଭୟଙ୍କ ମଧ୍ୟରେ ସାଧାରଣ ଉପାଦାନମାନଙ୍କୁ ନେଇ ଗଠିତ ସେଟ୍ । ଏହାକୁ A ∩ B ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯଥା A = {1,2,3} ଓ B = {1,3,5} ହେଲେ, A ∩ B = {1,3} ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIFFERENCE",
            odia: "ଅନ୍ତର",
            emoji: "➖",
            odiaUse: "ଅନ୍ତର ଅର୍ଥ A ସେଟ୍‌ର ଯେଉଁ ଉପାଦାନଗୁଡ଼ିକ B ରେ ନାହାନ୍ତି, ସେମାନଙ୍କୁ ନେଇ ଗଠିତ ସେଟ୍ । ଏହାକୁ A – B ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯଥା A = {1,2,3,4} ଓ B = {3,4,5,6} ହେଲେ, A – B = {1,2} ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DISJOINT SET",
            odia: "ଅଣଛେଦା ସେଟ୍",
            emoji: "🚫",
            odiaUse: "ଅଣଛେଦା ସେଟ୍ ଅର୍ଥ ଦୁଇଟି ସେଟ୍‌ ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥିବା ସେଟ୍ । ଯଦି A ଓ B ମଧ୍ୟରେ କୌଣସି ସାଧାରଣ ଉପାଦାନ ନ ଥାଏ, ତେବେ A ଓ B ଙ୍କୁ ଅଣଛେଦା ସେଟ୍ କୁହାଯାଏ, ଅର୍ଥାତ୍ A ∩ B = ϕ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBSET",
            odia: "ଉପସେଟ୍",
            emoji: "🧩",
            odiaUse: "ଉପସେଟ୍ ଅର୍ଥ ଏକ ସେଟ୍‌ର ଉପାଦାନଗୁଡ଼ିକ ଅନ୍ୟ ଏକ ବଡ଼ ସେଟ୍‌ ମଧ୍ୟରେ ଅନ୍ତର୍ଭୁକ୍ତ ଥିଲେ ତାହାକୁ ଉପସେଟ୍ କୁହାଯାଏ, ଯଥା ଯଦି ପ୍ରତ୍ୟେକ ଉପାଦାନ E ର ଉପାଦାନ ହୁଏ, ତେବେ ସେଟ୍ ⊆ E ଅର୍ଥାତ୍ ଉପସେଟ୍ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VENN DIAGRAM",
            odia: "ଭେନ୍‌ ଚିତ୍ର",
            emoji: "⭕",
            odiaUse: "ଭେନ୍‌ ଚିତ୍ର ଅର୍ଥ ସେଟ୍‌ ଓ ତାହାର ଉପାଦାନଗୁଡ଼ିକୁ ଆକୃତି ଚିତ୍ର ଦ୍ୱାରା ଦର୍ଶାଇବା ପ୍ରକ୍ରିୟା । ଏଥିରେ ବ୍ୟାପକ ସେଟ୍ E କୁ ଆୟତ ଚିତ୍ର ଦ୍ୱାରା ଓ ତାହାର ଉପସେଟ୍‌ମାନଙ୍କୁ ବୃତ୍ତ ଦ୍ୱାରା ଦର୍ଶାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMMUTATIVE",
            odia: "କ୍ରମବିନିମୟ",
            emoji: "🔄",
            odiaUse: "କ୍ରମବିନିମୟ ଅର୍ଥ ଦୁଇଟି ସେଟ୍‌ର କ୍ରମ ପରିବର୍ତ୍ତନ କଲେ ମଧ୍ୟ ଫଳାଫଳ ସମାନ ରହିବା । ଯଥା A ∪ B = B ∪ A ଓ A ∩ B = B ∩ A ଅର୍ଥାତ୍ ସଂଯୋଗ ଓ ଛେଦ ପ୍ରକ୍ରିୟା କ୍ରମବିନିମୟ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ASSOCIATIVE",
            odia: "ସହଯୋଗୀ",
            emoji: "🤝",
            odiaUse: "ସହଯୋଗୀ ଅର୍ଥ ତିନୋଟି ସେଟ୍‌କୁ ଯେକୌଣସି ଭାବରେ ଗୋଷ୍ଠୀକୃତ କଲେ ମଧ୍ୟ ଫଳାଫଳ ଅପରିବର୍ତ୍ତିତ ରହିବା । ଯଥା (A ∪ B) ∪ C = A ∪ (B ∪ C) ଅର୍ଥାତ୍ ସଂଯୋଗ ପ୍ରକ୍ରିୟା ସହଯୋଗୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DISTRIBUTIVE LAW",
            odia: "ବଣ୍ଟନ ନିୟମ",
            emoji: "📐",
            odiaUse: "ବଣ୍ଟନ ନିୟମ ଅର୍ଥ ସେଟ୍ ଅଙ୍କରେ ସଂଯୋଗ ଓ ଛେଦ ପ୍ରକ୍ରିୟା ପରସ୍ପରକୁ ବଣ୍ଟନ କରିଥାନ୍ତି । ଯଥା A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) ଓ A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BOOLEAN ALGEBRA",
            odia: "ବୁଲିଆନ୍ ବୀଜଗଣିତ",
            emoji: "🧮",
            odiaUse: "ବୁଲିଆନ୍ ବୀଜଗଣିତ ଅର୍ଥ ସେଟ୍‌ମାନଙ୍କ ମଧ୍ୟରେ ବ୍ୟାକରଣର ବୃଦ୍ଧି ଚାହାଁକୁ ବୁଝାଉଥିବା ବୀଜଗଣିତ, ଯାହା ଗଣିତଜ୍ଞ ଓ ଦର୍ଶନଶାସ୍ତ୍ରବିଦ୍ ଜର୍ଜ ବୁଲ୍ ତାଙ୍କ ନାମରେ ନାମିତ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EMPTY SET",
            odia: "ଶୂନ୍ୟ ସେଟ୍",
            emoji: "⭕",
            odiaUse: "ଶୂନ୍ୟ ସେଟ୍ ଅର୍ଥ କୌଣସି ଉପାଦାନ ନ ଥିବା ସେଟ୍ । ଏହାକୁ ϕ ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯଥା A ∩ ϕ = ϕ ଓ A ∪ ϕ = A ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "IDEMPOTENT",
            odia: "ସ୍ୱ-ପୁନରାବୃତ୍ତି",
            emoji: "🔁",
            odiaUse: "ସ୍ୱ-ପୁନରାବୃତ୍ତି ଅର୍ଥ ଏକ ସେଟ୍ A ର ନିଜ ସହିତ ସଂଯୋଗ ବା ଛେଦ କଲେ ମଧ୍ୟ ସେହି ସେଟ୍ A ହିଁ ରହିବା । ଯଥା A ∪ A = A ଓ A ∩ A = A ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
