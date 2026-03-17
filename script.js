const getOutfitButton = document.getElementById('getOutfit');
const resultsDiv = document.getElementById('results');

const sampleOutfits = [
  "Linen shirt + Tailored pants + Loafers + Beret",
  "Striped top + High-waist skirt + Ballet flats + Scarf",
  "Sweater + Slim jeans + Ankle boots + Sunglasses",
  "Trench coat + Dress + Heels + Handbag",
  "Blouse + Culottes + Sneakers + Statement necklace"
];

getOutfitButton.addEventListener('click', () => {
  const shuffled = sampleOutfits.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.floor(Math.random() * 3) + 3); // pick 3–5
  resultsDiv.innerHTML = selected.map(o => `<p>${o}</p>`).join('');
});