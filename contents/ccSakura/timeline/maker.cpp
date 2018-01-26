#include <bits/stdc++.h>
#define ll long long
#define all(a) (a).begin(),(a).end()

using namespace std;

int main(int argc, char const *argv[]) {
    int N,m,s;
    scanf("%d\n",&N);
    int timer[N+1],out[N];
    for (size_t i = 0; i <= N; i++) {
        scanf("%d,%d",&m,&s);
        timer[i]=m*60+s;
    }
    for (size_t i = 0; i < N-1; i++) {
        printf("%d,",timer[i+1]-timer[i]);

    }
    printf("以下が各シーンの長さです。\n");
    printf("%d\n",timer[N]-timer[N-1]);
    return 0;
}
