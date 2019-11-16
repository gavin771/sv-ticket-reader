import { VISION_API } from "react-native-dotenv";

export default async function detectText(file: String) {
  console.log("Detecting text, give me a minute...");
  try {
    let body = JSON.stringify({
      requests: [
        {
          features: [{ type: "TEXT_DETECTION" }],
          image: {
            content: file
          }
        }
      ]
    });
    let response = await fetch(VISION_API, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: body
    });
    let {
      responses: [firstResponse]
    } = await response.json();

    return parseResponse(firstResponse.fullTextAnnotation);
  } catch (error) {
    console.log(error);
  }
}

const parseResponse = response => {
  const parsedObject = {
    pageText: "",
    totalPages: 0,
    totalBlocks: 0,
    totalParagraphs: 0,
    totalWords: 0,
    totalSymbols: 0,
    symbols: []
  };
  // console.log(response);

  parsedObject.pageText = response.text;
  parsedObject.totalPages = response.pages.length;

  response.pages.forEach(page => {
    parsedObject.totalBlocks += page.blocks.length;
    page.blocks.forEach(block => {
      if (block.blockType === "TEXT") {
        parsedObject.totalParagraphs += block.paragraphs.length;
        block.paragraphs.forEach(paragraph => {
          parsedObject.totalWords += paragraph.words.length;
          paragraph.words.forEach(word => {
            parsedObject.totalSymbols += word.symbols.length;
            let symbol = "";
            word.symbols.forEach(currSymbol => {
              symbol += currSymbol.text;
            });
            parsedObject.symbols.push(symbol);
          });
        });
      }
    });
  });

  console.log(parsedObject);
  return parsedObject;
};
