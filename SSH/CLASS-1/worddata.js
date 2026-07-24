const wordData = {
    currentWord: 0,
    words: [
        {
            word: "COLONIALISM",
            odia: "ଉପନିବେଶବାଦ",
            emoji: "🏛️",
            odiaUse: "ଉପନିବେଶବାଦ ଅର୍ଥ ଶକ୍ତିଶାଳୀ ଦେଶ ଅନ୍ୟ ଅଞ୍ଚଳରେ ବସତି ସ୍ଥାପନ କରି ନିଜ ଲାଭ ପାଇଁ ବ୍ୟବହାର କରିବା । ଇଉରୋପୀୟ ଦେଶମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାରେ ଉପନିବେଶବାଦ ଆରମ୍ଭ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SETTLEMENT",
            odia: "ବସତି",
            emoji: "🏘️",
            odiaUse: "ବସତି ଅର୍ଥ କୌଣସି ନୂଆ ସ୍ଥାନରେ ରହିବା ପାଇଁ ଘର ତିଆରି କରିବା । ଇଉରୋପୀୟମାନେ ବିଦେଶରେ ବସତି ସ୍ଥାପନ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRADE",
            odia: "ବାଣିଜ୍ୟ",
            emoji: "🛒",
            odiaUse: "ବାଣିଜ୍ୟ ଅର୍ଥ ଜିନିଷ କିଣାବିକା କରିବା ବ୍ୟବସାୟ । ବାଣିଜ୍ୟର ଉନ୍ନତି ପାଇଁ ଇଉରୋପୀୟମାନେ ଏସିଆକୁ ଆସିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EMPIRE",
            odia: "ସାମ୍ରାଜ୍ୟ",
            emoji: "👑",
            odiaUse: "ସାମ୍ରାଜ୍ୟ ଅର୍ଥ ଏକ ରାଜାଙ୍କ ଅଧୀନରେ ଥିବା ବିଶାଳ ଦେଶ ବା ଅଞ୍ଚଳ । ସେମାନେ ସାମ୍ରାଜ୍ୟ ବିସ୍ତାର ପାଇଁ ଉପନିବେଶ ସ୍ଥାପନ କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MONOPOLY",
            odia: "ଏକଚାଟିଆ ଅଧିକାର",
            emoji: "🔒",
            odiaUse: "ଏକଚାଟିଆ ଅଧିକାର ଅର୍ଥ କେବଳ ନିଜ ଏକୁଟିଆ ପାଇଁ ସମସ୍ତ ବ୍ୟବସାୟ ଅଧିକାର ରଖିବା । ସେମାନେ ବାଣିଜ୍ୟରେ ଏକଚାଟିଆ ଅଧିକାର ପାଇବାକୁ ଚେଷ୍ଟା କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RIVALRY",
            odia: "ପ୍ରତିଦ୍ୱନ୍ଦିତା",
            emoji: "⚔️",
            odiaUse: "ପ୍ରତିଦ୍ୱନ୍ଦିତା ଅର୍ଥ ଦୁଇ ପକ୍ଷ ମଧ୍ୟରେ ଥିବା ପ୍ରତିଯୋଗିତା ବା ବିରୋଧ । ଉପନିବେଶ ସ୍ଥାପନ ପାଇଁ ଦେଶମାନଙ୍କ ମଧ୍ୟରେ ପ୍ରତିଦ୍ୱନ୍ଦିତା ବଢ଼ିଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "IMPERIALISM",
            odia: "ସାମ୍ରାଜ୍ୟବାଦ",
            emoji: "🌐",
            odiaUse: "ସାମ୍ରାଜ୍ୟବାଦ ଅର୍ଥ ନିଜ ସ୍ୱାର୍ଥ ପାଇଁ ଅନ୍ୟ ଅଞ୍ଚଳ ଦଖଲ କରି ଶାସନ କରିବା ନୀତି । ଔପନିବେଶିକ ସାମ୍ରାଜ୍ୟବାଦ ପ୍ରଥମ ବିଶ୍ୱଯୁଦ୍ଧର କାରଣ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPLORATION",
            odia: "ଭୌଗୋଳିକ ଆବିଷ୍କାର",
            emoji: "🧭",
            odiaUse: "ଭୌଗୋଳିକ ଆବିଷ୍କାର ଅର୍ଥ ନୂଆ ସ୍ଥାନ ବା ପଥ ଖୋଜି ବାହାର କରିବା । ଷୋଡ଼ଶ ଶତାବ୍ଦୀରେ ଏସିଆ ପାଇଁ ଅନେକ ଭୌଗୋଳିକ ଆବିଷ୍କାର ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "EXPLORER",
            odia: "ଅନୁସନ୍ଧାନକାରୀ",
            emoji: "🗺️",
            odiaUse: "ଅନୁସନ୍ଧାନକାରୀ ଅର୍ଥ ନୂଆ ସ୍ଥାନ ଖୋଜୁଥିବା ବ୍ୟକ୍ତି । ଅନୁସନ୍ଧାନକାରୀମାନେ ନୂଆ ଅଞ୍ଚଳରେ ଲାଭର ସୁଯୋଗ ଥିବା କଥା କହିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PROFITABLE",
            odia: "ଲାଭଦାୟକ",
            emoji: "💰",
            odiaUse: "ଲାଭଦାୟକ ଅର୍ଥ ଯାହାଠାରୁ ବେଶୀ ଲାଭ ମିଳେ । ଦାସ ବ୍ୟବସାୟ ସବୁଠାରୁ ଅଧିକ ଲାଭଦାୟକ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SPICE",
            odia: "ମସଲା",
            emoji: "🌶️",
            odiaUse: "ମସଲା ଅର୍ଥ ଖାଦ୍ୟରେ ସ୍ୱାଦ ଆଣିବା ପାଇଁ ବ୍ୟବହୃତ ଜିନିଷ । ଭାରତରୁ ମସଲା ନେଇ ଇଉରୋପୀୟମାନେ ବହୁତ ଲାଭ କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SILK",
            odia: "ରେଶମ",
            emoji: "🧵",
            odiaUse: "ରେଶମ ଅର୍ଥ କୀଟରୁ ତିଆରି ହେଉଥିବା ମୂଲ୍ୟବାନ ସୂକ୍ଷ୍ମ ବସ୍ତ୍ର । ଏସିଆରୁ ରେଶମ ମଧ୍ୟ ବ୍ୟବସାୟୀମାନେ କିଣୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PEARL",
            odia: "ମୁକ୍ତା",
            emoji: "📿",
            odiaUse: "ମୁକ୍ତା ଅର୍ଥ ଝିଣୁକ ଭିତରୁ ମିଳୁଥିବା ଏକ ମୂଲ୍ୟବାନ ଝଟକା ପଥର । ଭାରତରେ ମୁକ୍ତା ଏକ ଲାଭଦାୟକ ସାମଗ୍ରୀ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "IVORY",
            odia: "ହାତୀଦାନ୍ତ",
            emoji: "🐘",
            odiaUse: "ହାତୀଦାନ୍ତ ଅର୍ଥ ହାତୀର ଦାନ୍ତରୁ ତିଆରି ମୂଲ୍ୟବାନ ସାମଗ୍ରୀ । ଆଫ୍ରିକାରୁ ହାତୀଦାନ୍ତ ମିଳୁଥିଲା ଓ ଏହା ବ୍ୟବସାୟୀଙ୍କୁ ଲାଭ ଦେଉଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SLAVERY",
            odia: "ଦାସପ୍ରଥା",
            emoji: "⛓️",
            odiaUse: "ଦାସପ୍ରଥା ଅର୍ଥ ଲୋକଙ୍କୁ କିଣି ବିକ୍ରି କରି ବଳପୂର୍ବକ କାମ କରାଇବା ପ୍ରଥା । ଆଫ୍ରିକାରେ ଦାସପ୍ରଥା ସବୁଠାରୁ ଅଧିକ ଲାଭଦାୟକ ବ୍ୟବସାୟ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SLAVE",
            odia: "କ୍ରୀତଦାସ",
            emoji: "🔗",
            odiaUse: "କ୍ରୀତଦାସ ଅର୍ଥ ଟଙ୍କା ପାଇଁ ଆଜୀବନ ବିଦେଶରେ ଗୋଲାମି କରୁଥିବା ବ୍ୟକ୍ତି । ଅନେକ ଆଫ୍ରିକୀୟଙ୍କୁ କ୍ରୀତଦାସ ଭାବରେ ଆମେରିକାକୁ ପଠାଯାଉଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INDUSTRIAL REVOLUTION",
            odia: "ଶିଳ୍ପ ବିପ୍ଳବ",
            emoji: "🏭",
            odiaUse: "ଶିଳ୍ପ ବିପ୍ଳବ ଅର୍ଥ ନୂଆ ଯନ୍ତ୍ର ଦ୍ୱାରା କମ୍ ସମୟରେ ଅଧିକ ଜିନିଷ ତିଆରି ହେବା ପରିବର୍ତ୍ତନ । ଶିଳ୍ପ ବିପ୍ଳବ ପ୍ରଥମେ ଇଂଲାଣ୍ଡରେ ଆରମ୍ଭ ହୋଇଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PRODUCTION",
            odia: "ଉତ୍ପାଦନ",
            emoji: "⚙️",
            odiaUse: "ଉତ୍ପାଦନ ଅର୍ଥ କାରଖାନାରେ ଜିନିଷ ତିଆରି କରିବା ପରିମାଣ । ଶିଳ୍ପ ବିପ୍ଳବ ପରେ ଉତ୍ପାଦନ ବହୁତ ବଢ଼ିଗଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RAW MATERIAL",
            odia: "କଞ୍ଚାମାଲ",
            emoji: "🪨",
            odiaUse: "କଞ୍ଚାମାଲ ଅର୍ଥ ଜିନିଷ ତିଆରି ପାଇଁ ଦରକାର ହେଉଥିବା ମୂଳ ପଦାର୍ଥ ଯେମିତି କୋଇଲା ବା ଲୁହା । ଏସିଆ ଓ ଆଫ୍ରିକାରେ କଞ୍ଚାମାଲ ପ୍ରଚୁର ପରିମାଣରେ ମିଳୁଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "TRANSPORTATION",
            odia: "ପରିବହନ",
            emoji: "🚢",
            odiaUse: "ପରିବହନ ଅର୍ଥ ଏକ ସ୍ଥାନରୁ ଅନ୍ୟ ସ୍ଥାନକୁ ଜିନିଷ ବା ଲୋକ ନେବା ବ୍ୟବସ୍ଥା । ବାଷ୍ପଚାଳିତ ଜାହାଜ ଆସିବା ପରେ ପରିବହନ ସହଜ ହେଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STEAM ENGINE",
            odia: "ବାଷ୍ପୀୟ ଇଞ୍ଜିନ୍",
            emoji: "🚂",
            odiaUse: "ବାଷ୍ପୀୟ ଇଞ୍ଜିନ୍ ଅର୍ଥ ପାଣି ବାଷ୍ପ ସାହାଯ୍ୟରେ ଚାଲୁଥିବା ଏକ ଯନ୍ତ୍ର । ଥମାସ ନ୍ୟୁକୋମେନ୍ ବାଷ୍ପୀୟ ଇଞ୍ଜିନ୍ ଉଦ୍ଭାବନ କରିଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RAILWAY",
            odia: "ରେଳପଥ",
            emoji: "🛤️",
            odiaUse: "ରେଳପଥ ଅର୍ଥ ରେଳଗାଡ଼ି ଚାଲିବା ପାଇଁ ତିଆରି ହୋଇଥିବା ଲୁହା ପଥ । ରେଳପଥ ତିଆରି ହେବାରୁ କଞ୍ଚାମାଲ ପରିବହନ ସହଜ ହେଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "GOVERNANCE",
            odia: "ଶାସନ ବ୍ୟବସ୍ଥା",
            emoji: "🏛️",
            odiaUse: "ଶାସନ ବ୍ୟବସ୍ଥା ଅର୍ଥ ଏକ ଦେଶକୁ ଚଳାଇବା ପ୍ରଣାଳୀ । ଊନବିଂଶ ଶତାବ୍ଦୀରେ ଏସିଆ ଓ ଆଫ୍ରିକାର ଅନେକ ଦେଶର ଶାସନ ବ୍ୟବସ୍ଥା ବହୁତ ଦୁର୍ବଳ ଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "MEDIEVAL",
            odia: "ମଧ୍ୟଯୁଗୀୟ",
            emoji: "🏰",
            odiaUse: "ମଧ୍ୟଯୁଗୀୟ ଅର୍ଥ ପୁରୁଣା ସମୟର ବା ପୁରୁଣା ଢ଼ାଞ୍ଚାର । ଅନେକ ଦେଶରେ ଏପର୍ଯ୍ୟନ୍ତ ମଧ୍ୟଯୁଗୀୟ ଶାସନ ଚାଲୁଥିଲା ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LOYALTY",
            odia: "ଆନୁଗତ୍ୟ",
            emoji: "🤝",
            odiaUse: "ଆନୁଗତ୍ୟ ଅର୍ଥ କାହା ପ୍ରତି ବିଶ୍ୱାସ ଓ ଅନୁସରଣ ଦେଖାଇବା । ଲୋକମାନେ ସ୍ଥାନୀୟ ମୁଖ୍ୟଙ୍କ ପ୍ରତି ଆନୁଗତ୍ୟ ଦେଖାଉଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "WEAPON",
            odia: "ଅସ୍ତ୍ର",
            emoji: "⚔️",
            odiaUse: "ଅସ୍ତ୍ର ଅର୍ଥ ଯୁଦ୍ଧ କରିବା ପାଇଁ ବ୍ୟବହୃତ ସାମଗ୍ରୀ । ଏସିଆ ଓ ଆଫ୍ରିକାର ଦେଶମାନେ ଉନ୍ନତ ଅସ୍ତ୍ର ତିଆରି କରିପାରୁ ନଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CIVILIZE",
            odia: "ସଭ୍ୟ କରିବା",
            emoji: "📚",
            odiaUse: "ସଭ୍ୟ କରିବା ଅର୍ଥ କାହାକୁ ଉନ୍ନତ ଜୀବନଶୈଳୀ ଶିଖାଇବା । ଇଉରୋପୀୟମାନେ ଏସିଆ ଓ ଆଫ୍ରିକାର ଲୋକଙ୍କୁ ସଭ୍ୟ କରିବା ପାଇଁ ଚେଷ୍ଟା କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CULTURE",
            odia: "ସଂସ୍କୃତି",
            emoji: "🎭",
            odiaUse: "ସଂସ୍କୃତି ଅର୍ଥ ଏକ ସମାଜର ଜୀବନଶୈଳୀ, ପରମ୍ପରା ଓ ମୂଲ୍ୟବୋଧ । ଇଉରୋପୀୟମାନେ ପାଶ୍ଚାତ୍ୟ ସଂସ୍କୃତି ପ୍ରଚାର କରିବାକୁ ଚାହୁଁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ARTISAN",
            odia: "କାରିଗର",
            emoji: "🔨",
            odiaUse: "କାରିଗର ଅର୍ଥ ହାତରେ ଜିନିଷ ତିଆରି କରୁଥିବା ଦକ୍ଷ ବ୍ୟକ୍ତି । ଏସିଆ ଓ ଆଫ୍ରିକାର କାରିଗରମାନେ ପୁରୁଣା ପଦ୍ଧତିରେ ଜିନିଷ ତିଆରି କରୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "LABOURER",
            odia: "ଶ୍ରମିକ",
            emoji: "👷",
            odiaUse: "ଶ୍ରମିକ ଅର୍ଥ ପାରିଶ୍ରମିକ ପାଇଁ କାମ କରୁଥିବା ବ୍ୟକ୍ତି । ଏସିଆ ଓ ଆଫ୍ରିକାରେ କମ୍ ପାରିଶ୍ରମିକରେ ଅନେକ ଶ୍ରମିକ ମିଳୁଥିଲେ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};