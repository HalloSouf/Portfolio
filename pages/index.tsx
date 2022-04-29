import { NextPage } from 'next';
import Head from 'next/head';

/**
 * Home page
 */
const Home: NextPage = (): JSX.Element => {
  	return (
		<>
			<Head>
				<title>HalloSouf - Portfolio</title>
				<meta charSet={"utf-8"} />
				<meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
				<meta 
					name={"description"}
					content={"Hey there! My name is Soufiane, and I'm a fullstack-webdeveloper and ICT-student at Windesheim located in the Netherlands."} 
				/>
				<meta property={"og:title"} content={"HalloSouf - Portfolio"} />
				<meta property={"og:type"} content={"website"} />
				<meta property={"og:url"} content={"https://hallosouf.com"} />
				<meta property={"og:site_name"} content={"HalloSouf"} />
				<meta
					property={"og:description"}
					content={"Hey there! My name is Soufiane, I'm a fullstack-webdeveloper and ICT-student at Windesheim located in the Netherlands"}
				/>
			</Head>

			<div className={"yo"}>
				yo
			</div>
		</>
	)
}

export default Home;