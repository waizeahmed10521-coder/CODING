#include <stdio.h>

int main()
{

     ///declare
     int N,a,b,c,i,max,ans;
     ///input
     scanf("%d",&N);
     ///loop
     for(i=1;i<=N;i++)
     {
          scanf("%d%d%d",&a,&b,&c);
          if(a > b && a > c)
          {
               max=a;
          }
          else if(b > a && b > c)
          {
               max=b;
          }
          else
          {
               max=c;
          }
          if(max==a)
     {
          ans=a*a == b*b + c*c;
     }
     else if(max==b)
     {
          ans=b*b == a*a + c*c;
     }
     else
     {
          ans=c*c == a*a + b*b;
     }
               if(ans==1)
     {
          printf("YES\n");
     }
     else
     {
          printf("NO\n");
     }

     }




     return 0;
}
