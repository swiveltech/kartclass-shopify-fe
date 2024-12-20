<style type="text/css">
    <!--
    html,
    body {
        overflow: hidden;
        height: 100%;
        max-height: 100%;
        margin: 0;
        padding: 0;
    }

    html {
        padding-bottom: 0 !important;
    }

    body {
        font-family: Arial;
        background-image: url("https://cdn.shopify.com/s/files/1/0576/2596/8849/files/gradient-bg.webp?v=1724400533") !important;
        background-size: 100% 100% !important;
        background-repeat: no-repeat;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    .kart-bot {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .kart-bot img {
        margin-right: 16px;
    }

    .kart-bot span {
        color: #ffffff;
        font-family: Arial;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
    }

    .main-page-title {
        display: none;
    }

    .new-chat {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: fixed;
        top: 82px;
        left: 55px;
        z-index: 100000;
    }

    .new-text {
        display: inline-block;
        color: #ffffff;
        font-family: Arial;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
    }

    .round-icon {
        display: flex;
        width: 60px;
        height: 60px;
        border-radius: 300px;
        background: #000000;
        padding: 0px 1px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-right: 16px;
    }

    .round-icon img {
        display: inline-flex;
    }

    .chat-container {
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 100%;
        max-height: calc(100vh - 150px);
        position: fixed;
        top: 150px;
    }

    .site-footer {
        display: none;
    }

    @media only screen and (min-width: 1300px) {
        #shopify-section-kartclass-chatbot {
            max-width: 100%;
            padding-left: 57px;
            padding-right: 57px;
        }

        .chat-container {
            max-width: 1145px;
            margin: auto;
        }

    }

    .chat-box {
        font-family: Arial;
        display: flex !important;
        flex: 1;
        overflow-y: auto;
        flex-direction: column;
        scrollbar-width: none;
        /* For Firefox */
    }

    .chat-box::-webkit-scrollbar {
        display: none;
        /* For WebKit-based browsers (Chrome, Safari) */
    }


    .top-div {
        display: flex;
        flex-direction: column;
        padding-top: 4em;
    }

    .top-div.hidden {
        padding-top: 0;
    }

    .input-area {
        position: relative;
        margin-bottom: 4em;
    }

    #userinput {
        border: 1px solid #ffffff;
        outline: none;
        padding: 16px 32px;
        padding-right: 70px;
        border-radius: 10px;
        width: 100% !important;
        background: transparent;
        color: #ffffff;
        font-family: Arial;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.5px;
        max-height: 25dvh;
        resize: none;
        overflow-y: hidden;
        min-height: 60px;
        height: 60px;
    }

    #userinput:focus {
        box-shadow: none;
    }


    #userinput::placeholder {
        color: #ffffff !important;
        font-family: Arial;
        font-size: 19.2px;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 28.8px;
        letter-spacing: 1.536px;
    }

    button {
        padding: 5px;
        border: none;
        background-color: transparent;
        color: #fff;
        cursor: pointer;
        border-radius: 0;
    }

    .message {
        margin-bottom: 37px;
        max-width: 100%;
        padding: 10px;
        word-wrap: break-word;
    }

    .message img {
        width: 47px;
        height: 46px;
    }

    .user-msg {
        display: flex;
        align-self: flex-end;
    }

    .user-msg img {
        order: 2;
        margin-left: 16px;
    }

    .bot-msg img {
        margin-right: 16px;
    }

    .user-msg div {
        border-radius: 5px 0px 5px 5px;
        background: rgba(255, 255, 255, 0.06);
        padding: 10px;
        color: #ffffff;
        font-family: Arial;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.5px;
    }

    .bot-msg {
        align-self: flex-start;
        display: flex;
    }

    .bot-msg div {
        border-radius: 0px 5px 5px 5px;
        background: rgba(255, 255, 255, 0.06);
        padding: 10px;
        color: #ffffff;
        font-family: Arial;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.5px;
    }

    .top-div {
        transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), height 1s cubic-bezier(0.4, 0, 0.2, 1);
    }


    .hidden {
        opacity: 0;
        height: 0;
        overflow: hidden;
    }

    .intro-msg p {
        font-family: Arial;
        color: #ffffff;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 76.8px;
        margin-top: 16px;
        margin-bottom: 0;
    }

    .intro-msg p span {
        color: #00934C;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.40);
    }


    .mybtn {
        position: absolute;
        right: 32px;
        top: 11px;
    }

    .mybtn button:disabled {
        opacity: 0.4;
        cursor: default;
    }

    .mybtn button:disabled:hover .sentButton svg path {
        fill: #A4A4A4 !important;
    }

    .mybtn button {
        opacity: 1;
        cursor: pointer;
    }


    .chat-message {
        display: flex;
        align-items: flex-start;
        margin: 10px;
    }

    .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .item {
        display: flex;
        float: left;
        margin: 10px 0;
    }

    .item .icon {
        background: #007bff;
        color: white;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
    }

    .robot {
        border: 1px solid black;
        width: 60px;
        height: 60px;
        background-color: black;
        border-radius: 300px;
        margin: auto;
        padding: 0px 1px;
        display: inline-block;
    }

    .new-icon {
        width: 28px;
        height: 28px;
        margin-bottom: 0;
    }

    button:hover .sentButton svg path {
        fill: #00934C;
    }

    button:active .sentButton svg path {
        fill: #00934C;
    }

    #shopify-section-kartclass-chatbot {
        display: flex;
        flex-direction: column;
        height: 100vh;
        max-height: 100vh;
        padding-left: 32px;
        padding-right: 32px;
        overflow: hidden;
        position: relative;
        align-items: center;
    }

    @media screen and (max-width: 932px) {

        body {
            background-image: url("https://cdn.shopify.com/s/files/1/0576/2596/8849/files/mobile-background-large.png?v=1724988706") !important;
            background-size: 100% 100% !important;
            background-repeat: no-repeat;
        }

        .intro-msg p {
            font-size: 32px;
            line-height: 40px;
        }

        #shopify-section-kartclass-chatbot {
            padding-top: 62px;
        }

        .top-div.hidden {
            padding-top: 0;
        }

        .message img {
            width: 36px;
            height: 36px;
        }

        .new-icon {
            width: 20px;
            height: 20px;
        }

        .round-icon {
            width: 42px;
            height: 42px;
        }

        #userinput::placeholder {
            font-size: 16px;
            font-weight: 400 !important;
            line-height: 28.8px;
        }

        .user-msg div,
        .bot-msg div {
            font-size: 14px;
            line-height: 25.5px;
        }

        .new-text {
            font-size: 16px;
            line-height: 22px;
        }

        .mybtn {
            right: 16px;
        }


        .message {
            margin-bottom: 32px;
        }

        .chat-container {
            top: 135px;
            left: 32px;
            right: 32px;
            width: auto;
        }

        .new-chat {
            left: 32px;
        }
        
        .input-area {
            margin-bottom: 6em;
        }

    }

     /* Mobile landscape */
     
  
    @media screen and (max-device-width: 932px) and (orientation: landscape) {
        .intro-msg p {
            font-size: 30px;
            line-height: 38px;
        }

        .new-icon {
            width: 18px;
            height: 18px;
        }

        .round-icon {
            width: 35px;
            height: 35px;
        }

        .new-text {
            font-size: 13px;
            line-height: 18px;
        }

        .input-area {
            margin-bottom: 4.5em;
        }

        .top-div {
            padding: 0em;
        }

        .chat-container {
            top: 120px;
            left: 32px;
            right: 32px;
            width: auto;
            max-height: calc(100vh - 130px);
        }

        .kart-bot span {
            font-size: 15px;
        }

        .kart-bot img {
            width: 35px;
            height: 35px;
        }

        .kart-bot img,
        .round-icon {
            margin-right: 10px;
        }

        .new-chat {
            top: 72px;
            left: 32px;
        }

        .message {
        margin-bottom: 25px;
        }

    }


    /* iPad portrait */

    @media only screen and (min-device-width: 933px) and (max-device-width: 1366px) and (orientation: portrait) {
        body {
            background-image: url("https://cdn.shopify.com/s/files/1/0576/2596/8849/files/mobile-background-large.png?v=1724988706") !important;
            background-size: 100% 100% !important;
            background-repeat: no-repeat;
        }

        .mybtn {
            right: 16px;
        }


        .message {
            margin-bottom: 32px;
        }

        .chat-container {
            top: 185px;
            left: 32px;
            right: 32px;
            width: auto;
        }

        .new-chat {
            top:132px;
            left: 32px;
        }
        
        .input-area {
            margin-bottom: 4.5em;
        }

        .chat-container{
          max-height: calc(100vh - 182px);
         }

    }


    /* iPad landscape */

    @media only screen and (min-device-width: 933px) and (max-device-width: 1366px) and (orientation: landscape) {
       body {
            background-image: url("https://cdn.shopify.com/s/files/1/0576/2596/8849/files/mobile-background-large.png?v=1724988706") !important;
            background-size: 100% 100% !important;
            background-repeat: no-repeat;
        }

        .mybtn {
            right: 16px;
        }


        .message {
            margin-bottom: 32px;
        }

        .chat-container {
            top: 185px;
            left: 32px;
            right: 32px;
            width: auto;
        }

        .new-chat {
            top:132px;
            left: 32px;
        }

       .input-area {
            margin-bottom: 4.5em;
        }

        .chat-container{
          max-height: calc(100vh - 182px);
         }

     }

    .intro-msg p .username {
        background: linear-gradient(88deg, #00934C 2.35%, #00D46E 27.44%, #00ACF6 59.83%, #3EEA64 99.18%);
        background: -webkit-linear-gradient(88deg, #00934C 2.35%, #00D46E 27.44%, #00ACF6 59.83%, #3EEA64 99.18%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    }

     /* tablet landscape */

 @media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape){
      .input-area {
        margin-bottom: 6em;      
      }
}

    /* Typing animation */

    .typing-animation {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 5px
    }

    .typing-animation div {
        width: 8px;
        height: 8px;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        display: inline-block;
        padding: 0;
        margin: 0;
        animation: typing 1.4s infinite both;
    }

    .typing-animation div:nth-child(1) {
        animation-delay: 0.2s;
    }

    .typing-animation div:nth-child(2) {
        animation-delay: 0.4s;
    }

    .typing-animation div:nth-child(3) {
        animation-delay: 0.6s;
    }

    @keyframes typing {

        0%,
        20%,
        100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-7px);
        }
    }

    @media only screen and (max-width: 749px) {
        .template-product .main-content {
            padding-top: 0px;
        }
    }

    /* Typing animation ends*/

    /* Bot message styles */

    .bot-msg br {
        display: none;
    }

    .bot-msg h1,
    h2,
    h3,
    h4 {
        margin-top: 0.5em;
        margin-bottom: 1.5em;
    }

    .bot-msg ol,
    .bot-msg ul {
        margin-top: 1em;
        margin-bottom: 2em;
        padding-left: 1.75em;
    }

    .bot-msg ol li,
    .bot-msg ul li {
        margin-bottom: 0.8em;
    }

    .bot-msg p:has(+ br + h1),
    .bot-msg p:has(+ br + h2),
    .bot-msg p:has(+ br + h3),
    .bot-msg p:has(+ br + h4) {
        margin-bottom: 1.5em !important;
    }

    .bot-msg ul {
        list-style-type: disc;
        padding-left: 1.75em;
    }

    /* Bot message styles ends */

    /* Styles for the session expired popup */
.session-expired-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for the overlay */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.popup-content {
    background-color: rgba(0, 147, 76, 0.69); /* Green background with transparency */
    color: white; /* White text color */
    padding: 20px 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: Arial, sans-serif;
    max-width: 400px;
    width: 100%;
}

.popup-content p {
    font-size: 18px;
    margin-bottom: 20px;
}

#refresh-page-btn {
    background-color: white;
    color: rgba(0, 147, 76, 0.69);
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#refresh-page-btn:hover {
    background-color: rgba(255, 255, 255, 0.8);
}
 /* Popup styles ends */
    -->
</style>
<div id="new-chat-btn" class="new-chat"><span class="round-icon"> <img class="new-icon" alt="Chatbot Icon"
            src="https://cdn.shopify.com/s/files/1/0576/2596/8849/files/edit-icon.svg?v=1724400638"> </span> <span
        class="new-text">New Chat</span></div>
<div class="chat-container">
    <div id="top-div" class="top-div">
        <div class="kart-bot"><img class="chatbot-icon" alt="Chatbot Icon" height="46px" width="46px"
                src="https://cdn.shopify.com/s/files/1/0720/6898/9168/files/chatbot-icon.svg?v=1723630972"><span>APEX</span></div>
        <div class="intro-msg" id="intro-msg">
            <p><span>Hello </span><span class="username">{{ customer.first_name }} {{ customer.last_name
                    }}!</span><br>How Can I Help you?</p>
        </div>
    </div>
    <div id="chat-box" class="chat-box"></div>
    <div class="input-area"><textarea id="userinput" placeholder="Ask your query" autofocus></textarea>
        <span class="mybtn"> <button id="submitButton" onclick="sendMessage()"> <span class="sentButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <g clip-path="url(#clip0_815_418)">
                            <path
                                d="M20.7346 5.68609C21.1666 4.49109 20.0086 3.33309 18.8136 3.76609L4.20855 9.04809C3.00955 9.48209 2.86455 11.1181 3.96755 11.7571L8.62955 14.4561L12.7926 10.2931C12.9812 10.1109 13.2338 10.0101 13.496 10.0124C13.7582 10.0147 14.009 10.1199 14.1944 10.3053C14.3798 10.4907 14.4849 10.7415 14.4872 11.0037C14.4895 11.2659 14.3887 11.5185 14.2066 11.7071L10.0436 15.8701L12.7436 20.5321C13.3816 21.6351 15.0176 21.4891 15.4516 20.2911L20.7346 5.68609Z"
                                fill="#A4A4A4" />
                        </g>
                        <defs>
                            <clipPath id="clip0_815_418">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </span> </button> </span>
    </div>
</div>
<script type="text/javascript">

    // Initially disable the send button
    document.querySelector(".mybtn button").disabled = true;

    // Function to create a popup dialog
    function showSessionExpiredPopup() {
        const popup = document.createElement("div");
        popup.className = "session-expired-popup";
        popup.innerHTML = `
            <div class="popup-content">
                <p>Your session has expired. Please refresh the page to continue.</p>
                <button id="refresh-page-btn">Refresh</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Add event listener to refresh the page
        document.getElementById("refresh-page-btn").addEventListener("click", function() {
            location.reload(); 
        });
    }

    // Function to handle API errors
    function handleAPIError(status) {
        if (status === 401 || status === 403) {
            showSessionExpiredPopup(); 
        }
    }

    // Function to create a new message element
    function createMessageElement(htmlContent, className, iconUrl) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${className}`;
        const iconElement = document.createElement("img");
        iconElement.src = iconUrl;
        messageElement.appendChild(iconElement);
        const textElement = document.createElement("div");
        textElement.innerHTML = htmlContent;
        messageElement.appendChild(textElement);
        return messageElement;
    }


    // Function to create the typing indicator
    function createTypingIndicator() {
        const typingElement = document.createElement("div");
        typingElement.className = "message bot-msg typing-indicator";

        const iconElement = document.createElement("img");
        iconElement.src = "https://cdn.shopify.com/s/files/1/0720/6898/9168/files/kc-bot-icon.svg?v=1723796899";
        typingElement.appendChild(iconElement);

        const animationContainer = document.createElement("div");
        animationContainer.className = "typing-animation";

        for (let i = 0; i < 3; i++) {
            const dot = document.createElement("div");
            animationContainer.appendChild(dot);
        }

        typingElement.appendChild(animationContainer);
        return typingElement;
    }


    let conversationId = null;
    let token = null;

    // Function to generate token and conversation ID
    async function generateTokenAndConversationId() {
        try {
            // Get the Shopify customer ID (if available)
            var userId = "{{ customer.id }}";

            const response = await fetch("https://kart-class-chat-service.azure-api.net/kart-class-function-app/generate-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "userId": userId.toString()

                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Extract token and conversation_id from the response
            token = data.token;
            conversationId = data.conversation_id;
            //console.log("Token:", token);
            //console.log("Conversation ID:", conversationId);

        } catch (error) {
            console.error("Error generating token and conversation ID:", error);
        }
    }

    generateTokenAndConversationId();



    async function sendMessage() {
        const userInput = document.getElementById("userinput");
        const chatBox = document.getElementById("chat-box");
        const topDiv = document.getElementById("top-div");


        // Hide the top div on first message
        if (topDiv) {
            topDiv.classList.add("hidden");
        }

        // Get user message
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        // Display user message
        chatBox.appendChild(createMessageElement(userMessage, "user-msg", "https://cdn.shopify.com/s/files/1/0576/2596/8849/files/kc-user-icon.svg?v=1724400733"));

        // Clear input field
        userInput.value = "";
        userInput.style.height = "60px"; // Reset height to initial value
        document.querySelector(".mybtn button").disabled = true;

        // Ensure the chatbox scrolls to the bottom after the user message is added
        chatBox.scrollTop = chatBox.scrollHeight;

        // Add typing indicator
        const typingIndicator = createTypingIndicator();
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Generate bot response by calling the API
        const botResponse = await getBotResponse(userMessage);

        // Remove typing indicator and display bot message
        setTimeout(() => {
            chatBox.removeChild(typingIndicator);

            // Save the current scroll height before adding the bot message
            const previousScrollHeight = chatBox.scrollHeight;

            const formattedResponse = processBotResponse(botResponse);
            const botMessageElement = createMessageElement(formattedResponse, "bot-msg", "https://cdn.shopify.com/s/files/1/0576/2596/8849/files/kc-bot-icon.svg?v=1724400785");
            chatBox.appendChild(botMessageElement);

            // Check if the bot response is lengthy (i.e., it overflows the visible area)
            if (chatBox.scrollHeight > chatBox.clientHeight) {
                // Calculate the new scroll position to bring the start of the bot message into view
                const botMessageTop = botMessageElement.offsetTop;
                chatBox.scrollTop = botMessageTop;
            } else {
                // Otherwise, scroll to the bottom
                chatBox.scrollTop = chatBox.scrollHeight;
            }

        }, 500);
    }



    // Function to get bot response from the API
    async function getBotResponse(message) {
        try {
            var userId = "{{ customer.id }}";
            const response = await fetch("https://kart-class-chat-service.azure-api.net/kart-class-function-app/chat", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "conversation_id": conversationId,
                    "Content-Type": "application/json",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Connection": "keep-alive"
                },
                body: JSON.stringify({
                    "type": "message",
                    "from": {
                        "id": userId.toString()
                    },
                    "text": message
                })
            });

            if (!response.ok) {
                handleAPIError(response.status); 
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Check if the response has content before trying to parse it as JSON
            const responseText = await response.text();
            if (!responseText) {
                throw new Error("Received empty response from server");
            }

            // Try to parse the response text as JSON
            const data = JSON.parse(responseText);

            // Check if the response structure is as expected
            if (data && data && data.botResponse) {
                return data.botResponse; // Return the text from the response                
            } else {
                console.error('Unexpected API response structure:', data);
                return "Sorry, I couldn't understand the response from the server.";
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return "Sorry, something went wrong. Please try again later.";
        }
    }


    //format bot response
    function processBotResponse(responseText) {
        // Apply basic HTML formatting
        responseText = responseText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Bold text
        responseText = responseText.replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italic text
        responseText = responseText.replace(/\n/g, "<br>"); // Line breaks

        // Split the response into lines
        const lines = responseText.split(/<br>/);

        let formattedResponse = "";
        let insideList = false;

        lines.forEach(line => {
            // Check if the line is a bullet point
            if (line.startsWith("- ")) {
                if (!insideList) {
                    formattedResponse += "<ul>"; // Start a new unordered list
                    insideList = true;
                }
                formattedResponse += `<li>${line.substring(2)}</li>`; // Add the list item, stripping the "- "
            }
            // Check if the line is a numbered list item
            else if (line.match(/^\d+\.\s+/)) {
                if (!insideList) {
                    formattedResponse += "<ol>"; // Start a new ordered list
                    insideList = true;
                }
                formattedResponse += `<li>${line.replace(/^\d+\.\s+/, '')}</li>`; // Add the list item, stripping the number and dot
            }
            else {
                // If we're inside a list, close the list before adding regular content
                if (insideList) {
                    formattedResponse += insideList === "ul" ? "</ul>" : "</ol>";
                    insideList = false;
                }
                formattedResponse += line; // Add the regular content
            }
        });

        // If we end inside a list, close it
        if (insideList) {
            formattedResponse += insideList === "ul" ? "</ul>" : "</ol>";
        }

        return formattedResponse;
    }



    // Function to clear the chat and generate new token and conversation ID
    async function clearChat() {
        const chatBox = document.getElementById("chat-box");

        // Clear all messages
        chatBox.innerHTML = "";

        // Show the top div
        const topDiv = document.getElementById("top-div");

        if (topDiv) {
            topDiv.classList.remove("hidden");
        }

        // Generate new token and conversation ID
        try {
            const response = await fetch("https://kart-class-chat-service.azure-api.net/kart-class-function-app/generate-token", {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            // Extract token and conversation_id from the response
            const { token, conversation_id } = data;

            //console.log("New Token:", token);
            //console.log("New Conversation ID:", conversationId);


        } catch (error) {
            console.error('Failed to generate new token and conversation ID:', error);
        }
    }

    // Add event listener for the New Chat button
    document.getElementById("new-chat-btn").addEventListener("click", clearChat);

    // Send message on Enter key press
    document.getElementById("userinput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default newline behavior
            sendMessage();
        }
    });

    // Disable/Enable send button based on input content
    document.getElementById("userinput").addEventListener("input", function () {
        const sendButton = document.querySelector(".mybtn button");
        sendButton.disabled = this.value.trim() === "";
    });


    const textarea = document.getElementById("userinput");

    // Function to auto-resize the textarea
    function autoResizeTextarea() {
        // Reset the height to allow shrinking
        this.style.height = "60px";

        // Set the height to match the content's scroll height
        this.style.height = this.scrollHeight + "px";
    }

    // Attach the auto-resize function to the input event
    textarea.addEventListener("input", autoResizeTextarea);

    // Refresh token generation
      function refreshTokenBeforeExpired() {
        setTimeout(function () {
        getRefreshToken();
        refreshTokenBeforeExpired();
      }, 55 * 60 * 1000); // Refresh every 55 minutes
    }

    refreshTokenBeforeExpired();

    async function getRefreshToken() {
        const url = 'https://kart-class-chat-service.azure-api.net/kart-class-function-app/refresh-token';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // Use current token
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                handleAPIError(response.status);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            token = data.token;
        } catch (error) {
            console.error("Error refreshing token:", error);
        }
    }


</script>