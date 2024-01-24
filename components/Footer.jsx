import React from "react";
import {
	AiFillInstagram,
	AiFillFacebook,
	AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
	return (
		<div className="footer-container">
			<p>2024 JSM Headphones All rights reserved</p>
			<p className="icons">
				<AiFillInstagram />
				<AiFillFacebook />
				<AiOutlineTwitter />
			</p>
		</div>
	);
};

export default Footer;
