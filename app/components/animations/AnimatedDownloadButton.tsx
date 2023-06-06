import React from 'react';
import Image from 'next/image';

import lottieJson from '@/public/animated-photo.json';
import {
	CenteredLottie,
	DownloadJokeCardCon,
	DownloadJokeCardConText,
} from './AnimationElements';

interface AnimatedDownloadButtonProps {
	handleDownload: () => void;
}

const AnimatedDownloadButton = ({
	handleDownload,
}: AnimatedDownloadButtonProps) => {
	return (
		<DownloadJokeCardCon onClick={handleDownload}>
			<CenteredLottie
				loop
				animationData={lottieJson}
				play
			/>
			<DownloadJokeCardConText>
				Download your joke card
			</DownloadJokeCardConText>
		</DownloadJokeCardCon>
	);
};

export default AnimatedDownloadButton;
