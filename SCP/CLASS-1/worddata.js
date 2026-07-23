const wordData = {
currentWord: 0,
words: [
{
word: "MATTER",
odia: "ପଦାର୍ଥ",
emoji: "🧪",
odiaUse: "ପଦାର୍ଥ ଅର୍ଥ ଆମ ଚାରିପାଖରେ ଥିବା ସବୁ ଜିନିଷ । ବାୟୁ, ଜଳ, ଖାଦ୍ୟ, ପଥର ଆଦି ସବୁ ପଦାର୍ଥ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SCIENTIFIC",
odia: "ବୈଜ୍ଞାନିକ",
emoji: "🔬",
odiaUse: "ବୈଜ୍ଞାନିକ ଅର୍ଥ ବିଜ୍ଞାନ ସହ ସମ୍ବନ୍ଧିତ । ପଦାର୍ଥ ଶବ୍ଦଟି ଏକ ବୈଜ୍ଞାନିକ ନାମ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "MASS",
odia: "ବସ୍ତୁତ୍ୱ",
emoji: "⚖️",
odiaUse: "ବସ୍ତୁତ୍ୱ ଅର୍ଥ କୌଣସି ପଦାର୍ଥର ପରିମାଣ । ପ୍ରତ୍ୟେକ ପଦାର୍ଥର ବସ୍ତୁତ୍ୱ ଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "VOLUME",
odia: "ଆୟତନ",
emoji: "📦",
odiaUse: "ଆୟତନ ଅର୍ଥ ପଦାର୍ଥ ଯେତିକି ସ୍ଥାନ ଦଖଲ କରେ । ପ୍ରତ୍ୟେକ ପଦାର୍ଥର ଆୟତନ ଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "OCCUPY",
odia: "ଦଖଲ କରିବା",
emoji: "📍",
odiaUse: "ଦଖଲ କରିବା ଅର୍ଥ ସ୍ଥାନ ନେବା । ପ୍ରତ୍ୟେକ ପଦାର୍ଥ କିଛି ସ୍ଥାନ ଦଖଲ କରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PHILOSOPHER",
odia: "ଦାର୍ଶନିକ",
emoji: "🤔",
odiaUse: "ଦାର୍ଶନିକ ଅର୍ଥ ଚିନ୍ତାଧାରା ଓ ଜ୍ଞାନର ଅଧ୍ୟୟନ କରୁଥିବା ବ୍ୟକ୍ତି । ପ୍ରାଚୀନ ଭାରତୀୟ ଦାର୍ଶନିକମାନେ ପଞ୍ଚତତ୍ତ୍ୱର ମତ ଦେଇଥିଲେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "FIVE ELEMENTS",
odia: "ପଞ୍ଚତତ୍ତ୍ୱ",
emoji: "🌍",
odiaUse: "ପଞ୍ଚତତ୍ତ୍ୱ ଅର୍ଥ ମାଟି, ଜଳ, ବାୟୁ, ଅଗ୍ନି ଓ ଆକାଶ । ପ୍ରାଚୀନ ଭାରତୀୟମାନେ ସବୁ ବସ୍ତୁକୁ ପଞ୍ଚତତ୍ତ୍ୱରୁ ତିଆରି ବୋଲି ମାନୁଥିଲେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "LIVING",
odia: "ସଜୀବ",
emoji: "🌱",
odiaUse: "ସଜୀବ ଅର୍ଥ ଯାହାର ଜୀବନ ଅଛି । ଉଦ୍ଭିଦ ଓ ପଶୁ ସଜୀବ ବସ୍ତୁ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "NON-LIVING",
odia: "ନିର୍ଜୀବ",
emoji: "🪨",
odiaUse: "ନିର୍ଜୀବ ଅର୍ଥ ଯାହାର ଜୀବନ ନାହିଁ । ପଥର ଓ ବାଲି ନିର୍ଜୀବ ବସ୍ତୁ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CLASSIFICATION",
odia: "ବର୍ଗୀକରଣ",
emoji: "📚",
odiaUse: "ବର୍ଗୀକରଣ ଅର୍ଥ ଭାଗ କରି ସଜାଇବା । ବୈଜ୍ଞାନିକମାନେ ପଦାର୍ଥର ବର୍ଗୀକରଣ କରିଛନ୍ତି ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PHYSICAL PROPERTY",
odia: "ଭୌତିକ ଗୁଣ",
emoji: "📏",
odiaUse: "ଭୌତିକ ଗୁଣ ଅର୍ଥ ପଦାର୍ଥର ବାହ୍ୟ ଗୁଣ । ଏହି ଅଧ୍ୟାୟରେ ଭୌତିକ ଗୁଣ ବିଷୟରେ ପଢ଼ାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CHEMICAL PROPERTY",
odia: "ରାସାୟନିକ ଗୁଣ",
emoji: "⚗️",
odiaUse: "ରାସାୟନିକ ଗୁଣ ଅର୍ଥ ପଦାର୍ଥର ରାସାୟନିକ ସ୍ୱଭାବ । ବୈଜ୍ଞାନିକମାନେ ରାସାୟନିକ ଗୁଣ ଅନୁସାରେ ମଧ୍ୟ ପଦାର୍ଥକୁ ବାଣ୍ଟିଛନ୍ତି ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CONTINUOUS",
odia: "ଅବିଚ୍ଛିନ୍ନ",
emoji: "➖",
odiaUse: "ଅବିଚ୍ଛିନ୍ନ ଅର୍ଥ ଭାଗ ନ ହୋଇ ଲଗାତାର ଥିବା । କେତେକ ଲୋକ ପଦାର୍ଥକୁ ଅବିଚ୍ଛିନ୍ନ ବୋଲି ମାନୁଥିଲେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PARTICLE",
odia: "କଣିକା",
emoji: "🔹",
odiaUse: "କଣିକା ଅର୍ଥ ବହୁତ ଛୋଟ ଅଂଶ । ପଦାର୍ଥ ଛୋଟ ଛୋଟ କଣିକାରେ ତିଆରି ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "BEAKER",
odia: "ବିକର",
emoji: "🥛",
odiaUse: "ବିକର ଅର୍ଥ ପରୀକ୍ଷାଗାରରେ ବ୍ୟବହୃତ ପାତ୍ର । ଲୁଣ କିମ୍ବା ଚିନି ପରୀକ୍ଷା ପାଇଁ ବିକରରେ ଜଳ ନିଆଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "DISSOLVE",
odia: "ଦ୍ରବୀଭୂତ",
emoji: "💧",
odiaUse: "ଦ୍ରବୀଭୂତ ଅର୍ଥ ଜଳରେ ସମ୍ପୂର୍ଣ୍ଣ ମିଶିଯିବା । ଲୁଣ ଓ ଚିନି ଜଳରେ ଦ୍ରବୀଭୂତ ହୋଇଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SPREAD",
odia: "ବ୍ୟାପିଯିବା",
emoji: "🌊",
odiaUse: "ବ୍ୟାପିଯିବା ଅର୍ଥ ଚାରିଆଡ଼େ ଛିଣ୍ଡିଯିବା । ଲୁଣର କଣିକା ଜଳରେ ବ୍ୟାପିଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "POTASSIUM PERMANGANATE",
odia: "ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍",
emoji: "🧫",
odiaUse: "ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍ ଏକ ରାସାୟନିକ ପଦାର୍ଥ । କଣିକାର କ୍ଷୁଦ୍ରତା ଜାଣିବା ପାଇଁ ଏହାର ପରୀକ୍ଷା କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CRYSTAL",
odia: "ସ୍ଫଟିକ",
emoji: "💎",
odiaUse: "ସ୍ଫଟିକ ଅର୍ଥ କଠିନ ଚମକୁଥିବା କଣିକା । KMnO₄ ସ୍ଫଟିକକୁ ଜଳରେ ଦ୍ରବୀଭୂତ କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "DILUTION",
odia: "ଲଘୁକରଣ",
emoji: "🫗",
odiaUse: "ଲଘୁକରଣ ଅର୍ଥ ଅଧିକ ଜଳ ମିଶାଇ ଦ୍ରବଣକୁ ପତଳା କରିବା । ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍ ଦ୍ରବଣର ବାରମ୍ବାର ଲଘୁକରଣ କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SOLUTION",
odia: "ଦ୍ରବଣ",
emoji: "🥣",
odiaUse: "ଦ୍ରବଣ ଅର୍ଥ କୌଣସି ପଦାର୍ଥ ଜଳରେ ମିଶି ତିଆରି ହୋଇଥିବା ତରଳ । ଡେଟଲ୍ ଦ୍ରବଣରୁ ଗନ୍ଧ ଆସିଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CONCLUSION",
odia: "ସିଦ୍ଧାନ୍ତ",
emoji: "✅",
odiaUse: "ସିଦ୍ଧାନ୍ତ ଅର୍ଥ ପରୀକ୍ଷା ପରେ ମିଳୁଥିବା ଶେଷ ନିଷ୍କର୍ଷ । ପରୀକ୍ଷାରୁ ସିଦ୍ଧାନ୍ତ ମିଳେ ଯେ ପଦାର୍ଥ କଣିକାରେ ତିଆରି ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "DIVIDE",
odia: "ବିଭକ୍ତ",
emoji: "✂️",
odiaUse: "ବିଭକ୍ତ ଅର୍ଥ ଛୋଟ ଛୋଟ ଭାଗରେ ଭାଙ୍ଗିଯିବା । କଣିକା ଆହୁରି ଛୋଟ କଣିକାରେ ବିଭକ୍ତ ହୋଇପାରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PROVE",
odia: "ପ୍ରମାଣ",
emoji: "✔️",
odiaUse: "ପ୍ରମାଣ ଅର୍ଥ ସତ୍ୟ ବୋଲି ଦେଖାଇବା । ପରୀକ୍ଷା ପଦାର୍ଥର କଣିକା ଥିବାକୁ ପ୍ରମାଣ କରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "TINY",
odia: "କ୍ଷୁଦ୍ର",
emoji: "🔬",
odiaUse: "କ୍ଷୁଦ୍ର ଅର୍ଥ ବହୁତ ଛୋଟ । ପଦାର୍ଥର କଣିକା ବହୁତ କ୍ଷୁଦ୍ର ହୋଇଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "COUNTLESS",
odia: "ଅସଂଖ୍ୟ",
emoji: "♾️",
odiaUse: "ଅସଂଖ୍ୟ ଅର୍ଥ ଯାହାକୁ ଗଣିହେବ ନାହିଁ । ଗୋଟିଏ KMnO₄ ସ୍ଫଟିକରେ ଅସଂଖ୍ୟ କଣିକା ଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "IMAGINATION",
odia: "କଳ୍ପନା",
emoji: "💭",
odiaUse: "କଳ୍ପନା ଅର୍ଥ ମନରେ ଭାବିବା । କଣିକା ଏତେ କ୍ଷୁଦ୍ର ଯେ ଆମେ ସହଜରେ କଳ୍ପନା କରିପାରୁ ନାହିଁ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "THINKING POWER",
odia: "ଚିନ୍ତାଶକ୍ତି",
emoji: "🧠",
odiaUse: "ଚିନ୍ତାଶକ୍ତି ଅର୍ଥ ଭାବିବାର କ୍ଷମତା । କଣିକାର କ୍ଷୁଦ୍ରତା ଆମ ଚିନ୍ତାଶକ୍ତିର ସୀମାରୁ ବାହାରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
}
]
};