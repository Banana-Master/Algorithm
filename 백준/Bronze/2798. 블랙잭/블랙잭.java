import java.util.Scanner;

public class Main  {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(); // 카드 개수
        int M = sc.nextInt(); // 맞출 숫자
        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }
        int answer = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i+1; j < arr.length; j++) {
                for (int k = i+2; k < arr.length; k++) {
                    if(((i != j) && (j!= k) && (k != i)) && (answer < arr[i] + arr[j] + arr[k]) && (M >= arr[i] + arr[j] + arr[k])) {
                        answer = arr[i] + arr[j] + arr[k];
                    }
                }
            }
        }
        System.out.println(answer);
        sc.close();
        
    }
}
