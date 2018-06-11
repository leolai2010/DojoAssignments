package objectmasters;

public class Samurai extends Human{
	private static int numberOfSamurai = 0;
	public Samurai() {
		this.health = 200;
		numberOfSamurai++;
	}
	public void deathBlow(Human victim) {
		victim.health = 0;
		this.health = this.health/2;
	}
	public void meditate() {
		this.health += this.health/2;
	}
	public static int howMany() {
		return numberOfSamurai;
	}
}
