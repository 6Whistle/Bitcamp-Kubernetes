package com.erichgamma.api.common;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;

@MappedSuperclass
@EntityListeners(value={})
@Getter
public class BaseEntity {
    @CreatedDate
    @Column(name = "reg_date", updatable = false)
    private LocalDateTime regLocalDateTime;

    @LastModifiedDate
    @Column(name = "mod_date")
    private LocalDateTime modLocalDateTime;
}
