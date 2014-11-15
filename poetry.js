poetryCorpus = "long text goes here long";
poetryArr = poetryCorpus.split(/[. ,]/)
freqs = [];
for(i = 0; i < poetryArr.length -1; i++)
{
    if(freqs[poetryArr[i]] == undefined))
    {
        freqs[poetryArr[i]] = [];
    }
    
    freqs[poetryArr[i]].push([poetryArr[i+1]]);
    
}
console.log(freqs)