let i = 0;
let countfour = 0;
let countten = 0;
while (i < 50) {
  i++;

  countten++

	console.log(i)

  if (i % 10 == 0) {
    console.log('今 ' + countten + ' 回ループしました。');
  }

  if (i % 4 == 0) {
		countfour++
    console.log('4で割れる数です。' + countfour);
  }

  if (i == 50) {
    alert('50回カウントが終わりました。');
  }
}