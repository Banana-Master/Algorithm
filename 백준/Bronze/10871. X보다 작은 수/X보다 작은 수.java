import java.util.ArrayList;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] array = new int[scanner.nextInt()];
        int X = scanner.nextInt();
        ArrayList<Integer> array2 = new ArrayList<>();
        for(int i = 0; i < array.length; i++) {
            int num = scanner.nextInt();
            array[i] = num;
            if(array[i] < X) {
                array2.add(num);
            }
        }
        for (int i = 0; i < array2.size(); i++) {
            System.out.print(array2.get(i) + " ");
        }
    }
}

