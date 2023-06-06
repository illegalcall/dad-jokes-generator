'use client';

import Image from 'next/image';
import styles from './page.module.css';
import {
	BackgroundImage1,
	BackgroundImage2,
	FooterCon,
	FooterLink,
	GenerateJokeButton,
	GenerateJokeButtonText,
	GradientBackgroundCon,
	JokeGeneratorCon,
	JokeGeneratorInnerCon,
	JokeGeneratorSubTitle,
	JokeGeneratorTitle,
	RedSpan,
} from './components/JokeGenerator/JokeGeneratorElements';
import { useState } from 'react';

export default function Home() {
	const [numberOfJokes, setNumberOfJokes] = useState(0);

	return (
		<main className={styles.main}>
			<GradientBackgroundCon>
				<BackgroundImage1
					src='/cloudy-weather.png'
					alt='BackgroundImage1'
					width={400}
					height={300}
				/>
				<BackgroundImage2
					src='/cloud-and-thunder.png'
					alt='BackgroundImage1'
					width={400}
					height={300}
				/>

				<JokeGeneratorCon>
					<JokeGeneratorInnerCon>
						<JokeGeneratorTitle>
							Dad Jokes Generator
						</JokeGeneratorTitle>

						<JokeGeneratorSubTitle>
							Looking for a good laugh? <br />
							Generate a random dad joke by clicking the
							button below!
							<br />
							Jokes provided by{' '}
							<FooterLink
								href='https://icanhazdadjoke.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Icanhazdadjoke API
							</FooterLink>
						</JokeGeneratorSubTitle>

						<GenerateJokeButton>
							<GenerateJokeButtonText onClick={null}>
								Make a Joke
							</GenerateJokeButtonText>
						</GenerateJokeButton>
					</JokeGeneratorInnerCon>
				</JokeGeneratorCon>

				<FooterCon>
					<>
						Jokes Generated: {numberOfJokes}
						<br />
						Developed with <RedSpan>❤</RedSpan> by{' '}
						<FooterLink
							href='https://www.linkedin.com/in/d3v-dhruv/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Dhruv
						</FooterLink>
					</>
				</FooterCon>
			</GradientBackgroundCon>
		</main>
	);
}
