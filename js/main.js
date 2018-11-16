var faze = [];
var tajming = [];
var typingCounter = 0;
var delay = 0;
var staroVrijeme = 0;

$('#typing').keyup(function() {
	console.log(typingCounter);
	novoVrijeme = +new Date();
	var diff = novoVrijeme - staroVrijeme;
	staroVrijeme = novoVrijeme;
    faze[typingCounter] = ($(this).val());
    tajming[typingCounter] = diff;
    if(typingCounter == 0){ tajming[0] = 0};
    typingCounter++;
});


var rekreiraj = function(){
	var i = 0;
	var tipkanje = function(){
		if(i < faze.length){
			var napisi = function(){
				$('#result').html(faze[i]);
				clearTimeout(cekanje);
				i++;	
				tipkanje();
			}
			console.log(tajming[i]);
			var cekanje = setTimeout(napisi, tajming[i]);
			console.log(i);			
		}		
	}
	tipkanje();

}

$("#button").click(function(){
	rekreiraj();
})


  mapboxgl.accessToken = 'pk.eyJ1IjoiemFya29rdXZhbGphIiwiYSI6ImNpbjBmbXA5YTAwbmx2OW0xMWtrcHcxOHMifQ.9rU0CKUnMyg6v3KhlDjfRg';
  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
  });

map.on('click', function (e) {
    console.log(JSON.stringify(e.point) + '<br />' + JSON.stringify(e.lngLat));
});