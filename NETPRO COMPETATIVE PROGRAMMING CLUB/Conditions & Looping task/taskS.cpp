#include<bits/stdc++.h>
using namespace std;
int main()
{

///declare
long long a,b,GCD,LCM;
while(scanf("%lld%lld", &a, &b)!=EOF)
{

     long long temp,originalA,originalB;
     originalA=a;
     originalB=b;

while(b != 0)
{

    temp = a % b;
    a = b;
    b = temp;
}

GCD = a;
     LCM=(originalA * originalB) / GCD;
     ///ans
     printf("%lld %lld\n",GCD,LCM);
}
return 0;
}
