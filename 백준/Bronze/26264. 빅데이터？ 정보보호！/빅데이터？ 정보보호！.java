import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        String str = sc.next();
        char[] ch = str.toCharArray();
        int security = 0, bigdata = 0;
        for (int i = 0; i < ch.length; i++) {
            if(ch[i]=='s') {
                security++;
            }
            if(ch[i]=='b') {
                bigdata++;
            }
        }
        if(security>bigdata) {
            System.out.println("security!");
        } else if(security<bigdata) {
            System.out.println("bigdata?");
        } else {
            System.out.println("bigdata? security!");
        }
    }
}

