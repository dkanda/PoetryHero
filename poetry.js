poetryCorpus = "This consists of a record program to save dumps from the kinect sensor and a library that can be linked to providing an interface compatible with freenect  This allows you to save data and repeat for experiments debug problems share datasets and experiment with the kinect without having one We read 1 update from the index per call so this needs to be called in a loop like usual  If the index line is a DepthRGB image the provided callback is called  If the index line is accelerometer data then it is used to update our internal state  If you query for the accelerometer data you get the last sensor reading that we have  The time delays are compensated as best as we can to match those from the original data and current run conditions eg if it takes longer to run this code then we wait less";
poetryArr = poetryCorpus.split(/[. ,]/)
freqs = [];
for(i = 0; i < poetryArr.length -1; i++)
{
    if(freqs[poetryArr[i]] == undefined)
    {
        freqs[poetryArr[i]] = [];
    }
    
    freqs[poetryArr[i]].push(poetryArr[i+1]);
    
}

function GetTheNextWord(word)
{
	if(freqs[word] == undefined)
		return ".";
	else
		return freqs[word][Math.floor(Math.random()*freqs[word].length)];
}