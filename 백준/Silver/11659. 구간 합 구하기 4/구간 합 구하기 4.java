import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] array = new int[sc.nextInt()+1];
        int num = sc.nextInt();
        for (int i = 1; i < array.length; i++) {
            int num2 = sc.nextInt();
            array[i] = array[i -1] + num2;
        }
        int max, min = 0;
        int[] answer = new int[num];
        for (int i = 0; i < answer.length; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            if(a > b) {
                max = a;
                min = b;
            } else {
                max = b;
                min = a;
            }
            answer[i] = array[max] - array[min -1];
        }
        for (int i = 0; i < answer.length; i++) {
            System.out.println(answer[i]);

        }
    }
}

