#include <stdio.h>

int main()
{
    int a, b;

    while(scanf("%d%d", &a, &b) != EOF)
    {
        int sum = a + b;
        int cnt = 0;

        if(sum == 0)
        {
            cnt = 1;
        }
        else
        {
            while(sum > 0)
            {
                sum = sum / 10;
                cnt++;
            }
        }

        printf("%d\n", cnt);
    }

    return 0;
}
