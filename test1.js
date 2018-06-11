var n=Number(process.argv[2]);
var e=Number(process.argv[3]);
var sum=0;
for (i=1;i<=n;i++){
	sum += pow(i,e);
}
console.log(sum);

function pow(x,e)
{
	var result=1;
	for (var i=0;i<e;i++) {
		result=result*x;		
	}	
	return result;
}




