package com.erichgamma.api.user;

import java.util.List;

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
    
    String login(UserDto user);
    String updatePassword(UserDto user);
    List<UserDto> findUsersByName(String name);
    List<UserDto> findUsersByJob(String job);
}
