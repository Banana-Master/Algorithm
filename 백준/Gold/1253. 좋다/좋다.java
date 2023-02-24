import java.util.Arrays;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int answer = 0;
        long[] arr = new long[N];
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }
        Arrays.sort(arr);
        for (int i = 0; i < arr.length; i++) {
            long find = arr[i];
            int a = 0;
            int b = N - 1;
            while(a < b) {
                if(arr[a] + arr[b] == find) {
                    if(a != i && b != i) {
                        answer++;
                        break;
                    } else if(a == i) {
                        a++;
                    } else if(b == i) {
                        b--;
                    }
                } else if(arr[a] + arr[b] < find) {
                    a++;
                } else {
                    b--;
                }
            } 
        }
        System.out.println(answer);
    }
    
}