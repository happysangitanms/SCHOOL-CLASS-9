const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଇଂରାଜୀ ବ୍ଯାକରଣ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9SLEG1P1-2.mp3",
    video:  "https://www.youtube.com/embed/vVfKz0M5vpc?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9SLEG1P1-2.pdf"
};

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
    
const topicsData = [

{
heading: "NOTE-1: ବାକ୍ୟର ଅଂଶ - Subject ଓ Predicate :-",

audioPoints: [{
text:"👉 ଧାରଣା: ପ୍ରତ୍ୟେକ ବାକ୍ୟର ଦୁଇଟି ମୁଖ୍ୟ ଅଂଶ ଥାଏ - Subject ଓ Predicate । Subject ହେଉଛି ସେହି ଅଂଶ, ଯାହା ବିଷୟରେ ବାକ୍ୟଟି କୁହାଯାଉଛି । Predicate ହେଉଛି ସେହି ଅଂଶ, ଯାହା Subject ବିଷୟରେ କିଛି କହେ, ଅର୍ଥାତ୍ ସେ କ'ଣ କରୁଛି ତାହା ଜଣାଏ ।<br><br>👉 ଉଦାହରଣ: 'Wind blows' ବାକ୍ୟରେ 'Wind' ହେଉଛି Subject ଏବଂ 'blows' ହେଉଛି Predicate । ସେହିପରି 'Birds fly' ରେ 'Birds' Subject ଓ 'fly' Predicate ଅଟେ, ଏବଂ 'She smiled' ରେ 'She' Subject ଓ 'smiled' Predicate ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ବାକ୍ୟର ଦୁଇଟି ମୁଖ୍ୟ ଅଂଶ କ'ଣ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ବାକ୍ୟର ଦୁଇଟି ମୁଖ୍ୟ ଅଂଶ ହେଉଛି Subject ଓ Predicate ।",

"<span style='color:red;'>Q-2:</span> Subject କ'ଣ କୁ କୁହାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ବାକ୍ୟରେ ଯାହା ବିଷୟରେ କୁହାଯାଉଛି, ସେହି ଅଂଶକୁ Subject କୁହାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> Predicate କ'ଣ କାମ କରେ ?<br><br><span style='color:green;'>Answer:</span> Predicate ଏହା ଜଣାଏ ଯେ Subject କ'ଣ କରୁଛି ବା ତାହାର ଅବସ୍ଥା କ'ଣ ।",

"<span style='color:red;'>Q-4:</span> 'Birds fly' ବାକ୍ୟରେ Subject ଓ Predicate କେଉଁଟି ?<br><br><span style='color:green;'>Answer:</span> ଏଥିରେ 'Birds' Subject ଏବଂ 'fly' Predicate ଅଟେ ।"

]
},

{
heading: "NOTE-2: ଏକ-ଶବ୍ଦ ବିଶିଷ୍ଟ Subject ଓ Predicate ର ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଯଦି ଗୋଟିଏ ବାକ୍ୟର Subject କେବଳ ଗୋଟିଏ ଶବ୍ଦରେ ତିଆରି, ତେବେ ସେହି ଶବ୍ଦଟି ହୁଏ Noun ନହେଲେ Pronoun ହୋଇଥାଏ । ସେହିପରି ଯଦି Predicate ମଧ୍ୟ ଗୋଟିଏ ଶବ୍ଦରେ ତିଆରି, ତେବେ ସେହି ଶବ୍ଦଟି ନିଶ୍ଚୟ ଏକ Verb ହୋଇଥିବ ।<br><br>👉 ଉଦାହରଣ: 'Rama plays' ବାକ୍ୟରେ 'Rama' ଏକ Noun ଅଟେ ଯାହା Subject ଅଟେ, ଏବଂ 'plays' ଏକ Verb ଅଟେ ଯାହା Predicate ଅଟେ । 'She sings' ରେ 'She' ଏକ Pronoun ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଏକ-ଶବ୍ଦ ବିଶିଷ୍ଟ Subject ସାଧାରଣତଃ କେଉଁ ପ୍ରକାରର ଶବ୍ଦ ହୋଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଏକ-ଶବ୍ଦ ବିଶିଷ୍ଟ Subject ଏକ Noun ନହେଲେ ଏକ Pronoun ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-2:</span> ଏକ-ଶବ୍ଦ ବିଶିଷ୍ଟ Predicate କେଉଁ ପ୍ରକାରର ଶବ୍ଦ ହେବାକୁ ପଡ଼େ ?<br><br><span style='color:green;'>Answer:</span> ଏକ-ଶବ୍ଦ ବିଶିଷ୍ଟ Predicate ନିଶ୍ଚୟ ଏକ Verb ହେବାକୁ ପଡ଼େ ।",

"<span style='color:red;'>Q-3:</span> 'Time flies' ବାକ୍ୟରେ 'flies' ଶବ୍ଦଟି କେଉଁ ଶ୍ରେଣୀର ଅଟେ ?<br><br><span style='color:green;'>Answer:</span> 'flies' ଶବ୍ଦଟି ଏକ Verb ଅଟେ, କାରଣ ଏହା Predicate ଅଟେ ।",

"<span style='color:red;'>Q-4:</span> 'He' ଭଳି ଶବ୍ଦ Subject ହେଲେ ତାହା କେଉଁ ଶ୍ରେଣୀର ?<br><br><span style='color:green;'>Answer:</span> 'He' ଭଳି ଶବ୍ଦ ଏକ Pronoun ଅଟେ ।"

]
},

{
heading: "NOTE-3: ବାକ୍ୟକୁ ଭାଗ କରି Verb ଚିହ୍ନଟ କରିବା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଗୋଟିଏ ବାକ୍ୟକୁ ଆମେ ଦୁଇଟି ଭାଗରେ ଭାଗ କରିପାରିବା - ପ୍ରଥମେ Subject ଏବଂ ପରେ Predicate । ଏହା କରିବା ପରେ Predicate ଭିତରୁ Verb ଟିକୁ ଆଲଗା କରି ଚିହ୍ନଟ କରାଯାଇ ପାରିବ ।<br><br>👉 ଉଦାହରଣ: 'Rama plays' ବାକ୍ୟକୁ ଭାଗ କଲେ - Subject: Rama, Predicate: plays, ଏବଂ ଏହି ବାକ୍ୟର Verb ହେଉଛି 'plays' । ସେହିପରି 'Children laugh' ରେ Subject 'Children' ଏବଂ Verb 'laugh' ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଗୋଟିଏ ବାକ୍ୟକୁ କେତୋଟି ଭାଗରେ ଭାଗ କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ଗୋଟିଏ ବାକ୍ୟକୁ ଦୁଇଟି ଭାଗରେ ଭାଗ କରାଯାଏ - Subject ଏବଂ Predicate ।",

"<span style='color:red;'>Q-2:</span> Verb ଟିକୁ ବାକ୍ୟର କେଉଁ ଅଂଶରୁ ଖୋଜାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> Verb ଟିକୁ ବାକ୍ୟର Predicate ଅଂଶରୁ ଖୋଜାଯାଏ ।",

"<span style='color:red;'>Q-3:</span> 'Children laugh' ବାକ୍ୟର Verb କେଉଁଟି ?<br><br><span style='color:green;'>Answer:</span> ଏହି ବାକ୍ୟର Verb ହେଉଛି 'laugh' ।",

"<span style='color:red;'>Q-4:</span> 'You should obey your parents' ଭଳି ଲମ୍ବା ବାକ୍ୟରେ ମଧ୍ୟ ଆମେ କ'ଣ ଚିହ୍ନଟ କରିପାରିବା ?<br><br><span style='color:green;'>Answer:</span> ଏଭଳି ଲମ୍ବା ବାକ୍ୟରେ ମଧ୍ୟ ଆମେ Subject ଓ Predicate ଚିହ୍ନଟ କରି Verb ଖୋଜିପାରିବା ।"

]
},

{
heading: "NOTE-4: Subject ଓ Predicate ର Head-word ନିୟମ :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଅନେକ ସମୟରେ Subject ଓ Predicate ଗୋଟିଏରୁ ଅଧିକ ଶବ୍ଦରେ ତିଆରି ହୋଇଥାଏ । ଏଭଳି କ୍ଷେତ୍ରରେ ମଧ୍ୟ ଏକ ନିୟମ ଥାଏ - Subject ର ମୁଖ୍ୟ ଶବ୍ଦ (Head-word) ସର୍ବଦା ଏକ Noun ହୋଇଥାଏ, ଏବଂ Predicate ର ମୁଖ୍ୟ ଶବ୍ଦ ସର୍ବଦା ଏକ Verb ହୋଇଥାଏ ।<br><br>👉 ଉଦାହରଣ: 'Rama Chandra, the son of Dasharatha, ruled over Ayodhya for many years' ବାକ୍ୟରେ Subject ର Head-word ହେଉଛି 'Rama Chandra' ଏବଂ Predicate ର Head-word ହେଉଛି 'ruled' ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଲମ୍ବା Subject ର Head-word କେଉଁ ଶ୍ରେଣୀର ହୋଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଲମ୍ବା Subject ର Head-word ସର୍ବଦା ଏକ Noun ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-2:</span> ଲମ୍ବା Predicate ର Head-word କେଉଁ ଶ୍ରେଣୀର ହୋଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଲମ୍ବା Predicate ର Head-word ସର୍ବଦା ଏକ Verb ହୋଇଥାଏ ।",

"<span style='color:red;'>Q-3:</span> 'Our old neighbour has a dog' ବାକ୍ୟରେ Subject ର Head-word କେଉଁଟି ?<br><br><span style='color:green;'>Answer:</span> ଏହି ବାକ୍ୟରେ Subject ର Head-word ହେଉଛି 'neighbour' ।",

"<span style='color:red;'>Q-4:</span> 'It has been raining for the last two hours' ବାକ୍ୟରେ Predicate ର Head-word କେଉଁଟି ?<br><br><span style='color:green;'>Answer:</span> ଏହି ବାକ୍ୟରେ Predicate ର Head-word ହେଉଛି 'raining' ।"

]
},

{
heading: "NOTE-5: ରାସ୍ତା ବୁଝାଇବା ପାଇଁ ନିର୍ଦ୍ଦେଶ ଲେଖିବା :-",

audioPoints: [{
text:"👉 ଧାରଣା: କାହାକୁ ରାସ୍ତା ବୁଝାଇବା ପାଇଁ ଆମେ କ୍ରମାନ୍ୱୟରେ ସାଧାରଣ ନିର୍ଦ୍ଦେଶ ମୂଳକ ବାକ୍ୟ ବ୍ୟବହାର କରୁ, ଯେମିତି ସିଧା ଯିବା, ବାମକୁ ମୋଡ଼ିବା, ଡାହାଣକୁ ମୋଡ଼ିବା ଆଦି । ଏହି ପ୍ରକାର ବାକ୍ୟଗୁଡ଼ିକ ଏକ ପ୍ରକାର Predicate ଦ୍ୱାରା ଆରମ୍ଭ ହୁଏ, ଯେଉଁଠି Subject ଲୁଚି ରହିଥାଏ ।<br><br>👉 ଉଦାହରଣ: ଟ୍ରାଫିକ ପୋଲିସ ବାଇକ ଚାଳକଙ୍କୁ ସାଇନିକ ସ୍କୁଲ ଯିବାର ରାସ୍ତା ବୁଝାଇବା ପାଇଁ କୁହନ୍ତି - 'Go straight along the road', 'Turn left', 'Take the Nandankanan road', 'Turn right at Nalco Chhak' - ଏହିପରି କ୍ରମାନ୍ୱୟରେ ନିର୍ଦ୍ଦେଶ ଦିଅନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ରାସ୍ତା ବୁଝାଇବା ପାଇଁ କେଉଁ ପ୍ରକାରର ବାକ୍ୟ ବ୍ୟବହାର କରାଯାଏ ?<br><br><span style='color:green;'>Answer:</span> ରାସ୍ତା ବୁଝାଇବା ପାଇଁ କ୍ରମାନ୍ୱୟରେ ସାଧାରଣ ନିର୍ଦ୍ଦେଶ ମୂଳକ ବାକ୍ୟ ବ୍ୟବହାର କରାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ରାସ୍ତା ବୁଝାଇବାର ବାକ୍ୟରେ ସାଧାରଣତଃ କେଉଁ କେଉଁ ଶବ୍ଦ ବ୍ୟବହାର ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> 'ସିଧା ଯିବା', 'ବାମକୁ ମୋଡ଼ିବା', 'ଡାହାଣକୁ ମୋଡ଼ିବା' ଭଳି ଶବ୍ଦ ବ୍ୟବହାର ହୁଏ ।",

"<span style='color:red;'>Q-3:</span> ଏହିପରି ନିର୍ଦ୍ଦେଶ ମୂଳକ ବାକ୍ୟରେ Subject କାହିଁକି ଦେଖାଯାଏ ନାହିଁ ?<br><br><span style='color:green;'>Answer:</span> ଏଭଳି ବାକ୍ୟରେ Subject ('You') ଲୁଚି ରହିଥାଏ, ତେଣୁ ତାହା ଲେଖାଯାଏ ନାହିଁ ।",

"<span style='color:red;'>Q-4:</span> ନିଜର ଦିନଚର୍ଯ୍ୟା ବିଷୟରେ ବାକ୍ୟ ଲେଖିଲା ପରେ ଆମେ କ'ଣ ଚିହ୍ନଟ କରିବା ଆବଶ୍ୟକ ?<br><br><span style='color:green;'>Answer:</span> ଆମେ ପ୍ରତ୍ୟେକ ବାକ୍ୟର Subject ଓ Predicate ଚିହ୍ନଟ କରିବା ଆବଶ୍ୟକ ।"

]
}

];
    
const courseData = {
            teacherImage: "https://via.placeholder.com/400x300/667eea/ffffff?text=Teacher",
            sentences: [
{
    text: `
<div class="game-container">
<!-- Progressive Learning Cards -->
    <div class="learning-cards-container">

<!-- Main Navigation Card - Always Visible -->
<div class="learning-card reveal-card card-blue" id="mainNavCard" style="display: block;">
    <div class="learning-card-content">    
    
<!-- Topic Counter with Navigation Buttons on sides -->
<div class="topic-counter-wrapper" id="topicCounterWrapper" style="display: none; justify-content: space-between; align-items: center; gap: 8px;">
    <button class="question-btn" id="prevBtn" onclick="navigateTopic(-1)" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); flex-shrink: 0; padding: 10px 12px; font-size: 13px;">
        ⬅️ ପଛକୁ ଫେରିବା
    </button>
    
    <span id="topicCounter" style="font-weight: bold; font-size: 16px; text-align: center; flex: 1;">Topic 1 of 3</span>
    
    <button class="question-btn" id="nextBtn" onclick="navigateTopic(1)" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); flex-shrink: 0; padding: 10px 12px; font-size: 13px;">
        ଆଗକୁ ଯିବା ➡️ </button>
</div>
        
<!-- Welcome Blackboard -->
<div id="welcomeBlackboard" class="word-display">
    <span class="word-display-text">
        <span class="answer-section" id="welcomeExplanation">
            🌹ଇ-ବିଦ୍ୟା ଏକାଡେମି ଦ୍ଵାରା ପ୍ରସ୍ତୁତ🌹<br>ଏହି ସ୍ଵତନ୍ତ୍ର କ୍ଲାସ୍ ରେ ଆପଣଙ୍କୁ ସ୍ଵାଗତ ।
        </span>
    </span>
</div>

<!-- Topic Content (Hidden Initially) -->
<div id="topicContent" style="display: none;">
    <div class="word-display">
        <span class="word-display-text">
            <span class="question-heading" id="topicHeading"></span><br>
            <span class="answer-section" id="topicExplanation"></span>
        </span>
    </div>
    
    <!-- Question Buttons Grid -->
    <div class="questions-grid" id="questionButtons">
        <button class="question-btn" onclick="showTopicAnswer('q1')">ପ୍ରଶ୍ନ-1</button>
        <button class="question-btn" onclick="showTopicAnswer('q2')">ପ୍ରଶ୍ନ-2</button>
        <button class="question-btn" onclick="showTopicAnswer('q3')">ପ୍ରଶ୍ନ-3</button>
        <button class="question-btn" onclick="showTopicAnswer('q4')">ପ୍ରଶ୍ନ-4</button>
    </div>
    
    <!-- Answer Box -->
    <div id="mainAnswerBox" class="answer-box">
        👆 Click any question above to see the answer
    </div>
</div>
        
<!-- Start Button (Visible Initially) -->
<div id="startButtonContainer" style="display: grid; margin-top: 20px;">
    <button class="question-btn" id="startBtn" onclick="startLearning()" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); font-size: 18px; padding: 15px;">
        🚀 ପଢା ଆରମ୍ଭ କରିବା ପାଇଁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ । 
    </button>
</div>
    </div>
</div>
  `, 
    audio: "",
mermaid: [
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%
flowchart TD

TITLE["📖 GRAPH-1:<br/>Parts of a Sentence:<br/>Subject and Predicate"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 Examples"]
A --> I1["Wind → blows."]
A --> I2["Birds → fly."]
A --> I3["She → smiled."]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 The Two Parts"]
M --> M1["A sentence has two<br/>essential parts."]
M --> M2["Subject is who or what<br/>the sentence is about."]
M --> M3["Predicate tells what<br/>the subject does."]
M --> M4["Single-word subject is<br/>a noun or a pronoun."]
M --> M5["Single-word predicate<br/>must be a Verb."]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 Key Rule"]
C --> C1["Head-word of the subject<br/>is a noun."]
C --> C2["Head-word of the predicate<br/>is a verb."]
C --> C3["Both parts together give<br/>the sentence complete meaning."]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%
flowchart TD

TITLE["📖 GRAPH-2:<br/>Splitting Sentences into<br/>Subject, Predicate and Verb"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 Sample (Activity-7)"]
A --> I1["Rama plays."]
A --> I2["Subject - Rama."]
A --> I3["Predicate - plays.<br/>Verb - plays."]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 Method"]
M --> M1["First find the subject<br/>of the sentence."]
M --> M2["Then find the predicate<br/>that follows it."]
M --> M3["Pick out the Verb<br/>from the predicate."]
M --> M4["Practice with: She sings,<br/>Time flies, He can write well."]
M --> M5["Practice with: Children laugh,<br/>Rabindra can read, etc."]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 Beyond Single Words"]
C --> C1["Subject may be a phrase:<br/>'Rama chandra, the son of Dasharatha'."]
C --> C2["Predicate may be a phrase:<br/>'ruled over Ayodhya for many years'."]
C --> C3["Verb identification helps<br/>understand sentence structure."]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%
flowchart TD

TITLE["📖 GRAPH-3:<br/>Applying Subject-Predicate<br/>in Real Writing (Activities 3-6)"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 Activity-3"]
A --> I1["Write 6 sentences using<br/>info about Shrinivas."]
A --> I2["Father, age, sister,<br/>hobby details given."]
A --> I3["Turn short notes into<br/>full sentences."]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 Roadmap Activities"]
M --> M1["Activity-4: Read the police-<br/>rider dialogue and roadmap."]
M --> M2["Identify subjects and<br/>predicates in the dialogue."]
M --> M3["Activity-5: Write 5 sentences<br/>explaining a roadmap to Swati."]
M --> M4["Use direction instructions<br/>(go straight, turn left, etc.)."]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 Activity-6: Daily Routine"]
C --> C1["Write a few sentences<br/>on your daily routine."]
C --> C2["Circle the subjects in<br/>each sentence."]
C --> C3["Underline the predicates<br/>in each sentence."]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4 body;
class C,C1,C2,C3 conclusion;`
]
      
}  
]
};  
