function weightConverter(num)
{
    num=(num/2.2046).toFixed(0);
    document.getElementById("outputKilograms").innerHTML=num;
}