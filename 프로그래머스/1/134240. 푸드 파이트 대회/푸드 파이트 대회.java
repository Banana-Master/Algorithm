class Solution {
    public String solution(int[] food) {
        String str = "";
        for(int i = 1; i < food.length; i++) {
            int food_count = food[i] % 2 == 0 ? food[i] : food[i] -1;
            str += (i + "").repeat(food_count / 2);
        }
        StringBuffer sb = new StringBuffer(str);
        return sb.toString() + "0" + sb.reverse().toString();
    }
}