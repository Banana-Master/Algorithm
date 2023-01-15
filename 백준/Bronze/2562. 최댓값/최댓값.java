import java.util.Arrays;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] array = new int[9];
        for(int i = 0; i < array.length; i++) {
            array[i] = scanner.nextInt();
        }
        int max = 0;
        for(int i = 0; i < array.length; i++) {
            if(array[i] > max) {
                max = array[i];
            }
        }
        int answer = 0;
        for(int i = 0; i < array.length; i++) {
            if(max == array[i]) {
                answer = i+1;
                break;
            }
        }
        System.out.println(max);
        System.out.println(answer);

    }
}

