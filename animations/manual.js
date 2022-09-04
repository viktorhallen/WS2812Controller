/*******************************
	christmas animations
*******************************/
var common = require("./common.js");
var name = "manual.js";

/*******************************
	fader methods
*******************************/

var Fade2Color1;
var Fade2Color2;
var CurrentFadeColor;
var Brightness = 255;
var FadingDown = true;
var FadeSpeed = 10;

function manual() {
	this.GoManual = function (args, strip) {
		console.log("Starting Manual");
		console.log(args);
//		Fade2Color1 = parseInt("0x" + args.Color1);
//		Fade2Color2 = parseInt("0x" + args.Color2);

//		CurrentFadeColor = Fade2Color1;
//		strip.SetStripColor(CurrentFadeColor);

		strip.SetBrightness(255);
		for(let i = 0; i < strip.Lights.length; i++) {
			if(args[i] != undefined){
	     			strip.Lights[i] = common.rgb2Int(args[i].r, args[i].g, args[i].b);
			}
		}
		
		strip.Mode = "GoManual";
		strip.Render();			

//		this.FadeTick(strip);
	};

	this.FadeTick = function (strip) {
		var _this = this;

		if (strip.Mode != "GoFade2") {
			strip.SetBrightness(255);
			return;
		}

		if (FadingDown) {
			// go down
			if (Brightness <= 50) {
				FadingDown = false;
				if (CurrentFadeColor == Fade2Color1) {
					CurrentFadeColor = Fade2Color2;
				} else {
					CurrentFadeColor = Fade2Color1;
				}
				strip.SetStripColor(CurrentFadeColor);
			} else {
				// fade down
				strip.SetBrightness(Brightness);
				Brightness--;
			}
		} else {
			// go up
			if (Brightness > 254) {
				FadingDown = true;
			} else {
				// fade down
				strip.SetBrightness(Brightness);
				Brightness++;
			}
		}

		if (strip.Mode == "GoFade2") {
			setTimeout(function () {
				_this.FadeTick(strip);
			}, FadeSpeed);
		} else {
			FadeSpeed = 10;
			strip.SetBrightness(255);
		}
	};
}

module.exports = new manual();
