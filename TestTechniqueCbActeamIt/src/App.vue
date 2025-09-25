<template>
  <div class="container">
    <h1>Panneau d'information de gare</h1>
    <div class="tables">
      <div>
        <h2>Arrivées</h2>
        <table id="tableau-arrivees">
          <thead>
            <tr>
              <th>Numéro</th>
              <th>Provenance</th>
              <th>Heure</th>
              <th>Retard</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="train in trains_arrivees_tries"
              :key="train.numero"
              :class="{ retard: train.retard > 0 }"
            >
              <td>{{ train.numero }}</td>
              <td>{{ train.provenance }}</td>
              <td>{{ train.heure }}</td>
              <td>
                <span v-if="train.retard > 0" class="badge"
                  >+{{ train.retard }} min</span
                >
                <span v-else>À l'heure</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Départs</h2>
        <table id="tableau-departs">
          <thead>
            <tr>
              <th>Numéro</th>
              <th>Destination</th>
              <th>Heure</th>
              <th>Retard</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="train in trains_departs_tries"
              :key="train.numero"
              :class="{ retard: train.retard > 0 }"
            >
              <td>{{ train.numero }}</td>
              <td>{{ train.destination }}</td>
              <td>{{ train.heure }}</td>
              <td>
                <span v-if="train.retard > 0" class="badge"
                  >+{{ train.retard }} min</span
                >
                <span v-else>À l'heure</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import trains from "@/assets/trains.json" with { type: "json" };
import { TrieParHeure } from "@/utils/utils.js";

const trains_departs_tries = TrieParHeure(trains.departs);
const trains_arrivees_tries = TrieParHeure(trains.arrivees);

export default {
  name: "App",
  data() {
    return {
      trains_departs_tries,
      trains_arrivees_tries,
    };
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 2rem;
  background: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.tables {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

table {
  border-collapse: collapse;
  width: 100%;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

th,
td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
}

th {
  background: #333;
  color: white;
}

tr.retard {
  background-color: #ffe6e6;
}

.badge {
  background: red;
  color: white;
  padding: 2px 6px;
  border-radius: 5px;
  font-size: 0.8em;
}
</style>
