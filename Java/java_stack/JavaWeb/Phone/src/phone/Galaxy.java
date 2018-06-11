package phone;

public class Galaxy extends Phone implements Ringable {
    public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
    	return getClass().getSimpleName() + getVersionNumber() + " says " + getRingTone();
    }
    @Override
    public String unlock() {
    	String fingerprint = "Unlcoking via finger print";
        return fingerprint;
    }
    @Override
    public void displayInfo() {
    	System.out.println(getClass().getSimpleName() + this.getVersionNumber() + " from " + this.getCarrier());              
    }
}