package bankaccounts;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class BankAccount {
	private String AccountNumber;
	private Double CheckingBalance = 0.0;
	private Double SavingsBalance = 0.0;
	public static int numberOfAccounts = 0;
	public static Double totalAmountofMoney = (double) 0;
	public BankAccount() {
		this.AccountNumber = generateAccountNumber(); 
	}
	private String generateAccountNumber() {
		ArrayList<String> nums = new ArrayList<String>();
        Collections.addAll(nums, "0","1","2","3","4","5","6","7","8","9");
		String AccNum ="";
		for(int i=0; i<10; i++) {
			Random numbers = new Random();
			int x = numbers.nextInt(10);
			AccNum += nums.get(x);
		}
		numberOfAccounts++;
		System.out.println(AccNum);
		return AccNum;
	}
	public void depositMoney(Double Money, String whichAcc) {
		if(whichAcc == "Checking") {
			this.CheckingBalance += Money;
			totalAmountofMoney += Money;
		}
		else if(whichAcc == "Saving") {
			this.SavingsBalance += Money;
			totalAmountofMoney += Money;
		}
		else
			System.out.println("Please select an Account!");
	}
	public void withdrawMoney(Double Money, String whichAcc) {
		if(whichAcc == "Checking" && Money <= this.CheckingBalance) {
			this.CheckingBalance -= Money;
			totalAmountofMoney -= Money;
		}
		else if(whichAcc == "Saving" && Money <= this.CheckingBalance) {
			this.SavingsBalance -= Money;
			totalAmountofMoney -= Money;
		}
		else
			System.out.println("Insufficient Funds!");
	}
	public void totalBalance() {
		Double total = CheckingBalance + SavingsBalance;
		System.out.println(total);
	}
	public String getAccountNumber() {
		return AccountNumber;
	}
	public Double getCheckingBalance() {
		System.out.println(CheckingBalance);
		return CheckingBalance;
	}
	public Double getSavingsBalance() {
		System.out.println(SavingsBalance);
		return SavingsBalance;
	}
}
