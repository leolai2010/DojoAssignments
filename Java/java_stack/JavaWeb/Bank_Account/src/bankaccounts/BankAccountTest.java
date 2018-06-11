package bankaccounts;

public class BankAccountTest {

	public static void main(String[] args) {
		BankAccount Leo = new BankAccount();
		BankAccount Brian = new BankAccount();
			Leo.getAccountNumber();
			Brian.getAccountNumber();
			Leo.depositMoney(1000.00, "Checking");
			Brian.depositMoney(1000.00, "Saving");
			Leo.withdrawMoney(500.00, "Checking");
			Leo.getCheckingBalance();
			Leo.getSavingsBalance();
			Leo.totalBalance();
			Brian.getCheckingBalance();
			Brian.getSavingsBalance();
			Brian.totalBalance();
		
		System.out.println(BankAccount.totalAmountofMoney);
		System.out.println(BankAccount.numberOfAccounts);
			
	}

}
