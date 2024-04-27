import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {

            ArrayList<String> arr = new ArrayList<>();
            StringBuilder sb = new StringBuilder();
            boolean bracket = false;
            char[] inputs = br.readLine().toCharArray();
            
            for (int i = 0; i < inputs.length; i++) {
                if(bracket) {
                    if(inputs[i] == '>') {
                        bracket = false;
                        sb.append('>');
                        arr.add(sb.toString());
                        sb.setLength(0);
                    } else {
                        sb.append(inputs[i]);
                    }
                } else {
                    if(inputs[i] == '<') {
                        if(sb.length() > 0 ) {
                            arr.add(sb.reverse().toString());
                            sb.setLength(0);
                        }
                        bracket = true;
                        sb.append('<');
                    } else if(inputs[i] == ' ') {
                        arr.add(sb.reverse().toString());
                        sb.setLength(0);
                        bracket = false;
                        arr.add(" ");
                    } else {
                        sb.append(inputs[i]);
                    }
                }
                
            }
            if(!bracket) {
                arr.add(sb.reverse().toString());
            }
            sb.setLength(0);
            for (String value : arr) {
                sb.append(value);
            }
            System.out.println(sb);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
