package com.erichgamma.api.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.erichgamma.api.user.model.User;
import com.erichgamma.api.user.model.UserDto;
import com.erichgamma.api.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    // -------------------------- Command -------------------------- 

    @Override
    public UserDto save(UserDto userDto) {
        return
        findByUsername(userDto.getUsername()).isPresent()
        ? UserDto.builder().build()
        : entityToDto(
            userRepository.save(
                User
                .builder()
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .name(userDto.getUsername())
                .phone(userDto.getPhone())
                .job(userDto.getJob())
                .build()
            )
        );
    }

    @Override
    public String updatePassword(UserDto userDto) {
        Optional<User> findUser = userRepository.findById(userDto.getId());
        findUser.ifPresent(i -> {
            i.setPassword(userDto.getPassword());
            userRepository.save(i);
        });
        return findUser.isPresent() ? "SUCCESS" : "FAILURE";
    }

    @Override
    public String insertMany() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'insertMany'");
    }

    @Override
    public String delete(UserDto userDto) {
        Optional<UserDto> findUser = findById(userDto.getId());
        findUser.ifPresent(i -> userRepository.deleteById(i.getId()));
        return findUser.isPresent() ? "SUCCESS" : "FAILURE";
    }

    @Override
    public String deleteAll() {
        userRepository.deleteAll();
        return "SUCCESS";
    }

    // -------------------------- Query -------------------------- 

    @Override
    public List<UserDto> findAll() {
        return userRepository.findAll().stream().map(i -> entityToDto(i)).toList();
    }

    @Override
    public Optional<UserDto> findById(Long id) {
        return userRepository.findById(id).map(i -> entityToDto(i));
    }

    @Override
    public String count() {
        return String.valueOf(userRepository.count());
    }

    @Override
    public Optional<UserDto> findByUsername(String username) {
        return userRepository.findByUsername(username).map(i -> entityToDto(i));
    }

    @Override
    public Boolean existsById(Long id) {
        return userRepository.findById(id).isPresent();
    }

    @Override
    public String login(UserDto userDto){
        return userRepository
        .findByUsername(userDto.getUsername())
        .orElseGet(() -> User.builder().password("").build())
        .getPassword()
        .equals(userDto.getPassword()) 
        ? "SUCCESS"
        : "FAILURE";
    }

    @Override
    public List<UserDto> findUsersByName(String name) {
        return userRepository.findByName(name).stream().map(i -> entityToDto(i)).toList();
    }

    @Override
    public List<UserDto> findUsersByJob(String job) {
        return userRepository.findByJob(job).stream().map(i -> entityToDto(i)).toList();
    }
}
