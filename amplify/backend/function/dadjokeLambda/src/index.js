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
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

// Image generation packages
const sharp = require('sharp');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

// Function: update DynamoDB table
async function updateJokeDDBObject() {
    const jokeTableName = process.env.API_DADJOKESGENERATOR_JOKEAPPDATATABLE_NAME;
    const jokeObjectID = "12312-13123-12312-1213";

    try {
        var jokeParams = {
            TableName: jokeTableName,
            Key: {
                "id": jokeObjectID,
            },
            UpdateExpression: "SET #jokesGenerated = #jokesGenerated + :inc",
            ExpressionAttributeValues: {
                ":inc": 1,
            },
            ExpressionAttributeNames: {
                "#jokesGenerated": "jokesGenerated",
            },
            ReturnValues: "UPDATED_NEW"
        };

        const updateJokeObject = await docClient.update(jokeParams).promise();
        return updateJokeObject;
    } catch (error) {
        console.log('error updating joke object in DynamoDB', error)
    }
}

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    console.log("hello from labmda function");

    const apiURL = "https://icanhazdadjoke.com/";

    // Function: Generate joke image
    async function getRandomJoke(apiURLInput) {
        // My joke is...
        let jokeText;

       
        // Validate response to the api
        const response = await fetch(apiURLInput,{
            headers:{
                "accept":"application/json"
            }
        });
        var jokeData = await response.json();
        console.log(jokeData);
      
        // joke elements
        jokeText = jokeData.joke;
      
        // Image construction
        const width = 750;
        const height = 483;
        const text = jokeText;
        const words = text.split(" ");
        const lineBreak = 4;
        let newText = "";
      
        // Define some tspanElements w/ 4 words each
        let tspanElements = "";
        for (let i = 0; i < words.length; i++) {
          newText += words[i] + " ";
          if ((i + 1) % lineBreak === 0) {
            tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
            newText = "";
          }
        }
        if (newText !== "") {
          tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
        }
        console.log(tspanElements);
           
        // Construct the SVG
        const svgImage = `
          <svg width="${width}" height="${height}">
              <style>
                 .title { 
                   fill: #ffffff; 
                  font-size: 20px; 
                     font-weight: bold;
                }
               
                .footerStyles {
                  font-size: 20px;
                     font-weight: bold;
                    fill: lightgrey;
                   text-anchor: middle;
                  font-family: Verdana;
              }
              </style>
              <circle cx="382" cy="76" r="44" fill="rgba(255, 255, 255, 0.155)"/>
              <text x="382" y="76" dy="50" text-anchor="middle" font-size="90" font-family="Verdana" fill="white">"</text>
              <g>
                  <rect x="0" y="0" width="${width}" height="auto"></rect>
                     <text id="lastLineOfJoke" x="375" y="120" font-family="Verdana" font-size="35" fill="white" text-anchor="middle">
                        ${tspanElements}
                    </text>
                </g>
              <text x="${width / 2}" y="${
          height - 10
        }" class="footerStyles">Developed by @Dhruv | Jokes from icanhazdadjoke.com</text>
          </svg>
        `;
      
        //  Add background images for the svg creation
        const backgroundImages = [
          "backgrounds/Aubergine.png",
          "backgrounds/Mantle.png",
          "backgrounds/Midnight-City.png",
          "backgrounds/Orangey.png",
        ];
      
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        const selectedBackgroundImage = backgroundImages[randomIndex];
      
        // Composite this image together
        const timestamp = new Date().toLocaleString().replace(/[^\d]/g, "");
        const svgBuffer = Buffer.from(svgImage);
        
        const imagePath = path.join('/tmp', 'joke-card.png');
        const image = await sharp(selectedBackgroundImage)
          .composite([
            {
              input: svgBuffer,
              top: 0,
              left: 0,
            },
          ])
          .toFile(imagePath);

          // Function: Update DynamoDB object in table
          try {
            updateJokeDDBObject();
          } catch (error) {
            console.log('error updating joke object in DynamoDB', error)
          }

          return {
            statusCode: 200,
            //  Uncomment below to enable CORS requests
            headers: {
                "Content-Type": "image/png",
                "Access-Control-Allow-Origin": "*",
            }, 
            body: fs.readFileSync(imagePath).toString('base64'),
            isBase64Encoded: true,
        };
    }
    return await getRandomJoke(apiURL); 
};
