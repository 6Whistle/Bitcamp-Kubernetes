package com.erichgamma.api.user;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erichgamma.api.common.component.MessengerVo;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository userRepository;
    
    @RequestMapping(path = "/api/users/name")
    public Map<String, ?> hello(@RequestBody Map<String, ?> reqMap){
        return Map.of("name", reqMap.get("name"));
    }

    @RequestMapping(path = "/api/users/login")
    public Map<String, ?> login(@RequestBody Map<String, ?> reqMap){
        Map<String, String> resMap = new HashMap<>();
        resMap.put(
            "message", 
            !((String)reqMap.get("password")).equals("")
            && userRepository
            .findByUsername((String)reqMap.get("username"))
            .orElseGet(() -> User.builder().password("").build())
            .getPassword()
            .equals((String)reqMap.get("password")) 
            ? "Success"
            : "Failure"
        );
        return resMap;
    }

    @RequestMapping(path = "/api/users/join")
    public Map<String, ?> join(@RequestBody Map<String, ?> reqMap){
        Map<String, String> resMap = new HashMap<>();
        resMap.put("message", 
        userRepository.findById(
            userRepository.save(User.builder()
            .username((String)reqMap.get("username"))
            .password((String)reqMap.get("password"))
            .name((String)reqMap.get("name"))
            .phone((String)reqMap.get("phone"))
            .job((String)reqMap.get("job"))
            .build())
        .getId())
        .isPresent()
        ? "Success"
        : "Failure");
        return resMap;
    }

    @GetMapping(path = "/api/users/all-users")
    public Map<?, ?> findAll(){
        return Map.of("users", userRepository.findAll());
    }
}
