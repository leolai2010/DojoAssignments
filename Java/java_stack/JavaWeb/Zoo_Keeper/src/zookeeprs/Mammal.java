package zookeeprs;

public class Mammal {
	public int energyLevel;
	public Mammal() {
		this.energyLevel = 100;
	}
	public void displayEnergy() {
		System.out.println("Current Energy Level:" + this.energyLevel);
	}
}
