package com.erichgamma.api.user.controller;

import java.util.List;
import java.util.Map;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @RequestMapping(path = "")
    public ResponseEntity<MessengerVo> save(@RequestBody Map<String, String> reqMap){
        log.info("join request : {}", reqMap);
        return 
        ResponseEntity.ok(
            MessengerVo
            .builder()
            .message(
                userService
                .save(
                    UserDto
                    .builder()
                    .username(reqMap.getOrDefault("username", ""))
                    .password(reqMap.getOrDefault("password", ""))
                    .name(reqMap.getOrDefault("name", ""))
                    .phone(reqMap.getOrDefault("phone", ""))
                    .job(reqMap.getOrDefault("job", ""))
                    .build()
                ).toString()
            )
            .build()
        );
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<MessengerVo> delete(@PathVariable Long id){
        return ResponseEntity.ok(
            MessengerVo
            .builder()
            .message(
                userService
                .delete(
                    UserDto.builder().id(id).build()
                )
            )
            .build()
        );
    }

    // -------------------------- Query -------------------------- 

    @RequestMapping(path = "/name")
    public ResponseEntity<MessengerVo> hello(@RequestBody Map<String, String> reqMap){
        log.info("hello request : {}", reqMap);
        return 
        ResponseEntity.ok(
            MessengerVo
            .builder()
            .message(
                reqMap.getOrDefault("name", "fail")
            )
            .build()
        );
    }

    @RequestMapping(path = "/login")
    public ResponseEntity<MessengerVo> login(@RequestBody Map<String, String> reqMap){
        log.info("login request : {}", reqMap);
        return 
        ResponseEntity.ok(
            MessengerVo
            .builder()
            .message(
                userService.login(
                    UserDto.builder()
                    .username(reqMap.getOrDefault("username", ""))
                    .password(reqMap.getOrDefault("password", ""))
                    .build()
                )
            )
        .build());
    }

    @RequestMapping(path = "", method = RequestMethod.GET)
    public ResponseEntity<List<UserDto>> findAll(Pageable pageable){
        log.info("findAll request : {}", pageable);
        return ResponseEntity.ok(userService.findAll());
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<UserDto> findUserById(@PathVariable Long id){
        log.info("findUserById request : {}", id);
        return ResponseEntity.ok(userService.findById(id).orElseGet(UserDto::new));
    }

}
