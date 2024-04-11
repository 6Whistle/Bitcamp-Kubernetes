package com.erichgamma.api.user.controller;

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

import com.erichgamma.api.common.component.MessengerVo;
import com.erichgamma.api.user.model.UserDto;
import com.erichgamma.api.user.service.UserService;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@ApiResponses(value = {
    @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
    @ApiResponse(responseCode = "404", description = "Customer not found")})
@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping(path = "/api/users")
@Slf4j
public class UserController {
    private final UserService userService;

    // -------------------------- Command -------------------------- 

    @PostMapping("/save")
    public ResponseEntity<MessengerVo> save(@RequestBody UserDto userDto){
        log.info("save request : {}", userDto);
        return ResponseEntity.ok(userService.save(userDto));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<MessengerVo> deleteById(@RequestParam("id") Long id){
        log.info("deleteById request : {}", id);
        return ResponseEntity.ok(userService.deleteById(id));
    }

    @PutMapping("/modify")
    public ResponseEntity<MessengerVo> modify(@RequestBody UserDto userDto){
        log.info("modifiy request : {}", userDto);
        return ResponseEntity.ok(userService.modify(userDto));
    }

    // -------------------------- Query -------------------------- 


    @PostMapping("/login")
    public ResponseEntity<MessengerVo> login(@RequestBody UserDto userDto){
        log.info("login request : {}", userDto);
        return ResponseEntity.ok(userService.login(userDto));
    }

    @GetMapping("/list")
    public ResponseEntity<List<UserDto>> findAll(Pageable pageable){
        log.info("findAll request : {}", pageable);
        return ResponseEntity.ok(userService.findAll());
    }

    @GetMapping("/detail")
    public ResponseEntity<UserDto> findById(@RequestParam("id") Long id){
        log.info("findById request : {}", id);
        return ResponseEntity.ok(userService.findById(id).orElseGet(UserDto::new));
    }

    @GetMapping("/count")
    public ResponseEntity<MessengerVo> count(){
        log.info("count request");
        return ResponseEntity.ok(
            MessengerVo.builder()
            .message(String.valueOf(userService.count()))
            .build()
        );
    }

    
    // @PostMapping("/search")
    // public ResponseEntity<List<UserDto>> findUsersByName(@RequestParam("name") String job){
    //     log.info("findUsersByJob request : {}", job);
    //     return ResponseEntity.ok(
    //         userService.findUsersByJob(job)
    //     );
    // }

    // @PostMapping("/search")
    // public ResponseEntity<List<UserDto>> findUsersByJob(@RequestParam("job") String job){
    //     log.info("findUsersByJob request : {}", job);
    //     return ResponseEntity.ok(
    //         userService.findUsersByJob(job)
    //     );
    // }
}
