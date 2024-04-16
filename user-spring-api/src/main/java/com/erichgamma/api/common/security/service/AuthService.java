package com.erichgamma.api.common.security.service;

import com.erichgamma.api.common.component.MessengerVo;
import com.erichgamma.api.user.model.UserDto;

public interface AuthService {
    MessengerVo login(UserDto user);
    String createToken(UserDto user);
}
