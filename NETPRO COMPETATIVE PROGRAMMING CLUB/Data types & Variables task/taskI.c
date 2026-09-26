#include <stdio.h>

int main() {

     ///dec
     int N;
     int first=1;
     int second=1;
     int next;
     ///input
     scanf("%d",&N);
     ///get ans
    if (N == 1 || N == 2)
    {
        printf("1");
    }
    else
    {
         ///loop
     for (int i = 3; i <= N; i++)
        {
            next = first + second;
            first = second;
            second = next;
        }
     ///the ans
     printf("%d",second);


    return 0;
     }
}
