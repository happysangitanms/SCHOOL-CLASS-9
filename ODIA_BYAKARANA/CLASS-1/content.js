const APP_CONFIG = {
    sreni: "ନବମ",
    subject: "ଓଡ଼ିଆ ବ୍ୟାକରଣ"
};


const CLASS_NAME = "school9";

const MEDIA_CONFIG = {
    audio1: "https://audio.evidya.de/S9FLOG1P1.mp3",
    video:  "https://www.youtube.com/embed/2VF_yeUM7qs?playsinline=1&rel=0&modestbranding=1&autoplay=1",
    pdf:    "https://audio.evidya.de/S9FLOG1P1.pdf"
};

const wordData = {
    currentWord: 0,
    words: [
        {
            word: "VISHNU",
            odia: "ଅ",
            emoji: "🕉️",
            odiaUse: "ଅ ଏକାକ୍ଷର ବର୍ଣ୍ଣ ଯାହାର ଅର୍ଥ ବିଷ୍ଣୁ । ଏକମାତ୍ର ବର୍ଣ୍ଣ ମଧ୍ୟ କେତେବେଳେ ଅର୍ଥ ପ୍ରକାଶ କରିଥାଏ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HEAD/WATER",
            odia: "କ",
            emoji: "💧",
            odiaUse: "କ ଏକାକ୍ଷର ବର୍ଣ୍ଣ ଯାହାର ଅର୍ଥ ମସ୍ତକ କିମ୍ବା ଜଳ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SKY",
            odia: "ଖ",
            emoji: "🌌",
            odiaUse: "ଖ ଏକାକ୍ଷର ବର୍ଣ୍ଣ ଯାହାର ଅର୍ଥ ଆକାଶ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "HOUSE",
            odia: "ଘର",
            emoji: "🏠",
            odiaUse: "ଘର ଅର୍ଥ ବାସସ୍ଥାନ । ଏହା ଏକାଧିକ ବର୍ଣ୍ଣର ମିଳନରେ ସୃଷ୍ଟି ହୋଇଥିବା ଏକ ଶବ୍ଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CITY",
            odia: "ନଗର",
            emoji: "🏙️",
            odiaUse: "ନଗର ଅର୍ଥ ସହର । ଏହା ଏକାଧିକ ବର୍ଣ୍ଣର ମିଳନରେ ସୃଷ୍ଟି ହୋଇଥିବା ଏକ ଶବ୍ଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "SHERBET",
            odia: "ସରବତ",
            emoji: "🥤",
            odiaUse: "ସରବତ ଅର୍ଥ ମିଠା ପାନୀୟ । ଏହା ଏକାଧିକ ବର୍ଣ୍ଣର ମିଳନରେ ସୃଷ୍ଟି ହୋଇଥିବା ଏକ ଶବ୍ଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        },
        {
            word: "CONTINUOUS",
            odia: "ଅନବରତ",
            emoji: "🔄",
            odiaUse: "ଅନବରତ ଅର୍ଥ ନିରନ୍ତର ବା କ୍ରମାଗତ ଭାବେ । ଏହା ଏକାଧିକ ବର୍ଣ୍ଣର ମିଳନରେ ସୃଷ୍ଟି ହୋଇଥିବା ଏକ ଶବ୍ଦ ।",
            audio: { intro: "audio-url-here", encourage: "audio-url-here", praise: "audio-url-here" }
        }
    ]
};
    
const topicsData = [

{
heading: "NOTE-1: ବର୍ଣ୍ଣ ମିଳନରେ ଅର୍ଥ ପ୍ରକାଶ ନହେବା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଦୁଇ କିମ୍ବା ତିନୋଟି ବର୍ଣ୍ଣ ମିଶିଗଲେ ମଧ୍ୟ ସେଥିରୁ ସବୁବେଳେ ଅର୍ଥ ପ୍ରକାଶ ପାଏ ନାହିଁ । ଯେତେବେଳେ ବର୍ଣ୍ଣମାନଙ୍କର ମିଳନରୁ କୌଣସି ଅର୍ଥ ବାହାରେ ନାହିଁ, ସେତେବେଳେ ତାହା ଶବ୍ଦ ହୋଇପାରେ ନାହିଁ ।<br><br>👉 ଉଦାହରଣ: 'ଟଅ' ଓ 'ଶ0' ରେ ଦୁଇଟି ବର୍ଣ୍ଣର ମିଳନ ଘଟିଛି, କିନ୍ତୁ ସେଥିରୁ କୌଣସି ଅର୍ଥ ପ୍ରକାଶ ପାଉନାହିଁ । ସେହିପରି 'ରହଡ଼' ରେ ତିନୋଟି ବର୍ଣ୍ଣର ମିଳନ ଘଟିଥିଲେ ହେଁ, ଏଥିରୁ ମଧ୍ୟ କୌଣସି ଅର୍ଥ ପ୍ରକାଶିତ ହୁଏ ନାହିଁ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଟଅ ଓ ଶ0 ଏହି ଦୁଇଟି ମିଳନରେ କ'ଣ ଘଟିଛି ?<br><br><span style='color:green;'>Answer:</span> ଏଥିରେ ଦୁଇଟି ବର୍ଣ୍ଣର ମିଳନ ଘଟିଛି, କିନ୍ତୁ କୌଣସି ଅର୍ଥ ପ୍ରକାଶ ପାଇନାହିଁ ।",

"<span style='color:red;'>Q-2:</span> ରହଡ଼ ଶବ୍ଦରେ କେତୋଟି ବର୍ଣ୍ଣର ମିଳନ ଘଟିଛି ?<br><br><span style='color:green;'>Answer:</span> ରହଡ଼ ରେ ତିନୋଟି ବର୍ଣ୍ଣର ମିଳନ ଘଟିଛି ।",

"<span style='color:red;'>Q-3:</span> ବର୍ଣ୍ଣ ମିଳନରୁ କେବେ ଅର୍ଥ ପ୍ରକାଶ ପାଏ ନାହିଁ ?<br><br><span style='color:green;'>Answer:</span> ଯେତେବେଳେ ମିଳିତ ବର୍ଣ୍ଣମାନଙ୍କର କୌଣସି ଅର୍ଥ ନଥାଏ, ସେତେବେଳେ ଅର୍ଥ ପ୍ରକାଶ ପାଏ ନାହିଁ ।",

"<span style='color:red;'>Q-4:</span> ଅର୍ଥହୀନ ବର୍ଣ୍ଣ ମିଳନକୁ କ'ଣ କୁହାଯାଏ ନାହିଁ ?<br><br><span style='color:green;'>Answer:</span> ଅର୍ଥହୀନ ବର୍ଣ୍ଣ ମିଳନକୁ ଶବ୍ଦ କୁହାଯାଏ ନାହିଁ ।"

]
},

{
heading: "NOTE-2: ଏକ ବର୍ଣ୍ଣରେ ଗଠିତ ଅର୍ଥପୂର୍ଣ୍ଣ ଶବ୍ଦ :-",

audioPoints: [{
text:"👉 ଧାରଣା: କେତେକ ସ୍ଥଳେ ଗୋଟିଏ ମାତ୍ର ବର୍ଣ୍ଣ ମଧ୍ୟ ନିଜେ ଏକ ଅର୍ଥ ପ୍ରକାଶ କରିପାରେ । ଏହିପରି ବର୍ଣ୍ଣକୁ ମଧ୍ୟ ଶବ୍ଦ କୁହାଯାଇପାରେ ।<br><br>👉 ଉଦାହରଣ: 'ଅ' ର ଅର୍ଥ ବିଷ୍ଣୁ । 'କ' ର ଅର୍ଥ ମସ୍ତକ କିମ୍ବା ଜଳ । 'ଝ' ର ଅର୍ଥ ଆକାଶ । ଏହି ପ୍ରତ୍ୟେକ ଏକ ବର୍ଣ୍ଣ ନିଜେ ଏକ ଅର୍ଥ ପ୍ରକାଶ କରୁଛି, ତେଣୁ ଏମାନେ ଶବ୍ଦ ଅଟନ୍ତି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଅ ର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଅ ର ଅର୍ଥ ବିଷ୍ଣୁ ।",

"<span style='color:red;'>Q-2:</span> କ ର ଅର୍ଥ କ'ଣ କ'ଣ ହୋଇପାରେ ?<br><br><span style='color:green;'>Answer:</span> କ ର ଅର୍ଥ ମସ୍ତକ କିମ୍ବା ଜଳ ହୋଇପାରେ ।",

"<span style='color:red;'>Q-3:</span> ଝ ର ଅର୍ଥ କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଝ ର ଅର୍ଥ ଆକାଶ ।",

"<span style='color:red;'>Q-4:</span> ଗୋଟିଏ ବର୍ଣ୍ଣ କେବେ ଶବ୍ଦ ହୋଇଥାଏ ?<br><br><span style='color:green;'>Answer:</span> ଯେତେବେଳେ ଗୋଟିଏ ବର୍ଣ୍ଣ ନିଜେ କୌଣସି ଅର୍ଥ ପ୍ରକାଶ କରେ, ସେତେବେଳେ ତାହା ଶବ୍ଦ ହୋଇଥାଏ ।"

]
},

{
heading: "NOTE-3: ଏକାଧିକ ବର୍ଣ୍ଣ ମିଳନରେ ଗଠିତ ଅର୍ଥପୂର୍ଣ୍ଣ ଶବ୍ଦ :-",

audioPoints: [{
text:"👉 ଧାରଣା: କେତେକ ସ୍ଥଳେ ଏକାଧିକ ବର୍ଣ୍ଣ ମିଶି ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥ ପ୍ରକାଶ କରନ୍ତି । ଏହିପରି ବର୍ଣ୍ଣ ସମୂହକୁ ମଧ୍ୟ ଶବ୍ଦ କୁହାଯାଏ ।<br><br>👉 ଉଦାହରଣ: 'ଘର', 'ନଗର', 'ସରବତ' ଏବଂ 'ଅନବରତ' ଏହି ଶବ୍ଦଗୁଡ଼ିକରେ ଏକାଧିକ ବର୍ଣ୍ଣର ମିଳନ ଘଟିଛି, ଏବଂ ପ୍ରତ୍ୟେକ ଶବ୍ଦର ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥ ରହିଛି ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଘର ଓ ନଗର ଶବ୍ଦ କିପରି ଗଠିତ ହୋଇଛି ?<br><br><span style='color:green;'>Answer:</span> ଏକାଧିକ ବର୍ଣ୍ଣ ମିଶି ଘର ଓ ନଗର ଶବ୍ଦ ଗଠିତ ହୋଇଛି ।",

"<span style='color:red;'>Q-2:</span> ସରବତ ଓ ଅନବରତ ଶବ୍ଦରେ କ'ଣ ଘଟିଛି ?<br><br><span style='color:green;'>Answer:</span> ଏକାଧିକ ବର୍ଣ୍ଣର ମିଳନ ଘଟି ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅର୍ଥ ପ୍ରକାଶ ପାଇଛି ।",

"<span style='color:red;'>Q-3:</span> ଏକାଧିକ ବର୍ଣ୍ଣ ମିଳନରୁ କେଉଁ ପ୍ରକାର ଶବ୍ଦ ସୃଷ୍ଟି ହୁଏ ?<br><br><span style='color:green;'>Answer:</span> ଅର୍ଥପ୍ରକାଶକ ସାର୍ଥକ ଶବ୍ଦ ସୃଷ୍ଟି ହୁଏ ।",

"<span style='color:red;'>Q-4:</span> ଘର, ନଗର, ସରବତ, ଅନବରତ ଶବ୍ଦଗୁଡ଼ିକ କେଉଁ ଶ୍ରେଣୀରେ ପଡ଼ନ୍ତି ?<br><br><span style='color:green;'>Answer:</span> ଏକାଧିକ ବର୍ଣ୍ଣ ମିଳନରୁ ଗଠିତ ଶବ୍ଦ ଶ୍ରେଣୀରେ ପଡ଼ନ୍ତି ।"

]
},

{
heading: "NOTE-4: ଶବ୍ଦ ର ସଂଜ୍ଞା :-",

audioPoints: [{
text:"👉 ଧାରଣା: ଏକ ବର୍ଣ୍ଣ ବା ଏକାଧିକ ବର୍ଣ୍ଣ ମିଳିତ ହୋଇ କୌଣସି ଅର୍ଥ ପ୍ରକାଶ କରୁଥିଲେ, ତାହାକୁ 'ଶବ୍ଦ' କୁହାଯାଏ । ଅର୍ଥହୀନ ବର୍ଣ୍ଣ ମିଳନକୁ ଶବ୍ଦ କୁହାଯାଏ ନାହିଁ ।<br><br>👉 ଉଦାହରଣ: 'ଟଅ' ପରି ଅର୍ଥହୀନ ମିଳନ ଶବ୍ଦ ପଦବାଚ୍ୟ ନୁହେଁ, କିନ୍ତୁ 'ଘର' ପରି ଅର୍ଥପୂର୍ଣ୍ଣ ମିଳନ ଶବ୍ଦ ପଦବାଚ୍ୟ ଅଟେ ।",
audio:"audio-url-here"}],

questions:[

"<span style='color:red;'>Q-1:</span> ଶବ୍ଦ ର ସଂଜ୍ଞା କ'ଣ ?<br><br><span style='color:green;'>Answer:</span> ଏକ ବର୍ଣ୍ଣ ବା ଏକାଧିକ ବର୍ଣ୍ଣ ମିଳିତ ହୋଇ କୌଣସି ଅର୍ଥ ପ୍ରକାଶ କରୁଥିଲେ, ତାହାକୁ ଶବ୍ଦ କୁହାଯାଏ ।",

"<span style='color:red;'>Q-2:</span> ଶବ୍ଦ ଗଠନ ପାଇଁ କ'ଣ ଆବଶ୍ୟକ ?<br><br><span style='color:green;'>Answer:</span> ବର୍ଣ୍ଣ ବା ବର୍ଣ୍ଣସମୂହର ମିଳନରୁ ଅର୍ଥ ପ୍ରକାଶ ପାଇବା ଆବଶ୍ୟକ ।",

"<span style='color:red;'>Q-3:</span> କେଉଁ ପ୍ରକାର ବର୍ଣ୍ଣ ମିଳନ ଶବ୍ଦ ପଦବାଚ୍ୟ ନୁହେଁ ?<br><br><span style='color:green;'>Answer:</span> ଅର୍ଥ ପ୍ରକାଶ କରିପାରୁନଥିବା ବର୍ଣ୍ଣ ମିଳନ ଶବ୍ଦ ପଦବାଚ୍ୟ ନୁହେଁ ।",

"<span style='color:red;'>Q-4:</span> ପ୍ରଥମ ଅଧ୍ୟାୟରେ ମୁଖ୍ୟତଃ କେଉଁ ବିଷୟ ଆଲୋଚନା ହୋଇଛି ?<br><br><span style='color:green;'>Answer:</span> ବର୍ଣ୍ଣ ମିଳନ ଓ ଶବ୍ଦ ଗଠନ ବିଷୟରେ ଆଲୋଚନା ହୋଇଛି ।"

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
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-1:<br/>ବର୍ଣ୍ଣ ମିଳନ<br/>ଓ ଅର୍ଥ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଉଦାହରଣ\"]\nA --> I1[\"ଚଅ, ଶ0 ଦୁଇଟି<br/>ବର୍ଣ୍ଣର ମିଳନ।\"]\nA --> I2[\"ରହଡ଼ ତିନୋଟି<br/>ବର୍ଣ୍ଣର ମିଳନ।\"]\nA --> I3[\"ଏଥିରୁ କୌଣସି ଅର୍ଥ<br/>ପ୍ରକାଶ ପାଏନାହିଁ।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଏକକ ବର୍ଣ୍ଣର ଅର୍ଥ\"]\nM --> M1[\"ଅ, କ, ଖ<br/>ଗୋଟିଏ ଗୋଟିଏ ବର୍ଣ୍ଣ।\"]\nM --> M2[\"ଅ ର ଅର୍ଥ<br/>ବିଷ୍ଣୁ।\"]\nM --> M3[\"କ ର ଅର୍ଥ<br/>ମସ୍ତକ, ଜଳ।\"]\nM --> M4[\"ଖ ର ଅର୍ଥ<br/>ଆକାଶ।\"]\nM --> M5[\"ଗୋଟିଏ ବର୍ଣ୍ଣ ମଧ୍ୟ<br/>ଅର୍ଥ ପ୍ରକାଶ କରେ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ମନେରଖ\"]\nC --> C1[\"ଚଅ, ଶ0, ରହଡ଼<br/>ଅର୍ଥହୀନ ମିଳନ।\"]\nC --> C2[\"ଅ, କ, ଖ<br/>ପ୍ରତ୍ୟେକେ ଅର୍ଥପୂର୍ଣ୍ଣ।\"]\nC --> C3[\"ଅର୍ଥ ପ୍ରକାଶ କ୍ଷମତା<br/>ଉପରେ ଶବ୍ଦ ନିର୍ଭର କରେ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`,

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%\nflowchart TD\n\nTITLE[\"📖 GRAPH-2:<br/>ଶବ୍ଦର ସଂଜ୍ଞା<br/>ଓ ଉଦାହରଣ\"]\n\nTITLE --> INTRO\n\nsubgraph INTRO[ ]\ndirection LR\nA[\"🟡 ଏକାଧିକ ବର୍ଣ୍ଣ\"]\nA --> I1[\"ଘର, ନଗର ବର୍ଣ୍ଣ<br/>ସନ୍ନିଶ୍ରଣରେ ସୃଷ୍ଟି।\"]\nA --> I2[\"ସରବତ, ଅନବରତ<br/>ମଧ୍ୟ ଏହିପରି ଗଠିତ।\"]\nA --> I3[\"ପ୍ରତ୍ୟେକର ନିଜସ୍ୱ<br/>ଅର୍ଥ ରହିଛି।\"]\nend\n\nINTRO --> MAIN\n\nsubgraph MAIN[ ]\ndirection LR\nM[\"🟢 ଶବ୍ଦର ସଂଜ୍ଞା\"]\nM --> M1[\"ଏକ ବର୍ଣ୍ଣ ମିଳିତ ହୋଇ<br/>ଅର୍ଥ ପ୍ରକାଶ କରେ।\"]\nM --> M2[\"ଏକାଧିକ ବର୍ଣ୍ଣ ମିଳିତ ହୋଇ<br/>ଅର୍ଥ ପ୍ରକାଶ କରେ।\"]\nM --> M3[\"ଏହି ଅର୍ଥ ପ୍ରକାଶକ<br/>ମିଳନକୁ ଶବ୍ଦ କୁହାଯାଏ।\"]\nM --> M4[\"ପ୍ରଥମ ଧାଡ଼ିର ବର୍ଣ୍ଣ<br/>ଶବ୍ଦ ପଦବାଚ୍ୟ ନୁହେଁ।\"]\nM --> M5[\"ଦ୍ୱିତୀୟ ଧାଡ଼ିର ବର୍ଣ୍ଣ<br/>ଶବ୍ଦ ପଦବାଚ୍ୟ।\"]\nend\n\nMAIN --> CONCLUSION\n\nsubgraph CONCLUSION[ ]\ndirection LR\nC[\"🔵 ସାରାଂଶ\"]\nC --> C1[\"ଅର୍ଥହୀନ ମିଳନ<br/>ଶବ୍ଦ ନୁହେଁ।\"]\nC --> C2[\"ଅର୍ଥପୂର୍ଣ୍ଣ ମିଳନ<br/>ହିଁ ଶବ୍ଦ।\"]\nC --> C3[\"ଘର, ନଗର, ସରବତ, ଅନବରତ<br/>ଶବ୍ଦର ଉଦାହରଣ।\"]\nend\n\nlinkStyle 0 stroke-width:0px;\nlinkStyle 4 stroke-width:0px;\nlinkStyle 10 stroke-width:0px;\n\nclassDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;\nclassDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;\nclassDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;\nclassDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;\n\nclass TITLE title;\nclass A,I1,I2,I3 intro;\nclass M,M1,M2,M3,M4,M5 body;\nclass C,C1,C2,C3 conclusion;`
  ]
      
}  
]
};  
