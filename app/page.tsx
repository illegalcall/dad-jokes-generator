'use client';
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import {
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

import {
	generateAJoke,
	jokesQueryName,
} from '@/src/graphql/queries';

import styles from './page.module.css';

// AWS imports
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import JokeGeneratorModal from './components/JokeGenerator';

Amplify.configure({ ...awsExports, ssr: true });

// interface for our appsync <> lambda JSON response
interface GenerateAJokeData {
	generateAJoke: {
		statusCode: number;
		headers: { [key: string]: string };
		body: string;
	};
}

// interface for our DynamoDB object
interface UpdateJokeInfoData {
	id: string;
	queryName: string;
	jokesGenerated: number;
	createdAt: string;
	updatedAt: string;
}

export default function Home() {
	const [numberOfJokes, setNumberOfJokes] = useState(0);
	const [openGenerator, setOpenGenerator] = useState(false);
	const [processingJoke, setProcessingJoke] =
		useState(false);
	const [jokeReceived, setJokeReceived] =
		useState<String | null>(null);

	// Function to fetch our DynamoDB object (jokes generated)
	const updateJokeInfo = async () => {
		try {
			const response =
				(await API.graphql<UpdateJokeInfoData>({
					query: jokesQueryName,
					authMode: 'AWS_IAM',
					variables: {
						queryName: 'LIVE',
					},
				})) as any;

			if (!response.data) {
				throw new Error('Response data is undefined');
			}

			const receivedNumberOfJokes =
				response.data.jokesQueryName.items[0]
					.jokesGenerated;
			setNumberOfJokes(receivedNumberOfJokes);
		} catch (error) {
			console.log('error getting joke data', error);
		}
	};

	useEffect(() => {
		updateJokeInfo();
	}, []);

	// Functions for joke generator modal
	const handleCloseGenerator = () => {
		setOpenGenerator(false);
		setProcessingJoke(false);
		setJokeReceived(null);
	};

	const handleOpenGenerator = async (
		e: React.SyntheticEvent
	) => {
		e.preventDefault();
		setOpenGenerator(true);
		setProcessingJoke(true);
		try {
			// Run Lambda Function
			const runFunction = 'runFunction';
			const runFunctionStringified =
				JSON.stringify(runFunction);
			const response = await API.graphql<GenerateAJokeData>(
				{
					query: generateAJoke,
					authMode: 'AWS_IAM',
					variables: {
						input: runFunctionStringified,
					},
				}
			);
			const responseStringified = JSON.stringify(response);
			const responseReStringified = JSON.stringify(
				responseStringified
			);
			const bodyIndex =
				responseReStringified.indexOf('body=') + 5;
			const bodyAndBase64 =
				responseReStringified.substring(bodyIndex);
			const bodyArray = bodyAndBase64.split(',');
			const body = bodyArray[0];
			setJokeReceived(body);

			// End state:
			setProcessingJoke(false);

			// Fetch if any new jokes were generated from counter
			updateJokeInfo();

			// setProcessingJoke(false);
			// setTimeout(() => {
			//   setProcessingJoke(false);
			// }, 3000);
		} catch (error) {
			console.log('error generating joke:', error);
			setProcessingJoke(false);
		}
	};

	return (
		<main className={styles.main}>
			<GradientBackgroundCon>
				<JokeGeneratorModal
					open={openGenerator}
					close={handleCloseGenerator}
					processingJoke={processingJoke}
					setProcessingJoke={setProcessingJoke}
					jokeReceived={jokeReceived}
					setJokeReceived={setJokeReceived}
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
						</JokeGeneratorSubTitle>

						<GenerateJokeButton>
							<GenerateJokeButtonText
								onClick={handleOpenGenerator}
							>
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
					</>{' '}
					| provided by{' '}
					<FooterLink
						href='https://icanhazdadjoke.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Icanhazdadjoke API
					</FooterLink>
				</FooterCon>
			</GradientBackgroundCon>
		</main>
	);
}
