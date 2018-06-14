var str=process.argv[2];
var shift=parseInt(process.argv[3]);
process.stdout.write(caesarShift(str,shift));

function caesarShift(str, amount) 
{
    if (isArgsBad(str.length, amount)){
        return "Аргументы не удовлетворяют условию задачи!";
    };
	if (amount < 0)
		return caesarShift(str, amount + 26);
	var output = '';
	for (var i = 0; i < str.length; i ++) {
        var c = str[i];
		if (c.match(/[a-z]/i)) {
			var code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		output += c;
	}
	return output;
};

function isArgsBad(x, y)
{
    if (x < 1 || y < 0 || x > 10000 || y > 10000){
        return true;
    };
    return false;
}