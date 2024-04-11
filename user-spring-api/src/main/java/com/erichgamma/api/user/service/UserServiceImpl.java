package com.erichgamma.api.user.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;

import com.erichgamma.api.common.component.MessengerVo;
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
    public MessengerVo save(UserDto userDto) {
        return MessengerVo.builder()
        .message(
            Stream.of(userDto)
            .filter(i -> !userRepository.existsByUsername(userDto.getUsername()))
            .peek(i -> userRepository.save(dtoToEntity(i)))
            .map(i -> "SUCCESS")
            .findAny()
            .orElseGet(() -> "FAILURE")
        )
        .build();
    }

    @Override
    public MessengerVo modify(UserDto userDto) {
        return MessengerVo.builder()
        .message(
            findUserByUsername(userDto.getUsername()).stream()
            .peek(i -> i.setPassword(userDto.getPassword()))
            .peek(i -> i.setName(userDto.getName()))
            .peek(i -> i.setPhone(userDto.getPhone()))
            .peek(i -> i.setJob(userDto.getJob()))
            .peek(i -> userRepository.save(i))
            .map(i -> "SUCCESS").findAny()
            .orElseGet(() -> "FAILURE")
        )
        .build();
    }

    @Override
    public MessengerVo insertMany() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'insertMany'");
    }

    @Override
    public MessengerVo deleteById(Long id) {
        return MessengerVo.builder()
        .message(
            Stream.of(id)
            .filter(i -> userRepository.existsById(i))
            .peek(i -> userRepository.deleteById(i))
            .map(i -> "SUCCESS")
            .findAny()
            .orElseGet(() -> "FAILURE")
        )
        .build();
    }

    @Override
    public MessengerVo deleteAll() {
        userRepository.deleteAll();
        return MessengerVo.builder()
        .message("SUCCESS")
        .build();
    }

    // -------------------------- Query -------------------------- 

    @Override
    public List<UserDto> findAll() {
        return userRepository.findAll()
        .stream()
        .map(i -> entityToDto(i))
        .toList();
    }

    @Override
    public Optional<UserDto> findById(Long id) {
        return userRepository.findById(id).map(i -> entityToDto(i));
    }

    @Override
    public Long count() {
        return userRepository.count();
    }

    @Override
    public Optional<User> findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Boolean existsById(Long id) {
        return userRepository.existsById(id);
    }

    @Override
    public MessengerVo login(UserDto userDto){
        return MessengerVo.builder()
        .message(
            findUserByUsername(userDto.getUsername()).stream()
            .filter(i -> i.getPassword().equals(userDto.getPassword()))
            .map(i -> "SUCCESS")
            .findAny()
            .orElseGet(() -> "FAILURE")
        )
        .build();
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
