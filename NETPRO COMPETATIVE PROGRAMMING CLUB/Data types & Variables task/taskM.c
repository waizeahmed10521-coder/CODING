#include <stdio.h>
#include <string.h>

///dec
char A[10000002];
char B[10000002];
char sum[10000003];

int main()
{   ///input
    scanf("%s %s", A, B);

    int i = strlen(A) - 1;
    int j = strlen(B) - 1;
    int k = 0;
    int carry = 0;

    while (i >= 0 || j >= 0 || carry)
    {
        int a = 0;
        int b = 0;

        if (i >= 0)
            a = A[i--] - '0';

        if (j >= 0)
            b = B[j--] - '0';

        int total = a + b + carry;

        sum[k++] = (total % 10) + '0';
        carry = total / 10;
    }

    for (int l = 0; l < k / 2; l++)
    {
        char temp = sum[l];
        sum[l] = sum[k - l - 1];
        sum[k - l - 1] = temp;
    }

    sum[k] = '\0';
///ans
    printf("%s\n", sum);

    return 0;
}
