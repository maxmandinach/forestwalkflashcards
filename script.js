// Flashcard data from the podcast
const cards = [
    {
        question: "According to Klein, how has the nature of political polarization changed in recent years?",
        answer: "There's now less policy polarization (over issues like taxes, Obamacare) and more system-level polarization, where the debate is about whether the system itself is legitimate.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Klein identify as the purpose of the abundance agenda in relation to polarization?",
        answer: "To \"recut the line of polarization\" by creating different cross-cutting cleavages, focusing on abundance politics rather than system legitimacy (which he views as a \"toxic form of division\").",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "How does Klein describe the difference between two kinds of policy and procedure overhang?",
        answer: "Overhang people actually want (like local NIMBYism) versus overhang from \"drift\" (processes and bureaucracy that accumulate without anyone asking for them).",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Klein identify as \"the frontier of the modern economy\" in his chapter on housing?",
        answer: "Cities are the frontier - \"not the edge of the landmass, but the places where ideas happen\" and engines of mobility.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What research does Klein cite about income convergence across states, and how has it changed?",
        answer: "Research from Peter Ganong and Shoag showing that historically there was income convergence across states driven by people moving from poor areas to richer ones, but now that process has reversed as people leave richer areas for poorer ones due to high costs of living.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What is Klein's view on historic preservation in cities?",
        answer: "We should \"have a very high bar for what you're going to say is a beautiful, culturally important space worth preserving\" and suggests something like a cap-and-trade system for historic designations to prevent them from covering too much of cities.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Klein mean by \"a floor without a ceiling\" in healthcare systems?",
        answer: "A significant basic healthcare provision floor for everyone, with the ability to buy supplementary insurance in an open market (like in France).",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "How does Klein view the relationship between drug pricing and innovation?",
        answer: "If you implement Medicare drug pricing at a significant level, you should pair it with \"a pretty significant agenda to make drug discovery much easier, to make testing much easier\" to maintain innovation.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What example does Klein use to illustrate successful pairing of supply-side and demand-side policies?",
        answer: "Operation Warp Speed during COVID, which combined aggressive supply-side policy (accelerating vaccine development and addressing bottlenecks) with aggressive demand-side policy (making vaccines free and accessible to everyone).",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Klein identify as the main \"piece of leverage\" to address declining fertility rates?",
        answer: "Marriage is the key leverage point, noting that if people married younger, birth rates would likely increase, as people are \"much more unlikely to have children outside the context of a highly committed, stable relationship.\"",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "How does Klein respond to the suggestion that cultural conservatism could address fertility decline?",
        answer: "While it \"should be possible\" to raise birth rates through cultural and policy changes, he's skeptical it would work because \"when society and technology have changed so much,\" and no society has successfully demonstrated this approach.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Klein observe about the relationship between religion and social cohesion?",
        answer: "Religion is \"a functionally unmatched\" understanding of reality that enhances human cohesion and cooperation, and as belief weakens, we haven't replaced it with any other technology that creates similar long-term cooperation.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Klein identify as problems with the current civil service system?",
        answer: "Civil service rules are \"archaic\" and make it \"much too difficult to hire and fire\" and \"much too difficult to reorganize systems.\"",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Klein see as a potential \"synthesis\" following the current disruption of government?",
        answer: "A synthesis where the next administration doesn't try to destroy federal government but takes the lesson that many bureaucratic constraints presented as immutable actually can be changed, while avoiding the destructive approach of the current administration.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What concern does Klein express about integrating AI into government?",
        answer: "He wants to see what AI can actually do before firing government workers, arguing that AI will initially create more information that could overwhelm existing choke points, potentially requiring more capacity in some areas before reduction in others.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What three travel destinations did Klein recommend?",
        answer: "1) Rio de Janeiro and broader Brazil, 2) Berlin for its electronic music scene, museums, and vibrancy, and 3) American \"second cities\" like Knoxville, which he believes often have better food than major cities.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "Why does Klein believe food in smaller American cities is often better than in major cities?",
        answer: "Food in smaller cities is often better because \"so many people have been costed out\" of major cities, with high labor costs pushing out talented people who could create vibrant food scenes.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What is Cowen's view on political polarization compared to Klein's?",
        answer: "Polarization is decreasing, having \"more dimensions than ever before\" and \"in terms of what a lot of our government does, and in terms of, say, racially, how people vote, I think it's down a lot.\"",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What argument does Cowen make about elite universities as a counterpoint to Klein's housing density views?",
        answer: "Top universities (Harvard, MIT, Stanford) are evidence that gating can be compatible with innovation, as they \"take very small numbers of people\" yet \"generate ideas at a world-beating pace.\"",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What alternative \"abundance agenda\" does Cowen provocatively suggest regarding healthcare spending?",
        answer: "Zeroing out Medicare and Medicaid and redirecting those funds to science, birth subsidies, and social security, potentially resulting in more scientific advances and a younger, more dynamic society.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Cowen identify as the \"number one feature of abundance in state capacity\"?",
        answer: "Whether a state has enough of its citizens willing to fight and die for it, with only the United States, Israel, and a small number of nations having true high state capacity.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What does Cowen suggest should be \"step one\" for the federal government to prepare for AGI?",
        answer: "Laying off government workers should be an early step in preparing for AGI, noting that companies like Midjourney operated with just eight people at its innovative peak, and AI could enable much smaller staffing.",
        episode: "Ezra Klein on Abundance"
    },
    {
        question: "What solution does Cowen propose for addressing the \"kludgeocracy\" problem in government?",
        answer: "After 50 years of accumulated bureaucratic \"kludge,\" the only viable solution is \"quite a bit of disruption\" now, followed by sorting things out \"with AI and most of all, with future administrations\" over an 8-12 year period.",
        episode: "Ezra Klein on Abundance"
    },
    // Alan Taylor episode cards
    {
        question: "Why did only the 13 colonies declare independence from Britain?",
        answer: "The places that rebelled had larger populations and were connected with each other, giving them confidence to resist militarily. Smaller colonies like those in the West Indies or to the north were more dependent on the British Royal Navy.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "How did New France influence Canada's decision not to join the American Revolution?",
        answer: "French Canadians, who were Catholic and the majority in Canada, preferred British rule after Britain had protected their legal system and religion in 1774, viewing the Protestant colonists to their south as a greater threat.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "What irony does Taylor identify regarding land prices following the American Revolution?",
        answer: "The revolution led to virtually free land for settlers in British Canada while making land more expensive in the United States, as American states needed to sell land and raise taxes to pay off war debts while Britain subsidized Canada.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "What was the economic impact of the American Revolution in the short term?",
        answer: "The economy shrank by about a third between 1775-1790 (the second-greatest depression in American history), as the Royal Navy's dominance made transatlantic trade difficult. Property values only recovered during the boom of the 1790s.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "Why did Britain find it easier to mobilize Native Americans as allies?",
        answer: "Native peoples saw the British as the lesser threat because the rapidly expanding American population (doubling every 22 years) needed more land, while the British had a much smaller population in Canada and offered firearms to help natives resist American expansion.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "Why couldn't the 7+ million Americans overwhelm the much smaller number of British subjects in Canada during the War of 1812?",
        answer: "The US had a tiny professional military (about 9,000 men), sent poorly trained troops into difficult terrain with long supply lines, while the British had better-trained troops, support from native peoples, and superior water-based supply lines via the Great Lakes and St. Lawrence River.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "Why was there never a third war with Britain after the War of 1812, despite expectations?",
        answer: "Strong economic ties prevented conflict: the US was Britain's most important export market, America relied on Britain for manufactured goods, and British capital funded American infrastructure development (canals, railroads). American cotton and wheat exporters also depended on British markets.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "Was there a chance of a Union invasion of Canada right after the US Civil War?",
        answer: "Yes, there was significant talk about invading Canada due to Northern anger at Britain for partial recognition of the Confederacy and allowing them to obtain warships. However, most Americans wanted the army demobilized and their soldiers to return home after the long, deadly war.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "Why was the British North America Act passed in 1867?",
        answer: "Canadian leaders wanted to: 1) solve tensions between anglophone Ontario and francophone Quebec by bringing in more anglophone provinces, 2) better defend against potential American invasion, and 3) respond to British desire to have Canadians pay for their own defense rather than Britain footing the bill.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "How does Taylor view Canada's high immigration levels today in relation to its history?",
        answer: "Canada has historically recruited immigrants aggressively due to its large geographic size but relatively low population density in habitable areas. The desire to develop economic potential and maintain balance with the United States has led to policies seeking population growth.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "What did early commentators who feared the American republic would collapse get wrong?",
        answer: "They weren't wrong to worry, as the United States did fall apart in 1860-1861, requiring an enormous effort to restore. Before the Civil War, there wasn't confidence that republican institutions would be durable at such a geographic scale, as republics hadn't worked well previously in Europe.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "How democratic were the Jacksonians by today's standards?",
        answer: "Not very democratic - they expanded voting rights by eliminating property requirements, but didn't extend political participation to African Americans or women, meaning the great majority of adults were excluded from the political system.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "By 1850, was the American Civil War inevitable?",
        answer: "While historians hesitate to call anything inevitable, Taylor believes it was very difficult to avoid given how committed each side was to different systems. The North believed the majority should rule in a true nation, while the South couldn't accept being united with a Northern public that favored such a nation.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "How did proximity to Mexico destabilize slavery in Texas?",
        answer: "Mexico had abolished slavery, and several thousand enslaved African Americans escaped from Texas into Mexico. Mexican refusal to extradite these escaped slaves became a major point of tension between the United States and Mexico during the 1850s.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "What did the French hope to accomplish through their occupation of Mexico in the 1860s?",
        answer: "Napoleon III sought to rebuild a French Empire, position France as the dominant power in the Americas, create solidarity among \"Latin peoples\" (Spanish, French, and Portuguese speakers) who were Catholics, contain the United States, and capture trade for France.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "How did the French occupation influence the future of Mexico?",
        answer: "By intervening on behalf of the conservatives and then losing, the French discredited the conservative movement. This allowed the liberal movement under Benito Juárez to establish more free elections, a freer press, and a more equitable legal system - one of the most important events in 19th century North America.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "Why was there little infrastructure development in Mexico before Porfirio Díaz?",
        answer: "Despite strong interest in building railroads since the 1850s, Mexico faced challenges including: lack of capital, rural banditry due to poverty, unfavorable mountainous geography, arid conditions, sparse population in many regions, and government instability.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "What historical factor has contributed to Haiti's long-term instability?",
        answer: "France refused to recognize Haiti's independence unless Haiti paid an enormous financial sum as compensation for French property lost in the revolution. This debt burden forced Haiti to adopt a coercive labor system to produce export crops for foreign capital, creating impoverishment and authoritarianism that persists today.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "Why did the Dominican Republic eventually fare better than Haiti economically?",
        answer: "While both countries struggled in the 19th century, the Dominican Republic never carried the extractive financial burden that Haiti did with its debt to France, which proved to be a crucial difference in their long-term economic trajectories.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "What 19th century factors contributed to the eventual Cuban revolution?",
        answer: "Cuba remained under Spanish control until 1898 when the US conquered it. After initially appearing as liberators, the United States reneged on promises of full Cuban independence, creating resentment as Cuban aspirations for independence were frustrated - factors that contributed to the later communist revolution.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "What is physically most difficult about doing the work of history?",
        answer: "Eye strain from reading old documents written in different styles of cursive, often on computer screens or microfilm reels, and the need to sit still for extended periods while working in archives.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "How has the academic job market changed for historians since Taylor began his career?",
        answer: "The number of job openings has shrunk dramatically due to reduced public investment in higher education, particularly in the humanities. This makes the prestige of one's graduate school more important in competition for fewer positions.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "How might AI and technology change historical research?",
        answer: "Technologies that can manage and analyze data might \"render the individual human mind of less value\" and \"diminish the role of individuality and diversity in analyzing data and telling stories about the past,\" representing a radical change from traditional historical methods.",
        episode: "Alan Taylor on Revolutionary America"
    },
    {
        question: "Is watching historians on YouTube a good substitute for reading their books?",
        answer: "Taylor believes books allow for absorbing a fuller range of information with deeper understanding than lectures or talks, though he acknowledges many people today prefer listening to reading.",
        episode: "Alan Taylor on Revolutionary America"
    }
];

// Track the current card
let currentCardIndex = 0;

// Track studied cards
let studiedCards = new Set();
let startTime = new Date();
let timerInterval;

// Add these variables to your existing variables section
let currentUserAnswer = '';
let currentGrade = null;
let cardKeyTerms = {};

// Add these variables
let cardScores = {};
let reviewQueue = [];
let randomizedCardIndices = []; // New array to store randomized card order

// Get DOM elements
const flashcard = document.getElementById('flashcard');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cardCounter = document.getElementById('cardCounter');
const ratingButtons = document.querySelectorAll('.rating');
const progressBar = document.getElementById('progress');
const cardsStudied = document.getElementById('cards-studied');
const studyTime = document.getElementById('study-time');
const focusToggle = document.getElementById('focus-toggle');

// Get additional DOM elements
const episodeCheckboxes = document.getElementById('episode-checkboxes');
const startSessionButton = document.getElementById('startSession');
const currentEpisodeDisplay = document.getElementById('current-episode');
const cardEpisodeFront = document.getElementById('card-episode-front');
const cardEpisodeBack = document.getElementById('card-episode-back');
const container = document.querySelector('.container');

// Initial UI state
container.classList.add('inactive-session');

// Get unique episodes from cards data
function getUniqueEpisodes() {
    return [...new Set(cards.map(card => card.episode))];
}

// Track selected episodes
let selectedEpisodes = getUniqueEpisodes(); // Default to all episodes selected

// Filter cards based on selected episodes
function getFilteredCards() {
    return cards.filter(card => selectedEpisodes.includes(card.episode));
}

// Add this function to randomize the cards
function randomizeCards() {
    // Get filtered cards based on selected episodes
    const filteredCards = getFilteredCards();
    
    // Create array of indices of only the selected episodes
    randomizedCardIndices = [];
    cards.forEach((card, index) => {
        if (selectedEpisodes.includes(card.episode)) {
            randomizedCardIndices.push(index);
        }
    });
    
    // Fisher-Yates shuffle algorithm
    for (let i = randomizedCardIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomizedCardIndices[i], randomizedCardIndices[j]] = 
        [randomizedCardIndices[j], randomizedCardIndices[i]];
    }
    
    // Set the current card index to the first card in the randomized order
    currentCardIndex = 0;
}

// Modify showCard function to use randomized indices
function showCard() {
    // Get filtered cards based on selected episodes
    const filteredCards = getFilteredCards();
    
    // Only proceed if there are cards to show
    if (filteredCards.length === 0) {
        questionEl.textContent = "No cards available for selected episodes.";
        answerEl.textContent = "Please select at least one episode.";
        cardEpisodeFront.textContent = "";
        cardEpisodeBack.textContent = "";
        cardCounter.textContent = "Card 0 of 0";
        return;
    }
    
    // Get the actual card index from the randomized array
    const actualCardIndex = randomizedCardIndices[currentCardIndex];
    const currentCard = cards[actualCardIndex];
    
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
        questionEl.textContent = currentCard.question;
        answerEl.textContent = currentCard.answer;
        cardEpisodeFront.textContent = currentCard.episode;
        cardEpisodeBack.textContent = currentCard.episode;
        
        // Update the card counter
        cardCounter.textContent = `Card ${currentCardIndex + 1} of ${filteredCards.length}`;
    });
    
    // Make sure card is showing question side
    flashcard.classList.remove('flipped');
    
    // Reset these variables, but they won't be used
    currentGrade = null;
    currentUserAnswer = '';
}

// Update progress indicators
function updateProgress() {
    // Get filtered cards based on selected episodes
    const filteredCards = getFilteredCards();
    
    // Update cards studied counter
    cardsStudied.textContent = studiedCards.size;
    
    // Update progress bar - base it on filtered cards length
    const progress = filteredCards.length > 0 ? 
        (studiedCards.size / filteredCards.length) * 100 : 0;
    progressBar.style.width = `${progress}%`;
}

// Timer function
function startTimer() {
    timerInterval = setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now - startTime) / 1000);
        const minutes = Math.floor(diff / 60).toString().padStart(2, '0');
        const seconds = (diff % 60).toString().padStart(2, '0');
        studyTime.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

// Focus mode toggle
function toggleFocusMode() {
    document.body.classList.toggle('focus-mode-active');
    
    if (document.body.classList.contains('focus-mode-active')) {
        // Add dark overlay to body
        const overlay = document.createElement('div');
        overlay.classList.add('focus-overlay');
        document.body.appendChild(overlay);
        
        // Change focus mode button text
        focusToggle.querySelector('span').textContent = 'Exit Focus Mode';
    } else {
        // Remove overlay
        const overlay = document.querySelector('.focus-overlay');
        if (overlay) overlay.remove();
        
        // Reset button text
        focusToggle.querySelector('span').textContent = 'Focus Mode';
    }
}

// Add this function to preprocess key terms for each card
function preprocessKeyTerms() {
    cards.forEach((card, index) => {
        cardKeyTerms[index] = extractKeyTerms(card.answer);
    });
}

// Update initApp function to randomize cards at start
function initApp() {
    // Preprocess key terms
    preprocessKeyTerms();
    
    // Generate episode checkboxes
    generateEpisodeSelectors();
    
    // Add event listener to start session button
    startSessionButton.addEventListener('click', startSession);
    
    // Set up event listeners
    flashcard.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior
        handleFlashcardClick(); // Call the existing click handler
    });

    flashcard.addEventListener('click', handleFlashcardClick);

    prevButton.addEventListener('click', () => {
        // Go to the previous card in the randomized order
        currentCardIndex = (currentCardIndex - 1 + randomizedCardIndices.length) % randomizedCardIndices.length;
        showCard();
    });

    nextButton.addEventListener('click', () => {
        // Go to the next card in the randomized order
        currentCardIndex = (currentCardIndex + 1) % randomizedCardIndices.length;
        showCard();
    });

    // Add event listeners to rating buttons
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the rating value
            const ratingValue = parseInt(button.getAttribute('data-value'));
            
            // Use the rating directly (remove grading reference)
            const finalGrade = ratingValue;
            
            // Update the card's spaced repetition data
            updateCardScore(currentCardIndex, finalGrade);
            
            // Mark card as studied
            studiedCards.add(currentCardIndex);
            updateProgress();
            
            // Move to the next card (could be from review queue instead)
            if (reviewQueue.length > 0) {
                currentCardIndex = reviewQueue[0];
            } else {
                currentCardIndex = (currentCardIndex + 1) % randomizedCardIndices.length;
            }
            showCard();
        });
    });
    
    // Set up focus mode toggle
    focusToggle.addEventListener('click', toggleFocusMode);

    // Initialize card scores
    initCardScores();

    // Add a button to re-randomize cards (optional)
    const randomizeButton = document.createElement('button');
    randomizeButton.textContent = 'Shuffle Cards';
    randomizeButton.id = 'randomizeButton';
    randomizeButton.addEventListener('click', () => {
        randomizeCards();
        showCard();
    });
    document.querySelector('.controls').appendChild(randomizeButton);
    
    // Add a reset button to go back to episode selection
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Change Episodes';
    resetButton.id = 'resetButton';
    resetButton.addEventListener('click', () => {
        container.classList.remove('active-session');
        container.classList.add('inactive-session');
    });
    document.querySelector('.controls').appendChild(resetButton);

    // Initialize touch handling
    initTouchHandling();
    
    // Add viewport height fix for mobile browsers
    function updateVhProperty() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    updateVhProperty();
    window.addEventListener('resize', updateVhProperty);
}

// Start the app
initApp();

// Add this function to extract key terms from answers
function extractKeyTerms(answer) {
    // List of stopwords (common words to ignore)
    const stopwords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'is', 'are', 'was', 'were', 
                       'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'can', 'could', 'will', 'would', 
                       'should', 'shall', 'may', 'might', 'must', 'that', 'this', 'these', 'those', 'there', 'their', 
                       'they', 'it', 'its', 'with', 'from', 'as', 'by', 'of', 'about'];
    
    // Clean up the answer and split into words
    const words = answer.toLowerCase()
                        .replace(/[.,\/#!$%\^&\*;:{}<>+=\-_`~()]/g, " ")
                        .replace(/\s{2,}/g, " ")
                        .split(" ");
    
    // Filter out stopwords and short words
    let filteredWords = words.filter(word => !stopwords.includes(word) && word.length > 3);
    
    // Get unique words and phrases (2-3 word combinations)
    const uniqueWords = [...new Set(filteredWords)];
    
    // Extract potential key phrases (2-3 word combinations)
    const phrases = [];
    for (let i = 0; i < words.length - 1; i++) {
        if (!stopwords.includes(words[i]) && !stopwords.includes(words[i+1])) {
            phrases.push(words[i] + " " + words[i+1]);
        }
        
        if (i < words.length - 2 && !stopwords.includes(words[i+2])) {
            phrases.push(words[i] + " " + words[i+1] + " " + words[i+2]);
        }
    }
    
    // Combine unique words and phrases, prioritizing longer phrases
    // Here we could also add weights to certain terms if we had the capability
    return [...phrases, ...uniqueWords].slice(0, 12); // Limit to top 12 key terms
}

// Initialize card scores
function initCardScores() {
    cards.forEach((_, index) => {
        cardScores[index] = {
            lastReviewed: null,
            nextReview: null,
            easeScore: 2.5, // Default ease factor
            consecutiveCorrect: 0
        };
    });
}

// Modify updateCardScore function to work with randomized indices
function updateCardScore(cardIndex, grade) {
    // Get the actual card index from the randomized array
    const actualCardIndex = randomizedCardIndices[cardIndex];
    
    const now = new Date();
    const cardScore = cardScores[actualCardIndex];
    
    // Update the card's score data
    cardScore.lastReviewed = now;
    
    // Calculate next review time based on grade
    // Using a simplified SM-2 algorithm
    if (grade >= 3) {
        // Correct answer
        cardScore.consecutiveCorrect++;
        
        // Calculate interval
        let interval;
        if (cardScore.consecutiveCorrect === 1) {
            interval = 1; // 1 day
        } else if (cardScore.consecutiveCorrect === 2) {
            interval = 3; // 3 days
        } else {
            // Calculate interval using the ease factor
            interval = Math.round((cardScore.consecutiveCorrect - 1) * cardScore.easeScore);
            interval = Math.min(interval, 30); // Cap at 30 days
        }
        
        // Update ease factor based on grade
        cardScore.easeScore += (0.1 * (grade - 3));
        cardScore.easeScore = Math.max(1.3, Math.min(cardScore.easeScore, 3.5));
        
        // Set next review date
        const nextReview = new Date(now);
        nextReview.setDate(nextReview.getDate() + interval);
        cardScore.nextReview = nextReview;
    } else {
        // Incorrect answer - review sooner
        cardScore.consecutiveCorrect = 0;
        cardScore.easeScore -= 0.15; // Reduce ease factor
        cardScore.easeScore = Math.max(1.3, cardScore.easeScore);
        
        // Set to review again soon (same day or next day)
        const nextReview = new Date(now);
        nextReview.setHours(nextReview.getHours() + (6 - grade) * 4); // 4-24 hours based on grade
        cardScore.nextReview = nextReview;
    }
    
    // When adding to review queue, use the actual card index
    if (!reviewQueue.includes(actualCardIndex)) {
        reviewQueue.push(actualCardIndex);
    }
    
    // Sort review queue by next review date
    reviewQueue.sort((a, b) => {
        return cardScores[a].nextReview - cardScores[b].nextReview;
    });
    
    // Save to localStorage
    saveCardScores();
}

// Add these persistence functions
function saveCardScores() {
    localStorage.setItem('flashcard-scores', JSON.stringify(cardScores));
    localStorage.setItem('flashcard-queue', JSON.stringify(reviewQueue));
}

function loadCardScores() {
    const savedScores = localStorage.getItem('flashcard-scores');
    const savedQueue = localStorage.getItem('flashcard-queue');
    
    if (savedScores) {
        cardScores = JSON.parse(savedScores);
        // Convert date strings back to Date objects
        Object.keys(cardScores).forEach(key => {
            if (cardScores[key].lastReviewed) {
                cardScores[key].lastReviewed = new Date(cardScores[key].lastReviewed);
            }
            if (cardScores[key].nextReview) {
                cardScores[key].nextReview = new Date(cardScores[key].nextReview);
            }
        });
    }
    
    if (savedQueue) {
        reviewQueue = JSON.parse(savedQueue);
    }
    
    // Randomize cards after loading scores
    randomizeCards();
}

// Generate episode checkboxes
function generateEpisodeSelectors() {
    const episodes = getUniqueEpisodes();
    episodeCheckboxes.innerHTML = '';
    
    // Add "Select All/Deselect All" button
    const selectAllContainer = document.createElement('div');
    selectAllContainer.classList.add('select-all-container');
    
    const selectAllButton = document.createElement('button');
    selectAllButton.id = 'select-all-button';
    selectAllButton.textContent = 'Select All';
    selectAllButton.addEventListener('click', toggleSelectAllEpisodes);
    
    selectAllContainer.appendChild(selectAllButton);
    episodeCheckboxes.appendChild(selectAllContainer);
    
    // Add individual episode checkboxes
    episodes.forEach(episode => {
        const checkbox = document.createElement('div');
        checkbox.classList.add('episode-checkbox', 'selected');
        checkbox.dataset.episode = episode;
        checkbox.innerHTML = `
            <input type="checkbox" checked id="ep-${episode.replace(/\s+/g, '-').toLowerCase()}">
            <label for="ep-${episode.replace(/\s+/g, '-').toLowerCase()}">${episode}</label>
        `;
        
        checkbox.addEventListener('click', () => {
            checkbox.classList.toggle('selected');
            
            // Update the selectedEpisodes array
            const input = checkbox.querySelector('input');
            input.checked = !input.checked;
            
            if (input.checked) {
                if (!selectedEpisodes.includes(episode)) {
                    selectedEpisodes.push(episode);
                }
            } else {
                selectedEpisodes = selectedEpisodes.filter(ep => ep !== episode);
            }
            
            // Update the select all button text
            updateSelectAllButtonText();
        });
        
        episodeCheckboxes.appendChild(checkbox);
    });
}

// Toggle select all/deselect all episodes
function toggleSelectAllEpisodes() {
    const episodes = getUniqueEpisodes();
    const selectAllButton = document.getElementById('select-all-button');
    const checkboxes = document.querySelectorAll('.episode-checkbox');
    
    // If all are currently selected, deselect all
    if (selectedEpisodes.length === episodes.length) {
        selectedEpisodes = [];
        checkboxes.forEach(checkbox => {
            checkbox.classList.remove('selected');
            checkbox.querySelector('input').checked = false;
        });
        selectAllButton.textContent = 'Select All';
    } 
    // Otherwise, select all
    else {
        selectedEpisodes = [...episodes];
        checkboxes.forEach(checkbox => {
            checkbox.classList.add('selected');
            checkbox.querySelector('input').checked = true;
        });
        selectAllButton.textContent = 'Deselect All';
    }
}

// Update the select all button text based on current selection state
function updateSelectAllButtonText() {
    const episodes = getUniqueEpisodes();
    const selectAllButton = document.getElementById('select-all-button');
    
    if (selectedEpisodes.length === episodes.length) {
        selectAllButton.textContent = 'Deselect All';
    } else {
        selectAllButton.textContent = 'Select All';
    }
}

// Start session function
function startSession() {
    // Only proceed if at least one episode is selected
    if (selectedEpisodes.length === 0) {
        alert("Please select at least one episode to start.");
        return;
    }
    
    // Update UI state
    container.classList.remove('inactive-session');
    container.classList.add('active-session');
    
    // Update episode display
    if (selectedEpisodes.length === 1) {
        currentEpisodeDisplay.textContent = `Conversations with Tyler: ${selectedEpisodes[0]}`;
    } else {
        currentEpisodeDisplay.textContent = `Conversations with Tyler: Multiple Episodes`;
    }
    
    // Reset study metrics
    studiedCards = new Set();
    startTime = new Date();
    clearInterval(timerInterval);
    startTimer();
    
    // Randomize and show cards
    randomizeCards();
    showCard();
    updateProgress();
}

function handleFlashcardClick() {
    // Prevent multiple clicks during animation
    if (flashcard.classList.contains('animating')) return;

    // Add animating class
    flashcard.classList.add('animating');

    // Toggle the flip class
    flashcard.classList.toggle('flipped');

    // Mark card as studied when flipped
    if (flashcard.classList.contains('flipped')) {
        // Use setTimeout to ensure the UI remains responsive
        setTimeout(() => {
            studiedCards.add(currentCardIndex);
            updateProgress();
        }, 10);
    }

    // Remove animating class after animation completes
    setTimeout(() => {
        flashcard.classList.remove('animating');
    }, 600); // Same duration as the CSS transition
}

// Add touch event handling improvements
function initTouchHandling() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    flashcard.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    flashcard.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchEndX - touchStartX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe right - previous card
                prevButton.click();
            } else {
                // Swipe left - next card
                nextButton.click();
            }
        } else {
            // Small movement - treat as tap
            handleFlashcardClick();
        }
    }
}
