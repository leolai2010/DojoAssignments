import java.util.HashMap;
import java.util.Set;

public class Hashmatique {
    public static void main(String[] args) {
        HashMap<String, String> musicMap = new HashMap<String, String>();
        musicMap.put("Attention","You Just Want Attention");
        musicMap.put("What is Love","Baby Don't Hurt Me, No More");
        musicMap.put("Rather Be","Kyoto To The Bay");
        musicMap.put("Toothbrush","You Can Leave The Toothbrush");        
        
        Set<String> keys = musicMap.keySet();
        for(String key : keys) {
            System.out.println(key);
            System.out.println(musicMap.get(key));   
        }
    }
}