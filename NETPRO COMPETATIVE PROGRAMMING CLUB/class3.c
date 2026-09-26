#include <stdio.h>

int main(){
    int a1,a2,b1,b2,c1,c2;
    float x,y;
    scanf("%d%d%d",&a1,&b1,&c1);
    scanf("%d%d%d",&a2,&b2,&c2);
    x=(c1*b2-c2*b1)/(a1*b2-a2*b1);
    y=(a1*c2-a28c1)/(a1*b2-a2*b1);
    printf("%f%f",x,y)
    return 0;
}