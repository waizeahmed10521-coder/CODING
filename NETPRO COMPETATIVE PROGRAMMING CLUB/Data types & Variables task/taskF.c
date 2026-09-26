#include <stdio.h>

int main()
{
    /// The int
    int a;
    int b;
    int area;
    int perimeter;

    /// Take the input
    scanf("%d", &a);
    scanf("%d", &b);

    /// The ans
    area = a * b;
    perimeter = 2 * (a + b);

    /// Make the ans
    printf("%d %d\n", area, perimeter);

    return 0;
}
