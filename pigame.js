var storedpi = "141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786085784383827967976681454100953883786360950680064225125205117392984896084128488626945604241965285022210661186306744278622039194945047123713786960956364371917287467764657573962413890865832645995813390478027590099465764078951269468398352595709825822620522489407726719478268482601476990902640136394437455305068203496252451749399651431429809190659250937221696461515709858387410597885959772975498930161753928468138268683868942774155991855925245953959431049972524680845987273644695848653836736222626099124608051243884390451244136549762780797715691435997700129616089441694868555848406353422072225828488648158456028506016842739452267467678895252138522549954666727823986456596116354886230577456498035593634568174324112515076069479451096596094025228879710893145669136867228748940560101503308617928680920874760917824938589009714909675985261365549781893129784821682998948722658804857564014270477555132379641451523746234364542858444795265867821051141354735739523113427166102135969536231442952484937187110145765403590279934403742007310578539062198387447808478489683321445713868751943506430218453191048481005370614680674919278191197939952061419663428754440643745123718192179998391015919561814675142691239748940907186494231961567945208095146550225231603881930142093762137855956638937787083039069792077346722182562599661501421503068038447734549202605414665925201497442850732518666002132434";
document.addEventListener("keyup", function(event) {
	tryifempty(document.getElementById("userinput").value);
});

var nextdigit = 0;
var correctdigits = 0;
var mistakecount = 0;
var digitsshown = 0;
var pitext = "";
var limitreached = false;
startover();

function startover() {
	nextdigit = 0;
	correctdigits = 0;
	mistakecount = 0;
	digitsshown = 0;
	limitreached = false;
	document.getElementById("pitext").innerHTML = "3.";
	document.getElementById("limitreached").style.display = "none";
	document.getElementById("currentdigit").innerHTML = "digit 1";
	document.getElementById("correctdigits").innerHTML = "0 digits";
	document.getElementById("mistaketext").innerHTML = "0 digits";
	document.getElementById("digitsshown").innerHTML = "0 digits";
	document.getElementById("mistaketable").innerHTML = "<tr><td>Mistake #</td><td>At digit #</td></tr>";
	pitext = "3.<text style='color: #00bf00;'>";
}

function showdigits(digitstoshow) {
	if (digitstoshow > 0) {
		var i = 0;
		pitext = pitext + "</text><text style='color: #0000bf;'>";
		while (i < digitstoshow && !limitreached) {
			pitext = pitext + storedpi.charAt(nextdigit);
			nextdigit++;
			digitsshown++;
			i++;
			if (nextdigit >= storedpi.length) {
				limitreached = true;
				document.getElementById("limitreached").style.display = "block";
			}
		}
		pitext = pitext + "</text>";
		document.getElementById("pitext").innerHTML = pitext;
		document.getElementById("currentdigit").innerHTML = "digit " + (nextdigit + 1);
		if (digitsshown == 1) {
			document.getElementById("digitsshown").innerHTML = digitsshown + " digit";
		} else {
			document.getElementById("digitsshown").innerHTML = digitsshown + " digits";
		}
		pitext = pitext + "<text style='color: #00bf00;'>";
	}
}

function tryifempty(userinput) {
	var i = userinput.length;
	while (i != 0 && !limitreached) {
		if (userinput.charAt(userinput.length - i) == storedpi.charAt(nextdigit)) {
			pitext = pitext + storedpi.charAt(nextdigit);
			document.getElementById("pitext").innerHTML = pitext + "</text>";
			correctdigits++;
			nextdigit++;
			document.getElementById("currentdigit").innerHTML = "digit " + (nextdigit + 1);
			if (nextdigit == 1) {
				document.getElementById("correctdigits").innerHTML = correctdigits + " digit";
			} else {
				document.getElementById("correctdigits").innerHTML = correctdigits + " digits";
			}
		} else {
			mistakecount++;
			document.getElementById("pitext").innerHTML = pitext + "</text><text style='color: #bf0000;'>" + userinput.charAt(userinput.length - i); + "</text";
			if (mistakecount == 1) {
				document.getElementById("mistaketext").innerHTML = mistakecount + " digit";
			} else {
				document.getElementById("mistaketext").innerHTML = mistakecount + " digits";
			}
			document.getElementById("mistaketable").innerHTML = document.getElementById("mistaketable").innerHTML + "<tr><td>" + mistakecount + "</td><td>" + (nextdigit + 1) + "</td></tr>";
		}
		i--;
		if (nextdigit >= storedpi.length) {
			limitreached = true;
			document.getElementById("limitreached").style.display = "block";
		}
	}
	document.getElementById("userinput").value = "";
}
