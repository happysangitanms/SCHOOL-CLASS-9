const trueFalseData = {
    questions: [

        // =========================
        // CONCEPT NO.- 1 (Meaning & origin of the word Geometry)
        // =========================
        {
            question: "'Geometry' ଶବ୍ଦଟି ଗ୍ରୀକ୍ ଶବ୍ଦ Geo (ଭୂଖଣ୍ଡ) ଓ Metron (ମାପ) ରୁ ସୃଷ୍ଟି ହୋଇଛି ।",
            correct: true
        },

        // =========================
        // CONCEPT NO.- 2 (Necessity of geometry in ancient times)
        // =========================
        {
            question: "ମାନବ ସଭ୍ୟତାର ଉନ୍ନତି ସହିତ ଜ୍ୟାମିତି ଅଭିବୃଦ୍ଧି ପାଇବାର କୌଣସି ସମ୍ପର୍କ ନାହିଁ ।",
            correct: false
        },

        // =========================
        // CONCEPT NO.- 3 (Sulba Sutra - Vedic geometry)
        // =========================
        {
            question: "ବୈଦିକ ଯୁଗରେ ଯଜ୍ଞ ବେଦି ନିର୍ମାଣ ପାଇଁ 'ଶୁଳ୍ବ ସୂତ୍ର' ନାମକ ଜ୍ୟାମିତି ଶାଖା ପ୍ରୟୋଗ ହୋଇଥିଲା ।",
            correct: true
        },

        // =========================
        // CONCEPT NO.- 4 (Egyptian pyramid construction)
        // =========================
        {
            question: "ପ୍ରାଚୀନ ମିଶରୀୟମାନେ ପିରାମିଡ୍ ନିର୍ମାଣରେ ଜ୍ୟାମିତିର ପ୍ରୟୋଗ କରିଥିଲେ ।",
            correct: true
        },

        // =========================
        // CONCEPT NO.- 5 (Ancient Indian mathematicians)
        // =========================
        {
            question: "ଭାସ୍କର, ଆର୍ଯ୍ୟଭଟ, ବ୍ରହ୍ମଗୁପ୍ତ ଓ ମହାବୀର ଭାରତୀୟ ଗଣିତ ଜ୍ୟାମିତି ଶାଖାର ଉନ୍ନତି ପାଇଁ ଅବଦାନ ଦେଇଥିଲେ ।",
            correct: true
        },

        // =========================
        // CONCEPT NO.- 6 (Greek philosophers)
        // =========================
        {
            question: "ଥେଲ୍ସ, ପିଥାଗୋରସ୍, ପ୍ଲାଟୋ ଓ ଆରିଷ୍ଟଟଲ ଆଦି ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନେ ଯୁକ୍ତି ଓ ଦର୍ଶନ ପ୍ରୟୋଗ କରି ଜ୍ୟାମିତିକୁ ନୂତନ ଉଦ୍ଭାବନ କରିବାର ପ୍ରୟାସ କରିଥିଲେ ।",
            correct: true
        },

        // =========================
        // CONCEPT NO.- 7 (Euclid & Elements)
        // =========================
        {
            question: "ଇଉକ୍ଲିଡ୍‌ଙ୍କୁ 'ଜ୍ୟାମିତିର ଜନକ' ବୋଲି କୁହାଯାଏ ଏବଂ ତାଙ୍କର ପ୍ରସିଦ୍ଧ ଗ୍ରନ୍ଥ 'Elements' ତେର ଅଧ୍ୟାୟରେ ବିଭକ୍ତ ଥିଲା ।",
            correct: true
        },

        // =========================
        // CONCEPT NO.- 8 (Euclidean Geometry naming)
        // =========================
        {
            question: "ଇଉକ୍ଲିଡ୍‌ଙ୍କ ଅବଦାନ ସ୍ୱରୂପ ଜ୍ୟାମିତିର ନାମ 'ଆଧୁନିକ ଜ୍ୟାମିତି' ପ୍ରଚଳିତ ହେଲା ।",
            correct: false
        },

        // =========================
        // CONCEPT NO.- 9 (Bertrand Russell's remark)
        // =========================
        {
            question: "ବର୍ଟ୍ରାଣ୍ଡ ରସେଲ୍ ତାଙ୍କର 'Mathematics and Metaphysics' ପୁସ୍ତକରେ ଇଉକ୍ଲିଡ୍‌ଙ୍କ ଜ୍ୟାମିତି ସମ୍ପର୍କରେ ମତ ପ୍ରକାଶ କରିଥିଲେ ।",
            correct: true
        },

        // =========================
        // CONCEPT NO.- 10 (Birkhoff & Hilbert - modernizing geometry)
        // =========================
        {
            question: "ଜର୍ଜ ଡେଭିଡ୍ ବିରକ୍‌ହଫ୍‌ଙ୍କ ଦ୍ୱାରା ପ୍ରସ୍ତାବିତ 'A set of postulates for plane geometry based on scale and protractor' ୧୯୩୨ ମସିହାରେ ପ୍ରକାଶିତ ହୋଇଥିଲା ।",
            correct: true
        },

        // =========================
        // CONCEPT NO.- 11 (Modern geometry applications)
        // =========================
        {
            question: "ଆଧୁନିକ ଜ୍ୟାମିତିର ପ୍ରୟୋଗ କେବଳ ଚିତ୍ରକଳାରେ ସୀମିତ ରହିଛି ।",
            correct: false
        },

        // =========================
        // CONCEPT NO.- 12 (Geometry at secondary school level)
        // =========================
        {
            question: "ମାଧ୍ୟମିକ ବିଦ୍ୟାଳୟ ସ୍ତରରେ ମୁଖ୍ୟତଃ ଇଉକ୍ଲିଡ଼ୀୟ ବା ସମତଳ ଜ୍ୟାମିତି ପଢ଼ାଯାଇଥାଏ ।",
            correct: true
        }

    ]
};

