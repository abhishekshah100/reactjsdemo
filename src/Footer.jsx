import React, {useState} from 'react';

const Footer = () => {
	let Ctime= new Date().toLocaleTimeString();
	const [time, setTime] = useState(Ctime);

	setInterval(updateTime,1000);
	function updateTime(){
		Ctime= new Date().toLocaleString();
		setTime(Ctime);
	}
	return (
	<>
		<footer className="w-100 bg-light text-center">
			<p>&copy; 2020 AbhishekShah. All Rights Reserved | Terms and Conditions</p> 
			<p>{time}</p>
		</footer>
	</>
	);
};

export default Footer;