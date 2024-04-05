package com.erichgamma.api.article.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.erichgamma.api.article.model.Article;
import com.erichgamma.api.article.model.ArticleDto;
import com.erichgamma.api.article.repository.ArticleRepository;
import com.erichgamma.api.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    @Override
    public ArticleDto save(ArticleDto articleDto) {
        return 
        entityToDto(
            articleRepository
            .save(
                Article
                .builder()
                .id(articleDto.getId())
                .title(articleDto.getTitle())
                .content(articleDto.getContent())
                .writer(
                    userRepository
                    .findByUsername(articleDto.getWriter())
                    .get()
                )
                .build()
            )
        );
    }

    @Override
    public String insertMany() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'insertMany'");
    }

    @Override
    public String delete(ArticleDto articleDto) { 
        Optional<ArticleDto> findArtlcle = findById(articleDto.getId());
        findArtlcle.ifPresent(i -> articleRepository.deleteById(i.getId()));
        return findArtlcle.isPresent() ? "SUCCESS" : "FAILURE";
    }

    @Override
    public List<ArticleDto> findAll() {
        return
        articleRepository
        .findAll()
        .stream()
        .map(i -> entityToDto(i))
        .toList();
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        return
        articleRepository
        .findById(id)
        .map(i -> entityToDto(i));
    }

    @Override
    public String count() {
        return String.valueOf(articleRepository.count());
    }

    @Override
    public Boolean existsById(Long id) {
        return articleRepository.findById(id).isPresent();
    }

    @Override
    public String deleteAll() {
        articleRepository.deleteAll();
        return "SUCCESS";
    }
}
