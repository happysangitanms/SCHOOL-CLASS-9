const PDF_URL = MEDIA_CONFIG.pdf;
// Global variable to store animation frame ID
window.alphabetAnimationFrame = null;
// Add this at the VERY START of your script section
document.body.classList.add('loading');
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 100);
});

function openCertificateFromExam() {
    calculateCertificateScores();

    // Auto-fill student name from login session
    document.getElementById('studentName').value = sessionData.studentName || sessionData.rollNumber || 'ଛାତ୍ର/ଛାତ୍ରୀ';

    // Store roll number directly since there's no form field for it
    certificateData.rollNumber = sessionData.rollNumber || 'N/A';

    document.getElementById('certificateModal').classList.add('active');

    // Directly generate the certificate — no form, no button click needed
    generateCertificate();
}

// =============================================
// FIREBASE CONFIGURATION - e-Vidya Academy
// =============================================
const firebaseConfig = {
    apiKey: "AIzaSyA3-rvQJ1g9K-1l8-_PXX8IffG8W4qU7AE",
    authDomain: "evidya-academy.firebaseapp.com",
    projectId: "evidya-academy",
    storageBucket: "evidya-academy.firebasestorage.app",
    messagingSenderId: "86172698431",
    appId: "1:86172698431:web:eb3bd5b2887cda88eb358a"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const FALLBACK_AUDIO_URL = "https://raw.githubusercontent.com/happysangitanms/assets/main/fallback%20audio.m4a";


function getDeviceId() {
    let deviceId = localStorage.getItem('deviceId_evidya');
    if (!deviceId) {
        deviceId = 'DEV_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId_evidya', deviceId);
    }
    return deviceId;
}

let sessionData = {
    rollNumber: null,
    deviceId: getDeviceId(),
    className: CLASS_NAME,
    loginTime: null
};

document.getElementById('loginBtn').addEventListener('click', async function() {
    const rollNumber = document.getElementById('rollNumberInput').value.trim();
    const consent = document.getElementById('consentCheck').checked;
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = '';

    if (!rollNumber) {
        errorDiv.textContent = 'ଦୟାକରି ରୋଲ୍ ନମ୍ବର ଲେଖନ୍ତୁ ।';
        return;
    }
    if (!consent) {
        errorDiv.textContent = 'ଦୟାକରି ସର୍ତ୍ତାବଳୀରେ ସହମତି ଜଣାଇବା ପାଇଁ ଛୋଟ ଚେକ୍-ବାକ୍ସ ରେ କ୍ଲିକ୍ କରନ୍ତୁ ।';
        return;
    }

    this.disabled = true;
    this.innerHTML = '⏳ ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ...';

    try {
        const docRef = db.collection('students').doc(rollNumber);
        const doc = await docRef.get();

        if (!doc.exists) {
            errorDiv.textContent = 'ରୋଲ୍ ନମ୍ବର ମିଳିଲା ନାହିଁ । ଦୟାକରି ସଠିକ୍ ରୋଲ୍ ନମ୍ବର ଲେଖନ୍ତୁ ।';
            this.disabled = false;
            this.innerHTML = 'ଉପରୋକ୍ତ ଛୋଟ ବାକ୍ସରେ କ୍ଲିକ୍ କରିସାରିବା ପରେ ଏଠାରେ କ୍ଲିକ୍ କରି କ୍ଲାସ୍-ରୁମ୍ ରେ ପ୍ରବେଶ କରନ୍ତୁ ।';
            return;
        }

        const data = doc.data();

        if (data.className !== CLASS_NAME) {
            errorDiv.textContent = 'ଏହି ରୋଲ୍ ନମ୍ବର ଏହି କ୍ଲାସ୍ ପାଇଁ ନୁହେଁ ।';
            this.disabled = false;
            this.innerHTML = 'ଉପରୋକ୍ତ ଛୋଟ ବାକ୍ସରେ କ୍ଲିକ୍ କରିସାରିବା ପରେ ଏଠାରେ କ୍ଲିକ୍ କରି କ୍ଲାସ୍-ରୁମ୍ ରେ ପ୍ରବେଶ କରନ୍ତୁ ।';
            return;
        }

        if (data.status === 'BLOCKED') {
            errorDiv.textContent = 'ଆପଣଙ୍କ ଆକ୍ସେସ୍ ବ୍ଲକ୍ ହୋଇଛି । ଶିକ୍ଷକଙ୍କ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ ।';
            this.disabled = false;
            this.innerHTML = 'ଉପରୋକ୍ତ ଛୋଟ ବାକ୍ସରେ କ୍ଲିକ୍ କରିସାରିବା ପରେ ଏଠାରେ କ୍ଲିକ୍ କରି କ୍ଲାସ୍-ରୁମ୍ ରେ ପ୍ରବେଶ କରନ୍ତୁ ।';
            return;
        }

        const currentDevice = sessionData.deviceId;
        if (data.deviceId && data.deviceId !== '' && data.deviceId !== currentDevice) {
            errorDiv.textContent = 'ଏହି ରୋଲ୍ ନମ୍ବର ଅନ୍ୟ ଡିଭାଇସ୍ ରେ ବ୍ୟବହୃତ ହୋଇଛି । ଆପଣ ଏହାକୁ ଏଠାରୁ ଖୋଲି ପାରିବେ ନାହିଁ ।';
            this.disabled = false;
            this.innerHTML = 'ଉପରୋକ୍ତ ଛୋଟ ବାକ୍ସରେ କ୍ଲିକ୍ କରିସାରିବା ପରେ ଏଠାରେ କ୍ଲିକ୍ କରି କ୍ଲାସ୍-ରୁମ୍ ରେ ପ୍ରବେଶ କରନ୍ତୁ ।';
            return;
        }

        // SUCCESS - show welcome message
        const studentName = data.name || rollNumber;
      sessionData.studentName = studentName;
localStorage.removeItem('savedScores'); // clear any stale scores from previous sessions
        const welcomeOverlay = document.createElement('div');
        welcomeOverlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;align-items:center;justify-content:center;z-index:99999;flex-direction:column;text-align:center;padding:20px;';
        welcomeOverlay.innerHTML = '<div style="color:white;font-size:28px;margin-bottom:15px;">🌹</div>'
            + '<div style="color:white;font-size:22px;font-weight:bold;">ଆପଣଙ୍କୁ ସ୍ୱାଗତ, ' + studentName + '!</div>'
        + '<div style="color:rgba(255,255,255,0.85);font-size:16px;margin-top:12px;">ଆପଣ ' + APP_CONFIG.sreni + ' କ୍ଲାସ୍-ରୁମ୍ ରେ ପ୍ରବେଶ କରିଛନ୍ତି ।</div>'
            + '<div style="color:rgba(255,255,255,0.7);font-size:13px;margin-top:8px;">(ଏବେ ଆପଣଙ୍କ ପାଠ ସାମଗ୍ରୀ ଲୋଡ୍ ହେଉଛି)</div>';
        document.body.appendChild(welcomeOverlay);

        const updateData = {
            lastActivity: new Date().toISOString(),
            totalSessions: firebase.firestore.FieldValue.increment(1)
        };
        if (!data.deviceId || data.deviceId === '') {
            updateData.deviceId = currentDevice;
            updateData.firstLogin = new Date().toISOString();
        }
        docRef.update(updateData).catch(e => console.log('Update error:', e));

        sessionData.rollNumber = rollNumber;
        sessionData.loginTime = new Date();
        docRef.update({ lastLogin: new Date().toISOString() }).catch(e => console.log(e));

        setTimeout(() => {
            welcomeOverlay.remove();
            document.getElementById('loginScreen').style.display = 'none';
            document.querySelector('.container').classList.add('authenticated');
            loadSentence(0);
            startActivityTracking();
        }, 2400);

    } catch (error) {
        errorDiv.textContent = 'ସଂଯୋଗ ସମସ୍ୟା । ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ ।';
        console.error('Login error:', error);
        this.disabled = false;
        this.innerHTML = 'ଉପରୋକ୍ତ ଛୋଟ ବାକ୍ସରେ କ୍ଲିକ୍ କରିସାରିବା ପରେ ଏଠାରେ କ୍ଲିକ୍ କରି କ୍ଲାସ୍-ରୁମ୍ ରେ ପ୍ରବେଶ କରନ୍ତୁ ।';
    }
});

function startActivityTracking() {
    ['click', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, () => { sessionData.lastActivity = new Date(); });
    });
    setInterval(() => {
        if (sessionData.rollNumber) {
            db.collection('students').doc(sessionData.rollNumber).update({
                lastActivity: new Date().toISOString()
            }).catch(e => console.log('Heartbeat error:', e));
        }
    }, 120000);
window.addEventListener('beforeunload', () => {
    if (sessionData.rollNumber && sessionData.loginTime) {
        const duration = Math.floor((new Date() - sessionData.loginTime) / 1000);
        const logoutTime = new Date().toISOString();
        // Use sendBeacon for reliable logout tracking
        const data = JSON.stringify({
            rollNumber: sessionData.rollNumber,
            duration: duration,
            logoutTime: logoutTime
        });
        db.collection('students').doc(sessionData.rollNumber).update({
            totalDuration: firebase.firestore.FieldValue.increment(duration),
            lastActivity: logoutTime,
            lastLogout: logoutTime
        }).catch(e => console.log('Logout error:', e));
    }
});

// Also save logout when page becomes hidden (mobile browsers)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && sessionData.rollNumber && sessionData.loginTime) {
        const duration = Math.floor((new Date() - sessionData.loginTime) / 1000);
        const logoutTime = new Date().toISOString();
        db.collection('students').doc(sessionData.rollNumber).update({
            totalDuration: firebase.firestore.FieldValue.increment(duration),
            lastActivity: logoutTime,
            lastLogout: logoutTime
        }).catch(e => console.log('Visibility logout error:', e));
    }
});
    }


let currentSentence = 0;
let scores = { mcq: 0, tf: 0, fib: 0, matching: 0, arrange: 0 };


// ==========================================
// SEQUENTIAL AUDIO PLAYBACK SYSTEM
// ==========================================

let sequentialAudioState = {
    isPlaying: false,
    currentPointIndex: 0,
    totalPoints: 0,
    audioQueue: [],
    currentTopicAudio: null
};

function startSequentialAudio(topic) {
    stopAudioCompletely();
    
    sequentialAudioState = {
        isPlaying: true,
        currentPointIndex: 0,
        totalPoints: topic.audioPoints.length,
        audioQueue: topic.audioPoints,
        currentTopicAudio: null
    };
    
    const explanationDiv = document.getElementById('topicExplanation');
    if (!explanationDiv) return;
    
    explanationDiv.className = 'answer-section';
    explanationDiv.innerHTML = '';
    
    playNextPoint();
}

function playNextPoint() {
    const { currentPointIndex, audioQueue, totalPoints } = sequentialAudioState;
    
    if (currentPointIndex >= totalPoints) {
        sequentialAudioState.isPlaying = false;
        updateAudioButtonState('stopped');
        return;
    }
    
    const point = audioQueue[currentPointIndex];
    const explanationDiv = document.getElementById('topicExplanation');
    
    if (!point || !explanationDiv) {
        console.error('Missing point or explanation div');
        sequentialAudioState.isPlaying = false;
        updateAudioButtonState('stopped');
        return;
    }
    
    // ✅ VALIDATE POINT DATA FIRST
    if (!point.text || typeof point.text !== 'string' || point.text.trim() === '') {
        console.error('Invalid point text:', point);
        sequentialAudioState.currentPointIndex++;
        setTimeout(playNextPoint, 100);
        return;
    }
    
    updateAudioButtonState('playing', currentPointIndex + 1, totalPoints);
    
    // ✅ Use fallback if URL is invalid
    let audioUrl = point.audio;
    const isAlreadyFallback = (audioUrl === FALLBACK_AUDIO_URL);
    
    if (!isValidAudioUrl(audioUrl)) {
        console.warn('Invalid audio URL, using fallback');
        audioUrl = FALLBACK_AUDIO_URL;
    }
    
    // ✅ STOP AND CLEANUP any existing audio FIRST
    if (sequentialAudioState.currentTopicAudio) {
        sequentialAudioState.currentTopicAudio.pause();
        sequentialAudioState.currentTopicAudio.currentTime = 0;
        sequentialAudioState.currentTopicAudio.src = '';
        sequentialAudioState.currentTopicAudio = null;
    }
    
    const audio = new Audio();
    sequentialAudioState.currentTopicAudio = audio;
    
    let hasTriedFallback = false;
    let hasMovedToNext = false;
    let isHandwritingComplete = false;
    let isAudioComplete = false;
    let audioStartedPlaying = false; // ✅ NEW: Track if audio actually started
    
    // ✅ FIXED: Function to check if we can move to next point
    function checkIfReadyForNext() {
        // ⚠️ KEY FIX: Only proceed if audio actually started playing OR handwriting is done
        // This prevents premature progression when audio fails to load
        const canProceed = isHandwritingComplete && (isAudioComplete || !audioStartedPlaying);
        
        if (canProceed && !hasMovedToNext) {
            hasMovedToNext = true;
            sequentialAudioState.currentPointIndex++;
            setTimeout(playNextPoint, 300);
        }
    }
    
    // ✅ Start handwriting with completion callback
    try {
        appendPointToExplanation(point.text, () => {
            isHandwritingComplete = true;
            checkIfReadyForNext();
        });
    } catch (error) {
        console.error('Error in handwriting animation:', error);
        isHandwritingComplete = true;
        checkIfReadyForNext();
    }
    
    // ✅ FIXED: Error handler - wait for audio to actually play before giving up
    const handleSequentialError = () => {
        if (hasMovedToNext) return;
        
        console.error('Sequential audio load error:', audioUrl);
        
        if (!hasTriedFallback && !isAlreadyFallback && audioUrl !== FALLBACK_AUDIO_URL) {
            hasTriedFallback = true;
            console.log('Trying fallback for sequential audio...');
            
            audio.pause();
            audio.src = '';
            
            audio.src = FALLBACK_AUDIO_URL;
            audio.play().then(() => {
                audioStartedPlaying = true; // ✅ Mark as started
            }).catch(err => {
                console.error('Fallback sequential audio failed:', err);
                // ✅ FIXED: Don't immediately move to next - let handwriting finish
                if (!hasMovedToNext) {
                    console.warn('Audio failed, will wait for handwriting to complete');
                    isAudioComplete = true;
                    // Only move forward if handwriting is already done
                    if (isHandwritingComplete) {
                        checkIfReadyForNext();
                    }
                }
            });
        } else {
            // Already tried fallback or this IS fallback - wait for handwriting
            if (!hasMovedToNext) {
                console.error('Audio completely failed, waiting for handwriting');
                isAudioComplete = true;
                // Only move forward if handwriting is already done
                if (isHandwritingComplete) {
                    checkIfReadyForNext();
                }
            }
        }
    };
    
    // Audio ended handler
    function handleAudioEnded() {
        if (!hasMovedToNext) {
            isAudioComplete = true;
            checkIfReadyForNext();
        }
    }
    
    // ✅ NEW: Track when audio actually starts playing
    function handleAudioPlay() {
        audioStartedPlaying = true;
        console.log('Audio started playing successfully');
    }
    
    audio.removeEventListener('error', handleSequentialError);
    audio.removeEventListener('ended', handleAudioEnded);
    audio.removeEventListener('play', handleAudioPlay);
    
    audio.addEventListener('error', handleSequentialError, { once: true });
    audio.addEventListener('ended', handleAudioEnded, { once: true });
    audio.addEventListener('play', handleAudioPlay, { once: true });
    
    audio.src = audioUrl;
    audio.play().then(() => {
        audioStartedPlaying = true;
    }).catch(err => {
        console.error('Sequential audio play failed:', err);
        handleSequentialError();
    });
}
    
function appendPointToExplanation(pointText, onComplete) {
    // ✅ ADD VALIDATION
    if (!pointText || typeof pointText !== 'string' || pointText.trim() === '') {
        console.error('Invalid text provided to appendPointToExplanation:', pointText);
        if (onComplete) onComplete(); // ✅ Call completion even on error
        return;
    }
    
    // ✅ CLEAR ANY EXISTING TIMEOUT TO PREVENT OVERLAPPING ANIMATIONS
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
    
    const explanationDiv = document.getElementById('topicExplanation');
    if (!explanationDiv) {
        if (onComplete) onComplete();
        return;
    }
    
    // Check if this is the first point
    const isFirstPoint = explanationDiv.children.length === 0 || !explanationDiv.querySelector('.typing-text');
    
    if (isFirstPoint) {
        // First point - setup blackboard with hand
        explanationDiv.innerHTML = `
            <div class="typing-text"></div>
            <div class="writing-hand writing">✍️</div>
            <div class="chalk-piece"></div>
        `;
    } else {
        // Re-add hand and chalk for new point
        const existingHand = explanationDiv.querySelector('.writing-hand');
        const existingChalk = explanationDiv.querySelector('.chalk-piece');
        
        if (existingHand) existingHand.remove();
        if (existingChalk) existingChalk.remove();
        
        const hand = document.createElement('div');
        hand.className = 'writing-hand writing';
        hand.textContent = '✍️';
        
        const chalk = document.createElement('div');
        chalk.className = 'chalk-piece';
        
        explanationDiv.appendChild(hand);
        explanationDiv.appendChild(chalk);
    }
    
    const typingDiv = explanationDiv.querySelector('.typing-text');
    if (!typingDiv) {
        if (onComplete) onComplete();
        return;
    }
    
    // Add line break if not first point
    if (!isFirstPoint) {
        typingDiv.appendChild(document.createElement('br'));
    }
    
    const hand = explanationDiv.querySelector('.writing-hand');
    const chalk = explanationDiv.querySelector('.chalk-piece');
    
    // Type the text character by character
    let charIndex = 0;
    
    function createChalkDust(x, y) {
        const dust = document.createElement('div');
        dust.className = 'chalk-dust';
        dust.style.left = x + 'px';
        dust.style.top = y + 'px';
        explanationDiv.appendChild(dust);
        setTimeout(() => dust.remove(), 600);
    }
    
    function moveHandToCursor() {
        if (!hand || !chalk || !typingDiv) return;
        
        const sectionRect = explanationDiv.getBoundingClientRect();
        const range = document.createRange();
        
        const walker = document.createTreeWalker(
            typingDiv,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let lastTextNode = null;
        let node;
        while (node = walker.nextNode()) {
            lastTextNode = node;
        }
        
        if (lastTextNode && lastTextNode.length > 0) {
            try {
                range.setStart(lastTextNode, lastTextNode.length);
                range.setEnd(lastTextNode, lastTextNode.length);
            } catch(e) {
                range.selectNodeContents(typingDiv);
                range.collapse(false);
            }
        } else {
            range.selectNodeContents(typingDiv);
            range.collapse(false);
        }
        
        const rangeRect = range.getBoundingClientRect();
        const targetX = rangeRect.left - sectionRect.left;
        const targetY = rangeRect.top - sectionRect.top;
        
        hand.style.left = (targetX - 25) + 'px';
        hand.style.top = (targetY - 35) + 'px';
        chalk.style.left = (targetX - 3) + 'px';
        chalk.style.top = (targetY - 5) + 'px';
    }
    
   function typeNextChar() {
    // ✅ SAFETY CHECK: Stop if animation was cancelled
    if (!hand || !chalk || !typingDiv) {
        typingTimeout = null;
        if (onComplete) onComplete();
        return;
    }
    
    if (charIndex < pointText.length) {
        // ✅ CHECK FOR <br> TAG FIRST
        if (pointText.substr(charIndex, 4) === '<br>') {
            typingDiv.appendChild(document.createElement('br'));
            charIndex += 4;
            
            requestAnimationFrame(() => {
                moveHandToCursor();
            });
            
            typingTimeout = setTimeout(typeNextChar, 100);
            return;
        }
        
        // ✅ CHECK FOR OTHER HTML TAGS (skip them)
        if (pointText.charAt(charIndex) === '<') {
            const tagEnd = pointText.indexOf('>', charIndex);
            if (tagEnd !== -1) {
                // Skip the entire tag
                charIndex = tagEnd + 1;
                typingTimeout = setTimeout(typeNextChar, 0);
                return;
            }
        }
        
        // Type regular characters
        const chars = Array.from(pointText);
        const actualIndex = Array.from(pointText.substring(0, charIndex)).length;
        
        if (actualIndex < chars.length) {
            const char = chars[actualIndex];
            const textNode = document.createTextNode(char);
            typingDiv.appendChild(textNode);
            
            charIndex += char.length;
            
            requestAnimationFrame(() => {
                moveHandToCursor();
                if (char.trim() !== '' && Math.random() > 0.7) {
                    const sectionRect = explanationDiv.getBoundingClientRect();
                    const handRect = hand.getBoundingClientRect();
                    createChalkDust(
                        handRect.left - sectionRect.left + 20,
                        handRect.top - sectionRect.top + 35
                    );
                }
            });
            
            let speed;
            if (char === '.') speed = 40;
            else if (char === ',') speed = 40;
            else if (char === ' ') speed = 40;
            else speed = 40;
            
            typingTimeout = setTimeout(typeNextChar, speed);
        } else {
            finishWritingPoint();
        }
    } else {
        finishWritingPoint();
    }
}
    
    function finishWritingPoint() {
        if (hand) {
            hand.classList.remove('writing');
            hand.style.transition = 'all 0.2s ease-out';
            hand.style.transform = 'translateY(15px) scale(0.9)';
            hand.style.opacity = '0';
        }
        if (chalk) {
            chalk.style.transition = 'all 0.2s ease-out';
            chalk.style.opacity = '0';
        }
        
        setTimeout(() => {
            if (hand && hand.parentNode) hand.remove();
            if (chalk && chalk.parentNode) chalk.remove();
        }, 200);
        
        typingTimeout = null;
        
        // Scroll into view
        if (typingDiv) {
            typingDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        // ✅ CALL COMPLETION CALLBACK
        if (onComplete) onComplete();
    }
    
    // ✅ START IMMEDIATELY
    moveHandToCursor();
    setTimeout(typeNextChar, 50);
}
   
function updateAudioButtonState(state, currentPoint = 0, totalPoints = 0) {
    const counterWrapper = document.querySelector('.topic-counter-wrapper');
    if (!counterWrapper) return;
    
    const audioBtn = counterWrapper.querySelector('.audio-control-btn');
    if (!audioBtn) return;
    
    switch(state) {
        case 'playing':
            audioBtn.textContent = `${currentPoint}/${totalPoints}`;
            audioBtn.classList.add('playing');
            audioBtn.classList.remove('paused', 'error');
            audioBtn.style.fontSize = '14px';
            break;
        case 'stopped':
            audioBtn.textContent = '🔊';
            audioBtn.classList.remove('playing', 'paused', 'error');
            audioBtn.style.fontSize = '18px';
            break;
        case 'error':
            audioBtn.textContent = '❌';
            audioBtn.classList.add('error');
            audioBtn.classList.remove('playing', 'paused');
            break;
    }
}

function stopSequentialAudio() {
    if (sequentialAudioState.currentTopicAudio) {
        sequentialAudioState.currentTopicAudio.pause();
        sequentialAudioState.currentTopicAudio.currentTime = 0;
        sequentialAudioState.currentTopicAudio = null;
    }
    sequentialAudioState.isPlaying = false;
    updateAudioButtonState('stopped');
}


    
// ==========================================
// SIMPLE AUDIO SYSTEM - COMPLETE REWRITE
// ==========================================

let currentAudio = null;
let currentAudioButton = null;

// Create audio button HTML
function createAudioButton(audioUrl, containerId = null) {
    if (!audioUrl || audioUrl.includes('example.com') || audioUrl.includes('YOUR_')) {
        return '';
    }
    
    const buttonId = containerId ? `audio-btn-${containerId}` : `audio-btn-${Date.now()}`;
    const buttonHtml = `<button class="audio-control-btn" id="${buttonId}" data-audio="${audioUrl}" data-initialized="false">
        🔊
    </button>`;
    
    // Attach event listener after button is added to DOM
    setTimeout(() => {
        const btn = document.getElementById(buttonId);
        if (btn && btn.dataset.initialized === 'false') {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                handleAudioClick(buttonId, audioUrl);
            });
            btn.dataset.initialized = 'true';
        }
    }, 100);
     
    return buttonHtml;
}

// Handle audio button click
function handleAudioClick(buttonId, audioUrl) {
    const button = document.getElementById(buttonId);
    
    if (!button || !audioUrl) return;
    
    // Add click animation
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = '';
    }, 100);
    
  // If clicking same button and audio is playing
    if (currentAudio && currentAudioButton === buttonId) {
        if (!currentAudio.paused) {
            // Stop the audio but DON'T hide button
            resetButtonToNormal(button);
            return;
        }
    }
    
    // Stop any existing audio first
    stopAudioCompletely();
    
    // Start new audio
    playAudio(buttonId, audioUrl, button);
}
    
// NEW FUNCTION: Reset button without hiding
function resetButtonToNormal(button) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.src = '';
        currentAudio.load();
        currentAudio = null;
    }
    
    if (button) {
        button.textContent = '🔊';
        button.classList.remove('playing', 'paused', 'error');
        button.style.display = 'inline-flex';
        button.style.opacity = '1';
        button.disabled = false;
        button.title = 'ଶୁଣନ୍ତୁ (Listen)';
    }
    
    currentAudioButton = null;
}

    
// Play audio with fallback
function playAudio(buttonId, audioUrl, button) {
    // Track if we've already tried fallback to prevent infinite loop
    const isAlreadyFallback = (audioUrl === FALLBACK_AUDIO_URL);
    
    // Validate URL first
    if (!isValidAudioUrl(audioUrl)) {
        console.warn('Invalid audio URL, trying fallback');
        if (!isAlreadyFallback) {
            audioUrl = FALLBACK_AUDIO_URL;
        } else {
            // Even fallback URL is invalid, just reset button
            resetButtonToNormal(button);
            return;
        }
    }
    
    try {
        currentAudio = new Audio();
        currentAudioButton = buttonId;
        
        // Update button to pause icon
        button.textContent = '⏸️';
        button.classList.add('playing');
        button.classList.remove('paused', 'error');
        button.style.display = '';
        button.disabled = false;
        
        // Error handler with fallback logic (ONE TIME ONLY)
        const handleAudioError = () => {
            console.error('Audio load error for:', audioUrl);
            
            // Only try fallback ONCE
            if (!isAlreadyFallback && audioUrl !== FALLBACK_AUDIO_URL) {
                console.log('Trying fallback audio...');
                
                // Clean up old audio
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.src = '';
                    currentAudio.load();
                }
                
                // Retry with fallback (recursive call with fallback URL)
                playAudio(buttonId, FALLBACK_AUDIO_URL, button);
            } else {
                // We already tried fallback or this IS the fallback - give up
                console.error('Fallback audio also failed');
                resetButtonToNormal(button);
            }
        };
        
        // Set source
        currentAudio.src = audioUrl;
        
        // When audio ends naturally
        currentAudio.addEventListener('ended', () => {
            resetButtonToNormal(button);
        }, { once: true }); // ← IMPORTANT: Fire only once
        
        // If audio fails to load, try fallback
        currentAudio.addEventListener('error', handleAudioError, { once: true }); // ← IMPORTANT: Fire only once
        
        // Play audio
        const playPromise = currentAudio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Audio playing successfully');
            }).catch(error => {
                console.error('Play failed:', error);
                handleAudioError();
            });
        }
        
    } catch (error) {
        console.error('Audio creation error:', error);
        // Try fallback as last resort (but only once)
        if (!isAlreadyFallback && audioUrl !== FALLBACK_AUDIO_URL) {
            playAudio(buttonId, FALLBACK_AUDIO_URL, button);
        } else {
            resetButtonToNormal(button);
        }
    }
}

function stopAudioCompletely() {
    if (currentAudioButton) {
        const button = document.getElementById(currentAudioButton);
        if (button) {
            resetButtonToNormal(button);
        }
    } else if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.src = '';
        currentAudio.load();
        currentAudio = null;
    }
}
    
function handleAudioError(button) {
    // DON'T call stopAudioCompletely - just reset the button
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.src = '';
        currentAudio.load();
        currentAudio = null;
    }
    
    if (button) {
        // Just reset to normal instead of showing error
        button.textContent = '🔊';
        button.classList.remove('playing', 'paused', 'error');
        button.style.display = 'inline-flex';
        button.style.opacity = '1';
        button.disabled = false;
        button.title = 'ଶୁଣନ୍ତୁ (Listen)';
    }
    
    currentAudioButton = null;
}

// Validate audio URL
function isValidAudioUrl(url) {
    if (!url) return false;
    if (url.includes('example.com')) return false;
    if (url.includes('YOUR_USERNAME')) return false;
    if (url.includes('YOUR_REPO')) return false;
    if (!url.startsWith('http')) return false;
    return true;
}

    
let maxScores = { mcq: 0, tf: 0, fib: 0, matching: 0, arrange: 0 };
let completedTests = { mcq: false, tf: false, fib: false, matching: false, arrange: false, stq: false };
let currentActiveTest = null;

const sentenceText = document.getElementById('sentenceText');
const testContainer = document.getElementById('testContainer');
const progressFill = document.getElementById('progressFill');
const scoreDisplay = document.getElementById('scoreDisplay');
const totalScoreEl = document.getElementById('totalScore');
const maxScoreEl = document.getElementById('maxScore');

const mcqBtn = document.getElementById('mcqBtn');
const tfBtn = document.getElementById('tfBtn');
const fibBtn = document.getElementById('fibBtn');
const matchBtn = document.getElementById('matchBtn');
const arrangeBtn = document.getElementById('arrangeBtn');
const stqBtn = document.getElementById('stqBtn');

const examSectionBtn = document.getElementById('examSectionBtn');
const examButtonsContainer = document.getElementById('examButtonsContainer');

examSectionBtn.addEventListener('click', function() {
    const assistantContainer = document.getElementById('examAssistantContainer');
    
    if (examButtonsContainer.style.display === 'none') {
        examButtonsContainer.style.display = 'block';
        
        // Show assistant image
        if (assistantContainer) {
            assistantContainer.classList.add('active');
        }
        
        this.textContent = '✖️ ପରୀକ୍ଷା ବିଭାଗ ବନ୍ଦ କରିବା';
        this.style.background = 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)';
    } else {
        examButtonsContainer.style.display = 'none';
        
        // Hide assistant image
        if (assistantContainer) {
            assistantContainer.classList.remove('active');
        }
        
        this.innerHTML = 'ପରୀକ୍ଷା ଦେବା..';
        this.style.background = 'linear-gradient(135deg, #0d5e3a 0%, #064d2f 100%)';
        
        if (currentActiveTest) {
            testContainer.innerHTML = '';
            currentActiveTest = null;
            cleanupAudio();
        }
    }
});

const showLessonBtn = document.getElementById('showLessonBtn');

showLessonBtn.addEventListener('click', function() {
    if (sentenceText.style.display === 'block') {
        closeLessonPanel();
    } else {
        sentenceText.style.display = 'block';
        sentenceText.classList.add('active');
        this.innerHTML = '✖️ ଏଠାରେ ବନ୍ଦ କରନ୍ତୁ..';
        this.style.background = 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)';
        setTimeout(() => {
            sentenceText.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
});

document.getElementById('mermaidBtn').addEventListener('click', function() {
    openMermaidModal();
});

function loadMermaidDiagram() {
    const sentence = courseData.sentences[currentSentence];
    const container = document.getElementById('mermaidContainer');
    
    if (sentence.mermaid) {
        const diagramId = `mermaid-diagram-${currentSentence}`;
        
        // Show loading indicator immediately
        container.innerHTML = `
            <h3>📊 ଏହି ଚିତ୍ର ମାଧ୍ୟମରେ ମନେରଖିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ : </h3>
            <div style="text-align: center; padding: 40px;">
                <div style="display: inline-block; width: 50px; height: 50px; border: 5px solid #f3f3f3; border-top: 5px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                <p style="margin-top: 20px; color: #667eea; font-weight: 600;">ଚିତ୍ର ଲୋଡ୍ ହେଉଛି...</p>
            </div>
        `;
        
        // Render diagram after brief delay (allows UI to update)
        setTimeout(() => {
            container.innerHTML = `
                <h3>📊 ଏହି ଚିତ୍ର ମାଧ୍ୟମରେ ମନେରଖିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ : </h3>
                <div id="${diagramId}" class="mermaid">
                    ${sentence.mermaid}
                </div>
            `;
            
            mermaid.run({
                nodes: document.querySelectorAll(`#${diagramId}`)
            });
        }, 100);
    } else {
        container.innerHTML = '<h3>No diagram available for this sentence</h3>';
    }
}
  
function loadSentence(index) {
    // Cleanup and reset
    cleanupAudio();
    testContainer.innerHTML = '';
    currentActiveTest = null;
    scores = { mcq: 0, tf: 0, fib: 0, matching: 0, arrange: 0 };
    
    // Display content
    const sentence = courseData.sentences[index];
    
    // Build lesson content WITH sticky close bar
    sentenceText.innerHTML = `
        <!-- Sticky Close Bar -->
        <div style="
            position: sticky;
            top: 0;
            z-index: 999;
            background: linear-gradient(135deg, #14b8a6 0%, #0f766e 100%);
            padding: 10px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);">
            <span style="color:white; font-size:13px; font-weight:bold;">
                📖 ପାଠ୍ୟ ପଢୁଛନ୍ତି...
            </span>
            <button onclick="closeLessonPanel()" style="
                background: rgba(255,255,255,0.2);
                border: 2px solid white;
                color: white;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                font-size: 18px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;">✕</button>
        </div>
        <!-- Actual Lesson Content -->
        <div style="flex: 1;">${sentence.text}</div>
    `;
    
    // Reset lesson button and hide lesson panel
    sentenceText.style.display = 'none';
    sentenceText.classList.remove('active');
    showLessonBtn.innerHTML = 'କଳାପଟାରେ ପଢିବା..';
    showLessonBtn.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)';
    
    // Update UI
    updateProgress();
    updateScoreDisplay();
    
    // Initialize topic card (wait for DOM to settle)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            
            // Initialize topic card
            const mainNavCard = document.getElementById('mainNavCard');
            const topicExplanation = document.getElementById('topicExplanation');
            
            if (mainNavCard && topicExplanation) {
                currentTopicIndex = 0;
                const topic = topicsData[0];
                
                const counterEl = document.getElementById('topicCounter');
                const headingEl = document.getElementById('topicHeading');
                const answerBox = document.getElementById('mainAnswerBox');
                const prevBtn = document.getElementById('prevBtn');
                const nextBtn = document.getElementById('nextBtn');
                
                if (counterEl) counterEl.textContent = `Topic 1 of ${topicsData.length}`;
                if (headingEl) headingEl.textContent = topic.heading;
                if (answerBox) answerBox.innerHTML = '👆 Click any question above to see the answer';
                
                if (prevBtn) {
                    prevBtn.disabled = true;
                    prevBtn.style.opacity = '0.5';
                }
                if (nextBtn) {
                    nextBtn.disabled = false;
                    nextBtn.style.opacity = '1';
                }
                
                setTimeout(() => {
                    triggerHandwritingForMainCard(topic.explanation);
                }, 100);
            }
        });
    });
}

 function createMCQTest() {
    if (currentActiveTest === 'mcq' && testContainer.innerHTML !== '') {
        testContainer.innerHTML = '';
        currentActiveTest = null;
        cleanupAudio();
        return;
    }
    
    cleanupAudio();
    currentActiveTest = 'mcq';
    
    const data = courseData.sentences[currentSentence].mcq;
    const allQuestions = data.questions;
    
    let html = '<div class="test-section active"><h3 style="color: #667eea;">📝 ବିକଳ୍ପଯୁକ୍ତ ପ୍ରଶ୍ନ :: </h3>';
    
    allQuestions.forEach((q, qIndex) => {
        const audioButton = createAudioButton(q.audio, `mcq-q${qIndex}`);
        
        html += `<div class="question" data-q="${qIndex}">
            <div class="question-header">
                <div class="question-text">${qIndex + 1}. ${q.question}</div>
                ${audioButton}
            </div>`;
        
        q.options.forEach((opt, oIndex) => {
            html += `<div class="option" data-q="${qIndex}" data-o="${oIndex}">${opt}</div>`;
        });
        
        html += '</div>';
    });
    
    html += '<button class="submit-btn" onclick="submitMCQ()">ଉତ୍ତର ଦାଖଲ କରନ୍ତୁ ।</button></div>';
    testContainer.innerHTML = html;
    
    document.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', function() {
            const qNum = this.dataset.q;
            document.querySelectorAll(`.option[data-q="${qNum}"]`).forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

function submitMCQ() {
    const data = courseData.sentences[currentSentence].mcq;
    const allQuestions = data.questions;
    
    let score = 0;
    
    allQuestions.forEach((q, qIndex) => {
        const selected = document.querySelector(`.option[data-q="${qIndex}"].selected`);
        const options = document.querySelectorAll(`.option[data-q="${qIndex}"]`);
        
        options.forEach((opt, oIndex) => {
            if (oIndex === q.correct) {
                opt.classList.add('correct');
            }
            if (selected && parseInt(selected.dataset.o) === oIndex && oIndex !== q.correct) {
                opt.classList.add('wrong');
            }
        });
        
        if (selected && parseInt(selected.dataset.o) === q.correct) {
            score++;
        }
    });
    
    scores.mcq += score;
    completedTests.mcq = true;
    localStorage.setItem('savedScores', JSON.stringify(scores));
    updateScoreDisplay();
    
    const feedback = document.createElement('div');
    feedback.className = `feedback ${score === allQuestions.length ? 'correct' : 'wrong'}`;
    feedback.textContent = `ଆପଣ ମାର୍କ୍ ରଖିଛନ୍ତି : ${score}/${allQuestions.length}`;
    testContainer.querySelector('.test-section').appendChild(feedback);
    
    testContainer.querySelector('.submit-btn').disabled = true;
}

function createTFTest() {
    if (currentActiveTest === 'tf' && testContainer.innerHTML !== '') {
        testContainer.innerHTML = '';
        currentActiveTest = null;
        cleanupAudio();
        return;
    }
    
    cleanupAudio();
    currentActiveTest = 'tf';
    
    const data = courseData.sentences[currentSentence].trueFalse;
    const allQuestions = data.questions;
    
    let html = '<div class="test-section active"><h3 style="color: #4facfe;">✓ ସତ୍ୟ/ମିଥ୍ୟା ଦର୍ଶାଇବାଯୁକ୍ତ ପ୍ରଶ୍ନ :</h3>';
    
    allQuestions.forEach((q, qIndex) => {
        const audioButton = createAudioButton(q.audio, `tf-q${qIndex}`);
        
        html += `<div class="question" data-q="${qIndex}">
            <div class="question-header">
                <div class="question-text">${qIndex + 1}. ${q.question}</div>
                ${audioButton}
            </div>
            <div class="option" data-q="${qIndex}" data-answer="true">ସତ୍ୟ</div>
            <div class="option" data-q="${qIndex}" data-answer="false">ମିଥ୍ୟା</div>
        </div>`;
    });
    
    html += '<button class="submit-btn" onclick="submitTF()">ଉତ୍ତର ଦାଖଲ କରନ୍ତୁ । </button></div>';
    testContainer.innerHTML = html;
    
    document.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', function() {
            const qNum = this.dataset.q;
            document.querySelectorAll(`.option[data-q="${qNum}"]`).forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

function submitTF() {
    const data = courseData.sentences[currentSentence].trueFalse;
    const allQuestions = data.questions;
    
    let score = 0;
    
    allQuestions.forEach((q, qIndex) => {
        const selected = document.querySelector(`.option[data-q="${qIndex}"].selected`);
        const options = document.querySelectorAll(`.option[data-q="${qIndex}"]`);
        
        options.forEach(opt => {
            const isCorrect = (opt.dataset.answer === 'true') === q.correct;
            if (isCorrect) {
                opt.classList.add('correct');
            }
            if (selected && selected === opt && !isCorrect) {
                opt.classList.add('wrong');
            }
        });
        
        if (selected && (selected.dataset.answer === 'true') === q.correct) {
            score++;
        }
    });
    
    scores.tf += score;
    completedTests.tf = true;
    localStorage.setItem('savedScores', JSON.stringify(scores));
    updateScoreDisplay();
  

    localStorage.setItem('savedScores', JSON.stringify(scores));
    const feedback = document.createElement('div');
    feedback.className = `feedback ${score === allQuestions.length ? 'correct' : 'wrong'}`;
    feedback.textContent = `ଆପଣ ମାର୍କ୍ ରଖିଛନ୍ତି : ${score}/${allQuestions.length}`;
    testContainer.querySelector('.test-section').appendChild(feedback);
    
    testContainer.querySelector('.submit-btn').disabled = true;
}

function createFIBTest() {
    if (currentActiveTest === 'fib' && testContainer.innerHTML !== '') {
        testContainer.innerHTML = '';
        currentActiveTest = null;
        cleanupAudio();
        return;
    }
    
    cleanupAudio();
    currentActiveTest = 'fib';
    
    const data = courseData.sentences[currentSentence].fillBlanks;
    const allQuestions = data.questions;
    
    let html = '<div class="test-section active"><h3 style="color: #43e97b;">✏️ ଶୂନ୍ୟ ସ୍ଥାନଗୁଡିକ ପୂରଣ କରନ୍ତୁ : </h3>';
    
    allQuestions.forEach((q, qIndex) => {
        const audioButton = createAudioButton(q.audio, `fib-q${qIndex}`);
        
        // Extract options from question text like "(ବିଲେଇ / କୁକୁର)"
        const optionMatch = q.question.match(/\(([^)]+)\)/);
        let optionButtons = '';
        
        if (optionMatch) {
            const options = optionMatch[1].split('/').map(o => o.trim());
            optionButtons = `
                <div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
                    <span style="font-size: 13px; color: #555; align-self: center;">👆 ବାଛନ୍ତୁ:</span>
                    ${options.map(opt => `
                        <button 
                            onclick="selectFIBOption(${qIndex}, '${opt}')"
                            class="fib-option-btn"
                            data-q="${qIndex}"
                            data-opt="${opt}"
                            style="
                                padding: 6px 14px;
                                border: 2px solid #667eea;
                                border-radius: 20px;
                                background: white;
                                color: #667eea;
                                font-size: 13px;
                                font-weight: bold;
                                cursor: pointer;
                                transition: all 0.2s ease;
                            ">
                            ${opt}
                        </button>
                    `).join('')}
                </div>`;
        }
        
        html += `<div class="question" data-q="${qIndex}">
            <div class="question-header">
                <div class="question-text">${qIndex + 1}. ${q.question}</div>
                ${audioButton}
            </div>
            ${optionButtons}
            <input 
                type="text" 
                class="input-box" 
                id="fib-input-${qIndex}"
                data-q="${qIndex}" 
                placeholder="ଏଠାରେ ଆପଣଙ୍କ ଉତ୍ତର ଲେଖନ୍ତୁ...">
        </div>`;
    });
    
    html += '<button class="submit-btn" onclick="submitFIB()">ଉତ୍ତର ଦାଖଲ କରନ୍ତୁ ।</button></div>';
    testContainer.innerHTML = html;
}


function selectFIBOption(qIndex, value) {
    // Write selected option into the input box
    const input = document.getElementById(`fib-input-${qIndex}`);
    if (input) input.value = value;
    
    // Highlight selected button, reset others for same question
    document.querySelectorAll(`.fib-option-btn[data-q="${qIndex}"]`).forEach(btn => {
        if (btn.dataset.opt === value) {
            btn.style.background = '#667eea';
            btn.style.color = 'white';
            btn.style.borderColor = '#667eea';
        } else {
            btn.style.background = 'white';
            btn.style.color = '#667eea';
            btn.style.borderColor = '#667eea';
        }
    });
    
    // Also clear highlight if user later types manually
    input.addEventListener('input', () => {
        document.querySelectorAll(`.fib-option-btn[data-q="${qIndex}"]`).forEach(btn => {
            btn.style.background = 'white';
            btn.style.color = '#667eea';
        });
    }, { once: true });
}
    
function submitFIB() {
    const data = courseData.sentences[currentSentence].fillBlanks;
    const allQuestions = data.questions;
    
    let score = 0;
    
    allQuestions.forEach((q, qIndex) => {
        const input = document.querySelector(`.input-box[data-q="${qIndex}"]`);
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = q.answer.toLowerCase();
        
        if (userAnswer === correctAnswer) {
            input.style.borderColor = '#4CAF50';
            input.style.background = '#c8e6c9';
            score++;
        } else {
            input.style.borderColor = '#f44336';
            input.style.background = '#ffcdd2';
            
            const correctMsg = document.createElement('div');
            correctMsg.style.cssText = 'margin-top: 8px; color: #2e7d32; font-size: 12px;';
            correctMsg.textContent = `ସଠିକ୍ ଉତ୍ତର ହେଉଛି: ${q.answer}`;
            input.parentElement.appendChild(correctMsg);
        }
        
        input.disabled = true;
    });
    
    scores.fib += score;
    completedTests.fib = true;
    
    // ← ADD THIS LINE: save to localStorage immediately
    localStorage.setItem('savedScores', JSON.stringify(scores));
    
    updateScoreDisplay();
    
    const feedback = document.createElement('div');
    feedback.className = `feedback ${score === allQuestions.length ? 'correct' : 'wrong'}`;
    feedback.textContent = `ଆପଣ ମାର୍କ୍ ରଖିଛନ୍ତି : ${score}/${allQuestions.length}`;
    testContainer.querySelector('.test-section').appendChild(feedback);
    
    testContainer.querySelector('.submit-btn').disabled = true;
}

function createMatchingTest() {
    if (currentActiveTest === 'matching' && testContainer.innerHTML !== '') {
        testContainer.innerHTML = '';
        currentActiveTest = null;
        cleanupAudio();
        return;
    }
    
    cleanupAudio();
    currentActiveTest = 'matching';
    
    const data = courseData.sentences[currentSentence].matching;
    const allPairs = data.pairs;
    
    let html = '<div class="test-section active"><h3 style="color: #fa709a;">🔗 ଯୋଡ଼ିଗୁଡ଼ିକୁ ମେଳ କରନ୍ତୁ :</h3>';
    html += '<p style="margin-bottom: 12px; font-size: 12px;">ମେଳ କରିବା ପାଇଁ ଉଭୟ ସ୍ତମ୍ଭର ଲେଖାଗୁଡ଼ିକୁ କ୍ଲିକ୍ କରନ୍ତୁ । </p>';
    
    const shuffledRight = [...allPairs.map(p => p.right)].sort(() => Math.random() - 0.5);
    
    html += '<div class="matching-container">';
    
    html += '<div>';
    allPairs.forEach((pair, index) => {
        const audioButton = createAudioButton(pair.leftAudio, `match-left-${index}`);
        html += `<div class="match-item" data-left="${index}" data-value="${pair.left}">
            ${pair.left} ${audioButton}
        </div>`;
    });
    html += '</div>';
    
    html += '<div>';
    shuffledRight.forEach((right, index) => {
        const originalPair = allPairs.find(p => p.right === right);
        const audioButton = createAudioButton(originalPair.rightAudio, `match-right-${index}`);
        html += `<div class="match-item" data-right="${index}" data-value="${right}">
            ${right} ${audioButton}
        </div>`;
    });
    html += '</div>';
    
    html += '</div>';
    html += '<button class="submit-btn" onclick="submitMatching()">ଉତ୍ତର ଦାଖଲ କରନ୍ତୁ । </button></div>';
    testContainer.innerHTML = html;
    
    let selectedLeft = null;
    let selectedRight = null;
    let matches = [];
    
    document.querySelectorAll('.match-item[data-left]').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('audio-control-btn')) return;
            
            if (this.classList.contains('correct')) return;
            document.querySelectorAll('.match-item[data-left]').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            selectedLeft = this;
            
            if (selectedRight) {
                matches.push({ left: selectedLeft, right: selectedRight });
                selectedLeft.classList.add('correct');
                selectedRight.classList.add('correct');
                selectedLeft.classList.remove('selected');
                selectedRight.classList.remove('selected');
                selectedLeft = null;
                selectedRight = null;
            }
        });
    });
    
    document.querySelectorAll('.match-item[data-right]').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('audio-control-btn')) return;
            
            if (this.classList.contains('correct')) return;
            document.querySelectorAll('.match-item[data-right]').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            selectedRight = this;
            
            if (selectedLeft) {
                matches.push({ left: selectedLeft, right: selectedRight });
                selectedLeft.classList.add('correct');
                selectedRight.classList.add('correct');
                selectedLeft.classList.remove('selected');
                selectedRight.classList.remove('selected');
                selectedLeft = null;
                selectedRight = null;
            }
        });
    });
    
    window.currentMatches = matches;
}

function submitMatching() {
    const data = courseData.sentences[currentSentence].matching;
    const allPairs = data.pairs;
    
  let score = 0;
            
            // First, mark all matched items
            window.currentMatches.forEach(match => {
                const leftValue = match.left.dataset.value;
                const rightValue = match.right.dataset.value;
                
                const isCorrect = allPairs.some(pair => pair.left === leftValue && pair.right === rightValue);
                
                if (isCorrect) {
                    score++;
                } else {
                    match.left.classList.remove('correct');
                    match.left.classList.add('wrong');
                    match.right.classList.remove('correct');
                    match.right.classList.add('wrong');
                }
            });
            
            // Now show all correct answers by highlighting unmatched or wrongly matched pairs
            allPairs.forEach((pair, pairIndex) => {
                // Find the left item
                const leftItems = document.querySelectorAll('.match-item[data-left]');
                const rightItems = document.querySelectorAll('.match-item[data-right]');
                
                let leftItem = null;
                let rightItem = null;
                
                leftItems.forEach(item => {
                    if (item.dataset.value === pair.left) {
                        leftItem = item;
                    }
                });
                
                rightItems.forEach(item => {
                    if (item.dataset.value === pair.right) {
                        rightItem = item;
                    }
                });
                
                // If either is wrong or not marked as correct, show the correct pairing
                if (leftItem && rightItem) {
                    if (!leftItem.classList.contains('correct') || !rightItem.classList.contains('correct')) {
                        // Add visual indicator for correct answer
                        leftItem.style.boxShadow = '0 0 0 3px #4CAF50';
                        rightItem.style.boxShadow = '0 0 0 3px #4CAF50';
                    }
                }
            });
            
            scores.matching += score;
            completedTests.matching = true;
    localStorage.setItem('savedScores', JSON.stringify(scores));
            updateScoreDisplay();

            
            const feedback = document.createElement('div');
            feedback.className = `feedback ${score === allPairs.length ? 'correct' : 'wrong'}`;
            feedback.textContent = `ଆପଣ ମାର୍କ୍ ରଖିଛନ୍ତି : ${score}/${allPairs.length}`;
            
            // Add correct answers display
            if (score < allPairs.length) {
                const correctAnswersDiv = document.createElement('div');
                correctAnswersDiv.style.cssText = 'margin-top: 10px; text-align: left; font-size: 12px; font-weight: normal;';
                correctAnswersDiv.innerHTML = '<strong style="color: #2e7d32;">ସଠିକ୍ ଯୋଡିଗୁଡିକ ହେଉଛନ୍ତି :</strong><br>';
                allPairs.forEach((pair, idx) => {
                    correctAnswersDiv.innerHTML += `${idx + 1}. ${pair.left} → ${pair.right}<br>`;
                });
                feedback.appendChild(correctAnswersDiv);
            }
            
            testContainer.querySelector('.test-section').appendChild(feedback);
            
            testContainer.querySelector('.submit-btn').disabled = true;
            
            // Disable further clicking
            document.querySelectorAll('.match-item').forEach(item => {
                item.style.pointerEvents = 'none';
            });
        }
           
        
function createArrangeTest() {
    // Toggle: if Arrange is already open, close it
    if (currentActiveTest === 'arrange' && testContainer.innerHTML !== '') {
        testContainer.innerHTML = '';
        currentActiveTest = null;
        cleanupAudio();
        return;
    }
    
    cleanupAudio();
    currentActiveTest = 'arrange'; // Mark Arrange as active
    
    // NEW CODE - KEEP THIS
    const data = courseData.sentences[currentSentence].arrange;
    const allQuestions = data.questions;
    
    let html = '<div class="test-section active"><h3 style="color: #30cfd0;">🔤 ଶବ୍ଦଗୁଡ଼ିକୁ କ୍ରମାନ୍ଵୟ ରେ ସଜାନ୍ତୁ :</h3>';
    
    allQuestions.forEach((q, qIndex) => {
        const shuffledWords = [...q.words].sort(() => Math.random() - 0.5);
        const audioButton = createAudioButton(q.audio, `arrange-q${qIndex}`);
        
        html += `<div class="question" data-q="${qIndex}">
            <div class="question-header">
                <div class="question-text">${qIndex + 1}. ସଠିକ୍ କ୍ରମରେ ସଜାନ୍ତୁ:</div>
                ${audioButton}
            </div>
            <div class="arrange-words" data-q="${qIndex}">`;
        
        shuffledWords.forEach((word, wIndex) => {
            html += `<div class="word-chip" data-q="${qIndex}" data-word="${word}">${word}</div>`;
        });
        
        html += `</div>
            <div class="arranged-answer" data-q="${qIndex}">ଆପଣଙ୍କ ଉତ୍ତର: </div>
        </div>`;
    });
    
    html += '<button class="submit-btn" onclick="submitArrange()">ଉତ୍ତର ଦାଖଲ କରନ୍ତୁ ।</button></div>';
    testContainer.innerHTML = html;
    
    const selectedWords = {};
    
    document.querySelectorAll('.word-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const qNum = this.dataset.q;
            if (!selectedWords[qNum]) selectedWords[qNum] = [];
            
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                const index = selectedWords[qNum].indexOf(this.dataset.word);
                if (index > -1) selectedWords[qNum].splice(index, 1);
            } else {
                this.classList.add('selected');
                selectedWords[qNum].push(this.dataset.word);
            }
            
            document.querySelector(`.arranged-answer[data-q="${qNum}"]`).textContent = 'ଆପଣଙ୍କ ଉତ୍ତର: ' + selectedWords[qNum].join(' ');
        });
    });
    
    window.selectedArrangeWords = selectedWords;
}

function submitArrange() {
    // NEW CODE - KEEP THIS
    const data = courseData.sentences[currentSentence].arrange;
    const allQuestions = data.questions;
    
    let score = 0;
    
    allQuestions.forEach((q, qIndex) => {
        const userAnswer = (window.selectedArrangeWords[qIndex] || []).join(' ');
        const correctAnswer = q.correct;
        
        const answerSpan = document.querySelector(`.arranged-answer[data-q="${qIndex}"]`);
        
    const normalizedUser = userAnswer.trim().replace(/[।\.]/g, '').replace(/\s+/g, ' ').trim();
const normalizedCorrect = correctAnswer.trim().replace(/[।\.]/g, '').replace(/\s+/g, ' ').trim();

if (normalizedUser.toLowerCase() === normalizedCorrect.toLowerCase()) {
            answerSpan.style.color = '#4CAF50';
            score++;
        } else {
            answerSpan.style.color = '#f44336';
            const correctMsg = document.createElement('div');
            correctMsg.style.cssText = 'margin-top: 6px; color: #2e7d32; font-size: 12px;';
            correctMsg.textContent = `ସଠିକ୍ ଉତ୍ତର ହେଉଛି: ${correctAnswer}`;
            answerSpan.parentElement.appendChild(correctMsg);
        }
    });
    
    scores.arrange += score;
    completedTests.arrange = true;
    localStorage.setItem('savedScores', JSON.stringify(scores));

    updateScoreDisplay();
    
    const feedback = document.createElement('div');
    feedback.className = `feedback ${score === allQuestions.length ? 'correct' : 'wrong'}`;
    feedback.textContent = `ଆପଣଙ୍କ ମାର୍କ୍: ${score}/${allQuestions.length}`;
    testContainer.querySelector('.test-section').appendChild(feedback);
    
    testContainer.querySelector('.submit-btn').disabled = true;
    
    document.querySelectorAll('.word-chip').forEach(chip => {
        chip.style.pointerEvents = 'none';
    });
}

function createSTQTest() {
    // Toggle: if STQ is already open, close it
    if (currentActiveTest === 'stq' && testContainer.innerHTML !== '') {
        testContainer.innerHTML = '';
        currentActiveTest = null;
        cleanupAudio();
        return;
    }
    
    cleanupAudio(); // Stop any playing audio
    currentActiveTest = 'stq'; // Mark STQ as active
    
    // NEW CODE - KEEP THIS
    const data = courseData.sentences[currentSentence].stq;
    const allQuestions = data.questions;
    let html = '<div class="test-section active"><h3 style="color: #eb3349;">📝 ଅତି ସଂକ୍ଷିପ୍ତ ପ୍ରଶ୍ନୋତ୍ତର :</h3>';
    
    allQuestions.forEach((q, qIndex) => {
        const audioButton = createAudioButton(q.audio, `stq-q${qIndex}`);
        
        html += `<div class="question" data-q="${qIndex}">
            <div class="question-header">
                <div class="question-text" style="font-size: 15px; margin-bottom: 0;">${qIndex + 1}. ${q.question}</div>
                ${audioButton}
            </div>
            <div style="background: #e8f5e9; padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50; margin-top: 12px;">
                <strong style="color: #2e7d32;">ଉତ୍ତର:</strong>
                <p style="margin-top: 8px; color: #333; line-height: 1.6; text-align: justify;">${q.answer}</p>
            </div>
        </div>`;
    });
    
    html += '</div>';
    testContainer.innerHTML = html;
}
        mcqBtn.addEventListener('click', createMCQTest);
        tfBtn.addEventListener('click', createTFTest);
        fibBtn.addEventListener('click', createFIBTest);
        matchBtn.addEventListener('click', createMatchingTest);
        arrangeBtn.addEventListener('click', createArrangeTest);
        stqBtn.addEventListener('click', createSTQTest);
    document.getElementById('summaryBtn').addEventListener('click', createSummaryTest);
document.getElementById('questionBtn').addEventListener('click', createQuestionTest);
   


function createSummaryTest() {
    // Toggle: if Summary is already open, close it
    if (currentActiveTest === 'summary' && testContainer.innerHTML !== '') {
        testContainer.innerHTML = '';
        currentActiveTest = null;
        cleanupAudio();
        return;
    }
    
    cleanupAudio();
    currentActiveTest = 'summary';
    
    const summary = courseData.summary;
    const summaryAudioButton = createAudioButton(summary.audio, 'summary-audio');
    
    let html = `<div class="summary-content active">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
            <h2 style="color: #667eea; margin: 0;">📚 ଦୀର୍ଘ ଉତ୍ତରମୂଳକ ପ୍ରଶ୍ନ - ଏହି କ୍ଲାସ୍ ର ସାରାଂଶ ବର୍ଣ୍ଣନା କର । </h2>
            ${summaryAudioButton}
        </div>
        
        <p>${summary.content.introduction}</p>
        <ul>`;
    
    summary.content.sentences.forEach((item) => {
        html += `<li><strong>${item.heading}:</strong> ${item.text}</li>`;
    });
    
    html += `</ul>
        <h3>ନିଷ୍କର୍ଷ: </h3>
        <p>${summary.content.conclusion}</p>
    </div>`;
    
    testContainer.innerHTML = html;
}

function createQuestionTest() {
    if (currentActiveTest === 'question' && testContainer.innerHTML !== '') {
        testContainer.innerHTML = '';
        currentActiveTest = null;
        cleanupAudio();
        return;
    }
    cleanupAudio();
    currentActiveTest = 'question';

    const summary = courseData.summary;
    let html = `<div class="summary-question-content active">`;

    summary.questions.forEach((q, i) => {
        html += `
        <h3 style="color:#f5576c;">📝 ପ୍ରଶ୍ନ ${i+1}: ${q.question}</h3>
        <p>${q.introduction}</p>
        <ul>${q.points.map(p => `<li>${p}</li>`).join('')}</ul>
        <p><strong>ନିଷ୍କର୍ଷ:</strong> ${q.conclusion}</p>
        <hr style="margin:15px 0; border-color:#eee;">`;
    });

    html += `</div>`;
    testContainer.innerHTML = html;
}

function updateProgress() {
    const progress = ((currentSentence + 1) / courseData.sentences.length) * 100;
    progressFill.style.width = progress + '%';
}
       function updateScoreDisplay() {
    const sentence = courseData.sentences[currentSentence];
    
    // Calculate max scores for each test type
    let maxScores = {
        mcq: sentence.mcq?.questions?.length || 0,
        tf: sentence.trueFalse?.questions?.length || 0,
        fib: sentence.fillBlanks?.questions?.length || 0,
        matching: sentence.matching?.pairs?.length || 0,
        arrange: sentence.arrange?.questions?.length || 0
    };
    
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const max = Object.values(maxScores).reduce((a, b) => a + b, 0);
    
    totalScoreEl.textContent = total;
    maxScoreEl.textContent = max;
    scoreDisplay.style.display = 'block';
}
    
function cleanupAudio() {
    stopAudioCompletely();
    stopSequentialAudio();  // ADD THIS LINE
}
    
    
// Configuration object for all assistants - EASY TO MANAGE
const assistantConfig = {
  
    translator: {
        container: 'translatorContainer',
        iframe: 'translatorIframe',
        loading: 'translatorLoading',
        url: 'https://www.bing.com/translator?from=en&to=or&text=',
        loadedFlag: 'translatorLoaded'
    },
    eGuruAssistant: {
        container: 'eGuruContainer',
        iframe: 'eGuruIframe',
        loading: 'eGuruLoading',
        url: 'https://student-care.pages.dev/SC/',
        loadedFlag: 'eGuruLoaded'
    }
};

// Track loaded states
const loadedStates = {};

// Dropdown toggle functionality
const dropdownBtn = document.getElementById('assistantDropdownBtn');
const dropdownMenu = document.getElementById('assistantDropdownMenu');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
    dropdownBtn.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.assistant-dropdown-wrapper')) {
        dropdownMenu.classList.remove('active');
        dropdownBtn.classList.remove('active');
    }
});

// Universal function to open any assistant
function openAssistant(assistantType) {
    const config = assistantConfig[assistantType];
    if (!config) return;

    const container = document.getElementById(config.container);
    const iframe = document.getElementById(config.iframe);
    const loading = document.getElementById(config.loading);
    
    // Show container
    container.classList.add('active');
    loading.style.display = 'flex';
    
    // Load iframe only if not already loaded (LAZY LOADING)
    if (!loadedStates[config.loadedFlag]) {
        iframe.onload = function() {
            loading.style.display = 'none';
            iframe.style.display = 'block';
        };
        
        iframe.onerror = function() {
            loading.innerHTML = '<p style="color: red;">⚠️ ଲୋଡ୍ ହେବାରେ ସମସ୍ୟା | ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ</p>';
        };
        
        // Delayed loading for better performance
        setTimeout(() => {
            iframe.src = config.url;
            loadedStates[config.loadedFlag] = true;
        }, 300);
    } else {
        // Already loaded, just show it
        loading.style.display = 'none';
        iframe.style.display = 'block';
    }
    
    // Smooth scroll to view
    setTimeout(() => {
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Universal close function
function closeAssistant(containerId) {
    const container = document.getElementById(containerId);
    container.classList.remove('active');
}

// ============================================
// WHATSAPP HELP FUNCTION
// ============================================

function openWhatsAppHelp() {
    const phone = '916372296357';

    const studentName = sessionData.studentName || 'ଛାତ୍ର';
    const rollNumber  = sessionData.rollNumber || 'N/A';

    let topicContext = '';
    if (typeof window.getSbCurrentLesson === 'function') {
        const heading = window.getSbCurrentLesson();
        if (heading) topicContext = heading.replace(/:-$/, '');
    }

 const message =
        `🙏 ନମସ୍କାର ଆଜ୍ଞା,\n\n` +
        `ମୁଁ ଇ-ବିଦ୍ୟା ଏକାଡେମି ର ଜଣେ ବିଦ୍ୟାର୍ଥୀ । ମୋର ସାହାଯ୍ୟ ଦରକାର ।\n\n` +
        `👤 ନାମ: ${studentName}\n` +
        `🆔 ରୋଲ୍ ନମ୍ବର: ${rollNumber}\n` +
        `🏫 ଶ୍ରେଣୀ: ${APP_CONFIG.sreni}\n` +
        `📘 ବିଷୟ: ${APP_CONFIG.subject}\n` +
        (topicContext ? `📖 ବର୍ତ୍ତମାନ ପଢୁଥିବା ନୋଟ୍: ${topicContext}\n` : '') +
        `\nଦୟାକରି ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ ।`;

    function proceedToWhatsApp() {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    }

    const botModal = document.getElementById('studyBotModal');
    const botIsOpen = botModal && botModal.style.display !== 'none';

    if (botIsOpen && typeof window.sbEncourage === 'function') {
        window.sbEncourage(studentName, proceedToWhatsApp);
    } else {
        proceedToWhatsApp();
    }
}

window.openWhatsAppHelp = openWhatsAppHelp;


// Handle assistant selection from dropdown
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const assistantType = e.currentTarget.dataset.assistant;
        
        // Close dropdown
        dropdownMenu.classList.remove('active');
        dropdownBtn.classList.remove('active');
        
        // Open selected assistant
        openAssistant(assistantType);
    });
});

// Prevent memory leaks - cleanup on page unload
window.addEventListener('beforeunload', () => {
    Object.keys(assistantConfig).forEach(key => {
        const iframe = document.getElementById(assistantConfig[key].iframe);
        if (iframe) iframe.src = '';
    });
});



// Global variable to store the current typing timeout
let typingTimeout = null;

// Modified typeWriter to handle HTML properly
function typeWriter(element, text, speed = 20) {
    // Clear any existing typing animation
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
    
    element.innerHTML = '';
    
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    
    // Extract text nodes and tags separately
    const nodes = [];
    const walker = document.createTreeWalker(
        tempDiv,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
        null,
        false
    );
    
    let currentNode;
    while (currentNode = walker.nextNode()) {
        if (currentNode.nodeType === Node.TEXT_NODE) {
            nodes.push({
                type: 'text',
                content: currentNode.textContent
            });
        } else if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.tagName === 'BR') {
            nodes.push({
                type: 'br'
            });
        } else if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.tagName === 'SPAN') {
            nodes.push({
                type: 'span-open',
                style: currentNode.getAttribute('style')
            });
        }
    }
    
    // Simpler approach: type the HTML as-is
    let i = 0;
    let currentHTML = '';
    
    function type() {
        if (i < text.length) {
            // Check if we're at the start of an HTML tag
            if (text.charAt(i) === '<') {
                // Find the end of the tag
                const tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    // Add the entire tag at once
                    currentHTML += text.substring(i, tagEnd + 1);
                    element.innerHTML = currentHTML;
                    i = tagEnd + 1;
                    typingTimeout = setTimeout(type, 0); // No delay for tags
                    return;
                }
            }
            currentHTML += text.charAt(i);
            element.innerHTML = currentHTML;
            i++;
            typingTimeout = setTimeout(type, speed);
        } else {
            typingTimeout = null;
        }
    }
    type();
}

// Keep showAnswerInBox the same
function showAnswerInBox(boxId, answerText) {
    const answerBox = document.getElementById(boxId);
    typeWriter(answerBox, answerText, 40);
}
    




let currentTopicIndex = 0;

function loadTopic(index, autoPlay = false) {
    const topic = topicsData[index];
    
    stopAudioCompletely();
    stopSequentialAudio();
    
    const counterSpan = document.getElementById('topicCounter');
    if (counterSpan) {
        counterSpan.textContent = `Topic ${index + 1} of ${topicsData.length}`;
    }
    
  const oldAudio = document.querySelector('.topic-counter-wrapper .audio-control-btn');
    if (oldAudio) oldAudio.remove();
    
    const heading = document.getElementById('topicHeading');
    if (heading) heading.textContent = topic.heading;
    
   const explanationDiv = document.getElementById('topicExplanation');
    if (explanationDiv) {
        explanationDiv.className = 'answer-section';
        explanationDiv.innerHTML = '';
        setTimeout(() => {
            startSequentialAudio(topic);
        }, 500);
    }
    
    const answerBox = document.getElementById('mainAnswerBox');
    if (answerBox) answerBox.innerHTML = '👆 ଉପରୋକ୍ତ ପ୍ରଶ୍ନଗୁଡିକର ଉତ୍ତରକୁ ଏଠାରେ ଦେଖିବା ପାଇଁ ସମ୍ପୃକ୍ତ ପ୍ରଶ୍ନ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ । ';
    
    const isFirst = (index === 0);
    const isLast = (index === topicsData.length - 1);
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtnNav = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = isFirst;
        prevBtn.style.opacity = isFirst ? '0.5' : '1';
    }
    
    if (nextBtnNav) {
        nextBtnNav.disabled = isLast;
        nextBtnNav.style.opacity = isLast ? '0.5' : '1';
    }
    } 


    
function triggerHandwritingForWelcome(welcomeText) {
    const explanationDiv = document.getElementById('welcomeExplanation');
    
    if (!explanationDiv) {
        console.error('welcomeExplanation element not found!');
        return;
    }
    
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
    
    explanationDiv.className = 'answer-section';
    explanationDiv.style.fontFamily = "'Arial', 'Segoe UI', sans-serif";
    
   explanationDiv.innerHTML = `
    <div style="text-align: center; width: 100%; display: flex; justify-content: center; align-items: center; min-height: 150px;">
        <span class="typing-text" style="text-align: center; display: inline-block;"></span>
    </div>
    <div class="writing-hand writing">✍️</div>
    <div class="chalk-piece"></div>
`;
    
    const typingSpan = explanationDiv.querySelector('.typing-text');
    const hand = explanationDiv.querySelector('.writing-hand');
    const chalk = explanationDiv.querySelector('.chalk-piece');
    
    if (!typingSpan || !hand || !chalk) return;
    
    let charIndex = 0;
    
    function createChalkDust(x, y) {
        const dust = document.createElement('div');
        dust.className = 'chalk-dust';
        dust.style.left = x + 'px';
        dust.style.top = y + 'px';
        explanationDiv.appendChild(dust);
        setTimeout(() => dust.remove(), 600);
    }
    
    function moveHandToCursor() {
        if (!hand || !chalk || !typingSpan) return;
        
        const sectionRect = explanationDiv.getBoundingClientRect();
        const range = document.createRange();
        const textNode = typingSpan.lastChild;
        
        if (textNode && textNode.nodeType === Node.TEXT_NODE && textNode.length > 0) {
            try {
                range.setStart(textNode, textNode.length);
                range.setEnd(textNode, textNode.length);
            } catch(e) {
                range.selectNodeContents(typingSpan);
                range.collapse(false);
            }
        } else {
            range.selectNodeContents(typingSpan);
            range.collapse(false);
        }
        
        const rangeRect = range.getBoundingClientRect();
        const targetX = rangeRect.left - sectionRect.left;
        const targetY = rangeRect.top - sectionRect.top;
        
        hand.style.left = (targetX - 25) + 'px';
        hand.style.top = (targetY - 35) + 'px';
        chalk.style.left = (targetX - 3) + 'px';
        chalk.style.top = (targetY - 5) + 'px';
    }
    
    function typeNextChar() {
        if (charIndex < welcomeText.length) {
            const char = welcomeText.charAt(charIndex);
            const textNode = document.createTextNode(char);
            typingSpan.appendChild(textNode);
            charIndex++;
            
            requestAnimationFrame(() => {
                moveHandToCursor();
                if (char.trim() !== '' && Math.random() > 0.6) {
                    const sectionRect = explanationDiv.getBoundingClientRect();
                    const handRect = hand.getBoundingClientRect();
                    createChalkDust(
                        handRect.left - sectionRect.left + 20,
                        handRect.top - sectionRect.top + 35
                    );
                }
            });
            
            let speed;
            if (char === '.') speed = 180;
            else if (char === ',') speed = 100;
            else if (char === ' ') speed = 30;
            else speed = 40;
            
            typingTimeout = setTimeout(typeNextChar, speed);
        } else {
            finishWriting();
        }
    }
    
    function finishWriting() {
        if (hand) {
            hand.classList.remove('writing');
            hand.style.transition = 'all 0.6s ease-out';
            hand.style.transform = 'translateY(50px) scale(0.8)';
            hand.style.opacity = '0';
        }
        if (chalk) {
            chalk.style.transition = 'all 0.6s ease-out';
            chalk.style.opacity = '0';
        }
        
        setTimeout(() => {
            if (hand) hand.remove();
            if (chalk) chalk.remove();
        }, 600);
        
        typingTimeout = null;
    }
    
    setTimeout(() => {
        moveHandToCursor();
        setTimeout(typeNextChar, 600);
    }, 800);
}
    

function triggerHandwritingForMainCard(explanationText) {
    const explanationDiv = document.getElementById('topicExplanation');
    
    if (!explanationDiv) {
        console.error('topicExplanation element not found!');
        setTimeout(() => {
            triggerHandwritingForMainCard(explanationText);
        }, 200);
        return;
    }
    
    // Clear any existing animation
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
    
    // Transform the word-display into a blackboard
    explanationDiv.className = 'answer-section';
    explanationDiv.style.fontFamily = "'Arial', 'Segoe UI', sans-serif";
    
    // Setup blackboard
    explanationDiv.innerHTML = `
        <div class="typing-text"></div>
        <div class="writing-hand writing">✍️</div>
        <div class="chalk-piece"></div>
    `;
    
    const typingDiv = explanationDiv.querySelector('.typing-text');
    const hand = explanationDiv.querySelector('.writing-hand');
    const chalk = explanationDiv.querySelector('.chalk-piece');
    
    if (!typingDiv || !hand || !chalk) {
        console.error('Required elements not found in blackboard!');
        return;
    }
    
    // Parse HTML to preserve emojis and tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = explanationText;
    
    // Get all text content with preserved structure
    const textContent = tempDiv.textContent || tempDiv.innerText;
    
    let charIndex = 0;
    
    function createChalkDust(x, y) {
        const dust = document.createElement('div');
        dust.className = 'chalk-dust';
        dust.style.left = x + 'px';
        dust.style.top = y + 'px';
        explanationDiv.appendChild(dust);
        setTimeout(() => dust.remove(), 600);
    }
    
    function moveHandToCursor() {
        if (!hand || !chalk || !typingDiv) return;
        
        const sectionRect = explanationDiv.getBoundingClientRect();
        const range = document.createRange();
        
        // Get the last text node
        const walker = document.createTreeWalker(
            typingDiv,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let lastTextNode = null;
        let node;
        while (node = walker.nextNode()) {
            lastTextNode = node;
        }
        
        if (lastTextNode && lastTextNode.length > 0) {
            try {
                range.setStart(lastTextNode, lastTextNode.length);
                range.setEnd(lastTextNode, lastTextNode.length);
            } catch(e) {
                range.selectNodeContents(typingDiv);
                range.collapse(false);
            }
        } else {
            range.selectNodeContents(typingDiv);
            range.collapse(false);
        }
        
        const rangeRect = range.getBoundingClientRect();
        const targetX = rangeRect.left - sectionRect.left;
        const targetY = rangeRect.top - sectionRect.top;
        
        hand.style.left = (targetX - 25) + 'px';
        hand.style.top = (targetY - 35) + 'px';
        chalk.style.left = (targetX - 3) + 'px';
        chalk.style.top = (targetY - 5) + 'px';
    }
    
    function typeNextChar() {
        if (charIndex < explanationText.length) {
            // Check for <br> tag
            if (explanationText.substr(charIndex, 4) === '<br>') {
                typingDiv.appendChild(document.createElement('br'));
                charIndex += 4;
                
                requestAnimationFrame(() => {
                    moveHandToCursor();
                });
                
                typingTimeout = setTimeout(typeNextChar, 100);
                return;
            }
            
            // Check if we're inside an HTML tag
            if (explanationText.charAt(charIndex) === '<') {
                const tagEnd = explanationText.indexOf('>', charIndex);
                if (tagEnd !== -1) {
                    // Skip the entire tag
                    charIndex = tagEnd + 1;
                    typingTimeout = setTimeout(typeNextChar, 0);
                    return;
                }
            }
            
            // Type character using Array.from to handle emojis properly
            const chars = Array.from(explanationText);
            const actualIndex = Array.from(explanationText.substring(0, charIndex)).length;
            
            if (actualIndex < chars.length) {
                const char = chars[actualIndex];
                const textNode = document.createTextNode(char);
                typingDiv.appendChild(textNode);
                
                // Move to next character position in original string
                charIndex += char.length;
                
                requestAnimationFrame(() => {
                    moveHandToCursor();
                    if (char.trim() !== '' && Math.random() > 0.6) {
                        const sectionRect = explanationDiv.getBoundingClientRect();
                        const handRect = hand.getBoundingClientRect();
                        createChalkDust(
                            handRect.left - sectionRect.left + 20,
                            handRect.top - sectionRect.top + 35
                        );
                    }
                });
                
                let speed;
                if (char === '.' || char === '।') speed = 180;
                else if (char === ',') speed = 100;
                else if (char === ' ') speed = 30;
                else speed = 40;
                
                typingTimeout = setTimeout(typeNextChar, speed);
            } else {
                finishWriting();
            }
        } else {
            finishWriting();
        }
    }
    
    function finishWriting() {
        if (hand) {
            hand.classList.remove('writing');
            hand.style.transition = 'all 0.6s ease-out';
            hand.style.transform = 'translateY(50px) scale(0.8)';
            hand.style.opacity = '0';
        }
        if (chalk) {
            chalk.style.transition = 'all 0.6s ease-out';
            chalk.style.opacity = '0';
        }
        
        setTimeout(() => {
            if (hand) hand.remove();
            if (chalk) chalk.remove();
        }, 600);
        
        typingTimeout = null;
    }
    
    setTimeout(() => {
        moveHandToCursor();
        setTimeout(typeNextChar, 600);
    }, 800);
}
    
function startLearning() {
    document.getElementById('welcomeBlackboard').style.display = 'none';
    document.getElementById('startButtonContainer').style.display = 'none';
    document.getElementById('topicCounterWrapper').style.display = 'flex';
    document.getElementById('topicContent').style.display = 'block';
    
    currentTopicIndex = 0;
    loadTopic(0, false);
}
    
function navigateTopic(direction) {
    currentTopicIndex += direction;
    
    if (currentTopicIndex < 0) currentTopicIndex = 0;
    if (currentTopicIndex >= topicsData.length) currentTopicIndex = topicsData.length - 1;
    
    setTimeout(() => {
        loadTopic(currentTopicIndex, false);
    }, 50);
}
    
function showTopicAnswer(type) {
    const topic = topicsData[currentTopicIndex];
    const answerBox = document.getElementById('mainAnswerBox');
    
    let answerText = '';
    
    switch(type) {
        case 'odia':
            answerText = topic.odia;
            break;
        case 'example':
            answerText = topic.example;
            break;
        case 'q1':
        case 'q2':
        case 'q3':
        case 'q4':
        case 'q5':
        case 'q6':
            const qIndex = parseInt(type.charAt(1)) - 1;
            answerText = topic.questions[qIndex];
            break;
    }
    
   typeWriter(answerBox, answerText, 20);
}

// ==========================================
// SIMPLIFIED WORD LEARNING SYSTEM
// ==========================================

let wordCanvas = null;
let wordCtx = null;
let isWordDrawing = false;
let wordAudio = null;

// Open Word Learning
function startWordLearning() {
    stopAudioCompletely();
    
    const container = document.getElementById('wordContainer');
    container.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    wordCanvas = document.getElementById('wordCanvas');
    wordCtx = wordCanvas.getContext('2d');
    
    wordData.currentWord = 0;
    
    updateWordNavButtons();
    showWordCard();
}

// Close Word Learning
function closeWordLearning() {
    document.getElementById('wordContainer').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    if (wordAudio) {
        wordAudio.pause();
        wordAudio = null;
    }
}

// Show Word Card
function showWordCard() {
    const word = wordData.words[wordData.currentWord];
    
    // Update card
    document.getElementById('wordDisplay').textContent = word.word;
    document.getElementById('wordOdia').textContent = word.odia;
    document.getElementById('wordUse').innerHTML = word.odiaUse;
    document.getElementById('wordEmojiContainer').textContent = word.emoji;
    document.getElementById('wordTitle').textContent = `ନିମ୍ନ ବାକ୍ସରେ ${word.word} ଲେଖନ୍ତୁ:`;
    
    document.getElementById('wordCounter').textContent = `Word ${wordData.currentWord + 1} of ${wordData.words.length}`;
    
    // Clear canvas
    wordCtx.clearRect(0, 0, wordCanvas.width, wordCanvas.height);
    
    // Hide feedback
    document.getElementById('wordFeedback').style.display = 'none';
    
    // Play intro audio
    playWordAudio(word.audio.intro, () => {
        playWordAudio(word.audio.encourage);
        enableWordDrawing();
    });
}

// Enable Drawing
function enableWordDrawing() {
    // Remove old listeners
    wordCanvas.removeEventListener('touchstart', startWordDrawing);
    wordCanvas.removeEventListener('touchmove', drawWord);
    wordCanvas.removeEventListener('touchend', stopWordDrawing);
    wordCanvas.removeEventListener('mousedown', startWordDrawing);
    wordCanvas.removeEventListener('mousemove', drawWord);
    wordCanvas.removeEventListener('mouseup', stopWordDrawing);
    
    // Add new listeners
    wordCanvas.addEventListener('touchstart', startWordDrawing);
    wordCanvas.addEventListener('touchmove', drawWord);
    wordCanvas.addEventListener('touchend', stopWordDrawing);
    wordCanvas.addEventListener('mousedown', startWordDrawing);
    wordCanvas.addEventListener('mousemove', drawWord);
    wordCanvas.addEventListener('mouseup', stopWordDrawing);
}

function startWordDrawing(e) {
    e.preventDefault();
    isWordDrawing = true;
    
    const rect = wordCanvas.getBoundingClientRect();
    const scaleX = wordCanvas.width / rect.width;
    const scaleY = wordCanvas.height / rect.height;
    
    let x, y;
    if (e.type === 'touchstart') {
        x = (e.touches[0].clientX - rect.left) * scaleX;
        y = (e.touches[0].clientY - rect.top) * scaleY;
    } else {
        x = (e.clientX - rect.left) * scaleX;
        y = (e.clientY - rect.top) * scaleY;
    }
    
    wordCtx.strokeStyle = '#4CAF50';
    wordCtx.lineWidth = 12;
    wordCtx.lineCap = 'round';
    wordCtx.lineJoin = 'round';
    wordCtx.beginPath();
    wordCtx.moveTo(x, y);
}

function drawWord(e) {
    if (!isWordDrawing) return;
    e.preventDefault();
    
    const rect = wordCanvas.getBoundingClientRect();
    const scaleX = wordCanvas.width / rect.width;
    const scaleY = wordCanvas.height / rect.height;
    
    let x, y;
    if (e.type === 'touchmove') {
        x = (e.touches[0].clientX - rect.left) * scaleX;
        y = (e.touches[0].clientY - rect.top) * scaleY;
    } else {
        x = (e.clientX - rect.left) * scaleX;
        y = (e.clientY - rect.top) * scaleY;
    }
    
    wordCtx.lineTo(x, y);
    wordCtx.stroke();
}

function stopWordDrawing(e) {
    if (!isWordDrawing) return;
    e.preventDefault();
    isWordDrawing = false;
}

// Clear Canvas
function clearCanvas() {
    wordCtx.clearRect(0, 0, wordCanvas.width, wordCanvas.height);
}

// Done Button - SIMPLIFIED VERSION (Without OCR)
function wordDone() {
    const word = wordData.words[wordData.currentWord];
    
    // Check if canvas has any drawing
    const imageData = wordCtx.getImageData(0, 0, wordCanvas.width, wordCanvas.height);
    const pixels = imageData.data;
    let pixelCount = 0;
    
    // Count non-transparent pixels
    for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] > 0) { // Alpha channel
            pixelCount++;
        }
    }
    
    console.log('Pixel count:', pixelCount);
    
    if (pixelCount === 0) {
        showWordFeedback("⚠️ ଦୟାକରି ପ୍ରଥମେ ଲେଖନ୍ତୁ!", null);
        return;
    }
    
    // Expected pixel ranges for different word lengths
    const expectedPixels = {
        3: { min: 5000, max: 50000 },   // 3-letter words like CAT, BAT
        4: { min: 8000, max: 60000 },   // 4-letter words
        5: { min: 10000, max: 70000 }   // 5-letter words
    };
    
    const wordLength = word.word.length;
    const range = expectedPixels[wordLength] || expectedPixels[3];
    
    if (pixelCount >= range.min && pixelCount <= range.max) {
        // ✅ LOOKS REASONABLE
        showWordFeedback(`🌟🌟🌟 ଅଭ୍ଯାସ ଜାରି ରଖନ୍ତୁ ।`, () => {
            playWordAudio(word.audio.praise);
        });
        createConfetti();
    } else if (pixelCount < range.min) {
        // ⚠️ TOO LITTLE
        showWordFeedback(`⚠️ ବହୁତ ଛୋଟ ଲେଖିଛନ୍ତି ! ସ୍ପଷ୍ଟ ଭାବରେ ଲେଖନ୍ତୁ ।`, null);
    } else {
        // ⚠️ TOO MUCH
        showWordFeedback(`⚠️ ବହୁତ ବଡ଼ ଲେଖିଛନ୍ତି ! ସ୍ପଷ୍ଟ ଭାବରେ ଲେଖନ୍ତୁ ।`, null);
    }
}

// Show Feedback - UPDATED
function showWordFeedback(message, callback) {
    const feedback = document.getElementById('wordFeedback');
    feedback.innerHTML = message; // Use innerHTML to support formatting
    feedback.style.display = 'block';
    
    // Auto-hide after 4 seconds (longer for reading)
    setTimeout(() => {
        feedback.style.display = 'none';
        if (callback) callback();
    }, 1000);
}

    // Skip Word
function skipWord() {
    if (wordData.currentWord < wordData.words.length - 1) {
        navigateWord(1);
    } else {
        showWordFeedback("🎉 ସମସ୍ତ ଶବ୍ଦ ସମ୍ପୂର୍ଣ୍ଣ!", () => {
            setTimeout(closeWordLearning, 1000);
        });
    }
}
    
// Navigate Between Words
function navigateWord(direction) {
    if (wordAudio) {
        wordAudio.pause();
        wordAudio = null;
    }
    
    wordData.currentWord += direction;
    
    if (wordData.currentWord < 0) {
        wordData.currentWord = 0;
    }
    if (wordData.currentWord >= wordData.words.length) {
        wordData.currentWord = wordData.words.length - 1;
    }
    
    updateWordNavButtons();
    showWordCard();
}

// Update Nav Buttons
function updateWordNavButtons() {
    const backBtn = document.getElementById('wordBackBtn');
    const forwardBtn = document.getElementById('wordForwardBtn');
    
    if (wordData.currentWord === 0) {
        backBtn.disabled = true;
        backBtn.style.opacity = '0.5';
        backBtn.style.cursor = 'not-allowed';
    } else {
        backBtn.disabled = false;
        backBtn.style.opacity = '1';
        backBtn.style.cursor = 'pointer';
    }
    
    if (wordData.currentWord === wordData.words.length - 1) {
        forwardBtn.disabled = true;
        forwardBtn.style.opacity = '0.5';
        forwardBtn.style.cursor = 'not-allowed';
    } else {
        forwardBtn.disabled = false;
        forwardBtn.style.opacity = '1';
        forwardBtn.style.cursor = 'pointer';
    }
}

// Play Audio
function playWordAudio(url, callback) {
    if (wordAudio) {
        wordAudio.pause();
    }
    
    wordAudio = new Audio(url);
    
    wordAudio.onended = () => {
        if (callback) callback();
    };
    
    wordAudio.onerror = () => {
        console.error('Audio failed');
        if (callback) callback();
    };
    
    wordAudio.play().catch(err => {
        console.error('Play failed:', err);
        if (callback) callback();
    });
}


    // Certificate Generation System
let certificateData = {
    studentName: '',
    rollNumber: '',
    examDate: '',
    examDay: '',
    examTime: '',
    className: APP_CONFIG.classCode,
    scores: {
        mcq: { scored: 0, total: 0, percentage: 0 },
        tf: { scored: 0, total: 0, percentage: 0 },
        fib: { scored: 0, total: 0, percentage: 0 },
        matching: { scored: 0, total: 0, percentage: 0 },
        arrange: { scored: 0, total: 0, percentage: 0 }
    },
    totalScored: 0,
    totalMarks: 0,
    overallPercentage: 0
};



// Close Certificate Modal
function closeCertificateModal() {
    document.getElementById('certificateModal').classList.remove('active');
    document.getElementById('certificatePreview').classList.remove('active');
}

function calculateCertificateScores() {
    
    const allZero = Object.values(scores).every(v => v === 0);
    const anyTestCompleted = Object.values(completedTests).some(v => v === true);
    
    // Only restore from localStorage if a test was genuinely completed earlier in this session
    // (prevents stale scores from previous logins/students leaking into a fresh certificate)
    if (allZero && anyTestCompleted) {
        const saved = localStorage.getItem('savedScores');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(scores, parsed);
        }
    }
    
    const sentence = courseData.sentences[currentSentence];
    
    // MCQ
    if (sentence.mcq && sentence.mcq.questions) {
        certificateData.scores.mcq.total = sentence.mcq.questions.length;
        certificateData.scores.mcq.scored = scores.mcq || 0;
        certificateData.scores.mcq.percentage = calculatePercentage(
            certificateData.scores.mcq.scored,
            certificateData.scores.mcq.total
        );
    }
    
    // True/False
    if (sentence.trueFalse && sentence.trueFalse.questions) {
        certificateData.scores.tf.total = sentence.trueFalse.questions.length;
        certificateData.scores.tf.scored = scores.tf || 0;
        certificateData.scores.tf.percentage = calculatePercentage(
            certificateData.scores.tf.scored,
            certificateData.scores.tf.total
        );
    }
    
    // ← ADD THIS MISSING FIB BLOCK
    if (sentence.fillBlanks && sentence.fillBlanks.questions) {
        certificateData.scores.fib.total = sentence.fillBlanks.questions.length;
        certificateData.scores.fib.scored = scores.fib || 0;
        certificateData.scores.fib.percentage = calculatePercentage(
            certificateData.scores.fib.scored,
            certificateData.scores.fib.total
        );
    }
    
    // Matching
    if (sentence.matching && sentence.matching.pairs) {
        certificateData.scores.matching.total = sentence.matching.pairs.length;
        certificateData.scores.matching.scored = scores.matching || 0;
        certificateData.scores.matching.percentage = calculatePercentage(
            certificateData.scores.matching.scored,
            certificateData.scores.matching.total
        );
    }
    
    // Arrange
    if (sentence.arrange && sentence.arrange.questions) {
        certificateData.scores.arrange.total = sentence.arrange.questions.length;
        certificateData.scores.arrange.scored = scores.arrange || 0;
        certificateData.scores.arrange.percentage = calculatePercentage(
            certificateData.scores.arrange.scored,
            certificateData.scores.arrange.total
        );
    }
    
    // Totals
    certificateData.totalMarks = 
        certificateData.scores.mcq.total +
        certificateData.scores.tf.total +
        certificateData.scores.fib.total +
        certificateData.scores.matching.total +
        certificateData.scores.arrange.total;

    certificateData.totalScored = 
        certificateData.scores.mcq.scored +
        certificateData.scores.tf.scored +
        certificateData.scores.fib.scored +
        certificateData.scores.matching.scored +
        certificateData.scores.arrange.scored;
    
    certificateData.overallPercentage = calculatePercentage(
        certificateData.totalScored,
        certificateData.totalMarks
    );
    
    const now = new Date();
    certificateData.examDate = now.toLocaleDateString('en-IN');
    certificateData.examDay = now.toLocaleDateString('en-IN', { weekday: 'long' });
    certificateData.examTime = now.toLocaleTimeString('en-IN');
}

function calculatePercentage(scored, total) {
    if (total === 0) return 0;
    return ((scored / total) * 100).toFixed(2);
}


function generateCertificate() {
    const studentName = document.getElementById('studentName').value.trim() || sessionData.studentName || sessionData.rollNumber || 'ଛାତ୍ର/ଛାତ୍ରୀ';
    const rollNumber = sessionData.rollNumber || 'N/A';
  
    
   
   // Update certificate data
    certificateData.studentName = studentName;
    certificateData.rollNumber = rollNumber;
    
    // Generate certificate HTML - ODIA ONLY, A4 OPTIMIZED
    const certificateHTML = `
        <div class="cert-logo">
            <img src="https://raw.githubusercontent.com/happysangitanms/assets/main/LOGO-1.jpeg" 
                 alt="E-Vidya Academy" 
                 onerror="this.style.display='none'">
        </div>
        
        <div class="cert-title">ସାର୍ଟିଫିକେଟ୍</div>
        <div class="cert-subtitle">ସଫଳତାର ପ୍ରମାଣପତ୍ର</div>
        
   <div class="cert-content">
            <div class="cert-row">
                <span class="cert-label">ଛାତ୍ର/ଛାତ୍ରୀଙ୍କ ନାମ:</span>
                <span class="cert-value">${certificateData.studentName}</span>
            </div>
            
            <div class="cert-row">
                <span class="cert-label">ରୋଲ୍ ନମ୍ବର:</span>
                <span class="cert-value">${certificateData.rollNumber}</span>
            </div>
            
            <div class="cert-row">
                <span class="cert-label">ଶ୍ରେଣୀ/ପାଠ:</span>
                <span class="cert-value">${certificateData.className}</span>
            </div>
            
            <div class="cert-row">
                <span class="cert-label">ପରୀକ୍ଷା ତାରିଖ:</span>
                <span class="cert-value">${certificateData.examDay}, ${certificateData.examDate}</span>
            </div>
            
            <div class="cert-row">
                <span class="cert-label">ପରୀକ୍ଷା ସମୟ:</span>
                <span class="cert-value">${certificateData.examTime}</span>
            </div>
        </div>
        
        <div class="marksheet-section">
            <div class="marksheet-title">📊 ମାର୍କଶୀଟ୍</div>
            
            <table class="marksheet-table">
                <thead>
                    <tr>
                        <th>ପରୀକ୍ଷା ବିଭାଗ</th>
                        <th>ପାଇଥିବା</th>
                        <th>ସମୁଦାୟ</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ବିକଳ୍ପଯୁକ୍ତ ପ୍ରଶ୍ନ</td>
                        <td>${certificateData.scores.mcq.scored}</td>
                        <td>${certificateData.scores.mcq.total}</td>
                        <td>${certificateData.scores.mcq.percentage}%</td>
                    </tr>
                  <!-- AFTER (with fib row added): -->
<tr>
    <td>ସତ୍ୟ/ମିଥ୍ୟା</td>
    <td>${certificateData.scores.tf.scored}</td>
    <td>${certificateData.scores.tf.total}</td>
    <td>${certificateData.scores.tf.percentage}%</td>
</tr>
<tr>
    <td>ଶୂନ୍ୟସ୍ଥାନ ପୂରଣ</td>
    <td>${certificateData.scores.fib.scored}</td>
    <td>${certificateData.scores.fib.total}</td>
    <td>${certificateData.scores.fib.percentage}%</td>
</tr>
<tr>
    <td>ମେଳ କରିବା</td>
                        <td>${certificateData.scores.matching.scored}</td>
                        <td>${certificateData.scores.matching.total}</td>
                        <td>${certificateData.scores.matching.percentage}%</td>
                    </tr>
                    <tr>
                        <td>ସଜାଇବା</td>
                        <td>${certificateData.scores.arrange.scored}</td>
                        <td>${certificateData.scores.arrange.total}</td>
                        <td>${certificateData.scores.arrange.percentage}%</td>
                    </tr>
                    <tr class="total-row">
                        <td><strong>ସମୁଦାୟ</strong></td>
                        <td><strong>${certificateData.totalScored}</strong></td>
                        <td><strong>${certificateData.totalMarks}</strong></td>
                        <td><strong>${certificateData.overallPercentage}%</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="cert-footer">
    <div class="cert-date">
        ପ୍ରଦାନ ତାରିଖ: ${certificateData.examDate}
    </div>
    
    <div class="cert-branding">
        <strong>ଇ-ବିଦ୍ୟା ଏକାଡେମି</strong>
        <small>Digital Education Platform • Bhadrak, Odisha</small>
        <small>© 2026 E-Vidya Academy • For Educational Use Only</small>
    </div>
</div>
        
    <div class="download-buttons">
            <button class="download-btn download-pdf" onclick="downloadCertificateAsPDF()">
                📄 PDF ଡାଉନଲୋଡ୍
            </button>
            <button class="download-btn share-whatsapp" onclick="shareCertificateOnWhatsApp()" style="background:#25D366;color:white;">
                📤 WhatsApp ରେ ସେୟାର୍
            </button>
        </div>

        <button onclick="closeCertificateModal()" style="
            width: 100%;
            margin-top: 10px;
            padding: 14px;
            background: linear-gradient(135deg, #6b7280 0%, #374151 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        ">
            ✕ ବନ୍ଦ କରନ୍ତୁ
        </button>
    `;
    
    // Display certificate
    const preview = document.getElementById('certificatePreview');
    preview.innerHTML = certificateHTML;
    preview.classList.add('active');
    
    // Scroll to certificate
    setTimeout(() => {
        preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}
    
function downloadCertificateAsPDF() {
    const certificate = document.getElementById('certificatePreview');
    const buttons = document.querySelector('.download-buttons');
    
    if (!certificate) return;
    
    // Hide buttons
    if (buttons) buttons.style.display = 'none';
    
    // Show loading
    const loadingMsg = document.createElement('div');
    loadingMsg.id = 'pdfLoadingMsg';
    loadingMsg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.3); z-index: 999999; font-weight: bold;';
    loadingMsg.textContent = '📄 PDF ତିଆରି ହେଉଛି...';
    document.body.appendChild(loadingMsg);
    
    // Check if html2canvas is available
    if (typeof html2canvas === 'undefined') {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', () => {
            checkJsPDFAndGenerate(certificate, buttons, loadingMsg);
        });
    } else {
        checkJsPDFAndGenerate(certificate, buttons, loadingMsg);
    }
}

function checkJsPDFAndGenerate(certificate, buttons, loadingMsg) {
    if (typeof jspdf === 'undefined' && typeof window.jspdf === 'undefined') {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', () => {
            generatePDFFromHTML(certificate, buttons, loadingMsg);
        });
    } else {
        generatePDFFromHTML(certificate, buttons, loadingMsg);
    }
}

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    script.onerror = () => {
        alert('ଲାଇବ୍ରେରୀ ଲୋଡ୍ ବିଫଳ ହେଲା');
        const loadingMsg = document.getElementById('pdfLoadingMsg');
        if (loadingMsg) loadingMsg.remove();
    };
    document.head.appendChild(script);
}

function generatePDFFromHTML(element, buttons, loadingMsg) {
    const logoImg = element.querySelector('.cert-logo img');
    
    const captureAndConvert = () => {
        html2canvas(element, {
            scale: 3,
            backgroundColor: '#ffffff',
            logging: false,
            useCORS: true,
            allowTaint: true,
            foreignObjectRendering: false,
            imageTimeout: 0,
            onclone: function(clonedDoc) {
                const clonedLogo = clonedDoc.querySelector('.cert-logo img');
                if (clonedLogo) {
                    clonedLogo.style.display = 'block';
                }
            }
        }).then(canvas => {
            try {
                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                const { jsPDF } = window.jspdf || window;
                
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = imgHeight / imgWidth;
                
                const pdfWidth = 210;
                const pdfHeight = pdfWidth * ratio;
                
                const pdf = new jsPDF({
                    orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
                    unit: 'mm',
                    format: [pdfWidth, pdfHeight]
                });
                
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                
                const fileName = `Certificate_${certificateData.studentName.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
                pdf.save(fileName);
                
                if (loadingMsg && loadingMsg.parentNode) {
                    loadingMsg.remove();
                }
                
                const successMsg = document.createElement('div');
                successMsg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #4CAF50; color: white; padding: 15px 25px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.3); z-index: 999999; font-weight: bold;';
                successMsg.textContent = '✅ PDF ଡାଉନଲୋଡ୍ ସଫଳ!';
                document.body.appendChild(successMsg);
                
                setTimeout(() => {
                    successMsg.remove();
                }, 2000);
                
            } catch (err) {
                console.error('PDF generation error:', err);
                alert('PDF ତିଆରିରେ ସମସ୍ୟା');
            } finally {
                if (buttons) buttons.style.display = 'grid';
            }
        }).catch(err => {
            console.error('Canvas error:', err);
            if (loadingMsg && loadingMsg.parentNode) {
                loadingMsg.remove();
            }
            alert('PDF ତିଆରିରେ ସମସ୍ୟା');
            if (buttons) buttons.style.display = 'grid';
        });
    };
    
    if (logoImg && !logoImg.complete) {
        logoImg.onload = () => {
            setTimeout(captureAndConvert, 300);
        };
        logoImg.onerror = captureAndConvert;
        
        const currentSrc = logoImg.src;
        logoImg.src = '';
        logoImg.src = currentSrc;
    } else {
        setTimeout(captureAndConvert, 300);
    }
}


    // ============================================
// SHARE CERTIFICATE ON WHATSAPP (TEXT ONLY)
// ============================================
function shareCertificateOnWhatsApp() {
    const phone = '916372296357';

    const message =
        `🏆 *ସାର୍ଟିଫିକେଟ୍ ଓ ମାର୍କଶୀଟ୍*\n\n` +
        `👤 ନାମ: ${certificateData.studentName}\n` +
        `🆔 ରୋଲ୍ ନମ୍ବର: ${certificateData.rollNumber}\n` +
        `📘 ଶ୍ରେଣୀ/ପାଠ: ${certificateData.className}\n` +
        `📅 ପରୀକ୍ଷା ତାରିଖ: ${certificateData.examDay}, ${certificateData.examDate}\n` +
        `⏰ ପରୀକ୍ଷା ସମୟ: ${certificateData.examTime}\n\n` +
        `📊 *ମାର୍କଶୀଟ୍:*\n` +
        `▪️ ବିକଳ୍ପଯୁକ୍ତ ପ୍ରଶ୍ନ: ${certificateData.scores.mcq.scored}/${certificateData.scores.mcq.total} (${certificateData.scores.mcq.percentage}%)\n` +
        `▪️ ସତ୍ୟ/ମିଥ୍ୟା: ${certificateData.scores.tf.scored}/${certificateData.scores.tf.total} (${certificateData.scores.tf.percentage}%)\n` +
        `▪️ ଶୂନ୍ୟସ୍ଥାନ ପୂରଣ: ${certificateData.scores.fib.scored}/${certificateData.scores.fib.total} (${certificateData.scores.fib.percentage}%)\n` +
        `▪️ ମେଳ କରିବା: ${certificateData.scores.matching.scored}/${certificateData.scores.matching.total} (${certificateData.scores.matching.percentage}%)\n` +
        `▪️ ସଜାଇବା: ${certificateData.scores.arrange.scored}/${certificateData.scores.arrange.total} (${certificateData.scores.arrange.percentage}%)\n\n` +
        `✅ *ସମୁଦାୟ: ${certificateData.totalScored}/${certificateData.totalMarks} (${certificateData.overallPercentage}%)*\n\n` +
        `🌹 ଇ-ବିଦ୍ୟା ଏକାଡେମି`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}
    

// Print styles for PDF
const printStyles = document.createElement('style');
printStyles.textContent = `
    @media print {
        body * {
            visibility: hidden;
        }
        
        #certificatePreview,
        #certificatePreview * {
            visibility: visible;
        }
        
        #certificatePreview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
        }
        
        .download-buttons {
            display: none !important;
        }
    }
`;
document.head.appendChild(printStyles);

    function toggleMedia(type) {
    const logoDisplay   = document.getElementById('logoDisplay');
    const audioDisplay  = document.getElementById('audioDisplay');
    const audioDisplay3 = document.getElementById('audioDisplay3');
    const videoDisplay  = document.getElementById('videoDisplay');

    const videoIframe   = document.getElementById('videoIframe');

    const audioBtn      = document.getElementById('audioToggleBtn');
    const audioBtn2     = document.getElementById('audioToggleBtn2');
    const audioBtn3     = document.getElementById('audioToggleBtn3');
    const videoBtn      = document.getElementById('videoToggleBtn');

    const resetAllBtnStyles = () => {
        [audioBtn, audioBtn2, audioBtn3, videoBtn].forEach(b => {
            if (b) b.style.background = 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)';
        });
    };

    const hideAll = () => {
        videoIframe.src = '';

        const ap  = document.getElementById('audioPlayer');
        const ap2 = document.getElementById('audioPlayer2');
        const ap3 = document.getElementById('audioPlayer3');
        if (ap)  { ap.pause();  ap.currentTime  = 0; }
        if (ap2) { ap2.pause(); ap2.currentTime = 0; }
        if (ap3) { ap3.pause(); ap3.currentTime = 0; }

        audioDisplay.style.display  = 'none';
        audioDisplay3.style.display = 'none';
        videoDisplay.style.display  = 'none';

        logoDisplay.style.display = 'block';

        resetAllBtnStyles();
    };

    if (type === 'audio') {
        if (audioDisplay.style.display === 'flex') { hideAll(); return; }
        hideAll();
        logoDisplay.style.display  = 'none';
        audioDisplay.style.display = 'flex';
        const ap = document.getElementById('audioPlayer');
        if (ap) ap.play();
        audioBtn.style.background = 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)';
    }


    if (type === 'audio3') {
        if (audioDisplay3.style.display === 'flex') { hideAll(); return; }
        hideAll();
        logoDisplay.style.display   = 'none';
        audioDisplay3.style.display = 'flex';
        const ap3 = document.getElementById('audioPlayer3');
        if (ap3) ap3.play();
        audioBtn3.style.background = 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)';
    }

    if (type === 'video') {
        if (videoDisplay.style.display === 'block') { hideAll(); return; }
        hideAll();
        logoDisplay.style.display  = 'none';
        videoDisplay.style.display = 'block';
        videoIframe.src = videoIframe.dataset.src;
        videoBtn.style.background = 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)';
    }
}



function formatAudioTime(sec) {
    if (!isFinite(sec) || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function initCustomAudioPlayer(idSuffix) {
    const audio = document.getElementById(`audioPlayer${idSuffix}`);
    const seek = document.getElementById(`audioPlayer${idSuffix}Seek`);
    const curEl = document.getElementById(`audioPlayer${idSuffix}Cur`);
    const durEl = document.getElementById(`audioPlayer${idSuffix}Dur`);
    const playPauseBtn = document.getElementById(`audioPlayer${idSuffix}PlayPause`);
    const back10Btn = document.getElementById(`audioPlayer${idSuffix}Back10`);
    const fwd10Btn = document.getElementById(`audioPlayer${idSuffix}Fwd10`);

    if (!audio || audio.dataset.customInit === 'true') return;
    audio.dataset.customInit = 'true';

    let isSeeking = false;

    audio.addEventListener('loadedmetadata', () => {
        seek.max = audio.duration || 0;
        durEl.textContent = formatAudioTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        if (isSeeking) return;
        seek.value = audio.currentTime;
        curEl.textContent = formatAudioTime(audio.currentTime);
    });

    audio.addEventListener('play', () => { playPauseBtn.textContent = '⏸️'; });
    audio.addEventListener('pause', () => { playPauseBtn.textContent = '▶️'; });
    audio.addEventListener('ended', () => { playPauseBtn.textContent = '▶️'; });

    seek.addEventListener('input', () => {
        isSeeking = true;
        curEl.textContent = formatAudioTime(parseFloat(seek.value));
    });

    seek.addEventListener('change', () => {
        audio.currentTime = parseFloat(seek.value);
        isSeeking = false;
    });

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) audio.play(); else audio.pause();
    });

    back10Btn.addEventListener('click', () => {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
    });

    fwd10Btn.addEventListener('click', () => {
        audio.currentTime = Math.min(audio.duration || audio.currentTime + 10, audio.currentTime + 10);
    });
}

// Initialize both players once, on page load
window.addEventListener('DOMContentLoaded', () => {
    initCustomAudioPlayer('');   // audioPlayer
    initCustomAudioPlayer('3');  // audioPlayer3
});


    
// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('audioPlayerSrc').src = MEDIA_CONFIG.audio1;
      document.getElementById('audioPlayer').load();
      document.getElementById('audioPlayer3Src').src = MEDIA_CONFIG.audio3;
      document.getElementById('audioPlayer3').load();
      document.getElementById('videoIframe').dataset.src = MEDIA_CONFIG.video;
    const savedRoll = localStorage.getItem('userRollNumber');
    if (savedRoll) {
        document.getElementById('rollNumberInput').value = savedRoll;
    }
   // Save roll number when login button is clicked
document.getElementById('loginBtn').addEventListener('click', function() {
    const rollNumber = document.getElementById('rollNumberInput').value;
    if (rollNumber) {
        localStorage.setItem('userRollNumber', rollNumber);
    }
}); 

setTimeout(() => {
    const img = document.getElementById('welcomeRoundImg');
    if (img) img.src = 'https://raw.githubusercontent.com/happysangitanms/assets/main/ChatGPT%20Image%20May%204%2C%202026%2C%2010_10_54%20PM.png';
}, 10000);

    
// Initialize welcome screen with handwriting animation
    setTimeout(() => {
        const welcomeText = "🌹ଇ-ବିଦ୍ୟା ଏକାଡେମି ଦ୍ଵାରା ପ୍ରସ୍ତୁତ🌹<br>ଏହି ସ୍ଵତନ୍ତ୍ର କ୍ଲାସ୍ ରେ ଆପଣଙ୍କୁ ସ୍ଵାଗତ ।";
        const welcomeDiv = document.getElementById('welcomeExplanation');
        if (welcomeDiv) {
            triggerHandwritingForWelcome(welcomeText);
        }
    }, 1000);
});

// Cleanup audio when leaving page
window.addEventListener('beforeunload', () => {
    stopAudioCompletely();
});

// Cleanup audio when page becomes hidden
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAudioCompletely();
    }
});

// Cleanup audio on page navigation
window.addEventListener('pagehide', () => {
    stopAudioCompletely();
});

function openMermaidModal() {
    const modal = document.getElementById('mermaidModal');
    const content = document.getElementById('mermaidModalContent');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    const sentence = courseData.sentences[currentSentence];
    const graphs = Array.isArray(sentence.mermaid) ? sentence.mermaid : [sentence.mermaid];
    const total = graphs.length;

    function renderGraphSlide(idx) {
        const diagramId = `mermaid-graph-${Date.now()}-${idx}`;
        
        const dotsHTML = graphs.map((_, i) => `
            <div onclick="window.mermaidGoTo(${i})"
                 style="width:${i===idx?'20px':'8px'}; height:8px; border-radius:4px;
                        background:${i===idx?'#667eea':'#ccc'}; 
                        cursor:pointer; transition:all .3s; flex-shrink:0;"></div>
        `).join('');

        content.innerHTML = `
            <div style="text-align:center; color:#667eea; font-weight:700; 
                        font-size:13px; margin-bottom:8px;">
                ଚିତ୍ର ${idx + 1} / ${total}
            </div>

            <div style="background:#e0e0e0; border-radius:10px; 
                        height:6px; margin-bottom:12px;">
                <div style="background:linear-gradient(90deg,#667eea,#764ba2); 
                            width:${((idx+1)/total)*100}%; height:100%; 
                            border-radius:10px; transition:width .3s;"></div>
            </div>

            <div style="display:flex; justify-content:space-between; 
                        align-items:center; margin-bottom:16px; gap:10px;">
                <button onclick="window.mermaidGoTo(${idx - 1})"
                    ${idx === 0 ? 'disabled' : ''}
                    style="flex:1; max-width:110px; padding:12px; 
                           background:${idx === 0 ? '#e0e0e0' : 'linear-gradient(135deg,#667eea,#764ba2)'}; 
                           color:${idx === 0 ? '#999' : 'white'}; border:none; 
                           border-radius:10px; font-size:14px; font-weight:700; 
                           cursor:${idx === 0 ? 'not-allowed' : 'pointer'};">
                    ⬅ ପଛ
                </button>

                <div style="display:flex; gap:6px; align-items:center; 
                            flex-wrap:wrap; justify-content:center; flex:1;">
                    ${dotsHTML}
                </div>

                <button onclick="window.mermaidGoTo(${idx + 1})"
                    ${idx === total - 1 ? 'disabled' : ''}
                    style="flex:1; max-width:110px; padding:12px; 
                           background:${idx === total-1 ? '#e0e0e0' : 'linear-gradient(135deg,#667eea,#764ba2)'}; 
                           color:${idx === total-1 ? '#999' : 'white'}; border:none; 
                           border-radius:10px; font-size:14px; font-weight:700; 
                           cursor:${idx === total-1 ? 'not-allowed' : 'pointer'};">
                    ଆଗ ➡
                </button>
            </div>

            <div style="overflow-x:auto; position:relative;">
                <div id="${diagramId}" class="mermaid" 
                     style="visibility:hidden;">${graphs[idx]}</div>
            </div>
        `;

        function tryRenderMermaid(attempts) {
            const el = document.getElementById(diagramId);

            if (!el) {
                if (attempts < 10) {
                    setTimeout(() => tryRenderMermaid(attempts + 1), 200);
                }
                return;
            }

            mermaid.run({ nodes: [el] }).then(() => {
                el.style.visibility = 'visible';

                const svg = el.querySelector('svg');
                if (svg) {
                    svg.removeAttribute('width');
                    svg.removeAttribute('height');

                    const vb = svg.getAttribute('viewBox');
                    if (vb) {
                        const parts = vb.split(/[\s,]+/);
                        const vbW = parseFloat(parts[2]);
                        const vbH = parseFloat(parts[3]);
                        const containerW = el.parentElement.offsetWidth || window.innerWidth - 32;
                        const scale = containerW / vbW;
                        const scaledH = vbH * scale;
                        svg.style.width = containerW + 'px';
                        svg.style.height = scaledH + 'px';
                        svg.style.display = 'block';
                    } else {
                        svg.style.width = '100%';
                        svg.style.height = 'auto';
                        svg.style.display = 'block';
                    }
                }

            }).catch(() => {
                if (attempts < 3) {
                    setTimeout(() => tryRenderMermaid(attempts + 1), 400);
                    return;
                }

                // Fallback HTML renderer
                const rawText = graphs[idx];
                const nodeLabels = {};
                const childMap = {};

                rawText.split('\n').forEach(line => {
                    const t = line.trim();
                    if (!t || t.startsWith('%%') || t.startsWith('graph') ||
                        t.startsWith('flowchart') || t.startsWith('classDef') || 
                        t.startsWith('class ') || t.startsWith('linkStyle')) return;

                    const labelMatches = t.match(/(\w+)\[["<]?([^\]"]+)[">\]?]?\]/g);
                    if (labelMatches) {
                        labelMatches.forEach(m => {
                            const parts = m.match(/(\w+)\[["<]?([^\]"]+)[">\]?]?\]/);
                            if (parts) nodeLabels[parts[1]] = parts[2];
                        });
                    }

                    const arrowMatch = t.match(/^(\w+)\s*-->\s*(\w+)/);
                    if (arrowMatch) {
                        const from = arrowMatch[1], to = arrowMatch[2];
                        if (!childMap[from]) childMap[from] = [];
                        childMap[from].push(to);
                    }
                });

                const allChildren = new Set(Object.values(childMap).flat());
                const allNodes = new Set([...Object.keys(childMap), ...allChildren]);
                const root = [...allNodes].find(n => !allChildren.has(n)) || [...allNodes][0];

                function getStyle(nodeId) {
                    const label = nodeLabels[nodeId] || '';
                    if (nodeId === root) return 'background:#FFE082;border:2.5px solid #FF6F00;color:#e65100;font-weight:bold;';
                    if (label.includes('🟡')) return 'background:#1E88E5;border:2px solid #1565C0;color:white;font-weight:bold;';
                    if (label.includes('🟢')) return 'background:#2E7D32;border:2px solid #1b5e20;color:white;font-weight:bold;';
                    if (label.includes('🔵')) return 'background:#C2185B;border:2px solid #880e4f;color:white;font-weight:bold;';
                    if (nodeId.startsWith('I')) return 'background:#BBDEFB;border:2px solid #1E88E5;color:#0d47a1;';
                    if (nodeId.startsWith('M')) return 'background:#C8E6C9;border:2px solid #2E7D32;color:#1b5e20;';
                    if (nodeId.startsWith('C')) return 'background:#F8BBD0;border:2px solid #C2185B;color:#880e4f;';
                    return 'background:#FFF9C4;border:2px solid #F9A825;color:#333;';
                }

                function renderCleanLR(nodeId) {
                    const rows = [];
                    function walk(id, depth) {
                        rows.push({ id, depth });
                        (childMap[id] || []).forEach(k => walk(k, depth + 1));
                    }
                    walk(nodeId, 0);

                    const html = rows.map(({ id, depth }) => {
                        const label = nodeLabels[id] || id;
                        const style = getStyle(id);
                        const indent = depth * 30;
                        return `
                            <div style="display:flex; align-items:center; margin:5px 0; padding-left:${indent}px;">
                                ${depth > 0 ? `<div style="width:24px; height:2px; background:#bbb; flex-shrink:0; margin-right:6px;"></div>` : ''}
                                <div style="${style} border-radius:10px; padding:8px 14px; font-size:13px; 
                                            word-break:break-word; box-shadow:0 2px 6px rgba(0,0,0,0.12);
                                            line-height:1.5; min-width:60px;">
                                    ${label}
                                </div>
                            </div>
                        `;
                    }).join('');

                    return `<div style="background:#f4f4ff; border-radius:14px; padding:16px 12px; overflow-x:auto;">${html}</div>`;
                }

                const fallbackEl = document.getElementById(diagramId);
                if (fallbackEl) fallbackEl.outerHTML = renderCleanLR(root);
            });
        }

        tryRenderMermaid(0);
    }

    window.mermaidGoTo = function(idx) {
        if (idx < 0 || idx >= total) return;
        renderGraphSlide(idx);
    };

    content.innerHTML = `
        <div style="text-align:center; padding:40px;">
            <div style="display:inline-block; width:50px; height:50px; 
                        border:5px solid #f3f3f3; border-top:5px solid #667eea; 
                        border-radius:50%; animation:spin 1s linear infinite;"></div>
            <p style="margin-top:20px; color:#667eea; font-weight:600;">
                ଚିତ୍ର ଲୋଡ ହେଉଛି...
            </p>
        </div>`;

    setTimeout(() => renderGraphSlide(0), 800);
}

function addMermaidSwipe(currentIdx, total) {
    // swipe disabled
}

function closeMermaidModal() {
    document.getElementById('mermaidModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

        // ============================================
// UNIVERSAL PDF SLIDESHOW
// Works for ANY PDF from Google Drive
// Just change PDF_FILE_ID for each lesson!
// ============================================


let bookCur = 0;
let bookPdfDoc = null;
let bookRendering = false;
let bookTouchX = 0, bookDragX = 0, bookDragging = false;
let bookZoom = 1;

function applyBookZoom() {
    const canvas = document.getElementById('bookCanvas');
    if (!canvas || !canvas.dataset.baseW) return;
    canvas.style.width  = (+canvas.dataset.baseW * bookZoom) + 'px';
    canvas.style.height = (+canvas.dataset.baseH * bookZoom) + 'px';
}

function resetBookZoom() {
    bookZoom = 1;
    applyBookZoom();
    const w = document.getElementById('bookCanvasWrapper');
    if (w) { w.scrollLeft = 0; w.scrollTop = 0; }
}
    
let pdfJsLoaded = false;

function loadPdfJs(callback) {
    if (pdfJsLoaded) { callback(); return; }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        pdfJsLoaded = true;
        callback();
    };
    script.onerror = () => {
        document.getElementById('bookLoadingMsg').textContent = '⚠️ ଇଣ୍ଟର୍ନେଟ ଯାଞ୍ଚ କରନ୍ତୁ';
    };
    document.head.appendChild(script);
}

function openBookSlideshow() {
    stopAudioCompletely();
    const modal = document.getElementById('bookModal');
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    document.body.style.overflow = 'hidden';
    showBookLoading(true, 'PDF ଲୋଡ ହେଉଛି...');

    loadPdfJs(() => {
        if (bookPdfDoc) {
            buildBookDots();
            bookGoTo(bookCur);
            return;
        }
       pdfjsLib.getDocument({
    url: PDF_URL,
    cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
    cMapPacked: true,
    withCredentials: false
    // remove httpHeaders entirely
}).promise.then(pdf => {
            bookPdfDoc = pdf;
            const total = pdf.numPages;
            document.getElementById('bookTitle').textContent = '📖 ପୁସ୍ତକ (' + total + ' ପୃଷ୍ଠା)';
            buildBookDots();
            bookGoTo(0);
        }).catch(err => {
            console.error('PDF load error:', err);
            showBookLoading(true, '⚠️ PDF ଲୋଡ ହେଲା ନାହିଁ');
        });
    });

    addBookSwipe();
}

function closeBookSlideshow() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function buildBookDots() {
    const dotsEl = document.getElementById('bookDots');
    dotsEl.innerHTML = '';
    const total = bookPdfDoc.numPages;
    for (let i = 0; i < total; i++) {
        const d = document.createElement('button');
        d.textContent = i + 1;
        d.style.cssText = 'min-width:24px;height:24px;border-radius:6px;background:rgba(255,255,255,.15);color:rgba(255,255,255,.6);border:none;cursor:pointer;font-size:10px;font-weight:700;transition:all .2s;flex-shrink:0;padding:0 4px;';
        d.onclick = () => bookGoTo(i);
        dotsEl.appendChild(d);
    }
}


function pageFlipAnimation(direction, renderCallback) {
    const wrapper = document.getElementById('bookCanvasWrapper');
    const canvas  = document.getElementById('bookCanvas');

    // If no page rendered yet, just render directly
    if (!canvas || !canvas.dataset.baseW || canvas.style.display === 'none') {
        renderCallback();
        return;
    }

    // Capture current page as image
    let snapshot;
    try {
        snapshot = canvas.toDataURL('image/jpeg', 0.85);
    } catch(e) {
        renderCallback(); // CORS fallback — skip animation
        return;
    }

    const cW     = canvas.offsetWidth  || +canvas.dataset.baseW;
    const cH     = canvas.offsetHeight || +canvas.dataset.baseH;
    const isNext = direction > 0;

    // ── Full-area overlay ──────────────────────────────────────
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position:absolute; inset:0;
        z-index:30; pointer-events:none;
        display:flex; align-items:center; justify-content:center;
        overflow:hidden;
    `;

    // ── Perspective container sized to the page ────────────────
    const persp = document.createElement('div');
    persp.style.cssText = `
        width:${cW}px; height:${cH}px;
        perspective:1800px;
        position:relative; flex-shrink:0;
    `;

    // ── The turning page ───────────────────────────────────────
    const page = document.createElement('div');
    page.style.cssText = `
        width:100%; height:100%;
        transform-style:preserve-3d;
        transform-origin:${isNext ? 'left center' : 'right center'};
        transition:transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        will-change:transform;
        position:relative;
    `;

    // Front face — snapshot of the OLD page
    const front = document.createElement('img');
    front.src = snapshot;
    front.style.cssText = `
        position:absolute; width:100%; height:100%;
        object-fit:fill;
        backface-visibility:hidden;
        -webkit-backface-visibility:hidden;
        background:#fff;
        border-radius:2px;
    `;

    // Fold shadow that brightens as page turns
    const shadow = document.createElement('div');
    shadow.style.cssText = `
        position:absolute; width:100%; height:100%;
        backface-visibility:hidden;
        -webkit-backface-visibility:hidden;
        background:${isNext
            ? 'linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 40%)'
            : 'linear-gradient(to left,  rgba(0,0,0,0.25) 0%, transparent 40%)'};
        opacity:0;
        transition:opacity 0.65s ease;
        z-index:1; border-radius:2px;
    `;

    // Back face — slight off-white (new page already renders behind overlay)
    const back = document.createElement('div');
    back.style.cssText = `
        position:absolute; width:100%; height:100%;
        backface-visibility:hidden;
        -webkit-backface-visibility:hidden;
        transform:rotateY(180deg);
        background:#f0f0f0;
        border-radius:2px;
        box-shadow:${isNext ? '6px' : '-6px'} 0 18px rgba(0,0,0,0.2);
    `;

    // ── Assemble ───────────────────────────────────────────────
    page.appendChild(front);
    page.appendChild(shadow);
    page.appendChild(back);
    persp.appendChild(page);
    overlay.appendChild(persp);
    wrapper.appendChild(overlay);

    // Render the NEW page on the canvas behind the overlay
    renderCallback();

    // Trigger the flip on next paint
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            page.style.transform = isNext ? 'rotateY(-180deg)' : 'rotateY(180deg)';
            shadow.style.opacity = '1';
        });
    });

    // Remove overlay once animation finishes
    setTimeout(() => overlay.remove(), 720);
}

    
function bookGoTo(n) {
    if (!bookPdfDoc || bookRendering) return;
    const total = bookPdfDoc.numPages;
    
    // ← NEW: stop if n is already out of bounds (last page → next, first page → prev)
    if (n < 0 || n >= total) return;
    
    const direction = n - bookCur;
    bookZoom = 1;
    bookCur  = Math.max(0, Math.min(total - 1, n));

    document.getElementById('bookPageLabel').textContent = 'ପୃଷ୍ଠା ' + (bookCur+1) + ' / ' + total;
    document.getElementById('bookPageNum').textContent   = (bookCur+1) + ' / ' + total;
    document.getElementById('bookProgress').style.width  = ((bookCur+1)/total*100) + '%';
    document.getElementById('bookPrev').disabled = bookCur === 0;
    document.getElementById('bookNext').disabled = bookCur === total - 1;

    document.querySelectorAll('#bookDots button').forEach((d, i) => {
        const active = i === bookCur;
        d.style.background = active ? '#f59e0b' : 'rgba(255,255,255,.15)';
        d.style.color      = active ? '#000'    : 'rgba(255,255,255,.6)';
        d.style.transform  = active ? 'scale(1.2)' : 'scale(1)';
    });
    const activeDot = document.querySelectorAll('#bookDots button')[bookCur];
    if (activeDot) activeDot.scrollIntoView({inline:'center', behavior:'smooth'});

    // ← Page-turn animation wraps the render call
    pageFlipAnimation(direction, () => renderBookPage(bookCur + 1));
}

function renderBookPage(pageNum) {
    bookRendering = true;
    showBookLoading(true, 'ପୃଷ୍ଠା ' + pageNum + ' ଲୋଡ ହେଉଛି...');

    bookPdfDoc.getPage(pageNum).then(page => {
        const wrapper = document.getElementById('bookCanvasWrapper');
        const canvas  = document.getElementById('bookCanvas');
        const ctx     = canvas.getContext('2d');

        const wrapW = wrapper.clientWidth  || window.innerWidth;
        const wrapH = wrapper.clientHeight || (window.innerHeight - 180);

        const vp0    = page.getViewport({ scale: 1 });
        const scaleW = (wrapW - 8)  / vp0.width;
        const scaleH = (wrapH - 16) / vp0.height;
        const scale  = Math.min(scaleW, scaleH);   // ← fits BOTH portrait & landscape fully

        const vp = page.getViewport({ scale });

      canvas.width  = vp.width;
canvas.height = vp.height;
canvas.dataset.baseW   = vp.width;   // ← store for zoom
canvas.dataset.baseH   = vp.height;  // ← store for zoom
canvas.style.display   = 'block';
canvas.style.width     = vp.width + 'px';
canvas.style.height    = vp.height + 'px';
canvas.style.maxWidth  = 'none';
canvas.style.maxHeight = 'none';
canvas.style.margin    = '0 auto';

wrapper.scrollLeft = 0;
wrapper.scrollTop  = 0;

        page.render({ canvasContext: ctx, viewport: vp }).promise.then(() => {
            showBookLoading(false);
            bookRendering = false;
        });
    }).catch(() => {
        showBookLoading(true, '⚠️ ପୃଷ୍ଠା ଲୋଡ ହେଲା ନାହିଁ');
        bookRendering = false;
    });
}
    
function showBookLoading(show, msg) {
    document.getElementById('bookLoading').style.display = show ? 'flex' : 'none';
    document.getElementById('bookCanvas').style.display  = show ? 'none' : 'block';
    if (msg) document.getElementById('bookLoadingMsg').textContent = msg;
}


function addBookSwipe() {
    const wrapper = document.getElementById('bookCanvasWrapper');
    let startX = 0, startY = 0, diffX = 0;
    let pinchDist0 = 0, pinchZoom0 = 1;
    let isPinching = false;
    let lastTap = 0;

    function pinchDist(t) {
        return Math.hypot(
            t[0].clientX - t[1].clientX,
            t[0].clientY - t[1].clientY
        );
    }

    wrapper.addEventListener('touchstart', e => {
        if (e.touches.length === 2) {
            // — Pinch start —
            isPinching  = true;
            pinchDist0  = pinchDist(e.touches);
            pinchZoom0  = bookZoom;
            e.preventDefault();

        } else if (e.touches.length === 1) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            diffX  = 0;

            // — Double-tap resets zoom —
            const now = Date.now();
            if (now - lastTap < 280 && bookZoom > 1.05) {
                resetBookZoom();
                e.preventDefault();
            }
            lastTap = now;
        }
    }, { passive: false });

    wrapper.addEventListener('touchmove', e => {
        if (e.touches.length === 2 && isPinching) {
            // — Pinch zoom —
            const ratio = pinchDist(e.touches) / pinchDist0;
            bookZoom = Math.max(1, Math.min(4, pinchZoom0 * ratio));
            applyBookZoom();
            e.preventDefault();

        } else if (e.touches.length === 1 && bookZoom <= 1) {
            // — Horizontal swipe for page navigation (only at zoom=1) —
            diffX = e.touches[0].clientX - startX;
            const diffY = e.touches[0].clientY - startY;
            if (Math.abs(diffX) > Math.abs(diffY) + 5) {
                e.preventDefault();
            }
        }
        // When zoomed > 1: do nothing — native scroll handles panning
    }, { passive: false });

    wrapper.addEventListener('touchend', e => {
        if (isPinching) {
            isPinching = false;
            if (bookZoom < 1.1) resetBookZoom(); // snap back if barely zoomed
            return;
        }
        // Page swipe only at normal zoom
        if (bookZoom <= 1 && Math.abs(diffX) > 60) {
            if (diffX < 0) bookGoTo(bookCur + 1);
            else           bookGoTo(bookCur - 1);
        }
        diffX = 0;
    }, { passive: true });
}

      let sCur = 0, sTouchX = 0, sDragX = 0, sDragging = false;

function openSlides() {
    stopAudioCompletely();
    buildSlideContent();
    const m = document.getElementById('slideModal');
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    goTo(0);
    addSlideSwipe();
}

function closeSlides() {
    document.getElementById('slideModal').style.display = 'none';
    document.body.style.overflow = '';
}

function buildSlideContent() {
    const track = document.getElementById('slidesTrack');
    const dots  = document.getElementById('sDots');
    track.innerHTML = '';
    dots.innerHTML  = '';

    topicsData.forEach((t, i) => {
        const slide = document.createElement('div');
        slide.style.cssText = 'min-width:100%; height:100%; overflow-y:auto; -webkit-overflow-scrolling:touch; padding:12px 12px 120px; display:flex; flex-direction:column; gap:10px;';

        let html = `<div style="text-align:center; font-size:11px; color:rgba(255,255,255,.6); letter-spacing:1px; font-weight:700; padding:4px 0;">ନୋଟ୍ ${i+1} / ${topicsData.length}</div>`;

        // Note card
        html += `<div style="background:white; border-radius:14px; overflow:hidden; flex-shrink:0;">
          <div style="background:linear-gradient(135deg,#667eea,#764ba2); padding:12px 14px;">
            <h2 style="color:white; font-size:15px; margin:0; line-height:1.4;">${t.heading}</h2>
          </div>
          <div style="padding:10px 12px;">`;
        t.audioPoints.forEach(p => {
            html += `<div style="background:#f0f4ff; border-left:4px solid #667eea; border-radius:0 8px 8px 0; padding:10px 12px; font-size:13px; color:#222; line-height:1.7; margin-bottom:6px; text-align:justify;">${p.text}</div>`;
        });
        html += `</div></div>`;

        // Q&A card
        html += `<div style="background:white; border-radius:14px; overflow:hidden; flex-shrink:0;">
          <div style="background:linear-gradient(135deg,#10b981,#059669); padding:10px 14px;">
            <h2 style="color:white; font-size:14px; margin:0;">📝 ପ୍ରଶ୍ନ ଓ ଉତ୍ତର</h2>
          </div>
          <div style="padding:10px 12px;">`;
        t.questions.forEach((q, qi) => {
            // Split Q and Answer by <br><br> pattern in your data
            html += `<div style="background:#f0fdf4; border-left:4px solid #10b981; border-radius:0 8px 8px 0; padding:10px 12px; font-size:13px; color:#222; line-height:1.7; margin-bottom:8px; text-align:justify;">${q}</div>`;
        });
        html += `</div></div>`;

        slide.innerHTML = html;
        track.appendChild(slide);

        // Dot — use numbers instead of dots for 10+ slides
        const dot = document.createElement('button');
        dot.dataset.idx = i;
        if (topicsData.length <= 7) {
            dot.style.cssText = 'width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,.3); border:none; cursor:pointer; padding:0; transition:all .25s; flex-shrink:0;';
        } else {
            // Number style for many slides
            dot.textContent = i + 1;
            dot.style.cssText = 'width:28px; height:28px; border-radius:6px; background:rgba(255,255,255,.15); color:rgba(255,255,255,.6); border:none; cursor:pointer; font-size:11px; font-weight:700; transition:all .25s; flex-shrink:0;';
        }
        dot.onclick = () => goTo(i);
        dots.appendChild(dot);
    });
}

function goTo(n) {
    sCur = Math.max(0, Math.min(topicsData.length - 1, n));
    document.getElementById('slidesTrack').style.transform = `translateX(-${sCur * 100}%)`;
    document.getElementById('slideHeading').textContent = topicsData[sCur].heading;
    document.getElementById('sPrev').disabled = sCur === 0;
    document.getElementById('sNext').disabled = sCur === topicsData.length - 1;
    document.getElementById('slideProg').style.width = ((sCur + 1) / topicsData.length * 100) + '%';

    document.querySelectorAll('#sDots button').forEach((d, i) => {
        const isActive = i === sCur;
        if (topicsData.length <= 7) {
            d.style.background = isActive ? '#fff' : 'rgba(255,255,255,.3)';
            d.style.width      = isActive ? '20px' : '8px';
            d.style.borderRadius = isActive ? '4px' : '50%';
        } else {
            d.style.background = isActive ? '#fff' : 'rgba(255,255,255,.15)';
            d.style.color      = isActive ? '#667eea' : 'rgba(255,255,255,.6)';
            d.style.transform  = isActive ? 'scale(1.15)' : 'scale(1)';
        }
    });

    // Auto-scroll dots row so active dot is visible
    const activeDot = document.querySelectorAll('#sDots button')[sCur];
    if (activeDot) activeDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function goSlide(d) { goTo(sCur + d); }

function addSlideSwipe() {
    const w = document.getElementById('slidesWrapper');
    const t = document.getElementById('slidesTrack');
    
    let touchStartX = 0;
    let touchStartY = 0;
    let isDraggingHorizontal = false;
    let dragDetermined = false;

    w.ontouchstart = e => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        sDragX = 0;
        isDraggingHorizontal = false;
        dragDetermined = false;
        sDragging = true;
    };

    w.ontouchmove = e => {
        if (!sDragging) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - touchStartX;
        const diffY = currentY - touchStartY;

        // Determine direction on first significant movement
        if (!dragDetermined && (Math.abs(diffX) > 8 || Math.abs(diffY) > 8)) {
            dragDetermined = true;
            isDraggingHorizontal = Math.abs(diffX) > Math.abs(diffY);
        }

        if (!dragDetermined) return;

        if (isDraggingHorizontal) {
            e.preventDefault(); // prevent scroll only on horizontal swipe
            sDragX = diffX;
            t.style.transition = 'none';
            t.style.transform = `translateX(calc(-${sCur * 100}% + ${sDragX}px))`;
        }
        // If vertical: do nothing — let native scroll handle it
    };

    w.ontouchend = e => {
        if (!sDragging) return;
        sDragging = false;

        if (!isDraggingHorizontal) {
            sDragX = 0;
            return; // vertical scroll — don't change slide
        }

        const finalDrag = sDragX;
        sDragX = 0;

        // Re-enable transition before snapping
        t.style.transition = 'transform .35s cubic-bezier(.4,0,.2,1)';

        if (finalDrag < -60) goTo(sCur + 1);
        else if (finalDrag > 60) goTo(sCur - 1);
        else goTo(sCur); // snap back

        isDraggingHorizontal = false;
        dragDetermined = false;
    };
}

function openImageModal() {
    document.getElementById('imageModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

    function closeLessonPanel() {
    sentenceText.style.display = 'none';
    sentenceText.classList.remove('active');
    showLessonBtn.innerHTML = 'କଳାପଟାରେ ପଢିବା..';
    showLessonBtn.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)';
    showLessonBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}



// ================================================================
// STUDY BOT — Pure flowing chat. No fixed panels. Everything scrolls.
// Reads from topicsData automatically.
// ================================================================
(function(){

// ── Parse topicsData into lesson objects ────────────────────────
function buildLessons(raw){
  return raw.map(function(t){
    // Clean lesson text from HTML
    var text = (t.audioPoints && t.audioPoints[0])
      ? t.audioPoints[0].text
          .replace(/<br\s*\/?>/gi,'\n')
          .replace(/<[^>]+>/g,'')
          .replace(/👉/g,'\n👉')
          .trim()
      : '';

    // Extract Q&A pairs from topic.questions[]
    var pairs = (t.questions||[]).map(function(rawQ){
      var p = rawQ.split(/<br><br>/i);
      var q = (p[0]||'').replace(/<[^>]+>/g,'').replace(/Q-?\d+\s*:/i,'').trim();
      var a = (p[1]||'').replace(/<[^>]+>/g,'').replace(/Answer\s*:/i,'').trim();
      return {q:q, a:a};
    }).filter(function(p){ return p.q && p.a; });

    // Build MCQs — correct answer + 3 distractors from other answers in same topic
    var mcqs = pairs.slice(0,4).map(function(pair, idx){
      var correct = pair.a;
      var others = pairs.filter(function(_,i){ return i!==idx; }).map(function(p){ return p.a; });
      while(others.length < 3) others.push('ଉପରୋକ୍ତ ମଧ୍ୟରୁ କୌଣସି ଟି ନୁହେଁ ।');
      var pool = [correct, others[0], others[1], others[2]];
      // Shuffle pool
      for(var i=pool.length-1; i>0; i--){
        var j=Math.floor(Math.random()*(i+1));
        var tmp=pool[i]; pool[i]=pool[j]; pool[j]=tmp;
      }
      return { q: pair.q, opts: pool, ans: pool.indexOf(correct) };
    });

    return { heading: t.heading, text: text, mcqs: mcqs };
  });
}

var LESSONS = buildLessons(topicsData);
var typing = false, typTimer = null;
var sbCurrentLessonIndex = 0;   // NEW: tracks which lesson the bot is currently teaching
var sbChat = document.getElementById('sbChat');
var sbStatus = document.getElementById('sbStatus');
var sbProg = document.getElementById('sbProg');

// ── Scroll ──────────────────────────────────────────────────────
function scrollBot(){ setTimeout(function(){ sbChat.scrollTop = sbChat.scrollHeight; }, 60); }

// ── Timestamp ───────────────────────────────────────────────────
function addTs(){
  var d = document.createElement('div');
  d.className = 'sb-ts sb-pop';
  var n = new Date();
  d.textContent = n.getHours().toString().padStart(2,'0')+':'+n.getMinutes().toString().padStart(2,'0');
  sbChat.appendChild(d);
}

// ── User bubble ─────────────────────────────────────────────────
function addUser(txt){
  var row = document.createElement('div');
  row.className = 'sb-user-row sb-pop';
  row.innerHTML = '<div class="sb-user-bub">'+txt+'</div>';
  sbChat.appendChild(row);
  addTs();
  scrollBot();
}

// ── Bot bubble with typewriter — calls onDone when finished ─────
function addBot(txt, onDone){
  if(typing){ clearTimeout(typTimer); typing = false; }
  var row = document.createElement('div');
  row.className = 'sb-bot-row sb-pop';
  var av = document.createElement('div');
  av.className = 'sb-av';
  av.innerHTML = '<img src="https://raw.githubusercontent.com/happysangitanms/assets/main/bot%20image-2.gif">';
  var bub = document.createElement('div');
  bub.className = 'sb-bub sb-cur';
  row.appendChild(av); row.appendChild(bub);
  sbChat.appendChild(row);
  scrollBot();
  typing = true;
  sbStatus.textContent = 'ଟାଇପ ହେଉଛି...';
  var i = 0;
  var clean = txt.replace(/\\n/g,'\n');
function step(){
    if(i < clean.length){
      bub.textContent += clean[i];
      var ch = clean[i]; i++;
      var spd = (ch==='।'||ch==='.')?160 : (ch===','||ch==='?')?100 : (ch==='\n')?200 : 35;
      typTimer = setTimeout(step, spd);
      scrollBot();
    } else {
      bub.classList.remove('sb-cur');
      typing = false;
      sbStatus.textContent = 'ଅନଲାଇନ';
      if(onDone) setTimeout(onDone, 320);
    }
  }
  step();
}

// ── Buttons appended directly into chat scroll area ─────────────
// labelText = small hint label above buttons (pass null to skip)
// items = array of {label, value} or plain strings
// cls = extra CSS class for buttons
// onPick(idx, value) called once; all buttons in group disabled after
function addBtns(labelText, items, cls, onPick){
  if(labelText){
    var lbl = document.createElement('div');
    lbl.className = 'sb-hint-label sb-pop';
    lbl.textContent = labelText;
    sbChat.appendChild(lbl);
  }
  var grp = document.createElement('div');
  grp.className = 'sb-btn-group sb-pop';
  items.forEach(function(item, idx){
    var label = typeof item==='object' ? item.label : item;
    var value = typeof item==='object' ? item.value : item;
    var b = document.createElement('button');
    b.className = 'sb-btn sb-pop ' + (cls||'');
    b.textContent = label;
    b.onclick = function(){
      // Disable entire group immediately
      Array.from(grp.querySelectorAll('button')).forEach(function(x){
        x.disabled = true;
      });
      onPick(idx, value);
    };
    grp.appendChild(b);
  });
  sbChat.appendChild(grp);
  scrollBot();
}

// ── Progress bar ────────────────────────────────────────────────
function updateProg(done, total){
  sbProg.style.width = Math.round((done/total)*100)+'%';
}

// ── FLOW ────────────────────────────────────────────────────────

function sbStart(){
  addBot('🌹 ନମସ୍କାର ଆଜ୍ଞା ! ମୁଁ ଆପଣଙ୍କ ପାଠ୍ୟ ସହ।ୟକ ।', function(){
    addBot('ଆସନ୍ତୁ,ସାଙ୍ଗ ହୋଇ ପାଠ ପଢିବା ।', function(){
      sbLessonMenu();
    });
  });
}

function sbLessonMenu(){
  var items = LESSONS.map(function(l){ return {label:l.heading, value:l.heading}; });
  
  // Add hint label
  var lbl = document.createElement('div');
  lbl.className = 'sb-hint-label sb-pop';
  lbl.textContent = '👇 ଏହି ପାଠ୍ୟରେ ନିମ୍ନଲିଖିତ ନୋଟ୍ ଗୁଡିକ ରହିଛି । ଆପଣ ଯେଉଁ ନୋଟ୍ ପଢିବା ପାଇଁ ଚାହୁଁଛନ୍ତି ତାହା ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ।';
  sbChat.appendChild(lbl);
  
  // 2-grid group
  var grp = document.createElement('div');
  grp.className = 'sb-pop';
  grp.style.cssText = 'display:grid; grid-template-columns:1fr 1fr; gap:7px; margin-left:36px;';
  
  items.forEach(function(item, idx){
    var b = document.createElement('button');
    b.className = 'sb-btn sb-pop';
    b.textContent = item.label;
   b.style.cssText = 'font-size:13px; padding:12px 10px; line-height:1.5; text-align:center; min-height:60px;';
    b.onclick = function(){
      Array.from(grp.querySelectorAll('button')).forEach(function(x){ x.disabled = true; });
      addUser(LESSONS[idx].heading);
      sbTeachLesson(idx);
    };
    grp.appendChild(b);
  });
  
  sbChat.appendChild(grp);
  scrollBot();
}

function sbTeachLesson(idx){
  sbCurrentLessonIndex = idx;   // NEW: remember which lesson is active
  var lesson = LESSONS[idx];
  updateProg(idx, LESSONS.length);
  addBot('📖 '+lesson.heading+'\n\n ବହୁତ ଭଲ । ଏହା ଏକ ସୁନ୍ଦର ନୋଟ୍ । ଏହି ନୋଟ୍ ଟି ମୋର ବହୁତ ପସନ୍ଦ । ଆସନ୍ତୁ, ପ୍ରଥମେ ସାଙ୍ଗ ହୋଇ ଏହି ନୋଟ୍ କୁ ପଢିବା ।', function(){
    addBot(lesson.text, function(){
      addBot('✅ ମୁଁ ଆପଣଙ୍କ ପାଇଁ ସଂପୂର୍ଣ୍ଣ ନୋଟ୍ ଲେଖିଦେଲି ଆଜ୍ଞା । ଏହି ନୋଟ୍ କୁ ସଂପୂର୍ଣ୍ଣ ପଢିସାରିବା ପରେ ପ୍ରଶ୍ନୋତ୍ତର ଅଭ୍ଯାସ କରିବା । \n\n ମୋ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା ପାଇଁ ଦୟାକରି ନିମ୍ନ ବଟନ୍ ରେ କ୍ଲିକ୍ କରନ୍ତୁ ।', function(){
        addBtns(null,
          [{label:'✅ ପ୍ରଶ୍ନୋତ୍ତର ଅଭ୍ଯାସ', value:'ready'}],
          'sb-go',
          function(){
            addUser('✅ ପଢିବା ପ୍ରତି ଆପଣଙ୍କ ଆଗ୍ରହ ଦେଖି ମୋତେ ବହୁତ ଖୁସି ଲାଗୁଛି । ଆପଣଙ୍କ ଭଳି ଜଣେ ଭଲ ସାଙ୍ଗ ପାଇ ମୁଁ ଅତ୍ୟନ୍ତ ଗର୍ବିତ । ଏବେ ଆସନ୍ତୁ ଯଥାଶୀଘ୍ର ନିମ୍ନ ପ୍ରଶ୍ନର ଉତ୍ତର ବାଛିଦେବା :');
            sbAskQ(idx, 0, 0);
          }
        );
      });
    });
  });
}

var QLabels = ['(A)','(B)','(C)','(D)'];
var Praise  = ['🎉 ସଂପୂର୍ଣ୍ଣ ଠିକ୍!','👏 ବହୁତ ବଢିଆ । ଏହା ସଠିକ୍ ଉତ୍ତର !','🌟 ଅତି ସୁନ୍ଦର । ଆପଣ ସଠିକ୍ ଉତ୍ତର ଦେଇଛନ୍ତି ଆଜ୍ଞା !','💯 ଆରେ ବାଃ ! ଆପଣ ବହୁତ ସୁନ୍ଦର ପଢୁଛନ୍ତି । ଏହି ଉତ୍ତର ଟି ସଂପୂର୍ଣ୍ଣ ଠିକ୍ ।'];

function sbAskQ(lessonIdx, qIdx, attempts){
  var lesson = LESSONS[lessonIdx];
  if(!lesson || !lesson.mcqs || qIdx >= lesson.mcqs.length){
    sbLessonComplete(lessonIdx); return;
  }
  var mcq = lesson.mcqs[qIdx];
  var total = lesson.mcqs.length;

  var hint = '';
  if(attempts === 1) hint = '\n\n💭 ଶାନ୍ତ ମନରେ ଆଉଥରେ ମନେପକାନ୍ତୁ ଆଜ୍ଞା । ଆପଣ ଏଥର ନିଶ୍ଚିତ ପାରିବେ । ଆଉଥରେ ଚେଷ୍ଟା କରନ୍ତୁ ।';
  if(attempts >= 2)  hint = '\n\n💡 ଚିନ୍ତା କରନ୍ତୁନି । ମୁଁ କହିଦେଉଛି । ସଠିକ୍ ଉତ୍ତର ହେଲା: "'+mcq.opts[mcq.ans]+'"';

  addBot('ପ୍ରଶ୍ନ -'+' '+(qIdx+1)+'/'+total+':\n\n'+mcq.q+hint, function(){
    var optItems = mcq.opts.map(function(o,i){
      return {label: QLabels[i]+' '+o, value: i};
    });
    addBtns('ଦୟାକରି ସଠିକ୍ ଉତ୍ତର ବାଛନ୍ତୁ :', optItems, 'sb-opt', function(i, val){
      var chosen = parseInt(val);
      addUser(QLabels[chosen]+' '+mcq.opts[chosen]);
      if(chosen === mcq.ans){
        var praise = Praise[Math.floor(Math.random()*Praise.length)];
        addBot(praise+'\n\n✅ ସଠିକ୍ ଉତ୍ତର : '+mcq.opts[mcq.ans], function(){
          sbAskQ(lessonIdx, qIdx+1, 0);
        });
      } else {
        addBot('❌ ଏହା ସଠିକ୍ ଉତ୍ତର ନୁହେଁ ଆଜ୍ଞା । \n\n ଆପଣ ପାରିବେ ।\n\n ଦୟାକରି ଆଉଥରେ ଚେଷ୍ଟା କରନ୍ତୁ ।', function(){
          sbAskQ(lessonIdx, qIdx, attempts+1);
        });
      }
    });
  });
}

function sbLessonComplete(lessonIdx){
  var isLast = (lessonIdx >= LESSONS.length-1);
  updateProg(lessonIdx+1, LESSONS.length);
  addBot('🏆 ଅଭିନନ୍ଦନ ଆଜ୍ଞା ! ଆପଣ 4 ଟି ପ୍ରଶ୍ନର ସଠିକ୍ ଉତ୍ତର ଦେଇ ବିଜେତା ହୋଇଛନ୍ତି । \n\n ଏବେ ଆସନ୍ତୁ ପରବର୍ତ୍ତୀ ନୋଟ୍ ପଢିବା ।', function(){
    if(!isLast){
      var nextLesson = LESSONS[lessonIdx+1];
      addBtns('ପରବର୍ତ୍ତୀ ନୋଟ୍',
        [
          {label:'📖 '+nextLesson.heading, value:'next'},
          {label:'🏠 ମୂଳକୁ ଯିବାପାଇଁ ଚାହୁଁଥିଲେ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ ।', value:'home'}
        ],
        '',
        function(idx, val){
          if(val === 'next'){
            addUser('📖 '+nextLesson.heading);
            sbTeachLesson(lessonIdx+1);
          } else {
            addUser('🏠 ମୂଳକୁ ଯିବାପାଇଁ ଚାହୁଁଥିଲେ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ ।');
            addBot('ଏବେ ମୂଳକୁ ଆସିଗଲେ । \n\n ପଢା ଆରମ୍ଭ କରନ୍ତୁ ଆଜ୍ଞା । ', function(){ sbLessonMenu(); });
          }
        }
      );
    } else {
      addBot('🌟 ।!\n\n।', function(){
        addBtns(null,
          [{label:'🏠 ମୂଳକୁ ଯିବାପାଇଁ ଚାହୁଁଥିଲେ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ ।', value:'home'}],
          'sb-go',
          function(){
            addUser('🏠 ମୂଳକୁ ଯିବାପାଇଁ ଚାହୁଁଥିଲେ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ ।');
            addBot('ଏବେ ମୂଳକୁ ଆସିଗଲେ ।\n\n ପଢା ଆରମ୍ଭ କରନ୍ତୁ ଆଜ୍ଞା । ', function(){ sbLessonMenu(); });
          }
        );
      });
    }
  });
}

// ── Public ──────────────────────────────────────────────────────
window.openStudyBot = function(){
  var m = document.getElementById('studyBotModal');
  m.style.display = 'flex';
  m.style.flexDirection = 'column';
  document.body.style.overflow = 'hidden';
  if(sbChat.children.length === 0) sbStart();
};

window.closeSB = function(){
  document.getElementById('studyBotModal').style.display = 'none';
  document.body.style.overflow = '';
};

    window.getSbCurrentLesson = function(){
  return (typeof LESSONS !== 'undefined' && LESSONS[sbCurrentLessonIndex])
    ? LESSONS[sbCurrentLessonIndex].heading
    : '';
};

    window.sbEncourage = function(studentName, callback){
  var msgs = [
    studentName + ' ଆଜ୍ଞା,🌹 ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ..WhatsApp ଖୋଲୁଛି..🌟',
    studentName + ' ଆଜ୍ଞା,🌹 ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ..WhatsApp ଖୋଲୁଛି..🌟'
  ];
  var msg = msgs[Math.floor(Math.random()*msgs.length)];
  addBot(msg, callback);
};

window.sbReset = function(){
  clearTimeout(typTimer); typing = false;
  sbChat.innerHTML = '';
  sbProg.style.width = '0%';
  sbStart();
};

// Hook dropdown
document.querySelectorAll('.dropdown-item').forEach(function(item){
  item.addEventListener('click', function(e){
    if(e.currentTarget.dataset.assistant === 'studyBot'){
      document.getElementById('assistantDropdownMenu').classList.remove('active');
      document.getElementById('assistantDropdownBtn').classList.remove('active');
      window.openStudyBot();
    }
  });
});

})();

    

