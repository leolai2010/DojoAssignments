import java.util.ArrayList;

public class BasicJava {
    public static void main(String[] args) {
        ArrayList<Object> list = new ArrayList<Object>();
        for(int i=1; i<256; i++){
            list.add(i);
        }
        System.out.println(list);
        for(int x=1; x<256; x++){
            if(x % 2 != 0){
                System.out.println(x);
            }
        }
        ArrayList<Object> list3 = new ArrayList<Object>();
        int sum1 = 0;
        for(int p=0; p<256; p++){
            list3.add(p);
            sum1 += p;
            System.out.println("New number:" + p + " Sum:" + sum1);
        }
        int[] myArray1 = {1, 3, 5, 7, 9, 13};
        for(int z:myArray1){
            System.out.println(z);
        }
        int[] myArray2 = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int max = myArray2[0];
        for(int z = 0; z<myArray2.length; z++){
            if(myArray2[z]>max){
                max = myArray2[z];
            }
        }
        System.out.println(max);
        int[] myArray3 = {2, 10, 3};
        int sum2 = 0;
        for(int u:myArray3){
            sum2 += u;
        }
        System.out.println(sum2/myArray3.length);
        ArrayList<Object> list7 = new ArrayList<Object>();
        for(int y=1; y<256; y++){
            if(y%2 != 0){
                list7.add(y);
            }
        }
        System.out.println(list7);
        int[] myArray4 = {1, 3, 5, 7};
        int yval = 3;
        int count = 0;
        for(int n=0; n<myArray4.length; n++){
            if(myArray4[n]<=yval){
                count++;
            }
        }
        System.out.println(count);
        int[] myArray5 = {1, 5, 10, -2};
        for(int k=0; k<myArray5.length; k++){
            myArray5[k] = myArray5[k] * myArray5[k]; 
        }
        System.out.println(java.util.Arrays.toString(myArray5));
        int[] myArray6 = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int max1 = myArray2[0];
        int min1 = myArray2[0];
        int sum3 = 0;
        for(int b = 0; b<myArray6.length; b++){
            if(myArray6[b]>max1){
                max1 = myArray6[b];
            }
            if(myArray6[b]<min1){
                min1 = myArray6[b];
            }
            sum3 += b;
        }
        System.out.println(max1);
        System.out.println(min1);
        System.out.println(sum3/myArray6.length);
        int[] myArray7 = {1, 5, 10, 7, -2};
        for(int s=0; s<myArray7.length-1; s++){
            myArray7[s] = myArray7[s + 1];
        }
        myArray7[myArray7.length-1] = 0;
        System.out.println(java.util.Arrays.toString(myArray7));
    } 
}