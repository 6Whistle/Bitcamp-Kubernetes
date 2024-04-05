package com.erichgamma.api.user.service;

import java.util.List;
import java.util.Optional;

import com.erichgamma.api.common.command.CommandService;
import com.erichgamma.api.common.query.QueryService;
import com.erichgamma.api.user.model.User;
import com.erichgamma.api.user.model.UserDto;

public interface UserService extends CommandService<UserDto>, QueryService<UserDto>{
    default UserDto entityToDto(User entity){
        return UserDto.builder()
        .id(entity.getId())
        .username(entity.getUsername())
        .password(entity.getPassword())
        .name(entity.getName())
        .phone(entity.getPhone())
        .job(entity.getJob())
        .build();
    }
    
    String updatePassword(UserDto user);
    String login(UserDto user);
    Optional<UserDto> findByUsername(String username);
    List<UserDto> findUsersByName(String name);
    List<UserDto> findUsersByJob(String job);
}
