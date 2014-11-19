var hasGP = false;
    var repGP;
    var oldGP;
    var lastWord = freqs[Math.floor(Math.random()*freqs.length)];
    var tempo = 500;
    var startTime;
    var beatTolerance;
 
    function canGame() {
        return "getGamepads" in navigator;
    }
 
    function reportOnGamepad() {
        var retArr = [];
        var gp = navigator.getGamepads()[0];
 	   if(((Date.now() - startTime) % tempo) > beatTolerance)
	   {
		//not on beat
		return false;
	   }
        for(var i=0;i<gp.buttons.length;i++) {
            if(gp.buttons[i].pressed){
                retArr.push(i);
            } 
        }
        retArr.push(gp.axes[2] - 2)
        console.log(retArr);
        GenerateText(retArr);
    }
    
    
    function GenerateText(gamePadButtons)
    {
        if(!gamePadButtons.indexOf(0))//green button
        {
	    lastWord = GetTheNextWord(lastWord);
            $("#gamepadDisplay").html($("#gamepadDisplay").html()+ lastWord);
        }
        if(!gamePadButtons.indexOf(1))//green button
        {
            console.log("red button")
        }
    }
 
    $(document).ready(function() {
 
        if(canGame()) {
 
            var prompt = "To begin using your gamepad, connect it and press any button!";
            $("#gamepadPrompt").text(prompt);
 
            $(window).on("gamepadconnected", function() {
                hasGP = true;
                $("#gamepadPrompt").html("Gamepad connected!");
                console.log("connection event");
			startTime = Date.now();
                repGP = window.setInterval(reportOnGamepad,50);
            });
 
            $(window).on("gamepaddisconnected", function() {
                console.log("disconnection event");
                $("#gamepadPrompt").text(prompt);
                window.clearInterval(repGP);
            });
 
            //setup an interval for Chrome
            var checkGP = window.setInterval(function() {
                console.log('checkGP');
                if(navigator.getGamepads()[0]) {
                    if(!hasGP) $(window).trigger("gamepadconnected");
                    window.clearInterval(checkGP);
                }
            }, 500);
        }
 
    });