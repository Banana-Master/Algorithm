import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        String birthday[][] = new String[num][4];

        for (int i = 0; i < num; i++) {
            birthday[i][0] = scanner.next();
            birthday[i][1] = scanner.next();
            birthday[i][2] = scanner.next();
            birthday[i][3] = scanner.next();
        }
        Arrays.sort(birthday, new Comparator<String[]>() {
            @Override
            public int compare(String[] o1, String[] o2) {
                if (Integer.parseInt(o1[3]) == Integer.parseInt(o2[3])) {
                    if (Integer.parseInt(o1[2]) == Integer.parseInt(o2[2])) {
                        return Integer.compare(Integer.parseInt(o1[1]), Integer.parseInt(o2[1]));
                    } else
                        return Integer.compare(Integer.parseInt(o1[2]), Integer.parseInt(o2[2]));
                }
                return Integer.compare(Integer.parseInt(o1[3]), Integer.parseInt(o2[3]));
            }
        });
        System.out.println(birthday[num-1][0]+"\n"+birthday[0][0]);

        scanner.close();



    }
}