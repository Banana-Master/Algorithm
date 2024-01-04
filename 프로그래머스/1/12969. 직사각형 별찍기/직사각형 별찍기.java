import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        String result = "";
        for(int i = 0; i < b; i++) {
            result += "*".repeat(a) + "\n";
        }
        System.out.println(result);
        sc.close();
    }
}