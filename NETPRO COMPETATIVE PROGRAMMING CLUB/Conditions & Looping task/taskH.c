#include<stdio.h>
#include<math.h>


int main()
{

     ///declare
     int T,i;
     double r,sqSide,sqArea,cArea,blueArea;
     ///input
     scanf("%d",&T);
     ///loop
     for(i=0;i<T;i++)
     {
          scanf("%lf",&r);
          ///pi
          double pi = 2 * acos(0.0);
          ///sum
          sqSide=2*r;
          sqArea=4*r*r;
          cArea=pi*r*r;
          blueArea=sqArea-cArea;;
          ///ans
          printf("Case %d: %.2lf\n", i + 1, blueArea);
     }







     return 0;
}
