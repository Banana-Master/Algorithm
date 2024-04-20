import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            HashMap<String, BroadcastRecord> recordHashMap = new HashMap<>();

            int[] inputCounts = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            int n = inputCounts[0];
            int m = inputCounts[1];

            for (int i = 0; i < n; i++) {
                String[] input = br.readLine().split(" ");
                String name = input[0];

                if (recordHashMap.containsKey(name)) {
                    recordHashMap.get(name).setRecord(Integer.parseInt(input[1]), input[2], input[3]);
                } else {
                    BroadcastRecord record = new BroadcastRecord();
                    record.setRecord(Integer.parseInt(input[1]), input[2], input[3]);
                    recordHashMap.put(name, record);
                }
            }

            ArrayList<String> result = new ArrayList<>();

            for (Map.Entry<String, BroadcastRecord> entry : recordHashMap.entrySet()) {
                if (entry.getValue().checkRecord(m)) {
                    result.add(entry.getKey());
                }
            }
            if(result.isEmpty()){
                System.out.println(-1);
            } else {
                result.sort((o1, o2) -> o1.compareTo(o2));
                System.out.println(String.join("\n", result));
            }

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}

class BroadcastRecord {
    private final HashMap<Integer, Integer> record = new HashMap<>();

    public HashMap<Integer, Integer> getRecord() {
        return this.record;
    }

    public void setRecord(int day, String StartTime, String EndTime) {
        int[] StartTimeArr = Arrays.stream(StartTime.split(":")).mapToInt(Integer::parseInt).toArray();
        int[] EndTimeArr = Arrays.stream(EndTime.split(":")).mapToInt(Integer::parseInt).toArray();
        int time = ((EndTimeArr[0] * 60) + EndTimeArr[1]) - ((StartTimeArr[0] * 60) + StartTimeArr[1]);
        record.put(day, time);
    }

    public boolean checkRecord(int dateCount) {
        for (int i = 0; i < dateCount; i += 7) {
            int weekTime = 0;
            int weekCount = 0;
            for (int j = 1; j <= 7; j++) {
                if (record.containsKey(i + j)) {
                    weekCount++;
                    weekTime += record.get(i + j);
                }
            }
            if (weekTime < 60 * 60 || weekCount < 5) {
                return false;
            }
        }
        return true;
    }
}