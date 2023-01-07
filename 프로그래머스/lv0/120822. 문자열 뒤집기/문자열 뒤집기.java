class Solution {
    public String solution(String my_string) {
        StringBuffer sb = new StringBuffer(my_string);
        String str = sb.reverse().toString();
        
        return str;
    }
}