import React from "react";

export const Header = ({title, totalPlayers}) => {
	return (
		<header className="header">
			<h1 className="h1">{title}</h1>
			<span className="stats">Player: {totalPlayers}</span>
		</header>
	)
}