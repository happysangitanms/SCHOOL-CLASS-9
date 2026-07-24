const wordData = {
    currentWord: 0,
    words: [
        {
            word: "BIODIVERSITY",
            odia: "ଜୀବ ବିବିଧତା",
            emoji: "🌿",
            odiaUse: "ଜୀବ ବିବିଧତା ଅର୍ଥ ପ୍ରାକୃତିକ ପରିବେଶରେ ବିଭିନ୍ନ ପ୍ରକାରର ଜୀବ ଏକାଠି ବସବାସ କରିବା । ପୃଥିବୀରେ ଥିବା ଜୀବ ବିବିଧତା ପ୍ରକୃତିକୁ ସନ୍ତୁଳିତ ରଖେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIVERSITY",
            odia: "ବିବିଧତା",
            emoji: "🌈",
            odiaUse: "ବିବିଧତା ଅର୍ଥ ଅନେକ ପ୍ରକାରର ଭିନ୍ନତା । ଜୀବମାନଙ୍କ ମଧ୍ୟରେ ଆକାର, ରଙ୍ଗ ଓ ଆୟୁର ବିବିଧତା ଦେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SIMILARITY",
            odia: "ସମାନତା",
            emoji: "🤝",
            odiaUse: "ସମାନତା ଅର୍ଥ ମିଳ । ମଣିଷ ଓ ମାଙ୍କଡ଼ ମଧ୍ୟରେ କିଛି ସମାନତା ରହିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIFFERENCE",
            odia: "ପାର୍ଥକ୍ୟ",
            emoji: "⚖️",
            odiaUse: "ପାର୍ଥକ୍ୟ ଅର୍ଥ ଅମିଳ ବା ଭିନ୍ନତା । ମଣିଷ ଓ ଗାଈ ମଧ୍ୟରେ ଅନେକ ପାର୍ଥକ୍ୟ ରହିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHARACTERISTIC",
            odia: "ଲକ୍ଷଣ",
            emoji: "🧬",
            odiaUse: "ଲକ୍ଷଣ ଅର୍ଥ ବିଶେଷ ଗୁଣ । ବିଶେଷ ଲକ୍ଷଣ ଆଧାରରେ ଜୀବମାନଙ୍କୁ ଚିହ୍ନଟ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COMPARISON",
            odia: "ତୁଳନା",
            emoji: "📊",
            odiaUse: "ତୁଳନା ଅର୍ଥ ମିଳ ଓ ଅମିଳ ଦେଖିବା । ମଣିଷ ଓ ମାଙ୍କଡ଼ର ତୁଳନା କଲେ ସମାନତା ଦେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GROUP",
            odia: "ଗୋଷ୍ଠୀ",
            emoji: "👥",
            odiaUse: "ଗୋଷ୍ଠୀ ଅର୍ଥ ସମାନ ପ୍ରକାରର ଦଳ । ଦେଶୀ ଓ ଜର୍ସି ଗାଈକୁ ଗୋଟିଏ ଗୋଷ୍ଠୀରେ ରଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BACTERIA",
            odia: "ବାକ୍ଟେରିଆ",
            emoji: "🦠",
            odiaUse: "ବାକ୍ଟେରିଆ ଅର୍ଥ ଅତି କ୍ଷୁଦ୍ର ଜୀବ । ବାକ୍ଟେରିଆକୁ ଖାଲି ଆଖିରେ ଦେଖିହେବ ନାହିଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MICROMETER",
            odia: "ମାଇକ୍ରୋମିଟର",
            emoji: "📏",
            odiaUse: "ମାଇକ୍ରୋମିଟର ଅର୍ଥ ଅତି ଛୋଟ ମାପର ଏକକ । ବାକ୍ଟେରିଆର ଆକାର ମାଇକ୍ରୋମିଟରରେ ମାପାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WHALE",
            odia: "ତିମି",
            emoji: "🐋",
            odiaUse: "ତିମି ଅର୍ଥ ସମୁଦ୍ରର ବିଶାଳ ପ୍ରାଣୀ । ତିମିର ଲମ୍ବ ପ୍ରାୟ ୩୦ ମିଟର ହୋଇପାରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "REDWOOD",
            odia: "ରେଡଉଡ୍ ଗଛ",
            emoji: "🌲",
            odiaUse: "ରେଡଉଡ୍ ଗଛ ଅର୍ଥ ବହୁତ ଉଚ୍ଚ ଗଛ । ରେଡଉଡ୍ ଗଛର ଉଚ୍ଚତା ପ୍ରାୟ ୧୦୦ ମିଟର ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LIFESPAN",
            odia: "ଆୟୁ",
            emoji: "⏳",
            odiaUse: "ଆୟୁ ଅର୍ଥ ବଞ୍ଚିବାର ସମୟ । ସମସ୍ତ ଜୀବର ଆୟୁ ସମାନ ନୁହେଁ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TEAK",
            odia: "ଶାଗୁଆନ",
            emoji: "🌳",
            odiaUse: "ଶାଗୁଆନ ଅର୍ଥ ଟିକ୍ ଗଛ । ଶାଗୁଆନ ଗଛ ପ୍ରାୟ ୧୦୦ରୁ ୧୫୦ ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BOTANICAL GARDEN",
            odia: "ବଟାନିକାଲ ଗାର୍ଡେନ",
            emoji: "🌺",
            odiaUse: "ବଟାନିକାଲ ଗାର୍ଡେନ ଅର୍ଥ ଉଦ୍ଭିଦ ଉଦ୍ୟାନ । କୋଲକାତା ବଟାନିକାଲ ଗାର୍ଡେନର ବଟବୃକ୍ଷ ୨୦୦ ବର୍ଷରୁ ଅଧିକ ପୁରୁଣା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BANYAN TREE",
            odia: "ବଟବୃକ୍ଷ",
            emoji: "🌳",
            odiaUse: "ବଟବୃକ୍ଷ ଅର୍ଥ ବଡ଼ ବରଗଛ । ବଟବୃକ୍ଷ ବହୁ ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ ବଞ୍ଚିପାରେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOSQUITO",
            odia: "ମଶା",
            emoji: "🦟",
            odiaUse: "ମଶା ଅର୍ଥ ରକ୍ତ ଶୋଷୁଥିବା ପତଙ୍ଗ । ମଶାର ଆୟୁ ବହୁତ କମ୍ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INSECT",
            odia: "ପତଙ୍ଗ",
            emoji: "🐞",
            odiaUse: "ପତଙ୍ଗ ଅର୍ଥ ଛୋଟ ଉଡୁଥିବା କୀଟ । କେତେକ ପତଙ୍ଗ କେବଳ ଅଳ୍ପ କିଛି ଦିନ ବଞ୍ଚନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TORTOISE",
            odia: "କଇଁଛ",
            emoji: "🐢",
            odiaUse: "କଇଁଛ ଅର୍ଥ ଧୀରେ ଚାଲୁଥିବା ସରୀସୃପ । କେତେକ କଇଁଛ ପ୍ରାୟ ୨୦୦ ବର୍ଷ ବଞ୍ଚନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "COLOUR",
            odia: "ରଙ୍ଗ",
            emoji: "🎨",
            odiaUse: "ରଙ୍ଗ ଅର୍ଥ ବର୍ଣ୍ଣ । ଜୀବମାନଙ୍କ ଶରୀରର ରଙ୍ଗ ଭିନ୍ନ ଭିନ୍ନ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PARROT",
            odia: "ଶୁଆ",
            emoji: "🦜",
            odiaUse: "ଶୁଆ ଅର୍ଥ ସବୁଜ ରଙ୍ଗର ପକ୍ଷୀ । ଶୁଆର ରଙ୍ଗ ସବୁଜ ହୋଇଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PEACOCK",
            odia: "ମୟୂର",
            emoji: "🦚",
            odiaUse: "ମୟୂର ଅର୍ଥ ସୁନ୍ଦର ପୁଚ୍ଛ ଥିବା ପକ୍ଷୀ । ମୟୂରର ପୁଚ୍ଛ ବହୁତ ସୁନ୍ଦର ରଙ୍ଗର ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TAIL",
            odia: "ପୁଚ୍ଛ",
            emoji: "🪶",
            odiaUse: "ପୁଚ୍ଛ ଅର୍ଥ ଲାଞ୍ଜ । ମୟୂରର ପୁଚ୍ଛ ବହୁତ ଆକର୍ଷଣୀୟ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STRIPES",
            odia: "ପଟା ପଟା ଦାଗ",
            emoji: "🐅",
            odiaUse: "ପଟା ପଟା ଦାଗ ଅର୍ଥ ଶରୀରରେ ଥିବା ଧାଡ଼ିଆ ଚିହ୍ନ । ବାଘର ଶରୀରରେ ପଟା ପଟା ଦାଗ ଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "BUTTERFLY",
            odia: "ପ୍ରଜାପତି",
            emoji: "🦋",
            odiaUse: "ପ୍ରଜାପତି ଅର୍ଥ ରଙ୍ଗିନ ପାଖ ଥିବା ପତଙ୍ଗ । ପ୍ରଜାପତି ଫୁଲ ବଗିଚାକୁ ସୁନ୍ଦର କରିଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NATURAL ENVIRONMENT",
            odia: "ପ୍ରାକୃତିକ ପରିବେଶ",
            emoji: "🏞️",
            odiaUse: "ପ୍ରାକୃତିକ ପରିବେଶ ଅର୍ଥ ପ୍ରକୃତିର ସ୍ୱାଭାବିକ ପରିବେଶ । ପ୍ରାକୃତିକ ପରିବେଶରେ ଜୀବ ବିବିଧତା ସ୍ପଷ୍ଟ ଦେଖାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "FOREST",
            odia: "ଜଙ୍ଗଲ",
            emoji: "🌲",
            odiaUse: "ଜଙ୍ଗଲ ଅର୍ଥ ବହୁ ଗଛ ଥିବା ସ୍ଥାନ । ଜଙ୍ଗଲରେ ବହୁ ପ୍ରକାରର ଜୀବ ବାସ କରନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MOUNTAIN",
            odia: "ପର୍ବତ",
            emoji: "⛰️",
            odiaUse: "ପର୍ବତ ଅର୍ଥ ବହୁତ ଉଚ୍ଚ ପାହାଡ଼ । ପର୍ବତ ଅଞ୍ଚଳରେ ଭିନ୍ନ ପ୍ରକାରର ଜୀବ ରହନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RIVER",
            odia: "ନଦୀ",
            emoji: "🏞️",
            odiaUse: "ନଦୀ ଅର୍ଥ ପ୍ରବାହିତ ଜଳଧାରା । ନଦୀରେ ମଧ୍ୟ ବହୁ ପ୍ରକାରର ଜୀବ ରହନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LAKE",
            odia: "ହ୍ରଦ",
            emoji: "🏕️",
            odiaUse: "ହ୍ରଦ ଅର୍ଥ ବଡ଼ ଜଳାଶୟ । ହ୍ରଦରେ ବିଭିନ୍ନ ପ୍ରକାରର ଜଳଜ ଜୀବ ବାସ କରନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SEA",
            odia: "ସମୁଦ୍ର",
            emoji: "🌊",
            odiaUse: "ସମୁଦ୍ର ଅର୍ଥ ବିଶାଳ ଲୁଣିଆ ଜଳରାଶି । ସମୁଦ୍ରରେ ଅନେକ ପ୍ରକାରର ଜୀବ ରହନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DESERT",
            odia: "ମରୁଭୂମି",
            emoji: "🏜️",
            odiaUse: "ମରୁଭୂମି ଅର୍ଥ ବାଲୁକାମୟ ଶୁଷ୍କ ଅଞ୍ଚଳ । ମରୁଭୂମିରେ ମଧ୍ୟ କିଛି ଜୀବ ବାସ କରନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SNOW-COVERED REGION",
            odia: "ବରଫାବୃତ ଅଞ୍ଚଳ",
            emoji: "❄️",
            odiaUse: "ବରଫାବୃତ ଅଞ୍ଚଳ ଅର୍ଥ ବରଫରେ ଢାକିଥିବା ସ୍ଥାନ । ବରଫାବୃତ ଅଞ୍ଚଳରେ ମଧ୍ୟ ଜୀବ ବାସ କରନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EVOLUTION",
            odia: "ଜୈବବିବର୍ତ୍ତନ",
            emoji: "🧬",
            odiaUse: "ଜୈବବିବର୍ତ୍ତନ ଅର୍ଥ ଦୀର୍ଘ ସମୟରେ ଜୀବମାନଙ୍କର ପରିବର୍ତ୍ତନ । ଜୈବବିବର୍ତ୍ତନ ଫଳରେ ଆଜିର ଜୀବ ବିବିଧତା ସୃଷ୍ଟି ହୋଇଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXTINCTION",
            odia: "ବିଲୁପ୍ତି",
            emoji: "☠️",
            odiaUse: "ବିଲୁପ୍ତି ଅର୍ଥ ଚିରଦିନ ପାଇଁ ନଷ୍ଟ ହୋଇଯିବା । ଅନେକ ଜୀବ ଜାତି ବିଲୁପ୍ତ ହୋଇଯାଇଛନ୍ତି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "POPULATION",
            odia: "ଜନସଂଖ୍ୟା",
            emoji: "👨‍👩‍👧‍👦",
            odiaUse: "ଜନସଂଖ୍ୟା ଅର୍ଥ ଲୋକସଂଖ୍ୟା । ବଢ଼ୁଥିବା ଜନସଂଖ୍ୟା ଜୀବ ବିଲୁପ୍ତିର ଏକ କାରଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ENVIRONMENTAL DEGRADATION",
            odia: "ପରିବେଶର ଅବକ୍ଷୟ",
            emoji: "🏭",
            odiaUse: "ପରିବେଶର ଅବକ୍ଷୟ ଅର୍ଥ ପରିବେଶର କ୍ଷତି ହେବା । ପରିବେଶର ଅବକ୍ଷୟ ଜୀବ ବିଲୁପ୍ତିର ମୁଖ୍ୟ କାରଣ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TAXONOMY",
            odia: "ଟାକ୍ସୋନମି",
            emoji: "📚",
            odiaUse: "ଟାକ୍ସୋନମି ଅର୍ଥ ଜୀବମାନଙ୍କର ବୈଜ୍ଞାନିକ ଶ୍ରେଣୀବିଭାଗ । ଟାକ୍ସୋନମି ଦ୍ୱାରା ଜୀବମାନଙ୍କୁ ସହଜରେ ଚିହ୍ନଟ କରାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SYSTEMATICS",
            odia: "ସିଷ୍ଟେମାଟିକ୍ସ",
            emoji: "🗂️",
            odiaUse: "ସିଷ୍ଟେମାଟିକ୍ସ ଅର୍ଥ ଜୀବମାନଙ୍କର ବୈଜ୍ଞାନିକ ଶ୍ରେଣୀବିଭାଗ ପଦ୍ଧତି । ଟାକ୍ସୋନମିକୁ ସିଷ୍ଟେମାଟିକ୍ସ ମଧ୍ୟ କୁହାଯାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CLASSIFICATION",
            odia: "ଶ୍ରେଣୀବିଭାଗ",
            emoji: "🗃️",
            odiaUse: "ଶ୍ରେଣୀବିଭାଗ ଅର୍ଥ ସମାନ ଲକ୍ଷଣ ଅନୁସାରେ ଭାଗ କରିବା । ଶ୍ରେଣୀବିଭାଗ କଲେ ଜୀବମାନଙ୍କୁ ଚିହ୍ନିବା ସହଜ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GEOGRAPHICAL REGION",
            odia: "ଭୌଗୋଳିକ ଅଞ୍ଚଳ",
            emoji: "🗺️",
            odiaUse: "ଭୌଗୋଳିକ ଅଞ୍ଚଳ ଅର୍ଥ ପୃଥିବୀର ନିର୍ଦ୍ଦିଷ୍ଟ ସ୍ଥାନ । ଭୌଗୋଳିକ ଅଞ୍ଚଳ ଅନୁସାରେ ଜୀବମାନଙ୍କର ବିସ୍ତାର ଭିନ୍ନ ହୁଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ECOLOGY",
            odia: "ପରିବେଶ ବିଜ୍ଞାନ",
            emoji: "🌍",
            odiaUse: "ପରିବେଶ ବିଜ୍ଞାନ ଅର୍ଥ ଜୀବ ଓ ପରିବେଶର ସମ୍ପର୍କ ବିଷୟକ ବିଜ୍ଞାନ । ପରିବେଶ ବିଜ୍ଞାନ ପାଇଁ ଶ୍ରେଣୀବିଭାଗ ଆବଶ୍ୟକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "AGRICULTURAL SCIENCE",
            odia: "କୃଷିବିଜ୍ଞାନ",
            emoji: "🌾",
            odiaUse: "କୃଷିବିଜ୍ଞାନ ଅର୍ଥ ଚାଷବାସ ସମ୍ବନ୍ଧୀୟ ବିଜ୍ଞାନ । କୃଷିବିଜ୍ଞାନରେ ଜୀବମାନଙ୍କ ଚିହ୍ନଟ ଆବଶ୍ୟକ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PUBLIC HEALTH",
            odia: "ଜନସ୍ୱାସ୍ଥ୍ୟ",
            emoji: "🏥",
            odiaUse: "ଜନସ୍ୱାସ୍ଥ୍ୟ ଅର୍ଥ ସାଧାରଣ ଲୋକଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ସମ୍ବନ୍ଧୀୟ ବ୍ୟବସ୍ଥା । ଜନସ୍ୱାସ୍ଥ୍ୟ କ୍ଷେତ୍ରରେ ମଧ୍ୟ ଶ୍ରେଣୀବିଭାଗର ଆବଶ୍ୟକତା ରହିଛି ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RESEARCH",
            odia: "ଗବେଷଣା",
            emoji: "🔬",
            odiaUse: "ଗବେଷଣା ଅର୍ଥ ନୂଆ ତଥ୍ୟ ଖୋଜିବା ପାଇଁ ଅଧ୍ୟୟନ । ଜୀବ ବିଜ୍ଞାନର ଗବେଷଣାରେ ଶ୍ରେଣୀବିଭାଗ ବହୁତ ଉପଯୋଗୀ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};