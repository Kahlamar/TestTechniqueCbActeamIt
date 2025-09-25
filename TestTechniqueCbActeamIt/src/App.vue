<script setup>
</script>

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
          <tbody></tbody>
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
