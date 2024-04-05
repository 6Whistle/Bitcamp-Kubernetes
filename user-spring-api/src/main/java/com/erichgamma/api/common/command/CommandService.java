package com.erichgamma.api.common.command;

public interface CommandService<T> {
    T save(T t);
    String insertMany();
    String delete(T t);
    String deleteAll();
}
