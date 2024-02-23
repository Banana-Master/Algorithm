import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Main {

    static int timeCal (String time) {
        String[] timeArr = time.split(":");
        return (Integer.parseInt(timeArr[0]) * 60) + Integer.parseInt(timeArr[1]);
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] inputTime = br.readLine().split(" ");
        int S = timeCal(inputTime[0]);
        int E = timeCal(inputTime[1]);
        int Q = timeCal(inputTime[2]);

        List<String> list = new ArrayList<>();

        String inputLine = null;
        
        while ((inputLine = br.readLine()) != null) {
            list.add(inputLine);
        }

        Set<String> set = new HashSet<>();

        for(String input : list) {
            String[] recordTime = input.split(" ");
            int time = timeCal(recordTime[0]);
            String name = recordTime[1];
            if(time <= S) {
                set.add(name);
            }
        }

        int result = 0;

        for(String input : list) {
            String[] recordTime = input.split(" ");
            int time = timeCal(recordTime[0]);
            String name = recordTime[1];

            if(time >= E && time <= Q) {
                if(set.contains(name)) {
                    result++;
                    set.remove(name);
                }
                
            }
        }

        System.out.println(result);
    }
}
