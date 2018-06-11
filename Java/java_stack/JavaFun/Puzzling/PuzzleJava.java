import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
public class PuzzleJava {
    public static void main(String[] args) {
        int[] Array1 = {3, 5, 1, 2, 7, 9, 8, 13, 25, 32};
        int sum = 0;
        for(int i=0;i<Array1.length;i++){
            sum += i;
            if(Array1[i]>10){
                System.out.println(Array1[i]);
            }
        }
        System.out.println(sum);
        ArrayList<String> names = new ArrayList<String>();
        names.add("Nancy");
        names.add("Jinichi");
        names.add("Fujibayashi");
        names.add("Momochi");
        names.add("Ishikawa");
        Collections.shuffle(names);
        System.out.println(names);
        for(int x=0;x<names.size();x++){
            if(names.get(x).length() > 5){
                System.out.println(names.get(x));
            }
        }
        ArrayList<String> alphas = new ArrayList<String>();
        Collections.addAll(alphas, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
        Collections.shuffle(alphas);
        System.out.println(alphas); 
        String last = alphas.get(alphas.size()-1);
        System.out.println(last);
        if(alphas.get(0) == "a" || alphas.get(0) == "e" || alphas.get(0) == "i" || alphas.get(0) == "o" || alphas.get(0) == "u"){
            System.out.println(alphas.get(0));
            System.out.println("This is a Vowel!");
        }
        ArrayList<Integer> rnums = new ArrayList<Integer>();
        Random r = new Random();
        for(int y=0; y<10; y++){
            int r2 = r.nextInt(45)+55;
            rnums.add(r2);
        }
        System.out.println(rnums);
        ArrayList<Integer> rnums2 = new ArrayList<Integer>();
        Random r3 = new Random();
        for(int w=0; w<10; w++){
            int r4 = r3.nextInt(45)+55;
            rnums2.add(r4);
        }
        Collections.sort(rnums2);
        System.out.println(rnums2);
        String word ="";
        for(int k=0; k<5; k++){
            Random letters = new Random();
            int l = letters.nextInt(25);
            word += alphas.get(l);
        } 
        System.out.println(word);
        ArrayList<String> words = new ArrayList<String>();
        for(int v=0; v<10; v++){
            String wordz ="";
            for(int u=0; u<5;u++){
                Random letterz = new Random();
                int p = letterz.nextInt(25);
                wordz += alphas.get(p);
            }
            words.add(wordz);
        }
        System.out.println(words);
    }
}