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
public class ImageVo {
    private long imageId;
    String name;
    Long lastModified;
    Long lastModelfiedDate;
    String type;
    String webkitRelativePath;
    Long size;
}
