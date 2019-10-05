function stratOutcome() {
  var position = document.getElementById("attackDefenseSelect").value,
      selectedMap = document.getElementById("mapsSelect").value,
      selectedSite = document.getElementById("bankSites").value;

  if (position == "defense" && selectedMap == "bank" && selectedSite == "Staff Room and Open Area") {
    document.getElementById("displayStrat").style.display = "block";
  }

};
