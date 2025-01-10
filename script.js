const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const quickReplies = document.getElementById('quickReplies');

let userName = "";


function addMessage(content, sender) {
    const message = document.createElement('div');
    message.classList.add('chat-bubble', sender === 'bot' ? 'bot-message' : 'user-message');
    message.innerHTML = content;
    chatArea.appendChild(message);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function handleUserInput() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    userInput.value = "";

    if (!userName) {
        userName = text;
        addMessage(`It's great to meet you, ${userName}! How can I assist you today?`, 'bot');
        return;
    }

    // Simulated responses
    switch (text.toLowerCase()) {
        case 'what is blockchain?':
            addMessage('Blockchain is a decentralized, secure ledger technology. It\'s like a digital notebook that records transactions transparently and immutably. Learn more: <a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank">Blockchain Explained</a>.', 'bot');
            break;
        case 'what is cryptocurrency?':
            addMessage('Cryptocurrency is a form of digital money that uses cryptography for security. Popular examples include Bitcoin and Ethereum. Learn more: <a href="https://www.investopedia.com/terms/c/cryptocurrency.asp" target="_blank">Cryptocurrency Guide</a>.', 'bot');
            break;
        case 'what are smart contracts?':
            addMessage('Smart contracts are self-executing agreements with terms written in code. They automate processes without intermediaries. Learn more: <a href="https://ethereum.org/en/developers/docs/smart-contracts/" target="_blank">Smart Contracts Explained</a>.', 'bot');
            break;
        case 'what is an ico?':
            addMessage('An ICO, or Initial Coin Offering, is a fundraising method where new cryptocurrencies sell their tokens to the public. Learn more: <a href="https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp" target="_blank">ICO Guide</a>.', 'bot');
            break;
        case 'how does mining work?':
            addMessage('Mining is the process of validating transactions and adding them to the blockchain by solving complex mathematical puzzles. Miners are rewarded with cryptocurrency for their work. Learn more: <a href="https://www.investopedia.com/terms/b/blockchain-mining.asp" target="_blank">Mining Explained</a>.', 'bot');
            break;
        case 'what is ethereum?':
            addMessage('Ethereum is a blockchain platform that supports smart contracts and decentralized applications (dApps). It enables developers to build and deploy their own applications. Learn more: <a href="https://ethereum.org/en/what-is-ethereum/" target="_blank">Ethereum Explained</a>.', 'bot');
            break;
        case 'what is a wallet?':
            addMessage('A cryptocurrency wallet is a tool that allows you to store, send, and receive digital assets. It can be hardware-based or software-based. Learn more: <a href="https://www.investopedia.com/terms/c/cryptocurrency-wallet.asp" target="_blank">Wallet Guide</a>.', 'bot');
            break;
        case 'what is defi?':
            addMessage('Decentralized Finance (DeFi) is an ecosystem of financial services built on blockchain technology. It eliminates intermediaries like banks and allows for peer-to-peer transactions. Learn more: <a href="https://www.coindesk.com/learn/defi-explained" target="_blank">DeFi Explained</a>.', 'bot');
            break;
        case 'what is an nft?':
            addMessage('An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item, such as digital art or collectibles. Learn more: <a href="https://www.investopedia.com/terms/n/non-fungible-token-nft.asp" target="_blank">NFT Guide</a>.', 'bot');
            break;
        case 'bye':
        case 'thank you':
        case 'that\'s all':
            addMessage(`Thank you, ${userName}! It was a pleasure chatting with you. Have a fantastic day!`, 'bot');
            break;
        default:
            addMessage(`I'm not sure about that, ${userName}. Would you like me to provide general resources on blockchain or crypto?`, 'bot');
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserInput();
});

quickReplies.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply')) {
        userInput.value = e.target.textContent;
        handleUserInput();
    }
});
