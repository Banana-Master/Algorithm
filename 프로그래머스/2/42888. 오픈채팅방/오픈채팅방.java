import java.util.HashMap;
import java.util.ArrayList;

class Solution {
    public String[] solution(String[] record) {
        HashMap<String, String> message = new HashMap<>();
        message.put("Enter", "님이 들어왔습니다.");
        message.put("Leave", "님이 나갔습니다.");
        
        HashMap<String, String> uid = new HashMap<>();
        
        for(String s : record) {
            String[] cmd = s.split(" ");
            if(cmd.length == 3) {
                uid.put(cmd[1], cmd[2]);
            }
        }
        
        ArrayList<String> result = new ArrayList<>();
        for(String s : record) {
            String[] cmd = s.split(" ");
            if(message.containsKey(cmd[0])) {
                result.add(uid.get(cmd[1]) + message.get(cmd[0]));
            }
        }
        
        return result.toArray(new String[0]);
    }
}