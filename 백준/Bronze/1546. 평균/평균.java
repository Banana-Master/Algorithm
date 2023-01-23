import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[] array = new double[sc.nextInt()];
        for (int i = 0; i < array.length; i++) {
            array[i] = sc.nextDouble();
        }
        Arrays.sort(array);
        double M = array[array.length -1];
        for (int i = 0; i < array.length; i++) {
            array[i] = (array[i] / M) * 100;
        }
        double sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        System.out.println(sum / array.length);
    }
}

