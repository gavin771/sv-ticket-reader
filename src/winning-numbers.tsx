export default async function getWinningNumbers(gameName: String) {
  console.log("Fetching Winning Numbers, give me a minute...");
  try {
    let response = await fetch(
      "https://us-central1-supreme-ventures.cloudfunctions.net/getResults",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET"
      }
    );
    let winningNumbers = await response.json();
    let gameNumbers = winningNumbers.find(game => game.key === gameName);

    console.log(gameNumbers);
    return winningNumbers;
  } catch (error) {
    console.log(error);
  }
}
