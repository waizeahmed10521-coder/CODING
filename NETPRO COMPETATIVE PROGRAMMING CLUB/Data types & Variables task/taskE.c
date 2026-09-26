#include <stdio.h>

int main()
{
    /// Take the input
    long long n;
    long long m;
    long long a;

    /// Input from client
    scanf("%lld %lld %lld\n", &n, &m, &a);

    /// Print the number
    printf("%lld\n", ((n + a - 1) / a) * ((m + a - 1) / a));

    return 0;
}
