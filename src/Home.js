import React from 'react';

export default function Home() {
	return (
		<div className="wrapper">
			<header className="header">
				<div className="shell">
					<div className="header__inner">
						<a
							href="../index.html"
							className="logo"
							style="background-image: url(../assets/images/svg/logo.svg);"
						/>
						<div className="header__content">
							<nav className="nav">
								<ul>
									<li>
										<a className="prevent" href="#">
											Features
										</a>
										<div className="nav-dropdown nav-dropdown--large">
											<div className="cols">
												<div className="col col--1of2">
													<ul>
														<li>
															<a href="../masternodes.html">
																<i className="ico-masternodes" />
																<span>Masternodes </span>
															</a>
														</li>
														<li>
															<a href="../syscoin-bridge.html">
																<i className="ico-bridge" />
																<span>Syscoin Bridge </span>
															</a>
														</li>
													</ul>
												</div>
												<div className="col col--1of2">
													<ul>
														<li>
															<a href="../z-dag.html">
																<i className="ico-z-dag" />
																<span>Z-DAG </span>
															</a>
														</li>
														<li>
															<a href="../assets-tokens.html">
																<i className="ico-assets" />
																<span>Assets & Tokens </span>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<a href="../developers.html">Developers</a>
									</li>
									<li>
										<a href="../about.html">About </a>
										<div className="nav-dropdown nav-dropdown--center">
											<ul>
												<li>
													<a href="../about.html">
														<i className="ico-introduction" />
														<span>Introduction </span>
													</a>
												</li>
												<li>
													<a href="../meet-the-team.html">
														<i className="ico-meet-the-team" />
														<span>Meet the Team </span>
													</a>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<a href="../news.html">News</a>
									</li>
									<li>
										<a className="prevent" href="#">
											Resources
										</a>
										<div className="nav-dropdown nav-dropdown--large nav-dropdown--large-secondary">
											<div className="cols">
												<div className="col col--1of3">
													<ul>
														<li>
															<a target="_blank" href="https://syscoin.community/">
																<i className="ico-community" />
																<span>Community</span>
															</a>
														</li>
														<li>
															<a href="../faq.html">
																<i className="ico-faq" />
																<span>FAQ </span>
															</a>
														</li>
														<li>
															<a href="../syscoin-media-kit.html">
																<i className="syscoin-mediakit" />
																<span>Syscoin Media Kit </span>
															</a>
														</li>
													</ul>
												</div>
												<div className="col col--1of3">
													<ul>
														<li>
															<a target="_blank" href="../whitepaper.html">
																<i className="ico-whitepaper-summary" />
																<span>Syscoin White Papers </span>
															</a>
														</li>
														<li>
															<a target="_blank" href="../roadmap.html">
																<i className="ico-roadmap" />
																<span>Roadmap </span>
															</a>
														</li>
													</ul>
												</div>
												<div className="col col--1of3">
													<ul>
														<li>
															<a href="#wallets" target="_self">
																<i className="ico-wallet" />
																<span>Wallets</span>
															</a>
														</li>
														<li>
															<a target="_blank" href="https://support.syscoin.org/">
																<i className="ico-help" />
																<span>Help</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</nav>
							<div className="nav-acces">
								<ul>
									<li>
										<a target="_blank" href="https://discord.gg/RkK2AXD">
											Join Discord
											<span />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<a href="#" className="nav-trigger">
							<span />
							<span />
							<span />
						</a>
					</div>
				</div>
			</header>
			<div className="main main--gradient">
				<div className="main__backgrounds">
					<div className="main__gradient" />
					<div
						className="main__background main__background--wave-bottom"
						style="background-image: url(../assets/images/main-background-wave-bottom.png);"
					/>
					<div
						className="main__background main__background--lines-top"
						style="background-image: url(../assets/images/svg/backgrounds/lines.svg);"
					/>
					<div
						className="main__background main__background--dots"
						style="background-image: url(../assets/images/dot-pattern.png);"
					/>
				</div>
				<section className="section news">
					<div className="shell">
						<div className="cols cols-center">
							<div className="col col--size12">
								<article className="news">
									<div className="render-element">
										<div className="title">
											<h1 className="text-center title-border title-border--green">
												Syscoin 4.0 Launch Date Confirmed{' '}
											</h1>
										</div>
									</div>
									<div className="render-element">
										<div className="richtext">
											<div className="text">
												<p>
													Ramping up to Syscoin 4.0 has brought some exciting times for the
													teams working on the protocol and associated applications. In less
													than a month, Blockchain Foundry released the{' '}
													<a href="https://medium.com/r/?url=https%3A%2F%2Fsyscoin.org%2Fnews%2Fz-dag-white-paper-syscoins-blockchain-scalability-solution">
														Z-DAG Whitepaper
													</a>, coordinated the long-awaited{' '}
													<a href="https://medium.com/r/?url=https%3A%2F%2Fsyscoin.org%2Fnews%2Fz-dag-performance-analysis">
														Whiteblock TPS results
													</a>{' '}
													with the Syscoin Foundation and Syscoin Development & Marketing Team
													and have been testing the upcoming release in a private testnet
													environment.
												</p>
												<h4>
													<strong>
														June 4th confirmed: Release Date & Block&nbsp;Number
													</strong>
												</h4>
												<p>
													As block times vary (usually between 55–65 seconds per block), we
													previously indicated on our “<a href="https://medium.com/@syscoin/syscoin-4-0-target-release-date-bb351f972dd2">
														Syscoin 4.0 Target Release Date
													</a>” blog post that we would revisit the set block number prior to
													the set release date. The block number has been slightly adjusted to
													block 548690, solidifying the previously set{' '}
													<strong>
														June 4th target date at approximately 12PM PST (19:00 UTC)
													</strong>, give or take a few minutes.
												</p>{' '}
											</div>
										</div>
									</div>
									<div className="render-element">
										<div className="richtext-image ratio_5050 left">
											<div className="image">
												<img
													src="../thumbs/800x800/files/bridge-diagram-option-c-v2.png"
													alt=""
												/>
											</div>
											<div className="text">
												<h4>Ethereum Syscoin Bridge Unveiling</h4>
												<p>
													Providing scalability to Ethereum projects, the Syscoin Bridge will
													be temporarily disabled upon the release of Syscoin 4.0, allowing
													for further testing and solidification of the Syscoin 4.0 network
													and the Z-DAG protocol. This will also give us time to increase the
													marketing efforts, gain the interest of Ethereum developers and
													allow them to try it out in our Testnet. Stay tuned and we will
													communicate the date and time for the Ethereum Syscoin Bridge
													unveiling event!
												</p>{' '}
											</div>
										</div>
									</div>
									<div className="author text-center title-border title-border--green">
										<img src="../thumbs/150x150/files/syscoin.png" />
										May 30, 2019 by{' '}
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>
			</div>
			<footer className="footer">
				<div className="shell">
					<div className="footer__inner">
						<div className="footer__entry">
							<a href="../index.html" className="logo" style="background-image: url(./svg/logo.svg);" />
							<nav className="footer__nav">
								<ul>
									<li>
										<a href="../privacy-policy.html">Privacy Policy</a>
									</li>
									<li>
										<a href="../terms-conditions.html">Terms & Conditions</a>
									</li>
									<li>
										<a href="../faq.html">FAQ</a>
									</li>
									<li>
										<a href="../contact.html">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="footer__content">
							<div className="socials">
								<ul>
									<li>
										<a target="_blank" href="https://www.facebook.com/Syscoin/">
											<i className="ico-facebook" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://twitter.com/syscoin">
											<i className="ico-twitter" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://www.instagram.com/syscoin_org/">
											<i className="ico-instagram" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://bitcointalk.org/index.php?topic=1466445.0">
											<i className="ico-bitcoin" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://discord.gg/RkK2AXD">
											<i className="ico-discord" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://t.me/Syscoin_Official">
											<i className="ico-send" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://github.com/syscoin">
											<i className="ico-github" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://www.reddit.com/r/SysCoin/">
											<i className="ico-reddit" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://bitcoinwisdom.io/markets/binance/sysbtc">
											<i className="ico-wisdom" />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://www.linkedin.com/company/syscoin/">
											<i className="ico-linkedin" />
										</a>
									</li>
								</ul>
							</div>
							<div className="copyright">
								<p>© 2020 Syscoin. All rights reserved</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
