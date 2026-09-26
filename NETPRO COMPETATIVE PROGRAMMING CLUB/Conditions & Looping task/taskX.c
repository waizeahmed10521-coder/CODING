/*
sir eta ami krsilam but emnite kaj kore kintu submit ney na


#include<stdio.h>

int main()
{

     ///declare
     int N,num,cnt,j,isPrime;
     ///input
     scanf("%d",&N);

     num=2;
     cnt=0;

     for(cnt=0;cnt<N;)
     {
          isPrime=1;
          for(j=2;j<num;j++)
          {
               if(num%j==0)
               {
                    isPrime=0;
               }
          }
               if(isPrime==1)
          {
               cnt++;
               }
               if(cnt==N)
               {
                    printf("%d\n",num);
                    break;

               }
               num++;


     }

     return 0;
}

*/

#include <stdio.h>

#define LIMIT 8000000

unsigned char composite[LIMIT + 1];

int main()
{
    /// declare
    int N, i, j, cnt;

    /// input
    scanf("%d", &N);

    /// Sieve of Eratosthenes
    for(i = 2; i * i <= LIMIT; i++)
    {
        if(composite[i] == 0)
        {
            for(j = i * i; j <= LIMIT; j += i)
            {
                composite[j] = 1;
            }
        }
    }

    /// find N-th prime
    cnt = 0;

    for(i = 2; i <= LIMIT; i++)
    {
        if(composite[i] == 0)
        {
            cnt++;

            if(cnt == N)
            {
                printf("%d\n", i);
                break;
            }
        }
    }

    return 0;
}
