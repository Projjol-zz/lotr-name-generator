$(document).ready(function(){
	$('input').change(function() {

		$('#lotr-form').submit();
});

	$("#lotr-form").click(function() {
		var dict =["Crebain","Kirinki","Mearas","Mûmakil","Wargs","Carc","Gwaihir","Roäc","Thorondor", "Od", "Roch","Asfaloth","Bill","Brego","Bumpkin","Fatty","Felaróf","Firefoot","Hasufel","Lightfoot","Nahar","Rochallor","Roheryn","Shadowfax","Snowmane","Strider","Stybba","Windfola","Carcharoth","Draugluin","Huan","Shelob","Ungoliant","Dramborleg","Glamdring","Grond","Gurthang","Gúthwinë","Herugrim","Narsil","Orcrist","Ringil","Sting","Adrahil","Aegnor","Aerandir","Aghan","Aglahad ","Ailinel","Alatar ","Aldamir","Aldor","Almarian","Almiel","Amandil","Amdír","Amlaith","Amrod","Amroth","Anardil","Anborn","Ancalagon","Andróg","Angbor","Angelimar","Angrod","Anárion","Adûnakhôr","Gimilzôr","Pharazôn","Sakalthôr","Zimrathôn","Ador","Aglas","Agorn","Elessar","Agost","Ahad","Ahael","Anarth","Anuir","Aphant","Aphor","Assuil","Athorn","Aval","Avir","Avorn","Ciryas","Edhel","Geleb","Gonui","Ien","Tamir","Thad","Vedui","Vegil","Veleg","Wen","Asgon","Atanamir","Atanatar","Aulë","Azaghâl","Azog"]

		var randomNum = function(){
			return  Math.floor((Math.random() * 100) + 1);
		}

		var substrNum = function(){
			return  Math.floor((Math.random() * 2) + 1);
		}
		var text = ""
		var generate = function(randNum){
			while(randNum>0){
				var num = randomNum();
				var subNum = substrNum();
				text +=dict[num];
				if(randNum%2 === 0)
					text +="-";
				else if (randNum%2 != 0 && randNum-1 != 0)
					text +="-";
				randNum -=1
			}
		}
		generate(4);
		$("#result").empty().html(text);

		return false;
	});
});
