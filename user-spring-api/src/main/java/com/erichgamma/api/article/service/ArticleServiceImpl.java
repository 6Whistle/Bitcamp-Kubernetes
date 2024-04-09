package com.erichgamma.api.article.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;

import com.erichgamma.api.article.model.Article;
import com.erichgamma.api.article.model.ArticleDto;
import com.erichgamma.api.article.repository.ArticleRepository;
import com.erichgamma.api.common.component.MessengerVo;
import com.erichgamma.api.user.model.User;
import com.erichgamma.api.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    // -------------------------- Command -------------------------- 

    @Override
    public MessengerVo save(ArticleDto articleDto) {
        return MessengerVo.builder()
        .message(
            Stream.of(articleDto)
            .filter(i -> userRepository.existsByUsername(i.getWriter()))
            .peek(i -> articleRepository.save(
                Article
                .builder()
                .title(i.getTitle())
                .content(i.getContent())
                .writer(findWriterIdByUsername(i.getWriter()).get())
                .build())
            )
            .map(i -> "SUCCESS")
            .findAny()
            .orElseGet(() -> "FAILURE")
        )
        .build();

    }

    @Override
    public MessengerVo modelify(ArticleDto articleDto) {
        return MessengerVo.builder()
        .message(
            articleRepository.findById(articleDto.getId())
            .stream()
            .peek(i -> i.setTitle(articleDto.getTitle()))
            .peek(i -> i.setContent(articleDto.getContent()))
            .peek(i -> articleRepository.save(i))
            .map(i -> "SUCCESS")
            .findAny()
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
            .filter(i -> existsById(i))
            .peek(i -> articleRepository.deleteById(i))
            .map(i -> "SUCCESS")
            .findAny()
            .orElseGet(() -> "FAILURE")
        )
        .build();
    }

    @Override
    public MessengerVo deleteAll() {
        articleRepository.deleteAll();
        return MessengerVo.builder()
        .message("SUCCESS")
        .build();
    }

    // -------------------------- Query -------------------------- 

    @Override
    public List<ArticleDto> findAll() {
        return articleRepository.findAll()
        .stream()
        .map(i -> entityToDto(i))
        .toList();
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        return articleRepository.findById(id)
        .map(i -> entityToDto(i));
    }

    @Override
    public Long count() {
        return articleRepository.count();
    }

    @Override
    public Boolean existsById(Long id) {
        return articleRepository.existsById(id);
    }

    @Override
    public Optional<User> findWriterIdByUsername(String username){
        return userRepository.findByUsername(username);
    }
}
