document.addEventListener('DOMContentLoaded', function() {
    const aiToggle = document.getElementById('aiToggle');
    const chatContainer = document.querySelector('.chat-container');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.querySelector('.chat-messages');

    // Toggle chat window
    aiToggle.addEventListener('click', () => {
        chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
    });

    function addMessage(text, isAi = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isAi ? 'ai-message' : 'user-message';
        messageDiv.innerHTML = `<span class="${isAi ? 'typing-animation' : ''}">${text}</span>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleUserInput() {
        const text = userInput.value.trim();
        if (text) {
            addMessage(text, false);
            userInput.value = '';
            
            setTimeout(() => {
                const response = getAiResponse(text.toLowerCase());
                addMessage(response, true);
            }, 500);
        }
    }

    function getAiResponse(input) {
        const currentPage = window.location.pathname.split('/').pop();
        
        // Page-specific responses
        if (currentPage === 'education.html') {
            if (input.includes('internship') || input.includes('primacy')) {
                return "During the internship at PRIMACY ACADEMY, we focus on cloud computing, Python, full-stack development, and cybersecurity. Would you like specific details?";
            } else if (input.includes('university') || input.includes('degree')) {
                return "I'm pursuing a Diploma in Computer Science at Metropolitan International University, specializing in AI/ML, Quantum Computing, and Cybersecurity.";
            }
        } else if (currentPage === 'skills.html') {
            if (input.includes('military') || input.includes('security')) {
                return "Our military expertise includes tactical AI systems, network security analysis, and penetration testing. Which area interests you?";
            } else if (input.includes('quantum')) {
                return "We work with quantum algorithms, Qiskit framework, and quantum-classical integration. Would you like to know more?";
            }
        }

        // General responses
        if (input.includes('military') || input.includes('security')) {
            return "I can tell you about our military-grade projects like Atlas AI Assistant and Network Security Toolkit. What would you like to know?";
        } else if (input.includes('quantum') || input.includes('paradox')) {
            return "Our Grandfather Paradox System uses quantum computing principles to simulate complex scenarios. Would you like technical details?";
        } else if (input.includes('ai') || input.includes('artificial')) {
            return "We specialize in various AI solutions, from emotional AI to tactical analysis systems. Which area interests you?";
        } else if (input.includes('education') || input.includes('school')) {
            return "Our educational solutions include the Good Hope Divine School Portal. Would you like to see a demo?";
        } else {
            return "I'm here to help! Ask me about our military, quantum computing, AI solutions, or educational projects.";
        }
    }

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput();
    });
});