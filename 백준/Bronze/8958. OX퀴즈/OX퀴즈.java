import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        for (int i = 0; i < num; i++) {
            int sum = 0, point = 1;
            String ox = sc.next();
            char[] ch = ox.toCharArray();
            for (int j = 0; j < ch.length; j++) {
                if(ch[j]=='O') {
                    sum += point;
                    point++;
                } else {
                    point = 1;
                }
            }
            System.out.println(sum);
        }
    }
}

