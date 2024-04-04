package com.erichgamma.api.common.component;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertiesVo {
    private Boolean enabled;
    private String location;
    private String maxFileSize;
    private String maxRequestSize;
    private String fileSizeThreshod;
}
