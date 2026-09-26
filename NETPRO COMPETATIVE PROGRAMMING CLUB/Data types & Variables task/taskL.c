#include <stdio.h>


int main() {

     ///dec
     int W;
     int H;
     int x;
     int y;
     int r;
     ///take input
     scanf("%d %d %d %d %d", &W, &H, &x, &y, &r);
     ///condition
     if(x-r >= 0 && x+r <= W && y-r >= 0 && y+r <= H)
     {
          printf("Yes\n");
     }
     else
     {

          printf("No\n");
     }




    return 0;
}
