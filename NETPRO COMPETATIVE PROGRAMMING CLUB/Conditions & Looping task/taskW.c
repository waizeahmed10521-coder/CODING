#include<stdio.h>

int main()
{
     ///declare
     int a,b,c,d,e,f;
     ///input
     while(scanf("%d%d%d%d%d%d",&a,&b,&c,&d,&e,&f)!=EOF)
     {

     ///sum
     double D = a*e - b*d;
     double x = (c*e - b*f) / D;
     double y = (a*f - c*d) / D;
     ///correction
     if(x == 0)
     x = 0;
     if(y == 0)
     y = 0;

     ///ans
     printf("%.3f %.3f\n",x,y);
     }


     return 0;
}
