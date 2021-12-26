 function prime()
{
  var n, i, flag = true;       
  n = parseInt(n)
  for(i = 2; i <= n/2; i++)
  if (n % i == 0) 
	{
           flag = false;
           break;
        }
             
         if (flag == true)
                alert("prime");
         else
                alert("not prime");
	}