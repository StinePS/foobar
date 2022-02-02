// Fetches all data on the beers (colour, flavour etc.)
export async function getBeers() {
  const response = await fetch("https://barcode-data.herokuapp.com/beertypes");
  return await response.json();
}
