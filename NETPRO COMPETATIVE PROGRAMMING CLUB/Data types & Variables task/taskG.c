#include <stdio.h>

int main()
{
    /// Int dec
    double r;
    double area;
    double circumference;

    /// Take input
    scanf("%lf", &r);

    /// The process
    area = 3.141592653589793 * r * r;
    circumference = 2 * 3.141592653589793 * r;

    /// The ans
    printf("%f %f\n", area, circumference);

    return 0;
}
