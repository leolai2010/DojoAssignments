package objectmasters;

public class Ninja extends Human{
	public Ninja() {
		this.stealth = 10;
	}
	public void steal(Human victim) {
		victim.health -= this.stealth;
		this.health += this.stealth;
	}
	public void runAway() {
		this.health -= 10;
	}
}