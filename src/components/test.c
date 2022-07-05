#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
int lcm(int a,int b)
{
    int lcm;
    int divisor,reminder ,quotient;
    quotient=a;
    divisor=b;
    
    while(quotient!=0)
    {
        reminder=a%b;
        divisor=b;
        quotient=reminder;
    }
    return lcm;

}

int main() {
    
    int a,b;
    scanf("%d %d",&a,&b);
    int lcmvar;
    lcmvar=lcm(a,b);
    printf("%d",lcmvar);

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
    return 0;
}
