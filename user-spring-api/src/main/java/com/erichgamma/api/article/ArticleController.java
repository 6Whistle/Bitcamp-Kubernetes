package com.erichgamma.api.article;

import java.util.List;
import java.util.Map;
import java.util.stream.LongStream;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erichgamma.api.common.component.MessengerVo;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleService articleService;
    private final ArticleRepository articleRepository;

    @GetMapping(path = "/api/articles/all-articles")
    public Map<?, ?> findAll(){
        return Map.of(
            "articles", articleRepository.findAll().stream().map(i -> articleService.entityToDto(i)).toList()
        );
    }
}