#include<stdio.h>

int main ()
{

     ///declare
     int n;
     int i;
     int x;
     int y;
     int z;
     int sumX;
     int sumY;
     int sumZ;
     sumX=0;
     sumY=0;
     sumZ=0;

     ///input
     scanf("%d",&n);
     ///loop
     for(i=1;i<=n;i++)
     {

          scanf("%d %d %d",&x,&y,&z);
          sumX=sumX+x;
          sumY=sumY+y;
          sumZ=sumZ+z;

     }
     if(sumX == 0 && sumY == 0 && sumZ == 0)
     {
          printf("YES");
     }
     else
     {
          printf("NO");
     }


     return 0;
}
