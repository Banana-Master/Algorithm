import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] answer = new int[scanner.nextInt()];
        for(int i = 0; i < answer.length; i++) {
            answer[i] = scanner.nextInt();
        }
        int num = scanner.nextInt();
        int count = 0;
        for(int i = 0; i < answer.length; i++) {
            if(num == answer[i]) {
                count++;
            }
        }
        System.out.println(count);
    }
}

