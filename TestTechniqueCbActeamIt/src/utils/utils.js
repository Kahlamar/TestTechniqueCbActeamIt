/*!
 * Retourne une heure au format Date
 * \param string heure au format HH:MM et de type string
 * \return heure au format Date
 */
export function convertToMinutes(heure) {
  const [h, m] = heure.split(":").map(Number);
  return h * 60 + m;
}

/*!
 * Retourne la liste de trains triés en fonction de l'heure et de manière croissante
 * \param Liste de trains
 * \return Liste de train triée en fonction de l'heure
 */
export function TrieParHeure(trains) {
  return trains.sort((a, b) => {
    return convertToMinutes(a.heure) - convertToMinutes(b.heure);
  });
}
