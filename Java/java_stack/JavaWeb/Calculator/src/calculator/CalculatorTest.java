package calculator;

public class CalculatorTest {

	public static void main(String[] args) {
		Calculator Leo = new Calculator();
			Leo.setOperandOne(10.0);
			Leo.setOperation("+");
			Leo.setOperandTwo(12.0);
			Leo.performOperation();
			Leo.getResults();
	}
}
