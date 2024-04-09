package com.erichgamma.api.board.model;

import com.erichgamma.api.article.model.Article;
import com.erichgamma.api.common.model.BaseEntity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@ToString(exclude = "id")
@Entity(name = "boards")
public class Board extends BaseEntity {

    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String boardType;

    @OneToMany(mappedBy = "board")
    private List<Article> articles;    
}
