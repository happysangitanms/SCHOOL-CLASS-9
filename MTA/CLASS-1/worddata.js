const wordData = {
currentWord: 0,
words: [
{
word: "SET THEORY",
odia: "ସେଟ୍ ତତ୍ତ୍ୱ",
emoji: "📚",
odiaUse: "ସେଟ୍ ତତ୍ତ୍ୱ ଅର୍ଥ ସେଟ୍ ସମ୍ବନ୍ଧୀୟ ଗଣିତର ଶାଖା । ଜର୍ଜ କାଣ୍ଟର ସେଟ୍ ତତ୍ତ୍ୱର ଆରମ୍ଭ କରିଥିଲେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "GEOMETRY",
odia: "ଜ୍ୟାମିତି",
emoji: "📐",
odiaUse: "ଜ୍ୟାମିତି ଅର୍ଥ ଆକୃତି ଓ ରେଖା ସମ୍ବନ୍ଧୀୟ ଗଣିତ । ଜ୍ୟାମିତିରେ ସେଟ୍ ତତ୍ତ୍ୱ ବ୍ୟବହାର ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ALGEBRA",
odia: "ବୀଜଗଣିତ",
emoji: "➕",
odiaUse: "ବୀଜଗଣିତ ଅର୍ଥ ଚିହ୍ନ ଓ ରାଶି ସମ୍ବନ୍ଧୀୟ ଗଣିତ । ବୀଜଗଣିତରେ ସେଟ୍ ତତ୍ତ୍ୱ ବ୍ୟବହାର ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CALCULUS",
odia: "କଲନ ଶାସ୍ତ୍ର",
emoji: "📈",
odiaUse: "କଲନ ଶାସ୍ତ୍ର ଅର୍ଥ ପରିବର୍ତ୍ତନ ଓ ଗତି ସମ୍ବନ୍ଧୀୟ ଗଣିତ । କଲନ ଶାସ୍ତ୍ରରେ ମଧ୍ୟ ସେଟ୍ ତତ୍ତ୍ୱ ବ୍ୟବହାର ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ANALYSIS",
odia: "ବିଶ୍ଳେଷଣ",
emoji: "🔍",
odiaUse: "ବିଶ୍ଳେଷଣ ଅର୍ଥ ଭଲଭାବେ ପରୀକ୍ଷା କରି ବୁଝିବା । ସେଟ୍ ସାହାଯ୍ୟରେ ଗାଣିତିକ ତଥ୍ୟର ବିଶ୍ଳେଷଣ କରାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "UNDEFINED TERM",
odia: "ଅଣ-ପରିଭାଷିତ ଧାରଣା",
emoji: "❓",
odiaUse: "ଅଣ-ପରିଭାଷିତ ଧାରଣା ଅର୍ଥ ଯାହାର ସିଧାସଳଖ ପରିଭାଷା ନଥାଏ । ସେଟ୍ ଓ ଉପାଦାନ ଅଣ-ପରିଭାଷିତ ଧାରଣା ଅଟେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ELEMENT",
odia: "ଉପାଦାନ",
emoji: "🧩",
odiaUse: "ଉପାଦାନ ଅର୍ଥ ସେଟ୍ ଭିତରେ ଥିବା ବସ୍ତୁ । x ଯଦି S ରେ ଥାଏ, ତେବେ x ସେଟ୍‌ର ଉପାଦାନ ଅଟେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "BELONGS TO (∈)",
odia: "ଅନ୍ତର୍ଭୁକ୍ତ",
emoji: "✅",
odiaUse: "ଅନ୍ତର୍ଭୁକ୍ତ ଅର୍ଥ ସେଟ୍‌ର ଅଂଶ ହେବା । x ∈ S ଅର୍ଥ x, S ସେଟ୍‌ର ଉପାଦାନ ଅଟେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "DOES NOT BELONG TO (∉)",
odia: "ଅନ୍ତର୍ଭୁକ୍ତ ନୁହେଁ",
emoji: "❌",
odiaUse: "ଅନ୍ତର୍ଭୁକ୍ତ ନୁହେଁ ଅର୍ଥ ସେଟ୍‌ର ଉପାଦାନ ନହେବା । x ∉ S ଅର୍ଥ x, S ସେଟ୍‌ର ଉପାଦାନ ନୁହେଁ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "TABULAR METHOD",
odia: "ତାଲିକା ପ୍ରଣାଳୀ",
emoji: "📋",
odiaUse: "ତାଲିକା ପ୍ରଣାଳୀ ଅର୍ଥ ସବୁ ଉପାଦାନକୁ ଗୋଟିଏ ପରେ ଗୋଟିଏ ଲେଖିବା । {୧, ୨, ୩, ୪, ୫} ତାଲିକା ପ୍ରଣାଳୀର ଉଦାହରଣ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ROSTER METHOD",
odia: "ରୋଷ୍ଟର ପ୍ରଣାଳୀ",
emoji: "📝",
odiaUse: "ରୋଷ୍ଟର ପ୍ରଣାଳୀ ଅର୍ଥ ତାଲିକା ପ୍ରଣାଳୀ । ଏଥିରେ ସବୁ ଉପାଦାନକୁ କୁଟାଙ୍କଚିହ୍ନ ଭିତରେ ଲେଖାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SET-BUILDER METHOD",
odia: "ସେଟ୍ ଗଠନକାରୀ ପ୍ରଣାଳୀ",
emoji: "🏗️",
odiaUse: "ସେଟ୍ ଗଠନକାରୀ ପ୍ରଣାଳୀ ଅର୍ଥ ଉପାଦାନର ସାଧାରଣ ଧର୍ମ ଲେଖି ସେଟ୍ ଦର୍ଶାଇବା । ଏଥିରେ ପ୍ରତ୍ୟେକ ଉପାଦାନକୁ ଅଲଗା ଲେଖାଯାଏ ନାହିଁ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "PROPERTY",
odia: "ସାଧାରଣ ଧର୍ମ",
emoji: "⭐",
odiaUse: "ସାଧାରଣ ଧର୍ମ ଅର୍ଥ ସମସ୍ତ ଉପାଦାନର ଏକାଭଳି ବିଶେଷତା । ସେଟ୍ ଗଠନକାରୀ ପ୍ରଣାଳୀରେ ସାଧାରଣ ଧର୍ମ ବ୍ୟବହାର ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "FINITE SET",
odia: "ସସୀମ ସେଟ୍",
emoji: "🔢",
odiaUse: "ସସୀମ ସେଟ୍ ଅର୍ଥ ଯାହାର ଉପାଦାନ ଗଣନା ଶେଷ ହୋଇଯାଏ । {୧, ୨, ୩, ୪, ୫} ଏକ ସସୀମ ସେଟ୍ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "INFINITE SET",
odia: "ଅସୀମ ସେଟ୍",
emoji: "♾️",
odiaUse: "ଅସୀମ ସେଟ୍ ଅର୍ଥ ଯାହାର ଗଣନା କେବେ ଶେଷ ହୁଏ ନାହିଁ । ପ୍ରାକୃତିକ ସଂଖ୍ୟାର ସେଟ୍ ଏକ ଅସୀମ ସେଟ୍ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "CARDINALITY",
odia: "କାର୍ଡିନାଲିଟି",
emoji: "🔢",
odiaUse: "କାର୍ଡିନାଲିଟି ଅର୍ଥ ସେଟ୍‌ରେ ଥିବା ମୋଟ ଉପାଦାନ ସଂଖ୍ୟା । ସସୀମ ସେଟ୍‌ର କାର୍ଡିନାଲିଟିକୁ |A| କିମ୍ବା n(A) ଦ୍ୱାରା ଲେଖାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "EMPTY SET",
odia: "ଶୂନ୍ୟ ସେଟ୍",
emoji: "⭕",
odiaUse: "ଶୂନ୍ୟ ସେଟ୍ ଅର୍ଥ ଯେଉଁ ସେଟ୍‌ରେ ଗୋଟିଏ ମଧ୍ୟ ଉପାଦାନ ନଥାଏ । ଶୂନ୍ୟ ସେଟ୍‌କୁ φ କିମ୍ବା { } ଦ୍ୱାରା ଦର୍ଶାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "NULL SET",
odia: "ନଲ୍ ସେଟ୍",
emoji: "🚫",
odiaUse: "ନଲ୍ ସେଟ୍ ଅର୍ଥ ଶୂନ୍ୟ ସେଟ୍ । ନଲ୍ ସେଟ୍‌ରେ କୌଣସି ଉପାଦାନ ନଥାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "SUBSET",
odia: "ଉପସେଟ୍",
emoji: "📂",
odiaUse: "ଉପସେଟ୍ ଅର୍ଥ ଗୋଟିଏ ସେଟ୍‌ର ସବୁ ଉପାଦାନ ଅନ୍ୟ ସେଟ୍‌ରେ ଥିବା । A ⊂ B ଅର୍ଥ A, B ର ଉପସେଟ୍ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "EQUAL SETS",
odia: "ସମାନ ସେଟ୍",
emoji: "⚖️",
odiaUse: "ସମାନ ସେଟ୍ ଅର୍ଥ ଦୁଇ ସେଟ୍‌ର ସବୁ ଉପାଦାନ ସମାନ ହେବା । A ⊂ B ଓ B ⊂ A ହେଲେ A = B ହୁଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "ORDER",
odia: "କ୍ରମ",
emoji: "🔄",
odiaUse: "କ୍ରମ ଅର୍ଥ ଲେଖିବାର ଅନୁକ୍ରମ । ସେଟ୍‌ର ଉପାଦାନର କ୍ରମ ବଦଳିଲେ ମଧ୍ୟ ସେଟ୍ ବଦଳେ ନାହିଁ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "UNIVERSAL SET",
odia: "ବ୍ୟାପକ ସେଟ୍",
emoji: "🌐",
odiaUse: "ବ୍ୟାପକ ସେଟ୍ ଅର୍ଥ ଯେଉଁ ସେଟ୍‌ର ଉପସେଟ୍ ଭାବରେ ସବୁ ସେଟ୍ ଥାଏ । Q କୁ ବ୍ୟାପକ ସେଟ୍ ଭାବେ ନିଆଯାଇପାରେ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "NATURAL NUMBERS",
odia: "ପ୍ରାକୃତିକ ସଂଖ୍ୟା",
emoji: "1️⃣",
odiaUse: "ପ୍ରାକୃତିକ ସଂଖ୍ୟା ଅର୍ଥ ଗଣନାରେ ବ୍ୟବହୃତ ସଂଖ୍ୟା । ପ୍ରାକୃତିକ ସଂଖ୍ୟାର ସେଟ୍‌କୁ N ଦ୍ୱାରା ଦର୍ଶାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "INTEGERS",
odia: "ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା",
emoji: "🔢",
odiaUse: "ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅର୍ଥ ଧନାତ୍ମକ, ଋଣାତ୍ମକ ଓ ଶୂନ୍ୟ ସହିତ ସଂଖ୍ୟା । ପୂର୍ଣ୍ଣ ସଂଖ୍ୟାର ସେଟ୍‌କୁ Z ଦ୍ୱାରା ଦର୍ଶାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
},
{
word: "RATIONAL NUMBERS",
odia: "ପରିମେୟ ସଂଖ୍ୟା",
emoji: "➗",
odiaUse: "ପରିମେୟ ସଂଖ୍ୟା ଅର୍ଥ ଭଗ୍ନାଂଶ ରୂପରେ ଲେଖାଯାଇପାରୁଥିବା ସଂଖ୍ୟା । ପରିମେୟ ସଂଖ୍ୟାର ସେଟ୍‌କୁ Q ଦ୍ୱାରା ଦର୍ଶାଯାଏ ।",
audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
}
]
};