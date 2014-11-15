var hasGP = false;
    var repGP;
    var oldGP;
 
    function canGame() {
        return "getGamepads" in navigator;
    }
 
    function reportOnGamepad() {
        var retArr = [];
        var gp = navigator.getGamepads()[0];
 
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
            console.log("green button")
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