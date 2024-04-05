package com.erichgamma.api.common.query;

import java.util.List;
import java.util.Optional;

public interface QueryService<T> {
    List<T> findAll();
    Optional<T> findById(Long id);
    String count();
    Boolean existsById(Long id);
}
