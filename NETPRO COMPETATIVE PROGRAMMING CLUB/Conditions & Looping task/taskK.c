#include<stdio.h>

int main()
{
     ///declare
     int x,rem,r,ans;
     ///input
     scanf("%d",&x);
     ///full step
     r=x/5;
     ///more steps
     rem=x%5;
     ///all step
     ans=r+1;
     ///if-else
     if(rem==0)
     {
          printf("%d\n",r);
     }
     else
     {
          printf("%d\n",ans);
     }

     return 0;
}
