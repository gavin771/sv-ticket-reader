const vision = require("@google-cloud/vision");
const client = new vision.ImageAnnotatorClient();

const detectText = async file => {
  console.log("Detecting text, give me a minute...");
  // Performs text detection on the local file
  const [result] = await client.textDetection(file);
  const detections = result.textAnnotations;
  console.log("Text:");
  detections.forEach(text => console.log(text));
};

export default detectText;
