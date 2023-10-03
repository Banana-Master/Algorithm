#include <stdio.h>
#include <string.h>

int main() {
    char str[256];
    scanf("%s", str, sizeof(str));
    int length = strlen(str);
    printf("%d", length);
    
    return 0;
}
