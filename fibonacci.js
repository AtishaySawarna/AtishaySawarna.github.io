function fibonacci()
{ 
	var n=parseInt(prompt());
	if(n<=1)
	{
		return n;
	}
	else{
		return fibo(n-1)+fibo(n-2);
	}
}
console.log(fibonacci(n));