package com.erichgamma.api.common.component;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PageResultVo<DTO, EN> {
    private List<DTO> dtoList;
    private int totalPage, page, size, start, end;
    private boolean prev, next;
    private List<Integer> pageList;    
    public PageResultVo(Page<EN> result, Function<EN, DTO> fn) {
        dtoList = result.stream().map(fn).toList();
        makePageList(result.getPageable());
    }

    private void makePageList(Pageable pageable) {
        this.page = pageable.getPageNumber();
        this.size = pageable.getPageSize();
        int tempEnd = (int)Math.ceil(page / 10.0) * 10;
        start = end - 9;
        prev = start > 1;
        end = totalPage > tempEnd ? tempEnd : totalPage;
        next = totalPage > tempEnd;
        pageList = IntStream.range(start, end).boxed().toList();
    }
}
