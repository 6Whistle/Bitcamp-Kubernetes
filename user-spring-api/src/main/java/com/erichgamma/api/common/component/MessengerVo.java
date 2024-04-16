package com.erichgamma.api.common.component;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Component
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MessengerVo {
    private String message;
    private int status;
    private String token;
}
