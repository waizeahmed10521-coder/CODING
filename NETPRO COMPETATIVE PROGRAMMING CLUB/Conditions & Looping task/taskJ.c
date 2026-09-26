#include<stdio.h>

int main()
{

     ///declare
     int T,i;
     int o,m;
     ///input
     scanf("%d",&T);
     ///loop
     for(i=1;i<=T;i++)
     {
          int n,m;
          scanf("%d",&n);

           ///if-else
          if(n<=10)
         {
          o=0;
          m=n;
          printf("%d %d\n",o,m);
         }
         else
         {
          o=10;
          m=n-o;
          printf("%d %d\n",o,m);
         }

     }




     return 0;
}
