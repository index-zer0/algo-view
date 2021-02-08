/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

const Navbar = (props) => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{props.children}</ul>
		</nav>
	);
};

export const NavItem = (props) => {
	const [open, setOpen] = React.useState(false);

	return (
		<li className="nav-item">
			<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
				{props.icon}
			</a>
			{open && props.children}
		</li>
	);
};

const DropdownItem = (props) => {
	return (
		<a
			href={props.link ? props.link : "#"}
			className="menu-item"
			onClick={props.onClick}
		>
			{props.leftIcon && (
				<span className="icon-button">{props.leftIcon}</span>
			)}
			{props.children}
			{props.rightIcon && (
				<span className="icon-button">{props.rightIcon}</span>
			)}
		</a>
	);
};

export const DropdownMenu = (props) => {
	const [activeMenu, setActiveMenu] = React.useState("main");
	const [menuHeight, setMenuHeight] = React.useState(null);

	const calcHeight = (el) => {
		const height = el.offsetHeight;
		setMenuHeight(height);
	};

	return (
		<div className="dropdown" style={{ height: menuHeight }}>
			<CSSTransition
				in={activeMenu === "main"}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem>placeholder</DropdownItem>
					<DropdownItem
						leftIcon="〽️"
						rightIcon="➡️"
						onClick={() => {
							console.log("hello");
							setActiveMenu("settings");
						}}
					>
						Sorting Algorithms
					</DropdownItem>
				</div>
			</CSSTransition>
			<CSSTransition
				in={activeMenu === "settings"}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem
						leftIcon="⬅️"
						onClick={() => setActiveMenu("main")}
					>
						Go Back
					</DropdownItem>
					<DropdownItem leftIcon="💭" link="/sort/bubble">
						Bubble Sort
					</DropdownItem>
					<DropdownItem leftIcon="🤏" link="/sort/selection">
						Selection Sort
					</DropdownItem>
					<DropdownItem leftIcon="🗳️" link="/sort/insertion">
						Insertion Sort
					</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
};

export default Navbar;
