import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[] arr = new int[n+1];
		if(n >= 0) {
			arr[0] = 0;
		} 
		if(n >= 1) {
			arr[1] = 1;
		}
		if(n>=2){
			for (int i = 2; i < arr.length; i++) {
				arr[i] = arr[i - 1] + arr[i - 2];
			}
		}
		System.out.println(arr[n]);
		sc.close();
		}
}
