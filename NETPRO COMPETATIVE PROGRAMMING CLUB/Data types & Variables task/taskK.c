#include <stdio.h>
#include <math.h>


int main() {

     ///dec
     double x1;
     double y1;
     double x2;
     double y2;
     double distance;
     ///take input
     scanf("%lf %lf %lf %lf", &x1, &y1, &x2, &y2);
     ///make the ans
     distance = sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
     ///ans
     printf("%f", distance);



    return 0;
}
