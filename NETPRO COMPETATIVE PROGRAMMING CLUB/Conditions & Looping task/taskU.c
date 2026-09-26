#include<stdio.h>

int main()
{

     ///declare
     long long T, A, B, a, b, gcd, lcm, total,i;
     ///input
     scanf("%lld",&T);
     for(i=1;i<=T;i++)
     {
          scanf("%lld%lld",&A,&B);
          a = A;
          b = B;
          total=A*B;
     ///LCM

     while(b != 0)
     {
      long long temp = b;
      b = a % b;
      a = temp;
     }

     gcd = a;
     lcm = (A / gcd) * B;
          if(total==lcm)
     {
          printf("yes\n");
     }
     else
     {
          printf("no\n");
     }
     }




     return 0;
}
