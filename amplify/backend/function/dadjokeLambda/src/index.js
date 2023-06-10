/* Amplify Params - DO NOT EDIT
	API_DADJOKESGENERATOR_GRAPHQLAPIIDOUTPUT
	API_DADJOKESGENERATOR_JOKEAPPDATATABLE_ARN
	API_DADJOKESGENERATOR_JOKEAPPDATATABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({
	region: 'us-east-1',
});

// Image generation packages
const sharp = require('sharp');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const { apiURL } = require('./consts');
const { generateSvg } = require('./helper');

// Function: update DynamoDB table
async function updateJokeDDBObject() {
	const jokeTableName =
		process.env.API_DADJOKESGENERATOR_JOKEAPPDATATABLE_NAME;
	const jokeObjectID = '12312-13123-12312-1213';

	try {
		var jokeParams = {
			TableName: jokeTableName,
			Key: {
				id: jokeObjectID,
			},
			UpdateExpression:
				'SET #jokesGenerated = #jokesGenerated + :inc',
			ExpressionAttributeValues: {
				':inc': 1,
			},
			ExpressionAttributeNames: {
				'#jokesGenerated': 'jokesGenerated',
			},
			ReturnValues: 'UPDATED_NEW',
		};

		const updateJokeObject = await docClient
			.update(jokeParams)
			.promise();
		return updateJokeObject;
	} catch (error) {
		console.log(
			'error updating joke object in DynamoDB',
			error
		);
	}
}

exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	console.log('hello from labmda function');

	// Function: Generate joke image
	async function getRandomJoke() {
		// My joke is...
		let jokeText;

		// Validate response to the api
		const response = await fetch(apiURL, {
			headers: {
				accept: 'application/json',
			},
		});
		var jokeData = await response.json();
		console.log(jokeData);

		// joke elements
		jokeText = jokeData.joke;

		const imagePath = path.join('/tmp', 'joke-card.png');
		const { svgBuffer, backgroundColor } =
			generateSvg(jokeText);

		sharp(svgBuffer)
			.png()
			.flatten({ background: backgroundColor })
			.toFile(imagePath)
			.catch(function (err) {
				console.log(err);
			});

		// Function: Update DynamoDB object in table
		try {
			updateJokeDDBObject();
		} catch (error) {
			console.log(
				'error updating joke object in DynamoDB',
				error
			);
		}

		return {
			statusCode: 200,
			//  Uncomment below to enable CORS requests
			headers: {
				'Content-Type': 'image/png',
				'Access-Control-Allow-Origin': '*',
			},
			body: fs.readFileSync(imagePath).toString('base64'),
			isBase64Encoded: true,
		};
	}
	return await getRandomJoke();
};
