import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		ArrayList<Integer> array = new ArrayList<>();
		while(num != 0) {
			array.add(num % 2);
			num /= 2;
		}
		int count = 0;
		for(int i = array.size() - 1; i >= 0; i--) {
			if(array.get(i) == 1) {
				count++;
			}
		}
		System.out.println(count);
		
		sc.close();
	}
}
