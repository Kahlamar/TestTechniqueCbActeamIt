export function convertToMinutes(heure) {
  const [h, m] = heure.split(":").map(Number);
  return h * 60 + m;
}

export function TrieParHeure(trains) {
  return trains.sort((a, b) => {
    return convertToMinutes(a.heure) - convertToMinutes(b.heure);
  });
}
