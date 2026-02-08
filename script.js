// ===== Resume Data (update with your actual info) =====
const resumeData = {
    name: "Nikhil Muthyala",
    title: "Data Scientist | AI/ML Engineer",
    email: "nikm8218@gmail.com",
    phone: "+1 (205) 563-0549",
    location: "Edison, NJ",
    linkedin: "linkedin.com/in/nikhil-muthyala14",
    about: "Data Scientist with 6 years of experience applying machine learning, statistics, and experimentation to real-world business problems. Strong in Python/SQL, EDA, feature engineering, and building interactive dashboards (Power BI/Dash/QlikSense-style reporting) to drive decision-making. Experienced delivering scalable analytics solutions across cross-functional stakeholders.",
    experience: [
        {
            role: "AI Engineer (Applied Data Science / ML)",
            company: "MaxisAI",
            period: "Feb 2024 - Present",
            details: [
                "Built and deployed ML workflows for clinical-trial data operations, reducing manual review by 50+ hours per solution",
                "Designed experiments and evaluation (error analysis, regression tests, quality metrics) to improve model/workflow robustness",
                "Developed NLP/LLM-assisted information extraction pipelines to convert unstructured clinical documents into structured outputs",
                "Created stakeholder-facing dashboards to track workflow KPIs, exceptions, and quality trends",
                "Delivered rapid client POCs that helped secure 4 enterprise clients in 6 months and earned 'Best of the Show' at BIO-IT World"
            ]
        },
        {
            role: "Data Analyst II (ML & Analytics)",
            company: "Nano Healthcare",
            period: "Jan 2021 - Jan 2022",
            details: [
                "Performed EHR-driven EDA using Python to identify outcome drivers, contributing to a 15% increase in treatment effectiveness",
                "Built baseline predictive models in PyTorch to validate signal on readmission-risk features",
                "Administered daily SSIS queries and database maintenance, improving task efficiency by 30%",
                "Automated analytics and reporting, reducing readmission by 11% through faster interventions"
            ]
        },
        {
            role: "Associate Professional Application Delivery (Data Science / Analytics)",
            company: "DXC Technologies",
            period: "Dec 2019 - Dec 2020",
            details: [
                "Built an end-to-end ingestion pipeline using Snowpipe (Snowflake) from AWS S3, improving throughput by 50%",
                "Created a BigQuery reporting layer with optimized table design, reducing compute cost",
                "Developed preprocessing + feature engineering using PySpark; trained models with scikit-learn improving accuracy by 15%",
                "Containerized recurring batch scoring using Docker on Linux, reducing pricing cycle time by 10%"
            ]
        },
        {
            role: "Marketing Business Analyst",
            company: "BYJU's",
            period: "Jun 2018 - Aug 2019",
            details: [
                "Improved marketing performance by 25% leveraging Google Analytics and CRM data",
                "Created stakeholder dashboards and reports to communicate insights and support decision-making"
            ]
        }
    ],
    education: [
        {
            degree: "Master's in Data Science",
            school: "University of Alabama at Birmingham (UAB)",
            period: "2023",
            details: "Worked as a Teaching Assistant (TA) for Cloud Computing"
        }
    ],
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
        {
            name: "Predictive Modeling (Customer / Outcomes)",
            description: "End-to-end predictive modeling pipeline for customer behavior and outcome prediction.",
            tech: ["Python", "scikit-learn", "PyTorch"]
        },
        {
            name: "NLP Text Mining Pipeline",
            description: "NLP pipeline for text mining, entity extraction, and topic modeling from unstructured data.",
            tech: ["spaCy", "NLTK", "Gensim"]
        },
        {
            name: "Interactive Analytics Dashboard",
            description: "KPI monitoring and data visualization dashboard for real-time business intelligence.",
            tech: ["Power BI", "Dash", "Data Visualization"]
        }
    ],
    certifications: [
        "Perform Predictive Data Analysis in BigQuery",
        "Implement CI/CD Pipelines on Google Cloud",
        "Python for Data Science, AI and Development",
        "Generative AI with Google Cloud (Foundation)"
    ]
};

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to animatable elements
document.querySelectorAll('.timeline-item, .skill-category, .project-card, .contact-card, .about-content, .section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Chatbot =====
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
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatInput.value = '';

    // Show typing indicator
    const typingEl = addMessage('<span class="typing-dots">Thinking...</span>', 'bot');

    setTimeout(() => {
        typingEl.remove();
        const response = generateResponse(text);
        addMessage(response, 'bot');
    }, 600);
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

    // Greetings
    if (q.match(/^(hi|hello|hey|howdy|greetings)/)) {
        return `Hello! I'm the resume assistant for ${resumeData.name}. I can tell you about their experience, skills, education, or projects. What would you like to know?`;
    }

    // Name
    if (q.includes('name') || q.includes('who')) {
        return `This is the portfolio of <strong>${resumeData.name}</strong> — ${resumeData.title}.`;
    }

    // About
    if (q.includes('about') || q.includes('tell me') || q.includes('introduce')) {
        return resumeData.about;
    }

    // Experience
    if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('career')) {
        let response = `Here's ${resumeData.name}'s work experience:<br><br>`;
        resumeData.experience.forEach(exp => {
            response += `<strong>${exp.role}</strong> at ${exp.company} (${exp.period})<br>`;
            exp.details.forEach(d => {
                response += `• ${d}<br>`;
            });
            response += '<br>';
        });
        return response;
    }

    // Education
    if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('school') || q.includes('study') || q.includes('college') || q.includes('master')) {
        const edu = resumeData.education[0];
        return `<strong>${edu.degree}</strong><br>${edu.school} (${edu.period})<br>${edu.details}`;
    }

    // Skills
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('framework') || q.includes('tool')) {
        let response = `Here are ${resumeData.name}'s technical skills:<br><br>`;
        response += `<strong>Programming:</strong> ${resumeData.skills.programming.join(', ')}<br>`;
        response += `<strong>ML/Statistics:</strong> ${resumeData.skills.ml_statistics.join(', ')}<br>`;
        response += `<strong>ML Libraries:</strong> ${resumeData.skills.ml_libraries.join(', ')}<br>`;
        response += `<strong>NLP:</strong> ${resumeData.skills.nlp.join(', ')}<br>`;
        response += `<strong>Visualization:</strong> ${resumeData.skills.visualization.join(', ')}<br>`;
        response += `<strong>Cloud/Data:</strong> ${resumeData.skills.cloud.join(', ')}<br>`;
        response += `<strong>Big Data/ETL:</strong> ${resumeData.skills.bigdata.join(', ')}<br>`;
        response += `<strong>Engineering:</strong> ${resumeData.skills.engineering.join(', ')}`;
        return response;
    }

    // Projects
    if (q.includes('project') || q.includes('portfolio') || q.includes('built') || q.includes('build')) {
        let response = `Here are some notable projects:<br><br>`;
        resumeData.projects.forEach(p => {
            response += `<strong>${p.name}</strong>: ${p.description}<br>Tech: ${p.tech.join(', ')}<br><br>`;
        });
        return response;
    }

    // Certifications
    if (q.includes('certif') || q.includes('credential') || q.includes('certificate')) {
        let response = `${resumeData.name}'s certifications:<br><br>`;
        resumeData.certifications.forEach(c => {
            response += `• ${c}<br>`;
        });
        return response;
    }

    // Contact
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('phone') || q.includes('location')) {
        return `You can reach ${resumeData.name} at:<br><br><strong>Email:</strong> ${resumeData.email}<br><strong>Phone:</strong> ${resumeData.phone}<br><strong>LinkedIn:</strong> ${resumeData.linkedin}<br><strong>Location:</strong> ${resumeData.location}`;
    }

    // Thanks
    if (q.match(/(thank|thanks|thx)/)) {
        return "You're welcome! Let me know if you have any other questions.";
    }

    // Goodbye
    if (q.match(/(bye|goodbye|see you|later)/)) {
        return "Goodbye! Thanks for visiting. Feel free to come back anytime!";
    }

    // Default
    return `I can help you learn about ${resumeData.name}'s <strong>experience</strong>, <strong>skills</strong>, <strong>education</strong>, <strong>projects</strong>, or <strong>contact info</strong>. What would you like to know?`;
}

// ===== Smooth active nav highlight =====
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
                link.style.color = 'var(--text)';
            } else {
                link.style.color = '';
            }
        }
    });
});
