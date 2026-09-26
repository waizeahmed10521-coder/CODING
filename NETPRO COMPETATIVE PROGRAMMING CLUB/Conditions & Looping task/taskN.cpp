#include<bits/stdc++.h>
using namespace std;

int main()
{

     ///declare
     long long n,k,oddCnt,ans,evenCnt;
     ///input
     scanf("%lld%lld",&n,&k);
     ///odd
     oddCnt=(n+1)/2;
     ///if-else
     if(k<=oddCnt)
     {
          ans=k*2-1;
     }
     else
     {
          evenCnt=k-oddCnt;
          ans=evenCnt*2;
     }
     ///ans
     printf("%lld\n",ans);




     return 0;
}
