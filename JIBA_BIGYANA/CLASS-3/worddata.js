const wordData = {
    currentWord: 0,
    words: [
        {
            word: "NOMENCLATURE",
            odia: "ନାମକରଣ",
            emoji: "🏷️",
            odiaUse: "ନାମକରଣ ଅର୍ଥ ଜୀବମାନଙ୍କୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ନାମ ଦେବାର ପ୍ରକ୍ରିୟା । ବୈଜ୍ଞାନିକ ନାମକରଣର ମୌଳିକ ପ୍ରଶ୍ନ ଏହି ଅଧ୍ୟାୟରେ ଆଲୋଚନା କରାଯାଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SCIENTIST",
            odia: "ବୈଜ୍ଞାନିକ",
            emoji: "🧑‍🔬",
            odiaUse: "ବୈଜ୍ଞାନିକ ଅର୍ଥ ବିଜ୍ଞାନ କ୍ଷେତ୍ରରେ ଗବେଷଣା କରୁଥିବା ବ୍ୟକ୍ତି । କାରୋଲସ୍ ଲିନିୟସ୍ ଜଣେ ପ୍ରସିଦ୍ଧ ବୈଜ୍ଞାନିକ ଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SPECIES",
            odia: "ଜାତି",
            emoji: "🐆",
            odiaUse: "ଜାତି ଅର୍ଥ ଏକାପ୍ରକାର ଜୀବମାନଙ୍କର ସମୂହ ଯେଉଁମାନେ ପରସ୍ପର ମଧ୍ୟରେ ପ୍ରଜନନ କରିପାରନ୍ତି । ସିଂହ (Felis leo) ଏକ ଜାତି ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GENUS",
            odia: "ପ୍ରଜାତି",
            emoji: "🌿",
            odiaUse: "ପ୍ରଜାତି ଅର୍ଥ ଏକାପ୍ରକାର ଜାତିମାନଙ୍କୁ ଏକାଠି ରଖି ତିଆରି ହୋଇଥିବା ଗୋଷ୍ଠୀ । ସିଂହ, ବାଘ ଓ ପାର୍ଡ ଏକ ପ୍ରଜାତି (Felis) ର ଅନ୍ତର୍ଭୁକ୍ତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BINOMIAL",
            odia: "ଦ୍ୱିପଦୀ",
            emoji: "🔤",
            odiaUse: "ଦ୍ୱିପଦୀ ଅର୍ଥ ଦୁଇଟି ପଦରେ ଗଠିତ । ବୈଜ୍ଞାନିକ ନାମକରଣ ପାଇଁ ଦ୍ୱିପଦୀ ନାମାଙ୍କନ ପଦ୍ଧତି (Binomial Nomenclature) ବ୍ୟବହାର କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CLASSIFICATION",
            odia: "ଶ୍ରେଣୀବିଭାଗ",
            emoji: "🗂️",
            odiaUse: "ଶ୍ରେଣୀବିଭାଗ ଅର୍ଥ ଜୀବମାନଙ୍କୁ ସମାନ ଲକ୍ଷଣ ଅନୁସାରେ ଭିନ୍ନ ଭିନ୍ନ ଶ୍ରେଣୀରେ ଭାଗ କରିବା । ଆରିଷ୍ଟୋଟଲ ଶ୍ରେଣୀବିଭାଗର ଆଧାର ପ୍ରଥମେ ପ୍ରଦାନ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HABITAT",
            odia: "ବାସସ୍ଥଳୀ",
            emoji: "🏞️",
            odiaUse: "ବାସସ୍ଥଳୀ ଅର୍ଥ ଜୀବ ବାସ କରୁଥିବା ସ୍ଥାନ । ସମାନ ବାସସ୍ଥଳୀରେ ରହୁଥିବା ସବୁ ଜୀବ ଏକାପ୍ରକାର ହୁଅନ୍ତି ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHARACTERISTIC",
            odia: "ଲକ୍ଷଣ",
            emoji: "🔍",
            odiaUse: "ଲକ୍ଷଣ ଅର୍ଥ ଜୀବର ନିର୍ଦ୍ଦିଷ୍ଟ ଗୁଣ ବା ବିଶେଷତା । ଶ୍ରେଣୀବିଭାଗ କରିବାକୁ ଗଲେ ଜୀବର ଲକ୍ଷଣ ପ୍ରଥମେ ଅନୁସନ୍ଧାନ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HAIR",
            odia: "ଲୋମ",
            emoji: "🧶",
            odiaUse: "ଲୋମ ଅର୍ଥ ଶରୀରରେ ଥିବା ସୂକ୍ଷ୍ମ କେଶ । ମନୁଷ୍ୟ ଶରୀରରେ ଥିବା ଲୋମ ଏକ ବିଶେଷ ଲକ୍ଷଣ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SCALE",
            odia: "ମାଛପତ୍ର",
            emoji: "🐟",
            odiaUse: "ମାଛପତ୍ର ଅର୍ଥ ମାଛ ଆଦିର ଶରୀରକୁ ଆବୃତ କରିଥିବା ଛୋଟ ଛୋଟ ପତଳା ଆବରଣ । ମାଛର ଶରୀରରେ ମାଛପତ୍ର ଏକ ବିଶେଷ ଲକ୍ଷଣ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CELL",
            odia: "କୋଷ",
            emoji: "🧫",
            odiaUse: "କୋଷ ଅର୍ଥ ଜୀବନର ସବୁଠାରୁ ଛୋଟ ଏକକ । ବହୁକୋଷୀ ଜାନ୍ତବ ମାନଙ୍କର ବିଭିନ୍ନ କୋଷ ଥାଆନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NUCLEUS",
            odia: "ନ୍ୟୁକ୍ଲିୟସ୍",
            emoji: "⚛️",
            odiaUse: "ନ୍ୟୁକ୍ଲିୟସ୍ ଅର୍ଥ କୋଷ ଭିତରେ ଥିବା ମୁଖ୍ୟ ନିୟନ୍ତ୍ରକ ଅଂଶ । ମାନବ ଶରୀରର କୋଷର କାର୍ଯ୍ୟ ନ୍ୟୁକ୍ଲିୟସ୍ ଦ୍ୱାରା ନିୟନ୍ତ୍ରିତ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ORGANELLE",
            odia: "କୋଷାଙ୍ଗ",
            emoji: "🧬",
            odiaUse: "କୋଷାଙ୍ଗ ଅର୍ଥ କୋଷ ଭିତରେ ଥିବା ଛୋଟ ଛୋଟ ଗଠନ ଯାହା ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରେ । କୋଷାଙ୍ଗ ମାନଙ୍କ ମଧ୍ୟରେ ନ୍ୟୁକ୍ଲିୟସ୍ ମୁଖ୍ୟ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ORGAN",
            odia: "ଅଙ୍ଗ",
            emoji: "🫀",
            odiaUse: "ଅଙ୍ଗ ଅର୍ଥ ଶରୀରର ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରୁଥିବା ଅଂଶ । ଶ୍ରେଣୀବିଭାଗ ପାଇଁ ଅଙ୍ଗର ଗଠନ ମଧ୍ୟ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ITALICS",
            odia: "ତେର୍ଛା ଅକ୍ଷର",
            emoji: "✒️",
            odiaUse: "ତେର୍ଛା ଅକ୍ଷର ଅର୍ଥ ଢାଳୁ ଭାବରେ ଲେଖା ଅକ୍ଷର । ବୈଜ୍ଞାନିକ ନାମ ସର୍ବଦା ତେର୍ଛା ଅକ୍ଷରରେ ଲେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GENERIC NAME",
            odia: "ଗଣନାମ",
            emoji: "🔠",
            odiaUse: "ଗଣନାମ ଅର୍ଥ ପ୍ରଜାତିର ପ୍ରଥମ ଅକ୍ଷର ବଡ଼ ଅକ୍ଷରରେ ଲେଖାଯାଉଥିବା ନାମ । ବୈଜ୍ଞାନିକ ନାମର ପ୍ରଥମ ପଦ ଗଣନାମ ଅଟେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INTERRELATED",
            odia: "ଅନ୍ତଃସମ୍ପର୍କିତ",
            emoji: "🔗",
            odiaUse: "ଅନ୍ତଃସମ୍ପର୍କିତ ଅର୍ଥ ପରସ୍ପର ସହିତ ସମ୍ପର୍କ ଥିବା । ଆଧୁନିକ ଶ୍ରେଣୀବିଭାଗ ଅନ୍ତଃସମ୍ପର୍କିତ ଲକ୍ଷଣଗୁଡ଼ିକ ଉପରେ ଆଧାରିତ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DESIGN",
            odia: "ଗଠନ",
            emoji: "🏗️",
            odiaUse: "ଗଠନ ଅର୍ଥ କୌଣସି ବସ୍ତୁର ନିର୍ମାଣ ପଦ୍ଧତି । ଜୀବର ଗଠନ ଏକ ମହତ୍ତ୍ୱପୂର୍ଣ୍ଣ ଲକ୍ଷଣ ଅଟେ ଯାହା ପ୍ରାଥମିକତା ପାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BROADEST DIVISION",
            odia: "ବିସ୍ତୃତତମ ବିଭାଗ",
            emoji: "📊",
            odiaUse: "ବିସ୍ତୃତତମ ବିଭାଗ ଅର୍ଥ ସବୁଠାରୁ ବଡ଼ ଓ ପ୍ରଥମ ସ୍ତରର ଶ୍ରେଣୀ । ଶ୍ରେଣୀ ବିଭାଜନରେ ବିସ୍ତୃତତମ ବିଭାଗ ପ୍ରଥମେ ନିର୍ଣ୍ଣୟ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TAXONOMY",
            odia: "ବର୍ଗୀକରଣ ବିଜ୍ଞାନ",
            emoji: "📚",
            odiaUse: "ବର୍ଗୀକରଣ ବିଜ୍ଞାନ ଅର୍ଥ ଜୀବମାନଙ୍କୁ ନାମକରଣ ଓ ଶ୍ରେଣୀବିଭାଗ କରିବା ସମ୍ବନ୍ଧୀୟ ବିଜ୍ଞାନ । ICBN ଏହି ବର୍ଗୀକରଣ ବିଜ୍ଞାନରେ ନିୟମ ପ୍ରଦାନ କରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "IDENTIFICATION",
            odia: "ଚିହ୍ନଟ",
            emoji: "🆔",
            odiaUse: "ଚିହ୍ନଟ ଅର୍ଥ କୌଣସି ଜୀବକୁ ତାହାର ଲକ୍ଷଣ ଦ୍ୱାରା ଚିହ୍ନିବା । ଜୀବର ଲକ୍ଷଣ ଅନୁସନ୍ଧାନ କରି ତାହାର ଚିହ୍ନଟ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
