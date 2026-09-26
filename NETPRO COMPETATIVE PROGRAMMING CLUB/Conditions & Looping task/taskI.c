#include<stdio.h>

int main()
{

     ///declare
     int T,i;
     ///input
     scanf("%d",&T);
     ///loop
     for(i=1;i<=T;i++){
               ///declare
          int a,b,total;
          ///input
          scanf("%d%d",&a,&b);
          ///add
          total=a+b;
          ///print
          printf("Case %d: %d\n",i,total);
     }

     return 0;
}
