package com.erichgamma.api.common.component;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import com.erichgamma.api.article.ArticleDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Component
@Getter
@Data
@AllArgsConstructor
@Builder
public class PageRequestFileVo {
    private int page;
    private int size;
    private String type;
    private String keyword;

    private List<ArticleDto> pagefileDto;

    public PageRequestFileVo(){
        page = 1;
        size = 10;
    }

    public Pageable getPageable(Sort sort){
        return PageRequest.of(page - 1, size, sort);
    }
}
