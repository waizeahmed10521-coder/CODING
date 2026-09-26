#include<stdio.h>

int main()
{

     ///declare
     int X,Y,R,N;
     ///input
     scanf("%d%d",&X,&Y);
     ///reminder
     R=Y%X;
     ///more
     N=X-R;
     ///more
     if(R!=0){
          printf("%d\n",N);
     }
     else{
          printf("0\n");
     }

     return 0;
}
