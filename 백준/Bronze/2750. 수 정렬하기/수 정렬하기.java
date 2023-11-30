import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int N = sc.nextInt();
    int[] result = new int[N];
    for(int i = 0; i < N; i++) {
      result[i] = sc.nextInt();
    }
    for(int i = 0; i < N - 1; i++) {
      for(int j = 0; j < N - 1 - i; j++) {
        if(result[j] > result[j + 1]) {
          int temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
    for(int i = 0; i < N; i++) {
      System.out.println(result[i]);
    }
    sc.close();
  }
}
