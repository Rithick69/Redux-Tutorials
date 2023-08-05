import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { CgMenu, CgClose } from 'react-icons/cg';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		function updateSize() {
			openMenu && window.innerWidth <= '998'
				? (document.getElementsByTagName('html')[0].style.overflow = 'hidden')
				: (document.getElementsByTagName('html')[0].style.overflow = 'auto');
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, [openMenu]);

	const Nav = styled.nav`
		.navbar-list {
			display: flex;
			gap: 4.8rem;

			li {
				list-style: none;

				.navbar-link {
					&:link,
					&:visited {
						display: inline-block;
						text-decoration: none;
						font-size: 1.8rem;
						text-transform: uppercase;
						color: ${({ theme }) => theme.colors.black};
						transition: color 0.3s linear;
					}
					&:hover,
					&:active {
						color: ${({ theme }) => theme.colors.helper};
					}
				}
			}
		}

		.mobile-navbar-btn {
			display: none;

			.close-outline {
				display: none;
			}
		}

		.mobile-navbar-btn[name='close-outline'] {
			display: none;
		}

		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			.mobile-navbar-btn {
				display: inline-block;
				z-index: 999;
				border: ${({ theme }) => theme.colors.black};

				.mobile-nav-icon {
					font-size: 4.2rem;
					color: ${({ theme }) => theme.colors.black};
				}
			}

			/* hide the original nav menu  */

			.navbar-list {
				width: 100vw;
				height: 100vh;
				position: fixed;
				z-index: 999;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				overflow-x: hidden;
				transition: 0.5s;
				background-color: #fff;

				display: flex;
				flex-grow: 1;
				justify-content: center;
				align-content: center;
				flex-direction: column;
				text-align: center;

				visibility: hidden;
				opacity: 0;

				transform: translateX(100%);

				li {
					.navbar-link {
						&:link,
						&:visited {
							font-size: 4.2rem;
						}

						&:hover,
						&:active {
							color: ${({ theme }) => theme.colors.helper};
						}
					}
				}
			}

			.active .mobile-nav-icon {
				display: none;
				font-size: 4.2rem;
				position: absolute;
				top: 3%;
				right: 10%;
				color: ${({ theme }) => theme.colors.black};
				z-index: 9999;
			}

			.active .close-outline {
				display: inline-block;
			}

			.active .navbar-list {
				visibility: visible;
				opacity: 1;
				transform: translateX(0);
				z-index: 9999;
			}
		}
	`;
	return (
		<Nav>
			<div className={openMenu ? 'menuIcon active' : 'menuIcon'}>
				<ul className="navbar-list">
					<li>
						<NavLink
							className="navbar-link"
							to="/"
							onClick={() => setOpenMenu(false)}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navbar-link"
							to="/about"
							onClick={() => setOpenMenu(false)}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navbar-link"
							to="/services"
							onClick={() => setOpenMenu(false)}
						>
							Services
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navbar-link"
							to="/contact"
							onClick={() => setOpenMenu(false)}
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="mobile-navbar-btn">
					<CgMenu
						name="menu-outline"
						className="mobile-nav-icon"
						onClick={() => setOpenMenu(true)}
					/>
					<CgClose
						name="close-outline"
						className="close-outline mobile-nav-icon"
						onClick={() => setOpenMenu(false)}
					/>
				</div>
			</div>
		</Nav>
	);
};

export default Navbar;
