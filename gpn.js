function rez() {
    var k1, k2, result;
    k1=document.getElementById('k1').value;
    k2=document.getElementById('k2').value;
    result=k1*k2;
    result=result.toFixed(2);
    document.getElementById('textrez').innerHTML=
    'Вартість ' + k1 + ' квитка(-ів) ' + result + ' гривень';
}