import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int[] arr = new int[num];
        for (int i = 0; i < num; i++) {
            arr[i] = sc.nextInt();
        }
        int count = 1;
        int max = arr[arr.length-1];
        for (int i = arr.length -1; i > 0; i--) {
            if(max < arr[i-1]) {
                count++;
                max = arr[i-1];
            } 
        }
        System.out.println(count);
    }
    
}