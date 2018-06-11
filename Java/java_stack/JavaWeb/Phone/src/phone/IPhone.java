package phone;

public class IPhone extends Phone implements Ringable {
    public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
        return getClass().getSimpleName() + " says " + getRingTone();
    }
    @Override
    public String unlock() {
        String facereg = "Unlcoking via facial recognition";
        return facereg;
    }
    @Override
    public void displayInfo() {
    	System.out.println(getClass().getSimpleName() + this.getVersionNumber() + " from " + this.getCarrier());        
    }
}