#include<stdio.h>

int main()
{


     ///declare
     int N,cnt,i;
     cnt=0;
     ///input
     scanf("%d",&N);
     ///loop
     for(i=1;i<=N;i++)
     {
          if(N%i==0)
          {
               cnt++;
          }

          }
          if(cnt==2)
          {
               printf("YES\n");
           }
          else
          {
               printf("NO\n");
          }


     return 0;
}
