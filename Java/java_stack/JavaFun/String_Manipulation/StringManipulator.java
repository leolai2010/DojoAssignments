public class StringManipulator {
    public String trimAndConcat(String a, String b) {
        String c = a.trim().concat(b.trim());
        return c;
    }
    public Integer getIndexOrNull(String d, char e) {
        int f = d.indexOf(e);
        if(f == -1){
            return null;
        }
        else{
            return f;
        }
    }
    public Integer getIndexOrNull2(String g, String h){
        int i = g.indexOf(h);
        if(i == -1){
            return null;
        }
        else{
            return i;
        }
    }
    public String concatSubstring(String j, int k, int l, String m){
        String n = j.substring(k,l);
        String o = n.concat(m);
        return o;
    }
}