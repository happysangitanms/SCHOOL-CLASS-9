const wordData = {
    currentWord: 0,
    words: [
        {
            word: "EARLY RISER",
            odia: "ସକାଳୁ ଉଠୁଥିବା ବ୍ୟକ୍ତି",
            emoji: "⏰",
            odiaUse: "Early riser ଅର୍ଥ ଯିଏ ସକାଳୁ ଶୀଘ୍ର ଉଠେ । Shrinivas is not an early riser. (ଶ୍ରୀନିବାସ ସକାଳୁ ଶୀଘ୍ର ଉଠନ୍ତି ନାହିଁ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HOBBY",
            odia: "ସଉକ",
            emoji: "🎨",
            odiaUse: "Hobby ଅର୍ଥ ମନ ଭଲ ଲାଗିବା କାର୍ଯ୍ୟ ଯାହା ଆମେ ଖୁସିରେ କରୁ । Shrinivas's hobby is swimming. (ଶ୍ରୀନିବାସଙ୍କ ସଉକ ହେଉଛି ପହଁରିବା ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DIALOGUE",
            odia: "ସଂଳାପ",
            emoji: "💬",
            odiaUse: "Dialogue ଅର୍ଥ ଦୁଇ ବ୍ୟକ୍ତିଙ୍କ ମଧ୍ୟରେ କଥୋପକଥନ । The traffic police and the bike-rider had a dialogue. (ଟ୍ରାଫିକ ପୋଲିସ ଓ ବାଇକ ଚାଳକଙ୍କ ମଧ୍ୟରେ ସଂଳାପ ହେଲା ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "INSTRUCTIONS",
            odia: "ନିର୍ଦ୍ଦେଶ",
            emoji: "📋",
            odiaUse: "Instructions ଅର୍ଥ କିଛି କରିବା ପାଇଁ ଦିଆଯାଇଥିବା ଆଦେଶ କିମ୍ବା ପଥ । The police gave instructions to reach Sainik School. (ପୋଲିସ ସୈନିକ ସ୍କୁଲ ପହଞ୍ଚିବା ପାଇଁ ନିର୍ଦ୍ଦେଶ ଦେଲେ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ROAD-MAP",
            odia: "ରାସ୍ତା ମାନଚିତ୍ର",
            emoji: "🗺️",
            odiaUse: "Road-map ଅର୍ଥ ରାସ୍ତା ଦେଖାଉଥିବା ଚିତ୍ର । The traffic police drew a road-map for the bike-rider. (ଟ୍ରାଫିକ ପୋଲିସ ବାଇକ ଚାଳକଙ୍କ ପାଇଁ ରାସ୍ତା ମାନଚିତ୍ର ଆଙ୍କିଲେ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STRAIGHT",
            odia: "ସିଧା",
            emoji: "➡️",
            odiaUse: "Straight ଅର୍ଥ ସିଧା ରାସ୍ତାରେ ଚାଲିବା । Go straight along the N.H. upto Jayadev Vihar. (ଜାତୀୟ ରାଜପଥ ଦେଇ ଜୟଦେବ ବିହାର ପର୍ଯ୍ୟନ୍ତ ସିଧା ଯାଅ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NATIONAL HIGHWAY",
            odia: "ଜାତୀୟ ରାଜପଥ",
            emoji: "🛣️",
            odiaUse: "National Highway (N.H.) ଅର୍ଥ ବଡ଼ ଓ ମୁଖ୍ୟ ରାସ୍ତା ଯାହା ସହରକୁ ସହର ସହିତ ଯୋଡ଼େ । Go straight along the N.H. (ଜାତୀୟ ରାଜପଥ ଦେଇ ସିଧା ଯାଅ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CHHAK",
            odia: "ଛକ",
            emoji: "🚦",
            odiaUse: "Chhak ଅର୍ଥ ଯେଉଁଠାରେ ଅନେକ ରାସ୍ତା ମିଳିତ ହୁଏ । Turn right at Nalco Chhak. (ନାଲକୋ ଛକରେ ଡାହାଣକୁ ମୁଡ଼ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STATION SQUARE",
            odia: "ଷ୍ଟେସନ ଛକ",
            emoji: "🚉",
            odiaUse: "Station Square ଅର୍ଥ ଷ୍ଟେସନ ନିକଟସ୍ଥ ଛକ । Go upto the station square. (ଷ୍ଟେସନ ଛକ ପର୍ଯ୍ୟନ୍ତ ଯାଅ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "STATUE",
            odia: "ମୂର୍ତ୍ତି",
            emoji: "🗿",
            odiaUse: "Statue ଅର୍ଥ ପଥର କିମ୍ବା ଧାତୁରେ ତିଆରି ମନୁଷ୍ୟ ଆକୃତି । There is a statue of S. Kundu near the road. (ରାସ୍ତା ପାଖରେ ଏସ. କୁଣ୍ଡୁଙ୍କ ମୂର୍ତ୍ତି ଅଛି ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PROOF ROAD",
            odia: "ପ୍ରୁଫ ରୋଡ୍",
            emoji: "🛤️",
            odiaUse: "Proof Road ଏକ ରାସ୍ତାର ନାମ ଯାହା ମାନଚିତ୍ରରେ ଦେଖାଯାଏ । The gate of Zilla School is beside the Proof Road. (ଜିଲ୍ଲା ସ୍କୁଲର ଫାଟକ ପ୍ରୁଫ ରୋଡ୍ ପାଖରେ ଅଛି ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "DAILY ROUTINE",
            odia: "ଦୈନନ୍ଦିନ କାର୍ଯ୍ୟକ୍ରମ",
            emoji: "📅",
            odiaUse: "Daily Routine ଅର୍ଥ ପ୍ରତିଦିନ କରାଯାଉଥିବା କାର୍ଯ୍ୟ । Write a few sentences on your daily routine. (ନିଜର ଦୈନନ୍ଦିନ କାର୍ଯ୍ୟକ୍ରମ ଉପରେ କିଛି ବାକ୍ୟ ଲେଖ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SUBJECT",
            odia: "କର୍ତ୍ତା",
            emoji: "🙋",
            odiaUse: "Subject ଅର୍ଥ ବାକ୍ୟରେ ଯାହା ବିଷୟରେ କୁହାଯାଏ । Wind is the subject in 'Wind blows.' (ପବନ 'ପବନ ପବନ ଚାଲେ' ବାକ୍ୟରେ କର୍ତ୍ତା ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PREDICATE",
            odia: "କ୍ରିୟା ପଦ",
            emoji: "🏃",
            odiaUse: "Predicate ଅର୍ଥ ବାକ୍ୟରେ କର୍ତ୍ତା ବିଷୟରେ କୁହାଯାଇଥିବା ଅଂଶ । 'Blows' is the predicate in 'Wind blows.' ('ପବନ ଚାଲେ' ବାକ୍ୟରେ 'ଚାଲେ' କ୍ରିୟା ପଦ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "ESSENTIAL",
            odia: "ଅତ୍ୟାବଶ୍ୟକ",
            emoji: "❗",
            odiaUse: "Essential ଅର୍ଥ ଅତ୍ୟନ୍ତ ଆବଶ୍ୟକ । A sentence has two essential parts - subject and predicate. (ଏକ ବାକ୍ୟର ଦୁଇଟି ଅତ୍ୟାବଶ୍ୟକ ଅଂଶ ଅଛି - କର୍ତ୍ତା ଏବଂ କ୍ରିୟା ପଦ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "PRONOUN",
            odia: "ସର୍ବନାମ",
            emoji: "🔤",
            odiaUse: "Pronoun ଅର୍ଥ ବିଶେଷ୍ୟ ପରିବର୍ତ୍ତେ ବ୍ୟବହୃତ ଶବ୍ଦ । 'She' is a pronoun in 'She smiled.' ('ସେ ହସିଲା' ବାକ୍ୟରେ 'ସେ' ସର୍ବନାମ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "VERB",
            odia: "କ୍ରିୟା",
            emoji: "🏃‍♂️",
            odiaUse: "Verb ଅର୍ଥ କାର୍ଯ୍ୟ ବା ଅବସ୍ଥା ଦର୍ଶାଉଥିବା ଶବ୍ଦ । 'Plays' is the verb in 'Rama plays.' ('ରାମ ଖେଳେ' ବାକ୍ୟରେ 'ଖେଳେ' କ୍ରିୟା ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HEAD-WORD",
            odia: "ମୁଖ୍ୟ ଶବ୍ଦ",
            emoji: "👑",
            odiaUse: "Head-word ଅର୍ଥ ମୁଖ୍ୟ ବା ପ୍ରଧାନ ଶବ୍ଦ । The head-word of the subject is a noun. (କର୍ତ୍ତାର ମୁଖ୍ୟ ଶବ୍ଦ ଏକ ବିଶେଷ୍ୟ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "NEIGHBOUR",
            odia: "ପଡ଼ୋଶୀ",
            emoji: "🏠",
            odiaUse: "Neighbour ଅର୍ଥ ପାଖରେ ରହୁଥିବା ଲୋକ । Our old neighbour has a dog. (ଆମର ପୁରୁଣା ପଡ଼ୋଶୀଙ୍କର ଏକ କୁକୁର ଅଛି ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "RULED",
            odia: "ରାଜ୍ୟ କଲେ",
            emoji: "👑",
            odiaUse: "Ruled ଅର୍ଥ ରାଜ୍ୟ ଚଳାଇବା । Rama Chandra ruled over Ayodhya for many years. (ରାମ ଚନ୍ଦ୍ର ଅନେକ ବର୍ଷ ଅଯୋଧ୍ୟାରେ ରାଜ୍ୟ କଲେ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "OBEY",
            odia: "ମାନିବା",
            emoji: "🙏",
            odiaUse: "Obey ଅର୍ଥ କାହାର କଥା ମାନିବା । You should obey your parents. (ତୁମେ ତୁମର ପିତାମାତାଙ୍କ କଥା ମାନିବା ଉଚିତ୍ ।)",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
