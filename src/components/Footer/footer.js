import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
	<div className={`defaultFooter ${footerClass}`}>
		<p>
			View site source on{" "}
			<a
				href="https://github.com/RisingStar-Web/Personal-Website-Gatsby"
				target="_blank"
			>
				Github
			</a>{" "}
			| Developer{" "}
			<a href="https://www.behance.net/risingstar1002" target="_blank">
				Roy Chong
			</a>
		</p>
	</div>
);
Footer.propTypes = {
	footerClass: PropTypes.string
};
export default Footer;
