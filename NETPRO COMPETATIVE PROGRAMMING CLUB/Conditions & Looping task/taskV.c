#include<stdio.h>
#include <string.h>

int main()
{

     ///declare
     int N,i,j;
     char s[20][25];
     int cnt;
     int maxLen = 0;
     int space;
     ///input
     scanf("%d",&N);
     for(i=0;i<N;i++)
     {
          cnt=0;

          scanf("%s",s[i]);

          for(j=0; s[i][j] != '\0'; j++)
          {

               if(s[i][j] == 'a')
               {
                    cnt++;
               }

          }
               if(cnt > 1 && cnt % 2 != 0)
               {
                     s[i][j - 1] = '\0';
               }
               if(cnt==1)
               {
                     s[i][j] = 'a';
                     s[i][j + 1] = '\0';
               }
               if(strlen(s[i]) > maxLen)
               {
                      maxLen = strlen(s[i]);
               }


     }
                    for(i=0; i<N; i++)
               {
                      space = (maxLen - strlen(s[i])) / 2;


               for(j=0; j<space; j++)
               {
                      printf(" ");
                 }

               printf("%s\n", s[i]);
               }

     return 0;
}
