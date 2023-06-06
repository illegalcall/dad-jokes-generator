import React, { useState, useEffect } from 'react';

// Material UI Imports
import { Backdrop, Fade, Modal } from '@mui/material';
import {
	ModalCircularProgress,
	JokeGeneratorModalCon,
	JokeGeneratorModalInnerCon,
	JokeGeneratorSubTitle,
	JokeGeneratorTitle,
} from './JokeGeneratorElements';
import AnimatedDownloadButton from '../animations/AnimatedDownloadButton';
import { ImageBlobCon } from '../animations/AnimationElements';
import ImageBlob from '../animations/ImageBlob';

interface JokeGeneratorModalProps {
	open: boolean;
	close: () => void;
	processingJoke: boolean;
	setProcessingJoke: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	jokeReceived: String | null;
	setJokeReceived: React.Dispatch<
		React.SetStateAction<String | null>
	>;
}

const style = {};

const JokeGeneratorModal = ({
	open,
	close,
	processingJoke,
	setProcessingJoke,
	jokeReceived,
	setJokeReceived,
}: JokeGeneratorModalProps) => {
	const wiseDevJokeQ =
		'Why did the software developer go broke?';
	const wiseDevJokeA =
		'Because he kept spending all his cache!';

	const [blobUrl, setBlobUrl] = useState<string | null>(
		null
	);

	// Function: Handling the download of joke card
	const handleDownload = () => {
		const link = document.createElement('a');
		if (typeof blobUrl === 'string') {
			link.href = blobUrl;
			link.download = 'joke.png';
			link.click();
		}
	};

	// Function: Handle the receiving of joke card
	useEffect(() => {
		if (jokeReceived) {
			const binaryData = Buffer.from(
				jokeReceived,
				'base64'
			);
			const blob = new Blob([binaryData], {
				type: 'image/png',
			});
			const blobUrlGenerated = URL.createObjectURL(blob);
			console.log(blobUrlGenerated);
			setBlobUrl(blobUrlGenerated);

			return () => {
				URL.revokeObjectURL(blobUrlGenerated);
			};
		}
	}, [jokeReceived]);

	return (
		<Modal
			id='JokeGeneratorModal'
			aria-labelledby='spring-modal-jokegeneratormodal'
			aria-describedby='spring-modal-opens-and-closes-joke-generator'
			open={open}
			onClose={close}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<JokeGeneratorModalCon sx={style}>
					<JokeGeneratorModalInnerCon>
						{/* State #1: Processing request of joke + joke state is empty */}
						{processingJoke === true &&
							jokeReceived === null && (
								<>
									<ModalCircularProgress
										size={'8rem'}
										thickness={2.5}
									/>
									<JokeGeneratorTitle>
										Creating your joke...
									</JokeGeneratorTitle>
									<JokeGeneratorSubTitle
										style={{ marginTop: '20px' }}
									>
										{wiseDevJokeQ}
										<br></br>
										<span
										// style={{ fontSize: 26 }}
										>
											{wiseDevJokeA}
										</span>
									</JokeGeneratorSubTitle>
								</>
							)}

						{/* State #2: Joke state fulfilled */}
						{jokeReceived !== null && (
							<>
								<JokeGeneratorTitle>
									Download your joke!
								</JokeGeneratorTitle>
								<JokeGeneratorSubTitle
									style={{ marginTop: '20px' }}
								>
									See a preview:
								</JokeGeneratorSubTitle>
								<ImageBlobCon>
									<ImageBlob
										jokeReceived={jokeReceived}
										blobUrl={blobUrl}
									/>
								</ImageBlobCon>
								<AnimatedDownloadButton
									handleDownload={handleDownload}
								/>
							</>
						)}
					</JokeGeneratorModalInnerCon>
				</JokeGeneratorModalCon>
			</Fade>
		</Modal>
	);
};

export default JokeGeneratorModal;
