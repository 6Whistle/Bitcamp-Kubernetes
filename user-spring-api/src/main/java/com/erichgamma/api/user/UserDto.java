package com.erichgamma.api.user;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@ToString(exclude = "id")
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private Double height;
    private Double weight;

    public static UserDto toUserDto(User entity){
        return builder()
        .id(entity.getId())
        .username(entity.getUsername())
        .password(entity.getPassword())
        .name(entity.getUsername())
        .phone(entity.getPhone())
        .height(entity.getHeight())
        .weight(entity.getWeight())
        .build();
    }
}
