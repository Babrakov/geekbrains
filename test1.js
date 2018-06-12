var n=Number(process.argv[2]);
var e=Number(process.argv[3]);

process.stdout.write(sumPow(n,e));

function sumPow(x, y)
{
    if (isArgsBad(x, y)){
        return "Аргументы не удовлетворяют условию задачи!";
    };
    var result=0;
    for (var i=1;i<=x;i++){
        result += pow(i,y);
    }
    return result.toString();
}

function pow(x,y)
{
	var result=1;
	for (var i=0;i<y;i++) {
		result=result*x;
	}    
	return result;
}

function isArgsBad(x, y)
{
    if (x < 1 || y < 1 || x > 100 || y > 100){
        return true;
    };
    return false;
}