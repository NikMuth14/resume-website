// ===== Resume Data =====
const resumeData = {
    name: "Nikhil Muthyala",
    title: "Data Scientist | AI/ML Engineer",
    email: "nikm8218@gmail.com",
    phone: "+1 (205) 563-0549",
    location: "Edison, NJ",
    linkedin: "linkedin.com/in/nikhil-muthyala14",
    about: "Data Scientist with 6 years of experience applying machine learning, statistics, and experimentation to real-world business problems. Strong in Python/SQL, EDA, feature engineering, and building interactive dashboards to drive decision-making.",
    experience: [
        { role: "AI Engineer (Applied Data Science / ML)", company: "MaxisAI", period: "Feb 2024 - Present",
          details: ["Built ML workflows reducing manual review by 50+ hours", "Designed experiments to improve model robustness", "Developed NLP/LLM extraction pipelines", "Created KPI dashboards", "Secured 4 enterprise clients; 'Best of the Show' at BIO-IT World"] },
        { role: "Data Analyst II (ML & Analytics)", company: "Nano Healthcare", period: "Jan 2021 - Jan 2022",
          details: ["EHR-driven EDA: 15% increase in treatment effectiveness", "PyTorch predictive models for readmission-risk", "SSIS optimization: 30% efficiency gain", "Automated analytics: 11% readmission reduction"] },
        { role: "Data Science / Analytics", company: "DXC Technologies", period: "Dec 2019 - Dec 2020",
          details: ["Snowpipe pipeline from AWS S3: 50% throughput gain", "Optimized BigQuery reporting layer", "PySpark + scikit-learn: 15% accuracy improvement", "Docker batch scoring: 10% cycle time reduction"] },
        { role: "Marketing Business Analyst", company: "BYJU's", period: "Jun 2018 - Aug 2019",
          details: ["25% marketing performance improvement via Google Analytics", "Stakeholder dashboards for decision-making"] }
    ],
    education: [{ degree: "Master's in Data Science", school: "University of Alabama at Birmingham (UAB)", period: "2023", details: "Teaching Assistant (TA) for Cloud Computing" }],
    skills: {
        programming: ["Python", "SQL", "R"],
        ml_statistics: ["Supervised/Unsupervised ML", "Regression/Classification", "Clustering", "Model Evaluation", "A/B Testing"],
        ml_libraries: ["scikit-learn", "PyTorch", "TensorFlow", "NumPy", "Pandas"],
        nlp: ["NLTK", "spaCy", "Gensim"],
        visualization: ["Power BI", "Dash", "QlikSense", "Matplotlib", "Seaborn"],
        cloud: ["GCP", "BigQuery", "AWS (S3, EC2, RDS)", "Snowflake", "Snowpipe"],
        bigdata: ["PySpark", "Spark", "Hive", "ETL", "Feature Engineering"],
        engineering: ["Git", "Docker", "Linux/Unix", "ML Pipelines"]
    },
    projects: [
        { name: "Predictive Modeling", description: "End-to-end pipeline for customer behavior and outcome prediction.", tech: ["Python", "scikit-learn", "PyTorch"], rarity: "LEGENDARY" },
        { name: "NLP Text Mining Pipeline", description: "Text mining, entity extraction, and topic modeling.", tech: ["spaCy", "NLTK", "Gensim"], rarity: "EPIC" },
        { name: "Interactive Analytics Dashboard", description: "KPI monitoring for real-time business intelligence.", tech: ["Power BI", "Dash"], rarity: "RARE" }
    ],
    certifications: ["Predictive Data Analysis in BigQuery", "CI/CD Pipelines on Google Cloud", "Python for Data Science, AI & Dev", "Generative AI with Google Cloud"]
};

// ===== Particle System =====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.hue = Math.random() > 0.5 ? 150 : 190;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== Typing Effect =====
const typingPhrases = [
    "6+ years applying ML to real-world problems...",
    "Building NLP pipelines & LLM workflows...",
    "Python | SQL | scikit-learn | PyTorch...",
    "Turning data into actionable insights...",
    "Currently questing at MaxisAI..."
];
let phraseIdx = 0, charIdx = 0, isDeleting = false;
const typingEl = document.getElementById('typingText');

function typeEffect() {
    const current = typingPhrases[phraseIdx];
    typingEl.textContent = current.substring(0, charIdx);
    if (!isDeleting) {
        charIdx++;
        if (charIdx > current.length) { isDeleting = true; setTimeout(typeEffect, 2000); return; }
    } else {
        charIdx--;
        if (charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % typingPhrases.length; }
    }
    setTimeout(typeEffect, isDeleting ? 30 : 60);
}
typeEffect();

// ===== Counter Animation =====
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            let current = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
                current += step;
                if (current >= target) { current = target; clearInterval(timer); }
                el.textContent = current + (target === 6 ? '+' : target === 15 ? '+' : '');
            }, 40);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('.gs-num').forEach(el => counterObserver.observe(el));

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// ===== Scroll Animations =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.quest, .skill-branch, .achievement, .badge-card, .portal, .terminal, .game-stat, .section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});


// ===== NPC Chatbot =====
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbotClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatbotMessages');

chatbotToggle.addEventListener('click', () => {
    chatbot.classList.add('open');
    chatbotToggle.classList.add('hidden');
    chatInput.focus();
});
chatbotClose.addEventListener('click', () => {
    chatbot.classList.remove('open');
    chatbotToggle.classList.remove('hidden');
});
chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

function quickAsk(topic) {
    chatInput.value = topic;
    sendMessage();
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    const typingEl = addMessage('...', 'bot');
    setTimeout(() => { typingEl.remove(); addMessage(generateResponse(text), 'bot'); }, 500);
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;
    msgDiv.innerHTML = `<div class="message-content"><p>${text}</p></div>`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return msgDiv;
}

function generateResponse(input) {
    const q = input.toLowerCase();

    if (q.match(/^(hi|hello|hey|howdy|greetings|yo)/))
        return `&#9876;&#65039; Greetings, adventurer! I am the Guide NPC for <strong>${resumeData.name}</strong>. Ask me about this player's <strong>quests</strong>, <strong>skill tree</strong>, <strong>training</strong>, <strong>achievements</strong>, or <strong>badges</strong>!`;

    if (q.includes('name') || q.includes('who'))
        return `&#128100; <strong>PLAYER:</strong> ${resumeData.name}<br><strong>CLASS:</strong> ${resumeData.title}<br><strong>LEVEL:</strong> 25<br><strong>SPAWN:</strong> ${resumeData.location}`;

    if (q.includes('about') || q.includes('tell me') || q.includes('introduce') || q.includes('player'))
        return `&#128220; <strong>PLAYER BIO:</strong><br>${resumeData.about}`;

    if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('quest') || q.includes('career')) {
        let r = `&#9876;&#65039; <strong>QUEST LOG:</strong><br><br>`;
        resumeData.experience.forEach(exp => {
            r += `<strong>${exp.role}</strong> @ ${exp.company}<br>&#128339; ${exp.period}<br>`;
            exp.details.forEach(d => r += `&#9745; ${d}<br>`);
            r += '<br>';
        });
        return r;
    }

    if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('school') || q.includes('train') || q.includes('master')) {
        const edu = resumeData.education[0];
        return `&#128220; <strong>TRAINING GROUNDS:</strong><br><strong>${edu.degree}</strong><br>&#128205; ${edu.school} (${edu.period})<br>&#127941; ${edu.details}`;
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('weapon') || q.includes('tool') || q.includes('power')) {
        let r = `&#127919; <strong>SKILL TREE:</strong><br><br>`;
        r += `<strong>&#9876;&#65039; Programming:</strong> ${resumeData.skills.programming.join(', ')}<br>`;
        r += `<strong>&#128300; ML/Stats:</strong> ${resumeData.skills.ml_statistics.join(', ')}<br>`;
        r += `<strong>&#128218; Libraries:</strong> ${resumeData.skills.ml_libraries.join(', ')}<br>`;
        r += `<strong>&#128483;&#65039; NLP:</strong> ${resumeData.skills.nlp.join(', ')}<br>`;
        r += `<strong>&#128202; Viz:</strong> ${resumeData.skills.visualization.join(', ')}<br>`;
        r += `<strong>&#9729;&#65039; Cloud:</strong> ${resumeData.skills.cloud.join(', ')}<br>`;
        r += `<strong>&#128640; Big Data:</strong> ${resumeData.skills.bigdata.join(', ')}<br>`;
        r += `<strong>&#128736;&#65039; Eng:</strong> ${resumeData.skills.engineering.join(', ')}`;
        return r;
    }

    if (q.includes('project') || q.includes('achievement') || q.includes('portfolio') || q.includes('built') || q.includes('loot')) {
        let r = `&#127942; <strong>ACHIEVEMENTS UNLOCKED:</strong><br><br>`;
        resumeData.projects.forEach(p => {
            r += `&#9733; <strong>[${p.rarity}]</strong> ${p.name}<br>${p.description}<br>Loot: ${p.tech.join(', ')}<br><br>`;
        });
        return r;
    }

    if (q.includes('certif') || q.includes('credential') || q.includes('badge')) {
        let r = `&#127941; <strong>BADGES EARNED:</strong><br><br>`;
        resumeData.certifications.forEach(c => r += `&#128737;&#65039; ${c}<br>`);
        return r;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('phone') || q.includes('party') || q.includes('invite'))
        return `&#128140; <strong>PARTY INVITE:</strong><br><br>&#128231; Email: ${resumeData.email}<br>&#128222; Voice: ${resumeData.phone}<br>&#127760; LinkedIn: ${resumeData.linkedin}<br>&#128205; Spawn: ${resumeData.location}`;

    if (q.match(/(thank|thanks|thx)/))
        return "&#128150; Safe travels, adventurer! May your code compile on the first try!";

    if (q.match(/(bye|goodbye|see you|later)/))
        return "&#128075; Until we meet again, brave one! The quest continues...";

    return `&#129300; I didn't quite catch that spell. Try asking about this player's <strong>quests</strong>, <strong>skills</strong>, <strong>training</strong>, <strong>achievements</strong>, <strong>badges</strong>, or <strong>party invite</strong>!`;
}

// ===== Active Nav Highlight =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                link.style.color = 'var(--primary)';
                link.style.textShadow = '0 0 8px rgba(0,255,136,0.5)';
            } else {
                link.style.color = '';
                link.style.textShadow = '';
            }
        }
    });
});
