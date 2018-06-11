package calculator;

@SuppressWarnings("serial")
public class Calculator implements java.io.Serializable{
	private Double OperandOne=0.0;
	private Double OperandTwo=0.0;
	private Double Result=0.0;
	private String Operation;	
	public Double getOperandOne() {
		return OperandOne;
	}
	public void setOperandOne(Double operandOne) {
		OperandOne = operandOne;
	}
	public Double getOperandTwo() {
		return OperandTwo;
	}
	public void setOperandTwo(Double operandTwo) {
		OperandTwo = operandTwo;
	}
	public Double getResult() {
		return Result;
	}
	public String getOperation() {
		return Operation;
	}
	public void setOperation(String operation) {
		Operation = operation;
	}
	public Calculator() {
	}
	public void performOperation() {
		double x = getOperandOne();
		double y = getOperandTwo();
		double r = 0;
		switch (getOperation()) {
		case "+": 
			r = x+y;
			break;
		case "-":
			r = x-y;
			break;
		}
		this.setResult(r);
	}
	public void setResult(Double result) {
		Result = result;
	}
	public void getResults() {
		System.out.println(getOperandOne());
		System.out.println(getOperandTwo());
		System.out.println(getResult());
	}
}
