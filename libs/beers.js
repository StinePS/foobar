export async function getBeers() {
  const response = await fetch("https://barcode-data.herokuapp.com/beertypes");
  return await response.json();
}
