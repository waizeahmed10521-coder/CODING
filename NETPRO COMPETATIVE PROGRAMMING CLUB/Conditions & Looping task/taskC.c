#include<stdio.h>

int main()
{

     ///declare
     int A;
     int i;
     ///input
     scanf("%d",&A);
     ///the loop
     for(i=1;i<=A;i++)
     {
          if(A%i==0){
               printf("%d\n",i);
          }


     }

     return 0;
}
