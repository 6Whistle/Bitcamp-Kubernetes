package com.erichgamma.api.account;

public interface AccountService {
    String withdraw(Account account);

    String deposit(Account account);

    String getBalance(Account account);
}