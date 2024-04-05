package com.erichgamma.api.user;

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

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;



@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping(path = "/api/users")
@ApiResponses(value = {
    @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
    @ApiResponse(responseCode = "404", description = "Customer not found")})
@Slf4j
public class UserController {
    private final UserService userService;
    
    @RequestMapping(path = "")
    public ResponseEntity<MessengerVo> join(@RequestBody Map<String, String> reqMap){
        return ResponseEntity.ok(
            MessengerVo
            .builder()
            .message(
                userService
                .save(
                    UserDto
                    .builder()
                    .username(reqMap.getOrDefault("username", ""))
                    .username(reqMap.getOrDefault("password", ""))
                    .username(reqMap.getOrDefault("name", ""))
                    .username(reqMap.getOrDefault("phone", ""))
                    .username(reqMap.getOrDefault("job", ""))
                    .build()
                )
            )
            .build()
        );
    }

    @RequestMapping(path = "/name")
    public ResponseEntity<MessengerVo> hello(@RequestBody Map<String, String> reqMap){
        log.info("get info : {}", reqMap);
        // return Map.of("name", reqMap.get("name"));
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

    // @ApiResponses(value = {
    //     @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
    //     @ApiResponse(responseCode = "404", description = "Customer not found")})
    @RequestMapping(path = "/login")
    public ResponseEntity<MessengerVo> login(@RequestBody Map<String, String> reqMap){
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

    // @ApiResponses(value = {
    //     @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
    //     @ApiResponse(responseCode = "404", description = "Customer not found")})
    @RequestMapping(path = "", method = RequestMethod.GET)
    public ResponseEntity<List<UserDto>> findAll(Pageable pageable){
        return ResponseEntity.ok(userService.findAll());
    }

    // @ApiResponses(value = {
    //     @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
    //     @ApiResponse(responseCode = "404", description = "Customer not found")})
    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<UserDto> findUserById(@PathVariable Long id){
        return ResponseEntity.ok(userService.findById(id).orElseGet(UserDto::new));
    }
}
