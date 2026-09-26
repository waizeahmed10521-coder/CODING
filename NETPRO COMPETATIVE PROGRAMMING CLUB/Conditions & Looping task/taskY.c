#include<stdio.h>

int main()
{

     ///declare
     int N,sum,i;
     ///input
     scanf("%d",&N);
     sum=1;
     ///loop
     for(i=1;i<N;i++)
     {
          sum=sum*2;

     }
     printf("%d\n",sum);

     return 0;
}
