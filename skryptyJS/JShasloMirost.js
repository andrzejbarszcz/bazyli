
$('#autoryzacja').hide();


function zapytajOhaslo(e) {
	e.preventDefault();
	$('#autoryzacja').show();
}



function sprawdzHaslo() {

	var haslo = $('#zawartosc:password').val();
	$('#zawartosc:password').val('');
	if(haslo == 'cypis') window.location.replace('mirosto3wiceFilmy.html');
	
}



$('#linkChroniony').on('click',zapytajOhaslo);
$('#ok').on('click',sprawdzHaslo);


