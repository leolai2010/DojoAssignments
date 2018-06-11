package objectmasters;

public class HumanTest {

	public static void main(String[] args) {
		Human Leo = new Human();
		Human Eduardo = new Human();
			Leo.attack(Eduardo);
			Eduardo.healthDisplay();
		Ninja Eric = new Ninja();
		System.out.println(Eric.getClass().getName());
		Wizard Brian = new Wizard();
		Samurai Jenny = new Samurai();
			Eric.steal(Jenny);
			Brian.healthDisplay();
			Jenny.healthDisplay();
			Eric.healthDisplay();
			Jenny.deathBlow(Eric);
			Brian.healthDisplay();
			Jenny.healthDisplay();
			Eric.healthDisplay();
			Brian.heal(Eric);
			Brian.healthDisplay();
			Jenny.healthDisplay();
			Eric.healthDisplay();
			Brian.fireball(Jenny);
			Brian.healthDisplay();
			Jenny.healthDisplay();
			Eric.healthDisplay();
	}

}
