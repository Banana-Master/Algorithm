import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

class Solution {
    public int[] solution(int N, int[] stages) {
        HashMap<Integer, Double> map = new HashMap<>();

        for (int i = 1; i <= N; i++) {
            int currentStage = i;
            long count = Arrays.stream(stages).filter(stage -> stage == currentStage).count();
            long player = Arrays.stream(stages).filter(stage -> stage >= currentStage).count();
            map.put(i, (double) count / player);
        }

        List<HashMap.Entry<Integer, Double>> list;
        list = map.entrySet()
            .stream()
            .sorted((a, b) -> {
                if (a.getValue() > b.getValue()) return -1;
                if (a.getValue() < b.getValue()) return 1;
                return a.getKey().compareTo(b.getKey());
            })
            .collect(Collectors.toList());

        return list.stream().mapToInt(HashMap.Entry::getKey).toArray();

    }
}