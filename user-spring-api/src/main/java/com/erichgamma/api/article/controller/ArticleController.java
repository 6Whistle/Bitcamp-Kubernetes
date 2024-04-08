package com.erichgamma.api.article.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.erichgamma.api.article.model.ArticleDto;
import com.erichgamma.api.article.service.ArticleService;
import com.erichgamma.api.common.component.MessengerVo;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

// @ApiResponses(value = {
//     @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
//     @ApiResponse(responseCode = "404", description = "Customer not found")})
@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping(path = "/api/articles")
@Slf4j
public class ArticleController {
    private final ArticleService articleService;

    // -------------------------- Command -------------------------- 

    @PostMapping("/save")
    public ResponseEntity<MessengerVo> save(@RequestBody ArticleDto articleDto){
        log.info("save request : {}", articleDto);
        return ResponseEntity.ok(articleService.save(articleDto));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<MessengerVo> deleteById(@RequestBody Long id){
        log.info("deleteById request : {}", id);
        return ResponseEntity.ok(articleService.deleteById(id));
    }

    @PutMapping("/modify")
    public ResponseEntity<MessengerVo> modifiy(@RequestBody ArticleDto articleDto){
        log.info("modifiy request : {}", articleDto);
        return ResponseEntity.ok(articleService.modelify(articleDto));
    }

    // -------------------------- Query -------------------------- 

    @GetMapping("/list")
    public ResponseEntity<List<ArticleDto>> findAll(Pageable pageable){
        log.info("findAll request : {}", pageable);
        return ResponseEntity.ok(articleService.findAll());
    }

    @GetMapping("/detail")
    public ResponseEntity<ArticleDto> findById(@RequestParam("id") Long id){
        log.info("findById request : {}", id);
        return ResponseEntity.ok(articleService.findById(id).orElseGet(ArticleDto::new));
    }

    @GetMapping("/count")
    public ResponseEntity<MessengerVo> count(){
        log.info("count request");
        return ResponseEntity.ok(
            MessengerVo.builder()
            .message(String.valueOf(articleService.count()))
            .build()
        );
    }

}