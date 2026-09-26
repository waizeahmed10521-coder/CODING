#include<stdio.h>

int main()
{

     ///declare
     int N,i,j;
     ///input
     scanf("%d",&N);
     ///loop
     for(i=1;i<=N;i++)
     {
          for(j=1;j<=N-i;j++)
          {
               printf(" ");
          }
          for(j=1;j<=i;j++)
          {
               printf("*");
               if(j<i)
               {
                   printf(" ");
               }
               else
               {
                    printf("\n");
               }
          }
     }


     return 0;
}
