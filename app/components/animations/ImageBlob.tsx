import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageBlobProps {
	jokeReceived: String | null;
	blobUrl: string | null;
}

const ImageBlob = ({
	jokeReceived,
	blobUrl,
}: ImageBlobProps) => {
	if (!blobUrl) {
		return null;
	}

	return (
		<Image
			src={blobUrl}
			alt='Generated joke card'
			width={150}
			height={100}
		/>
	);
};

export default ImageBlob;
