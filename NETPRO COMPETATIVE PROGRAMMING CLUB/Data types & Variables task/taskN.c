#include <stdio.h>

int main()
{

     ///dec
     int N;
     int sum=0;
     ///input
     scanf("%d",&N);
     ///loop
     for (int i = 1; i <= N; i++)
     {
          ///square
        sum = sum + i * i;

       }

     ///ans
     printf("%d",sum);



     return 0;
}
