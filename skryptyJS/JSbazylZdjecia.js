function animuj(e) {

$(this).animate({height: '-=20'},50,function() {
	$(this).animate({height: '+=20'},50);
	});
}

function animuj2(e) {

$(this).animate({borderRadius: '+=50'},250,function() {
	$(this).animate({borderRadius: '-=50'},250);
	});
}


$('img').on('mouseover',animuj);
$('img').on('mouseover',animuj2);