function showSiteOptions() {
  var selectedMap = document.getElementById("mapsSelect").value;

  if(selectedMap == "bank") {
    document.getElementById("bankSites").style.display="block";
  }

  if(selectedMap == "border") {
    document.getElementById("borderSites").style.display="block";
  }

  if(selectedMap == "chalet") {
    document.getElementById("chaletSites").style.display="block";
  }

  if(selectedMap == "clubhouse") {
    document.getElementById("clubhouseSites").style.display="block";
  }

  if(selectedMap == "coastline") {
    document.getElementById("coastlineSites").style.display="block";
  }

  if(selectedMap == "consulate") {
    document.getElementById("consulateSites").style.display="block";
  }

  if(selectedMap == "kafeDostoyevsky") {
    document.getElementById("kafeDostoyevskySites").style.display="block";
  }

  if(selectedMap == "kanal") {
    document.getElementById("kanalSites").style.display="block";
  }

  if(selectedMap == "oregon") {
    document.getElementById("oregonSites").style.display="block";
  }

  if(selectedMap == "outback") {
    document.getElementById("outbackSites").style.display="block";
  }

  if(selectedMap == "skyscraper") {
    document.getElementById("skyscraperSites").style.display="block";
  }

  if(selectedMap == "villa") {
    document.getElementById("villaSites").style.display="block";
  }
};
