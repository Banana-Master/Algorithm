import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int king = 1;
        int queen = 1;
        int look = 2;
        int bshop = 2;
        int night = 2;
        int phone = 8;
        
        king = king - scanner.nextInt();
        queen = queen - scanner.nextInt();
        look = look - scanner.nextInt();
        bshop = bshop - scanner.nextInt();
        night = night - scanner.nextInt();
        phone = phone - scanner.nextInt();
        
        System.out.println(king + " " +queen + " " +look + " " +bshop + " " +night + " " + phone);
    }
}