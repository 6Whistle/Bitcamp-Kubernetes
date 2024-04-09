package com.erichgamma.api.board.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.erichgamma.api.board.model.BoardDto;
import com.erichgamma.api.board.service.BoardService;
import com.erichgamma.api.common.component.MessengerVo;

import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@ApiResponses(value = {
    @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
    @ApiResponse(responseCode = "404", description = "Customer not found")})
@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping(path = "/api/boards")
@Slf4j
public class BoardController {
    private final BoardService boardService;

    // -------------------------- Command -------------------------- 

    @PostMapping("/save")
    public ResponseEntity<MessengerVo> save(@RequestBody BoardDto boardDto){
        log.info("save request : {}", boardDto);
        return ResponseEntity.ok(boardService.save(boardDto));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<MessengerVo> deleteById(@RequestBody Long id){
        log.info("deleteById request : {}", id);
        return ResponseEntity.ok(boardService.deleteById(id));
    }

    @PutMapping("/modify")
    public ResponseEntity<MessengerVo> modifiy(@RequestBody BoardDto boardDto){
        log.info("modifiy request : {}", boardDto);
        return ResponseEntity.ok(boardService.modelify(boardDto));
    }

    // -------------------------- Query -------------------------- 

    @GetMapping("/list")
    public ResponseEntity<List<BoardDto>> findAll(Pageable pageable){
        log.info("findAll request : {}", pageable);
        return ResponseEntity.ok(boardService.findAll());
    }

    @GetMapping("/detail")
    public ResponseEntity<BoardDto> findById(@RequestParam("id") Long id){
        log.info("findById request : {}", id);
        return ResponseEntity.ok(boardService.findById(id).orElseGet(BoardDto::new));
    }

    @GetMapping("/count")
    public ResponseEntity<MessengerVo> count(){
        log.info("count request");
        return ResponseEntity.ok(
            MessengerVo.builder()
            .message(String.valueOf(boardService.count()))
            .build()
        );
    }

}
