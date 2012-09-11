(function(){

	var v = "1.8.0";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			// This works
			
			
			
			var schoolOrder = new Array();
			
			schoolOrder["1"] = 10;
			
			$("span:contains('Allora Medical Practice')").parent().next().find('select').val(schoolOrder["1"]);
			$("span:contains('Beaudesert General Practice')").parent().next().find('select').val(schoolOrder["2"]);
			$("span:contains('Beaudesert Medical Centre')").parent().next().find('select').val(schoolOrder["3"]);
			$("span:contains('Beaudesert Hospital')").parent().next().find('select').val(schoolOrder["4"]);
			$("span:contains('Blackall Black Stump')").parent().next().find('select').val(schoolOrder["5"]);
			$("span:contains('Blackbutt Timbertown Medical Centre')").parent().next().find('select').val(schoolOrder["6"]);
			$("span:contains('Boonah Leonard Street')").parent().next().find('select').val(schoolOrder["7"]);
			$("span:contains('Charleville Medical Centre')").parent().next().find('select').val(schoolOrder["8"]);
			$("span:contains('Charleville Hospital')").parent().next().find('select').val(schoolOrder["9"]);
			$("span:contains('Cherbourg Hospital')").parent().next().find('select').val(schoolOrder["10"]);
			$("span:contains('Childers Isis Medical Centre/Hospital ')").parent().next().find('select').val(schoolOrder["11"]);
			$("span:contains('Chinchilla Medical Centre')").parent().next().find('select').val(schoolOrder["12"]);
			$("span:contains('Clermont Surgery')").parent().next().find('select').val(schoolOrder["13"]);
			$("span:contains('Cunnamulla Hospital')").parent().next().find('select').val(schoolOrder["14"]);
			$("span:contains('Dalby Myall Medical Practice')").parent().next().find('select').val(schoolOrder["15"]);
			$("span:contains('Dalby Hospital')").parent().next().find('select').val(schoolOrder["16"]);
			$("span:contains('Dysart Medical Centre/Hospital')").parent().next().find('select').val(schoolOrder["17"]);
			$("span:contains('Emerald Hospital')").parent().next().find('select').val(schoolOrder["18"]);
			$("span:contains('Emu Park Family Medical Practice')").parent().next().find('select').val(schoolOrder["19"]);
			$("span:contains('Gatton Lockyer Vally Medical Centre')").parent().next().find('select').val(schoolOrder["20"]);
			$("span:contains('Gatton Hospital')").parent().next().find('select').val(schoolOrder["21"]);
			$("span:contains('Gayndah Hospital/Surgery ')").parent().next().find('select').val(schoolOrder["22"]);
			$("span:contains('Gladstone Hospital ')").parent().next().find('select').val(schoolOrder["23"]);
			$("span:contains('Goondiwindi Medical/Hospital')").parent().next().find('select').val(schoolOrder["24"]);
			$("span:contains('Gympie Hospital ')").parent().next().find('select').val(schoolOrder["25"]);
			$("span:contains('Hervey Bay Hospital')").parent().next().find('select').val(schoolOrder["26"]);
			$("span:contains('Inglewood Medical')").parent().next().find('select').val(schoolOrder["27"]);
			$("span:contains('Innisfail Hospital')").parent().next().find('select').val(schoolOrder["28"]);
			$("span:contains('Jandowae Gatehouse Medical Practice')").parent().next().find('select').val(schoolOrder["29"]);
			$("span:contains('Kilcoy Medical Centre ')").parent().next().find('select').val(schoolOrder["30"]);
			$("span:contains('Kingaroy South Burnett Medical Centre')").parent().next().find('select').val(schoolOrder["31"]);
			$("span:contains('Kingaroy Haly Health')").parent().next().find('select').val(schoolOrder["32"]);
			$("span:contains('Kingaroy Medical Centre')").parent().next().find('select').val(schoolOrder["33"]);
			$("span:contains('Laidley Professional Centre ')").parent().next().find('select').val(schoolOrder["34"]);
			$("span:contains('Maleny/Montille Flinders Medical Centre')").parent().next().find('select').val(schoolOrder["35"]);
			$("span:contains('Miles Medical Centre')").parent().next().find('select').val(schoolOrder["36"]);
			$("span:contains('Mitchell Medical Practice')").parent().next().find('select').val(schoolOrder["37"]);
			$("span:contains('Mount Morgan Private Surgery/Hospital')").parent().next().find('select').val(schoolOrder["38"]);
			$("span:contains('Tamborine Mountain Medical Centre')").parent().next().find('select').val(schoolOrder["39"]);
			$("span:contains('Moura Dawson Medical Practice ')").parent().next().find('select').val(schoolOrder["40"]);
			$("span:contains('Murgon Family Practice')").parent().next().find('select').val(schoolOrder["41"]);
			$("span:contains('Oakey Cherry Street Medical Centre')").parent().next().find('select').val(schoolOrder["42"]);
			$("span:contains('Pittsworth Hospital Medical Centre')").parent().next().find('select').val(schoolOrder["43"]);
			$("span:contains('Roma Clinic')").parent().next().find('select').val(schoolOrder["44"]);
			$("span:contains('Roma Hospital')").parent().next().find('select').val(schoolOrder["45"]);
			$("span:contains('St George Medical Centre')").parent().next().find('select').val(schoolOrder["46"]);
			$("span:contains('St George Hospital')").parent().next().find('select').val(schoolOrder["47"]);
			$("span:contains('Stanthorpe Rowe Medical')").parent().next().find('select').val(schoolOrder["48"]);
			$("span:contains('Surat Medical Practice')").parent().next().find('select').val(schoolOrder["49"]);
			$("span:contains('Tamborine Mountain Medical Practice')").parent().next().find('select').val(schoolOrder["50"]);
			$("span:contains('Tara Medical Centre')").parent().next().find('select').val(schoolOrder["51"]);
			$("span:contains('Taroom Medical Centre')").parent().next().find('select').val(schoolOrder["52"]);
			$("span:contains('Texas Family Medical Centre')").parent().next().find('select').val(schoolOrder["53"]);
			$("span:contains('Theodore Medical Centre')").parent().next().find('select').val(schoolOrder["54"]);
			$("span:contains('Warwick Condamine Medical Centre')").parent().next().find('select').val(schoolOrder["55"]);
			$("span:contains('Warwick Hospital')").parent().next().find('select').val(schoolOrder["56"]);
			$("span:contains('Wondai Medical Centre')").parent().next().find('select').val(schoolOrder["57"]);
			$("span:contains('Woorabinda Medical Centre/Hospital')").parent().next().find('select').val(schoolOrder["58"]);
			$("span:contains('Yeppoon Family Practice ')").parent().next().find('select').val(schoolOrder["59"]);
			$("span:contains('Yeppoon Medical Centre ')").parent().next().find('select').val(schoolOrder["60"]);
			$("span:contains('Yeppoon Capricorn Coast Hospital')").parent().next().find('select').val(schoolOrder["61"]);
			
			var urlParams = {};
			(function () {
			    var match,
			        pl     = /\+/g,  // Regex for replacing addition symbol with a space
			        search = /([^&=]+)=?([^&]*)/g,
			        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			        query  = window.location.search.substring(1);
			
			    while (match = search.exec(query))
			       urlParams[decode(match[1])] = decode(match[2]);
			})();
			alert(urlParams);
			});
		
	}

})();