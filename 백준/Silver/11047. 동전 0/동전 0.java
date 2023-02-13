import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(); // 동전 종류
        int K = sc.nextInt(); // 금액
        int[] array = new int[N]; // 동전 종류 배열
        for (int i = 0; i < N; i++) {
            array[i] = sc.nextInt();
        }
        int answer = 0;
        for (int i = N-1; i >=0; i--) {
            if(K>=array[i]) {
                answer += K/array[i];
            }
            K%=array[i];
        }
        System.out.println(answer);

    }
}
