package com.erichgamma.api.user;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import io.micrometer.common.lang.NonNull;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Override
    public String save(UserDto userDto) {
        Optional<User> findUser = userRepository.findByUsername(userDto.getUsername());
        findUser.ifPresentOrElse(i -> {}, () -> userRepository.save(User.builder()
        .username(userDto.getUsername())
        .password(userDto.getPassword())
        .name(userDto.getUsername())
        .phone(userDto.getPhone())
        .job(userDto.getJob())
        .build()
        ));
        return findUser.isEmpty() ? "SUCCESS" : "FAILURE";
    }

    @Override
    public String insertMany() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'insertMany'");
    }

    @Override
    public String delete(UserDto userDto) {
        Optional<User> findUser = userRepository.findByUsername(userDto.getUsername());
        findUser.ifPresent(i -> userRepository.deleteById(i.getId()));
        return findUser.isPresent() ? "SUCCESS" : "FAILURE";
    }

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
    public Optional<UserDto> getOne(String username) {
        return userRepository.findByUsername(username).map(i -> entityToDto(i));
    }

    @Override
    public Boolean existsById(Long id) {
        return userRepository.findById(id).isPresent();
    }

    @Override
    public String updatePassword(UserDto user) {
        Optional<User> findUser = userRepository.findByUsername(user.getUsername());
        findUser.ifPresent(i -> i.setPassword(user.getPassword()));
        return findUser.isPresent() ? "success" : "failure";
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
