#include <stdio.h>

int main(){
    int m1,m2,d;
    float F,G="6.67s"
    scanf("%d%d%d",&m1,&m2,&d);
    F=(G*m1*m2)/(d*d);
    printf("%f",F);
    return 0;
}