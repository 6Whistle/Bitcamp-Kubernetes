package com.erichgamma.api.user.service;



import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

import com.erichgamma.api.user.model.User;
import com.erichgamma.api.user.model.UserDto;
import com.erichgamma.api.user.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@ExtendWith(MockitoExtension.class)
public class UserServiceImplTest {
    @InjectMocks
    private UserServiceImpl service;
    @Mock
    private UserRepository repository;
    @Spy
    private ObjectMapper objectMapper;

    @BeforeEach
    void setup(){
        //this.service = new USerServiceImpl(repository)
    }

    @Test
    public void userSearch() throws Exception {
        Optional<User> user = Optional.of(User.builder().id(1L).name("홍길동").build());
        when(repository.findById(anyLong())).thenReturn(user);
        assertThat(service.findById(1L).get().getName()).isEqualTo("홍길동");
    }

    private List<User> getList() {
        return Arrays.asList(
                User.builder().id(1L).username("yoo").name("유관순").build(),
                User.builder().id(2L).username("kim").name("김구").build(),
                User.builder().id(3L).username("lee").name("이화림").build()
        );
    }
    
    @Test void allUsersSearch() throws Exception {
        List<User> users = getList();
        BDDMockito.given(repository.findAll()).willReturn(users);
        List<UserDto> list = service.findAll();
        assertThat(list.size()).isEqualTo(3);
    }

    private User dtoToEntity(UserDto dto){
        return User.builder()
            .id(dto.getId())
            .username(dto.getUsername())
            .name(dto.getName())
            .build();
    }

    @DisplayName("토큰 발급 성공")
    @Test
    void _willSuccess(){

    }
}
