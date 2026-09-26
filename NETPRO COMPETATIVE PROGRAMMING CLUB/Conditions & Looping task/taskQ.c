#include<stdio.h>

int main()
{

     ///declare
     int T,r1,r2,h,p,i;
     double r,ans;
     ///input
     scanf("%d",&T);
     ///loop
     for(i=1;i<=T;i++)
     {
          ///input
          scanf("%d %d %d %d",&r1,&r2,&h,&p);
          r=r2+(double)(r1-r2)*p/h;
          ans =3.141592653589793*p/3*(r2*r2+r2*r+r*r);
          ///ans
          printf("Case %d: %.10f\n", i, ans);
     }



     return 0;
}
