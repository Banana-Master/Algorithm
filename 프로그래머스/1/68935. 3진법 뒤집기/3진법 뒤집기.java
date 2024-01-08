import java.util.Arrays;
import java.util.Collections;

class Solution {
    public int solution(int n) {
        String str_3 = Integer.toString(n, 3);
        String[] arr_3 = str_3.split("");
        
        Collections.reverse(Arrays.asList(arr_3));
        
        String arr_reverse = String.join("", arr_3);
        
        int result = Integer.parseInt(arr_reverse, 3);
        return result;
    }
}
