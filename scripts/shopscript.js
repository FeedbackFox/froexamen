
	$( function() {
		$( ".slider-range" ).slider({
			range: true,
			min: 0,
			max: 200,
			values: [ 0, 200 ],
			slide: function( event, ui ) {
				$( ".pricerange-amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( ".pricerange-amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
            " - $" + $( ".slider-range" ).slider( "values", 1 ) );
    } );
    

	