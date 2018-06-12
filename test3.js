var t1=Number(process.argv[2]);
var t2=Number(process.argv[3]);

console.log(sumTime(t1,t2));

function sumTime (x,y)
{
    var sum = x + y;
    var secIn = [sum, 3600, 60, 1];
    var timeNames = [
      ["час", "часа", "часов"],
      ["минута", "минуты", "минут"],
      ["секунда", "секунды", "секунд"]
    ];
    if (isArgsBad(x, y)){
        return "Аргументы не удовлетворяют условию задачи!";
    };

    var result  = "";
    var remainder = 1;
    
    for (var i = 0; i < (secIn.length - 1); i++){
        var fullNum = secIn[i] * remainder / secIn[i + 1];
        // var num = Math.floor(fullNum);
        var num = parseInt(fullNum);
        var timeName = selectTimeName(num, timeNames[i]);
        remainder = fullNum - num;

        if ( num !== 0) {
            result += (num + " " + timeName + ((i < 2) ? " " : ""));
        } 
    }
    return result;
}

function selectTimeName (num, timeName)
{
    num = num.toString(10);
    var x = +num[num.length - 1],
        y = +num[num.length - 2];
    return (
        ((x === 1) && (y !== 1)) ? timeName[0] : 
        ((x > 1 && (x < 5) && (y !== 1))) ? 
        timeName[1] : timeName[2]
    );
}

function isArgsBad(x, y)
{
    if (x < 1 || y < 1 || x > 100000 || y > 100000){
        return true;
    };
    return false;
}