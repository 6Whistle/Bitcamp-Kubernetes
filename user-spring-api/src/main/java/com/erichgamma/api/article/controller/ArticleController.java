package com.erichgamma.api.article.controller;

import java.util.List;
import java.util.Map;

import org.springdoc.core.converters.models.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.erichgamma.api.article.model.ArticleDto;
import com.erichgamma.api.article.service.ArticleService;
import com.erichgamma.api.common.component.MessengerVo;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RequestMapping("/api/articles")
public class ArticleController {
    private final ArticleService articleService;


    @RequestMapping(path = "")
    public ResponseEntity<MessengerVo> save(@RequestBody Map<String, String> reqMap){
        return 
        ResponseEntity.ok(
            MessengerVo
            .builder()
            .message(
                articleService
                .save(
                    ArticleDto
                    .builder()
                    .title(reqMap.getOrDefault("title", ""))
                    .content(reqMap.getOrDefault("content", ""))
                    .writer(reqMap.getOrDefault("writer", ""))
                    .build()
                )
                .toString()
            )
            .build()
        );
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<MessengerVo> deleteById(@PathVariable Long id){
        return 
        ResponseEntity.ok(
            MessengerVo
            .builder()
            .message(
                articleService
                .delete(
                    ArticleDto
                    .builder()
                    .id(id)
                    .build()
                )
            )
            .build()
        );
    }

    @RequestMapping(path = "", method = RequestMethod.DELETE)
    public ResponseEntity<MessengerVo> deleteAll(){
        return ResponseEntity.ok(
            MessengerVo
            .builder()
            .message(articleService.deleteAll())
            .build()
        );
    }

    @RequestMapping(path = "", method = RequestMethod.GET)
    public ResponseEntity<List<ArticleDto>> findAll(Pageable page){
        return ResponseEntity.ok(articleService.findAll());
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<ArticleDto> findById(@PathVariable Long id){
        return 
        ResponseEntity.ok(
            articleService
            .findById(id)
            .orElseGet(() -> ArticleDto.builder().build())
        );
    }

    
}