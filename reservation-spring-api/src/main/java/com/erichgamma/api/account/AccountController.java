package com.erichgamma.api.account;


import com.erichgamma.api.common.UtilService;
import com.erichgamma.api.common.UtilServiceImpl;
import com.erichgamma.api.enums.Messenger;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AccountController {
    private final AccountServiceImpl accountService;
    private final UtilService utilService;

    public Messenger creatAccount(@RequestBody Map<String, ?> reqMap) {
        System.out.println("=== Create Account ===");
        System.out.println("Input(Account Number, Depositor)");
        return accountService.save(Account.builder()
                .id((long) utilService.createRandomInt(1, 100))
                .accountNumber("")
                .accountHolder("")
                .balance(0.0)
                .transactionDate(new Date())
                .build());
    }

    public String getAccountsList() {
        System.out.println("== Account List ===");
        List<?> list = accountService.findAll();
        list.forEach(System.out::println);
        return "------------------";
    }

    public String withdraw(@RequestBody Map<String, ?> reqMap) {
        System.out.println("=== Withdraw ===");
        System.out.println("Input(Account Number, amount)");
        return accountService.withdraw(Account.builder()
                .accountNumber("")
                .balance(Double.parseDouble(""))
                .build());
    }

    public String deposit(@RequestBody Map<String, ?> reqMap) {
        System.out.println("=== Deposit ===");
        System.out.println("Input(Account Number, amount)");
        return accountService.deposit(Account.builder()
                .accountNumber("")
                .balance(Double.parseDouble(""))
                .build());
    }

    public String getBalance(@RequestBody Map<String, ?> reqMap) {
        System.out.println("=== Get Balance ===");
        System.out.println("Input(Account Number)");
        return accountService.getBalance(Account.builder()
                .accountNumber("")
                .build());
    }

    public Messenger deleteAccount(@RequestBody Map<String, ?> reqMap) {
        System.out.println("=== Delete Account ===");
        System.out.println("Input(Account Number)");
        return accountService.delete(Account.builder()
                .accountNumber("")
                .build());
    }

    public String findAccount(@RequestBody Map<String, ?> reqMap) {
        System.out.println("=== Find Account ===");
        System.out.println("Input(Account Number)");
        return accountService.getOne("")
                .orElse(new Account())
                .toString();
    }
}
