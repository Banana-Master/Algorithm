import java.util.ArrayList;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int[] arr = new int[progresses.length];
        for(int i = 0; i < progresses.length; i++) {
            while(progresses[i] < 100) {
                progresses[i] += speeds[i];
                arr[i]++;
            }
        }
        ArrayList<Integer> list = new ArrayList<>();
        int maxDay = arr[0];
        int count = 1;
        
        for (int i = 1; i < progresses.length; i++) {
            if (arr[i] <= maxDay) {
                count++;
            } else {
                list.add(count);
                count = 1;
                maxDay = arr[i];
            }
        }
        list.add(count);
        return list.stream().mapToInt(i -> i).toArray();
    }
}