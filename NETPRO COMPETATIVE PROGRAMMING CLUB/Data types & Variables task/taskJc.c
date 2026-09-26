#include <stdio.h>

int main() {

    ///dec
    int M;
    int K;
    int remaining;
    ///input take
    scanf("%d %d",&M, &K);
    ///make the ans
    remaining=M%K;
    ///ans
    printf("%d",remaining);



    return 0;
}
