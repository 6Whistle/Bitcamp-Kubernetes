package com.erichgamma.api.user;

import java.util.List;

import com.erichgamma.api.common.command.CommandService;
import com.erichgamma.api.common.query.QueryService;

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
    List<UserDto> findUsersByName(String name);
    List<UserDto> findUsersByJob(String job);
}
