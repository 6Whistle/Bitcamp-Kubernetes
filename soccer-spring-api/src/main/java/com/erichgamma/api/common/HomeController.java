package com.erichgamma.api.common;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class HomeController {

    @RequestMapping("/")
    public String hello(){
        return "Welcome";
    }

    @PostMapping("/name")
    public Map<String, ?> getUserName(@RequestBody Map<String, ?> reqMap){
        String name = (String)reqMap.get("name");
        Map<String, String> respMap = new HashMap<>();
        respMap.put("name", name);
        System.out.println("리퀘스트가 가져온 이름 : " + name);
        return respMap;
    }   
}