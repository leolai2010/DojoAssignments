package objectmasters;

public class Wizard extends Human{
	public Wizard() {
		this.health = 50;
		this.intelligence = 8;
	}
	public void heal(Human ally) {
		ally.health += this.intelligence;
	}
	public void fireball(Human victim) {
		victim.health -= this.intelligence*3;
	}
}
