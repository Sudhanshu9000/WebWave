import React, { useState, useEffect, useRef } from 'react';

const ChatWithMe = ({ onComplete }) => {
	const [messages, setMessages] = useState([]);
	const chatMessages = [
        "Hi there! 👋 Need Help Creating My Website",
        "...",
        "Sure! What kind of website do you need?",
        "A restaurant site?",
        "Wait... Building it for you...⏳",
        "Done! Your restaurant website is ready! 🎉",
        "Thank you so much, it's perfect!",
        "You're welcome! Your website is all set to go live! 😄",
        
    ];

	const messagesEndRef = useRef(null);

	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			if (index < chatMessages.length) {
				setMessages((prevMessages) => [...prevMessages, chatMessages[index]]);
				index++;
			} else {
				clearInterval(interval);
				setTimeout(() =>{
					onComplete();
				}, 2000);
			}
		}, 1000); 

		return () => clearInterval(interval);
	}, [onComplete]);

	// useEffect(() => {
	// 	if (messagesEndRef.current) {
	// 		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	// 	}
	// }, [messages]);

	return (
		<div className="flex justify-center items-center m-40 h-10 pt-6"
        style={{ animation: 'moveUp 1s forwards' }}
        >
			<div className="bg-gray-100 p-4 rounded-lg shadow-lg  w-90 md:w-1/2 h-96 overflow-y-auto ">
				{messages.map((message, idx) => (
					<div
						key={idx}
						className={`mb-2 p-2 rounded-lg text-base md:text-3xl flex ${
							idx % 2 === 0 ? 'bg-blue-500 text-white  justify-start' : 'bg-gray-300 text-black justify-end'
						} transition-transform transform-gpu duration-500 ease-out text-center`}
						style={{
							maxWidth: '100%', // Adjusted to ensure messages fit within the container
							transform: 'translateY(10px)',
							opacity: 0,
							animation: 'fadeIn 0.5s forwards',
							animationDelay: `${idx * 0.5}s`
						}}
					>
						{message}
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>
		</div>
	);
};

export default ChatWithMe;
